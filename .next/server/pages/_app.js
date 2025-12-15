(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,281,695];
exports.modules = {

/***/ 4898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/common/Footer.jsx

// import React from 'react'
// import Link from "next/link"
// function Footer() {
//   return (
//     <>
//      <footer className="footer-section">
//   <div className="footer-top">
//     <div className="container-xl container-lg-fluid container">
//       <div className="row gy-5">
//         <div className="col-lg-3 col-md-6">
//           <div className="footer-about">
//             <img src="assets/images/icons/header1-logo.svg" alt="image" />
//             <p>Integer purus odio, placerat nec andi
//               rhoncus in, ullamcorper nec dolorali
//               aptent taciti sociosqu.</p>
//             <ul className="footer-social gap-4">
//               <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
//               <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
//               <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
//               <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
//             </ul>
//             <div className="open-hour">
//               <h6>Open Hour</h6>
//               <p>Monday To Saturday,       
//                 9.00 AM - 10.30 PM</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
//           <div className="footer-item">
//             <h4>Practice Area</h4>
//             <ul className="link-list">
//               <li><Link href="/practice-details"><a>Business Law</a></Link></li>
//               <li><Link href="/practice-details"><a>Work Accident</a></Link></li>
//               <li><Link href="/practice-details"><a>Criminal Law</a></Link></li>
//               <li><Link href="/practice-details"><a>Real State Law</a></Link></li>
//               <li><Link href="/practice-details"><a>Drug Offense</a></Link></li>
//               <li><Link href="/practice-details"><a>Juvenile Crime</a></Link></li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
//           <div className="footer-item">
//             <h4>Contacts</h4>
//             <ul className="contact-list">
//               <li>
//                 <div className="icon">
//                   <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_169_19583)">
//                       <path d="M18.1771 14.2474C17.7063 13.7571 17.1383 13.495 16.5364 13.495C15.9393 13.495 15.3665 13.7523 14.8762 14.2425L13.3422 15.7716C13.216 15.7037 13.0898 15.6406 12.9684 15.5775C12.7937 15.4901 12.6286 15.4076 12.4879 15.3202C11.051 14.4076 9.74519 13.2183 8.49278 11.6795C7.88599 10.9125 7.47823 10.2669 7.18212 9.61153C7.58017 9.24745 7.9491 8.86882 8.30832 8.50475C8.44424 8.36882 8.58016 8.22805 8.71608 8.09213C9.73548 7.07272 9.73548 5.75235 8.71608 4.73295L7.39085 3.40772C7.24037 3.25724 7.08503 3.1019 6.9394 2.94656C6.64814 2.6456 6.34232 2.33492 6.02679 2.04366C5.55592 1.57765 4.99282 1.33008 4.4006 1.33008C3.80837 1.33008 3.23556 1.57765 2.75013 2.04366C2.74528 2.04852 2.74528 2.04852 2.74043 2.05337L1.08996 3.7184C0.46861 4.33975 0.114245 5.09702 0.0365763 5.97565C-0.079927 7.39311 0.337543 8.71348 0.657928 9.57755C1.44433 11.6989 2.61907 13.6649 4.37147 15.7716C6.49766 18.3104 9.05588 20.3153 11.9782 21.7279C13.0947 22.257 14.5849 22.8832 16.25 22.99C16.3519 22.9949 16.4587 22.9997 16.5558 22.9997C17.6771 22.9997 18.6189 22.5968 19.3567 21.7958C19.3616 21.7861 19.3713 21.7813 19.3761 21.7716C19.6286 21.4657 19.9198 21.1891 20.2256 20.8929C20.4344 20.6939 20.648 20.4852 20.8567 20.2667C21.3373 19.7667 21.5897 19.1842 21.5897 18.5871C21.5897 17.9852 21.3324 17.4075 20.8421 16.9221L18.1771 14.2474ZM19.915 19.359C19.9101 19.359 19.9101 19.3638 19.915 19.359C19.7256 19.5629 19.5315 19.7473 19.3227 19.9512C19.0072 20.2522 18.6868 20.5677 18.3859 20.9221C17.8956 21.4463 17.3179 21.6939 16.5606 21.6939C16.4878 21.6939 16.4102 21.6939 16.3373 21.689C14.8956 21.5968 13.5558 21.0337 12.551 20.5531C9.80344 19.2231 7.39085 17.3347 5.38602 14.9416C3.7307 12.9464 2.62392 11.1018 1.89092 9.12124C1.43947 7.91252 1.27442 6.97078 1.34724 6.08245C1.39578 5.51449 1.61423 5.04362 2.01713 4.64072L3.67245 2.9854C3.91031 2.7621 4.16274 2.64074 4.41031 2.64074C4.71613 2.64074 4.9637 2.82521 5.11904 2.98054C5.12389 2.9854 5.12874 2.99025 5.1336 2.99511C5.42971 3.2718 5.71126 3.55821 6.00737 3.86403C6.15786 4.01937 6.31319 4.1747 6.46853 4.3349L7.79376 5.66012C8.30832 6.17468 8.30832 6.6504 7.79376 7.16496C7.65298 7.30573 7.51706 7.44651 7.37629 7.58243C6.96853 7.9999 6.58018 8.38824 6.15786 8.76688C6.14815 8.77659 6.13844 8.78144 6.13359 8.79115C5.71611 9.20862 5.79378 9.61638 5.88116 9.89308C5.88602 9.90764 5.89087 9.9222 5.89572 9.93677C6.24038 10.7717 6.72581 11.5581 7.46367 12.495L7.46852 12.4998C8.80831 14.1503 10.2209 15.4367 11.7791 16.4221C11.9782 16.5483 12.1821 16.6503 12.3762 16.7474C12.551 16.8347 12.716 16.9173 12.8568 17.0046C12.8762 17.0143 12.8956 17.0289 12.9151 17.0386C13.0801 17.1211 13.2354 17.16 13.3956 17.16C13.7985 17.16 14.051 16.9076 14.1335 16.825L15.7937 15.1649C15.9587 14.9998 16.2208 14.8008 16.5267 14.8008C16.8276 14.8008 17.0752 14.9901 17.2257 15.1551C17.2305 15.16 17.2305 15.16 17.2354 15.1649L19.9101 17.8396C20.4101 18.3347 20.4101 18.8444 19.915 19.359Z" />
//                       <path d="M12.43 5.47141C13.7019 5.685 14.8572 6.28693 15.7795 7.20925C16.7018 8.13157 17.2989 9.28689 17.5174 10.5587C17.5708 10.8791 17.8474 11.1024 18.163 11.1024C18.2018 11.1024 18.2358 11.0975 18.2746 11.0927C18.6338 11.0344 18.8717 10.6946 18.8135 10.3354C18.5513 8.79661 17.8232 7.39371 16.7115 6.28208C15.5999 5.17044 14.197 4.44229 12.6582 4.18016C12.299 4.12191 11.964 4.35977 11.9009 4.71413C11.8378 5.0685 12.0708 5.41315 12.43 5.47141Z" />
//                       <path d="M22.9732 10.1458C22.5411 7.61183 21.347 5.30604 19.512 3.47111C17.6771 1.63618 15.3713 0.442024 12.8374 0.00999088C12.483 -0.0531151 12.148 0.1896 12.0849 0.543965C12.0267 0.903183 12.2646 1.23813 12.6238 1.30124C14.8859 1.68473 16.949 2.75753 18.5897 4.39343C20.2305 6.03418 21.2984 8.09727 21.6819 10.3594C21.7353 10.6798 22.012 10.9031 22.3275 10.9031C22.3664 10.9031 22.4003 10.8982 22.4392 10.8933C22.7935 10.8399 23.0363 10.5001 22.9732 10.1458Z" />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_169_19583">
//                         <rect width={23} height={23} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//                 <div className="text">
//                   <a href="tel:+8801761111456">+880 176 1111 456</a> 
//                   <a href="tel:+8801761111458" className="mb-0">+880 176 1111 458</a>
//                 </div>
//               </li>
//               <li>
//                 <div className="icon">
//                   <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_169_19592)">
//                       <path d="M20.7988 2.91992H2.11134C0.922305 2.91992 -0.0449219 3.88715 -0.0449219 5.07619V18.0137C-0.0449219 19.2027 0.922305 20.1699 2.11134 20.1699H20.7988C21.9879 20.1699 22.9551 19.2027 22.9551 18.0137V5.07619C22.9551 3.88715 21.9879 2.91992 20.7988 2.91992ZM20.7988 4.35742C20.8965 4.35742 20.9894 4.37768 21.0743 4.41306L11.4551 12.7501L1.83581 4.41306C1.92074 4.37772 2.01364 4.35742 2.11129 4.35742H20.7988ZM20.7988 18.7324H2.11134C1.71477 18.7324 1.39257 18.4103 1.39257 18.0136V5.93179L10.9841 14.2444C11.1196 14.3616 11.2873 14.4199 11.4551 14.4199C11.6228 14.4199 11.7906 14.3617 11.9261 14.2444L21.5176 5.93179V18.0137C21.5175 18.4103 21.1954 18.7324 20.7988 18.7324Z" />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_169_19592">
//                         <rect width={23} height={23} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>   
//                 </div>
//                 <div className="text">
//                   <a href="mailto:info@example.com">info@example.com</a>
//                   <a href="mailto:support@example.com" className="mb-0">support@example.com</a>
//                 </div>
//               </li>
//               <li>
//                 <div className="icon">
//                   <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_169_19596)">
//                       <path d="M18.3087 3.93864C16.9129 1.52975 14.4335 0.0580615 11.6764 0.00181934C11.5588 -0.000606445 11.4403 -0.000606445 11.3226 0.00181934C8.56552 0.0580615 6.08619 1.52975 4.69029 3.93864C3.26348 6.4009 3.22444 9.35855 4.58585 11.8504L10.2893 22.2897C10.2918 22.2943 10.2944 22.2989 10.297 22.3035C10.548 22.7397 10.9975 23 11.4996 23C12.0016 23 12.4512 22.7396 12.7021 22.3035C12.7047 22.2989 12.7073 22.2943 12.7098 22.2897L18.4132 11.8504C19.7746 9.35855 19.7355 6.4009 18.3087 3.93864ZM11.4995 10.4219C9.71606 10.4219 8.26513 8.97097 8.26513 7.18752C8.26513 5.40408 9.71606 3.95315 11.4995 3.95315C13.2829 3.95315 14.7339 5.40408 14.7339 7.18752C14.7339 8.97097 13.283 10.4219 11.4995 10.4219Z" />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_169_19596">
//                         <rect width={23} height={23} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//                 <div className="text">
//                   168/170, Avenue 01, Mirpur DOHS, Bangladesh
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 d-flex justify-content-lg-end">
//           <div className="footer-item">
//             <h4>Recent Case</h4>
//             <ul className="recent-caselist">
//               <li>
//                 <div className="image">
//                   <img src="assets/images/blog/recent-case1.png" alt="image" />
//                 </div>
//                 <div className="text">
//                   <span>skirmish</span>
//                   <h5><Link href="/casestudy-details"><a>Education Law</a></Link></h5>
//                 </div>
//               </li>
//               <li>
//                 <div className="image">
//                   <img src="assets/images/blog/recent-case2.png" alt="image" />
//                 </div>
//                 <div className="text">
//                   <span>skirmish</span>
//                   <h5><Link href="/casestudy-details"><a>Personal injury</a></Link></h5>
//                 </div>
//               </li>
//               <li>
//                 <div className="image">
//                   <img src="assets/images/blog/recent-case3.png" alt="image" />
//                 </div>
//                 <div className="text">
//                   <span>skirmish</span>
//                   <h5><Link href="/casestudy-details"><a>Drug Offense</a></Link></h5>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="container">
//     <div className="footer-bottom">
//       <div className="row d-flex align-items-center g-3">
//         <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
//           <p>Copyright 2022 <Link href="#"><a className="egns-lab">Core Law</a></Link> | Design By <a href="https://themeforest.net/category/site-templates?term=egenslab" className="egns-lab">Egens Lab</a></p>
//         </div>
//         <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
//           <ul className="f-bottom-list d-flex jusify-content-start align-items-center">
//             <li><Link href="#">Privacy Policy</Link></li>
//             <li><Link href="#">Terms of Use</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
//     </>
//   )
// }
// export default Footer
// import React from 'react'
// import Link from "next/link"
// function Footer() {
//   return (
//     <>
//      <footer className="footer-section">
//   <div className="footer-top">
//     <div className="container-xl container-lg-fluid container">
//       <div className="row gy-5">
//         {/* Column 1: About & Social */}
//         <div className="col-lg-3 col-md-6">
//           <div className="footer-about">
//             {/* Keeping original logo src as placeholder, or replace with GT logo if you have it */}
//             <img src="/assets/images/logo.png" alt="Greenberg Traurig" />
//             <p>
//           NRIS LAW FIRM<br/>
//               Attorney Advertising.<br/>
//               All rights reserved.
//             </p>
//             <ul className="footer-social gap-4">
//               {/* Mapped GT Socials */}
//               <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
//               <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
//               <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
//               <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li> 
//             </ul>
//             <div className="open-hour">
//               <h6>Global Presence</h6>
//               <p>United States, Europe, Asia, <br/>
//                 Latin America, Middle East</p>
//             </div>
//           </div>
//         </div>
//         {/* Column 2: Locations (Replaced Practice Area) */}
//         <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
//           <div className="footer-item">
//             <h4>Key Locations</h4>
//             <ul className="link-list">
//               {/* Selected locations from your list to fit the design */}
//               <li><Link href="#"><a>New York</a></Link></li>
//               <li><Link href="#"><a>London</a></Link></li>
//               <li><Link href="#"><a>Amsterdam</a></Link></li>
//               <li><Link href="#"><a>Tokyo</a></Link></li>
//               <li><Link href="#"><a>Tel Aviv</a></Link></li>
//               <li><Link href="#"><a>United Arab Emirates</a></Link></li>
//             </ul>
//           </div>
//         </div>
//         {/* Column 3: Contact Info */}
//         <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
//           <div className="footer-item">
//             <h4>Contact Us</h4>
//             <ul className="contact-list">
//               <li>
//                 <div className="icon">
//                   {/* Phone Icon SVG */}
//                   <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_169_19583)">
//                       <path d="M18.1771 14.2474C17.7063 13.7571 17.1383 13.495 16.5364 13.495C15.9393 13.495 15.3665 13.7523 14.8762 14.2425L13.3422 15.7716C13.216 15.7037 13.0898 15.6406 12.9684 15.5775C12.7937 15.4901 12.6286 15.4076 12.4879 15.3202C11.051 14.4076 9.74519 13.2183 8.49278 11.6795C7.88599 10.9125 7.47823 10.2669 7.18212 9.61153C7.58017 9.24745 7.9491 8.86882 8.30832 8.50475C8.44424 8.36882 8.58016 8.22805 8.71608 8.09213C9.73548 7.07272 9.73548 5.75235 8.71608 4.73295L7.39085 3.40772C7.24037 3.25724 7.08503 3.1019 6.9394 2.94656C6.64814 2.6456 6.34232 2.33492 6.02679 2.04366C5.55592 1.57765 4.99282 1.33008 4.4006 1.33008C3.80837 1.33008 3.23556 1.57765 2.75013 2.04366C2.74528 2.04852 2.74528 2.04852 2.74043 2.05337L1.08996 3.7184C0.46861 4.33975 0.114245 5.09702 0.0365763 5.97565C-0.079927 7.39311 0.337543 8.71348 0.657928 9.57755C1.44433 11.6989 2.61907 13.6649 4.37147 15.7716C6.49766 18.3104 9.05588 20.3153 11.9782 21.7279C13.0947 22.257 14.5849 22.8832 16.25 22.99C16.3519 22.9949 16.4587 22.9997 16.5558 22.9997C17.6771 22.9997 18.6189 22.5968 19.3567 21.7958C19.3616 21.7861 19.3713 21.7813 19.3761 21.7716C19.6286 21.4657 19.9198 21.1891 20.2256 20.8929C20.4344 20.6939 20.648 20.4852 20.8567 20.2667C21.3373 19.7667 21.5897 19.1842 21.5897 18.5871C21.5897 17.9852 21.3324 17.4075 20.8421 16.9221L18.1771 14.2474ZM19.915 19.359C19.9101 19.359 19.9101 19.3638 19.915 19.359C19.7256 19.5629 19.5315 19.7473 19.3227 19.9512C19.0072 20.2522 18.6868 20.5677 18.3859 20.9221C17.8956 21.4463 17.3179 21.6939 16.5606 21.6939C16.4878 21.6939 16.4102 21.6939 16.3373 21.689C14.8956 21.5968 13.5558 21.0337 12.551 20.5531C9.80344 19.2231 7.39085 17.3347 5.38602 14.9416C3.7307 12.9464 2.62392 11.1018 1.89092 9.12124C1.43947 7.91252 1.27442 6.97078 1.34724 6.08245C1.39578 5.51449 1.61423 5.04362 2.01713 4.64072L3.67245 2.9854C3.91031 2.7621 4.16274 2.64074 4.41031 2.64074C4.71613 2.64074 4.9637 2.82521 5.11904 2.98054C5.12389 2.9854 5.12874 2.99025 5.1336 2.99511C5.42971 3.2718 5.71126 3.55821 6.00737 3.86403C6.15786 4.01937 6.31319 4.1747 6.46853 4.3349L7.79376 5.66012C8.30832 6.17468 8.30832 6.6504 7.79376 7.16496C7.65298 7.30573 7.51706 7.44651 7.37629 7.58243C6.96853 7.9999 6.58018 8.38824 6.15786 8.76688C6.14815 8.77659 6.13844 8.78144 6.13359 8.79115C5.71611 9.20862 5.79378 9.61638 5.88116 9.89308C5.88602 9.90764 5.89087 9.9222 5.89572 9.93677C6.24038 10.7717 6.72581 11.5581 7.46367 12.495L7.46852 12.4998C8.80831 14.1503 10.2209 15.4367 11.7791 16.4221C11.9782 16.5483 12.1821 16.6503 12.3762 16.7474C12.551 16.8347 12.716 16.9173 12.8568 17.0046C12.8762 17.0143 12.8956 17.0289 12.9151 17.0386C13.0801 17.1211 13.2354 17.16 13.3956 17.16C13.7985 17.16 14.051 16.9076 14.1335 16.825L15.7937 15.1649C15.9587 14.9998 16.2208 14.8008 16.5267 14.8008C16.8276 14.8008 17.0752 14.9901 17.2257 15.1551C17.2305 15.16 17.2305 15.16 17.2354 15.1649L19.9101 17.8396C20.4101 18.3347 20.4101 18.8444 19.915 19.359Z" />
//                       <path d="M12.43 5.47141C13.7019 5.685 14.8572 6.28693 15.7795 7.20925C16.7018 8.13157 17.2989 9.28689 17.5174 10.5587C17.5708 10.8791 17.8474 11.1024 18.163 11.1024C18.2018 11.1024 18.2358 11.0975 18.2746 11.0927C18.6338 11.0344 18.8717 10.6946 18.8135 10.3354C18.5513 8.79661 17.8232 7.39371 16.7115 6.28208C15.5999 5.17044 14.197 4.44229 12.6582 4.18016C12.299 4.12191 11.964 4.35977 11.9009 4.71413C11.8378 5.0685 12.0708 5.41315 12.43 5.47141Z" />
//                       <path d="M22.9732 10.1458C22.5411 7.61183 21.347 5.30604 19.512 3.47111C17.6771 1.63618 15.3713 0.442024 12.8374 0.00999088C12.483 -0.0531151 12.148 0.1896 12.0849 0.543965C12.0267 0.903183 12.2646 1.23813 12.6238 1.30124C14.8859 1.68473 16.949 2.75753 18.5897 4.39343C20.2305 6.03418 21.2984 8.09727 21.6819 10.3594C21.7353 10.6798 22.012 10.9031 22.3275 10.9031C22.3664 10.9031 22.4003 10.8982 22.4392 10.8933C22.7935 10.8399 23.0363 10.5001 22.9732 10.1458Z" />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_169_19583">
//                         <rect width={23} height={23} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//                 <div className="text">
//                   <a href="#">Contact Us</a> 
//                   <a href="#" className="mb-0">Global Offices</a>
//                 </div>
//               </li>
//               <li>
//                 <div className="icon">
//                   {/* Email Icon SVG */}
//                   <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_169_19592)">
//                       <path d="M20.7988 2.91992H2.11134C0.922305 2.91992 -0.0449219 3.88715 -0.0449219 5.07619V18.0137C-0.0449219 19.2027 0.922305 20.1699 2.11134 20.1699H20.7988C21.9879 20.1699 22.9551 19.2027 22.9551 18.0137V5.07619C22.9551 3.88715 21.9879 2.91992 20.7988 2.91992ZM20.7988 4.35742C20.8965 4.35742 20.9894 4.37768 21.0743 4.41306L11.4551 12.7501L1.83581 4.41306C1.92074 4.37772 2.01364 4.35742 2.11129 4.35742H20.7988ZM20.7988 18.7324H2.11134C1.71477 18.7324 1.39257 18.4103 1.39257 18.0136V5.93179L10.9841 14.2444C11.1196 14.3616 11.2873 14.4199 11.4551 14.4199C11.6228 14.4199 11.7906 14.3617 11.9261 14.2444L21.5176 5.93179V18.0137C21.5175 18.4103 21.1954 18.7324 20.7988 18.7324Z" />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_169_19592">
//                         <rect width={23} height={23} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>   
//                 </div>
//                 <div className="text">
//                   <a href="#">Alumni Network</a>
//                   <a href="#" className="mb-0">info@nrislawfirm
// .com</a>
//                 </div>
//               </li>
//               <li>
//                 <div className="icon">
//                   {/* Location Icon SVG */}
//                   <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_169_19596)">
//                       <path d="M18.3087 3.93864C16.9129 1.52975 14.4335 0.0580615 11.6764 0.00181934C11.5588 -0.000606445 11.4403 -0.000606445 11.3226 0.00181934C8.56552 0.0580615 6.08619 1.52975 4.69029 3.93864C3.26348 6.4009 3.22444 9.35855 4.58585 11.8504L10.2893 22.2897C10.2918 22.2943 10.2944 22.2989 10.297 22.3035C10.548 22.7397 10.9975 23 11.4996 23C12.0016 23 12.4512 22.7396 12.7021 22.3035C12.7047 22.2989 12.7073 22.2943 12.7098 22.2897L18.4132 11.8504C19.7746 9.35855 19.7355 6.4009 18.3087 3.93864ZM11.4995 10.4219C9.71606 10.4219 8.26513 8.97097 8.26513 7.18752C8.26513 5.40408 9.71606 3.95315 11.4995 3.95315C13.2829 3.95315 14.7339 5.40408 14.7339 7.18752C14.7339 8.97097 13.283 10.4219 11.4995 10.4219Z" />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_169_19596">
//                         <rect width={23} height={23} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//                 <div className="text">
//                   Tadepalle, Guntur District, Andhra Pradesh, 522501
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Column 4: Regional Highlights (Replaced Recent Case) */}
//         <div className="col-lg-3 col-md-6 d-flex justify-content-lg-end">
//           <div className="footer-item">
//             <h4>Office Highlights</h4>
//             <ul className="recent-caselist">
//               <li>
//                 <div className="image">
//                   <img src="/assets/images/blog/recent-case2.png" alt="image" />
//                 </div>
//                 <div className="text">
//                   <span>Europe</span>
//                   <h5><Link href="#"><a>Berlin Office</a></Link></h5>
//                 </div>
//               </li>
//               <li>
//                 <div className="image">
//                   <img src="/assets/images/blog/recent-case2.png" alt="image" />
//                 </div>
//                 <div className="text">
//                   <span>Asia</span>
//                   <h5><Link href="#"><a>Seoul Office</a></Link></h5>
//                 </div>
//               </li>
//               <li>
//                 <div className="image">
//                   <img src="/assets/images/blog/recent-case3.png" alt="image" />
//                 </div>
//                 <div className="text">
//                   <span>Americas</span>
//                   <h5><Link href="#"><a>Mexico City</a></Link></h5>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="container">
//     <div className="footer-bottom">
//       <div className="row d-flex align-items-center g-3">
//         <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
//           <p>©2025 NRIS LAW FIRM LLP All rights reserved.</p>
//         </div>
//        <div className="col-lg-6 d-flex justify-content-center align-items-center">
//                 <ul className="f-bottom-list d-flex justify-content-center align-items-center">
//                   <li><Link href="#">Privacy Notice</Link></li>
//                   <li><Link href="#">Terms of Use</Link></li>
//                   <li><Link href="#">Cookie Settings</Link></li>
//                 </ul>
//               </div>
//               <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
//          <li><Link href="#">Powered by Cintrox</Link></li>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
//     </>
//   )
// }
// export default Footer


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "footer-section",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-xl container-lg-fluid container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gy-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-about",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/brand-logo.png",
                                                alt: "NRIS Law Firm"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "NRIS LAW FIRM LLP",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "Attorney Advertising.",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "All rights reserved."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "footer-social gap-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://www.facebook.com/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://www.twitter.com/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://www.instagram.com/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://www.linkedin.com/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-linkedin"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "open-hour",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        children: "Global Presence"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "United States, Europe, Asia, ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "Latin America, Middle East"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6 d-flex justify-content-lg-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Key Locations"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "link-list",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "New York"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "London"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Amsterdam"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Tokyo"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Tel Aviv"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "United Arab Emirates"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6 d-flex justify-content-lg-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Contact Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "contact-list",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                    width: 23,
                                                                    height: 23,
                                                                    viewBox: "0 0 23 23",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                            clipPath: "url(#clip0_169_19583)",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                d: "M18.1771 14.2474C17.7063 13.7571 17.1383 13.495 16.5364 13.495C15.9393 13.495 15.3665 13.7523 14.8762 14.2425L13.3422 15.7716C13.216 15.7037 13.0898 15.6406 12.9684 15.5775C12.7937 15.4901 12.6286 15.4076 12.4879 15.3202C11.051 14.4076 9.74519 13.2183 8.49278 11.6795C7.88599 10.9125 7.47823 10.2669 7.18212 9.61153C7.58017 9.24745 7.9491 8.86882 8.30832 8.50475C8.44424 8.36882 8.58016 8.22805 8.71608 8.09213C9.73548 7.07272 9.73548 5.75235 8.71608 4.73295L7.39085 3.40772C7.24037 3.25724 7.08503 3.1019 6.9394 2.94656C6.64814 2.6456 6.34232 2.33492 6.02679 2.04366C5.55592 1.57765 4.99282 1.33008 4.4006 1.33008C3.80837 1.33008 3.23556 1.57765 2.75013 2.04366C2.74528 2.04852 2.74528 2.04852 2.74043 2.05337L1.08996 3.7184C0.46861 4.33975 0.114245 5.09702 0.0365763 5.97565C-0.079927 7.39311 0.337543 8.71348 0.657928 9.57755C1.44433 11.6989 2.61907 13.6649 4.37147 15.7716C6.49766 18.3104 9.05588 20.3153 11.9782 21.7279C13.0947 22.257 14.5849 22.8832 16.25 22.99C16.3519 22.9949 16.4587 22.9997 16.5558 22.9997C17.6771 22.9997 18.6189 22.5968 19.3567 21.7958C19.3616 21.7861 19.3713 21.7813 19.3761 21.7716C19.6286 21.4657 19.9198 21.1891 20.2256 20.8929C20.4344 20.6939 20.648 20.4852 20.8567 20.2667C21.3373 19.7667 21.5897 19.1842 21.5897 18.5871C21.5897 17.9852 21.3324 17.4075 20.8421 16.9221L18.1771 14.2474ZM19.915 19.359C19.9101 19.359 19.9101 19.3638 19.915 19.359C19.7256 19.5629 19.5315 19.7473 19.3227 19.9512C19.0072 20.2522 18.6868 20.5677 18.3859 20.9221C17.8956 21.4463 17.3179 21.6939 16.5606 21.6939C16.4878 21.6939 16.4102 21.6939 16.3373 21.689C14.8956 21.5968 13.5558 21.0337 12.551 20.5531C9.80344 19.2231 7.39085 17.3347 5.38602 14.9416C3.7307 12.9464 2.62392 11.1018 1.89092 9.12124C1.43947 7.91252 1.27442 6.97078 1.34724 6.08245C1.39578 5.51449 1.61423 5.04362 2.01713 4.64072L3.67245 2.9854C3.91031 2.7621 4.16274 2.64074 4.41031 2.64074C4.71613 2.64074 4.9637 2.82521 5.11904 2.98054C5.12389 2.9854 5.12874 2.99025 5.1336 2.99511C5.42971 3.2718 5.71126 3.55821 6.00737 3.86403C6.15786 4.01937 6.31319 4.1747 6.46853 4.3349L7.79376 5.66012C8.30832 6.17468 8.30832 6.6504 7.79376 7.16496C7.65298 7.30573 7.51706 7.44651 7.37629 7.58243C6.96853 7.9999 6.58018 8.38824 6.15786 8.76688C6.14815 8.77659 6.13844 8.78144 6.13359 8.79115C5.71611 9.20862 5.79378 9.61638 5.88116 9.89308C5.88602 9.90764 5.89087 9.9222 5.89572 9.93677C6.24038 10.7717 6.72581 11.5581 7.46367 12.495L7.46852 12.4998C8.80831 14.1503 10.2209 15.4367 11.7791 16.4221C11.9782 16.5483 12.1821 16.6503 12.3762 16.7474C12.551 16.8347 12.716 16.9173 12.8568 17.0046C12.8762 17.0143 12.8956 17.0289 12.9151 17.0386C13.0801 17.1211 13.2354 17.16 13.3956 17.16C13.7985 17.16 14.051 16.9076 14.1335 16.825L15.7937 15.1649C15.9587 14.9998 16.2208 14.8008 16.5267 14.8008C16.8276 14.8008 17.0752 14.9901 17.2257 15.1551C17.2305 15.16 17.2305 15.16 17.2354 15.1649L19.9101 17.8396C20.4101 18.3347 20.4101 18.8444 19.915 19.359Z"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                                                                id: "clip0_169_19583",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                    width: 23,
                                                                                    height: 23,
                                                                                    fill: "white"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "Contact Us"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: "mb-0",
                                                                        children: "Global Offices"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                    width: 23,
                                                                    height: 23,
                                                                    viewBox: "0 0 23 23",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                            clipPath: "url(#clip0_169_19592)",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                d: "M20.7988 2.91992H2.11134C0.922305 2.91992 -0.0449219 3.88715 -0.0449219 5.07619V18.0137C-0.0449219 19.2027 0.922305 20.1699 2.11134 20.1699H20.7988C21.9879 20.1699 22.9551 19.2027 22.9551 18.0137V5.07619C22.9551 3.88715 21.9879 2.91992 20.7988 2.91992ZM20.7988 4.35742C20.8965 4.35742 20.9894 4.37768 21.0743 4.41306L11.4551 12.7501L1.83581 4.41306C1.92074 4.37772 2.01364 4.35742 2.11129 4.35742H20.7988ZM20.7988 18.7324H2.11134C1.71477 18.7324 1.39257 18.4103 1.39257 18.0136V5.93179L10.9841 14.2444C11.1196 14.3616 11.2873 14.4199 11.4551 14.4199C11.6228 14.4199 11.7906 14.3617 11.9261 14.2444L21.5176 5.93179V18.0137C21.5175 18.4103 21.1954 18.7324 20.7988 18.7324Z"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                                                                id: "clip0_169_19592",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                    width: 23,
                                                                                    height: 23,
                                                                                    fill: "white"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "Alumni Network"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: "mb-0",
                                                                        children: "info@nrislawfirm.com"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                    width: 23,
                                                                    height: 23,
                                                                    viewBox: "0 0 23 23",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                            clipPath: "url(#clip0_169_19596)",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                d: "M18.3087 3.93864C16.9129 1.52975 14.4335 0.0580615 11.6764 0.00181934C11.5588 -0.000606445 11.4403 -0.000606445 11.3226 0.00181934C8.56552 0.0580615 6.08619 1.52975 4.69029 3.93864C3.26348 6.4009 3.22444 9.35855 4.58585 11.8504L10.2893 22.2897C10.2918 22.2943 10.2944 22.2989 10.297 22.3035C10.548 22.7397 10.9975 23 11.4996 23C12.0016 23 12.4512 22.7396 12.7021 22.3035C12.7047 22.2989 12.7073 22.2943 12.7098 22.2897L18.4132 11.8504C19.7746 9.35855 19.7355 6.4009 18.3087 3.93864ZM11.4995 10.4219C9.71606 10.4219 8.26513 8.97097 8.26513 7.18752C8.26513 5.40408 9.71606 3.95315 11.4995 3.95315C13.2829 3.95315 14.7339 5.40408 14.7339 7.18752C14.7339 8.97097 13.283 10.4219 11.4995 10.4219Z"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                                                                id: "clip0_169_19596",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                    width: 23,
                                                                                    height: 23,
                                                                                    fill: "white"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: "Tadepalle, Guntur District, Andhra Pradesh, 522501"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6 d-flex justify-content-lg-end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Office Highlights"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "recent-caselist",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "image",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/assets/images/blog/recent-case2.png",
                                                                    alt: "image"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Europe"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                children: "Berlin Office"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "image",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/assets/images/blog/recent-case2.png",
                                                                    alt: "image"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Asia"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                children: "Seoul Office"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "image",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/assets/images/blog/recent-case3.png",
                                                                    alt: "image"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Americas"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                children: "Mexico City"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-bottom",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row d-flex align-items-center g-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 d-flex justify-content-lg-start justify-content-center text-lg-start text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-0",
                                        children: "\xa92025 NRIS LAW FIRM LLP All rights reserved."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 d-flex justify-content-center align-items-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "f-bottom-list d-flex justify-content-center align-items-center mb-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Privacy Notice"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Terms of Use"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Cookie Settings"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 d-flex justify-content-lg-end justify-content-center text-lg-end text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-0",
                                        children: [
                                            "Powered by ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: "Cintrox"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const common_Footer = (Footer);

// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/header/Header.jsx


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 50) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//    const handleClose = () => {
//     setTimeout(() => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//     }, 100); 
//   };
//   const toggleMobileDropdown = (e) => {
//     e.preventDefault();
//     setMobileDropdownOpen(!mobileDropdownOpen);
//   };
//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';
//   return (
//     <>
//       <style jsx>{`
//         .nav-link {
//             font-size: 15px;
//             font-weight: 600;
//             color: #ffffff !important;
//             padding: 10px 15px !important;
//             transition: color 0.3s ease;
//         }
//         .nav-link:hover, .active-link {
//             color: #de9f57 !important;
//         }
//         .dropdown-menu {
//             background-color: #000;
//             border: 1px solid rgba(255,255,255,0.1);
//             border-top: 3px solid #de9f57;
//             padding: 0;
//         }
//         .dropdown-item {
//             color: #ffffff;
//             padding: 12px 20px;
//             font-size: 16px;
//             border-bottom: 1px solid rgba(255,255,255,0.05);
//         }
//         .dropdown-item:hover {
//             background-color: #222;
//             color: #de9f57;
//         }
//         .btn-custom {
//             background-color: rgba(222, 159, 87, 0.5);
//             color: #ffffff;
//             font-weight: 600;
//             min-width: 140px;
//             border-radius: 5px;
//             padding: 10px 20px;
//             text-align: center;
//         }
//         .btn-custom:hover {
//             background-color: #de9f57;
//             color: #ffffff;
//         }
//         @media (max-width: 1199px) {
//             .navbar-collapse {
//                 max-height: 80vh;
//                 overflow-y: auto;
//                 background-color: #000;
//                 padding-bottom: 20px;
//                 border-top: 1px solid #222;
//             }
//             .nav-link {
//                 padding: 12px 15px !important;
//                 border-bottom: 1px solid rgba(255,255,255,0.05);
//             }
//             .dropdown-menu {
//                 border: none;
//                 background-color: #111;
//                 margin-left: 15px;
//             }
//             .dropdown-menu.show {
//                 display: block;
//             }
//             .btn-custom {
//                 width: 100%;
//                 margin-top: 15px;
//                 display: block;
//             }
//         }
//         @media (min-width: 1200px) {
//             .nav-item.dropdown:hover .dropdown-menu {
//                 display: block;
//                 margin-top: 0;
//             }
//         }
//       `}</style>
//       <header className={`fixed-top w-100 bg-black ${isSticky ? 'shadow py-2' : 'py-3'}`} style={{ transition: 'all 0.3s ease' }}>
//         <nav className="navbar navbar-expand-xl navbar-dark">
//           <div className="container-fluid px-3 px-lg-5">
//             <Link href="/">
//               <a className="navbar-brand p-0" onClick={handleClose}>
//                 <img
//                   src="/assets/images/logo.png"
//                   alt="Logo"
//                   width="70"
//                   height="50"
//                   style={{ objectFit: 'contain' }}
//                 />
//               </a>
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               onClick={() => setIsOpen(!isOpen)}
//               style={{ border: 'none' }}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
//               <ul className="navbar-nav ms-auto align-items-xl-center">
//                 <li className="nav-item">
//                   <Link href="/">
//                     <a className={`nav-link ${isActive('/')}`} onClick={handleClose}>Home</a>
//                   </Link>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={toggleMobileDropdown}
//                     role="button" 
//                   >
//                     About Us
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item" onClick={handleClose}>Our Firm</a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item" onClick={handleClose}>Awards & Accolades</a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item" onClick={handleClose}>Promoters</a></Link></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`} onClick={handleClose}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`} onClick={handleClose}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`} onClick={handleClose}>News</a></Link></li>
//                 <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`} onClick={handleClose}>Blog</a></Link></li>
//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`} onClick={handleClose}>Events</a></Link></li>
//                 <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`} onClick={handleClose}>Careers</a></Link></li>
//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`} onClick={handleClose}>Contact Us</a></Link></li>
//                 <li className="nav-item ms-xl-3">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom" onClick={handleClose}>
//                       Login/Signup
//                     </a>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div style={{ height: '90px' }}></div>
//     </>
//   );
// }
// export default Header;



