// src/cache.js
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 * 3 }); // Cache for 3 minutes

const getCachedData = (key) => cache.get(key);
const setCachedData = (key, value) => cache.set(key, value);

module.exports = { getCachedData, setCachedData };