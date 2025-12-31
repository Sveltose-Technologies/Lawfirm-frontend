import axios from 'axios';

const API = axios.create({
  baseURL: 'https://nodejs.nrislawfirm.com', 
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;