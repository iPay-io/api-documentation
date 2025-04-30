---
title: Creating an API Key
description: How to generate an API key for i-pay integration
sidebar_position: 4
---

# Creating an API Key

With a company and wallet configured, create an **API Key** to link your integration components.

In the dashboard, navigate to **API Keys** (under “Developer” or “Integration”). Select **Create New API Key** and provide:
- **Company/Wallet**: Choose the associated company and wallet.
- **IPN URL**: Specify your server’s callback URL for HTTP POST notifications.
- **Name/Label (Optional)**: Assign a name (e.g., “Website Payment Key”).

The system generates a unique API key. Copy and store it securely for use in payment URLs.

:::important
Each API key is tied to one IPN URL and wallet. Create separate keys for different configurations.
:::