import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha"; 

function LoginSignup() {
  
  // --- UI STATE ---
  const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- RECAPTCHA STATE ---
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  // ============================================================
  // --- 1. SIGN IN DATA (Excel Requirement: Email/Phone/Username, Password)
  // ============================================================
  const [loginData, setLoginData] = useState({ 
    identifier: '', // Single field for Email, Phone, or Username
    password: '' 
  });

  // ============================================================
  // --- 2. SIGNUP DATA (Excel Requirement: FN, LN, Code, Phone, Email, Pass, Verify Pass)
  // ============================================================
  const [signupData, setSignupData] = useState({ 
    firstName: '', 
    lastName: '', 
    countryCode: '+91', 
    phone: '', 
    email: '', 
    password: '', 
    verifyPassword: '' 
  });

  // ============================================================
  // --- 3. FORGOT PASS DATA (Excel Requirement: Email, Phone/WhatsApp Enabled)
  // ============================================================
  const [forgotData, setForgotData] = useState({ 
    email: '', 
    whatsappEnabled: false // Checkbox logic
  });

  // --- ERROR STATE ---
  const [errors, setErrors] = useState({});

  // --- THEME COLORS ---
  const theme = {
    primaryBlue: '#002855',
    accentGold: '#de9f57', 
    white: '#ffffff',
    errorRed: '#dc3545'
  };

  // --- HANDLERS ---
  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  
  const handleSignupChange = (e) => setSignupData({ ...signupData, [e.target.name]: e.target.value });
  
  const handleForgotChange = (e) => {
    // Checkbox handle karne ke liye logic
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForgotData({ ...forgotData, [e.target.name]: value });
  };

  // Google Captcha Handler
  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (token) setErrors(prev => ({ ...prev, captcha: null }));
  };

  // --- SUBMIT LOGIC ---

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // 1. Check Captcha
    if (!captchaToken) newErrors.captcha = "Please verify you are not a robot";
    
    // 2. Check Fields
    if (!loginData.identifier.trim()) newErrors.identifier = "Required";
    if (!loginData.password) newErrors.password = "Required";
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successful!");
      console.log("Login Payload:", loginData);
      // Reset logic
      recaptchaRef.current.reset();
      setCaptchaToken(null);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // 1. Check Captcha
    if (!captchaToken) newErrors.captcha = "Please verify you are not a robot";

    // 2. Check Fields
    if (!signupData.firstName.trim()) newErrors.firstName = "Required";
    if (!signupData.lastName.trim()) newErrors.lastName = "Required";
    if (!signupData.phone.trim()) newErrors.phone = "Required";
    if (!signupData.email.trim()) newErrors.email = "Required";
    if (!signupData.password) newErrors.password = "Required";
    if (signupData.password !== signupData.verifyPassword) newErrors.verifyPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup Successful!");
      console.log("Signup Payload:", signupData);
      recaptchaRef.current.reset();
      setCaptchaToken(null);
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // 1. Check Captcha
    if (!captchaToken) newErrors.captcha = "Please verify you are not a robot";
    
    // 2. Check Fields
    if (!forgotData.email.trim()) newErrors.email = "Email Required";
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Reset Request Sent!");
      console.log("Forgot Payload:", forgotData); 
      recaptchaRef.current.reset();
      setCaptchaToken(null);
    }
  };

  // Switch between Login/Signup/Forgot
  const toggleMode = (mode) => {
    setAuthMode(mode);
    setErrors({});
    setShowPassword(false);
    setCaptchaToken(null);
    if(recaptchaRef.current) recaptchaRef.current.reset();
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center p-3">
      
      <div className="auth-card bg-white shadow-lg overflow-hidden">
        
        {/* HEADER */}
        <div className="p-4 pb-2">
            <h3 className="fw-bold mb-1" style={{ color: theme.primaryBlue }}>
            {authMode === 'login' && 'Sign In'}
            {authMode === 'signup' && 'Create Account'}
            {authMode === 'forgot' && 'Reset Password'}
            </h3>
            <p className="text-muted small">Please enter your details</p>
        </div>

        <div className="p-4 pt-2">
            
            {/* ================= 1. SIGN IN FORM ================= */}
            {authMode === 'login' && (
            <form onSubmit={handleLoginSubmit}>
                
                {/* Field: Email / Phone / Username */}
                <div className="mb-3">
                    <label className="form-label fw-bold small text-muted">Email / Phone / Username</label>
                    <input 
                        type="text" 
                        name="identifier"
                        className={`form-control ${errors.identifier ? 'is-invalid' : ''}`} 
                        placeholder="Enter email, phone or username"
                        value={loginData.identifier}
                        onChange={handleLoginChange}
                    />
                    {errors.identifier && <div className="text-danger small">{errors.identifier}</div>}
                </div>

                {/* Field: Password */}
                <div className="mb-3 position-relative">
                    <label className="form-label fw-bold small text-muted">Password</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                        placeholder="Enter password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                    />
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} password-icon`}
                        onClick={() => setShowPassword(!showPassword)} />
                    {errors.password && <div className="text-danger small">{errors.password}</div>}
                </div>

                {/* GOOGLE RECAPTCHA */}
                <div className="mb-3 d-flex justify-content-center">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Testing Key
                        onChange={onCaptchaChange}
                    />
                </div>
                {errors.captcha && <div className="text-danger small text-center mb-2">{errors.captcha}</div>}

                <div className="text-end mb-3">
                    <span onClick={() => toggleMode('forgot')} className="link-text">Forgot Password?</span>
                </div>

                <button type="submit" className="btn-auth w-100">Sign In</button>
            </form>
            )}

            {/* ================= 2. SIGNUP FORM ================= */}
            {authMode === 'signup' && (
            <form onSubmit={handleSignupSubmit}>
                
                {/* Fields: First Name, Last Name */}
                <div className="row g-2">
                    <div className="col-6 mb-2">
                        <label className="form-label fw-bold small text-muted">First Name</label>
                        <input type="text" name="firstName" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                        value={signupData.firstName} onChange={handleSignupChange} />
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label fw-bold small text-muted">Last Name</label>
                        <input type="text" name="lastName" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                        value={signupData.lastName} onChange={handleSignupChange} />
                    </div>
                </div>

                {/* Fields: Country Code, Phone Number */}
                <div className="row g-2 mb-2">
                    <div className="col-4">
                        <label className="form-label fw-bold small text-muted">Code</label>
                        <select className="form-select" name="countryCode" value={signupData.countryCode} onChange={handleSignupChange}>
                        <option>+1</option>
                        <option>+91</option>
                        <option>+44</option>
                        </select>
                    </div>
                    <div className="col-8">
                        <label className="form-label fw-bold small text-muted">Phone Number</label>
                        <input type="tel" name="phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
                        value={signupData.phone} onChange={handleSignupChange} placeholder="9876543210"/>
                    </div>
                </div>

                {/* Field: Email */}
                <div className="mb-2">
                    <label className="form-label fw-bold small text-muted">Email</label>
                    <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                    value={signupData.email} onChange={handleSignupChange} />
                </div>

                {/* Field: Password */}
                <div className="mb-2 position-relative">
                    <label className="form-label fw-bold small text-muted">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                    value={signupData.password} onChange={handleSignupChange} />
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} password-icon`} onClick={() => setShowPassword(!showPassword)} />
                </div>

                {/* Field: Verify Password */}
                <div className="mb-3 position-relative">
                    <label className="form-label fw-bold small text-muted">Verify New Password</label>
                    <input type={showConfirmPassword ? "text" : "password"} name="verifyPassword" className={`form-control ${errors.verifyPassword ? 'is-invalid' : ''}`} 
                    value={signupData.verifyPassword} onChange={handleSignupChange} />
                     <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'} password-icon`} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                </div>

                {/* GOOGLE RECAPTCHA */}
                <div className="mb-3 d-flex justify-content-center">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onCaptchaChange}
                    />
                </div>
                {errors.captcha && <div className="text-danger small text-center mb-2">{errors.captcha}</div>}

                <button type="submit" className="btn-auth w-100 mt-2">Sign Up</button>
            </form>
            )}

            {/* ================= 3. FORGOT PASSWORD FORM ================= */}
            {authMode === 'forgot' && (
            <form onSubmit={handleForgotSubmit}>
                
                {/* Field: Email Address */}
                <div className="mb-3">
                    <label className="form-label fw-bold small text-muted">Email Address</label>
                    <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                    value={forgotData.email} onChange={handleForgotChange} placeholder="Enter registered email" />
                    {errors.email && <div className="text-danger small">{errors.email}</div>}
                </div>

                {/* Field: Phone/WhatsApp Enabled (Checkbox) */}
                <div className="form-check mb-4 bg-light p-3 rounded border">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="whatsappEnabled"
                        id="whatsappCheck" 
                        checked={forgotData.whatsappEnabled}
                        onChange={handleForgotChange}
                    />
                    <label className="form-check-label small text-dark fw-bold" htmlFor="whatsappCheck">
                        Phone / WhatsApp Enabled
                    </label>
                    <div className="text-muted" style={{fontSize: '11px'}}>
                        Check this if you want to receive recovery code on WhatsApp.
                    </div>
                </div>

                {/* GOOGLE RECAPTCHA */}
                <div className="mb-3 d-flex justify-content-center">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onCaptchaChange}
                    />
                </div>
                {errors.captcha && <div className="text-danger small text-center mb-2">{errors.captcha}</div>}

                <button type="submit" className="btn-auth w-100">Reset Password</button>
            </form>
            )}

            {/* FOOTER SWITCHER */}
            <div className="text-center mt-3 pt-3 border-top">
                {authMode === 'login' ? (
                    <p className="small m-0">Don't have an account? <span onClick={() => toggleMode('signup')} className="link-text fw-bold">Sign Up</span></p>
                ) : (
                    <p className="small m-0">Back to <span onClick={() => toggleMode('login')} className="link-text fw-bold">Sign In</span></p>
                )}
            </div>

        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .auth-container {
          background-color: ${theme.primaryBlue};
          min-height: 100vh;
        }
        .auth-card {
          width: 100%;
          max-width: 420px;
          border-radius: 10px;
        }
        .form-control, .form-select {
          border: 1px solid #ced4da;
          padding: 10px;
          font-size: 14px;
        }
        .form-control:focus, .form-select:focus {
          border-color: ${theme.accentGold};
          box-shadow: 0 0 0 0.2rem rgba(222, 159, 87, 0.25);
        }
        .btn-auth {
          background-color: ${theme.accentGold};
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          transition: 0.3s;
        }
        .btn-auth:hover {
          background-color: #c58a47;
        }
        .password-icon {
          position: absolute;
          top: 32px;
          right: 12px;
          cursor: pointer;
          color: #6c757d;
        }
        .link-text {
          color: ${theme.accentGold};
          cursor: pointer;
          text-decoration: none;
        }
        .link-text:hover {
          text-decoration: underline;
        }
        .is-invalid {
            border-color: ${theme.errorRed} !important;
        }
      `}</style>
    </div>
  );
}

export default LoginSignup;

// import React, { useState } from 'react';
// import Link from 'next/link';

// function LoginSignup() {
  
//   // --- UI STATE ---
//   const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'forgot'
//   const [activeRole, setActiveRole] = useState('User'); // 'User', 'Attorney', 'Admin'
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // --- FORM DATA STATE ---
//   const [loginData, setLoginData] = useState({ identifier: '', password: '' });
//   const [signupData, setSignupData] = useState({ 
//     firstName: '', lastName: '', code: '+1', phone: '', email: '', password: '', confirmPassword: '' 
//   });
//   const [forgotData, setForgotData] = useState({ email: '' });

//   // --- ERROR STATE ---
//   const [errors, setErrors] = useState({});

//   // --- THEME COLORS ---
//   const theme = {
//     primaryBlue: '#002855',
//     accentGold: '#de9f57', 
//     white: '#ffffff',
//     errorRed: '#dc3545'
//   };

//   // --- HELPERS ---
//   const validateEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   // --- HANDLERS: INPUT CHANGE ---
//   const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   const handleSignupChange = (e) => setSignupData({ ...signupData, [e.target.name]: e.target.value });
//   const handleForgotChange = (e) => setForgotData({ ...forgotData, [e.target.name]: e.target.value });

//   // --- HANDLERS: SUBMIT & VALIDATION ---

//   // 1. LOGIN VALIDATION
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     let newErrors = {};

//     if (!loginData.identifier.trim()) newErrors.identifier = "Email or Username is required";
//     if (!loginData.password) newErrors.password = "Password is required";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log("Login Success:", loginData, "Role:", activeRole);
//       alert("Login Validated! (Check Console)");
//       // API Call here...
//     }
//   };

//   // 2. SIGNUP VALIDATION
//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     let newErrors = {};

//     if (!signupData.firstName.trim()) newErrors.firstName = "First Name is required";
//     if (!signupData.lastName.trim()) newErrors.lastName = "Last Name is required";
    
//     if (!signupData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d+$/.test(signupData.phone)) {
//       newErrors.phone = "Phone must contain numbers only";
//     }

//     if (!signupData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(signupData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!signupData.password) {
//       newErrors.password = "Password is required";
//     } else if (signupData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 chars";
//     }

//     if (!signupData.confirmPassword) {
//       newErrors.confirmPassword = "Confirm your password";
//     } else if (signupData.password !== signupData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log("Signup Success:", signupData, "Role:", activeRole);
//       alert("Signup Validated! (Check Console)");
//       // API Call here...
//     }
//   };

//   // 3. FORGOT PASSWORD VALIDATION
//   const handleForgotSubmit = (e) => {
//     e.preventDefault();
//     let newErrors = {};

//     if (!forgotData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(forgotData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log("Forgot Password Request:", forgotData);
//       alert("Reset Link Sent!");
//     }
//   };

//   // --- TOGGLE HANDLERS ---
//   const toggleMode = (mode) => {
//     setAuthMode(mode);
//     setErrors({}); // Clear errors when switching
//     setShowPassword(false);
//     setShowConfirmPassword(false);
//   };
//   const toggleRole = (role) => setActiveRole(role);

//   return (
//     <div className="auth-container d-flex align-items-center justify-content-center">
      
//       {/* --- MAIN CARD --- */}
//       <div className="auth-card bg-white position-relative shadow-lg">
        
//         {/* TOP NAVIGATION */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <Link href="/">
//             <a className="text-dark fs-5" title="Back to Home"><i className="bi bi-arrow-left"></i></a>
//           </Link>
//           <Link href="/">
//             <a className="text-muted fs-5" title="Close"><i className="bi bi-x-circle"></i></a>
//           </Link>
//         </div>

//         {/* --- HEADING --- */}
//         <h3 className="fw-bold mb-3" style={{ color: theme.primaryBlue }}>
//           {authMode === 'login' && 'Sign In'}
//           {authMode === 'signup' && 'Create Account'}
//           {authMode === 'forgot' && 'Reset Password'}
//         </h3>

//         {/* --- ROLE TABS --- */}
//         {authMode !== 'forgot' && (
//           <div className="d-flex justify-content-center gap-4 mb-3 border-bottom pb-2">
//             {['User', 'Attorney', 'Admin'].map((role) => (
//               <div 
//                 key={role}
//                 onClick={() => toggleRole(role)}
//                 className="role-tab"
//                 style={{ 
//                   cursor: 'pointer', 
//                   paddingBottom: '5px',
//                   fontSize: '15px',
//                   color: activeRole === role ? theme.accentGold : '#6c757d',
//                   fontWeight: activeRole === role ? 'bold' : 'normal',
//                   borderBottom: activeRole === role ? `3px solid ${theme.accentGold}` : '3px solid transparent',
//                   transition: 'all 0.3s'
//                 }}
//               >
//                 {role}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ================= LOGIN FORM ================= */}
//         {authMode === 'login' && (
//           <form onSubmit={handleLoginSubmit}>
//             <div className="mb-2">
//               <label className="form-label fw-bold small text-muted mb-1">Email, Phone or Username</label>
//               <input 
//                 type="text" 
//                 name="identifier"
//                 className={`form-control p-2 ${errors.identifier ? 'is-invalid' : ''}`} 
//                 placeholder={`Enter ${activeRole} credentials`} 
//                 value={loginData.identifier}
//                 onChange={handleLoginChange}
//               />
//               {errors.identifier && <div className="text-danger small mt-1">{errors.identifier}</div>}
//             </div>

//             <div className="mb-2 position-relative">
//               <label className="form-label fw-bold small text-muted mb-1">Password</label>
//               <input 
//                 type={showPassword ? "text" : "password"} 
//                 name="password"
//                 className={`form-control p-2 ${errors.password ? 'is-invalid' : ''}`} 
//                 placeholder="Enter password" 
//                 value={loginData.password}
//                 onChange={handleLoginChange}
//               />
//               <i 
//                 className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} password-icon`}
//                 onClick={() => setShowPassword(!showPassword)}
//               />
//               {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
//             </div>

