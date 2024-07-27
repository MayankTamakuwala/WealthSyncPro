export type Coin = {
	uuid: string;
	iconUrl: string;
	name: string;
	symbol: string;
	price: string;
}

export type CryptoData = {
	status: string;
	data: {
		coin: {
			uuid: string;
			symbol: string;
			name: string;
			description: string;
			color: string;
			iconUrl: string;
			websiteUrl: string;
			links: Array<{
				name: string;
				url: string;
				type: string;
			}>;
			supply: {
				confirmed: boolean;
				supplyAt: number;
				max: null;
				total: string;
				circulating: string;
			};
			numberOfMarkets: number;
			numberOfExchanges: number;
			"24hVolume": string;
			marketCap: string;
			fullyDilutedMarketCap: string;
			price: string;
			btcPrice: string;
			priceAt: number;
			change: string;
			rank: number;
			sparkline: Array<string | null>;
			allTimeHigh: {
				price: string;
				timestamp: number;
			};
			coinrankingUrl: string;
			tier: number;
			lowVolume: boolean;
			listedAt: number;
			hasContent: boolean;
			notices: null;
			contractAddresses: Array<string>;
			tags: Array<string>;
		};
	};
}
