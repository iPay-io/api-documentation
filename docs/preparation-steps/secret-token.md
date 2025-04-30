---
title: Secret Token (Optional)
description: Using a secret token for verifying callbacks
sidebar_position: 5
---

# Secret Token (Optional)

For each API key, i-pay provides a **Secret Token** for callback verification, enhancing security.

Request the token from your i-pay account manager after creating the API key. Store it securely (e.g., in an encrypted vault). Each JSON payload includes this token or a derived signature.

Verify the token in your IPN handler to confirm callback authenticity.

:::info
This step is optional but recommended. Without it, use protections like IP whitelisting.
:::

**Example Verification (Python)**:
```python
if payload['token'] == stored_secret_token:
    process_payment(payload)
else:
    reject_callback()
```