//             <div className="d-flex justify-content-end mb-3">
//               <span 
//                 onClick={() => toggleMode('forgot')} 
//                 style={{ color: theme.accentGold, cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
//                 Forgot Password?
//               </span>
//             </div>

//             <button type="submit" className="btn-auth w-100 py-2 fw-bold mb-3">
//               Log In as {activeRole}
//             </button>

//             <div className="text-center small">
//               <span className="text-muted">Do Not Have An Account? </span>
//               <span 
//                 onClick={() => toggleMode('signup')} 
//                 style={{ color: theme.accentGold, cursor: 'pointer', fontWeight: 'bold' }}>
//                 Sign Up
//               </span>
//             </div>
//           </form>
//         )}

//         {/* ================= SIGNUP FORM ================= */}
//         {authMode === 'signup' && (
//           <form onSubmit={handleSignupSubmit}>
//             <div className="row">
//               <div className="col-md-6 mb-2">
//                 <label className="form-label fw-bold small text-muted mb-1">First Name</label>
//                 <input 
//                   type="text" 
//                   name="firstName"
//                   className={`form-control p-2 ${errors.firstName ? 'is-invalid' : ''}`} 
//                   placeholder="John" 
//                   value={signupData.firstName}
//                   onChange={handleSignupChange}
//                 />
//                 {errors.firstName && <div className="text-danger small mt-1" style={{fontSize: '11px'}}>{errors.firstName}</div>}
//               </div>
//               <div className="col-md-6 mb-2">
//                 <label className="form-label fw-bold small text-muted mb-1">Last Name</label>
//                 <input 
//                   type="text" 
//                   name="lastName"
//                   className={`form-control p-2 ${errors.lastName ? 'is-invalid' : ''}`} 
//                   placeholder="Doe" 
//                   value={signupData.lastName}
//                   onChange={handleSignupChange}
//                 />
//                 {errors.lastName && <div className="text-danger small mt-1" style={{fontSize: '11px'}}>{errors.lastName}</div>}
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-4 mb-2">
//                 <label className="form-label fw-bold small text-muted mb-1">Code</label>
//                 <select 
//                   className="form-select p-2" 
//                   name="code"
//                   value={signupData.code}
//                   onChange={handleSignupChange}
//                 >
//                   <option>+1</option>
//                   <option>+91</option>
//                   <option>+44</option>
//                   <option>+880</option>
//                 </select>
//               </div>
//               <div className="col-8 mb-2">
//                 <label className="form-label fw-bold small text-muted mb-1">Phone</label>
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   className={`form-control p-2 ${errors.phone ? 'is-invalid' : ''}`} 
//                   placeholder="000 000 0000" 
//                   value={signupData.phone}
//                   onChange={handleSignupChange}
//                 />
//                 {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
//               </div>
//             </div>

