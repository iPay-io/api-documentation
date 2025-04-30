---
title: Security Token (Optional)
description: Using a webhook secret token for added security
sidebar_position: 4
---

# Security Token (Optional)

For each API key, i-pay provides a **webhook secret token** to enhance security. This token is included in every JSON payload sent to your IPN URL.

:::note
**Validating this token ensures notifications originate from i-pay and are untampered.**
:::

Obtain the token from your i-pay account manager when your API key is issued. Store it securely. When receiving an HTTP POST callback, compare the payload’s token to your stored token to verify authenticity.

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