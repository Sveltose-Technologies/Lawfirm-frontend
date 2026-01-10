

// // // import React, { useState, useEffect } from 'react';
// // // import Head from 'next/head';
// // // import Link from 'next/link';
// // // import { useRouter } from "next/router";

// // // function Contact() {
// // //   const router = useRouter();
// // //   // --- STATES ---
// // //   const [formData, setFormData] = useState({
// // //     firstName: '',
// // //     lastName: '',
// // //     email: '',
// // //     countryCode: '',
// // //     phone: '',
// // //     inquiryType: '',
// // //     message: ''
// // //   });
// // //   const [termsAccepted, setTermsAccepted] = useState(false);
// // //   const [captchaVerified, setCaptchaVerified] = useState(false);

// // //   // --- THEME COLORS ---
// // //   const theme = {
// // //     textDark: '#000000',
// // //     textGray: '#333333',
// // //     borderGray: '#cccccc',
// // //     accentGold: '#C5A059',
// // //     btnBorder: '#003366',
// // //     bgLight: '#fdfdfd',
// // //   };

// // //   const handleDeadClick = (e) => {
// // //     e.preventDefault();
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
    
// // //     // Validation for Country Code (Max 4 digits)
// // //     if (name === 'countryCode') {
// // //       if (value.length <= 4 && /^\d*$/.test(value)) {
// // //         setFormData({ ...formData, [name]: value });
// // //       }
// // //       return;
// // //     }

// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleCaptchaClick = () => {
// // //     setCaptchaVerified(!captchaVerified);
// // //   };

// // //   // --- FORM SUBMIT HANDLER ---
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // Custom Validation
// // //     if (formData.countryCode.length < 1) {
// // //        alert("Please enter a country code.");
// // //        return;
// // //     }
    
// // //     if (!termsAccepted) {
// // //       alert("Please check the box to confirm you understand the disclaimer.");
// // //       return;
// // //     }

// // //     if (!captchaVerified) {
// // //       alert("Please confirm you are not a robot.");
// // //       return;
// // //     }

// // //     alert("Thank you. Your message has been sent.");
// // //     // Reset form
// // //     setFormData({ 
// // //       firstName: '', lastName: '', email: '', 
// // //       countryCode: '', phone: '', inquiryType: '', message: '' 
// // //     });
// // //     setTermsAccepted(false);
// // //     setCaptchaVerified(false);
// // //   };

// // //   return (
// // //     <>
// // //       <Head>
// // //         <title>Contact Us | Law Firm Style</title>
// // //       </Head>

// // //       {/* HERO BANNER */}
// // //       <div className="contact-hero position-relative d-flex align-items-center justify-content-center text-center">
// // //         <div className="hero-bg" style={{
// // //             backgroundImage: `url('/assets/images/banner-img3.png')`,
// // //             backgroundSize: 'cover',
// // //             backgroundPosition: 'center',
// // //             position: 'absolute',
// // //             top: 0, left: 0, right: 0, bottom: 0,
// // //             zIndex: -1
// // //         }}></div>
        
// // //         <div className="container py-5">
// // //            <h1 className="display-3 fw-bold text-dark font-serif mt-5 pt-5" style={{ textShadow: '0px 0px 10px rgba(255,255,255,0.8)' }}>
// // //              Contact Us
// // //            </h1>
// // //         </div>
// // //       </div>

// // //       {/* MAIN CONTENT SECTION */}
// // //       <div className="container py-5 my-4">
// // //         <div className="row gx-lg-5">
          
// // //           {/* LEFT COLUMN: SIDEBAR/CONTENT (Swapped to Left) */}
// // //           <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 sidebar-separator">
// // //             <div className="pe-lg-4">
// // //                 <p className="mb-4 text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
// // //                 Thank you for your interest. If you are interested in contacting one of our professionals, you may do so directly through the contact information contained on our team biographies.
// // //                 </p>

// // //                 {/* Media Contacts Section */}
// // //                 <div className="mb-5">
// // //                 <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
// // //                     Click on the button below to see our complete list of media contacts.
// // //                 </p>
// // //              <Link href="/media-contacts">
// // //   <a className="btn-outline-custom">MEDIA CONTACTS</a>
// // // </Link>
// // //                 </div>

// // //                 {/* Careers Section */}
// // //                 <div>
// // //                 <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
// // //                     Click on the button below to learn more about careers at our firm.
// // //                 </p>
// // //                 <p className="mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
// // //                     All legitimate job opportunities xxx are posted <a href="#" onClick={handleDeadClick} className="text-gold-link">here on our official website</a>. If you suspect a fraudulent job posting, please report it to us at <a href="mailto:hr@nrlslaw.com" className="text-gold-link">hr@nrlslaw.com</a>.
// // //                 </p>
               
// // //       <Link href="/careers">
// // //   <a className="btn-outline-custom">JOB OPPORTUNITIES</a>
// // // </Link>
// // //                 </div>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT COLUMN: FORM (Swapped to Right) */}
// // //           <div className="col-lg-7 col-md-12">
            
// // //             <p className="mb-5 text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
// // //               If you are a member of the media or have a general inquiry, please fill out the information below.
// // //             </p>

// // //             <form onSubmit={handleSubmit}>
              
// // //               <div className="row">
// // //                 {/* First Name */}
// // //                 <div className="col-md-6 mb-4">
// // //                     <label className="fw-bold text-dark mb-1">First Name*</label>
// // //                     <input 
// // //                     type="text" 
// // //                     name="firstName"
// // //                     className="form-control-custom"
// // //                     required
// // //                     value={formData.firstName}
// // //                     onChange={handleChange}
// // //                     />
// // //                 </div>
// // //                 {/* Last Name */}
// // //                 <div className="col-md-6 mb-4">
// // //                     <label className="fw-bold text-dark mb-1">Last Name*</label>
// // //                     <input 
// // //                     type="text" 
// // //                     name="lastName"
// // //                     className="form-control-custom"
// // //                     required
// // //                     value={formData.lastName}
// // //                     onChange={handleChange}
// // //                     />
// // //                 </div>
// // //               </div>

// // //               {/* Email Field */}
// // //               <div className="mb-4">
// // //                 <label className="fw-bold text-dark mb-1">Email*</label>
// // //                 <input 
// // //                   type="email" 
// // //                   name="email"
// // //                   className="form-control-custom"
// // //                   required
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                 />
// // //               </div>

// // //               <div className="row">
// // //                 {/* Country Code (4 digit) */}
// // //                 <div className="col-md-3 mb-4">
// // //                     <label className="fw-bold text-dark mb-1">Country Code*</label>
// // //                     <input 
// // //                     type="text" 
// // //                     name="countryCode"
// // //                     placeholder="+123"
// // //                     className="form-control-custom"
// // //                     required
// // //                     value={formData.countryCode}
// // //                     onChange={handleChange}
// // //                     />
// // //                 </div>
// // //                 {/* Phone Number */}
// // //                 <div className="col-md-9 mb-4">
// // //                     <label className="fw-bold text-dark mb-1">Phone Number*</label>
// // //                     <input 
// // //                     type="tel" 
// // //                     name="phone"
// // //                     className="form-control-custom"
// // //                     required
// // //                     value={formData.phone}
// // //                     onChange={handleChange}
// // //                     />
// // //                 </div>
// // //               </div>

// // //               {/* Inquiry Type Dropdown */}
// // //               <div className="mb-4">
// // //                 <label className="fw-bold text-dark mb-1">Inquiry Type*</label>
// // //                 <div className="position-relative">
// // //                   <select 
// // //                     name="inquiryType"
// // //                     className="form-control-custom form-select-custom"
// // //                     required
// // //                     value={formData.inquiryType}
// // //                     onChange={handleChange}
// // //                   >
// // //                     <option value="" disabled hidden></option>
// // //                     <option value="General">General Inquiry</option>
// // //                     <option value="Media">Media Inquiry</option>
// // //                     <option value="Legal">Legal Representation</option>
// // //                     <option value="Recruiting">Recruiting</option>
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               {/* Message Field */}
// // //               <div className="mb-4">
// // //                 <label className="fw-bold text-dark mb-1">Message*</label>
// // //                 <textarea 
// // //                   name="message"
// // //                   className="form-control-custom w-100"
// // //                   rows="6"
// // //                   style={{ border: '1px solid #ccc', padding: '10px' }}
// // //                   required
// // //                   value={formData.message}
// // //                   onChange={handleChange}
// // //                 ></textarea>
// // //               </div>

