const env = require('dotenv').config();

const config = {
  consumer_key:         process.env.consumer_key || process.env.CONSUMER_KEY ,
  consumer_secret:      process.env.consumer_secret || process.env.CONSUMER_SECRET,
  access_token:         process.env.access_token || process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.access_token_secret || process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}

module.exports = config;
