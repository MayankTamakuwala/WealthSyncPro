// src/cache.ts
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 60 * 3 }); // Cache for 3 minutes

const getCachedData = <T>(key: string): T | undefined => cache.get(key);
const setCachedData = <T>(key: string, value: T): boolean =>
	cache.set(key, value);

export { getCachedData, setCachedData };