// // //               {/* Disclaimer Checkbox */}
// // //               <div className="mb-4 d-flex align-items-start">
// // //                 <input 
// // //                   type="checkbox" 
// // //                   id="disclaimer" 
// // //                   className="mt-1 me-2"
// // //                   style={{ minWidth: '16px', minHeight: '16px' }}
// // //                   checked={termsAccepted}
// // //                   onChange={(e) => setTermsAccepted(e.target.checked)}
// // //                 />
// // //                 <label htmlFor="disclaimer" className="small text-secondary" style={{ lineHeight: '1.5' }}>
// // //                   <strong>Note:</strong> Please do not send us any confidential or sensitive information without first speaking to one of our attorneys. Any information sent prior to confirmation cannot be treated as protected information.
// // //                 </label>
// // //               </div>

// // //               {/* ReCAPTCHA Simulation */}
// // //               <div className="mb-4 p-2 d-inline-block border bg-light" style={{ minWidth: '250px' }}>
// // //                 <div className="d-flex align-items-center">
// // //                    <div className="form-check">
// // //                       <input 
// // //                         className="form-check-input" 
// // //                         type="checkbox" 
// // //                         id="recaptcha" 
// // //                         checked={captchaVerified}
// // //                         onChange={handleCaptchaClick}
// // //                         style={{ width: '24px', height: '24px' }}
// // //                       />
// // //                       <label className="form-check-label ms-2 mt-1" htmlFor="recaptcha">
// // //                        I&apos;m not a robot
// // //                       </label>
// // //                    </div>
// // //                    <div className="ms-auto text-center" style={{ fontSize: '10px', color: '#555' }}>
// // //                       <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" width="32" /><br/>
// // //                       reCAPTCHA<br/>
// // //                       <span style={{fontSize: '9px'}}>Privacy - Terms</span>
// // //                    </div>
// // //                 </div>
// // //               </div>

             
            
// // //             </form>
// // //           </div>

// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         .font-serif {
// // //           font-family: "Times New Roman", Times, serif;
// // //         }

// // //         .contact-hero {
// // //             height: 400px;
// // //         }

// // //         .form-control-custom {
// // //             width: 100%;
// // //             border: none;
// // //             border-bottom: 1px solid #000;
// // //             border-radius: 0;
// // //             padding: 10px 0;
// // //             font-size: 1rem;
// // //             background: transparent;
// // //             outline: none;
// // //         }
// // //         .form-control-custom:focus {
// // //             border-bottom: 2px solid ${theme.accentGold};
// // //         }

// // //         .form-select-custom {
// // //             background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
// // //             background-repeat: no-repeat;
// // //             background-position: right 0.75rem center;
// // //             background-size: 16px 12px;
// // //             appearance: none;
// // //         }

// // //         @media (min-width: 992px) {
// // //             .sidebar-separator {
// // //                 border-right: 1px solid #000;
// // //             }
// // //         }

// // //         .btn-outline-custom {
// // //             background: transparent;
// // //             border: 2px solid ${theme.btnBorder};
// // //             color: ${theme.btnBorder};
// // //             padding: 12px 25px;
// // //             font-size: 0.9rem;
// // //             font-weight: 700;
// // //             text-transform: uppercase;
// // //             letter-spacing: 1px;
// // //             transition: all 0.3s;
// // //         }
// // //         .btn-outline-custom:hover {
// // //             background-color: ${theme.btnBorder};
// // //             color: #fff;
// // //         }

// // //         .btn-submit {
// // //             background-color: #fdfdfd;
// // //             color: #000;
// // //             border: 2px solid ${theme.accentGold};
// // //             padding: 10px 40px;
// // //             font-weight: bold;
// // //             text-transform: uppercase;
// // //             transition: all 0.3s;
// // //         }
// // //         .btn-submit:hover {
// // //             background-color: ${theme.accentGold};
// // //             color: #fff;
// // //         }

