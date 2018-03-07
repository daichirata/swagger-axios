import axios from 'axios'
let httpClient = axios.create()
export const setClient = (client) => {
  httpClient = client
}
const request = (method, url, params = {}, data = {}, headers = {}, requestConfig = {}) => {
  const config = {
    // `url` is the server URL that will be used for the request
    url,
    // `method` is the request method to be used when making the request
    method: method.toLowerCase(),
    // `headers` are custom headers to be sent
    headers,
    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    params,
    // `data` is the data to be sent as the request body
    // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // When no `transformRequest` is set, must be of one of the following types:
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
    data,
  }
  return httpClient.request(Object.assign(requestConfig, config))
}
export const addPet = (params = {}) => {
  let path = '/pet'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['body'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'body' when calling addPet"));
  }
  if (params['body'] !== undefined) {
    body = params['body']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('post', path, queryParams, body || data, headers)
}
export const updatePet = (params = {}) => {
  let path = '/pet'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['body'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'body' when calling updatePet"));
  }
  if (params['body'] !== undefined) {
    body = params['body']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('put', path, queryParams, body || data, headers)
}
export const findPetsByStatus = (params = {}) => {
  let path = '/pet/findByStatus'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['status'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'status' when calling findPetsByStatus"));
  }
  if (params['status'] !== undefined) {
    queryParams['status'] = params['status']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const findPetsByTags = (params = {}) => {
  let path = '/pet/findByTags'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['tags'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'tags' when calling findPetsByTags"));
  }
  if (params['tags'] !== undefined) {
    queryParams['tags'] = params['tags']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const getPetById = (params = {}) => {
  let path = '/pet/{petId}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['petId'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'petId' when calling getPetById"));
  }
  if (params['petId'] !== undefined) {
    pathParams['petId'] = params['petId']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const updatePetWithForm = (params = {}) => {
  let path = '/pet/{petId}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['petId'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'petId' when calling updatePetWithForm"));
  }
  if (params['petId'] !== undefined) {
    pathParams['petId'] = params['petId']
  }
  if (params['name'] !== undefined) {
    formData.append('name', params['name'])
  }
  if (params['status'] !== undefined) {
    formData.append('status', params['status'])
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = [...formData.entries()].map(e => encodeURIComponent(e[0]) + "=" + encodeURIComponent(e[1])).join('&')
  return request('post', path, queryParams, body || data, headers)
}
export const deletePet = (params = {}) => {
  let path = '/pet/{petId}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['api_key'] !== undefined) {
    headers['api_key'] = params['api_key']
  }
  if (params['petId'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'petId' when calling deletePet"));
  }
  if (params['petId'] !== undefined) {
    pathParams['petId'] = params['petId']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('delete', path, queryParams, body || data, headers)
}
export const uploadFile = (params = {}) => {
  let path = '/pet/{petId}/uploadImage'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['petId'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'petId' when calling uploadFile"));
  }
  if (params['petId'] !== undefined) {
    pathParams['petId'] = params['petId']
  }
  if (params['additionalMetadata'] !== undefined) {
    formData.append('additionalMetadata', params['additionalMetadata'])
  }
  if (params['file'] !== undefined) {
    if (params['file'].file !== undefined) {
      formData.append('file', params['file'].file, params['file'].name)
    } else {
      formData.append('file', params['file'])
    }
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('post', path, queryParams, body || data, headers)
}
export const getInventory = (params = {}) => {
  let path = '/store/inventory'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const placeOrder = (params = {}) => {
  let path = '/store/order'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['body'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'body' when calling placeOrder"));
  }
  if (params['body'] !== undefined) {
    body = params['body']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('post', path, queryParams, body || data, headers)
}
export const getOrderById = (params = {}) => {
  let path = '/store/order/{orderId}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['orderId'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'orderId' when calling getOrderById"));
  }
  if (params['orderId'] !== undefined) {
    pathParams['orderId'] = params['orderId']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const deleteOrder = (params = {}) => {
  let path = '/store/order/{orderId}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['orderId'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'orderId' when calling deleteOrder"));
  }
  if (params['orderId'] !== undefined) {
    pathParams['orderId'] = params['orderId']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('delete', path, queryParams, body || data, headers)
}
export const createUser = (params = {}) => {
  let path = '/user'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['body'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'body' when calling createUser"));
  }
  if (params['body'] !== undefined) {
    body = params['body']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('post', path, queryParams, body || data, headers)
}
export const createUsersWithArrayInput = (params = {}) => {
  let path = '/user/createWithArray'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['body'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'body' when calling createUsersWithArrayInput"));
  }
  if (params['body'] !== undefined) {
    body = params['body']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('post', path, queryParams, body || data, headers)
}
export const createUsersWithListInput = (params = {}) => {
  let path = '/user/createWithList'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['body'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'body' when calling createUsersWithListInput"));
  }
  if (params['body'] !== undefined) {
    body = params['body']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('post', path, queryParams, body || data, headers)
}
export const loginUser = (params = {}) => {
  let path = '/user/login'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['username'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'username' when calling loginUser"));
  }
  if (params['username'] !== undefined) {
    queryParams['username'] = params['username']
  }
  if (params['password'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'password' when calling loginUser"));
  }
  if (params['password'] !== undefined) {
    queryParams['password'] = params['password']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const logoutUser = (params = {}) => {
  let path = '/user/logout'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const getUserByName = (params = {}) => {
  let path = '/user/{username}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['username'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'username' when calling getUserByName"));
  }
  if (params['username'] !== undefined) {
    pathParams['username'] = params['username']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('get', path, queryParams, body || data, headers)
}
export const updateUser = (params = {}) => {
  let path = '/user/{username}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['username'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'username' when calling updateUser"));
  }
  if (params['username'] !== undefined) {
    pathParams['username'] = params['username']
  }
  if (params['body'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'body' when calling updateUser"));
  }
  if (params['body'] !== undefined) {
    body = params['body']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('put', path, queryParams, body || data, headers)
}
export const deleteUser = (params = {}) => {
  let path = '/user/{username}'
  let body
  const headers = {}
  const pathParams = {}
  const queryParams = {}
  const formData = new FormData()
  if (params['username'] === undefined) {
    return Promise.reject(new Error("Missing required parameter 'username' when calling deleteUser"));
  }
  if (params['username'] !== undefined) {
    pathParams['username'] = params['username']
  }
  for (const key of Object.keys(pathParams)) {
    path = path.replace('{' + key + '}', pathParams[key].toString())
  }
  const data = formData
  return request('delete', path, queryParams, body || data, headers)
}
