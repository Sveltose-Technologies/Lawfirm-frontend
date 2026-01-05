import axios from 'axios';

const API = axios.create({
  baseURL: 'http://72.62.87.252:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// 🔐 TOKEN INTERCEPTOR (LOGIN & SIGNUP SKIP)
API.interceptors.request.use(
  (config) => {
    const isAuthRoute =
      config.url.includes('/auth/login') ||
      config.url.includes('/auth/signup');

    if (!isAuthRoute) {
      const token =
        typeof window !== 'undefined'
          ? localStorage.getItem('token')
          : null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else {
     
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
