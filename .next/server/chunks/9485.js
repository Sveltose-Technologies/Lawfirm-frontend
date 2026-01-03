"use strict";
exports.id = 9485;
exports.ids = [9485];
exports.modules = {

/***/ 9485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ PaginationBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);


// import React from 'react';
// // --- 1. PAGINATION COMPONENT ---
// export function PaginationBar({ current, total, onPageChange }) {
//   if (total <= 1) return null;
//   return (
//     <div className="d-flex justify-content-between align-items-center p-3 border-top bg-light">
//       <span className="text-muted small fw-bold">Page {current} of {total}</span>
//       <nav>
//         <ul className="pagination pagination-sm mb-0">
//           <li className={`page-item ${current === 1 ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => onPageChange(current - 1)}>Prev</button>
//           </li>
//           <li className="page-item active">
//             <span className="page-link border-0 text-white" style={{ backgroundColor: '#002147' }}>{current}</span>
//           </li>
//           <li className={`page-item ${current === total ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => onPageChange(current + 1)}>Next</button>
//           </li>
//         </ul>
//       </nav>
//       <style jsx>{`
//         .page-link { color: #002147; font-weight: 600; border-radius: 8px; margin: 0 3px; cursor: pointer; }
//         .page-link:hover { background: #fcf6ef; color: #de9f57; }
//       `}</style>
//     </div>
//   );
// }
// // --- 2. MODAL COMPONENT ---
// export function Modal({ title, onClose, children }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-card shadow-lg">
//         <div className="p-4 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#002147' }}>
//           <h5 className="mb-0 fw-bold" style={{ fontSize: '18px' }}>{title}</h5>
//           <button className="btn-close btn-close-white" onClick={onClose}></button>
//         </div>
//         <div className="p-4 bg-white" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//           {children}
//         </div>
//       </div>
//       <style jsx>{`
//         .modal-overlay { 
//           position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
//           background: rgba(0,0,0,0.6); z-index: 9999; 
//           display: flex; align-items: center; justify-content: center; padding: 15px;
//         }
//         .modal-card { background: white; width: 100%; max-width: 650px; border-radius: 20px; overflow: hidden; }
//       `}</style>
//     </div>
//   );
// }
// --- 1. PAGINATION COMPONENT ---
function PaginationBar({ current , total , onPageChange  }) {
    // Yahan badlav kiya gaya hai: <= 1 ki jagah < 1
    if (total < 1) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-34bd3d68eabb3549" + " " + "d-flex justify-content-between align-items-center p-3 border-top bg-light",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "jsx-34bd3d68eabb3549" + " " + "text-muted small fw-bold",
                children: [
                    "Page ",
                    current,
                    " of ",
                    total
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "jsx-34bd3d68eabb3549",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "jsx-34bd3d68eabb3549" + " " + "pagination pagination-sm mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "jsx-34bd3d68eabb3549" + " " + `page-item ${current === 1 ? "disabled" : ""}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>current > 1 && onPageChange(current - 1),
                                className: "jsx-34bd3d68eabb3549" + " " + "page-link",
                                children: "Prev"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "jsx-34bd3d68eabb3549" + " " + "page-item active",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    backgroundColor: "#002147"
                                },
                                className: "jsx-34bd3d68eabb3549" + " " + "page-link border-0 text-white",
                                children: current
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "jsx-34bd3d68eabb3549" + " " + `page-item ${current === total ? "disabled" : ""}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>current < total && onPageChange(current + 1),
                                className: "jsx-34bd3d68eabb3549" + " " + "page-link",
                                children: "Next"
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "34bd3d68eabb3549",
                children: ".page-link.jsx-34bd3d68eabb3549{color:#002147;font-weight:600;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin:0 3px;cursor:pointer}.page-link.jsx-34bd3d68eabb3549:hover{background:#fcf6ef;color:#de9f57}.page-item.disabled.jsx-34bd3d68eabb3549 .page-link.jsx-34bd3d68eabb3549{color:#ccc;cursor:not-allowed}"
            })
        ]
    });
}


/***/ })

};
;