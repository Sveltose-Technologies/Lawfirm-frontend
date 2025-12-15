// import React from 'react'

// function Contact() {
//   // --- Theme Constants (Matches OurFirm.js) ---
//   const theme = {
//     primaryBlue: '#0a1c38',
//     accentGold: '#D4AF37',   
//     lightGray: 'rgb(244, 247, 246)',
//     white: '#ffffff',
//     borderColor: '#e0e0e0'
//   };

//   const handleDeadClick = (e) => {
//     e.preventDefault();
//   };

//   // --- DUMMY DATA FOR MEDIA CONTACTS ---
//   const mediaContactsList = [
//     {
//       id: 1,
//       name: "Sarah Jenkins",
//       designation: "Head of Corporate Communications",
//       phone: "+1 (555) 123-4567",
//       email: "sarah.jenkins@firmname.com"
//     },
//     {
//       id: 2,
//       name: "Michael Ross",
//       designation: "Public Relations Manager",
//       phone: "+1 (555) 987-6543",
//       email: "michael.ross@firmname.com"
//     },
//     {
//       id: 3,
//       name: "Media Inquiries Desk",
//       designation: "General Press Office",
//       phone: "+1 (555) 000-1111",
//       email: "press@firmname.com"
//     }
//   ];

//   return (
//     <>
//       {/* ========================================================================== 
//           HERO BANNER 
//       ========================================================================== */}
//       <div className="inner-banner-section d-flex align-items-center justify-content-center" style={{
//           backgroundImage: `linear-gradient(rgba(10, 28, 56, 0.8), rgba(10, 28, 56, 0.8)), url(https://images.unsplash.com/photo-1423666639041-f14d7045c573?q=80&w=1920&auto=format&fit=crop)`, 
//           minHeight: '50vh',
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           textAlign: 'center'
//         }}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <h1 className="text-white display-3 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Contact Us</h1>
//               <p className="text-white lead fs-4" style={{ letterSpacing: '1px' }}>Global Reach. Local Expertise. Personal Attention.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           SECTION 1: CONTACT FORM 
//       ========================================================================== */}
//       <div className="section-gap py-5" style={{ backgroundColor: theme.white }}>
//         <div className="container py-lg-5">
//           <div className="row">
            
//             {/* Left Side: Text Info (Responsive: Full width on mobile, 4 cols on desktop) */}
//             <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-start">
//                <span className="d-block mb-2" style={{color: theme.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
//                   Get in Touch
//                </span>
//                <h2 className="mb-4 display-6 fw-bold" style={{ color: theme.primaryBlue, fontFamily: 'serif' }}>
//                   General Inquiries
//                </h2>
//                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
//                  Please fill out the form to contact our team. For media-specific inquiries, please refer to the Media Contacts section below.
//                </p>
               
//                <div className="mt-5 p-4 rounded" style={{ backgroundColor: theme.lightGray }}>
//                  <h5 className="fw-bold mb-3" style={{ color: theme.primaryBlue }}>Office Headquarters</h5>
//                  <p className="text-secondary">
//                    123 Legal Avenue, Tower A<br/>
//                    New York, NY 10001<br/>
//                    United States
//                  </p>
//                  <hr className="my-3"/>
//                  <p className="text-secondary mb-0">
//                    <strong>Phone:</strong> +1 (212) 555-0199<br/>
//                    <strong>Email:</strong> info@ourfirm.com
//                  </p>
//                </div>
//             </div>

//             {/* Right Side: The Form */}
//             <div className="col-lg-8">
//               <div className="p-4 p-md-5 shadow-sm" style={{ backgroundColor: theme.lightGray, borderRadius: '8px' }}>
//                 <form>
//                   <div className="row g-4">
                    
//                     {/* Name Fields */}
//                     <div className="col-12 col-md-6">
//                       <label className="form-label fw-bold" style={{color: theme.primaryBlue}}>First Name</label>
//                       <input type="text" className="form-control border-0 p-3" placeholder="John" />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label className="form-label fw-bold" style={{color: theme.primaryBlue}}>Last Name</label>
//                       <input type="text" className="form-control border-0 p-3" placeholder="Doe" />
//                     </div>

//                     {/* Email */}
//                     <div className="col-12">
//                       <label className="form-label fw-bold" style={{color: theme.primaryBlue}}>Email Address</label>
//                       <input type="email" className="form-control border-0 p-3" placeholder="john.doe@example.com" />
//                     </div>

//                     {/* PHONE SECTION (Complex Requirement) */}
//                     <div className="col-12">
//                         <label className="form-label fw-bold" style={{color: theme.primaryBlue}}>Phone Details</label>
//                         <div className="row g-2">
//                             {/* Device Type */}
//                             <div className="col-12 col-md-4">
//                                 <select className="form-select border-0 p-3">
//                                     <option value="" defaultValue disabled>Device Type</option>
//                                     <option value="Mobile">Mobile</option>
//                                     <option value="Landline">Landline</option>
//                                     <option value="Fax">Fax</option>
//                                 </select>
//                             </div>
//                             {/* Country Code */}
//                             <div className="col-4 col-md-3">
//                                 <input type="text" className="form-control border-0 p-3" placeholder="+91" />
//                             </div>
//                             {/* Number */}
//                             <div className="col-8 col-md-5">
//                                 <input type="text" className="form-control border-0 p-3" placeholder="98765 43210" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Inquiry Type */}
//                     <div className="col-12">
//                       <label className="form-label fw-bold" style={{color: theme.primaryBlue}}>Inquiry Type</label>
//                       <select className="form-select border-0 p-3">
//                           <option value="" defaultValue disabled>Select Topic...</option>
//                           <option value="General">General Inquiry</option>
//                           <option value="Legal Services">Legal Services / Consultation</option>
//                           <option value="Recruitment">Careers / Recruitment</option>
//                           <option value="Media">Media / Press</option>
//                       </select>
//                     </div>

//                     {/* Message */}
//                     <div className="col-12">
//                       <label className="form-label fw-bold" style={{color: theme.primaryBlue}}>Message</label>
//                       <textarea className="form-control border-0 p-3" rows="5" placeholder="How can we assist you?"></textarea>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="col-12 mt-4">
//                       <button type="submit" onClick={handleDeadClick} className="btn-premium w-100 border-0">
//                         Submit Inquiry
//                       </button>
//                     </div>

//                   </div>
//                 </form>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           SECTION 2: MEDIA CONTACTS (Blue Background)
//       ========================================================================== */}
//       <div className="section-gap py-5" style={{ backgroundColor: theme.primaryBlue }}>
//         <div className="container py-lg-4">
            
//             <div className="row mb-5 text-center justify-content-center">
//                 <div className="col-lg-8">
//                     <span className="d-block mb-2" style={{color: theme.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
//                         Press & Media
//                     </span>
//                     <h2 className="display-5 fw-bold text-white" style={{ fontFamily: 'serif' }}>
//                         Media Contacts
//                     </h2>
//                     <p className="text-white-50 mt-3">
//                         For press inquiries, interviews, or official statements, please contact the appropriate representative below.
//                     </p>
//                 </div>
//             </div>

//             <div className="row g-4 justify-content-center">
//                 {/* Looping through Media Contacts List */}
//                 {mediaContactsList.map((contact) => (
//                     <div key={contact.id} className="col-md-6 col-lg-4">
//                         <div className="p-4 h-100 bg-white shadow rounded media-card">
//                             <div className="mb-3">
//                                 <h4 className="fw-bold mb-1" style={{ color: theme.primaryBlue, fontFamily: 'serif' }}>
//                                     {contact.name}
//                                 </h4>
//                                 <span className="d-block text-uppercase" style={{ color: theme.accentGold, fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px' }}>
//                                     {contact.designation}
//                                 </span>
//                             </div>
//                             <hr style={{ opacity: 0.1 }} />
//                             <div className="mt-3 text-secondary">
//                                 <p className="mb-2">
//                                     <i className="bi bi-telephone-fill me-2" style={{ color: theme.primaryBlue }}></i>
//                                     {contact.phone}
//                                 </p>
//                                 <p className="mb-0 text-break">
//                                     <i className="bi bi-envelope-fill me-2" style={{ color: theme.primaryBlue }}></i>
//                                     <a href="#" onClick={handleDeadClick} className="text-decoration-none text-secondary contact-link">
//                                         {contact.email}
//                                     </a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//       </div>

