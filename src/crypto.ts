// src/crypto.ts
import { getCachedData, setCachedData } from "./cache";

const BASE_URL = "https://coinranking.com/api/v2";

const headers: HeadersInit = {
	Referer: "https://coinranking.com/",
	Accept: "application/json, text/plain, */*",
	"Accept-Encoding": "gzip, deflate, br",
	"Accept-Language": "en-US,en;q=0.9",
	Connection: "keep-alive",
	Host: "coinranking.com",
	"Sec-Fetch-Dest": "empty",
	"Sec-Fetch-Mode": "cors",
	"Sec-Fetch-Site": "same-origin",
	"User-Agent":
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
};

interface Coin {
	// Define the structure of a coin object
	// Add properties as needed
}

interface CryptoData {
	// Define the structure of crypto data
	// Add properties as needed
}

const searchCoins = async (symbol: string): Promise<Coin[]> => {
	const cacheKey = `search_suggestions_${symbol}`;
	const cachedData = getCachedData<Coin[]>(cacheKey);
	if (cachedData) return cachedData;

	const url = `${BASE_URL}/search-suggestions?query=${symbol}&referenceCurrencyUuid=yhjMzLPhuIDl`;
	const response = await fetch(url, {
		method: "GET",
		headers: headers,
	});
	const data = (await response.json()).data.coins;

	setCachedData(cacheKey, data);
	return data;
};

const fetchCryptoData = async (coinId: string): Promise<CryptoData> => {
	const cacheKey = `crypto_${coinId}`;
	const cachedData = getCachedData<CryptoData>(cacheKey);
	if (cachedData) return cachedData;

	const url = `${BASE_URL}/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
	const response = await fetch(url, {
		method: "GET",
		headers: headers,
	});
	const data = await response.json();

	setCachedData(cacheKey, data);
	return data;
};

const fetchTop100CryptoData = async (): Promise<CryptoData> => {
	const cacheKey = "crypto_top_100";
	const cachedData = getCachedData<CryptoData>(cacheKey);
	if (cachedData) return cachedData;

	const url = `${BASE_URL}/coins?offset=0&orderBy=marketCap&limit=100&orderDirection=desc&timePeriod=24h&tiers%5B%5D=1&tiers%5B%5D=2`;
	const response = await fetch(url, {
		method: "GET",
		headers: headers,
	});
	const data = await response.json();

	setCachedData(cacheKey, data);
	return data;
};

export { fetchCryptoData, fetchTop100CryptoData, searchCoins };
