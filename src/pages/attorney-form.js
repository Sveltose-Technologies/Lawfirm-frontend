


// 'use client';

// import { useState } from 'react';

// export default function AttorneyPanel() {
//   // --- STATES ---
//   const [view, setView] = useState('login'); // 'login', 'signup1', 'signup2'
//   const [activeTab, setActiveTab] = useState('Attorney'); 
  
//   // Form Data State (Single object for all fields)
//   const [formData, setFormData] = useState({
//     // Step 1
//     firstName: '', lastName: '', email: '', password: '', repeatPassword: '', captcha: '',
//     // Step 2 - Address
//     street: '', apt: '', city: '', state: '', country: '', zip: '',
//     // Step 2 - Personal
//     phoneType: 'Cell', phone: '', dob: '', profileImg: null,
//     // Step 2 - Professional
//     services: [], 
//     college: '', passingYear: '', degreeDocs: null,
//     prevFirm: '', expYears: '',
//     // Step 2 - Bar Council
//     bciNumber: '', bciCard: null, stateBarId: '', stateBarCard: null,
//     // Step 2 - Family
//     hasFamily: 'no',
//     famFirstName: '', famLastName: '', famPracticeArea: '', famCourt: '', famCity: '', famState: '',
//     // Step 2 - KYC & Resume
//     kycIdentity: null, kycAddress: null, resume: null,
//     terms: false
//   });

//   // Errors State
//   const [errors, setErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState('');

//   // --- HELPERS & LISTS ---
//   const servicesList = [
//     "Criminal Defense", "Civil Litigation", "Corporate Law", 
//     "Family Law", "Intellectual Property", "Real Estate Law", 
//     "Tax Law", "Labor & Employment", "Immigration Law"
//   ];
  
