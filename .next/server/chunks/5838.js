"use strict";
exports.id = 5838;
exports.ids = [5838];
exports.modules = {

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClientLayout)
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
// export default function ClientLayout({ children }) {
//   const router = useRouter();
//   const [showSidebar, setShowSidebar] = useState(false);
//   const handleLogout = (e) => {
//     e.preventDefault();
//     if (confirm("Are you sure?")) {
//       localStorage.clear();
//       router.push('/');
//     }
//   };
//   const menuItems = [
//     { name: 'Dashboard', icon: 'bi-grid', path: '/client-panel' },
//     { name: 'Attorney', icon: 'bi-person', path: '/client-panel/attorneys' },
//     { name: 'Case Details', icon: 'bi-clock-history', path: '/client-panel/cases' },
//     { name: 'Appointments', icon: 'bi-calendar-event', path: '/client-panel/appointments' },
//     // { name: 'Files', icon: 'bi-folder', path: '/client-panel/files' },
//     // { name: 'Message', icon: 'bi-chat-left-text', path: '/client-panel/messages' },
//   //  { name: 'Edit Profile', icon: 'bi-person-gear', path: '/client-panel/edit-profile' },
//   ];
//   return (
//     <div style={{ backgroundColor: '#f4f7fa', minHeight: '100vh'}}>
//       {/* Mobile Toggle Button */}
//       <div className="d-lg-none p-3 bg-white border-bottom sticky-top d-flex justify-content-between align-items-center pt-5">
//         <img src="/assets/images/attorney1.png"  height="30" alt="logo" />
//         <button className="btn border-0" onClick={() => setShowSidebar(!showSidebar)}>
//           <i className={`bi ${showSidebar ? 'bi-x-lg' : 'bi-list'} fs-3`}></i>
//         </button>
//       </div>
//       <div className="container py-lg-5 py-3 pt-5">
//         <div className="row g-4 pt-5">
//           {/* --- SIDEBAR --- */}
//           <aside className={`col-lg-3 ${showSidebar ? 'd-block' : 'd-none d-lg-block'}`}>
//             <div className="card border-0 shadow-sm rounded-4 overflow-hidden sticky-top" style={{ top: '20px' }}>
//               <div className="p-4 text-center border-bottom bg-white">
//                 <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
//                     <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm w-100 h-100" style={{ objectFit: 'cover', border: '3px solid #f8f9fa' }} alt="user" />
//                 </div>
//                 <h5 className="fw-bold mb-1" style={{color: '#002147', fontSize: '18px'}}>John</h5>
//                 <p className="text-muted mb-0 small">user@gmail.com</p>
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
//                   <div className="mt-4 pt-3 border-top">
//                     {/* <Link href="/client-panel/help"><a className="nav-link"><i className="bi bi-info-circle me-3"></i> Help & Info</a></Link> */}
//                     <a href="#" className="nav-link text-danger fw-bold" onClick={handleLogout}>
//                       <i className="bi bi-box-arrow-right me-3"></i> Logout
//                     </a>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </aside>
//           {/* --- CONTENT --- */}
//           <main className="col-lg-9">
//             <div className="bg-transparent">
//               {children}
//             </div>
//           </main>
//         </div>
//       </div>
//       <style jsx>{`
//         .sidebar-nav .nav-link { 
//           color: #444 !important; font-size: 15px; padding: 12px 18px; 
//           border-radius: 10px; transition: 0.3s; margin-bottom: 5px; font-weight: 500; text-decoration: none; display: flex; align-items: center;
//         }
//         .sidebar-nav .nav-link:hover { background: #f8f9fa; color: #de9f57 !important; }
//         .sidebar-nav .nav-link.active { background: #fcf6ef; color: #de9f57 !important; font-weight: bold; }
//         @media (max-width: 991px) {
//            aside { position: fixed; top: 70px; left: 0; width: 100%; z-index: 1000; height: calc(100vh - 70px); overflow-y: auto; background: #f4f7fa; padding: 15px; }
//         }
//       `}</style>
//     </div>
//   );
// }



