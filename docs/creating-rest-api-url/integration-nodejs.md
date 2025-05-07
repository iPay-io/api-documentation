---
title: Node.js Integration
description: Guide to using a webhook secret token for verifying iPay payment notifications.
keywords: [iPay, API documentation, high-risk, psp, security token, webhook, callback verification, IPN, secret token, authentication, security]
sidebar_position: 5
---

# iPay API Integration - Node.js (Express)

To integrate iPay's payment gateway into your Node.js-based forex CRM platform using Express, follow these steps to enable on-ramp cryptocurrency deposits.

## 1. Build the Payment URL

Construct a payment URL with required parameters to initiate the payment process.

```javascript
// Build iPay payment URL (Node.js)
const { URLSearchParams } = require('url');

const apiKey = 'YOUR_API_KEY';
const depositId = '12345';    // From your CRM/database
const amount = 250;           // Amount entered by client
const onRampProvider = 'provider1';
const defaultFiatCurrency = 'USD';

const params = new URLSearchParams({
  apiKey,
  customId: depositId,
  onRampProvider,
  defaultFiatAmount: amount.toString(),
  defaultFiatCurrency
});
const baseUrl = 'https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?';
const paymentUrl = baseUrl + params.toString();

console.log('Redirect user to:', paymentUrl);
// You might send this URL to your frontend or redirect the HTTP response.
```

## 2. Handle the Callback

Set up an Express route to handle the POST callback from iPay.

```javascript
// Express route to handle iPay JSON callback
const express = require('express');
const app = express();
app.use(express.json()); // Parses JSON body

app.post('/ipay-callback', (req, res) => {
  const data = req.body;
  const secretToken = 'YOUR_SECRET_TOKEN';  // Optional secret token from iPay dashboard

  // Verify callback token if configured
  if (data.token && data.token !== secretToken) {
    return res.status(400).send('Invalid token');
  }

  // Check transaction status (example: 'SUCCESS' if provided)
  if (data.status === 'SUCCESS' || data.transferredAmount) {
    // Match data.customerID (returned customId) with your record
    const depositId = data.customerID;
    const amountReceived = data.transferredAmount;
    // TODO: Update your CRM/database to mark depositId as completed
    console.log(`Deposit ${depositId} completed, amount: ${amountReceived}`);
  }

  // Respond to acknowledge receipt
  res.sendStatus(200);
});

// (Server listens on a port, etc.)
```

### Explanation

- **Building the URL:** The `URLSearchParams` class constructs the query string with parameters like `apiKey` and `customId`. The `paymentUrl` can be sent to the frontend or used for redirection.
- **Handling the Callback:** The Express route parses the JSON body, verifies the optional `token`, and updates the CRM if the transaction is successful. Respond with HTTP 200 to acknowledge.
- **Integration Notes:** Ensure your CRM supports Node.js and Express. Verify that the callback endpoint is accessible and can process iPay’s JSON payload.