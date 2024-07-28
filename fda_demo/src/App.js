import React, { useState, useEffect } from 'react';
import { fetchTop100CryptoData } from './api';

function App() {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const getTop100Crypto = async () => {
            const data = await fetchTop100CryptoData();
            console.log(data);
            setCryptoData(data.data);
        };

        getTop100Crypto();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Top 100 Cryptocurrencies</h1>
                {cryptoData.length > 0 ? (
                    <ul>
                        {cryptoData.map((crypto) => (
                            <li key={crypto.uuid}>
                                {crypto.name}: ${crypto.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </header>
        </div>
    );
}

export default App;
