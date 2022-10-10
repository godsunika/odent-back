const axios = require('axios')
const api   = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json"
  }
});

module.exports = api