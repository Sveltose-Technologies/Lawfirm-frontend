// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { signupUser, loginUser } from '../services/authService';
// // import { toastService } from '../utils/toast';

// // export default function UnifiedAuthPage() {
// //   const [userRole, setUserRole] = useState('Client');
// //   const [view, setView] = useState('login');
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const [generatedCaptcha, setGeneratedCaptcha] = useState('');
// //   const [captchaInput, setCaptchaInput] = useState('');
// //   const [error, setError] = useState('');
// //   const [successMsg, setSuccessMsg] = useState('');

// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     password: '',
// //     repeatPassword: '',
// //     terms: false
// //   });

// //   // 🔐 CAPTCHA (Frontend only)
// //   const generateCaptcha = () => {
// //     const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //     let result = '';
// //     for (let i = 0; i < 6; i++) {
// //       result += chars.charAt(Math.floor(Math.random() * chars.length));
// //     }
// //     setGeneratedCaptcha(result);
// //     setCaptchaInput('');
// //   };

// //   useEffect(() => {
// //     if (view === 'signup') generateCaptcha();
// //   }, [view]);

// //   const handleInput = (e) => {
// //     const value = e.target.type === 'checkbox'
// //       ? e.target.checked
// //       : e.target.value;

// //     setFormData({ ...formData, [e.target.name]: value });
// //   };

// // const handleLogin = async (e) => {
// //   e.preventDefault();
// //   setIsLoading(true);

// //   try {
// //     const response = await loginUser({
// //       email: formData.email,
// //       password: formData.password
// //     });

// //     if (response.token) {
// //       localStorage.setItem('token', response.token);
// //     }

// //     toastService.success('Login Successful');

// //     // ✅ Role-based redirect
// //     // Backend se role aana chahiye: "Client" ya "Attorney"
// //     const role = response.role || userRole; // agar backend role de raha hai to use karo, nahi to selected role
// //     localStorage.setItem('role', role.toLowerCase());

// //     if (role.toLowerCase() === 'attorney') {
// //       window.location.href = '/attorney-panel';
// //     } else {
// //       window.location.href = '/client-panel';
// //     }

// //   } catch (err) {
// //     toastService.error(err.message || 'Invalid credentials');
// //   } finally {
// //     setIsLoading(false);
// //   }
// // };




// //   // ✅ SIGNUP
// //   const handleSignup = async (e) => {
// //   e.preventDefault();
// //   setIsLoading(true);
// //   setError('');

// //   if (formData.password !== formData.repeatPassword) {
// //     toastService.error('Passwords do not match');
// //     return;
// //   }

// //   if (!formData.terms) {
// //     toastService.error('Please accept terms');
// //     return;
// //   }

// //   try {
// //     const payload = {
// //       firstName: formData.firstName,
// //       lastName: formData.lastName,
// //       email: formData.email,
// //       password: formData.password,
// //       repeatPassword: formData.repeatPassword,
// //       captcha: captchaInput.toUpperCase(),
// //       role: userRole.toLowerCase()
// //     };

// //     await signupUser(payload);
// //     toastService.success(`${userRole} account created successfully!`);

// //     setTimeout(() => {
// //       setView('login');
// //       setFormData({
// //         firstName: '', lastName: '', email: '', password: '', repeatPassword: '', terms: false
// //       });
// //     }, 2000);

// //   } catch (err) {
// //     toastService.error(err.message || 'Registration failed');
// //   } finally {
// //     setIsLoading(false);
// //   }
// // };


  
// //   return (
// //     <>
// //       <div className="main-wrapper">
// //         <div className={`auth-card ${view === 'signup' ? 'wide-mobile' : ''}`}>
// //           <div className="form-body">

