require("dotenv").config();

const axios = require('axios')

const api   = axios.create({
  baseURL: process.env.IP_SERVICE,
  headers: {
    "Content-type": "application/json"
  }
});

module.exports = api