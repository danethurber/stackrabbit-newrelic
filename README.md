# Stackrabbit NewRelic

[![Circle CI](https://circleci.com/gh/danethurber/stackrabbit-newrelic.svg?style=shield)](https://circleci.com/gh/danethurber/stackrabbit-newrelic)

NewRelic middleware for stackrabbit

## Installation

```
npm install newrelic
npm install stackrabbit-newrelic
```

## Getting Started

```js
require('newrelic')

const stackrabbit = require('stackrabbit')
const newrelicMiddleware = require('stackrabbit-newrelic')

const listener = stackrabbit({
  ...
})

listener.use(newrelicMiddleware('some transaction name', 'optional newrelic group'))

listener.listen(function * () {
})

listener.connect()
```
