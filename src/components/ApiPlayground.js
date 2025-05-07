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
  const [constructedUrl, setConstructedUrl] = useState('');

  const constructUrl = () => {
    const baseUrl = 'https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?';
    const params = {
      apiKey: apiKey,
      customId: customId,
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

    const url = constructUrl();
    setConstructedUrl(url);

    try {
      const res = await fetch(url, { mode: 'cors' });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      // Error is not displayed
    }
  };

  // Ensure state variables are strings before calling trim()
  const isFormValid = (typeof apiKey === 'string' && apiKey.trim() !== '') &&
                     (typeof customId === 'string' && customId.trim() !== '') &&
                     (typeof onRampProvider === 'string' && onRampProvider.trim() !== '');

  return (
    <div className={styles.playground}>
      <h3>Create your REST API</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="apiKey">API Key</label>
          <input
            id="apiKey"
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API Key"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="customId">Custom ID</label>
          <input
            id="customId"
            type="text"
            value={customId}
            onChange={(e) => setCustomId(e.target.value)}
            placeholder="Enter Custom ID"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="onRampProvider">On-Ramp Provider</label>
          <input
            id="onRampProvider"
            type="text"
            value={onRampProvider}
            onChange={(e) => setOnRampProvider(e.target.value)}
            placeholder="e.g., provider1"
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
        <button type="submit" disabled={!isFormValid}>Create</button>
      </form>
      {constructedUrl && (
        <div className={styles.url}>
          <h4>Constructed URL:</h4>
          <pre>{constructedUrl}</pre>
          <div className={styles.buttonContainer}>
            <button onClick={() => navigator.clipboard.writeText(constructedUrl)}>Copy</button>
            <button onClick={() => window.open(constructedUrl, '_blank')}>Test</button>
          </div>
        </div>
      )}
      {response && (
        <div className={styles.response}>
          <h4>Response:</h4>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiPlayground;