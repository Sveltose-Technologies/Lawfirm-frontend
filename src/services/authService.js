
import API from './api';
export const IMG_URL = 'http://72.62.87.252:3000';


// ================= CLIENT AUTH =================

// 1. SIGNUP API (POST /client/signup)
export const signupUser = async (payload) => {
  console.log("🚀 Calling Signup API:", payload);
  try {
    const response = await API.post('/client/signup', payload);
    console.log("✅ Signup API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Signup API Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// 2. LOGIN API (POST /client/login)
export const loginUser = async (payload) => {
  console.log("🚀 Calling Login API:", payload);
  try {
    const response = await API.post('/client/login', payload);
    console.log("✅ Login API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Login API Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// 3. FORGOT PASSWORD API (POST /client/forgot-password)
export const forgotPassword = async (payload) => {
  console.log("🚀 Calling Forgot Password API:", payload);
  try {
    const response = await API.post('/client/forgot-password', payload);
    console.log("✅ Forgot Password Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Forgot Password API Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// 4. VERIFY OTP API (POST /client/verify-otp)
export const verifyOtp = async (payload) => {
  console.log("🚀 Calling Verify OTP API:", payload);
  try {
    const response = await API.post('/client/verify-otp', payload);
    console.log("✅ Verify OTP Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Verify OTP API Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// 5. RESET PASSWORD API (PUT /client/reset-password)
export const resetPassword = async (payload) => {
  console.log("🚀 Calling Reset Password API (PUT):", payload);
  try {
    const response = await API.put('/client/reset-password', payload);
    console.log("✅ Reset Password Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Reset Password API Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
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

// --- Capabilities Category CMS GET ---
export const getAllCapabilityCategoryCMS = async () => {
  try {
    // URL change kiya: /cms-category/getall (Check karein agar ye sahi hai)
    const response = await API.get('/cms-category/getall'); 
    console.log("🚀 Category CMS GET Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Category CMS API Error:", error);
    return { success: false, data: [] };
  }
};

// --- Capabilities Subcategory CMS GET ---
export const getAllSubcategoryCMS = async () => {
  try {
    // Aapne bataya rasta ye hai: /cms-subcategory/getall
    const response = await API.get('/cms-subcategory/getall'); 
    console.log("🚀 Subcategory CMS GET Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Subcategory CMS API Error:", error);
    return { success: false, data: [] };
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
// Contact Inquiry API
export const createContactInquiry = async (formData) => {
  try {
    const response = await API.post('/contact/create', formData);
    return response.data;
  } catch (error) {
    console.error('Error creating inquiry:', error.response || error);
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