//   const years = Array.from(new Array(46), (val, index) => 2025 - index); // 1980-2025

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
    
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else if (type === 'checkbox' && name === 'terms') {
//       setFormData({ ...formData, [name]: checked });
//     } else if (name === 'services') {
//         // Handle Multi-select logic (simple version for demo)
//         const options = e.target.options;
//         const selected = [];
//         for (let i = 0; i < options.length; i++) {
//             if (options[i].selected) selected.push(options[i].value);
//         }
//         setFormData({ ...formData, services: selected });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
    
//     // Clear error for this field when user types
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // --- VALIDATIONS ---
  
//   const validateStep1 = () => {
//     let newErrors = {};
//     let isValid = true;

//     // 1. Mandatory & Length
//     if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
//     else if (formData.firstName.length < 2) newErrors.firstName = "Min 2 chars required";

//     if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

//     // 2. Email Format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid Email format";

//     // 3. Password Strength (Min 8, 1 Upper, 1 Special, 1 Number)
//     const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!formData.password) newErrors.password = "Password is required";
//     else if (!passRegex.test(formData.password)) newErrors.password = "Weak Password: Use 8+ chars, 1 Upper, 1 Number, 1 Special Char";

//     // 4. Repeat Password
//     if (formData.password !== formData.repeatPassword) newErrors.repeatPassword = "Passwords do not match";

//     // 5. Captcha
//     if (formData.captcha.toUpperCase() !== 'X7K9B') newErrors.captcha = "Invalid Captcha Code";

//     if (Object.keys(newErrors).length > 0) isValid = false;
//     setErrors(newErrors);
//     return isValid;
//   };

//   const validateStep2 = () => {
//     let newErrors = {};
//     let isValid = true;

//     // Mandatory checks for text fields
//     const requiredFields = ['street', 'apt', 'city', 'state', 'country', 'zip', 'phone', 'dob', 'college', 'passingYear', 'prevFirm', 'expYears', 'bciNumber', 'stateBarId'];
    
//     requiredFields.forEach(field => {
//         if (!formData[field] || formData[field].toString().trim() === '') {
//             newErrors[field] = "This field is mandatory";
//         }
//     });

//     // Phone Validation (10 digits)
//     if (formData.phone && (formData.phone.length < 10 || formData.phone.length > 15)) {
//         newErrors.phone = "Invalid Phone Number length";
//     }

//     // Services Validation
//     if (formData.services.length === 0) {
//         newErrors.services = "Select at least one service";
//     }

//     // Family Validation (If Yes)
//     if (formData.hasFamily === 'yes') {
//         if (!formData.famFirstName) newErrors.famFirstName = "Required";
//         if (!formData.famLastName) newErrors.famLastName = "Required";
//         if (!formData.famPracticeArea) newErrors.famPracticeArea = "Required";
//         if (!formData.famCourt) newErrors.famCourt = "Required";
//     }

//     // Terms
//     if (!formData.terms) newErrors.terms = "You must accept the Terms and Conditions";

//     if (Object.keys(newErrors).length > 0) isValid = false;
    
//     // If invalid, scroll to top error
//     if (!isValid) window.scrollTo(0,0);
    
//     setErrors(newErrors);
//     return isValid;
//   };

//   // --- ACTIONS ---

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert("Login Successful (Demo)");
//   };

//   const handleSignUpStep1 = (e) => {
//     e.preventDefault();
    
//     // Excel Rule: "Click Sign Up button with existing email Id should get an error"
//     if (formData.email === 'exist@lawfirm.com') {
//       setErrors({ email: 'Error: This Email ID is already registered.' });
//       return;
//     }

//     if (validateStep1()) {
//        // Excel Rule: "Navigate to Form 2"
//        setView('signup2');
//        window.scrollTo(0, 0);
//     }
//   };

//   const handleFinalSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateStep2()) {
//         // Excel Rule: Information Message
//         setSuccessMsg("Please check your email to activate your account or contact us");
        
//         // Excel Rule: Auto send email & Auto Generate ID
//         setTimeout(() => {
//             const generatedID = `ATT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
//             alert(`Email Sent!\nAccount Created Successfully.\n\nYour Attorney ID: ${generatedID}`);
            
//             // Reset & Redirect
//             setSuccessMsg('');
//             setFormData({
//                 firstName: '', lastName: '', email: '', password: '', repeatPassword: '', captcha: '',
//                 street: '', apt: '', city: '', state: '', country: '', zip: '',
//                 phoneType: 'Cell', phone: '', dob: '', profileImg: null, services: [], 
//                 college: '', passingYear: '', degreeDocs: null, prevFirm: '', expYears: '',
//                 bciNumber: '', bciCard: null, stateBarId: '', stateBarCard: null,
//                 hasFamily: 'no', famFirstName: '', famLastName: '', famPracticeArea: '', famCourt: '', famCity: '', famState: '',
//                 kycIdentity: null, kycAddress: null, resume: null, terms: false
//             });
//             setView('login');
//         }, 3000);
//     } else {
//         alert("Please fill all mandatory fields correctly.");
//     }
//   };

//   return (
//     <>
//       <style jsx global>{`
//         @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
//         .bg-navy { background-color: #002b5c; }
//         .text-navy { color: #002b5c; }
//         .btn-navy { background-color: #002b5c; color: white; }
//         .btn-navy:hover { background-color: #001f42; color: white; }
//         .form-label { font-size: 0.85rem; font-weight: 600; color: #444; margin-bottom: 4px; }
//         .req { color: #dc3545; margin-left: 2px; }
//         .error-text { color: #dc3545; font-size: 0.75rem; margin-top: 2px; display: block; }
//         .section-header { color: #002b5c; border-bottom: 2px solid #eee; padding-bottom: 8px; margin: 25px 0 15px 0; font-weight: 700; }
//         .auth-container { max-width: 900px; width: 100%; box-shadow: 0 0 20px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; background: white; }
//         .login-container { max-width: 450px; }
//       `}</style>

//       <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-4">
        
//         <div className={`auth-container ${view === 'login' ? 'login-container' : ''}`}>
          
//           {/* HEADER */}
//           <div className="bg-white border-bottom p-3 text-center">
//              <h3 className="text-navy m-0" style={{fontFamily:'serif'}}>Law Firm Portal</h3>
//           </div>

//           <div className="p-4">

//             {/* ===================== VIEW 1: LOGIN ===================== */}
//             {view === 'login' && (
//               <div className="fade-in">
//                 <h4 className="text-center mb-4">Attorney Sign In</h4>
//                 <form onSubmit={handleLogin}>
//                   <div className="mb-3">
//                     <label className="form-label">Email ID <span className="req">*</span></label>
//                     <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="email@lawfirm.com" required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Password <span className="req">*</span></label>
//                     <input type="password" className="form-control" name="password" onChange={handleChange} required />
//                   </div>
//                   <button type="submit" className="btn btn-navy w-100 py-2">Log In</button>
//                   <div className="text-center mt-3 small">
//                     New User? <span className="text-navy fw-bold" style={{cursor:'pointer'}} onClick={() => { setView('signup1'); setErrors({}); }}>Sign Up</span>
//                   </div>
//                 </form>
//               </div>
//             )}

//             {/* ===================== VIEW 2: SIGN UP STEP 1 ===================== */}
//             {view === 'signup1' && (
//               <div className="fade-in">
//                 <h4 className="text-center mb-3">Sign Up</h4>
//                 <p className="text-muted text-center small mb-4">Step 1: Account Credentials</p>

//                 <form onSubmit={handleSignUpStep1} noValidate>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">First Name <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} name="firstName" value={formData.firstName} onChange={handleChange} maxLength="30" />
//                         {errors.firstName && <span className="error-text">{errors.firstName}</span>}
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Last Name <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} name="lastName" value={formData.lastName} onChange={handleChange} maxLength="30" />
//                         {errors.lastName && <span className="error-text">{errors.lastName}</span>}
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Email ID <span className="req">*</span></label>
//                     <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} name="email" value={formData.email} onChange={handleChange} placeholder="attorney@lawfirm.com" />
//                     {errors.email && <span className="error-text">{errors.email}</span>}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Password <span className="req">*</span></label>
//                     <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} name="password" value={formData.password} onChange={handleChange} />
//                     {errors.password && <span className="error-text">{errors.password}</span>}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Repeat Password <span className="req">*</span></label>
//                     <input type="password" className={`form-control ${errors.repeatPassword ? 'is-invalid' : ''}`} name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} />
//                     {errors.repeatPassword && <span className="error-text">{errors.repeatPassword}</span>}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Captcha <span className="req">*</span></label>
//                     <div className="p-2 bg-light border text-center fw-bold mb-2" style={{letterSpacing:'5px'}}>X 7 K 9 B</div>
//                     <input type="text" className={`form-control ${errors.captcha ? 'is-invalid' : ''}`} name="captcha" placeholder="Enter Code" onChange={handleChange} />
//                     {errors.captcha && <span className="error-text">{errors.captcha}</span>}
//                   </div>

