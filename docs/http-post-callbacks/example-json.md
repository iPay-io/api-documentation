---
title: Example JSON
description: Sample JSON payload for an iPay payment callback.
keywords: [iPay, API documentation, high-risk, psp, example JSON, callback payload, USDT, Polygon, transaction verification]
sidebar_position: 2
---

# Example JSON

On successful payments, we POST a JSON payload to your IPN URL.
Below is a sample JSON payload for a USDT payment on Polygon:

```json
{
  "event": {
    "body": {
      "accountEDTO": "J7LRV2okVgOzHGoiNG5",
      "amount": 0.0098,
      "blockchainTxId": "0xb4b5a77d61aa7b45610aa2d3ab7de0f6f4c44e4b8d7c40c4bb4bc2669ec3ab70",
      "chain": "MATIC",
      "currency": "USDT",
      "customerID": 848150,
      "timestamp": { "seconds": 1756211921 },
      "transactionFee": 0.0002,
      "transactionFeePrecent": 0.02,
      "transferedAmount": 0.0098,
      "value_in_usd": 0.009799749218
    },
    "client_ip": "39.96.64.295",
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-encoding": "gzip, compress, deflate, br",
      "authorization": "d1ea638aeebd58fa38c1e1fb7c3532653b5cb1691d143ca323e9112287cd603258d17cb0b5a789a0fbca7cc6e0292ec580e5b41d0cb5bb631052934e3eebc53.a389c90f1753304",
      "content-length": "340",
      "content-type": "application/json",
      "host": "eoxv35q4zimiu0x.m.pipedream.net",
      "user-agent": "axios/1.9.0"
    },
    "method": "POST",
    "path": "/",
    "query": {},
    "url": "https://eoxv35q4zimiu0x.m.pipedream.net/"
  }
}
```

**Processing Steps**:
1. Verify the `token` (if used).
2. Match `customerID` to your records.
3. Confirm `transferedAmount`