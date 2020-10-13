import hash from 'hash-sum'
import { parseComponent, SFCDescriptor } from 'sfc-compiler$'
import LRUCache from 'lru-cache'

const cache = new LRUCache(100)

export default function parseVue(source: string, filename: string): SFCDescriptor {
	const cacheKey = hash(filename + source)
	// source-map cache busting for hot-reloadded modules
	let output = cache.get(cacheKey)
	if (output) {
		return output
	}
	output = parseComponent(source)
	cache.set(cacheKey, output)
	return output
}
