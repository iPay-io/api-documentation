---
title: API Parameters
description: Required and optional parameters for constructing the iPay REST API URL.
keywords: [iPay, API documentation, high-risk, psp, REST API, parameters, apiKey, customId, onRampProvider, defaultFiatAmount, defaultFiatCurrency, colorCode, screenTitle, Postman]
sidebar_position: 1
---

import ApiPlayground from '../../src/components/ApiPlayground';
import styles from '../../src/css/customStyles.module.css';

# API Parameters

The **base URL** for payment requests is:

```
https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?
```

Append parameters as query strings using `&`, in any order, ensuring required parameters are included.

| Parameter           | Required? | Default             | Description                                                                 |
|---------------------|-----------|---------------------|-----------------------------------------------------------------------------|
| **apiKey**          | Yes       | None                | Links the request to your iPay account and callback. Created in dashboard. |
| **customId**        | Yes       | None                | Unique ID (e.g., order ID) returned as `customerID` in callbacks.           |
| **onRampProvider**  | Yes       | Provider1           | Specifies the provider (e.g., `provider1`).                                   |
| **defaultFiatAmount** | No      | 300 (USD)           | Pre-filled fiat amount in the widget (e.g., `100`).                         |
| **defaultFiatCurrency** | No    | USD                 | Locks currency (e.g., `EUR`). User chooses if omitted.                      |
| **colorCode**       | No        | Blue                | Hex color for widget theme (e.g., `D000F2`).                                |
| **screenTitle**     | No        | Buy Crypto To Your Wallet | Custom widget title (e.g., `DepositTest`).                              |

:::tip
Use [Postman](https://www.postman.com/) to test URLs. iPay provides a Postman collection for easy setup. Download the collection here:

<div className={styles.centerButton}>
  <a href="/ipay.postman_collection.json" download className={styles.downloadButtonIpayPostman}>
    Download iPay Postman Collection
  </a>
</div>
:::

