---
title: Adding a Crypto Wallet
description: Instructions for configuring a crypto wallet in the iPay dashboard to receive payments.
keywords: [iPay, API documentation, high-risk, psp, crypto wallet, wallet configuration, blockchain network, USDT, Polygon, account ID, payment destination]
sidebar_position: 3
---

# Adding a Crypto Wallet

With your company set up, add a **crypto wallet** to receive payments.

In the dashboard, go to **Wallets** or **Accounts**. Enter a wallet address you control, specifying the blockchain network (e.g., Polygon for USDT).

**Example**: To receive USDT on Polygon, provide your Polygon USDT wallet address. Funds from customer purchases are sent directly to this address. You can add multiple wallets for different currencies or blockchains.

:::warning
Double-check the wallet address; i-pay forwards funds exactly as provided.
:::

i-pay generates an **Account ID** for each wallet, used in callback data to identify payment destinations.