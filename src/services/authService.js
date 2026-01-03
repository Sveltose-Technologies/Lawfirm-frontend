// import API from './api';

// export const signupUser = async (userData) => {
//   try {
//     const response = await API.post('/auth/signup', userData);
//     return response.data;
//   } catch (error) {
//     const message =
//       error.response?.data?.message || 'Registration failed';
//     throw new Error(message);
//   }
// };

// export const loginUser = async (credentials) => {
//   try {
//     const response = await API.post('/auth/login', credentials);
//     return response.data;
//   } catch (error) {
//     const message =
//       error.response?.data?.message || 'Login failed';
//     throw new Error(message);
//   }
// };


import API from './api';

export const signupUser = async (userData) => {
  const response = await API.post('/auth/signup', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  return response.data;
};

// --- Capability Categories APIs ---
export const getAllCapabilityCategories = async () => {
  try {
    const response = await API.get('/capability-categories/get-all');
      console.log("category response",response);
    return response.data;
  } catch (error) {
    console.error("Cat API Error", error);
    return { success: false };
  }
};

export const getAllCapabilitySubCategories = async () => {
  try {
    const response = await API.get('/capability-subcategory/getall-subcategory');
    console.log("sub category response",response);
    
    return response.data;
  } catch (error) {
    console.error("SubCat API Error", error);
    return { success: false };
  }
};

export const getAllLocationCountries = async () => {
  try {
    const response = await API.get('/location-country/getall');
    console.log('Location Countries:', response);
    return response.data;
  } catch (error) {
    console.error('Country API Error:', error);
    return { success: false, data: [] };
  }
};

// GET ALL Cities
export const getAllLocationCities = async () => {
  try {
    const response = await API.get('/location-city/getall');
    console.log('Location Cities:', response);
    return response.data;
  } catch (error) {
    console.error('City API Error:', error);
    return { success: false, data: [] };
  }
};

// GET ALL Location CMS Content
export const getAllLocationCMS = async () => {
  try {
    const response = await API.get('/location-cms/getall');
    console.log('Location CMS:', response);
    return response.data;
  } catch (error) {
    console.error('Location CMS API Error:', error);
    return { success: false, data: [] };
  }
};

/* ============================
   EXPORT SERVICE OBJECT
============================ */

const authService = {
  // auth
  signupUser,
  loginUser,

  // capability
  getAllCapabilityCategories,
  getAllCapabilitySubCategories,

  // location
  getAllLocationCountries,
  getAllLocationCities,
  getAllLocationCMS
};

export default authService;