// //             {/* LOGIN FORM */}
// //             {view === 'login' && (
// //               <div className="fade-in">
// //                 <h4 className="portal-title">Welcome Back</h4>
// //                 <p className="portal-subtitle">Please Sign In to continue</p>
// //                 {error && <div className="alert-msg error">{error}</div>}
// //                 <form onSubmit={handleLogin}>
// //                   <div className="form-group">
// //                     <label className="lbl">Email ID <span className="req">*</span></label>
// //                     <input type="email" name="email" value={formData.email} className="inp" placeholder="email@lawfirm.com" onChange={handleInput} required />
// //                   </div>
// //                   <div className="form-group">
// //                     <label className="lbl">Password <span className="req">*</span></label>
// //                     <input type="password" name="password" value={formData.password} className="inp" onChange={handleInput} required />
// //                   </div>
// //                   <button type="submit" className="action-btn" disabled={isLoading}>
// //                     {isLoading ? 'Logging in...' : 'Log In'}
// //                   </button>
// //                   <div className="toggle-text">
// //                     New User? <span onClick={() => { setView('signup'); setError(''); setFormData({...formData, email: '', password: ''}) }}>Create Account</span>
// //                   </div>
// //                 </form>
// //               </div>
// //             )}

// //             {/* SIGN UP FORM */}
// //             {view === 'signup' && (
// //               <div className="fade-in">
// //                 <h5 className="portal-title">Create Account</h5>
// //                 <div className="role-selector">
// //                     <div className="role-btns">
// //                         {/* Yahan se role set hota hai */}
// //                         <button type="button" className={`role-btn ${userRole === 'Client' ? 'active' : ''}`} onClick={() => setUserRole('Client')}>Client</button>
// //                         <button type="button" className={`role-btn ${userRole === 'Attorney' ? 'active' : ''}`} onClick={() => setUserRole('Attorney')}>Attorney</button>
// //                     </div>
// //                 </div>

// //                 {error && <div className="alert-msg error">{error}</div>}
// //                 {successMsg && <div className="alert-msg success">{successMsg}</div>}

// //                 <form onSubmit={handleSignup}>
// //                   <h5 className="section-head">Account Details ({userRole})</h5>
// //                   <div className="row-split">
// //                     <div className="col">
// //                       <label className="lbl">First Name <span className="req">*</span></label>
// //                       <input type="text" name="firstName" value={formData.firstName} className="inp" onChange={handleInput} required />
// //                     </div>
// //                     <div className="col">
// //                       <label className="lbl">Last Name <span className="req">*</span></label>
// //                       <input type="text" name="lastName" value={formData.lastName} className="inp" onChange={handleInput} required />
// //                     </div>
// //                   </div>

// //                   <div className="form-group">
// //                     <label className="lbl">Email ID <span className="req">*</span></label>
// //                     <input type="email" name="email" value={formData.email} className="inp" onChange={handleInput} required />
// //                   </div>

// //                   <div className="row-split">
// //                     <div className="col">
// //                         <label className="lbl">Password <span className="req">*</span></label>
// //                         <input type="password" name="password" value={formData.password} className="inp" onChange={handleInput} required />
// //                     </div>
// //                     <div className="col">
// //                         <label className="lbl">Confirm <span className="req">*</span></label>
// //                         <input type="password" name="repeatPassword" value={formData.repeatPassword} className="inp" onChange={handleInput} required />
// //                     </div>
// //                   </div>

// //                   <div className="form-group">
// //                     <label className="lbl">Security Verification <span className="req">*</span></label>
// //                     <div className="d-flex gap-2">
// //                         <div className="captcha-code-box" onClick={generateCaptcha}>
// //                             {generatedCaptcha}
// //                         </div>
// //                         <input 
// //                             type="text" 
// //                             className="inp flex-grow-1" 
// //                             placeholder="Enter Code" 
// //                             value={captchaInput} 
// //                             onChange={(e) => setCaptchaInput(e.target.value)} 
// //                             required 
// //                         />
// //                     </div>
// //                   </div>

// //                   <div className="terms-box">
// //                     <input type="checkbox" name="terms" id="terms" checked={formData.terms} required onChange={handleInput} />
// //                     <label htmlFor="terms">I accept the Terms and Conditions.</label>
// //                   </div>