//       {/* ========================================================================== 
//           STYLES
//       ========================================================================== */}
//       <style jsx>{`
//         /* Form Styling */
//         .form-control:focus, .form-select:focus {
//             box-shadow: 0 0 0 2px ${theme.primaryBlue}20; /* Transparent blue ring */
//             outline: none;
//         }
        
//         /* Button Styling */
//         .btn-premium {
//             background-color: ${theme.primaryBlue};
//             color: #ffffff;
//             padding: 14px 30px;
//             font-weight: 700;
//             text-transform: uppercase;
//             letter-spacing: 1px;
//             text-decoration: none;
//             display: inline-block;
//             transition: all 0.3s ease-in-out;
//             cursor: pointer;
//             border-radius: 4px;
//         }

//         .btn-premium:hover {
//             background-color: ${theme.accentGold}; /* Gold on hover */
//             color: ${theme.primaryBlue};
//             transform: translateY(-2px);
//         }

//         /* Media Card Hover Effect */
//         .media-card {
//             transition: transform 0.3s ease;
//             border-bottom: 4px solid transparent;
//         }
//         .media-card:hover {
//             transform: translateY(-5px);
//             border-bottom: 4px solid ${theme.accentGold};
//         }
//         .contact-link:hover {
//             color: ${theme.primaryBlue} !important;
//             text-decoration: underline !important;
//         }
//       `}</style>
//     </>
//   )
// }

