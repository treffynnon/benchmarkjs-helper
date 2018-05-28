const benchIt = require('../')

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
