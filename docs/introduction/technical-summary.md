---
title: Technical Summary
description: Technical overview of iPay payment gateway integration, covering REST API URL creation and callback setup.
keywords: [iPay, API documentation, high-risk, psp, technical summary, REST API, payment button, on-ramp provider, callback URL, JSON payload, secret token, security]
sidebar_position: 3
---

## Technical Summary

To implement the iPay payment gateway, create a **REST API URL** and link it to a payment button or link on your website or backoffice. When a user initiates a payment (e.g., via a “Buy” or “Deposit” button), they are directed to the on-ramp provider to complete the transaction.

Once funds are deposited into your crypto wallet, iPay sends a **server-to-server HTTP POST** request to your specified callback URL (Instant Payment Notification URL). This POST contains a **JSON** payload with transaction details, enabling real-time updates to your system. Optionally, verify callbacks using a secret token for added security.