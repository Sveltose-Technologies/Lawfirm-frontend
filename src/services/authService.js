// src/services/authService.js
import API from './api';

// Signup Function
export const signupUser = async (userData) => {
  try {
    // API Endpoint: /auth/signup
    const response = await API.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    // Error handling
    throw error.response ? error.response.data : { message: "Server Error" };
  }
};

// Login Function (Placeholder - agar login api /auth/login hai to ise use karein)
export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Server Error" };
  }
};