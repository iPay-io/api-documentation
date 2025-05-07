---
title: Security Token
description: Guide to using a webhook secret token for verifying iPay payment notifications.
keywords: [iPay, API documentation, high-risk, psp, security token, webhook, callback verification, IPN, secret token, authentication, security]
sidebar_position: 5
---

# Security Token (Optional)

For each API key, iPay provides a **webhook secret token** to enhance security. This token is included in every JSON payload sent to your IPN URL.

:::note
**Validating this token ensures notifications originate from iPay and are untampered.**
:::

Obtain the token from your iPay account manager when your API key is issued. Store it securely. When receiving an HTTP POST callback, compare the payload’s token to your stored token to verify authenticity.

:::info
Implementing the token check is **optional** but **highly recommended**. Without it, protect your IPN endpoint with measures like IP whitelisting.
:::

**Example Verification (Pseudo-code)**:
```python
if payload['token'] == stored_secret_token:
    process_payment(payload)
else:
    reject_callback()
```