// src/stocks.ts
import { getCachedData, setCachedData } from "./cache";

const headers: HeadersInit = {
	Accept: "*/*",
	"Accept-Encoding": "gzip, deflate, br",
	"Accept-Language": "en-US,en;q=0.9",
	Connection: "keep-alive",
	Cookie:
		"axids=gam=y-USdS87RE2uJGi.N0VuHGUcS4JNHLDKcY~A&dv360=eS1kd0RyVkYxRTJ1SGFaR3FtN25wY0Jld0JuZ3VNMVNSRn5B&ydsp=y-1muHCMZE2uIKr54BV8upK_dslERPGchO~A&tbla=y-esjZMn1E2uLPpDNzgr_K5KLrJQBSNjce~A; tbla_id=16799d63-e9f4-46a8-8524-f84477af5f14-tuctd9ee196; PRF=t%3DTSLA; cmp=t=1722113045&j=0&u=1YNN; gpp=DBAA; gpp_sid=-1; A1=d=AQABBBNcpWYCEA7oK21_A0kuIZlVbDBF6ooFEgEBAQGtpmavZtwx0iMA_eMAAA&S=AQAAAtl8oGAwMwMDtRLyDalqASw; A1S=d=AQABBBNcpWYCEA7oK21_A0kuIZlVbDBF6ooFEgEBAQGtpmavZtwx0iMA_eMAAA&S=AQAAAtl8oGAwMwMDtRLyDalqASw; A3=d=AQABBBNcpWYCEA7oK21_A0kuIZlVbDBF6ooFEgEBAQGtpmavZtwx0iMA_eMAAA&S=AQAAAtl8oGAwMwMDtRLyDalqASw",
	Host: "query1.finance.yahoo.com",
	Origin: "https://finance.yahoo.com",
	"Sec-Fetch-Dest": "empty",
	"Sec-Fetch-Mode": "cors",
	"Sec-Fetch-Site": "same-site",
	"User-Agent":
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
};

interface StockData {
	// Define the structure of stock data
	// Add properties as needed
}

const fetchStockData = async (symbol: string): Promise<StockData> => {
	const cachedData = getCachedData<StockData>(symbol);
	if (cachedData) return cachedData;

	const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1m&includePrePost=true&events=div%7Csplit%7Cearn&lang=en-US&region=US`;
	const response = await fetch(url, {
		headers: {
			...headers,
			Referer: `https://finance.yahoo.com/quote/${symbol}/`,
		},
	});
	const data = await response.json();

	setCachedData(symbol, data);
	return data;
};

export { fetchStockData };
