import API from './api';

export const signupUser = async (userData) => {
  try {
    const response = await API.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || 'Registration failed';
    throw new Error(message);
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || 'Login failed';
    throw new Error(message);
  }
};
