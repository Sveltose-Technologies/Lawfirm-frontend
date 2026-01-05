"use strict";
exports.id = 7441;
exports.ids = [7441];
exports.modules = {

/***/ 8113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://72.62.87.252:3000",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});
// 🔐 TOKEN INTERCEPTOR (LOGIN & SIGNUP SKIP)
API.interceptors.request.use((config)=>{
    const isAuthRoute = config.url.includes("/auth/login") || config.url.includes("/auth/signup");
    if (!isAuthRoute) {
        const token =  false ? 0 : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    } else {
        delete config.headers.Authorization;
    }
    return config;
}, (error)=>Promise.reject(error));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CF": () => (/* binding */ getAllCapabilityCategories),
/* harmony export */   "EL": () => (/* binding */ signupUser),
/* harmony export */   "Fu": () => (/* binding */ getAllOurFirm),
/* harmony export */   "bV": () => (/* binding */ IMG_URL),
/* harmony export */   "cr": () => (/* binding */ getAllAwards),
/* harmony export */   "fw": () => (/* binding */ getAllLocationCountries),
/* harmony export */   "jX": () => (/* binding */ getAllLocationCMS),
/* harmony export */   "mF": () => (/* binding */ getAllPromoters),
/* harmony export */   "mv": () => (/* binding */ createContactInquiry),
/* harmony export */   "pH": () => (/* binding */ loginUser),
/* harmony export */   "wA": () => (/* binding */ getAllLocationCities),
/* harmony export */   "xQ": () => (/* binding */ getAllCapabilitySubCategories)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8113);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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

const IMG_URL = "http://72.62.87.252:3000";
const signupUser = async (userData)=>{
    const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/auth/signup", userData);
    return response.data;
};
const loginUser = async (credentials)=>{
    const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/auth/login", credentials);
    return response.data;
};
// --- Capability Categories APIs ---
const getAllCapabilityCategories = async ()=>{
    try {
        const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/capability-categories/get-all");
        console.log("category response", response);
        return response.data;
    } catch (error) {
        console.error("Cat API Error", error);
        return {
            success: false
        };
    }
};
const getAllCapabilitySubCategories = async ()=>{
    try {
        const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/capability-subcategory/getall-subcategory");
        console.log("sub- category response", response);
        return response.data;
    } catch (error) {
        console.error("SubCat API Error", error);
        return {
            success: false
        };
    }
};
// --- Location APIs ---
const getAllLocationCountries = async ()=>{
    try {
        const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/location-country/getall");
        return response.data;
    } catch (error) {
        console.error("Country API Error:", error);
        return {
            success: false,
            data: []
        };
    }
};
const getAllLocationCities = async ()=>{
    try {
        const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/location-city/getall");
        return response.data;
    } catch (error) {
        console.error("City API Error:", error);
        return {
            success: false,
            data: []
        };
    }
};
const getAllLocationCMS = async ()=>{
    try {
        const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/location-cms/getall");
        return response.data;
    } catch (error) {
        console.error("Location CMS API Error:", error);
        return {
            success: false,
            data: []
        };
    }
};
//ourfirm 
const getAllOurFirm = async ()=>{
    try {
        const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/ourfirm/getall");
        console.log("ourfirm", response);
        return response.data;
    } catch (error) {
        console.error("Error in getAllOurFirm:", error);
        return {
            success: false,
            data: []
        };
    }
};
//award
const getAllAwards = async ()=>{
    try {
        const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/award/getall");
        console.log("award", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching awards:", error);
        return {
            success: false,
            data: []
        };
    }
};
const getAllPromoters = ()=>_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/promoter/getall").then((res)=>res.data).catch((error)=>{
        console.error("Error fetching promoters:", error);
        return {
            success: false,
            data: []
        };
    });
// Contact Inquiry API
const createContactInquiry = async (formData)=>{
    try {
        const response = await axios.post(`${API_URL}/contact/create`, formData);
        return response.data;
    } catch (error) {
        console.error("Error creating inquiry:", error);
        throw error;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;