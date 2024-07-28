export type ExchangeRate = {
	from: string;
	to: string;
	rate: number;
	trend: "down" | "up";
	rateChange: number;
	percentageChange: number;
}

export const CURRENCIES = ["ADA","AED","AFN","ALL","AMD","ANG","AOA","ARS","ATS","AUD","AWG","AZM","AZN","BAM","BBD","BCH","BDT","BEF","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CUC","CUP","CVE","CYP","CZK","DEM","DJF","DKK","DOGE","DOP","DOT","DZD","EEK","EGP","ERN","ESP","ETB","ETH","EUR","FIM","FJD","FKP","FRF","GBP","GEL","GGP","GHC","GHS","GIP","GMD","GNF","GRD","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","IEP","ILS","IMP","INR","IQD","IRR","ISK","ITL","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LINK","LKR","LRD","LSL","LTC","LTL","LUF","LUNA","LVL","LYD","MAD","MDL","MGA","MGF","MKD","MMK","MNT","MOP","MRO","MRU","MTL","MUR","MVR","MWK","MXN","MXV","MYR","MZM","MZN","NAD","NGN","NIO","NLG","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PTE","PYG","QAR","ROL","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDD","SDG","SEK","SGD","SHP","SIT","SKK","SLE","SLL","SOS","SPL","SRD","SRG","STD","STN","SVC","SYP","SZL","THB","TJS","TMM","TMT","TND","TOP","TRL","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UNI","USD","UYU","UZS","VAL","VEB","VED","VEF","VES","VND","VUV","WST","XAF","XAG","XAU","XBT","XCD","XDR","XLM","XOF","XPD","XPF","XPT","XRP","YER","ZAR","ZMK","ZMW","ZWD","ZWG","ZWL",];
