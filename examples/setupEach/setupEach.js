const benchIt = require('../../')
const data = require('./data.json')
benchIt({
	'map': {
		setupEach: () => {
			const m = new Map()
			for (let x of data) {
				m.set(x.id, x)
			}
			return m
		},
		fn: m => {
			for (let x of m) {
				m.delete(x)
			}
		},
	},
	'object': {
		setupEach: () => {
			const o = {}
			for (let x of data) {
				o[x.id] = x
			}
			return o
		},
		fn: o => {
			for (let x in o) {
				delete o[x]
			}
		}
	},
})