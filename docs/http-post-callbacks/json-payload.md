---
title: JSON Payload Explanation
description: Explanation of the JSON payload received in iPay payment callbacks.
keywords: [iPay, API documentation, high-risk, psp, JSON payload, callback, transaction details, accountId, blockchainTxId, chain, currency, customerID, timestamp, transactionFee, transferredAmount, token verification]
sidebar_position: 1
---

# JSON Payload Explanation

The HTTP POST callback’s JSON payload contains transaction details:

| Field                | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **accountEDTO**        | Unique wallet ID (e.g., `tQqUvcnfwO8HzlQjYz2d`).                            |
| **blockchainTxId**   | Blockchain transaction hash (e.g., `0x73c2...e566f`).                      |
| **chain**            | Blockchain network (e.g., `MATIC` for Polygon).                            |
| **currency**         | Cryptocurrency delivered (e.g., `USDT`).                                   |
| **customerID**       | Your `customId` (e.g., `38UUAR23DVUA`).                                   |
| **timestamp**        | Payment completion time (e.g., `2023-07-11T06:03:22.063Z`).                |
| **transactionFee**   | Fee amount (e.g., `0.0002` USDT).                                         |
| **transactionFeePercent** | Fee percentage (e.g., `0.025` for 2.5%).                             |
| **transferedAmount** | Net amount delivered (e.g., `0.0098` USDT).                               |
| **value_in_usd**     | Net amount delivered in USD (e.g. 0.009798 USD).                        |

These fields enable you to process payments, verify transactions, and update user records.

:::note
If a secret token is used (optional), we include it in the header.
Verify this header before processing the JSON body.
:::