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
export const IMG_URL = 'http://72.62.87.252:3000';
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
    console.log("sub- category response",response);
    
    return response.data;
  } catch (error) {
    console.error("SubCat API Error", error);
    return { success: false };
  }
};

// --- Location APIs ---
export const getAllLocationCountries = async () => {
  try {
    const response = await API.get('/location-country/getall');
    return response.data;
  } catch (error) {
    console.error('Country API Error:', error);
    return { success: false, data: [] };
  }
};

export const getAllLocationCities = async () => {
  try {
    const response = await API.get('/location-city/getall');
    return response.data;
  } catch (error) {
    console.error('City API Error:', error);
    return { success: false, data: [] };
  }
};

export const getAllLocationCMS = async () => {
  try {
    const response = await API.get('/location-cms/getall');
    return response.data;
  } catch (error) {
    console.error('Location CMS API Error:', error);
    return { success: false, data: [] };
  }
};


//ourfirm 
export const getAllOurFirm = async () => {
  try {
    const response = await API.get('/ourfirm/getall');
    console.log("ourfirm", response);
    return response.data;
  } catch (error) {
    console.error("Error in getAllOurFirm:", error);
    return { success: false, data: [] };
  }
};




//award
export const getAllAwards = async () => {
  try {
    const response = await API.get('/award/getall');
    console.log("award", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching awards:", error);
    return { success: false, data: [] };
  }
};


export const getAllPromoters = () => 
  API.get('/promoter/getall')
     .then(res => res.data)
     .catch(error => {
       console.error("Error fetching promoters:", error);
       return { success: false, data: [] };
     });


     // Contact Inquiry API
export const createContactInquiry = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/contact/create`, formData);
        return response.data;
    } catch (error) {
        console.error("Error creating inquiry:", error);
        throw error;
    }
};


// --- Privacy Policy API ---
export const getAllPrivacyPolicy = async () => {
  try {
    const response = await API.get('/privacy-policy/getall');
    console.log("Privacy Policy API Response:", response);
    return response.data;
  } catch (error) {
    console.error("Privacy Policy API Error:", error);
    return { success: false, data: [] };
  }
};

// --- Terms & Conditions API ---
export const getAllTermsConditions = async () => {
  try {
    const response = await API.get('/terms-condition/getall');
    console.log("Terms API Response:", response);
    return response.data;
  } catch (error) {
    console.error("Terms API Error:", error);
    return { success: false, data: [] };
  }
};

