// src/crypto.ts
import { getCachedData, setCachedData } from "./cache";
import { Coin, CryptoData } from "./types/crypto_types";

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

/**
 * Searches for coins by symbol and returns a list of matching coins.
 * If cached data is available, it returns the cached data instead of making a new request.
 * 
 * @param symbol The symbol of the coin to search for.
 * @returns A promise that resolves to a list of matching coins.
 */
const searchCoins = async (symbol: string): Promise<Coin[]> => {
	const cacheKey = `search_suggestions_${symbol}`;
	const cachedData = getCachedData<Coin[]>(cacheKey);
	if (cachedData) return cachedData;

	const url = `${BASE_URL}/search-suggestions?query=${symbol}&referenceCurrencyUuid=yhjMzLPhuIDl`;

	try {
		const response = await fetch(url, {
			method: "GET",
			headers: headers,
		});
		const data = (await response.json()).data.coins;

		setCachedData(cacheKey, data);
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error(String(error));
		}
	}
};

/**
 * Retrieves the real-time data for a specific coin by ID.
 * If cached data is available, it returns the cached data instead of making a new request.
 * 
 * @param coinId The ID of the coin to retrieve data for.
 * @returns A promise that resolves to the coin data.
 */
const getCoinData = async (coinId: string): Promise<CryptoData> => {
	const cacheKey = `crypto_${coinId}`;
	const cachedData = getCachedData<CryptoData>(cacheKey);
	if (cachedData) return cachedData;

	const url = `${BASE_URL}/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;

	try {
		const response = await fetch(url, {
			method: "GET",
			headers: headers,
		});
		const data = await response.json();

		setCachedData(cacheKey, data);
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error(String(error));
		}
	}
};

/**
 * Retrieves the real-time data for the top 100 crypto coins based on their market value.
 * If cached data is available, it returns the cached data instead of making a new request.
 * 
 * @returns A promise that resolves to the data for the top 100 crypto coins.
 */
const getTop100CryptoCoinsData = async (): Promise<CryptoData> => {
	const cacheKey = "crypto_top_100";
	const cachedData = getCachedData<CryptoData>(cacheKey);
	if (cachedData) return cachedData;

	const url = `${BASE_URL}/coins?offset=0&orderBy=marketCap&limit=100&orderDirection=desc&timePeriod=24h&tiers%5B%5D=1&tiers%5B%5D=2`;

	try {
		const response = await fetch(url, {
			method: "GET",
			headers: headers,
		});
		const data = await response.json();

		setCachedData(cacheKey, data);
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error(String(error));
		}
	}
};

export { getCoinData, getTop100CryptoCoinsData, searchCoins };