//             <div className="mb-2">
//               <label className="form-label fw-bold small text-muted mb-1">Email</label>
//               <input 
//                 type="email" 
//                 name="email"
//                 className={`form-control p-2 ${errors.email ? 'is-invalid' : ''}`} 
//                 placeholder="user@example.com" 
//                 value={signupData.email}
//                 onChange={handleSignupChange}
//               />
//               {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
//             </div>

//             <div className="mb-2 position-relative">
//               <label className="form-label fw-bold small text-muted mb-1">Password</label>
//               <input 
//                 type={showPassword ? "text" : "password"} 
//                 name="password"
//                 className={`form-control p-2 ${errors.password ? 'is-invalid' : ''}`} 
//                 placeholder="Create password" 
//                 value={signupData.password}
//                 onChange={handleSignupChange}
//               />
//               <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} password-icon`}
//                  onClick={() => setShowPassword(!showPassword)} />
//               {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
//             </div>

//             <div className="mb-3 position-relative">
//               <label className="form-label fw-bold small text-muted mb-1">Verify Password</label>
//               <input 
//                 type={showConfirmPassword ? "text" : "password"} 
//                 name="confirmPassword"
//                 className={`form-control p-2 ${errors.confirmPassword ? 'is-invalid' : ''}`} 
//                 placeholder="Confirm password" 
//                 value={signupData.confirmPassword}
//                 onChange={handleSignupChange}
//               />
//               <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'} password-icon`}
//                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
//               {errors.confirmPassword && <div className="text-danger small mt-1">{errors.confirmPassword}</div>}
//             </div>

