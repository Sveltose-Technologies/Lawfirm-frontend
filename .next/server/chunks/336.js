"use strict";
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 7336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AttorneyLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// export default function AttorneyLayout({ children }) {
//   const router = useRouter();
//   const [showSidebar, setShowSidebar] = useState(false);
//   const menuItems = [
//     { name: 'Dashboard', icon: 'bi-grid-fill', path: '/attorney-panel' },
//     { name: 'Appointments', icon: 'bi-calendar-check', path: '/attorney-panel/appointments' },
//     { name: 'Client Management', icon: 'bi-people-fill', path: '/attorney-panel/clients' },
//     { name: 'Case Details', icon: 'bi-clock-history', path: '/attorney-panel/cases' },
//     { name: 'Messages', icon: 'bi-chat-dots-fill', path: '/attorney-panel/messages' },
//     { name: 'Ticket Management', icon: 'bi-ticket-perforated-fill', path: '/attorney-panel/tickets' },
//     { name: 'Edit Profile', icon: 'bi-person-bounding-box', path: '/attorney-panel/profile' },
//   ];
//   return (
//     <div style={{ backgroundColor: '#f4f7fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {/* --- MAIN BODY (Sidebar + Content) --- */}
//       <div className="container py-5 flex-grow-1">
//         <div className="row g-4 pt-5">
//           {/* Sidebar Column */}
//           <aside className={`col-lg-3 ${showSidebar ? 'd-block' : 'd-none d-lg-block'}`}>
//             <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//               <div className="p-4 text-center border-bottom bg-white">
//                 <div className="mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
//                     <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm w-100 h-100" style={{ objectFit: 'cover', border: '4px solid #f8f9fa' }} alt="avatar" />
//                 </div>
//                 <h5 className="fw-bold mb-1" style={{color: '#002147'}}>Tasnia Sharin</h5>
//                 <p className="text-muted mb-0 fs-6">attorney@gmail.com</p>
//               </div>
//               <div className="p-3 bg-white">
//                 <nav className="nav flex-column sidebar-nav">
//                   {menuItems.map((item, idx) => (
//                     <Link key={idx} href={item.path}>
//                       <a className={`nav-link ${router.pathname === item.path ? 'active' : ''}`}>
//                         <i className={`bi ${item.icon} me-3`}></i> {item.name}
//                       </a>
//                     </Link>
//                   ))}
//                   <div className="mt-4 pt-4 border-top">
//                     <Link href="/logout">
//                       <a className="nav-link text-danger fw-bold"><i className="bi bi-box-arrow-right me-3"></i> Logout</a>
//                     </Link>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </aside>
//           {/* Page Content Column */}
//           <main className="col-lg-9">
//             {children}
//           </main>
//         </div>
//       </div>
//       <style jsx>{`
//         .sidebar-nav .nav-link { 
//           color: #444 !important; font-size: 17px; padding: 12px 20px; 
//           border-radius: 10px; transition: 0.3s; margin-bottom: 5px; font-weight: 500; text-decoration: none; display: block;
//         }
//         .sidebar-nav .nav-link:hover { background: #f8f9fa; color: #de9f57 !important; }
//         .sidebar-nav .nav-link.active { background: #fcf6ef; color: #de9f57 !important; font-weight: bold; }
//       `}</style>
//     </div>
//   );
// }



function AttorneyLayout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: showSidebar , 1: setShowSidebar  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // --- LOGOUT FUNCTION ---
    const handleLogout = (e)=>{
        e.preventDefault();
        if (confirm("Are you sure you want to logout?")) {
            localStorage.clear();
            sessionStorage.clear();
            router.push("/");
        }
    };
    const menuItems = [
        {
            name: "Dashboard",
            icon: "bi-grid-fill",
            path: "/attorney-panel"
        },
        {
            name: "Appointments",
            icon: "bi-calendar-check",
            path: "/attorney-panel/appointments"
        },
        {
            name: "Client Management",
            icon: "bi-people-fill",
            path: "/attorney-panel/clients"
        },
        {
            name: "Case Details",
            icon: "bi-clock-history",
            path: "/attorney-panel/cases"
        },
        {
            name: "Messages",
            icon: "bi-chat-dots-fill",
            path: "/attorney-panel/messages"
        },
        {
            name: "Ticket Management",
            icon: "bi-ticket-perforated-fill",
            path: "/attorney-panel/tickets"
        },
        {
            name: "Edit Profile",
            icon: "bi-person-bounding-box",
            path: "/attorney-panel/profile"
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundColor: "#f4f7fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        },
        className: "jsx-8aef27b64bbc094",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-8aef27b64bbc094" + " " + "container py-5 flex-grow-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-8aef27b64bbc094" + " " + "row g-4 pt-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                            className: "jsx-8aef27b64bbc094" + " " + `col-lg-3 ${showSidebar ? "d-block" : "d-none d-lg-block"}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-8aef27b64bbc094" + " " + "card border-0 shadow-sm rounded-4 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-8aef27b64bbc094" + " " + "p-4 text-center border-bottom bg-white",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    width: "120px",
                                                    height: "120px"
                                                },
                                                className: "jsx-8aef27b64bbc094" + " " + "mx-auto mb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/assets/images/attorney1.png",
                                                    style: {
                                                        objectFit: "cover",
                                                        border: "4px solid #f8f9fa"
                                                    },
                                                    alt: "avatar",
                                                    className: "jsx-8aef27b64bbc094" + " " + "rounded-circle shadow-sm w-100 h-100"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                style: {
                                                    color: "#002147"
                                                },
                                                className: "jsx-8aef27b64bbc094" + " " + "fw-bold mb-1",
                                                children: "Tasnia Sharin"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-8aef27b64bbc094" + " " + "text-muted mb-0 fs-6 small",
                                                children: "attorney@gmail.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-8aef27b64bbc094" + " " + "p-3 bg-white",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                            className: "jsx-8aef27b64bbc094" + " " + "nav flex-column sidebar-nav",
                                            children: [
                                                menuItems.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: item.path,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            className: "jsx-8aef27b64bbc094" + " " + `nav-link ${router.pathname === item.path ? "active" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "jsx-8aef27b64bbc094" + " " + `bi ${item.icon} me-3`
                                                                }),
                                                                " ",
                                                                item.name
                                                            ]
                                                        })
                                                    }, idx)),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-8aef27b64bbc094" + " " + "mt-4 pt-4 border-top",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#",
                                                        onClick: handleLogout,
                                                        className: "jsx-8aef27b64bbc094" + " " + "nav-link text-danger fw-bold",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "jsx-8aef27b64bbc094" + " " + "bi bi-box-arrow-right me-3"
                                                            }),
                                                            " Logout"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                            className: "jsx-8aef27b64bbc094" + " " + "col-lg-9",
                            children: children
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8aef27b64bbc094",
                children: ".sidebar-nav.jsx-8aef27b64bbc094 .nav-link.jsx-8aef27b64bbc094{color:#444!important;font-size:15px;padding:12px 20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;margin-bottom:5px;font-weight:500;text-decoration:none;display:block}.sidebar-nav.jsx-8aef27b64bbc094 .nav-link.jsx-8aef27b64bbc094:hover{background:#f8f9fa;color:#de9f57!important}.sidebar-nav.jsx-8aef27b64bbc094 .nav-link.active.jsx-8aef27b64bbc094{background:#fcf6ef;color:#de9f57!important;font-weight:bold}"
            })
        ]
    });
};


/***/ })

};
;