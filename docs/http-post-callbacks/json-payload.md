---
title: JSON Payload Explanation
description: Understanding the callback JSON payload
sidebar_position: 1
---

# JSON Payload Explanation

The HTTP POST callback’s JSON payload contains transaction details:

| Field                | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **accountId**        | Unique wallet ID (e.g., `tQqUvcnfwO8HzlQjYz2d`).                            |
| **blockchainTxId**   | Blockchain transaction hash (e.g., `0x73c2...e566f`).                      |
| **chain**            | Blockchain network (e.g., `MATIC` for Polygon).                            |
| **currency**         | Cryptocurrency delivered (e.g., `USDT`).                                   |
| **customerID**       | Your `customId` (e.g., `38UUAR23DVUA`).                                   |
| **timestamp**        | Payment completion time (e.g., `2023-07-11T06:03:22.063Z`).                |
| **transactionFee**   | Fee amount (e.g., `0.0002` USDT).                                         |
| **transactionFeePercent** | Fee percentage (e.g., `0.025` for 2.5%).                             |
| **transferredAmount** | Net amount delivered (e.g., `0.0098` USDT).                               |
| **url**              | Your IPN URL (e.g., `https://your-endpoint.com/`).                        |
| **token**            | Secret token for verification (if enabled).                                |

These fields enable you to process payments, verify transactions, and update user records.

:::note
Verify the `token` field if using the secret token feature.
:::