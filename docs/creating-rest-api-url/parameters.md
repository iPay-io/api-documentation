---
title: Required & Optional Parameters
description: Parameters for constructing the REST API URL
sidebar_position: 1
---

# Required & Optional Parameters

The **base URL** for payment requests is:

```
https://us-central1-ipay.cloudfunctions.net/app/api/invoice_external?
```

Append parameters as query strings using `&`, in any order, ensuring required parameters are included.

| Parameter           | Required? | Default             | Description                                                                 |
|---------------------|-----------|---------------------|-----------------------------------------------------------------------------|
| **apiKey**          | Yes       | None                | Links the request to your i-pay account and callback. Created in dashboard. |
| **customId**        | Yes       | None                | Unique ID (e.g., order ID) returned as `customerID` in callbacks.           |
| **onRampProvider**  | Yes       | Transak             | Specifies the provider (e.g., `transak`).                                   |
| **defaultFiatAmount** | No      | 300 (USD)           | Pre-filled fiat amount in the widget (e.g., `100`).                         |
| **defaultFiatCurrency** | No    | USD                 | Locks currency (e.g., `EUR`). User chooses if omitted.                      |
| **colorCode**       | No        | Blue                | Hex color for widget theme (e.g., `D000F2`).                                |
| **screenTitle**     | No        | Buy Crypto To Your Wallet | Custom widget title (e.g., `DepositTest`).                              |

:::tip
Use [Postman](https://www.postman.com/) to test URLs. i-pay provides a Postman collection for easy setup.
:::

**Example Python Code**:
```python
base_url = "https://us-central1-ipay.cloudfunctions.net/app/api/invoice_external?"
params = {
    "apiKey": "jBQyeHEPJUhj1pRP7KPlShkw5Oc99g23",
    "customId": "38UUAR23DVUA",
    "onRampProvider": "transak",
    "defaultFiatCurrency": "USD",
    "defaultFiatAmount": "108",
    "colorCode": "D000F2",
    "screenTitle": "DepositTest"
}
url = f"{base_url}{'&'.join(f'{k}={v}' for k, v in params.items())}"
print(url)
```