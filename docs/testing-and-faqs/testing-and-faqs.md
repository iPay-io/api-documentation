---
title: Testing and FAQs
description: Testing procedures and frequently asked questions for iPay API integration.
keywords: [iPay, API documentation, high-risk, psp, iPay, testing, FAQs, test environment, test API keys, simulate callbacks, error scenarios, support]
sidebar_position: 7
---

# Testing and FAQs

## Testing Your Integration

To ensure a robust integration, test your setup in a controlled environment:

- **Request a Test Environment**: Contact [support@ipay.io](mailto:support@ipay.io) to access iPay’s sandbox environment, if available.
- **Use Test API Keys**: Generate test keys in the dashboard to simulate transactions without real funds.
- **Simulate Callbacks**: Use tools like [Postman](https://www.postman.com/) to send mock JSON payloads to your callback URL.
- **Test Error Scenarios**: Trigger errors (e.g., invalid API key) to verify your error handling logic.

### Example Test Callback

```json
{
  "accountId": "test_account",
  "blockchainTxId": "0x1234...5678",
  "chain": "MATIC",
  "currency": "USDT",
  "customerID": "test_user",
  "timestamp": "2025-04-30T20:00:00.000Z",
  "transactionFee": 0.0001,
  "transactionFeePercent": 0.01,
  "transferredAmount": 0.0999,
  "url": "https://your-test-endpoint.com/callback",
  "token": "TEST_TOKEN"
}
```

Send this payload to your callback URL to test processing logic.

## Frequently Asked Questions

**Q: How do I obtain an API key?**

A: Log in to the iPay dashboard, navigate to the API Keys section, and create a new key with your company, wallet, and callback URL.

**Q: What happens if my callback URL is down?**

A: iPay may retry sending the notification. Ensure your endpoint is reliable and logs errors for debugging.

**Q: Can I use multiple wallets?**

A: Yes, add multiple wallets in the dashboard and create separate API keys for each.

**Q: How do I verify the secret token?**

A: Compare the `token` field in the callback JSON with the secret token provided by iPay. Reject mismatches.

For more questions, contact [support@ipay.io](mailto:support@ipay.io).