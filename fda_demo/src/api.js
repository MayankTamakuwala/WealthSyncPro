const fetchCryptoData = async (coinId) => {
    const response = await fetch('http://localhost:4000/api/crypto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coin_id: coinId }),
    });
    return await response.json();
};

const searchCrypto = async (query) => {
    const response = await fetch('http://localhost:4000/api/crypto/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });
    return await response.json();
};

const fetchTop100CryptoData = async () => {
    const response = await fetch('http://localhost:4000/api/crypto/top100');
    return await response.json();
};

const fetchExchangeRates = async (from, to) => {
    const response = await fetch('http://localhost:4000/api/exchange');
    return await response.json();
};

const fetchStockData = async (symbol) => {
    const response = await fetch('http://localhost:4000/api/stockexchange', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol }),
    });
    return await response.json();
};

export { fetchCryptoData, searchCrypto, fetchTop100CryptoData, fetchExchangeRates, fetchStockData };