// export default Contact;

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Contact() {
  
  // --- STATES ---
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // --- THEME ---
  const theme = {
    primaryBlue: '#0a1c38',
    accentGold: '#D4AF37',   
    lightGray: 'rgb(244, 247, 246)',
    white: '#ffffff',
  };

  // --- GENERATE RANDOM CAPTCHA ---
  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  // Load Captcha on Mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleDeadClick = (e) => {
    e.preventDefault();
  };

  // --- FORM SUBMIT HANDLER ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Check Captcha
    if (userInput.toUpperCase() !== captchaCode) {
      alert("Invalid Captcha Code. Please try again.");
      return; // Stop submission
    }

    // 2. Check Terms
    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions.");
      return; // Stop submission
    }

    alert("Form submitted successfully!");
    // Reset form logic here if needed
    setUserInput("");
    setTermsAccepted(false);
    generateCaptcha();
  };

  // --- MEDIA CONTACTS DATA ---
  const mediaContactsList = [
    {
      id: 1,
      name: "Sarah Jenkins",
      designation: "Head of Corporate Communications",
      phone: "+1 (555) 123-4567",
      email: "sarah.jenkins@firmname.com"
    },
    {
      id: 2,
      name: "Michael Ross",
      designation: "Public Relations Manager",
      phone: "+1 (555) 987-6543",
      email: "michael.ross@firmname.com"
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Core Law</title>
      </Head>

      {/* ========================================================================== 
          HERO BANNER 
      ========================================================================== */}
      <div className="inner-banner-section d-flex align-items-center justify-content-center" style={{
          backgroundImage: `linear-gradient(rgba(10, 28, 56, 0.8), rgba(10, 28, 56, 0.8)), url(https://images.unsplash.com/photo-1423666639041-f14d7045c573?q=80&w=1920&auto=format&fit=crop)`, 
          minHeight: '50vh',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-white display-3 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Contact Us</h1>
              <p className="text-white lead fs-4">Global Reach. Local Expertise. Personal Attention.</p>
              
              {/* "Job Opportunities" Redirect Button */}
              <div className="mt-4">
                 <Link href="/careers">
                    <a className="btn btn-outline-light px-4 py-2 text-uppercase fw-bold" style={{letterSpacing: '1px'}}>
                       Looking for Job Opportunities? Click Here
                    </a>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================== 
          SECTION 1: CONTACT FORM 
      ========================================================================== */}
      <div className="section-gap py-5" style={{ backgroundColor: theme.white }}>
        <div className="container py-lg-5">
          <div className="row">
            
            {/* Left Side: Text Info */}
            <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-start">
               <span className="d-block mb-2" style={{color: theme.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
                  Get in Touch
               </span>
               <h2 className="mb-4 display-6 fw-bold" style={{ color: theme.primaryBlue, fontFamily: 'serif' }}>
                  General Inquiries
               </h2>
               <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                 Please fill out the form to contact our team. We ensure your data is kept confidential.
               </p>
               
               <div className="mt-5 p-4 rounded" style={{ backgroundColor: theme.lightGray }}>
                 <h5 className="fw-bold mb-3" style={{ color: theme.primaryBlue }}>Headquarters</h5>
                 <p className="text-secondary">
                   123 Legal Avenue, Tower A<br/>
                   New York, NY 10001<br/>
                   United States
                 </p>
                 <hr className="my-3"/>
                 <p className="text-secondary mb-0">
                   <strong>Phone:</strong> +1 (212) 555-0199<br/>
                   <strong>Email:</strong> info@corelaw.com
                 </p>
               </div>
            </div>

            {/* Right Side: The Form */}
            <div className="col-lg-8">
              <div className="p-4 p-md-5 shadow-lg rounded-3" style={{ backgroundColor: theme.white, borderTop: `5px solid ${theme.primaryBlue}` }}>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    
                    {/* Name Fields */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-bold small text-muted">First Name *</label>
                      <input type="text" className="form-control p-3 bg-light border-0" placeholder="John" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-bold small text-muted">Last Name *</label>
                      <input type="text" className="form-control p-3 bg-light border-0" placeholder="Doe" required />
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <label className="form-label fw-bold small text-muted">Email Address *</label>
                      <input type="email" className="form-control p-3 bg-light border-0" placeholder="john.doe@example.com" required />
                    </div>

                    {/* PHONE SECTION */}
                    <div className="col-12">
                        <label className="form-label fw-bold small text-muted">Phone Number *</label>
                        <div className="row g-2">
                            {/* Device Type */}
                            <div className="col-12 col-md-4">
                                <select className="form-select p-3 bg-light border-0" required>
                                    <option value="" defaultValue disabled>Device Type</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Landline">Landline</option>
                                    <option value="Fax">Fax</option>
                                </select>
                            </div>
                            {/* Country Code */}
                            <div className="col-4 col-md-3">
                                <input type="text" className="form-control p-3 bg-light border-0" placeholder="+91" required />
                            </div>
                            {/* Number */}
                            <div className="col-8 col-md-5">
                                <input type="text" className="form-control p-3 bg-light border-0" placeholder="98765 43210" required />
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="col-12">
                      <label className="form-label fw-bold small text-muted">Inquiry Type *</label>
                      <select className="form-select p-3 bg-light border-0" required>
                          <option value="" defaultValue disabled>Select Topic...</option>
                          <option value="General">General Inquiry</option>
                          <option value="Legal Services">Legal Services / Consultation</option>
                          <option value="Billing">Billing & Finance</option>
                          <option value="Media">Media / Press</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label className="form-label fw-bold small text-muted">Message</label>
                      <textarea className="form-control p-3 bg-light border-0" rows="5" placeholder="How can we assist you?"></textarea>
                    </div>

                    {/* ====================================
                        CUSTOM CAPTCHA SECTION
                    ==================================== */}
                    <div className="col-12">
                        <label className="form-label fw-bold small text-muted">Captcha *</label>
                        <div className="row g-3 align-items-center">
                            
                            {/* Captcha Visual Display */}
                            <div className="col-md-5">
                                <div className="d-flex align-items-center">
                                    <div 
                                      className="p-3 text-center fw-bold fs-4 rounded w-100" 
                                      style={{
                                          backgroundColor: '#e9ecef', 
                                          letterSpacing: '5px', 
                                          fontFamily: 'monospace',
                                          color: theme.primaryBlue,
                                          userSelect: 'none' // Prevents Copying
                                      }}
                                    >
                                        {captchaCode}
                                    </div>
                                    <button 
                                      type="button" 
                                      className="btn btn-sm btn-outline-secondary ms-2" 
                                      onClick={generateCaptcha}
                                      title="Refresh Code"
                                    >
                                      <i className="bi bi-arrow-clockwise"></i>
                                    </button>
                                </div>
                            </div>

                            {/* User Input */}
                            <div className="col-md-7">
                                <input 
                                  type="text" 
                                  className="form-control p-3 bg-light border-0" 
                                  placeholder="Enter Code" 
                                  value={userInput}
                                  onChange={(e) => setUserInput(e.target.value)}
                                  required 
                                />
                            </div>
                        </div>
                    </div>

                    {/* TERMS AND CONDITIONS */}
                    <div className="col-12">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="termsCheck" 
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                required
                            />
                            <label className="form-check-label text-muted small" htmlFor="termsCheck">
                                I accept the <a href="#" onClick={handleDeadClick} className="text-decoration-none" style={{color: theme.primaryBlue}}>Terms and Conditions</a> and Privacy Policy.
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-premium w-100 border-0">
                        Submit Inquiry
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          SECTION 2: MEDIA CONTACTS
      ========================================================================== */}
      <div className="section-gap py-5" style={{ backgroundColor: theme.primaryBlue }}>
        <div className="container py-lg-4">
            
            <div className="row mb-5 text-center justify-content-center">
                <div className="col-lg-8">
                    <span className="d-block mb-2" style={{color: theme.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
                        Press & Media
                    </span>
                    <h2 className="display-5 fw-bold text-white" style={{ fontFamily: 'serif' }}>
                        Media Contacts
                    </h2>
                    <p className="text-white-50 mt-3">
                        For press inquiries, interviews, or official statements, please contact the appropriate representative below.
                    </p>
                </div>
            </div>

            <div className="row g-4 justify-content-center">
                {mediaContactsList.map((contact) => (
                    <div key={contact.id} className="col-md-6 col-lg-4">
                        <div className="p-4 h-100 bg-white shadow rounded media-card position-relative">
                            <div className="mb-3">
                                <h4 className="fw-bold mb-1" style={{ color: theme.primaryBlue, fontFamily: 'serif' }}>
                                    {contact.name}
                                </h4>
                                <span className="d-block text-uppercase" style={{ color: theme.accentGold, fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                                    {contact.designation}
                                </span>
                            </div>
                            <hr style={{ opacity: 0.1 }} />
                            <div className="mt-3 text-secondary">
                                <p className="mb-2">
                                    <i className="bi bi-telephone-fill me-2" style={{ color: theme.primaryBlue }}></i>
                                    {contact.phone}
                                </p>
                                <p className="mb-0 text-break">
                                    <i className="bi bi-envelope-fill me-2" style={{ color: theme.primaryBlue }}></i>
                                    <a href="#" onClick={handleDeadClick} className="text-decoration-none text-secondary contact-link">
                                        {contact.email}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>

      {/* ========================================================================== 
          STYLES
      ========================================================================== */}
      <style jsx>{`
        /* Form Inputs Focus */
        .form-control:focus, .form-select:focus {
            box-shadow: 0 0 0 2px ${theme.primaryBlue}; 
            background-color: #fff !important;
            outline: none;
        }
        
        /* Button Styling */
        .btn-premium {
            background-color: ${theme.primaryBlue};
            color: #ffffff;
            padding: 14px 30px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            border-radius: 4px;
        }

        .btn-premium:hover {
            background-color: ${theme.accentGold}; 
            color: ${theme.primaryBlue};
            transform: translateY(-2px);
        }

        /* Media Card Hover Effect */
        .media-card {
            transition: transform 0.3s ease;
            border-bottom: 4px solid transparent;
        }
        .media-card:hover {
            transform: translateY(-5px);
            border-bottom: 4px solid ${theme.accentGold};
        }
        .contact-link:hover {
            color: ${theme.primaryBlue} !important;
            text-decoration: underline !important;
        }
      `}</style>
    </>
  )
}

export default Contact;