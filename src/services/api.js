// src/services/api.js
import axios from 'axios';

// Base URL setup
const API = axios.create({
  baseURL: 'https://lawnode.rxchartsquare.com', // Aapki API ka domain
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;