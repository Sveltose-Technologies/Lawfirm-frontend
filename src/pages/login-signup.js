// 'use client';

// import { useState, useEffect } from 'react';
// import { signupUser, loginUser } from '../services/authService';

// // --- PLACEHOLDER DASHBOARDS ---
// const ClientDashboard = () => (
//   <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
//     <div className="p-5 shadow bg-white rounded">
//       <h1 className="text-primary">🏛️ Client Dashboard</h1>
//       <p className="lead">Welcome! You are logged in as a Client.</p>
//       <button className="btn btn-outline-primary mt-3" onClick={() => window.location.reload()}>Logout</button>
//     </div>
//   </div>
// );

// const AttorneyDashboard = () => (
//   <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
//     <div className="p-5 shadow bg-white rounded">
//       <h1 className="text-warning text-dark">⚖️ Attorney Dashboard</h1>
//       <p className="lead">Welcome! You are logged in as an Attorney.</p>
//       <button className="btn btn-outline-dark mt-3" onClick={() => window.location.reload()}>Logout</button>
//     </div>
//   </div>
// );

// export default function UnifiedAuthPage() {
//   const [userRole, setUserRole] = useState('Client'); 
//   const [view, setView] = useState('login'); 
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // Captcha Logic States
//   const [generatedCaptcha, setGeneratedCaptcha] = useState('');
//   const [captchaInput, setCaptchaInput] = useState('');

//   const [error, setError] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');

//   const [formData, setFormData] = useState({
//     firstName: '', 
//     lastName: '', 
//     email: '', 
//     password: '', 
//     repeatPassword: '', 
//     terms: false
//   });

//   // --- CAPTCHA GENERATOR ---
//   const generateCaptcha = () => {
//     const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result = '';
//     for (let i = 0; i < 6; i++) {
//       result += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     setGeneratedCaptcha(result);
//     setCaptchaInput(''); // Reset input when new captcha is generated
//   };

//   useEffect(() => {
//     if (view === 'signup') {
//       generateCaptcha();
//     }
//   }, [view]);

