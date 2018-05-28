const benchIt = require('../')
const seedCount = 1000

benchIt({
	'map': () => {
		const m = new Map()
		let p = undefined
		for (let i = 0; i <= seedCount; i++) {
			m.set(i, { id: i, parentId: p })
			p = i
		}
		return m
	},
	'object': () => {
		const m = {}
		let p = undefined
		for (let i = 0; i <= seedCount; i++) {
			m[i] = { id: i, parentId: p }
			p = i
		}
		return m
	}
})
