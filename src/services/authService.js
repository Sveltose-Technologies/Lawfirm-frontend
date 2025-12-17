// src/services/authService.js
import API from './api';

// Signup Function
export const signupUser = async (userData) => {
  try {
    const response = await API.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Server Error" };
  }
};

// Login Function
export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Server Error" };
  }
};

// --- NEW CAPTCHA FUNCTIONS ---

// 1. Get Captcha Image (GET Request)
export const getCaptcha = async () => {
  try {
    // Ye API call server se SVG/Image aur ID return karegi
    const response = await API.get('/auth/captcha'); 
    return response.data; 
  } catch (error) {
    console.error("Captcha load error", error);
    return null;
  }
};

// 2. Verify Captcha (POST Request)
export const verifyCaptcha = async (captchaInput) => {
  try {
    // Server ko user ka input bhejein verify karne ke liye
    const response = await API.post('/auth/captcha', { captcha: captchaInput });
    return response.data; // Returns { valid: true/false }
  } catch (error) {
    throw error.response ? error.response.data : { message: "Captcha verification failed" };
  }
};