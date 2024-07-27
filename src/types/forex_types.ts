export type ExchangeRate = {
	from: string;
	to: string;
	rate: number;
	trend: "down" | "up";
	rateChange: number;
	percentageChange: number;
}