// //                   <button type="submit" className="action-btn" disabled={isLoading}>
// //                     {isLoading ? 'Processing...' : 'Register'}
// //                   </button>
// //                   <div className="toggle-text">
// //                     Has Account? <span onClick={() => setView('login')}>Sign In</span>
// //                   </div>
// //                 </form>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
      
// //       <style jsx global>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;600&display=swap');
// //         * { box-sizing: border-box; }
// //         body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background-color: #f4f7f6; }
// //         .main-wrapper { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 80px 15px 40px; }
// //         .auth-card { background: white; width: 100%; max-width: 380px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden; border-top: 4px solid #002b5c; }
// //         .form-body { padding: 20px 25px; }
// //         .portal-title { text-align: center; color: #002b5c; margin: 0 0 5px; font-size: 20px; font-family: 'Merriweather', serif; }
// //         .portal-subtitle { text-align: center; color: #888; margin: 0 0 15px; font-size: 12px; }
// //         .section-head { font-size: 11px; font-weight: bold; color: #002b5c; border-bottom: 1px solid #eee; padding-bottom: 5px; margin: 10px 0; text-transform: uppercase; }
// //         .role-btns { display: flex; justify-content: center; gap: 10px; margin-bottom: 10px; }
// //         .role-btn { padding: 5px 15px; border: 1px solid #ddd; background: #fff; border-radius: 20px; cursor: pointer; font-size: 11px; font-weight: 600; color: #555; }
// //         .role-btn.active { background: #002b5c; color: #fff; border-color: #002b5c; }
// //         .form-group { margin-bottom: 10px; }
// //         .row-split { display: flex; gap: 10px; margin-bottom: 10px; }
// //         .col { flex: 1; }
// //         .lbl { display: block; font-size: 11px; font-weight: 700; color: #444; margin-bottom: 3px; }
// //         .req { color: #d63031; }
// //         .inp { width: 100%; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; color: #333; outline: none; height: 34px; }
// //         .inp:focus { border-color: #002b5c; }

// //         /* Captcha Styles */
// //         .terms-box label {
// //           font-size:13px;
// //           padding-left:5px
// //         }
// //         .captcha-code-box { 
// //             background: #002b5c; color: #fff; font-family: monospace; 
// //             font-weight: bold; font-size: 16px; padding: 0 10px; 
// //             border-radius: 4px; display: flex; align-items: center; 
// //             letter-spacing: 2px; cursor: pointer; user-select: none;
// //         }
// //         .refresh-btn { border: 1px solid #ccc; background: #fff; border-radius: 4px; cursor: pointer; padding: 0 8px; }

// //         .action-btn { width: 100%; padding: 10px; background: #002b5c; color: white; border: none; border-radius: 4px; font-size: 14px; font-weight: bold; cursor: pointer; margin-top: 5px; }
// //         .toggle-text { text-align: center; margin-top: 15px; font-size: 12px; color: #666; }
// //         .toggle-text span { color: #cfa144; font-weight: bold; cursor: pointer; }
// //         .alert-msg { padding: 8px; font-size: 11px; margin-bottom: 10px; text-align: center; border-radius: 4px; }
// //         .alert-msg.error { background: #ffe6e6; color: #d63031; border: 1px solid #ff7675; }
// //         .alert-msg.success { background: #e6fffa; color: #00b894; border: 1px solid #55efc4; }
// //         .fade-in { animation: slideUp 0.3s ease-out; }
// //         @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
// //       `}</style>
// //     </>
// //   );
// // }


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { signupUser, loginUser, forgotPassword, verifyOtp, resetPassword } from '../services/authService';
// import { toastService } from '../utils/toast';

// export default function UnifiedAuthPage() {
//   const [view, setView] = useState('login'); 
//   const [userRole, setUserRole] = useState('Client');
//   const [isLoading, setIsLoading] = useState(false);
  
