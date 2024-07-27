// const express = require('express');

const stocks = require('./stocks');
const crypto = require('./crypto');
const forex = require('./forex');

// const app = express();
// app.use(express.json());
// const PORT = process.env.PORT || 4000;


// app.get('/api/exchange', async (req, res) => {
//     try {
//         const response = await forex.getExchangeRates("USD", "EUR")
//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// });

// app.post('/api/stockexchange', async (req, res) => {
//     const {symbol} = req.body
//     try {
//         const response = await stocks.fetchStockData(symbol)
//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// });

// app.get('/api/crypto', async (req, res) => {
//     try {
//         const response = await crypto.fetchCryptoData()
//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// });

// app.get('/api/search', async (req, res) => {
//     try {
//         const response = await crypto.searchCoins(req.body.query)
//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// });
//
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = {
    stocks,
    crypto,
    forex
};