import axios from 'axios';

const API = axios.create({
  baseURL: 'https://nodejs.nrislawfirm.com', 
  // REMOVED withCredentials: true to fix the CORS error
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// This Interceptor attaches the Token to all outgoing requests automatically
API.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;