//   // States for Password and Timer
//   const [showPass, setShowPass] = useState(false);
//   const [showNewPass, setShowNewPass] = useState(false);
//   const [timer, setTimer] = useState(60);
//   const [canResend, setCanResend] = useState(false);
//   const timerRef = useRef(null);

//   const [generatedCaptcha, setGeneratedCaptcha] = useState('');
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [otpInput, setOtpInput] = useState('');

//   const [formData, setFormData] = useState({
//     firstName: '', lastName: '', email: '',
//     password: '', repeatPassword: '', 
//     newPassword: '', confirmPassword: '', 
//     terms: false
//   });

//   // Timer Logic
//   useEffect(() => {
//     if (view === 'verify' && timer > 0) {
//       timerRef.current = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setCanResend(true);
//       clearInterval(timerRef.current);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [view, timer]);

//   const startTimer = () => {
//     setTimer(60);
//     setCanResend(false);
//   };

//   const generateCaptcha = () => {
//     const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result = '';
//     for (let i = 0; i < 6; i++) { result += chars.charAt(Math.floor(Math.random() * chars.length)); }
//     setGeneratedCaptcha(result);
//     setCaptchaInput('');
//   };

//   useEffect(() => { if (view === 'signup') generateCaptcha(); }, [view]);

//   const handleInput = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   // ✅ Auth Actions
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await loginUser({ email: formData.email, password: formData.password });
//       const token = response.token || response.client?.token;
//       const roleFromBack = response.role || response.client?.role || userRole;
//       if (response.message === 'Login successful' || token) {
//         if (token) localStorage.setItem('token', token);
//         const finalRole = roleFromBack.toString().toLowerCase();
//         localStorage.setItem('role', finalRole);
//         toastService.success('Login Successful');
//         window.location.href = finalRole === 'attorney' ? '/attorney-panel' : '/client-panel';
//       }
//     } catch (err) { toastService.error(err.message || 'Login failed'); } finally { setIsLoading(false); }
//   };

//   const handleForgot = async (e) => {
//     if (e) e.preventDefault();
//     setIsLoading(true);
//     try { 
//       await forgotPassword({ email: formData.email }); 
//       toastService.success('OTP Sent Successfully');
//       setView('verify');
//       startTimer(); // Timer reset on resend/first send
//     } 
//     catch (err) { toastService.error(err.message); } finally { setIsLoading(false); }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try { await verifyOtp({ email: formData.email, otp: otpInput }); setView('reset'); } 
//     catch (err) { toastService.error('Invalid OTP'); } finally { setIsLoading(false); }
//   };

//   // Signup & Reset as before...
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.repeatPassword) return toastService.error('Passwords do not match');
//     setIsLoading(true);
//     try {
//       await signupUser({ ...formData, role: userRole.toLowerCase(), confirmPassword: formData.repeatPassword });
//       toastService.success('Account created!'); setView('login');
//     } catch (err) { toastService.error(err.message); } finally { setIsLoading(false); }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await resetPassword({ email: formData.email, newPassword: formData.newPassword, confirmPassword: formData.confirmPassword });
//       toastService.success('Password updated!'); setView('login');
//     } catch (err) { toastService.error(err.message); } finally { setIsLoading(false); }
//   };

//   return (
//     <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light-gray">
//       <div className="card shadow-lg border-0 auth-card-width" style={{ borderTop: '5px solid #003366' }}>
//         <div className="card-body p-4">
          