//                   <button type="submit" className="btn btn-navy w-100 py-2">Sign Up</button>
                  
//                   <div className="text-center mt-3 small">
//                     Already Have An Account? <span className="text-navy fw-bold" style={{cursor:'pointer'}} onClick={() => setView('login')}>Sign In</span>
//                   </div>
//                 </form>
//               </div>
//             )}

//             {/* ===================== VIEW 3: SIGN UP STEP 2 (PROFILE) ===================== */}
//             {view === 'signup2' && (
//               <div className="fade-in">
//                 <h4 className="text-center text-navy">Update Your Profile</h4>
//                 <p className="text-muted text-center small">Step 2: Professional & KYC Details</p>

//                 {successMsg && (
//                     <div className="alert alert-success text-center">
//                         {successMsg}
//                     </div>
//                 )}

//                 <form onSubmit={handleFinalSubmit} noValidate>

//                   {/* 1. Address Section */}
//                   <h5 className="section-header">📍 Address & Personal Details</h5>
//                   <div className="row">
//                     <div className="col-12 mb-3">
//                         <label className="form-label">Street Name <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.street ? 'is-invalid' : ''}`} name="street" onChange={handleChange} maxLength="100" />
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label className="form-label">Apt/Block/Unit <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.apt ? 'is-invalid' : ''}`} name="apt" onChange={handleChange} maxLength="20" />
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label className="form-label">City <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''}`} name="city" onChange={handleChange} maxLength="50" />
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label className="form-label">State <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.state ? 'is-invalid' : ''}`} name="state" onChange={handleChange} maxLength="50" />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Country <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.country ? 'is-invalid' : ''}`} name="country" onChange={handleChange} maxLength="50" />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Zip/Pin Code <span className="req">*</span></label>
//                         <input type="number" className={`form-control ${errors.zip ? 'is-invalid' : ''}`} name="zip" onChange={handleChange} maxLength="10" />
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Phone Number <span className="req">*</span></label>
//                         <div className="input-group">
//                             <select className="form-select" style={{maxWidth:'100px'}} name="phoneType" onChange={handleChange}>
//                                 <option>Cell</option><option>Home</option><option>Office</option>
//                             </select>
//                             <input type="number" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} name="phone" onChange={handleChange} placeholder="10 Digit Number" />
//                         </div>
//                         {errors.phone && <span className="error-text">{errors.phone}</span>}
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Date of Birth <span className="req">*</span></label>
//                         <input type="date" className={`form-control ${errors.dob ? 'is-invalid' : ''}`} name="dob" onChange={handleChange} max="2007-01-01" />
//                         <small className="text-muted" style={{fontSize:'10px'}}>Must be 18+</small>
//                     </div>
//                     <div className="col-12 mb-3">
//                         <label className="form-label">Profile Image <span className="text-muted fw-normal">(Selfie for Mobile)</span></label>
//                         <input type="file" className="form-control" name="profileImg" accept="image/*" onChange={handleChange} />
//                     </div>
//                   </div>

