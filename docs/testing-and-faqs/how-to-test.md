---
title: Testing Your Payment Integration
description: Step-by-step guide to test your iPay payment integration using the REST API URL and callback functionality.
keywords: [iPay, testing, payment integration, REST API, callback URL, Postman, MetaMask, USDT, Polygon, wallet address]
sidebar_position: 2
---

# Testing Your Payment Integration

Once you have completed the following steps:

- Set your **callback URL**
- Received your **API key**
- Built your **REST API URL** with the required parameters


## You can test the functionality as follows:

### 1. Initiate the Payment Request

Use the full URL you've built (typically using Postman for convenience). You can test it in two ways:

- **Option A**: Paste the full URL into your internet browser’s address bar and press Enter.
- **Option B**: If you've already connected the URL to a button in your back office, trigger a payment request through that button.

You’ll be redirected to the onramp payment widget.

### 2. Retrieve the One-Time Wallet Address

Once on the payment widget screen, check your browser's address bar. Look for the <span style={{ fontWeight: 'bold', color: '#7c59fd' }}>walletAddress</span> parameter in the URL, which will look like this:

```
https://global.....&walletAddress=0x.....
```
This is the unique, one-time Polygon wallet address (OTW) generated for this payment request. iPay uses the Polygon (USDT) network.

### 3. Send a Direct Test Payment

You can bypass the regular widget payment method and test the backend process directly:

1. Copy the <span style={{ fontWeight: 'bold', color: '#7c59fd' }}>walletAddress</span> from the URL.

2. Use MetaMask or any other wallet of your choice to send any amount of USDT (Polygon) to this <span style={{ fontWeight: 'bold', color: '#7c59fd' }}>OTW address</span>. It does not need to be the amount displayed in the widget.

3. As soon as the funds arrive on the OTW, it triggers the iPay payment processing system:
   - The iPay fee will be deducted.
   - The remaining amount will be sent to your own Polygon wallet address, which you registered on your iPay dashboard and linked to your API key.
   - The iPay server will send a callback to your specified callback URL.

:::tip
The iPay team can send you some USDT (Polygon) for testing purposes — feel free to reach out.
:::

### 4. Verify the Test

This process allows you to verify two things:
- **Payment Success**: You receive the net funds in your own Polygon wallet.
- **Callback Functionality**: Your server endpoint receives the iPay callback, allowing you to confirm the structure and content of the API response, and if your system is able to process it properly.

## Summary of the Test

**Generated Payment URL (using Postman)**:

```
https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?apiKey=TTy7Xory54M6KDG8lb1fecVkEsgG3VZi&customId=72295640&onRampProvider=provider1&defaultFiatCurrency=GBP&defaultFiatAmount=1122&colorCode=D000F2&screenTitle=DepositTest
```

#### 1. Connect to a button, or paste the URL into your browser address bar and press Enter.
#### 2. You’ll be redirected to the payment widget.
#### 3. In the browser address bar, locate the URL parameter:
   ```
   &<span style={{ fontWeight: 'bold', color: '#7c59fd' }}>walletAddress</span>=0x1290a57ee56f09e90eae6a10bf9a3cfc0af18792
   ```
#### 4. Copy the wallet address:
   ```
   0x1290a57ee56f09e90eae6a10bf9a3cfc0af18792 (USDT Polygon)
   ```
#### 5. Send 1 USDT Polygon via any wallet to this address.
#### 6. You will receive ~0.975 USDT on your own wallet address.
#### 7. Your server endpoint will receive a callback from iPay.