//           {/* LOGIN */}
//           {view === 'login' && (
//             <div className="fade-in">
//               <h3 className="text-center fw-bold text-blue mb-1">Welcome Back</h3>
//               <p className="text-center text-muted small mb-4">Please sign in to continue</p>
//               <form onSubmit={handleLogin}>
//                 <div className="mb-3">
//                   <label className="form-label fw-bold small">Email ID</label>
//                   <input type="email" name="email" className="form-control form-control-sm" onChange={handleInput} required />
//                 </div>
//                 <div className="mb-3 position-relative">
//                   <label className="form-label fw-bold small">Password</label>
//                   <input type={showPass ? "text" : "password"} name="password" 
//                     className="form-control form-control-sm" onChange={handleInput} required />
//                   <span className="position-absolute end-0 top-50 translate-middle-y me-2 mt-3 small cursor-pointer text-gold fw-bold" 
//                     onClick={() => setShowPass(!showPass)} style={{fontSize: '10px'}}> {showPass ? 'HIDE' : 'SHOW'} </span>
//                 </div>
//                 <div className="text-end mb-3">
//                   <span className="text-gold small fw-bold cursor-pointer" onClick={() => setView('forgot')}>Forgot Password?</span>
//                 </div>
//                 <button type="submit" className="btn btn-blue w-100 fw-bold py-2 mb-3" disabled={isLoading}>LOG IN</button>
//                 <p className="text-center small mb-0">New User? <span className="text-gold fw-bold cursor-pointer" onClick={() => setView('signup')}>Create Account</span></p>
//               </form>
//             </div>
//           )}

//           {/* SIGNUP (As requested, using Bootstrap) */}
//           {view === 'signup' && (
//             <div className="fade-in">
//               <h4 className="text-center fw-bold text-blue mb-3">Create Account</h4>
//               <div className="d-flex justify-content-center gap-2 mb-3">
//                 <button className={`btn btn-sm px-4 rounded-pill fw-bold ${userRole === 'Client' ? 'btn-blue' : 'btn-outline-secondary'}`} onClick={() => setUserRole('Client')}>Client</button>
//                 <button className={`btn btn-sm px-4 rounded-pill fw-bold ${userRole === 'Attorney' ? 'btn-blue' : 'btn-outline-secondary'}`} onClick={() => setUserRole('Attorney')}>Attorney</button>
//               </div>
//               <form onSubmit={handleSignup}>
//                 <div className="row g-2 mb-2">
//                   <div className="col-6"><input type="text" name="firstName" placeholder="First Name" className="form-control form-control-sm" onChange={handleInput} required /></div>
//                   <div className="col-6"><input type="text" name="lastName" placeholder="Last Name" className="form-control form-control-sm" onChange={handleInput} required /></div>
//                 </div>
//                 <div className="mb-2"><input type="email" name="email" placeholder="Email Address" className="form-control form-control-sm" onChange={handleInput} required /></div>
//                 <div className="row g-2 mb-2">
//                   <div className="col-6"><input type="password" name="password" placeholder="Password" className="form-control form-control-sm" onChange={handleInput} required /></div>
//                   <div className="col-6"><input type="password" name="repeatPassword" placeholder="Confirm" className="form-control form-control-sm" onChange={handleInput} required /></div>
//                 </div>
//                 <div className="mb-3">
//                   <div className="d-flex gap-2">
//                     <div className="bg-blue text-white px-3 py-1 rounded small fw-bold cursor-pointer" style={{letterSpacing: '2px'}} onClick={generateCaptcha}>{generatedCaptcha}</div>
//                     <input type="text" className="form-control form-control-sm" placeholder="Security Code" onChange={(e) => setCaptchaInput(e.target.value)} required />
//                   </div>
//                 </div>
//                 <button type="submit" className="btn btn-blue w-100 fw-bold mb-3">REGISTER</button>
//                 <p className="text-center small">Has Account? <span className="text-gold fw-bold cursor-pointer" onClick={() => setView('login')}>Sign In</span></p>
//               </form>
//             </div>
//           )}

//           {/* VERIFY OTP WITH 60s TIMER */}
//           {view === 'verify' && (
//             <div className="fade-in text-center">
//               <h4 className="fw-bold text-blue">Verify OTP</h4>
//               <p className="small text-muted mb-4">Enter the 6-digit code sent to your email</p>
//               <form onSubmit={handleVerifyOtp}>
//                 <input type="text" className="form-control text-center mb-4 fs-4 fw-bold" placeholder="000000" onChange={(e) => setOtpInput(e.target.value)} required />
//                 <button type="submit" className="btn btn-blue w-100 fw-bold py-2 mb-3">VERIFY OTP</button>
                