function Header() {
    const { 0: isSticky , 1: setIsSticky  } = (0,external_react_.useState)(false);
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: mobileDropdownOpen , 1: setMobileDropdownOpen  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    // --- 1. STICKY HEADER LOGIC ---
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY >= 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    // --- 2. ERROR FIX (Important) ---
    // onClick की जगह router events का use किया है।
    // इससे 'Abort fetching' एरर खत्म हो जाएगी।
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = ()=>{
            setIsOpen(false);
            setMobileDropdownOpen(false);
        };
        router.events.on("routeChangeStart", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [
        router
    ]);
    const toggleMobileDropdown = (e)=>{
        e.preventDefault();
        setMobileDropdownOpen(!mobileDropdownOpen);
    };
    const isActive = (path)=>router.pathname === path ? "active-link" : "";
    const isParentActive = (childPaths)=>childPaths.includes(router.pathname) ? "active-link" : "";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "ae0396783a506fd4",
                children: ".nav-link.jsx-ae0396783a506fd4{font-size:15px;font-weight:600;color:#fff!important;padding:10px 15px!important;-webkit-transition:color.3s ease;-moz-transition:color.3s ease;-o-transition:color.3s ease;transition:color.3s ease}.nav-link.jsx-ae0396783a506fd4:hover,.active-link.jsx-ae0396783a506fd4{color:#de9f57!important}.dropdown-menu.jsx-ae0396783a506fd4{background-color:#000;border:1px solid rgba(255,255,255,.1);border-top:3px solid#de9f57;padding:0}.dropdown-item.jsx-ae0396783a506fd4{color:#fff;padding:12px 20px;font-size:16px;border-bottom:1px solid rgba(255,255,255,.05)}.dropdown-item.jsx-ae0396783a506fd4:hover{background-color:#222;color:#de9f57}.btn-custom.jsx-ae0396783a506fd4{background-color:rgba(222,159,87,.5);color:#fff;font-weight:600;min-width:140px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px 20px;text-align:center}.btn-custom.jsx-ae0396783a506fd4:hover{background-color:#de9f57;color:#fff}@media(max-width:1199px){.navbar-collapse.jsx-ae0396783a506fd4{max-height:80vh;overflow-y:auto;background-color:#000;padding-bottom:20px;border-top:1px solid#222}.nav-link.jsx-ae0396783a506fd4{padding:12px 15px!important;border-bottom:1px solid rgba(255,255,255,.05)}.dropdown-menu.jsx-ae0396783a506fd4{border:none;background-color:#111;margin-left:15px}.dropdown-menu.show.jsx-ae0396783a506fd4{display:block}.btn-custom.jsx-ae0396783a506fd4{width:100%;margin-top:15px;display:block}}@media(min-width:1200px){.nav-item.dropdown.jsx-ae0396783a506fd4:hover .dropdown-menu.jsx-ae0396783a506fd4{display:block;margin-top:0}}"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                style: {
                    transition: "all 0.3s ease"
                },
                className: "jsx-ae0396783a506fd4" + " " + `fixed-top w-100 bg-black ${isSticky ? "shadow py-2" : "py-3"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "jsx-ae0396783a506fd4" + " " + "navbar navbar-expand-xl navbar-dark",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-ae0396783a506fd4" + " " + "container-fluid px-3 px-lg-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "jsx-ae0396783a506fd4" + " " + "navbar-brand p-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/images/brand-logo.png",
                                        alt: "Logo",
                                        width: "70",
                                        height: "50",
                                        style: {
                                            objectFit: "contain"
                                        },
                                        className: "jsx-ae0396783a506fd4"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: ()=>setIsOpen(!isOpen),
                                style: {
                                    border: "none"
                                },
                                className: "jsx-ae0396783a506fd4" + " " + "navbar-toggler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-ae0396783a506fd4" + " " + "navbar-toggler-icon"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "mainNav",
                                className: "jsx-ae0396783a506fd4" + " " + `collapse navbar-collapse ${isOpen ? "show" : ""}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "jsx-ae0396783a506fd4" + " " + "navbar-nav ms-auto align-items-xl-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/")}`,
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: toggleMobileDropdown,
                                                    role: "button",
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link dropdown-toggle ${isParentActive([
                                                        "/our-firm",
                                                        "/awards-ccolades",
                                                        "/promoters"
                                                    ])}`,
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `dropdown-menu ${mobileDropdownOpen ? "show" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "jsx-ae0396783a506fd4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/our-firm",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "jsx-ae0396783a506fd4" + " " + "dropdown-item",
                                                                    children: "Our Firm"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "jsx-ae0396783a506fd4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/awards-ccolades",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "jsx-ae0396783a506fd4" + " " + "dropdown-item",
                                                                    children: "Awards & Accolades"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "jsx-ae0396783a506fd4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/promoters",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "jsx-ae0396783a506fd4" + " " + "dropdown-item",
                                                                    children: "Promoters"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/attorneys",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/attorneys")}`,
                                                    children: "Professionals"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/capability",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/capability")}`,
                                                    children: "Capabilities"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/news",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/news")}`,
                                                    children: "News"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blog",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/blog")}`,
                                                    children: "Blog"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/events",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/events")}`,
                                                    children: "Events"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/careers",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/careers")}`,
                                                    children: "Careers"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + `nav-link ${isActive("/contact")}`,
                                                    children: "Contact Us"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-ae0396783a506fd4" + " " + "nav-item ms-xl-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/login-signup",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "jsx-ae0396783a506fd4" + " " + "btn btn-custom",
                                                    children: "Login/Signup"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    height: "90px"
                },
                className: "jsx-ae0396783a506fd4"
            })
        ]
    });
}
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/layout/Layout.jsx

// import React from "react";
// import Head from "next/head";
// import Footer from "../../common/Footer";
// import Topbar from "../../common/Topbar";
// import LayoutHeader from "../header/LayoutHeader";
// function Layout({ children }) {
//   return (
//     <>
//       <Head>
//         <title>
//           Corelaw- Law firm, Lawyers & Legal Service React NextJs Template
//         </title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="assets/images/icons/logo-icon.svg" />
//       </Head>
//       <Topbar />
//       <LayoutHeader />
//       {children}
//       <Footer />
//     </>
//   );
// }
// export default Layout;
// File: src/components/Layout.js




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Corelaw - Law firm"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/assets/images/icons/logo-icon.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(common_Footer, {})
        ]
    });
}
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/DisclaimerPopup.js


const DisclaimerPopup = ()=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const isAccepted = localStorage.getItem("disclaimerAccepted");
        // --- TESTING KE LIYE: Ye 'if' condition hata dein ya comment kar dein ---
        // if (!isAccepted) {
        setShow(true); // Ab ye hamesha dikhega refresh karne par
        document.body.style.overflow = "hidden";
    // }
    }, []);
    const handleAgree = ()=>{
        // User ke agree karne par LocalStorage me save karein
        localStorage.setItem("disclaimerAccepted", "true");
        setShow(false);
        // Scroll wapas chalu karein
        document.body.style.overflow = "auto";
    };
    if (!show) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: styles.overlay,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: styles.modal,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: styles.header,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        style: {
                            margin: 0,
                            color: "#b68c5a"
                        },
                        children: "Disclaimer"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: styles.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Agree and Enter"
                                }),
                                ", the user acknowledges that:"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            style: {
                                textAlign: "left",
                                paddingLeft: "20px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "The user wishes to gain more information about us for his/her own information and use."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "The information about us is provided to the user only on his/her specific request."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: styles.footer,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: handleAgree,
                        style: styles.button,
                        children: "Agree and Enter"
                    })
                })
            ]
        })
    });
};
// --- Simple CSS Styles (Inline) ---
const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
    },
    modal: {
        backgroundColor: "#fff",
        maxWidth: "600px",
        width: "100%",
        borderRadius: "8px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    },
    header: {
        padding: "20px",
        borderBottom: "1px solid #eee",
        textAlign: "center",
        backgroundColor: "#f9f9f9"
    },
    content: {
        padding: "25px",
        maxHeight: "60vh",
        overflowY: "auto",
        fontSize: "15px",
        lineHeight: "1.6",
        color: "#333",
        textAlign: "justify"
    },
    footer: {
        padding: "20px",
        borderTop: "1px solid #eee",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#b68c5a",
        color: "#fff",
        border: "none",
        padding: "12px 30px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        borderRadius: "5px",
        transition: "0.3s"
    }
};
/* harmony default export */ const components_DisclaimerPopup = (DisclaimerPopup);

;// CONCATENATED MODULE: ./src/pages/_app.js

// import Script from "next/script";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../public/assets/css/animate.css";
// import "../../public/assets/css/all.css";
// import "../../public/assets/css/boxicons.min.css";
// import "../../public/assets/css/bootstrap-icons.css";
// import "../../public/assets/css/swiper-bundle.css";
// import "../../public/assets/css/style.css";
// import '../styles/globals.css'; 
// import { useEffect } from "react";
// import Layout from "../components/layout/Layout";
// import DisclaimerPopup from "../components/DisclaimerPopup";
// // ❗ Disable this during dev
// // console.log = console.warn = console.error = () => {};
// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <DisclaimerPopup />
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
// export default MyApp;


// CSS Imports








// Component Imports


function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_DisclaimerPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(699)


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(4898)));
module.exports = __webpack_exports__;

})();