// // //         .text-gold-link {
// // //             color: #bfa15f;
// // //             text-decoration: underline;
// // //             font-weight: bold;
// // //         }
// // //         .text-gold-link:hover {
// // //             color: #000;
// // //         }

// // //         textarea.form-control-custom {
// // //             border: 1px solid #999;
// // //             background-color: #fff;
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }

// // // export default Contact;


// // import React, { useState } from 'react';
// // import Head from 'next/head';
// // import Link from 'next/link';
// // import { useRouter } from "next/router";

// // function Contact() {
// //   const router = useRouter();
  
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     countryCode: '',
// //     phone: '',
// //     inquiryType: '',
// //     message: ''
// //   });
// //   const [termsAccepted, setTermsAccepted] = useState(false);
// //   const [captchaVerified, setCaptchaVerified] = useState(false);

// //   const theme = {
// //     textDark: '#000000',
// //     accentGold: '#C5A059',
// //     btnBorder: '#003366',
// //   };

// //   const handleDeadClick = (e) => e.preventDefault();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === 'countryCode') {
// //       if (value.length <= 4 && /^\d*$/.test(value)) {
// //         setFormData({ ...formData, [name]: value });
// //       }
// //       return;
// //     }
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (formData.countryCode.length < 1) {
// //        alert("Please enter a country code.");
// //        return;
// //     }
// //     if (!termsAccepted) {
// //       alert("Please check the box to confirm you understand the disclaimer.");
// //       return;
// //     }
// //     if (!captchaVerified) {
// //       alert("Please confirm you are not a robot.");
// //       return;
// //     }

// //     alert("Thank you. Your message has been sent.");
// //     setFormData({ 
// //       firstName: '', lastName: '', email: '', 
// //       countryCode: '', phone: '', inquiryType: '', message: '' 
// //     });
// //     setTermsAccepted(false);
// //     setCaptchaVerified(false);
// //   };

// //   return (
// //     <>
// //       <Head>
// //         <title>Contact Us | Law Firm Style</title>
// //       </Head>

// //       {/* HERO BANNER */}
// //       <div className="contact-hero position-relative d-flex align-items-center justify-content-center text-center">
// //         <div className="hero-bg" style={{
// //             backgroundImage: `url('/assets/images/banner-img3.png')`,
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             position: 'absolute',
// //             top: 0, left: 0, right: 0, bottom: 0,
// //             zIndex: -1
// //         }}></div>
// //         <div className="container py-5">
// //            <h1 className="display-3 fw-bold text-dark font-serif mt-5 pt-5" style={{ textShadow: '0px 0px 10px rgba(255,255,255,0.8)' }}>
// //              Contact Us
// //            </h1>
// //         </div>
// //       </div>

// //       <div className="container py-5 my-4">
// //         <div className="row gx-lg-5">
          
// //           {/* LEFT COLUMN */}
// //           <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 sidebar-separator">
// //             <div className="pe-lg-4">
// //                 <p className="mb-4 text-secondary">
// //                 Thank you for your interest. If you are interested in contacting one of our professionals...
// //                 </p>

// //                 <div className="mb-5">
// //                   <p className="mb-4">Click on the button below to see our complete list of media contacts.</p>
// //                   {/* DIRECT LINK TO MEDIA PAGE */}
// //                   <Link href="/media-contacts">
// //                     <a className="btn-outline-custom text-decoration-none">MEDIA CONTACTS</a>
// //                   </Link>
// //                 </div>

// //                 <div>
// //                   <p className="mb-4">Click on the button below to learn more about careers at our firm.</p>
// //                   <p className="mb-3 small">
// //                       All legitimate job opportunities are posted <a href="#" onClick={handleDeadClick} className="text-gold-link">here</a>. 
// //                       Report fraud to <a href="mailto:hr@nrlslaw.com" className="text-gold-link">hr@nrlslaw.com</a>.
// //                   </p>
// //                   {/* DIRECT LINK TO CAREERS PAGE */}
// //                   <Link href="/careers">
// //                     <a className="btn-outline-custom text-decoration-none">JOB OPPORTUNITIES</a>
// //                   </Link>
// //                 </div>
// //             </div>
// //           </div>

// //           {/* RIGHT COLUMN: FORM */}
// //           <div className="col-lg-7 col-md-12">
// //             <p className="mb-5 text-secondary">
// //               If you are a member of the media or have a general inquiry, please fill out the information below.
// //             </p>

// //             <form onSubmit={handleSubmit}>
// //               <div className="row">
// //                 <div className="col-md-6 mb-4">
// //                     <label className="fw-bold text-dark mb-1">First Name*</label>
// //                     <input type="text" name="firstName" className="form-control-custom" required value={formData.firstName} onChange={handleChange} />
// //                 </div>
// //                 <div className="col-md-6 mb-4">
// //                     <label className="fw-bold text-dark mb-1">Last Name*</label>
// //                     <input type="text" name="lastName" className="form-control-custom" required value={formData.lastName} onChange={handleChange} />
// //                 </div>
// //               </div>

// //               <div className="mb-4">
// //                 <label className="fw-bold text-dark mb-1">Email*</label>
// //                 <input type="email" name="email" className="form-control-custom" required value={formData.email} onChange={handleChange} />
// //               </div>

// //               <div className="row">
// //                 <div className="col-md-3 mb-4">
// //                     <label className="fw-bold text-dark mb-1">Country Code*</label>
// //                     <input type="text" name="countryCode" placeholder="+1" className="form-control-custom" required value={formData.countryCode} onChange={handleChange} />
// //                 </div>
// //                 <div className="col-md-9 mb-4">
// //                     <label className="fw-bold text-dark mb-1">Phone Number*</label>
// //                     <input type="tel" name="phone" className="form-control-custom" required value={formData.phone} onChange={handleChange} />
// //                 </div>
// //               </div>

// //               <div className="mb-4">
// //                 <label className="fw-bold text-dark mb-1">Inquiry Type*</label>
// //                 <select name="inquiryType" className="form-control-custom form-select-custom" required value={formData.inquiryType} onChange={handleChange}>
// //                     <option value="" disabled hidden>Select Inquiry Type</option>
// //                     <option value="General">General Inquiry</option>
// //                     <option value="Media">Media Inquiry</option>
// //                     <option value="Legal">Legal Representation</option>
// //                     <option value="Recruiting">Recruiting</option>
// //                 </select>
// //               </div>

// //               <div className="mb-4">
// //                 <label className="fw-bold text-dark mb-1">Message*</label>
// //                 <textarea name="message" className="form-control-custom w-100" rows="5" required value={formData.message} onChange={handleChange}></textarea>
// //               </div>

// //               <div className="mb-4 d-flex align-items-start">
// //                 <input type="checkbox" id="disclaimer" className="mt-1 me-2" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
// //                 <label htmlFor="disclaimer" className="small text-secondary">
// //                   <strong>Note:</strong> Please do not send us any confidential information without speaking to an attorney first.
// //                 </label>
// //               </div>

// //               {/* CAPTCHA */}
// //               <div className="mb-4 p-2 d-inline-block border bg-light">
// //                 <div className="d-flex align-items-center">
// //                    <input type="checkbox" id="recaptcha" checked={captchaVerified} onChange={() => setCaptchaVerified(!captchaVerified)} style={{ width: '20px', height: '20px' }} />
// //                    <label className="ms-2 mb-0" htmlFor="recaptcha">I&apos;m not a robot</label>
// //                    <img className="ms-4" src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" width="30" />
// //                 </div>
// //               </div>

// //               {/* SUBMIT BUTTON - ADDED THIS */}
// //               <div className="mt-2">
// //                 <button type="submit" className="btn-submit">SUBMIT</button>
// //               </div>

// //             </form>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .font-serif { font-family: "Times New Roman", Times, serif; }
// //         .contact-hero { height: 350px; }
// //         .form-control-custom {
// //             width: 100%; border: none; border-bottom: 1px solid #000;
// //             padding: 10px 0; background: transparent; outline: none;
// //         }
// //         .form-control-custom:focus { border-bottom: 2px solid ${theme.accentGold}; }
// //         .sidebar-separator { border-right: 1px solid #ddd; }
        
// //         .btn-outline-custom {
// //             display: inline-block;
// //             border: 2px solid ${theme.btnBorder};
// //             color: ${theme.btnBorder};
// //             padding: 12px 25px;
// //             font-weight: 700;
// //             transition: 0.3s;
// //             cursor: pointer;
// //         }
// //         .btn-outline-custom:hover { background: ${theme.btnBorder}; color: #fff; }

// //         .btn-submit {
// //             background: #fff;
// //             color: #000;
// //             border: 2px solid ${theme.accentGold};
// //             padding: 12px 50px;
// //             font-weight: bold;
// //             cursor: pointer;
// //             transition: 0.3s;
// //         }
// //         .btn-submit:hover { background: ${theme.accentGold}; color: #fff; }

// //         .text-gold-link { color: #bfa15f; font-weight: bold; text-decoration: underline; }
// //       `}</style>
// //     </>
// //   );
// // }

// // export default Contact;


// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { useRouter } from "next/router";
// import { createContactInquiry } from '../services/authService';

// function Contact() {
//   const router = useRouter();
  
//   const [formData, setFormData] = useState({
//     adminId: 3, // Default adminId as per your other modules
//     firstName: '',
//     lastName: '',
//     email: '',
//     countryCode: '',
//     phoneNumber: '', // Match with your parameter name
//     inquiryType: 'General', // Default value set to first option
//     message: ''
//   });
  
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const theme = {
//     textDark: '#000000',
//     accentGold: '#C5A059',
//     btnBorder: '#003366',
//   };

//   const handleDeadClick = (e) => e.preventDefault();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'countryCode') {
//       if (value.length <= 4 && (/^\+?\d*$/.test(value))) {
//         setFormData({ ...formData, [name]: value });
//       }
//       return;
//     }
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!termsAccepted) {
//       alert("Please check the box to confirm you understand the disclaimer.");
//       return;
//     }
//     if (!captchaVerified) {
//       alert("Please confirm you are not a robot.");
//       return;
//     }

//     setSubmitting(true);
//     try {
//       const res = await createContactInquiry(formData);
//       if (res.success) {
//         alert("Thank you. Your message has been sent successfully.");
//         // Reset Form
//         setFormData({ 
//           adminId: 3,
//           firstName: '', lastName: '', email: '', 
//           countryCode: '', phoneNumber: '', inquiryType: 'General', message: '' 
//         });
//         setTermsAccepted(false);
//         setCaptchaVerified(false);
//       } else {
//         alert("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       alert("Something went wrong. Please check your connection.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Contact Us | Law Firm Style</title>
//       </Head>

//       {/* HERO BANNER */}
//       <div className="contact-hero position-relative d-flex align-items-center justify-content-center text-center">
//         <div className="hero-bg" style={{
//             backgroundImage: `url('/assets/images/banner-img3.png')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             position: 'absolute',
//             top: 0, left: 0, right: 0, bottom: 0,
//             zIndex: -1
//         }}></div>
//         <div className="container py-5">
//            <h1 className="display-3 fw-bold text-dark font-serif mt-5 pt-5" style={{ textShadow: '0px 0px 10px rgba(255,255,255,0.8)' }}>
//              Contact Us
//            </h1>
//         </div>
//       </div>

//       <div className="container py-5 my-4">
//         <div className="row gx-lg-5">
          
//           {/* LEFT COLUMN */}
//           <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 sidebar-separator">
//             <div className="pe-lg-4">
//                 <p className="mb-4 text-secondary">
//                 Thank you for your interest. If you are interested in contacting one of our professionals...
//                 </p>

//                 <div className="mb-5">
//                   <p className="mb-4">Click on the button below to see our complete list of media contacts.</p>
//                   <Link href="/media-contacts">
//                     <a className="btn-outline-custom text-decoration-none">MEDIA CONTACTS</a>
//                   </Link>
//                 </div>

//                 <div>
//                   <p className="mb-4">Click on the button below to learn more about careers at our firm.</p>
//                   <p className="mb-3 small">
//                       All legitimate job opportunities are posted <a href="#" onClick={handleDeadClick} className="text-gold-link">here</a>. 
//                       Report fraud to <a href="mailto:hr@nrlslaw.com" className="text-gold-link">hr@nrlslaw.com</a>.
//                   </p>
//                   <Link href="/careers">
//                     <a className="btn-outline-custom text-decoration-none">JOB OPPORTUNITIES</a>
//                   </Link>
//                 </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: FORM */}
//           <div className="col-lg-7 col-md-12">
//             <p className="mb-5 text-secondary">
//               If you are a member of the media or have a general inquiry, please fill out the information below.
//             </p>

//             <form onSubmit={handleSubmit}>
//               <div className="row">
//                 <div className="col-md-6 mb-4">
//                     <label className="fw-bold text-dark mb-1">First Name*</label>
//                     <input type="text" name="firstName" className="form-control-custom" required value={formData.firstName} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6 mb-4">
//                     <label className="fw-bold text-dark mb-1">Last Name*</label>
//                     <input type="text" name="lastName" className="form-control-custom" required value={formData.lastName} onChange={handleChange} />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="fw-bold text-dark mb-1">Email*</label>
//                 <input type="email" name="email" className="form-control-custom" required value={formData.email} onChange={handleChange} />
//               </div>

//               <div className="row">
//                 <div className="col-md-3 mb-4">
//                     <label className="fw-bold text-dark mb-1">Country Code*</label>
//                     <input type="text" name="countryCode" placeholder="+91" className="form-control-custom" required value={formData.countryCode} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-9 mb-4">
//                     <label className="fw-bold text-dark mb-1">Phone Number*</label>
//                     <input type="tel" name="phoneNumber" className="form-control-custom" required value={formData.phoneNumber} onChange={handleChange} />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="fw-bold text-dark mb-1">Inquiry Type*</label>
//                 <select name="inquiryType" className="form-control-custom form-select-custom" required value={formData.inquiryType} onChange={handleChange}>
//                     <option value="General">General Inquiry</option>
//                     <option value="Media">Media Inquiry</option>
//                     <option value="Legal">Legal Representation</option>
//                     <option value="Recruiting">Recruiting</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label className="fw-bold text-dark mb-1">Message*</label>
//                 <textarea name="message" className="form-control-custom w-100" rows="5" required value={formData.message} onChange={handleChange}></textarea>
//               </div>

//               <div className="mb-4 d-flex align-items-start">
//                 <input type="checkbox" id="disclaimer" className="mt-1 me-2" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
//                 <label htmlFor="disclaimer" className="small text-secondary">
//                   <strong>Note:</strong> Please do not send us any confidential information without speaking to an attorney first.
//                 </label>
//               </div>

//               {/* CAPTCHA */}
//               <div className="mb-4 p-2 d-inline-block border bg-light">
//                 <div className="d-flex align-items-center">
//                    <input type="checkbox" id="recaptcha" checked={captchaVerified} onChange={() => setCaptchaVerified(!captchaVerified)} style={{ width: '20px', height: '20px' }} />
//                    <label className="ms-2 mb-0" htmlFor="recaptcha" style={{ cursor: 'pointer' }}>I&apos;m not a robot</label>
//                    <img className="ms-4" src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" width="30" />
//                 </div>
//               </div>

//               {/* SUBMIT BUTTON */}
//               <div className="mt-2">
//                 <button type="submit" className="btn-submit" disabled={submitting}>
//                   {submitting ? 'SENDING...' : 'SUBMIT'}
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .font-serif { font-family: "Times New Roman", Times, serif; }
//         .contact-hero { height: 350px; }
//         .form-control-custom {
//             width: 100%; border: none; border-bottom: 1px solid #000;
//             padding: 10px 0; background: transparent; outline: none;
//             border-radius: 0;
//         }
//         .form-control-custom:focus { border-bottom: 2px solid ${theme.accentGold}; }
//         .sidebar-separator { border-right: 1px solid #ddd; }
        
//         .btn-outline-custom {
//             display: inline-block;
//             border: 2px solid ${theme.btnBorder};
//             color: ${theme.btnBorder};
//             padding: 12px 25px;
//             font-weight: 700;
//             transition: 0.3s;
//             cursor: pointer;
//         }
//         .btn-outline-custom:hover { background: ${theme.btnBorder}; color: #fff; }

//         .btn-submit {
//             background: #fff;
//             color: #000;
//             border: 2px solid ${theme.accentGold};
//             padding: 12px 50px;
//             font-weight: bold;
//             cursor: pointer;
//             transition: 0.3s;
//         }
//         .btn-submit:hover:not(:disabled) { background: ${theme.accentGold}; color: #fff; }
//         .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

//         .text-gold-link { color: #bfa15f; font-weight: bold; text-decoration: underline; }

//         @media (max-width: 991px) {
//             .sidebar-separator { border-right: none; }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { createContactInquiry } from '../services/authService';

function Contact() {
  const [formData, setFormData] = useState({
    adminId: 3,
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    inquiryType: '',
    message: ''
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'countryCode' && value.length <= 4 && (/^\+?\d*$/.test(value))) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) { alert("Please accept the disclaimer."); return; }
    if (!captchaVerified) { alert("Please confirm you are not a robot."); return; }

    console.log("Submitting Form:", formData);
    setSubmitting(true);
    try {
      const res = await createContactInquiry(formData);
      console.log("API Response:", res);
      if (res.success) {
        alert("Message sent successfully!");
        setFormData({ adminId:3, firstName:'', lastName:'', email:'', countryCode:'', phoneNumber:'', inquiryType:'', message:'' });
        setTermsAccepted(false);
        setCaptchaVerified(false);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeadClick = (e) => e.preventDefault();

  return (
    <>
      <Head><title>Contact Us</title></Head>

      {/* HERO */}
      <div className="position-relative d-flex align-items-center justify-content-center text-center" style={{ height: '350px' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: `url('/assets/images/banner-img3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}></div>
        <div className="container py-5">
          <h1 className="display-3 fw-bold font-serif text-dark" style={{ textShadow: '0px 0px 10px rgba(255,255,255,0.8)' }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">

          {/* Sidebar */}
          <div className="col-lg-5 col-md-12 border-end">
            <p className="text-secondary">
              Thank you for your interest. Please contact our professionals.
            </p>

            <div className="mb-4">
              <p>Complete list of media contacts:</p>
              <Link href="/media-contacts"><a className="btn btn-premium">MEDIA CONTACTS</a></Link>
            </div>

            <div>
              <p>Learn about careers at our firm:</p>
              <p className="small">
                All jobs posted <a href="#" onClick={handleDeadClick} className="text-gold">here</a>.
                Report fraud to <a href="mailto:hr@nrlslaw.com" className="text-gold">hr@nrlslaw.com</a>.
              </p>
              <Link href="/careers"><a className="btn btn-premium">JOB OPPORTUNITIES</a></Link>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-7 col-md-12">
            <p className="text-secondary">Please fill out the form below.</p>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name*</label>
                  <input type="text" name="firstName" className="form-control" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name*</label>
                  <input type="text" name="lastName" className="form-control" required value={formData.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email*</label>
                <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-3">
                  <label className="form-label">Country Code*</label>
                  <input type="text" name="countryCode" placeholder="+91" className="form-control" required value={formData.countryCode} onChange={handleChange} />
                </div>
                <div className="col-md-9">
                  <label className="form-label">Phone Number*</label>
                  <input type="tel" name="phoneNumber" className="form-control" required value={formData.phoneNumber} onChange={handleChange} />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Inquiry Type*</label>
                <input type="text" name="inquiryType" className="form-control" placeholder="Your inquiry type" value={formData.inquiryType} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Message*</label>
                <textarea name="message" className="form-control" rows="5" required value={formData.message} onChange={handleChange}></textarea>
              </div>

              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="disclaimer" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                <label className="form-check-label" htmlFor="disclaimer">
                  <strong>Note:</strong> Do not send confidential info without speaking to an attorney.
                </label>
              </div>

              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="captcha" checked={captchaVerified} onChange={() => setCaptchaVerified(!captchaVerified)} />
                <label className="form-check-label" htmlFor="captcha">I'm not a robot</label>
              </div>

              <button type="submit" className="btn btn-premium" disabled={submitting}>
                {submitting ? 'SENDING...' : 'SUBMIT'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
