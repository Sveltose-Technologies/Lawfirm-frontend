// src/services/authService.js
import API from './api';

// Signup Function

export const signupUser = async (userData) => {
  try {
    console.log("1. Sending Payload:", userData); 
    
    const response = await API.post('/auth/signup', userData);
    
    console.log("2. Success Response:", response.data);
    return response.data;
  } catch (error) {
    // Yahan hum error ko poora khol kar dekhenge
    if (error.response) {
      // Server ne response diya (e.g. 400, 404, 500)
      console.error("3. SERVER ERROR DATA:", error.response.data);
      console.error("4. SERVER STATUS:", error.response.status);
      throw new Error(error.response.data.message || "Server rejected registration");
    } else if (error.request) {
      // Request bheji gayi par response nahi mila (CORS issue ho sakta hai)
      console.error("3. NO RESPONSE RECEIVED (Network/CORS Error):", error.request);
      throw new Error("Network error or CORS block. Check Server Logs.");
    } else {
      // Kuch aur issue hai code mein
      console.error("3. REQUEST SETUP ERROR:", error.message);
      throw new Error(error.message);
    }
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