---
title: FAQ
description: Frequently Asked Questions for iPay API integration.
keywords: [iPay, API documentation, high-risk, psp, iPay, testing, FAQs, test environment, test API keys, simulate callbacks, error scenarios, support]
sidebar_position: 3
---


# Frequently Asked Questions

**Q: How do I obtain an API key?**

A: Log in to the iPay dashboard, navigate to the API Keys section, and create a new key with your company, wallet, and callback URL.

**Q: What happens if my callback URL is down?**

A: iPay may retry sending the notification. Ensure your endpoint is reliable and logs errors for debugging.

**Q: Can I use multiple wallets?**

A: Yes, add multiple wallets in the dashboard and create separate API keys for each.

**Q: How do I verify the secret token?**

A: Compare the `token` field in the callback JSON with the secret token provided by iPay. Reject mismatches.

For more questions, contact [support@i-pay.io](mailto:support@i-pay.io).
