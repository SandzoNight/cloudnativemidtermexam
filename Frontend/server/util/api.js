const axios = require('axios')

function createApiInstance (headers = {}) {
  return axios.create({
    baseURL: process.env.API_URL,
    headers,
  })
}

function handleResponse (response) {
  return response
}

function catchError (e) {
  return Promise.reject(e.response)
}

module.exports = {
  get: (path, headers = {}) => (
    createApiInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        headers,
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  delete: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'DELETE',
        headers,
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  patch: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PATCH',
        headers,
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
}