//             <button type="submit" className="btn-auth w-100 py-2 fw-bold mb-3">
//               Sign Up as {activeRole}
//             </button>

//             <div className="text-center small">
//               <span className="text-muted">Already have an account? </span>
//               <span 
//                 onClick={() => toggleMode('login')} 
//                 style={{ color: theme.accentGold, cursor: 'pointer', fontWeight: 'bold' }}>
//                 Sign In
//               </span>
//             </div>
//           </form>
//         )}

//         {/* ================= FORGOT FORM ================= */}
//         {authMode === 'forgot' && (
//           <form onSubmit={handleForgotSubmit}>
//             <p className="text-muted mb-3 small">
//               Enter your registered email address to reset password.
//             </p>

//             <div className="mb-3">
//               <label className="form-label fw-bold small text-muted mb-1">Email Address</label>
//               <input 
//                 type="email" 
//                 name="email"
//                 className={`form-control p-2 ${errors.email ? 'is-invalid' : ''}`} 
//                 placeholder="user@example.com" 
//                 value={forgotData.email}
//                 onChange={handleForgotChange}
//               />
//               {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
//             </div>

//             <div className="form-check mb-3">
//               <input className="form-check-input" type="checkbox" id="whatsappCheck" />
//               <label className="form-check-label text-muted small" htmlFor="whatsappCheck">
//                 Send recovery code via WhatsApp / Phone
//               </label>
//             </div>

