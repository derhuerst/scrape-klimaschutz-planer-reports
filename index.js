import {fetch as _fetch} from 'cross-fetch'
import {parse as parseContentType} from 'content-type'
import createThrottle from 'p-throttle'

const pkg = require('./package.json')

const ENDPOINT = 'https://www.klimaschutz-planer.de/ajax.php'
const USER_AGENT = pkg.homepage

const rawFetch = async (query, expectedContentType = 'application/json') => {
	const url = new URL(ENDPOINT)
	url.search = new URLSearchParams(query)

	const res = await _fetch(url.href, {
		mode: 'cors',
		redirect: 'follow',
		headers: {
			'User-Agent': USER_AGENT,
			'Accept': 'application/json',
		},
	})
	console.error(url.href, res.status)
	if (!res.ok) {
		const err = new Error(res.statusText)
		err.query = query
		err.statusCode = res.status
		try {
			err.body = await res.text()
		} catch (err) {}
		err.res = res
		throw err
	}

	const cType = res.headers.has('content-type') && parseContentType(res.headers.get('content-type'))
	if (cType && cType.type !== expectedContentType) {
		const err = new Error(`unexpeted content-type ${cType.type}`)
		err.query = query
		err.statusCode = res.status
		try {
			err.body = await res.text()
		} catch (err) {}
		err.res = res
		throw err
	}

	return await (expectedContentType === 'application/json' ? res.json() : res.text())
}

const throttle = createThrottle({
	limit: 50, // find proper limit
	interval: 60 * 1000,
})
const throttledFetch = throttle(rawFetch)

const fetchMunicipalities = async (year) => {
	const reports = await throttledFetch({
		action: 'thgMap',
		year: year + '',
		onlyShowCached: '1', // todo: what does this do?
	})

	// Gemeindeschlüssel (community/municipality ID/key) -> municipality
	const municipalities = new Map()
	for (const [gemeindeschlüssel, rawReport] of Object.entries(reports)) {
		// todo: parse report
		const report = rawReport
		// todo: can there be more than one report per gemeindeschlüssel?
		municipalities.set(gemeindeschlüssel, report)
	}

	return municipalities
}

export {
	fetchMunicipalities,
	// todo
}
