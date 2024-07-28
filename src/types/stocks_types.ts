export type StockData = {
	chart: {
		result: [
			{
				meta: {
					currency: string;
					symbol: string;
					exchangeName: string;
					fullExchangeName: string;
					instrumentType: string;
					firstTradeDate: number;
					regularMarketTime: number;
					hasPrePostMarketData: boolean;
					gmtoffset: number;
					timezone: string;
					exchangeTimezoneName: string;
					regularMarketPrice: number;
					fiftyTwoWeekHigh: number;
					fiftyTwoWeekLow: number;
					regularMarketDayHigh: number;
					regularMarketDayLow: number;
					regularMarketVolume: number;
					chartPreviousClose: number;
					previousClose: number;
					scale: number;
					priceHint: number;
					currentTradingPeriod: {
						pre: {
							timezone: string;
							start: number;
							end: number;
							gmtoffset: number;
						};
						regular: {
							timezone: string;
							start: number;
							end: number;
							gmtoffset: number;
						};
						post: {
							timezone: string;
							start: number;
							end: number;
							gmtoffset: number;
						};
					};
					tradingPeriods: {
						pre: [
							[
								{
                                    timezone: string;
                                    start: number;
                                    end: number;
                                    gmtoffset: number;
                                }
							]
						];
						post: [
							[
								{
                                    timezone: string;
                                    start: number;
                                    end: number;
                                    gmtoffset: number;
                                }
							]
						];
						regular: [
							[
								{
                                    timezone: string;
                                    start: number;
                                    end: number;
                                    gmtoffset: number;
                                }
							]
						];
					};
					dataGranularity: string;
					range: string;
					validRanges: Array<string>;
				};
				timestamp: Array<number>;
				indicators: {
					quote: [
						{
							close: Array<number>;
							volume: Array<number>;
							low: Array<number>;
							high: Array<number>;
							open: Array<number>;
						}
					];
				};
			}
		];
		error: null;
	};
};
