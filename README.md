# Benchmark.js helper for node

## What it does

It is a very simple wrapper around benchmark.js and more specifically the `Benchmark.Suite` with the
following additional functionality.

* Adds support for pre run setup for each iteration of a test
* Uses `beautify-benchmark` to produce nicer output and status updates
* Throws on error halting the benchmark

## Installation

```shell
npm install --save-dev benchmarkjs-helper
```

## Usage

Pass an object containing the test functions you wish to `benchmarkjs-helper` and it will handle passing
them to benchmark.js and creating useful console output of the results. The keys are used as the name
for the test in the report that is created.

```javascript
const benchIt = require('benchmarkjs-helper')

benchIt({
	add: () => {
		return 1 + 1
	},
	subtract: () => {
		return 1 - 1
	},
	multiply: () => {
		return 1 * 1
	},
	divide: () => {
		return 1 / 1
	},
})
```

Run it from the command line/terminal:

```shell
node examples/simple.js
```

Outputting something like the following except it is colourised (colorized) for easier reading by
`beautify-benchmark`.

```
  4 tests completed.

  add      x 717,864,803 ops/sec ±1.87% (83 runs sampled)
  subtract x 721,117,181 ops/sec ±1.81% (82 runs sampled)
  multiply x 791,720,133 ops/sec ±0.65% (97 runs sampled)
  divide   x 757,457,709 ops/sec ±1.66% (85 runs sampled)
```

In this case multiply is the winner and would be highlighted in green.

### `setupEach()`

You can do some up front work to seed each function with its own data set without affecting the
benchmark. This is useful for tests like the one in `examples/setupEach/setupEach.js` where you only
want to test one aspect of a data structure (deletion) and not the initial creation. Your application
could be delete heavy.

To use this feature you would define the object passed to `benchmarkjs-helper` slightly differently
(it is important that setupEach is given a full JavaScript function and not an arrow function as
`this` is used internally):

```javascript
benchIt({
	add: {
		setupEach: () => {
			return [1, 1] // becomes x in `fn` below
		},
		fn: x => {
			return x[0] + x[1] // evaluates to 1 + 1
		},
	},
	multiply: {
		setupEach: () => {
			return [1, 1] // becomes x in `fn` below
		},
		fn: x => {
			return x[0] * x[1] // evaluates to 1 * 1
		},
	},
})
```

## Credits

Mostly this project does nothing and all the real work is done by:

* [benchmark.js](https://www.npmjs.com/package/benchmark)
* [beautify-benchmark](https://www.npmjs.com/package/beautify-benchmark)

## Licence

Apache 2.0
