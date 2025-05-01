---
title: Example JSON
description: Sample JSON payload for an iPay payment callback.
keywords: [iPay, API documentation, high-risk, psp, example JSON, callback payload, USDT, Polygon, transaction verification]
sidebar_position: 2
---

# Example JSON

Below is a sample JSON payload for a USDT payment on Polygon:

```json
{
  "accountId": "tQqUvcnfwO8HzlQjYz2d",
  "blockchainTxId": "0x73c2...e566f",
  "chain": "MATIC",
  "currency": "USDT",
  "customerID": "38UUAR23DVUA",
  "timestamp": "2023-07-11T06:03:22.063Z",
  "transactionFee": 0.0002,
  "transactionFeePercent": 0.025,
  "transferredAmount": 0.0098,
  "url": "https://your-endpoint.com/",
  "token": "YOUR_SECRET_TOKEN_VALUE"
}
```

**Processing Steps**:
1. Verify the `token` (if used).
2. Match `customerID` to your records.
3. Confirm `transferredAmount` and `blockchainTxId