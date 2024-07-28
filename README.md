# WealthSync Pro

Welcome to WealthSync Pro, an npm package designed for seamless finance aggregation. Say goodbye to the challenges of managing API keys, wading through extensive documentation, and dealing with endless subscriptions. WealthSync Pro provides unlimited, streamlined, and hassle-free access to real-time financial data without the need for API keys.

## Features

### Cryptocurrency Data

- Real-time Data: Access real-time information on the top 100 cryptocurrencies based on market value.
- Detailed Information: Retrieve detailed data for specific cryptocurrencies via symbol input, including the latest data needed for accurate real-time graphics.
- Source: Reverse-engineered from the Coinrank API.

### Foreign Exchange Data

- Real-time Conversion Rates: Get real-time conversion rates between selected countries.
- Source: Reverse-engineered from the XE API.

### Stock Exchange Data

- Real-time Stock Information: Retrieve real-time information about stocks using stock acronyms. Get data such as the highest and lowest bids, closing market price, and the latest data needed for accurate real-time graphics.
- Source: Reverse-engineered from the Yahoo Finance API.

## Upcoming Features

### Enhanced Cryptocurrency and Stock Functions

- Provide more comprehensive information for each cryptocurrency and stock, such as the current allotted amount of a specific stock or cryptocurrency.

### Improved Foreign Exchange Features

- Allow users to specify amounts for conversions beyond specific country exchanges.

### Financial Calculators and Advising

- Add tools for personal finance management and AI advising to further enrich the package.

## Installation

Install WealthSync Pro using npm:
```
npm install wealthsync-pro
```

## Usage

Here’s how to use WealthSync Pro to access different types of financial data:

### Import
```
const { crypto, forex, stocks } = require('wealthsync-pro');
```

### Cryptocurrency Data
```
// Get real-time data on top 100 cryptocurrencies
const top100 = async() => {
    await crypto.getTop100CryptoCoinsData()
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

// Get detailed information for a specific cryptocurrency
const info = async() => { 
    await crypto searchCoins('BTC')
        .then(coins => {
            const coinId = coins[0].uuid;
            return getCoinData(coinId);
        })
        .then(data => console.log(data))
        .catch(err => console.error(err));
}
```

### Foreign Exchange Data
```
// Get real-time conversion rates between selected countries
const rates = async() => {
    forex.getExchangeRates('USD', 'EUR')
        .then(data => console.log(data))
        .catch(err => console.error(err));
}
```

### Stock Exchange Data
```
// Get real-time information about a specific stock
const stockdata = async() => {
    stocks.getStockData('AAPL')
        .then(data => console.log(data))
        .catch(err => console.error(err));
}
```

## Disclaimer

This package reverse engineers proprietary finance APIs. Use it at your own risk. The authors are not responsible for any misuse or legal issues that may arise from using this package.


Thank you for using WealthSync Pro! We hope you find it as exciting and useful as we do.