//                   {/* 2. Educational & Professional */}
//                   <h5 className="section-header">🎓 Professional & Education</h5>
                  
//                   <div className="mb-3">
//                     <label className="form-label">Services Offered <span className="req">*</span></label>
//                     <select className={`form-select ${errors.services ? 'is-invalid' : ''}`} name="services" multiple size="4" onChange={handleChange}>
//                         {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
//                     </select>
//                     <small className="text-muted" style={{fontSize:'11px'}}>Hold Ctrl/Cmd to select multiple</small>
//                     {errors.services && <span className="error-text">{errors.services}</span>}
//                   </div>

//                   <div className="row">
//                     <div className="col-md-8 mb-3">
//                         <label className="form-label">Law College / University Name <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.college ? 'is-invalid' : ''}`} name="college" onChange={handleChange} maxLength="100" />
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label className="form-label">Year of Passing <span className="req">*</span></label>
//                         <select className={`form-select ${errors.passingYear ? 'is-invalid' : ''}`} name="passingYear" onChange={handleChange}>
//                             <option value="">Select Year</option>
//                             {years.map(y => <option key={y} value={y}>{y}</option>)}
//                         </select>
//                     </div>
//                     <div className="col-12 mb-3">
//                         <label className="form-label">Upload Degree Certificates (Marklist & Degree) <span className="req">*</span></label>
//                         <input type="file" className="form-control" name="degreeDocs" multiple required onChange={handleChange} />
//                     </div>
//                   </div>

//                   {/* Experience */}
//                   <div className="row bg-light p-3 rounded mb-3 mx-1 border">
//                      <div className="col-md-9 mb-2">
//                         <label className="form-label">Previous Firm / Court Name <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.prevFirm ? 'is-invalid' : ''}`} name="prevFirm" onChange={handleChange} />
//                      </div>
//                      <div className="col-md-3 mb-2">
//                         <label className="form-label">Exp (Years) <span className="req">*</span></label>
//                         <input type="number" className={`form-control ${errors.expYears ? 'is-invalid' : ''}`} name="expYears" onChange={handleChange} />
//                      </div>
//                   </div>

