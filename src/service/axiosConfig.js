import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://3.35.216.158:8080/api',
  headers: {
    'Content-Type': 'application/json',
  }
})

authApi.interceptors.request.use(config => {
  const token = localStorage.getCookie('token');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;

}, error => {
  return Promise.reject(error);
})


authApi.interceptors.response.use(response => {
  const newToken = response.data.token;
  if (newToken) {
    document.cookie = `token=${newToken};path=/;max-age=3600`;
  }
  return response;

}, error => {
  return Promise.reject(error);
})
