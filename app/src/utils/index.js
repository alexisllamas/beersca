const axios = require('axios');

const headers = {
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 2000,
  headers,
});

const createRequest = method => async (url, data) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
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
    };
  }
};

export const api = {
  get: createRequest('GET'),
  post: createRequest('POST'),
  put: createRequest('PUT'),
  delete: createRequest('DELETE'),
  request: (url, method = 'GET') => createRequest(method)(url),
};

export const arrayToObjectById = array => ({
  byId: array.reduce((byId, object) => ({ ...byId, [object.id]: object }), {}),
  allIds: array.map(object => object.id),
});

export const objectByIdToArray = object => Object.values(object);
