const axios = require('axios');

const baseURL = 'https://api.punkapi.com/v2/';
const headers = {
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
  timeout: 2000,
  headers
});

const createRequest = method => async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return {
      success: response.status >= 200 && response.status < 300,
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    if (err.response) {
      return {
        success: false,
        ...err.response.data,
      };
    }
    return {
      success: false,
      data: 'Something gone wrong...',
    }
  }
};

const api = {
  get: createRequest('GET'),
  post: createRequest('POST'),
  put: createRequest('PUT'),
  delete: createRequest('DELETE'),
  request: (url, method = 'GET') => createRequest(method)(url),
};

module.exports = api;