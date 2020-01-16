# Mock Degradation
A service to mock degradation for a url to test different types of website degredation.

# How it works
1. Clone this repo
1. Build and Deploy using the commands `npm ci` and `serverless deploy`
1. From the deployed URL, you can emulate degradation by accessing urls such as:
```
https://<deployed URL>/?domain=www.google.com&sleepInMilliseconds=3000
```

# Things to consider
* The sleep time is limited to the limitations of the API Gateway (e.g. as of this writing, AWS Gateway is limited to 30 seconds)

# Recommended improvements
* Linting
* Path and Query paramters
* More convenient npm commands for build and deploy