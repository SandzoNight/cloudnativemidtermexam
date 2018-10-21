import axios from 'axios'
import ENV from '../../config/env'
import cookie from 'js-cookie'

function createApiInstance (headers) {
  const token = cookie.get('_session')
  if (token) {
    headers.Authorization = token
  }
  return axios.create({
    baseURL: ENV.API_URL,
    headers: headers,
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
    createApiInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}, headers = {}) => (
    createApiInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  delete: (path, body = {}, headers = {}) => (
    createApiInstance(headers)
      .request({
        url: path,
        method: 'DELETE',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  patch: (path, body = {}, headers = {}) => (
    createApiInstance(headers)
      .request({
        url: path,
        method: 'PATCH',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
}
