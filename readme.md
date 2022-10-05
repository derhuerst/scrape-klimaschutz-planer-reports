# scrape-klimaschutz-planer-reports

**Scrape greenhouse gas emission reports of German municipalities from klimaschutz-planer.de.**

[![npm version](https://img.shields.io/npm/v/scrape-klimaschutz-planer-reports.svg)](https://www.npmjs.com/package/scrape-klimaschutz-planer-reports)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/scrape-klimaschutz-planer-reports.svg)
![minimum Node.js version](https://img.shields.io/node/v/scrape-klimaschutz-planer-reports.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installation

```shell
npm install derhuerst/scrape-klimaschutz-planer-reports
```


## Usage

```js
import {fetchMunicipalities} from 'scrape-klimaschutz-planer-reports'

const year = 2015
await fetchMunicipalities(year)
```

```js
Map(1594) {
	'053340002002' => {
		communeKey: '053340002002',
		communeName: 'Aachen, Stadt',
		year: null,
		relationId: null,
		logo: null,
		einwohner: -1,
		haushalte: -1,
		thgVK: -1,
		thgST: -1,
		thgHH: -1,
		targets: [],
		pinLocations: [ [Array] ],
		hasReport: false,
		isBundle: false,
		bundleCommunes: [ '053340002002' ],
		fromCache: true,
		reportsConfidential: false
	},
	// …
	'073310003003' => {
		communeKey: '073310003003',
		communeName: 'Alzey, Stadt',
		year: 2015,
		relationId: null,
		logo: null,
		einwohner: 17826,
		haushalte: 7860,
		thgVK: 75474.236237466,
		thgST: 132180.261983461,
		thgHH: 55533.31376647953,
		targets: [],
		pinLocations: [
			[49.745739919289356, 8.097031526903558],
		],
		hasReport: true,
		isBundle: false,
		bundleCommunes: [
			'073310003003',
		],
		fromCache: true,
		reportsConfidential: false,
	},
	// …
}
```


## Contributing

If you have a question or need support using `scrape-klimaschutz-planer-reports`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/scrape-klimaschutz-planer-reports/issues).
