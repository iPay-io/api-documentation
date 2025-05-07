---
title: Example Python
description: Learn how to integrate the iPay API using Python with this example code
keywords: [iPay, API documentation, high-risk, psp, REST API, parameters, apiKey, customId, Python, defaultFiatAmount, defaultFiatCurrency, colorCode, screenTitle, Guide]
sidebar_position: 3
---

# Example Python

This page provides a Python code example to demonstrate how to construct a REST API URL for the iPay payment gateway. The code shows how to programmatically define the base URL and parameters, then combine them to create a complete API URL that can be used to initiate payment requests.

## Python Code Snippet

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
full_url = base_url + query_string
print(full_url)
```

## Code Explanation

This code snippet performs the following steps:

1. **Import Necessary Modules:**
   - `urllib.parse`: A Python module used to encode the parameters into a URL-safe query string.

2. **Define the Base URL:**
   - `base_url`: The endpoint for the iPay API, where payment requests are sent.

3. **Define Parameters:**
   - `params`: A dictionary containing the required and optional parameters:
     - `apiKey`: Your unique API key for authentication, obtained from your iPay dashboard at [dash.i-pay.io](https://dash.i-pay.io/).
     - `customId`: A unique identifier for the transaction or user, used for tracking.
     - `onRampProvider`: The payment provider processing the transaction (e.g., `provider1` or `transak`).
     - `defaultFiatCurrency`: The default currency for the payment (e.g., `USD` for US dollars).
     - `defaultFiatAmount`: The default payment amount in the specified currency (e.g., `108` for $108).
     - `colorCode`: A hexadecimal color code (e.g., `D000F2`) to customize the payment widget’s appearance.
     - `screenTitle`: A custom title for the payment screen (e.g., `DepositTest`).

4. **Construct the Query String:**
   - `urllib.parse.urlencode(params)` converts the parameters dictionary into a URL-encoded query string, ensuring special characters are properly handled.

5. **Build the Full URL:**
   - Concatenate the `base_url` and `query_string` to form the complete API URL.

6. **Print the URL:**
   - Output the `full_url` to the console, which can be used to make API requests or tested in a browser.

## Integration into Your Application

To use this code in your application:
- **Replace Placeholder Values:** Update the `params` dictionary with your actual API key, custom ID, and other relevant values. Ensure your API key is valid by checking your iPay dashboard at [dash.i-pay.io](https://dash.i-pay.io/).
- **Make HTTP Requests:** Use a library like `requests` to send a GET request to the generated URL:
  ```python
  import requests

  response = requests.get(full_url)
  if response.status_code == 200:
      print(response.json())
  else:
      print(f"Error: {response.status_code}")
  ```
- **Handle Responses:** Process the API response to manage the payment flow, such as redirecting to the payment widget or handling errors.
- **Test the URL:** Copy the generated URL and test it in Postman or a browser to verify the payment widget loads correctly.

## Tips for Success
- Ensure all required parameters (`apiKey`, `customId`, `onRampProvider`) are included to avoid errors.
- For detailed parameter descriptions, refer to the [Parameters](/creating-rest-api-url/parameters) section.
- If you encounter issues, contact iPay support at [support@i-pay.io](mailto:support@i-pay.io) to verify your API key or server configuration.

This example provides a foundation for integrating iPay’s API into your Python-based applications, enabling seamless payment processing.