//             <button type="submit" className="btn-auth w-100 py-2 fw-bold mb-3">
//               Reset Password
//             </button>

//             <div className="text-center small">
//               <span 
//                 onClick={() => toggleMode('login')} 
//                 style={{ color: theme.accentGold, cursor: 'pointer', fontWeight: 'bold' }}>
//                 <i className="bi bi-arrow-left me-1"></i> Back to Login
//               </span>
//             </div>
//           </form>
//         )}

//       </div>

//       {/* --- STYLES --- */}
//       <style jsx>{`
//         .auth-container {
//           background-color: ${theme.primaryBlue};
//           min-height: 100vh;
//           padding: 20px 15px; 
//         }

//         .auth-card {
//           max-width: 450px; 
//           width: 100%;
//           border-radius: 12px;
//           padding: 30px; 
//         }

//         .form-control, .form-select {
//           font-size: 14px; 
//         }

//         /* Error Border */
//         .is-invalid {
//           border-color: ${theme.errorRed} !important;
//         }

//         /* Focus State */
//         .form-control:focus, .form-select:focus {
//           border-color: ${theme.accentGold};
//           box-shadow: 0 0 0 0.2rem rgba(222, 159, 87, 0.25);
//         }

//         .password-icon {
//           position: absolute;
//           top: 38px; /* Adjusted based on label height */
//           right: 10px;
//           cursor: pointer;
//           color: #999;
//           font-size: 1.1rem;
//         }

//         .btn-auth {
//           background-color: ${theme.accentGold};
//           color: ${theme.white};
//           border: 2px solid ${theme.accentGold};
//           border-radius: 6px;
//           transition: all 0.3s ease-in-out;
//         }

//         .btn-auth:hover {
//           background-color: ${theme.white} !important;
//           color: ${theme.primaryBlue} !important;
//           border-color: ${theme.white};
//         }
//       `}</style>
//     </div>
//   );
// }

// export default LoginSignup;