//                 <div className="text-center">
//                   {canResend ? (
//                     <span className="text-gold small fw-bold cursor-pointer" onClick={handleForgot}>Resend OTP</span>
//                   ) : (
//                     <span className="text-muted small">Resend OTP in <b className="text-blue">{timer}s</b></span>
//                   )}
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* FORGOT & RESET views remain identical but with Bootstrap classes as above... */}
//           {view === 'forgot' && (
//              <div className="fade-in">
//                 <h4 className="text-center fw-bold text-blue mb-3">Reset Password</h4>
//                 <form onSubmit={handleForgot}>
//                     <input type="email" name="email" className="form-control mb-3" placeholder="Enter Registered Email" onChange={handleInput} required />
//                     <button type="submit" className="btn btn-blue w-100 fw-bold py-2">SEND OTP</button>
//                 </form>
//              </div>
//           )}

//           {view === 'reset' && (
//             <div className="fade-in">
//               <h4 className="text-center fw-bold text-blue mb-4">New Password</h4>
//               <form onSubmit={handleResetPassword}>
//                 <div className="mb-3 position-relative">
//                   <input type={showNewPass ? "text" : "password"} name="newPassword" placeholder="New Password" 
//                     className="form-control" onChange={handleInput} required />
//                   <span className="position-absolute end-0 top-50 translate-middle-y me-2 small cursor-pointer text-gold fw-bold" 
//                     onClick={() => setShowNewPass(!showNewPass)} style={{fontSize: '10px'}}>{showNewPass ? 'HIDE' : 'SHOW'}</span>
//                 </div>
//                 <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control mb-4" onChange={handleInput} required />
//                 <button type="submit" className="btn btn-blue w-100 fw-bold py-2">UPDATE PASSWORD</button>
//               </form>
//             </div>
//           )}

//         </div>
//       </div>

//       <style jsx>{`
//         .bg-light-gray { background-color: #f4f7f6; }
//         .text-blue { color: #003366; }
//         .text-gold { color: #de9f57; }
//         .btn-blue { background-color: #003366; color: white; border: none; }
//         .btn-blue:hover { background-color: #0a1c38; opacity: 0.9; }
//         .cursor-pointer { cursor: pointer; }
//         .auth-card-width { width: 100%; max-width: 380px; }
//         .fade-in { animation: fadeIn 0.4s ease-in; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//       `}</style>
//     </div>
//   );
// }

'use client';

import { useState, useEffect, useRef } from 'react';
import { signupUser, loginUser, forgotPassword, verifyOtp, resetPassword } from '../services/authService';
import { toastService } from '../utils/toast';