//   const handleInput = (e) => {
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setFormData({ ...formData, [e.target.name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);
//     try {
//         if(formData.email.includes('attorney')) {
//             setUserRole('Attorney');
//         } else {
//             setUserRole('Client');
//         }
//         setIsAuthenticated(true);
//     } catch (err) {
//         setError('Login failed. Please check your credentials.');
//     } finally {
//         setIsLoading(false);
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMsg('');

//     if(!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
//         setError("Basic details are mandatory.");
//         return;
//     }

//     if (formData.password !== formData.repeatPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     // --- CAPTCHA VALIDATION ---
//     if (captchaInput.toUpperCase() !== generatedCaptcha) {
//         setError('Invalid Captcha Code! Please try again.');
//         generateCaptcha();
//         return;
//     }
    
//     if (!formData.terms) {
//         setError('You must accept the Terms and Conditions.');
//         return;
//     }

//     setIsLoading(true);
//     try {
//         const payload = {
//             ...formData,
//             role: userRole.toLowerCase()
//         };
//         await signupUser(payload);
//         setSuccessMsg(`Account created successfully! Redirecting...`);
//         setTimeout(() => {
//             setView('login');
//             setSuccessMsg('');
//             setFormData({ firstName: '', lastName: '', email: '', password: '', repeatPassword: '', terms: false });
//         }, 2000);
//     } catch (err) {
//         setError(err.message || 'Registration failed.');
//         generateCaptcha();
//     } finally {
//         setIsLoading(false);
//     }
//   };

//   if (isAuthenticated) {
//     return userRole === 'Client' ? <ClientDashboard /> : <AttorneyDashboard />;
//   }

//   return (
//     <>
//       <div className="main-wrapper">
//         <div className={`auth-card ${view === 'signup' ? 'wide-mobile' : ''}`}>
//           <div className="form-body">

//             {view === 'login' && (
//               <div className="fade-in">
//                 <h4 className="portal-title">Welcome Back</h4>
//                 <p className="portal-subtitle">Please Sign In to continue</p>
//                 {error && <div className="alert-msg error">{error}</div>}
//                 <form onSubmit={handleLogin}>
//                   <div className="form-group">
//                     <label className="lbl">Email ID <span className="req">*</span></label>
//                     <input type="email" name="email" className="inp" placeholder="email@lawfirm.com" onChange={handleInput} required />
//                   </div>
//                   <div className="form-group">
//                     <label className="lbl">Password <span className="req">*</span></label>
//                     <input type="password" name="password" className="inp" onChange={handleInput} required />
//                   </div>
//                   <button type="submit" className="action-btn" disabled={isLoading}>
//                     {isLoading ? 'Logging in...' : 'Log In'}
//                   </button>
//                   <div className="toggle-text">
//                     New User? <span onClick={() => { setView('signup'); setError(''); }}>Create Account</span>
//                   </div>
//                 </form>
//               </div>
//             )}

//             {view === 'signup' && (
//               <div className="fade-in">
//                 <h5 className="portal-title">Create Account</h5>
//                 <div className="role-selector">
//                     <div className="role-btns">
//                         <button type="button" className={`role-btn ${userRole === 'Client' ? 'active' : ''}`} onClick={() => setUserRole('Client')}>Client</button>
//                         <button type="button" className={`role-btn ${userRole === 'Attorney' ? 'active' : ''}`} onClick={() => setUserRole('Attorney')}>Attorney</button>
//                     </div>
//                 </div>
//                 {error && <div className="alert-msg error">{error}</div>}
//                 {successMsg && <div className="alert-msg success">{successMsg}</div>}
//                 <form onSubmit={handleSignup}>
//                   <h5 className="section-head">Account Details</h5>
//                   <div className="row-split">
//                     <div className="col">
//                       <label className="lbl">First Name <span className="req">*</span></label>
//                       <input type="text" name="firstName" value={formData.firstName} className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                       <label className="lbl">Last Name <span className="req">*</span></label>
//                       <input type="text" name="lastName" value={formData.lastName} className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label className="lbl">Email ID <span className="req">*</span></label>
//                     <input type="email" name="email" value={formData.email} className="inp" onChange={handleInput} required />
//                   </div>
//                   <div className="row-split">
//                     <div className="col">
//                         <label className="lbl">Password <span className="req">*</span></label>
//                         <input type="password" name="password" value={formData.password} className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                         <label className="lbl">Confirm <span className="req">*</span></label>
//                         <input type="password" name="repeatPassword" value={formData.repeatPassword} className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   {/* CAPTCHA SECTION */}
//                   <div className="mb-4 mt-2">
//                     <label className="lbl">Security Verification <span className="req">*</span></label>
//                     <div className="input-group d-flex align-items-center gap-1">
//                       <span className="captcha-display" onClick={generateCaptcha} title="Click to refresh">
//                         {generatedCaptcha}
//                       </span>
//                       <input 
//                           type="text" 
//                           className="inp" 
//                           placeholder="Code" 
//                           style={{flex: '1'}}
//                           value={captchaInput} 
//                           onChange={(e) => setCaptchaInput(e.target.value)} 
//                           required 
//                       />
//                       <button className="refresh-btn" type="button" onClick={generateCaptcha}>&#x21bb;</button>
//                     </div>
//                   </div>

//                   <div className="terms-box">
//                     <input type="checkbox" name="terms" id="terms" checked={formData.terms} required onChange={handleInput} />
//                     <label htmlFor="terms">I accept the Terms and Conditions.</label>
//                   </div>
//                   <button type="submit" className="action-btn" disabled={isLoading}>
//                     {isLoading ? 'Processing...' : 'Register'}
//                   </button>
//                   <div className="toggle-text">
//                     Has Account? <span onClick={() => setView('login')}>Sign In</span>
//                   </div>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;600&display=swap');
//         * { box-sizing: border-box; }
//         body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background-color: #f4f7f6; }
//         .main-wrapper { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding-top: 80px; padding-bottom: 40px; }
//         .auth-card { background: white; width: 100%; max-width: 380px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden; border-top: 4px solid #002b5c; }
//         .form-body { padding: 20px 25px; }
//         .portal-title { text-align: center; color: #002b5c; margin: 0 0 5px 0; font-size: 20px; font-family: 'Merriweather', serif; }
//         .portal-subtitle { text-align: center; color: #888; margin: 0 0 15px 0; font-size: 12px; }
//         .section-head { font-size: 11px; font-weight: bold; color: #002b5c; border-bottom: 1px solid #eee; padding-bottom: 5px; margin: 10px 0; text-transform: uppercase; letter-spacing: 0.5px; }
//         .role-btns { display: flex; justify-content: center; gap: 10px; margin-bottom: 15px; }
//         .role-btn { padding: 5px 15px; border: 1px solid #ddd; background: #fff; border-radius: 20px; cursor: pointer; font-size: 11px; font-weight: 600; color: #555; transition: all 0.2s; }
//         .role-btn.active { background: #002b5c; color: #fff; border-color: #002b5c; }
//         .form-group { margin-bottom: 10px; }
//         .row-split { display: flex; gap: 10px; margin-bottom: 10px; }
//         .col { flex: 1; }
//         .lbl { display: block; font-size: 11px; font-weight: 700; color: #444; margin-bottom: 3px; }
//         .req { color: #d63031; }
//         .inp { width: 100%; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; color: #333; outline: none; height: 34px; }
//         .inp:focus { border-color: #002b5c; box-shadow: 0 0 3px rgba(0, 43, 92, 0.2); }

//         /* Captcha Styling */
//         .captcha-display {
//           background-color: #002b5c;
//           color: #fff;
//           font-family: 'Courier New', monospace;
//           font-weight: bold;
//           font-size: 16px;
//           letter-spacing: 2px;
//           padding: 6px 10px;
//           border-radius: 4px;
//           user-select: none;
//           cursor: pointer;
//           min-width: 80px;
//           text-align: center;
//         }
//         .refresh-btn { width: 34px; height: 34px; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer; font-size: 16px; color: #555; }

//         .terms-box { display: flex; align-items: center; gap: 6px; font-size: 11px; margin: 10px 0; }
//         .action-btn { width: 100%; padding: 10px; background: #002b5c; color: white; border: none; border-radius: 4px; font-size: 14px; font-weight: bold; cursor: pointer; margin-top: 5px; }
//         .toggle-text { text-align: center; margin-top: 15px; font-size: 12px; color: #666; }
//         .toggle-text span { color: #cfa144; font-weight: bold; cursor: pointer; }
//         .alert-msg { padding: 8px; font-size: 11px; margin-bottom: 10px; text-align: center; border-radius: 4px; }
//         .alert-msg.error { background: #ffe6e6; color: #d63031; border: 1px solid #ff7675; }
//         .alert-msg.success { background: #e6fffa; color: #00b894; border: 1px solid #55efc4; }
//         .fade-in { animation: slideUp 0.3s ease-out; }
//         @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//       `}</style>
//     </>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import { signupUser } from '../services/authService';

// export default function UnifiedAuthPage() {
//   const [userRole, setUserRole] = useState('Client'); // Frontend Role Management
//   const [view, setView] = useState('login');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // --- CAPTCHA STATES ---
//   const [generatedCaptcha, setGeneratedCaptcha] = useState('');
//   const [captchaInput, setCaptchaInput] = useState('');

//   const [error, setError] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     repeatPassword: '',
//     terms: false
//   });

//   // --- CAPTCHA GENERATOR (Frontend Only) ---
//   const generateCaptcha = () => {
//     const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result = '';
//     for (let i = 0; i < 6; i++) {
//       result += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     setGeneratedCaptcha(result);
//     setCaptchaInput(''); 
//   };

//   useEffect(() => {
//     if (view === 'signup') generateCaptcha();
//   }, [view]);

//   const handleInput = (e) => {
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setFormData({ ...formData, [e.target.name]: value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);
//     setTimeout(() => {
//       // Mock Login Logic
//       if (formData.email.includes('attorney')) setUserRole('Attorney');
//       setIsAuthenticated(true);
//       setIsLoading(false);
//     }, 1000);
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMsg('');

//     // --- FRONTEND VALIDATIONS ---
//     if (formData.password !== formData.repeatPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     // Captcha Matching (Frontend logic)
//     if (captchaInput.toUpperCase() !== generatedCaptcha) {
//       setError("Invalid Captcha Code! Please try again.");
//       generateCaptcha();
//       return;
//     }

//     if (!formData.terms) {
//       setError('You must accept the Terms and Conditions.');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // --- BACKEND PAYLOAD (Exact keys for your server) ---
//       const payload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//         repeatPassword: formData.repeatPassword,
//         captcha: captchaInput.toUpperCase(), // Frontend generated captcha value
//         role: userRole.toLowerCase()         // client or attorney
//       };

//       // API Call
//       await signupUser(payload);

//       setSuccessMsg(`Account created for ${userRole} successfully!`);
      
//       setTimeout(() => {
//         setView('login');
//         setSuccessMsg('');
//         setFormData({ firstName: '', lastName: '', email: '', password: '', repeatPassword: '', terms: false });
//       }, 2000);

//     } catch (err) {
//       // Server error "All fields are mandatory" handle karega
//       setError(err.message || 'Registration failed. Check all fields.');
//       generateCaptcha();
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isAuthenticated) {
//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
//             <div className="p-5 shadow bg-white rounded">
//                 <h1 className={userRole === 'Client' ? 'text-primary' : 'text-dark'}>
//                     {userRole === 'Client' ? '🏛️ Client Dashboard' : '⚖️ Attorney Dashboard'}
//                 </h1>
//                 <p className="lead">Welcome! You are logged in.</p>
//                 <button className="btn btn-outline-dark mt-3" onClick={() => window.location.reload()}>Logout</button>
//             </div>
//         </div>
//     );
//   }

//   return (
//     <>
//       <div className="main-wrapper">
//         <div className={`auth-card ${view === 'signup' ? 'wide-mobile' : ''}`}>
//           <div className="form-body">

//             {/* LOGIN FORM */}
//             {view === 'login' && (
//               <div className="fade-in">
//                 <h4 className="portal-title">Welcome Back</h4>
//                 <p className="portal-subtitle">Please Sign In to continue</p>
//                 {error && <div className="alert-msg error">{error}</div>}
//                 <form onSubmit={handleLogin}>
//                   <div className="form-group">
//                     <label className="lbl">Email ID <span className="req">*</span></label>
//                     <input type="email" name="email" className="inp" placeholder="email@lawfirm.com" onChange={handleInput} required />
//                   </div>
//                   <div className="form-group">
//                     <label className="lbl">Password <span className="req">*</span></label>
//                     <input type="password" name="password" className="inp" onChange={handleInput} required />
//                   </div>
//                   <button type="submit" className="action-btn" disabled={isLoading}>
//                     {isLoading ? 'Logging in...' : 'Log In'}
//                   </button>
//                   <div className="toggle-text">
//                     New User? <span onClick={() => { setView('signup'); setError(''); }}>Create Account</span>
//                   </div>
//                 </form>
//               </div>
//             )}

//             {/* SIGN UP FORM */}
//             {view === 'signup' && (
//               <div className="fade-in">
//                 <h5 className="portal-title">Create Account</h5>
//                 <div className="role-selector">
//                     <div className="role-btns">
//                         <button type="button" className={`role-btn ${userRole === 'Client' ? 'active' : ''}`} onClick={() => setUserRole('Client')}>Client</button>
//                         <button type="button" className={`role-btn ${userRole === 'Attorney' ? 'active' : ''}`} onClick={() => setUserRole('Attorney')}>Attorney</button>
//                     </div>
//                 </div>

//                 {error && <div className="alert-msg error">{error}</div>}
//                 {successMsg && <div className="alert-msg success">{successMsg}</div>}

//                 <form onSubmit={handleSignup}>
//                   <h5 className="section-head">Account Details ({userRole})</h5>
//                   <div className="row-split">
//                     <div className="col">
//                       <label className="lbl">First Name <span className="req">*</span></label>
//                       <input type="text" name="firstName" value={formData.firstName} className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                       <label className="lbl">Last Name <span className="req">*</span></label>
//                       <input type="text" name="lastName" value={formData.lastName} className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label className="lbl">Email ID <span className="req">*</span></label>
//                     <input type="email" name="email" value={formData.email} className="inp" onChange={handleInput} required />
//                   </div>

//                   <div className="row-split">
//                     <div className="col">
//                         <label className="lbl">Password <span className="req">*</span></label>
//                         <input type="password" name="password" value={formData.password} className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                         <label className="lbl">Confirm <span className="req">*</span></label>
//                         <input type="password" name="repeatPassword" value={formData.repeatPassword} className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   {/* CAPTCHA SECTION - Frontend Generated */}
//                   <div className="form-group">
//                     <label className="lbl">Security Verification <span className="req">*</span></label>
//                     <div className="d-flex gap-2">
//                         <div className="captcha-code-box" onClick={generateCaptcha} title="Click to refresh">
//                             {generatedCaptcha}
//                         </div>
//                         <button type="button" className="refresh-btn" onClick={generateCaptcha}>&#x21bb;</button>
//                         <input 
//                             type="text" 
//                             className="inp flex-grow-1" 
//                             placeholder="Enter Code" 
//                             value={captchaInput} 
//                             onChange={(e) => setCaptchaInput(e.target.value)} 
//                             required 
//                         />
//                     </div>
//                   </div>

//                   <div className="terms-box">
//                     <input type="checkbox" name="terms" id="terms" checked={formData.terms} required onChange={handleInput} />
//                     <label htmlFor="terms">I accept the Terms and Conditions.</label>
//                   </div>

//                   <button type="submit" className="action-btn" disabled={isLoading}>
//                     {isLoading ? 'Processing...' : 'Register'}
//                   </button>
//                   <div className="toggle-text">
//                     Has Account? <span onClick={() => setView('login')}>Sign In</span>
//                   </div>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

      // <style jsx global>{`
      //   @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;600&display=swap');
      //   * { box-sizing: border-box; }
      //   body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background-color: #f4f7f6; }
      //   .main-wrapper { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 80px 15px 40px; }
      //   .auth-card { background: white; width: 100%; max-width: 380px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden; border-top: 4px solid #002b5c; }
      //   .form-body { padding: 20px 25px; }
      //   .portal-title { text-align: center; color: #002b5c; margin: 0 0 5px; font-size: 20px; font-family: 'Merriweather', serif; }
      //   .portal-subtitle { text-align: center; color: #888; margin: 0 0 15px; font-size: 12px; }
      //   .section-head { font-size: 11px; font-weight: bold; color: #002b5c; border-bottom: 1px solid #eee; padding-bottom: 5px; margin: 10px 0; text-transform: uppercase; }
      //   .role-btns { display: flex; justify-content: center; gap: 10px; margin-bottom: 10px; }
      //   .role-btn { padding: 5px 15px; border: 1px solid #ddd; background: #fff; border-radius: 20px; cursor: pointer; font-size: 11px; font-weight: 600; color: #555; }
      //   .role-btn.active { background: #002b5c; color: #fff; border-color: #002b5c; }
      //   .form-group { margin-bottom: 10px; }
      //   .row-split { display: flex; gap: 10px; margin-bottom: 10px; }
      //   .col { flex: 1; }
      //   .lbl { display: block; font-size: 11px; font-weight: 700; color: #444; margin-bottom: 3px; }
      //   .req { color: #d63031; }
      //   .inp { width: 100%; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; color: #333; outline: none; height: 34px; }
      //   .inp:focus { border-color: #002b5c; }

      //   /* Captcha Styles */
      //   .terms-box label {
      //     font-size:13px;
      //     padding-left:5px
      //   }
      //   .captcha-code-box { 
      //       background: #002b5c; color: #fff; font-family: monospace; 
      //       font-weight: bold; font-size: 16px; padding: 0 10px; 
      //       border-radius: 4px; display: flex; align-items: center; 
      //       letter-spacing: 2px; cursor: pointer; user-select: none;
      //   }
      //   .refresh-btn { border: 1px solid #ccc; background: #fff; border-radius: 4px; cursor: pointer; padding: 0 8px; }

      //   .action-btn { width: 100%; padding: 10px; background: #002b5c; color: white; border: none; border-radius: 4px; font-size: 14px; font-weight: bold; cursor: pointer; margin-top: 5px; }
      //   .toggle-text { text-align: center; margin-top: 15px; font-size: 12px; color: #666; }
      //   .toggle-text span { color: #cfa144; font-weight: bold; cursor: pointer; }
      //   .alert-msg { padding: 8px; font-size: 11px; margin-bottom: 10px; text-align: center; border-radius: 4px; }
      //   .alert-msg.error { background: #ffe6e6; color: #d63031; border: 1px solid #ff7675; }
      //   .alert-msg.success { background: #e6fffa; color: #00b894; border: 1px solid #55efc4; }
      //   .fade-in { animation: slideUp 0.3s ease-out; }
      //   @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      // `}</style>
//     </>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { signupUser, loginUser } from '../services/authService'; // loginUser ko import kiya

export default function UnifiedAuthPage() {
  const [userRole, setUserRole] = useState('Client'); // UI State
  const [view, setView] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    terms: false
  });

  // Captcha Generator
  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(result);
    setCaptchaInput(''); 
  };

  useEffect(() => {
    if (view === 'signup') generateCaptcha();
  }, [view]);

  const handleInput = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  // --- LOGIN LOGIC ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const loginPayload = {
        email: formData.email,
        password: formData.password
      };

      const response = await loginUser(loginPayload);
      console.log("Login Success:", response);
      
      // Agar backend se role milta hai toh dashboard change hoga
      if(response.role) setUserRole(response.role); 
      
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  // --- SIGNUP LOGIC (Role-based) ---
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    // Validations
    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (captchaInput.toUpperCase() !== generatedCaptcha) {
      setError("Invalid Captcha Code!");
      generateCaptcha();
      return;
    }

    if (!formData.terms) {
      setError('Please accept terms.');
      return;
    }

    setIsLoading(true);

    try {
      // Backend Payload Tyari
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        repeatPassword: formData.repeatPassword,
        captcha: captchaInput.toUpperCase(),
        // Yahan role decide ho raha hai
        role: userRole.toLowerCase() // 'client' ya 'attorney' backend par jayega
      };

      const response = await signupUser(payload);
      setSuccessMsg(`Account created for ${userRole} successfully!`);
      
      // Form reset and switch to login
      setTimeout(() => {
        setView('login');
        setSuccessMsg('');
        setFormData({ firstName: '', lastName: '', email: '', password: '', repeatPassword: '', terms: false });
      }, 2000);

    } catch (err) {
      setError(err.message || 'Registration failed.');
      generateCaptcha();
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
            <div className="p-5 shadow bg-white rounded">
                <h1 className={userRole.toLowerCase() === 'client' ? 'text-primary' : 'text-dark'}>
                    {userRole.toLowerCase() === 'client' ? '🏛️ Client Dashboard' : '⚖️ Attorney Dashboard'}
                </h1>
                <p className="lead">Welcome! You are logged in.</p>
                <button className="btn btn-outline-dark mt-3" onClick={() => window.location.reload()}>Logout</button>
            </div>
        </div>
    );
  }

  return (
    <>
      <div className="main-wrapper">
        <div className={`auth-card ${view === 'signup' ? 'wide-mobile' : ''}`}>
          <div className="form-body">

            {/* LOGIN FORM */}
            {view === 'login' && (
              <div className="fade-in">
                <h4 className="portal-title">Welcome Back</h4>
                <p className="portal-subtitle">Please Sign In to continue</p>
                {error && <div className="alert-msg error">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label className="lbl">Email ID <span className="req">*</span></label>
                    <input type="email" name="email" value={formData.email} className="inp" placeholder="email@lawfirm.com" onChange={handleInput} required />
                  </div>
                  <div className="form-group">
                    <label className="lbl">Password <span className="req">*</span></label>
                    <input type="password" name="password" value={formData.password} className="inp" onChange={handleInput} required />
                  </div>
                  <button type="submit" className="action-btn" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Log In'}
                  </button>
                  <div className="toggle-text">
                    New User? <span onClick={() => { setView('signup'); setError(''); setFormData({...formData, email: '', password: ''}) }}>Create Account</span>
                  </div>
                </form>
              </div>
            )}

            {/* SIGN UP FORM */}
            {view === 'signup' && (
              <div className="fade-in">
                <h5 className="portal-title">Create Account</h5>
                <div className="role-selector">
                    <div className="role-btns">
                        {/* Yahan se role set hota hai */}
                        <button type="button" className={`role-btn ${userRole === 'Client' ? 'active' : ''}`} onClick={() => setUserRole('Client')}>Client</button>
                        <button type="button" className={`role-btn ${userRole === 'Attorney' ? 'active' : ''}`} onClick={() => setUserRole('Attorney')}>Attorney</button>
                    </div>
                </div>

                {error && <div className="alert-msg error">{error}</div>}
                {successMsg && <div className="alert-msg success">{successMsg}</div>}

                <form onSubmit={handleSignup}>
                  <h5 className="section-head">Account Details ({userRole})</h5>
                  <div className="row-split">
                    <div className="col">
                      <label className="lbl">First Name <span className="req">*</span></label>
                      <input type="text" name="firstName" value={formData.firstName} className="inp" onChange={handleInput} required />
                    </div>
                    <div className="col">
                      <label className="lbl">Last Name <span className="req">*</span></label>
                      <input type="text" name="lastName" value={formData.lastName} className="inp" onChange={handleInput} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="lbl">Email ID <span className="req">*</span></label>
                    <input type="email" name="email" value={formData.email} className="inp" onChange={handleInput} required />
                  </div>

                  <div className="row-split">
                    <div className="col">
                        <label className="lbl">Password <span className="req">*</span></label>
                        <input type="password" name="password" value={formData.password} className="inp" onChange={handleInput} required />
                    </div>
                    <div className="col">
                        <label className="lbl">Confirm <span className="req">*</span></label>
                        <input type="password" name="repeatPassword" value={formData.repeatPassword} className="inp" onChange={handleInput} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="lbl">Security Verification <span className="req">*</span></label>
                    <div className="d-flex gap-2">
                        <div className="captcha-code-box" onClick={generateCaptcha}>
                            {generatedCaptcha}
                        </div>
                        <input 
                            type="text" 
                            className="inp flex-grow-1" 
                            placeholder="Enter Code" 
                            value={captchaInput} 
                            onChange={(e) => setCaptchaInput(e.target.value)} 
                            required 
                        />
                    </div>
                  </div>

                  <div className="terms-box">
                    <input type="checkbox" name="terms" id="terms" checked={formData.terms} required onChange={handleInput} />
                    <label htmlFor="terms">I accept the Terms and Conditions.</label>
                  </div>

                  <button type="submit" className="action-btn" disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Register'}
                  </button>
                  <div className="toggle-text">
                    Has Account? <span onClick={() => setView('login')}>Sign In</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background-color: #f4f7f6; }
        .main-wrapper { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 80px 15px 40px; }
        .auth-card { background: white; width: 100%; max-width: 380px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden; border-top: 4px solid #002b5c; }
        .form-body { padding: 20px 25px; }
        .portal-title { text-align: center; color: #002b5c; margin: 0 0 5px; font-size: 20px; font-family: 'Merriweather', serif; }
        .portal-subtitle { text-align: center; color: #888; margin: 0 0 15px; font-size: 12px; }
        .section-head { font-size: 11px; font-weight: bold; color: #002b5c; border-bottom: 1px solid #eee; padding-bottom: 5px; margin: 10px 0; text-transform: uppercase; }
        .role-btns { display: flex; justify-content: center; gap: 10px; margin-bottom: 10px; }
        .role-btn { padding: 5px 15px; border: 1px solid #ddd; background: #fff; border-radius: 20px; cursor: pointer; font-size: 11px; font-weight: 600; color: #555; }
        .role-btn.active { background: #002b5c; color: #fff; border-color: #002b5c; }
        .form-group { margin-bottom: 10px; }
        .row-split { display: flex; gap: 10px; margin-bottom: 10px; }
        .col { flex: 1; }
        .lbl { display: block; font-size: 11px; font-weight: 700; color: #444; margin-bottom: 3px; }
        .req { color: #d63031; }
        .inp { width: 100%; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; color: #333; outline: none; height: 34px; }
        .inp:focus { border-color: #002b5c; }

        /* Captcha Styles */
        .terms-box label {
          font-size:13px;
          padding-left:5px
        }
        .captcha-code-box { 
            background: #002b5c; color: #fff; font-family: monospace; 
            font-weight: bold; font-size: 16px; padding: 0 10px; 
            border-radius: 4px; display: flex; align-items: center; 
            letter-spacing: 2px; cursor: pointer; user-select: none;
        }
        .refresh-btn { border: 1px solid #ccc; background: #fff; border-radius: 4px; cursor: pointer; padding: 0 8px; }

        .action-btn { width: 100%; padding: 10px; background: #002b5c; color: white; border: none; border-radius: 4px; font-size: 14px; font-weight: bold; cursor: pointer; margin-top: 5px; }
        .toggle-text { text-align: center; margin-top: 15px; font-size: 12px; color: #666; }
        .toggle-text span { color: #cfa144; font-weight: bold; cursor: pointer; }
        .alert-msg { padding: 8px; font-size: 11px; margin-bottom: 10px; text-align: center; border-radius: 4px; }
        .alert-msg.error { background: #ffe6e6; color: #d63031; border: 1px solid #ff7675; }
        .alert-msg.success { background: #e6fffa; color: #00b894; border: 1px solid #55efc4; }
        .fade-in { animation: slideUp 0.3s ease-out; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}