"use strict";
(() => {
var exports = {};
exports.id = 5560;
exports.ids = [5560,8281,7695];
exports.modules = {

/***/ 9978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_allLocations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2529);


// // File Path: pages/location/[slug].js
// import React from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Link from 'next/link';
// import { locationData } from '../../data/allLocations'; // Data import kiya
// function LocationDetail() {
//   const router = useRouter();
//   const { slug } = router.query;
//   // 1. Find Data based on URL slug
//   const office = locationData.find((loc) => loc.slug === slug);
//   // 2. Agar page load ho raha he ya data nahi mila to Fallback dikhayein
//   if (!office) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-center">
//             <h2>Loading Location...</h2>
//             <Link href="/" className="btn btn-primary mt-3">Go Home</Link>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <>
//       <Head>
//         <title>{office.name} Office | NRIS Law Firm</title>
//       </Head>
//       {/* --- HERO BANNER --- */}
//       <div className="location-hero position-relative">
//         <div className="overlay"></div>
//         <img src={office.image} alt={office.name} className="img-cover w-100" style={{height: '50vh', objectFit: 'cover'}} />
//         <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white w-100">
//             <h5 className="text-gold text-uppercase letter-spacing-2 mb-2">Global Presence</h5>
//             <h1 className="display-3 fw-bold">{office.name}</h1>
//         </div>
//       </div>
//       {/* --- DETAILS SECTION --- */}
//       <div className="container py-5">
//         <div className="row justify-content-center">
//             <div className="col-lg-10">
//                 <div className="card shadow-lg border-0 mt-n5 p-4 p-md-5">
//                     <div className="row align-items-center">
//                         <div className="col-md-7 mb-4 mb-md-0">
//                             <h2 className="mb-4 text-blue">About Our {office.name} Office</h2>
//                             <p className="lead text-secondary">{office.description}</p>
//                             <p>
//                                 At NRIS Law Firm, our {office.name} team is dedicated to providing 
//                                 world-class legal services. We specialize in local and international 
//                                 laws ensuring our clients get the best representation possible.
//                             </p>
//                         </div>
//                         <div className="col-md-5">
//                             <div className="bg-light p-4 rounded border-start border-4 border-gold">
//                                 <h4 className="mb-3">Contact Details</h4>
//                                 <div className="mb-3 d-flex">
//                                     <i className="bi bi-geo-alt-fill text-gold me-3 fs-5"></i>
//                                     <span>{office.address}</span>
//                                 </div>
//                                 <div className="mb-3 d-flex">
//                                     <i className="bi bi-telephone-fill text-gold me-3 fs-5"></i>
//                                     <a href={`tel:${office.phone}`} className="text-dark text-decoration-none fw-bold">
//                                         {office.phone}
//                                     </a>
//                                 </div>
//                                 <div className="mb-4 d-flex">
//                                     <i className="bi bi-envelope-fill text-gold me-3 fs-5"></i>
//                                     <a href={`mailto:${office.email}`} className="text-dark text-decoration-none">
//                                         {office.email}
//                                     </a>
//                                 </div>
//                                 <button className="btn btn-primary w-100 rounded-0 text-uppercase fw-bold py-2" style={{backgroundColor: '#003366', borderColor: '#003366'}}>
//                                     Get Directions
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//       {/* CSS for this page (Inline for simplicity) */}
//       <style jsx>{`
//         .location-hero {
//             position: relative;
//         }
//         .overlay {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: rgba(0, 33, 71, 0.6); /* Blue Overlay */
//         }
//         .text-gold { color: #de9f57; }
//         .text-blue { color: #003366; }
//         .border-gold { border-color: #de9f57 !important; }
//         .mt-n5 { margin-top: -80px; }
//         .letter-spacing-2 { letter-spacing: 2px; }
//       `}</style>
//     </>
//   );
// }
// export default LocationDetail;
// File Path: pages/location/[slug].js




function LocationDetail({ office  }) {
    if (!office) return null; // Agar data nahi to kuch mat dikhao (404 page avoid)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    className: "jsx-2e3a93003322ff2d",
                    children: [
                        office.name,
                        " Office | NRIS Law Firm"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-2e3a93003322ff2d" + " " + "location-hero position-relative d-flex align-items-center justify-content-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-2e3a93003322ff2d" + " " + "overlay"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: office.image || "/assets/images/banner-img3.png",
                        alt: office.name,
                        style: {
                            objectFit: "cover",
                            zIndex: -1
                        },
                        className: "jsx-2e3a93003322ff2d" + " " + "img-cover w-100 position-absolute h-100"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            zIndex: 2
                        },
                        className: "jsx-2e3a93003322ff2d" + " " + "container position-relative text-center text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "jsx-2e3a93003322ff2d" + " " + "text-gold fw-bold text-uppercase letter-spacing-2 mb-3",
                                children: "Global Network"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "jsx-2e3a93003322ff2d" + " " + "font-serif display-3 fw-bold mb-3",
                                children: office.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    maxWidth: "700px"
                                },
                                className: "jsx-2e3a93003322ff2d" + " " + "lead text-white-50 mx-auto",
                                children: [
                                    "Defining the future of law with integrity in ",
                                    office.name,
                                    "."
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-2e3a93003322ff2d" + " " + "container py-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-2e3a93003322ff2d" + " " + "row justify-content-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-2e3a93003322ff2d" + " " + "col-lg-8 pe-lg-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "jsx-2e3a93003322ff2d" + " " + "font-serif text-blue mb-4",
                                    children: [
                                        "Strategic Presence in ",
                                        office.name
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-2e3a93003322ff2d" + " " + "lead text-secondary mb-4",
                                    children: office.description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-2e3a93003322ff2d" + " " + "mb-4 text-dark",
                                    children: office.content || "At NRIS Law Firm, we provide comprehensive legal solutions tailored to the local market while leveraging our global resources."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: "jsx-2e3a93003322ff2d" + " " + "my-5 opacity-25"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "jsx-2e3a93003322ff2d" + " " + "font-serif text-blue mb-4",
                                    children: "Key Practice Areas"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-2e3a93003322ff2d" + " " + "row g-3",
                                    children: [
                                        office.practices && office.practices.map((practice, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-2e3a93003322ff2d" + " " + "col-md-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-2e3a93003322ff2d" + " " + "d-flex align-items-center p-3 bg-light border rounded",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "jsx-2e3a93003322ff2d" + " " + "bi bi-check-circle-fill text-gold me-3"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-2e3a93003322ff2d" + " " + "fw-bold text-dark",
                                                            children: practice
                                                        })
                                                    ]
                                                })
                                            }, index)),
                                        !office.practices && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-2e3a93003322ff2d",
                                            children: "General Corporate Law & Litigation"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-2e3a93003322ff2d" + " " + "col-lg-4 mt-5 mt-lg-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    top: "100px"
                                },
                                className: "jsx-2e3a93003322ff2d" + " " + "sticky-top",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        backgroundColor: "#003366"
                                    },
                                    className: "jsx-2e3a93003322ff2d" + " " + "bg-blue text-white p-4 rounded shadow-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "jsx-2e3a93003322ff2d" + " " + "font-serif text-gold mb-4 border-bottom border-secondary pb-3",
                                            children: "Office Details"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-2e3a93003322ff2d" + " " + "mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-2e3a93003322ff2d" + " " + "text-white-50 small text-uppercase fw-bold mb-1",
                                                    children: "Address"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-2e3a93003322ff2d" + " " + "d-flex",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "jsx-2e3a93003322ff2d" + " " + "bi bi-geo-alt-fill text-gold me-3 mt-1"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-2e3a93003322ff2d" + " " + "mb-0",
                                                            children: office.address
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-2e3a93003322ff2d" + " " + "mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-2e3a93003322ff2d" + " " + "text-white-50 small text-uppercase fw-bold mb-1",
                                                    children: "Phone"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-2e3a93003322ff2d" + " " + "d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "jsx-2e3a93003322ff2d" + " " + "bi bi-telephone-fill text-gold me-3"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: `tel:${office.phone}`,
                                                            className: "jsx-2e3a93003322ff2d" + " " + "text-white text-decoration-none fw-bold",
                                                            children: office.phone
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-2e3a93003322ff2d" + " " + "mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-2e3a93003322ff2d" + " " + "text-white-50 small text-uppercase fw-bold mb-1",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-2e3a93003322ff2d" + " " + "d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "jsx-2e3a93003322ff2d" + " " + "bi bi-envelope-fill text-gold me-3"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: `mailto:${office.email}`,
                                                            className: "jsx-2e3a93003322ff2d" + " " + "text-white text-decoration-none",
                                                            children: office.email
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            style: {
                                                backgroundColor: "#de9f57",
                                                color: "#000"
                                            },
                                            className: "jsx-2e3a93003322ff2d" + " " + "btn w-100 rounded-0 text-uppercase fw-bold py-3 mt-2",
                                            children: "View on Map"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "2e3a93003322ff2d",
                children: '.location-hero.jsx-2e3a93003322ff2d{height:60vh;min-height:400px;background-color:#0a1c38}.overlay.jsx-2e3a93003322ff2d{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(10,28,56,.7);z-index:1}.font-serif.jsx-2e3a93003322ff2d{font-family:"Times New Roman",serif}.text-gold.jsx-2e3a93003322ff2d{color:#de9f57!important}.text-blue.jsx-2e3a93003322ff2d{color:#036!important}.bg-blue.jsx-2e3a93003322ff2d{background-color:#036!important}.letter-spacing-2.jsx-2e3a93003322ff2d{letter-spacing:2px}'
            })
        ]
    });
}
// --- STATIC GENERATION LOGIC ---
async function getStaticPaths() {
    // Sirf wahi pages banenge jo data me hain
    const paths = _data_allLocations__WEBPACK_IMPORTED_MODULE_5__/* .locationData.map */ .z.map((loc)=>({
            params: {
                slug: loc.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const office = _data_allLocations__WEBPACK_IMPORTED_MODULE_5__/* .locationData.find */ .z.find((loc)=>loc.slug === params.slug);
    return {
        props: {
            office
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationDetail);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,2529], () => (__webpack_exec__(9978)));
module.exports = __webpack_exports__;

})();