export default function UnifiedAuthPage() {
  const [view, setView] = useState('login'); 
  const [userRole, setUserRole] = useState('Client');
  const [isLoading, setIsLoading] = useState(false);
  
  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef(null);

  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [otpInput, setOtpInput] = useState('');

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    password: '', repeatPassword: '', 
    newPassword: '', confirmPassword: '', 
    terms: false
  });

  // ⏱️ OTP Timer Logic
  useEffect(() => {
    if (view === 'verify' && timer > 0) {
      timerRef.current = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [view, timer]);

  const startTimer = () => { setTimer(60); setCanResend(false); };

  // 🔐 Captcha Logic
  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';
    for (let i = 0; i < 6; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
    setGeneratedCaptcha(res);
  };

  useEffect(() => { if (view === 'signup') generateCaptcha(); }, [view]);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  // 🚀 Actions
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await loginUser({ email: formData.email, password: formData.password });
      const token = res.token || res.client?.token;
      if (res.message === 'Login successful' || token) {
        if (token) localStorage.setItem('token', token);
        const role = (res.role || res.client?.role || userRole).toLowerCase();
        localStorage.setItem('role', role);
        toastService.success('Login Successful');
        window.location.href = role === 'attorney' ? '/attorney-panel' : '/client-panel';
      }
    } catch (err) { toastService.error(err.message || 'Login failed'); } finally { setIsLoading(false); }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) return toastService.error('Passwords do not match');
    if (captchaInput.toUpperCase() !== generatedCaptcha) return toastService.error('Invalid Captcha');
    setIsLoading(true);
    try {
      await signupUser({ ...formData, role: userRole.toLowerCase(), confirmPassword: formData.repeatPassword });
      toastService.success('Account created!'); setView('login');
    } catch (err) { toastService.error(err.message); } finally { setIsLoading(false); }
  };

  const handleForgot = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    try { 
      await forgotPassword({ email: formData.email }); 
      setView('verify'); startTimer();
      toastService.success('OTP Sent');
    } catch (err) { toastService.error(err.message); } finally { setIsLoading(false); }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light-gray">
      <div className="card shadow-lg border-0 auth-card" style={{ borderTop: '5px solid var(--primary-blue)' }}>
        <div className="card-body p-4">
          
          {/* LOGIN VIEW */}
          {view === 'login' && (
            <div className="fade-in">
              <h3 className="text-center fw-bold text-blue mb-1">Welcome Back</h3>
              <p className="text-center text-muted small mb-4">Please sign in to continue</p>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label fw-bold small">Email ID <span className="text-danger">*</span></label>
                  <input type="email" name="email" className="form-control form-control-sm" onChange={handleInput} required />
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label fw-bold small">Password <span className="text-danger">*</span></label>
                  <input type={showPass ? "text" : "password"} name="password" className="form-control form-control-sm" onChange={handleInput} required />
                  <span className="pass-toggle text-gold fw-bold" onClick={() => setShowPass(!showPass)}>
                    {showPass ? 'HIDE' : 'SHOW'}
                  </span>
                </div>
                <div className="text-end mb-3">
                  <span className="text-gold small fw-bold cursor-pointer" onClick={() => setView('forgot')}>Forgot Password?</span>
                </div>
                <button type="submit" className="btn bg-blue text-white w-100 fw-bold mb-3" disabled={isLoading}>LOG IN</button>
                <p className="text-center small">New User? <span className="text-gold fw-bold cursor-pointer" onClick={() => setView('signup')}>Create Account</span></p>
              </form>
            </div>
          )}

          {/* SIGNUP VIEW */}
          {view === 'signup' && (
            <div className="fade-in">
              <h4 className="text-center fw-bold text-blue mb-3">Create Account</h4>
              <div className="d-flex justify-content-center gap-2 mb-3">
                <button type="button" className={`btn btn-sm px-4 rounded-pill fw-bold ${userRole === 'Client' ? 'bg-blue text-white' : 'btn-outline-secondary'}`} onClick={() => setUserRole('Client')}>Client</button>
                <button type="button" className={`btn btn-sm px-4 rounded-pill fw-bold ${userRole === 'Attorney' ? 'bg-blue text-white' : 'btn-outline-secondary'}`} onClick={() => setUserRole('Attorney')}>Attorney</button>
              </div>
              <form onSubmit={handleSignup}>
                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <label className="small fw-bold">First Name <span className="text-danger">*</span></label>
                    <input type="text" name="firstName" className="form-control form-control-sm" onChange={handleInput} required />
                  </div>
                  <div className="col-6">
                    <label className="small fw-bold">Last Name <span className="text-danger">*</span></label>
                    <input type="text" name="lastName" className="form-control form-control-sm" onChange={handleInput} required />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="small fw-bold">Email ID <span className="text-danger">*</span></label>
                  <input type="email" name="email" className="form-control form-control-sm" onChange={handleInput} required />
                </div>
                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <label className="small fw-bold">Password <span className="text-danger">*</span></label>
                    <input type="password" name="password" className="form-control form-control-sm" onChange={handleInput} required />
                  </div>
                  <div className="col-6">
                    <label className="small fw-bold">Confirm <span className="text-danger">*</span></label>
                    <input type="password" name="repeatPassword" className="form-control form-control-sm" onChange={handleInput} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Security Code <span className="text-danger">*</span></label>
                  <div className="d-flex gap-2">
                    <div className="bg-blue text-white px-3 py-1 rounded small fw-bold cursor-pointer" onClick={generateCaptcha}>{generatedCaptcha}</div>
                    <input type="text" className="form-control form-control-sm" placeholder="Enter Code" onChange={(e) => setCaptchaInput(e.target.value)} required />
                  </div>
                </div>
                <button type="submit" className="btn bg-blue text-white w-100 fw-bold mb-3">REGISTER</button>
                <p className="text-center small">Has Account? <span className="text-gold fw-bold cursor-pointer" onClick={() => setView('login')}>Sign In</span></p>
              </form>
            </div>
          )}

          {/* VERIFY OTP VIEW */}
          {view === 'verify' && (
            <div className="fade-in text-center">
              <h4 className="fw-bold text-blue">Verify OTP</h4>
              <p className="small text-muted mb-4">Enter OTP sent to your email</p>
              <form onSubmit={async (e) => { e.preventDefault(); try { await verifyOtp({ email: formData.email, otp: otpInput }); setView('reset'); } catch { toastService.error('Invalid OTP'); } }}>
                <input type="text" className="form-control text-center mb-4 fs-4 fw-bold" maxLength="6" onChange={(e) => setOtpInput(e.target.value)} required />
                <button type="submit" className="btn bg-blue text-white w-100 fw-bold py-2 mb-3">VERIFY OTP</button>
                <div className="small">
                  {canResend ? <span className="text-gold fw-bold cursor-pointer" onClick={handleForgot}>Resend OTP</span> : <span>Resend in <b className="text-blue">{timer}s</b></span>}
                </div>
              </form>
            </div>
          )}

          {/* RESET PASSWORD VIEW */}
          {view === 'reset' && (
            <div className="fade-in">
              <h4 className="text-center fw-bold text-blue mb-4">New Password</h4>
              <form onSubmit={async (e) => { e.preventDefault(); try { await resetPassword({ email: formData.email, newPassword: formData.newPassword, confirmPassword: formData.confirmPassword }); toastService.success('Updated!'); setView('login'); } catch (err) { toastService.error(err.message); } }}>
                <div className="mb-3 position-relative">
                  <label className="small fw-bold">New Password <span className="text-danger">*</span></label>
                  <input type={showNewPass ? "text" : "password"} name="newPassword" size="sm" className="form-control" onChange={handleInput} required />
                  <span className="pass-toggle text-gold fw-bold" onClick={() => setShowNewPass(!showNewPass)}> {showNewPass ? 'HIDE' : 'SHOW'} </span>
                </div>
                <div className="mb-4">
                  <label className="small fw-bold">Confirm Password <span className="text-danger">*</span></label>
                  <input type="password" name="confirmPassword" className="form-control" onChange={handleInput} required />
                </div>
                <button type="submit" className="btn bg-blue text-white w-100 fw-bold py-2">UPDATE PASSWORD</button>
              </form>
            </div>
          )}

          {/* FORGOT PASSWORD VIEW */}
          {view === 'forgot' && (
            <div className="fade-in">
              <h4 className="text-center fw-bold text-blue mb-3">Reset Password</h4>
              <form onSubmit={handleForgot}>
                <div className="mb-3">
                  <label className="small fw-bold">Email ID <span className="text-danger">*</span></label>
                  <input type="email" name="email" className="form-control" placeholder="name@example.com" onChange={handleInput} required />
                </div>
                <button type="submit" className="btn bg-blue text-white w-100 fw-bold py-2">SEND OTP</button>
                <p className="text-center mt-3 small"><span className="text-gold fw-bold cursor-pointer" onClick={() => setView('login')}>Back to Login</span></p>
              </form>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .auth-card { width: 100%; max-width: 380px; }
        .cursor-pointer { cursor: pointer; }
        .pass-toggle { position: absolute; right: 10px; top: 32px; font-size: 10px; cursor: pointer; }
        .fade-in { animation: fadeIn 0.4s ease-in; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}