import axios from 'axios'
import ENV from '../../config/env'

function createApiInstance (headers) {
  return axios.create({
    baseURL: '',
    headers,
  })
}

function handleResponse (response) {
  if (response.data) {
    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    }
  }
  return { staus: response.status, headers: response.headers }
}

function catchError (e) {
  if (e.response) {
    return {
      status: e.response.status,
      data: e.response.data,
      headers: e.response.headers,
    }
  } else if (e.request) {
    throw new Error(e.request)
  } else {
    throw new Error(e.message)
  }
}

export default {
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
  put: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  delete: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'DELETE',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  patch: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PATCH',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
}
