---
title: Error Handling
description: Guide to handling errors in iPay API integration, including HTTP status codes and troubleshooting tips.
keywords: [iPay, API documentation, high-risk, psp, error handling, HTTP status codes, 401 Unauthorized, 404 Not Found, 500 Internal Server Error, troubleshooting, best practices]
sidebar_position: 1
---

# Error Handling

Effective error handling is essential for a robust iPay API integration. This section explains common HTTP status codes, their causes, and how to address them to ensure a smooth payment experience.

## Understanding Error Codes

iPay uses standard HTTP status codes to indicate request outcomes. Below is a table of possible errors, their meanings, and troubleshooting tips.

| HTTP Status Code | Meaning/Description | Troubleshooting Tips |
|------------------|---------------------|----------------------|
| **401 Unauthorized** | The request lacked valid authentication, typically due to a missing or invalid API key. | Verify the `apiKey` is included and matches the key from the dashboard. Regenerate if necessary. |
| **403 Forbidden** | The request was refused, often due to unauthorized actions. | Check account permissions or contact [support@ipay.io](mailto:support@ipay.io) for access issues. |
| **404 Not Found** | The requested resource was not found, possibly due to an incorrect URL or ID. | Confirm the base URL and identifiers like account IDs. Use the dashboard to validate resources. |
| **406 Not Acceptable** | The server cannot produce a response in the requested format. | Ensure data formats are supported. Check parameter values for compatibility. |
| **409 Conflict** | The request conflicts with the resource's state, e.g., simultaneous actions. | Retry the request or verify request timing. Contact support if persistent. |
| **500 Internal Server Error** | An unexpected server issue occurred. | Log request details and contact [support@ipay.io](mailto:support@ipay.io) for resolution. |

## Common Error Scenarios

### Invalid API Key (401 Unauthorized)
- **Cause**: Incorrect or missing `apiKey` in the payment URL.
- **Solution**: Copy the API key from the dashboard, ensuring no extra spaces. Test the URL in a tool like [Postman](https://www.postman.com/).

### Resource Not Found (404 Not Found)
- **Cause**: Incorrect base URL or invalid identifiers.
- **Solution**: Verify the URL matches `https://us-central1-nfgdatabasedemo.cloudfunctions.net/app/api/invoice_external?`. Check account IDs in the dashboard.

### Server Error (500 Internal Server Error)
- **Cause**: Internal issue on iPay’s servers.
- **Solution**: Log the request and response details, including timestamps, and report to support.

## Best Practices

- **Validate Inputs**: Before sending requests, ensure all parameters are correct using tools like Postman.
- **Monitor Logs**: Track server logs for 4xx/5xx errors to identify issues early.
- **Implement Retries**: For transient errors (e.g., 500), retry requests after a short delay.
- **Test in Sandbox**: Use iPay’s test environment (if available) to simulate errors and verify handling.

For callback errors, ensure your endpoint returns a 200 OK status and logs any issues for debugging.

Contact [support@ipay.io](mailto:support@ipay.io) for persistent issues or to request a test environment.