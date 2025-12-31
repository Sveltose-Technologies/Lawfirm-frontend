// import API from './api';

// export const signupUser = async (userData) => {
//   try {
//     const response = await API.post('/auth/signup', userData);
//     // Response example: { message: "...", user: { token: "...", role: "..." } }
//     console.log('Signup rtesponse', response);
    
//     return response.data; 
//   } catch (error) {
//     if (error.response) {
//       throw new Error(error.response.data.message || "Registration failed");
//     }
//     throw new Error("Network error");
//   }
// };

// export const loginUser = async (credentials) => {
//   console.log("login credentials", credentials);
  
//   try {
//     const response = await API.post('/auth/login', credentials);
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       throw new Error(error.response.data.message || "Login failed");
//     }
//     throw new Error("Server error");
//   }
// };

import API from './api';

export const signupUser = async (userData) => {
  try {
    const response = await API.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || "Registration failed";
    throw new Error(message);
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || "Login failed";
    throw new Error(message);
  }
};