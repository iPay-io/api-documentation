import React, { useState } from 'react';
import styles from './ApiPlayground.module.css';

const ApiPlayground = () => {
  const [apiKey, setApiKey] = useState('');
  const [customId, setCustomId] = useState('');
  const [onRampProvider, setOnRampProvider] = useState('provider1');
  const [defaultFiatAmount, setDefaultFiatAmount] = useState('');
  const [defaultFiatCurrency, setDefaultFiatCurrency] = useState('USD');
  const [colorCode, setColorCode] = useState('');
  const [screenTitle, setScreenTitle] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [constructedUrl, setConstructedUrl] = useState('');

  const constructUrl = () => {
    const baseUrl = 'https://us-central1-ipay.cloudfunctions.net/app/api/invoice_external?';
    const params = {
      apiKey: apiKey || 'jBQyeHEPJUhj1pRP7KPlShkw5Oc99g23', // Default test key
      customId: customId || '38UUAR23DVUA', // Default test ID
      onRampProvider: onRampProvider || 'provider1',
      ...(defaultFiatAmount && { defaultFiatAmount }),
      ...(defaultFiatCurrency && { defaultFiatCurrency }),
      ...(colorCode && { colorCode }),
      ...(screenTitle && { screenTitle }),
    };
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    return `${baseUrl}${queryString}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);

    const url = constructUrl();
    setConstructedUrl(url);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.playground}>
      <h3>Try the iPay REST API</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="apiKey">API Key (required)</label>
          <input
            id="apiKey"
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API Key (or use default)"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="customId">Custom ID (required)</label>
          <input
            id="customId"
            type="text"
            value={customId}
            onChange={(e) => setCustomId(e.target.value)}
            placeholder="Enter Custom ID (or use default)"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="onRampProvider">On-Ramp Provider (required)</label>
          <input
            id="onRampProvider"
            type="text"
            value={onRampProvider}
            onChange={(e) => setOnRampProvider(e.target.value)}
            placeholder="provider1"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="defaultFiatAmount">Default Fiat Amount (optional)</label>
          <input
            id="defaultFiatAmount"
            type="text"
            value={defaultFiatAmount}
            onChange={(e) => setDefaultFiatAmount(e.target.value)}
            placeholder="e.g., 108"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="defaultFiatCurrency">Default Fiat Currency (optional)</label>
          <input
            id="defaultFiatCurrency"
            type="text"
            value={defaultFiatCurrency}
            onChange={(e) => setDefaultFiatCurrency(e.target.value)}
            placeholder="e.g., USD"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="colorCode">Color Code (optional)</label>
          <input
            id="colorCode"
            type="text"
            value={colorCode}
            onChange={(e) => setColorCode(e.target.value)}
            placeholder="e.g., D000F2"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="screenTitle">Screen Title (optional)</label>
          <input
            id="screenTitle"
            type="text"
            value={screenTitle}
            onChange={(e) => setScreenTitle(e.target.value)}
            placeholder="e.g., DepositTest"
          />
        </div>
        <button type="submit">Test API</button>
      </form>
      {constructedUrl && (
        <div className={styles.url}>
          <h4>Constructed URL:</h4>
          <pre>{constructedUrl}</pre>
        </div>
      )}
      {response && (
        <div className={styles.response}>
          <h4>Response:</h4>
          <pre>{response}</pre>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <h4>Error:</h4>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiPlayground;