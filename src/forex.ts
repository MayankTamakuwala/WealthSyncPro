// src/forex.ts
import { getCachedData, setCachedData } from "./cache";
import { ExchangeRate, CURRENCIES } from "./types/forex_types";

const headers: HeadersInit = {
	"User-Agent":
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:127.0) Gecko/20100101 Firefox/127.0",
	Accept: "*/*",
	"Accept-Language": "en-US,en;q=0.5",
	"Accept-Encoding": "gzip, deflate, br, zstd",
	Referer: "https://www.xe.com/currencycharts/",
	authorization: "Basic bG9kZXN0YXI6cHVnc25heA==",
	Connection: "keep-alive",
	Cookie:
		"homepage-test=oldCore; amp_470887=fGWDWp-CKGMxAEjPWSmRyw...1i3qps6mo.1i3qps6mt.1.1.2; _ga_KRKJ3PLCP1=GS1.1.1722107698.1.0.1722107717.41.0.0; _ga=GA1.2.1217575113.1722107698; _gid=GA1.2.251026674.1722107698; _dc_gtm_UA-183969431-1=1; IR_gbd=xe.com; IR_12610=1722107698129%7C0%7C1722107698129%7C%7C; _uetsid=83d3b3604c4c11ef8667a9ae9647c7c3; _uetvid=83d39f704c4c11efbca13ba42c15e507; _fbp=fb.1.1722107698494.3491396618848408; _y2=1%3AeyJjIjp7IjI0NzE0NSI6MjQ4MTIzNzEzfX0%3D%3ALTEzMDM1OTEwMDg%3D%3A2; _yi=1%3AeyJsaSI6eyJjIjowLCJjb2wiOjMxMjIwODM5MTksImNwZyI6MjQ3MTQ0LCJjcGkiOjk2Nzg0NjAxNDkwLCJzYyI6MSwidHMiOjE3MjIxMDc3MTMxODB9LCJzZSI6eyJjIjoxLCJlYyI6MTUsImxhIjoxNzIyMTA3NzE2MjM1LCJwIjoxLCJzYyI6MTd9LCJ1Ijp7ImlkIjoiYWVkZDlhOGYtNTEyZi00Njc2LTkzMWQtNzVkYjYzNmUxOTlhIiwiZmwiOiIwIn19%3ALTE0MzE4NDYxMTI%3D%3A2",
	"Sec-Fetch-Dest": "empty",
	"Sec-Fetch-Mode": "cors",
	"Sec-Fetch-Site": "same-origin",
};

/**
 * Retrieves the exchange rate for a given currency pair from XE.com API.
 * If cached data is available, it returns the cached data instead of making a new request.
 * 
 * @param from_currency The currency to convert from.
 * @param to_currency The currency to convert to.
 * @returns A promise that resolves to the exchange rate object.
 */
const getExchangeRates = async (
	from_currency: string,
	to_currency: string
): Promise<ExchangeRate> => {

	if (CURRENCIES.indexOf(from_currency) == -1) {
        throw Error(`404 Not Found: 'from_currency' is not available. These are the currencies you can choose from\n\n${CURRENCIES.toString()}`);
    } else if (CURRENCIES.indexOf(to_currency) == -1) {
        throw Error(`404 Not Found: 'to_currency' is not available. These are the currencies you can choose from\n\n${CURRENCIES.toString()}`);
    }

	const pair = `exchange_${from_currency}_${to_currency}`;
	const cachedData = getCachedData<ExchangeRate>(pair);
	if (cachedData) return cachedData;

	const url = `https://www.xe.com/api/protected/live-currency-rates?currencyPairs=${from_currency}/${to_currency}`;

	try {
		const response = await fetch(url, {
			headers: headers,
		});
		const data = (await response.json())[0];

		setCachedData(pair, data);
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error(String(error));
		}
	}
};

export { getExchangeRates };
