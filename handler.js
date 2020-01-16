'use strict';
const fetch = require('node-fetch');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports.proxy = async event => {
  const { domain, port = 443, protocol = 'https', sleepInMilliseconds } = event.queryStringParameters;
  if (!domain) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'domain query string is required',
        },
        null,
        2
      ),
    };  
  }

  if (sleepInMilliseconds) {
    await sleep(sleepInMilliseconds);
  }

  const url = `${protocol}://${domain}:${port}`;
  const response = await fetch(url);
  const body = await response.text();
  const headers = await response.headers.raw();
  const headersToUse = {
    ...headers,
    'content-encoding': '', // Remove encoding
  };
  
  return {
    body,
    statusCode: response.status,
    headers: headersToUse,
  };
};
