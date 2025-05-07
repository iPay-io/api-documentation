---
title: Example URL
description: Example of constructing a complete iPay REST API URL with parameters.
keywords: [iPay, API documentation, high-risk, psp, iPay, REST API, example URL, parameters, Python code, URL encoding, payment button]
sidebar_position: 4
---

## Example URL

Below is an example of assembling a complete REST API URL with all optional parameters:

- **apiKey**: `jBQyeHEPJUhj1pRP7KPlShkw5Oc99g23`
- **customId**: `38UUAR23DVUA`
- **onRampProvider**: `provider1`
- **defaultFiatCurrency**: `USD`
- **defaultFiatAmount**: `108`
- **colorCode**: `D000F2`
- **screenTitle**: `DepositTest`

**Resulting URL**:

```
https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?apiKey=jBQyeHEPJUhj1pRP7KPlShkw5Oc99g23&customId=38UUAR23DVUA&onRampProvider=provider1&defaultFiatCurrency=USD&defaultFiatAmount=108&colorCode=D000F2&screenTitle=DepositTest
```

### Python Example

```python
import urllib.parse

base_url = "https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?"
params = {
    "apiKey": "jBQyeHEPJUhj1pRP7KPlShkw5Oc99g23",
    "customId": "38UUAR23DVUA",
    "onRampProvider": "provider1",
    "defaultFiatCurrency": "USD",
    "defaultFiatAmount": "108",
    "colorCode": "D000F2",
    "screenTitle": "DepositTest"
}

query_string = urllib.parse.urlencode(params)
payment_url = base_url + query_string
print(payment_url)
```

This code constructs the URL programmatically, ensuring proper encoding of parameters. Copy the URL into a browser to test or use it behind a "Pay Now" button.