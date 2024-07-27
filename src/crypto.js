// src/crypto.js
const { getCachedData, setCachedData } = require('./cache');

const BASE_URL = 'https://coinranking.com/api/v2';

const headers = {
    'Referer': 'https://coinranking.com/',
    'Accept': 'application/json, text/plain, */*' ,
    'Accept-Encoding': 'gzip, deflate, br' ,
    'Accept-Language': 'en-US,en;q=0.9' ,
    'Connection': 'keep-alive' ,
    // 'Cookie': 'coinranking_session_token=F-19_oFc-BmTdZqP_TiXYA; FCNEC=%5B%5B%22AKsRol-adguQ7KbQUHtPhxU2MR_HZtSJNf_d-u5VnfstJD_VF3TGlL-go8wCYo7CuX7-POjoz-kEkMqB7xnN5As6WWluJvmPfFYoBfh-VoeLil-HXx0cGN21TKXaz3XyqxCpqpWTRWvIKQrRGSwNyggHfmr22GqNMA%3D%3D%22%5D%5D; __eoi=ID=0f9a62fb07ecaf61:T=1722093678:RT=1722098814:S=AA-AfjayLWeMB8m4JFClcz08iHSP; __gads=ID=1575c1424b448b76:T=1722093678:RT=1722098814:S=ALNI_MY_Xesy77kJffIL_066Vzw6p2WHtA; __gpi=UID=00000eb7506b4022:T=1722093678:RT=1722098814:S=ALNI_MZ6BFowiMwVqIkvDkcJnt3yFkgeOw; coinranking_sticky_closed=closed' ,
    'Host': 'coinranking.com' ,
    'Sec-Fetch-Dest': 'empty' ,
    'Sec-Fetch-Mode': 'cors' ,
    'Sec-Fetch-Site': 'same-origin' ,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15'
}

const searchCoins = async (symbol) => {
    const cacheKey = `search_suggestions_${symbol}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    const url = `${BASE_URL}/search-suggestions?query=${symbol}&referenceCurrencyUuid=yhjMzLPhuIDl`;
    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    });
    const data = (await response.json()).data.coins;

    setCachedData(cacheKey, data);
    return data;
};

const fetchCryptoData = async (coinId) => {
    const cacheKey = `crypto_${coinId}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    const url = `${BASE_URL}/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    });
    const data = await response.json();

    setCachedData(cacheKey, data);
    return data;
};

const fetchTop100CryptoData = async () => {
    const cacheKey = 'crypto_top_100';
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    const url = `${BASE_URL}/coins?offset=0&orderBy=marketCap&limit=100&orderDirection=desc&timePeriod=24h&tiers%5B%5D=1&tiers%5B%5D=2`;
    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    });
    const data = await response.json();

    setCachedData(cacheKey, data);
    return data;
};

module.exports = { fetchCryptoData, fetchTop100CryptoData, searchCoins };