function ClientLayout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: showSidebar , 1: setShowSidebar  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleLogout = (e)=>{
        e.preventDefault();
        if (confirm("Are you sure?")) {
            localStorage.clear();
            router.push("/");
        }
    };
    const menuItems = [
        {
            name: "Dashboard",
            icon: "bi-grid",
            path: "/client-panel"
        },
        {
            name: "Attorney",
            icon: "bi-person",
            path: "/client-panel/attorneys"
        },
        {
            name: "Case Details",
            icon: "bi-clock-history",
            path: "/client-panel/cases"
        },
        {
            name: "Appointments",
            icon: "bi-calendar-event",
            path: "/client-panel/appointments"
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundColor: "#f4f7fa",
            minHeight: "100vh"
        },
        className: "jsx-c1f2de9e3cb23fc5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-c1f2de9e3cb23fc5" + " " + "d-lg-none p-2 bg-white border-bottom sticky-top d-flex justify-content-end align-items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>setShowSidebar(!showSidebar),
                    className: "jsx-c1f2de9e3cb23fc5" + " " + "btn border-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "jsx-c1f2de9e3cb23fc5" + " " + `bi ${showSidebar ? "bi-x-lg" : "bi-list"} fs-1 text-dark`
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-c1f2de9e3cb23fc5" + " " + "container py-lg-5 py-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-c1f2de9e3cb23fc5" + " " + "row g-4 pt-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                            className: "jsx-c1f2de9e3cb23fc5" + " " + `col-lg-3 ${showSidebar ? "sidebar-mobile-view" : "d-none d-lg-block"}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        top: "20px"
                                    },
                                    className: "jsx-c1f2de9e3cb23fc5" + " " + "card border-0 shadow-sm rounded-4 overflow-hidden sticky-top",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c1f2de9e3cb23fc5" + " " + "p-4 text-center border-bottom bg-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        width: "100px",
                                                        height: "100px"
                                                    },
                                                    className: "jsx-c1f2de9e3cb23fc5" + " " + "mx-auto mb-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/assets/images/attorney1.png",
                                                        style: {
                                                            objectFit: "cover",
                                                            border: "3px solid #f8f9fa"
                                                        },
                                                        alt: "user",
                                                        className: "jsx-c1f2de9e3cb23fc5" + " " + "rounded-circle shadow-sm w-100 h-100"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    style: {
                                                        color: "#002147",
                                                        fontSize: "18px"
                                                    },
                                                    className: "jsx-c1f2de9e3cb23fc5" + " " + "fw-bold mb-1",
                                                    children: "John"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-c1f2de9e3cb23fc5" + " " + "text-muted mb-0 small",
                                                    children: "user@gmail.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-c1f2de9e3cb23fc5" + " " + "p-3 bg-white",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                                className: "jsx-c1f2de9e3cb23fc5" + " " + "nav flex-column sidebar-nav",
                                                children: [
                                                    menuItems.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: item.path,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                onClick: ()=>setShowSidebar(false),
                                                                className: "jsx-c1f2de9e3cb23fc5" + " " + `nav-link ${router.pathname === item.path ? "active" : ""}`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "jsx-c1f2de9e3cb23fc5" + " " + `bi ${item.icon} me-3`
                                                                    }),
                                                                    " ",
                                                                    item.name
                                                                ]
                                                            })
                                                        }, idx)),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-c1f2de9e3cb23fc5" + " " + "mt-4 pt-3 border-top",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: "#",
                                                            onClick: handleLogout,
                                                            className: "jsx-c1f2de9e3cb23fc5" + " " + "nav-link text-danger fw-bold",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "jsx-c1f2de9e3cb23fc5" + " " + "bi bi-box-arrow-right me-3"
                                                                }),
                                                                " Logout"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                showSidebar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setShowSidebar(false),
                                    className: "jsx-c1f2de9e3cb23fc5" + " " + "overlay d-lg-none"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                            className: "jsx-c1f2de9e3cb23fc5" + " " + "col-lg-9",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-c1f2de9e3cb23fc5" + " " + "bg-transparent",
                                children: children
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c1f2de9e3cb23fc5",
                children: ".sidebar-nav.jsx-c1f2de9e3cb23fc5 .nav-link.jsx-c1f2de9e3cb23fc5{color:#444!important;font-size:15px;padding:12px 18px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;margin-bottom:5px;font-weight:500;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.sidebar-nav.jsx-c1f2de9e3cb23fc5 .nav-link.jsx-c1f2de9e3cb23fc5:hover{background:#f8f9fa;color:#de9f57!important}.sidebar-nav.jsx-c1f2de9e3cb23fc5 .nav-link.active.jsx-c1f2de9e3cb23fc5{background:#fcf6ef;color:#de9f57!important;font-weight:bold}@media(max-width:991px){.sidebar-mobile-view.jsx-c1f2de9e3cb23fc5{position:fixed;top:60px;left:0;width:100%;padding:15px;z-index:1050;display:block!important}.overlay.jsx-c1f2de9e3cb23fc5{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.2);z-index:1040}}"
            })
        ]
    });
};


/***/ })

};
;