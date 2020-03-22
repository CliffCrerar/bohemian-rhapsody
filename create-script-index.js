Object.keys(JSON.parse(require('fs').readFileSync('./package.json').toString()).scripts).forEach(key => require('fs').appendFileSync('script-index', key + '\n', 'utf8'))
