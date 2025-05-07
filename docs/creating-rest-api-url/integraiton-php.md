---
title: PHP Integration
description: Guide to using a webhook secret token for verifying iPay payment notifications.
keywords: [iPay, API documentation, high-risk, psp, security token, webhook, callback verification, IPN, secret token, authentication, security]
sidebar_position: 4
---

# iPay API Integration - PHP

To integrate iPay's payment gateway into your PHP-based forex CRM platform, follow these steps to enable on-ramp cryptocurrency deposits.

## 1. Build the Payment URL

Construct a payment URL with required parameters and redirect the user to initiate the payment process.

```php
<?php
// Build iPay payment URL in PHP
$apiKey = 'YOUR_API_KEY';
$depositId = '12345';   // From CRM
$amount = 150;          // Client-entered amount
$onRampProvider = 'provider1';
$defaultFiatCurrency = 'USD';

$baseUrl = 'https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?';
$params = http_build_query([
    'apiKey' => $apiKey,
    'customId' => $depositId,
    'onRampProvider' => $onRampProvider,
    'defaultFiatAmount' => $amount,
    'defaultFiatCurrency' => $defaultFiatCurrency
]);
$paymentUrl = $baseUrl . $params;

// Redirect the user to iPay payment page
header("Location: $paymentUrl");
exit();
```

## 2. Handle the Callback

Set up a callback handler to process the JSON payload sent by iPay when the deposit completes.

```php
<?php
// iPay callback handler (e.g., callback.php)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $payload = json_decode(file_get_contents('php://input'), true);
    $secretToken = 'YOUR_SECRET_TOKEN';  // Optional secret token

    // Verify token if provided
    if (isset($payload['token']) && $payload['token'] !== $secretToken) {
        http_response_code(400);
        exit('Invalid token');
    }

    // Check status and update CRM
    if (isset($payload['status']) && $payload['status'] === 'SUCCESS') {
        $depositId = $payload['customerID'];
        $amountReceived = $payload['transferredAmount'];
        // TODO: Update deposit record in your CRM/database to mark as successful
    }

    // Send HTTP 200 OK to iPay
    http_response_code(200);
    exit('OK');
}
```

### Explanation

- **Building the URL:** The `http_build_query` function safely encodes parameters like `apiKey`, `customId`, and `defaultFiatAmount`. The resulting URL redirects the user to iPay’s payment page.
- **Handling the Callback:** The handler reads the JSON POST data, verifies the optional `token`, and updates the CRM if the `status` is 'SUCCESS'. Respond with HTTP 200 to acknowledge receipt.
- **Integration Notes:** Ensure your CRM supports PHP and can handle HTTP redirects and POST requests. Test the callback endpoint to confirm it receives iPay’s JSON payload correctly.