# Async init

The library helps to initialize async singleton.
If multiple requests arrive before singleton initialization is finished, then they will be queued.
Once singleton has been initialized the queue will be processed in the FIFO.

## Usage

`$ npm i @ert78gb/async-init`

```javascript
// singleton.js
const asyncInit = require('@ert78gb/async-init')
const asyncIniter = asyncInit();

async function asyncInstanceCreator() {
  // implementation
  // It will call only once
}

function getSingleton() {
  return asyncIniter(asyncInstanceCreator)
}

module.exports = getSingleton

// usage.js
const getSingleton = require('./singleton.js')

const [instance1, instance2] = Promise.all([
  getSingleton(),
  getSingleton()
])

console.log(instance1 === instance2) // true
```