//                   {/* Bar Council */}
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Bar Council of India No. <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.bciNumber ? 'is-invalid' : ''}`} name="bciNumber" onChange={handleChange} />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Upload BCI ID Card <span className="req">*</span></label>
//                         <input type="file" className="form-control" name="bciCard" required onChange={handleChange} />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Bar Council of State ID <span className="req">*</span></label>
//                         <input type="text" className={`form-control ${errors.stateBarId ? 'is-invalid' : ''}`} name="stateBarId" onChange={handleChange} />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label className="form-label">Upload State ID Card <span className="req">*</span></label>
//                         <input type="file" className="form-control" name="stateBarCard" required onChange={handleChange} />
//                     </div>
//                   </div>

//                   {/* 3. Family Logic */}
//                   <h5 className="section-header">⚖️ Conflict of Interest Check</h5>
//                   <div className="mb-3">
//                     <label className="form-label d-block">Is any immediate family member doing law practice? <span className="req">*</span></label>
//                     <div className="form-check form-check-inline">
//                         <input className="form-check-input" type="radio" name="hasFamily" id="famYes" value="yes" onChange={handleChange} />
//                         <label className="form-check-label" htmlFor="famYes">Yes</label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                         <input className="form-check-input" type="radio" name="hasFamily" id="famNo" value="no" defaultChecked onChange={handleChange} />
//                         <label className="form-check-label" htmlFor="famNo">No</label>
//                     </div>
//                   </div>

//                   {formData.hasFamily === 'yes' && (
//                       <div className="p-3 mb-3 border rounded bg-white shadow-sm">
//                           <h6 className="text-navy small fw-bold mb-3">Enter Family Member Details</h6>
//                           <div className="row">
//                             <div className="col-md-6 mb-2">
//                                 <label className="form-label">First Name <span className="req">*</span></label>
//                                 <input type="text" className={`form-control ${errors.famFirstName ? 'is-invalid' : ''}`} name="famFirstName" onChange={handleChange} />
//                             </div>
//                             <div className="col-md-6 mb-2">
//                                 <label className="form-label">Last Name <span className="req">*</span></label>
//                                 <input type="text" className={`form-control ${errors.famLastName ? 'is-invalid' : ''}`} name="famLastName" onChange={handleChange} />
//                             </div>
//                             <div className="col-md-6 mb-2">
//                                 <label className="form-label">Practice Area <span className="req">*</span></label>
//                                 <input type="text" className={`form-control ${errors.famPracticeArea ? 'is-invalid' : ''}`} name="famPracticeArea" onChange={handleChange} />
//                             </div>
//                             <div className="col-md-6 mb-2">
//                                 <label className="form-label">Court Name <span className="req">*</span></label>
//                                 <input type="text" className={`form-control ${errors.famCourt ? 'is-invalid' : ''}`} name="famCourt" onChange={handleChange} />
//                             </div>
//                             <div className="col-md-6 mb-2">
//                                 <label className="form-label">City</label>
//                                 <input type="text" className="form-control" name="famCity" onChange={handleChange} />
//                             </div>
//                             <div className="col-md-6 mb-2">
//                                 <label className="form-label">State</label>
//                                 <input type="text" className="form-control" name="famState" onChange={handleChange} />
//                             </div>
//                           </div>
//                       </div>
//                   )}

//                   {/* 4. KYC & Resume */}
//                   <h5 className="section-header">📄 Documents Upload</h5>
//                   <div className="row">
//                      <div className="col-md-6 mb-3">
//                         <label className="form-label">Proof of Identity (PAN/DL/Aadhaar) <span className="req">*</span></label>
//                         <input type="file" className="form-control" name="kycIdentity" required onChange={handleChange} />
//                      </div>
//                      <div className="col-md-6 mb-3">
//                         <label className="form-label">Proof of Address (Utility/Rent Agmt) <span className="req">*</span></label>
//                         <input type="file" className="form-control" name="kycAddress" required onChange={handleChange} />
//                      </div>
//                      <div className="col-12 mb-3">
//                         <label className="form-label">Upload Resume <span className="req">*</span></label>
//                         <input type="file" className="form-control" name="resume" required onChange={handleChange} />
//                      </div>
//                   </div>

//                   {/* Terms */}
//                   <div className="form-check mb-4 mt-4">
//                     <input className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`} type="checkbox" name="terms" id="termsCheck" onChange={handleChange} />
//                     <label className="form-check-label small" htmlFor="termsCheck">
//                       I accept the Terms and Conditions
//                     </label>
//                     {errors.terms && <span className="error-text">Required</span>}
//                   </div>

//                   <button type="submit" className="btn btn-navy w-100 py-3 fw-bold fs-5">Save Profile</button>
                  
//                   <div className="text-center mt-3">
//                       <span className="text-muted small" style={{cursor:'pointer'}} onClick={() => setView('signup1')}>← Back to Account Details</span>
//                   </div>

//                 </form>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


'use client';

import { useState } from 'react';

// --- PLACEHOLDER DASHBOARDS ---
const ClientDashboard = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center p-5 shadow bg-white rounded">
      <h1 className="text-primary">🏛️ Client Dashboard</h1>
      <p className="lead">Welcome! You are logged in as a Client.</p>
    </div>
  </div>
);

const AttorneyDashboard = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center p-5 shadow bg-white rounded">
      <h1 className="text-warning text-dark">⚖️ Attorney Dashboard</h1>
      <p className="lead">Welcome! You are logged in as an Attorney.</p>
    </div>
  </div>
);

// --- MAIN COMPONENT START ---
export default function UnifiedAuthPage() {

  // --- COUNTRY CODES LIST (For Step 2) ---
  const countryCodes = [
    { name: "India", code: "+91" },
    { name: "USA/Canada", code: "+1" },
    { name: "UK", code: "+44" },
    { name: "Australia", code: "+61" },
    { name: "UAE", code: "+971" },
    // ... (List continues as before)
  ];

  // --- STATES ---
  const [userRole, setUserRole] = useState('Client'); 
  const [view, setView] = useState('login'); // 'login' or 'signup'
  const [step, setStep] = useState(1); // 1 = Basic Info, 2 = Profile
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Messages
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // --- FORM DATA STATE ---
  const [formData, setFormData] = useState({
    // Step 1 Fields
    firstName: '', lastName: '', email: '', password: '', repeatPassword: '', captcha: '',
    // Step 2 Fields (Hidden initially)
    street: '', apt: '', city: '', state: '', country: '', zip: '',
    countryCode: '+91', phone: '', dob: '',
    terms: false
  });

  // Handle Inputs
  const handleInput = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  // --- ACTIONS ---

  // 1. LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email === 'error@lawfirm.com') {
      setError('Invalid Email ID or Password');
      return;
    }
    if(formData.email.includes('attorney')) {
        setUserRole('Attorney');
    } else {
        setUserRole('Client');
    }
    setIsAuthenticated(true);
  };

  // 2. SIGN UP STEP 1 (VALIDATION ONLY HERE)
  const handleStep1 = (e) => {
    e.preventDefault();
    setError('');

    // --- VALIDATIONS ---
    // 1. Mandatory Check (HTML required attribute handles basic check, logic here for safety)
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
        setError("All fields are mandatory.");
        return;
    }

    // 2. Email Validation
    if (formData.email === 'exist@lawfirm.com') {
      setError('Error: This Email ID is already registered.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setError('Invalid Email Format');
        return;
    }

    // 3. Password Match & Strength
    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match!');
      return;
    }
    if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
    }

    // 4. Captcha Validation
    if (formData.captcha.toUpperCase() !== 'X7K9B') {
      setError('Invalid Captcha!');
      return;
    }

    // If All Valid -> Go to Step 2
    setStep(2);
    window.scrollTo(0, 0);
  };

  // 3. FINAL SUBMIT
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('Please check your email to activate your account.');

    setTimeout(() => {
      alert(`Account Created for ${userRole}!\nGenerated ID: MEM-${Math.floor(1000 + Math.random() * 9000)}`);
      setSuccessMsg('');
      setView('login');
      setStep(1);
    }, 2000);
  };

  // RENDER DASHBOARD
  if (isAuthenticated) {
    if (userRole === 'Client') return <ClientDashboard />;
    if (userRole === 'Attorney') return <AttorneyDashboard />;
  }

  return (
    <>
      <div className="main-wrapper">
        <div className={`auth-card ${step === 2 && view === 'signup' ? 'wide' : ''}`}>

          <div className="form-body">

            {/* LOGIN FORM */}
            {view === 'login' && (
              <div className="fade-in">
                <h2 className="portal-title">Welcome Back</h2>
                <p className="portal-subtitle">Please Sign In to continue</p>

                {error && <div className="alert-msg error">{error}</div>}

                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label className="lbl">Email ID <span className="req">*</span></label>
                    <input type="email" name="email" className="inp" placeholder="email@lawfirm.com" onChange={handleInput} required />
                  </div>
                  <div className="form-group">
                    <label className="lbl">Password <span className="req">*</span></label>
                    <input type="password" name="password" className="inp" onChange={handleInput} required />
                  </div>
                  
                  <div className="forgot-link">
                    <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
                  </div>
                  
                  <button type="submit" className="action-btn">Log In</button>

                  <div className="toggle-text">
                    New User? <span onClick={() => { setView('signup'); setError(''); }}>Create Account</span>
                  </div>
                </form>
              </div>
            )}

            {/* SIGN UP STEP 1 (ONLY BASIC FIELDS) */}
            {view === 'signup' && step === 1 && (
              <div className="fade-in">
                <h2 className="portal-title">Create Account</h2>
                
                {/* Role Selector (Client/Attorney Toggle) */}
                <div className="role-selector">
                    <div className="role-btns">
                        <button 
                            type="button"
                            className={`role-btn ${userRole === 'Client' ? 'active' : ''}`}
                            onClick={() => setUserRole('Client')}
                        >
                            Client
                        </button>
                        <button 
                            type="button"
                            className={`role-btn ${userRole === 'Attorney' ? 'active' : ''}`}
                            onClick={() => setUserRole('Attorney')}
                        >
                            Attorney
                        </button>
                    </div>
                </div>

                {error && <div className="alert-msg error">{error}</div>}

                <form onSubmit={handleStep1}>
                  {/* Field 1 & 2: Names */}
                  <div className="row-split">
                    <div className="col">
                      <label className="lbl">First Name <span className="req">*</span></label>
                      <input type="text" name="firstName" className="inp" onChange={handleInput} required />
                    </div>
                    <div className="col">
                      <label className="lbl">Last Name <span className="req">*</span></label>
                      <input type="text" name="lastName" className="inp" onChange={handleInput} required />
                    </div>
                  </div>

                  {/* Field 3: Email */}
                  <div className="form-group">
                    <label className="lbl">Email ID <span className="req">*</span></label>
                    <input type="email" name="email" className="inp" onChange={handleInput} required />
                  </div>

                  {/* Field 4: Password */}
                  <div className="form-group">
                    <label className="lbl">Password <span className="req">*</span></label>
                    <input type="password" name="password" className="inp" onChange={handleInput} required />
                  </div>

                  {/* Field 5: Repeat Password */}
                  <div className="form-group">
                    <label className="lbl">Repeat Password <span className="req">*</span></label>
                    <input type="password" name="repeatPassword" className="inp" onChange={handleInput} required />
                  </div>

                  {/* Field 6: Captcha */}
                  <div className="form-group">
                    <label className="lbl">Captcha <span className="req">*</span></label>
                    <div className="captcha-box">X 7 K 9 B</div>
                    <input type="text" name="captcha" className="inp" placeholder="Enter Code" onChange={handleInput} required />
                  </div>

                  <button type="submit" className="action-btn">Next Step →</button>
                  
                  <div className="toggle-text">
                    Already Have An Account? <span onClick={() => setView('login')}>Sign In</span>
                  </div>
                </form>
              </div>
            )}

            {/* SIGN UP STEP 2 (Details hidden until Step 1 validates) */}
            {view === 'signup' && step === 2 && (
              <div className="fade-in">
                <h2 className="portal-title">Complete Profile</h2>
                <p className="portal-subtitle">Step 2: {userRole} KYC Details</p>

                {successMsg && <div className="alert-msg success">{successMsg}</div>}

                <form onSubmit={handleFinalSubmit}>
                  {/* Address */}
                  <h4 className="section-head">Address Details</h4>
                  <div className="row-split">
                    <div className="col" style={{flex: 2}}>
                      <label className="lbl">Street Name <span className="req">*</span></label>
                      <input type="text" name="street" className="inp" onChange={handleInput} required />
                    </div>
                    <div className="col">
                      <label className="lbl">Apt/Unit <span className="req">*</span></label>
                      <input type="text" name="apt" className="inp" onChange={handleInput} required />
                    </div>
                  </div>
                  <div className="row-split">
                    <div className="col"><label className="lbl">City <span className="req">*</span></label><input type="text" name="city" className="inp" onChange={handleInput} required /></div>
                    <div className="col"><label className="lbl">State <span className="req">*</span></label><input type="text" name="state" className="inp" onChange={handleInput} required /></div>
                  </div>
                  <div className="row-split">
                    <div className="col"><label className="lbl">Country <span className="req">*</span></label><input type="text" name="country" className="inp" onChange={handleInput} required /></div>
                    <div className="col"><label className="lbl">Zip Code <span className="req">*</span></label><input type="number" name="zip" className="inp" onChange={handleInput} required /></div>
                  </div>

                  {/* Personal */}
                  <h4 className="section-head">Personal Details</h4>
                  <div className="row-split">
                    
                    {/* Country Code Dropdown */}
                    <div className="col" style={{flex: 0.6}}>
                      <label className="lbl">Code <span className="req">*</span></label>
                      <select name="countryCode" className="inp" onChange={handleInput} required>
                        {countryCodes.map((c, i) => (
                           <option key={i} value={c.code}>{c.code} ({c.name})</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="col" style={{flex: 1.4}}>
                      <label className="lbl">Phone Number <span className="req">*</span></label>
                      <input type="number" name="phone" className="inp" onChange={handleInput} required />
                    </div>
                    <div className="col" style={{flex: 1.5}}>
                      <label className="lbl">Date Of Birth <span className="req">*</span></label>
                      <input type="date" name="dob" className="inp" onChange={handleInput} required />
                    </div>
                  </div>

                  <div className="file-box mt-3">
                    <label className="lbl">Profile Image (Selfie)</label>
                    <input type="file" className="inp-file" accept="image/*" />
                  </div>

                  {/* KYC SECTION */}
                  <h4 className="section-head">
                    {userRole === 'Attorney' ? 'Bar Council & ID Proof' : 'Identity Proof'}
                  </h4>
                  <div className="form-group">
                    <label className="lbl">Proof of Identity <span className="req">*</span></label>
                    <small className="small-text">
                        {userRole === 'Attorney' ? 'Bar Council ID / Licence' : 'PAN Card, Aadhaar, or Passport'}
                    </small>
                    <input type="file" className="inp-file" required />
                  </div>
                  <div className="form-group">
                    <label className="lbl">Proof of Address <span className="req">*</span></label>
                    <input type="file" className="inp-file" required />
                  </div>

                  <div className="terms-box">
                    <input type="checkbox" name="terms" id="terms" required onChange={handleInput} />
                    <label htmlFor="terms">I accept the Terms and Conditions.</label>
                  </div>

                  <button type="submit" className="action-btn">Complete Registration</button>
                  
                  <div className="toggle-text" style={{marginTop:'10px'}}>
                    <span onClick={() => setStep(1)} style={{color:'#666', fontSize:'13px'}}>← Back to Step 1</span>
                  </div>

                </form>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
        
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background-color: #f4f7f6; }

        .main-wrapper {
          display: flex; justify-content: center; align-items: center;
          min-height: 100vh; padding: 20px;
        }

        .auth-card {
          background: white; width: 100%; max-width: 450px;
          border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          overflow: hidden; transition: max-width 0.4s ease;
          border-top: 5px solid #002b5c; 
        }
        .auth-card.wide { max-width: 750px; }

        .form-body { padding: 40px 30px; }
        .portal-title { text-align: center; color: #002b5c; margin: 0 0 5px 0; font-size: 28px; font-family: 'Merriweather', serif; }
        .portal-subtitle { text-align: center; color: #888; margin: 0 0 25px 0; font-size: 14px; }
        .section-head { color: #002b5c; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px; font-size: 16px; font-weight: bold; }

        .role-selector { text-align: center; margin-bottom: 20px; }
        .role-btns { display: flex; justify-content: center; gap: 10px; }
        .role-btn {
            padding: 8px 20px; border: 1px solid #ddd; background: #fff;
            border-radius: 20px; cursor: pointer; font-size: 14px; font-weight: 600; color: #555;
            transition: all 0.3s;
        }
        .role-btn.active {
            background: #002b5c; color: #fff; border-color: #002b5c; box-shadow: 0 2px 5px rgba(0,43,92,0.3);
        }

        .form-group { margin-bottom: 15px; }
        .row-split { display: flex; gap: 15px; margin-bottom: 15px; }
        .col { flex: 1; }

        .lbl { display: block; font-size: 13px; font-weight: 600; color: #444; margin-bottom: 5px; }
        .req { color: red; }
        .small-text { display: block; font-size: 11px; color: #888; margin-bottom: 5px; }
        
        .inp, select { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; color: #333; outline: none; }
        .inp:focus { border-color: #002b5c; }
        
        .file-box { background: #fafafa; border: 1px dashed #ccc; padding: 10px; border-radius: 4px; margin-bottom: 15px; }
        .inp-file { font-size: 13px; width: 100%; }

        .action-btn { width: 100%; padding: 12px; background: #002b5c; color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 10px; }
        .action-btn:hover { background: #001f42; }

        .forgot-link { text-align: right; margin-bottom: 20px; }
        .forgot-link a { color: #002b5c; font-size: 13px; text-decoration: none; }
        
        .toggle-text { text-align: center; margin-top: 25px; font-size: 14px; color: #666; }
        .toggle-text span { color: #cfa144; font-weight: bold; cursor: pointer; }
        
        .captcha-box { background: #eee; padding: 8px; text-align: center; letter-spacing: 4px; font-weight: bold; border: 1px solid #ddd; margin-bottom: 5px; color: #333; }
        
        .terms-box { display: flex; align-items: center; gap: 8px; font-size: 13px; margin: 20px 0; }
        
        .alert-msg { padding: 10px; font-size: 13px; text-align: center; border-radius: 4px; margin-bottom: 15px; }
        .alert-msg.error { background: #ffe6e6; color: #d63031; border: 1px solid #ff7675; }
        .alert-msg.success { background: #e6fffa; color: #00b894; border: 1px solid #55efc4; }

        /* Animation: Bottom to Top */
        .fade-in { animation: slideUp 0.6s ease-out; }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(100px); } 
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}