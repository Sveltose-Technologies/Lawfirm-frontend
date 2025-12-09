'use client';

import { useState } from 'react';

// --- PLACEHOLDER DASHBOARDS ---
// Ye components sirf dikhane ke liye hain, jab aap asli dashboard banayenge tab inhein hata dena
const ClientDashboard = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center p-5 shadow bg-white rounded">
      <h1 className="text-primary">🏛️ Client Dashboard</h1>
      <p className="lead">Welcome! You have successfully logged in.</p>
    </div>
  </div>
);

const AttorneyDashboard = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center p-5 shadow bg-white rounded">
      <h1 className="text-warning text-dark">⚖️ Attorney Dashboard</h1>
    </div>
  </div>
);

const AdminDashboard = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center p-5 shadow bg-white rounded">
      <h1 className="text-danger">💼 Admin Dashboard</h1>
    </div>
  </div>
);

// --- MAIN COMPONENT START ---
// Yahan "export default" likhna zaroori hai tabhi Next.js isey pehchanega
export default function UnifiedAuthPage() {
  
  // --- STATES ---
  const [activeTab, setActiveTab] = useState('Client'); // Default: Client
  const [view, setView] = useState('login'); // 'login' or 'signup'
  const [step, setStep] = useState(1); // 1 = Basic Info, 2 = Profile & KYC
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Messages
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // --- FORM DATA STATE ---
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', repeatPassword: '', captcha: '',
    street: '', apt: '', city: '', state: '', country: '', zip: '',
    countryCode: '+91', phone: '', dob: '',
    terms: false
  });

  // Handle Inputs
  const handleInput = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  // Switch Tabs
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setView('login');
    setStep(1);
    setError('');
    setSuccessMsg('');
  };

  // --- ACTIONS ---

  // 1. LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email === 'error@lawfirm.com') {
      setError('Invalid Email ID or Password');
      return;
    }
    setIsAuthenticated(true);
  };

  // 2. SIGN UP STEP 1
  const handleStep1 = (e) => {
    e.preventDefault();
    setError('');

    if (formData.email === 'exist@lawfirm.com') {
      setError('Error: This Email ID is already registered.');
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (formData.captcha.toUpperCase() !== 'X7K9B') {
      setError('Invalid Captcha!');
      return;
    }

    // Navigate to Form 2
    setStep(2);
    window.scrollTo(0, 0);
  };

  // 3. FINAL SUBMIT
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    
    setSuccessMsg('Please check your email to activate your account or contact us');

    setTimeout(() => {
      alert(`Email Sent! Account Activated.\nGenerated User Member ID: MEM-${Math.floor(1000 + Math.random() * 9000)}`);
      setSuccessMsg('');
      setView('login');
      setStep(1);
    }, 3000);
  };

  // RENDER DASHBOARD IF LOGGED IN
  if (isAuthenticated) {
    if (activeTab === 'Client') return <ClientDashboard />;
    if (activeTab === 'Attorney') return <AttorneyDashboard />;
    if (activeTab === 'Admin') return <AdminDashboard />;
  }

  return (
    <>
      <div className="main-wrapper">
        <div className={`auth-card ${step === 2 && view === 'signup' ? 'wide' : ''}`}>
          
          {/* TABS */}
          <div className="tabs-header">
            {['Client', 'Attorney', 'Admin'].map((tab) => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabSwitch(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="form-body">

            {/* LOGIN FORM */}
            {view === 'login' && (
              <div className="fade-in">
                <h2 className="portal-title">{activeTab} Portal</h2>
                <p className="portal-subtitle">Sign In</p>

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

                  {activeTab !== 'Admin' && (
                    <div className="toggle-text">
                      No Account Yet? <span onClick={() => setView('signup')}>Sign Up</span>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* SIGN UP STEP 1 */}
            {view === 'signup' && step === 1 && (
              <div className="fade-in">
                <h2 className="portal-title">Sign Up</h2>
                <p className="portal-subtitle">Step 1: Account Details</p>

                {error && <div className="alert-msg error">{error}</div>}

                <form onSubmit={handleStep1}>
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

                  <div className="form-group">
                    <label className="lbl">Email ID <span className="req">*</span></label>
                    <input type="email" name="email" className="inp" onChange={handleInput} required />
                  </div>

                  <div className="form-group">
                    <label className="lbl">Password <span className="req">*</span></label>
                    <input type="password" name="password" className="inp" onChange={handleInput} required />
                  </div>

                  <div className="form-group">
                    <label className="lbl">Repeat Password <span className="req">*</span></label>
                    <input type="password" name="repeatPassword" className="inp" onChange={handleInput} required />
                  </div>

                  <div className="form-group">
                    <label className="lbl">Captcha <span className="req">*</span></label>
                    <div className="captcha-box">X 7 K 9 B</div>
                    <input type="text" name="captcha" className="inp" placeholder="Enter Code" onChange={handleInput} required />
                  </div>

                  <button type="submit" className="action-btn">Sign Up</button>
                  
                  <div className="toggle-text">
                    Already Have An Account? <span onClick={() => setView('login')}>Sign In</span>
                  </div>
                </form>
              </div>
            )}

            {/* SIGN UP STEP 2 (KYC & PROFILE) */}
            {view === 'signup' && step === 2 && (
              <div className="fade-in">
                <h2 className="portal-title">Update Your Profile</h2>
                <p className="portal-subtitle">Step 2: Personal & KYC Details</p>

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
                    <div className="col" style={{flex: 0.6}}>
                      <label className="lbl">Code <span className="req">*</span></label>
                      <select name="countryCode" className="inp" onChange={handleInput} required>
                        <option>+91</option><option>+1</option><option>+44</option>
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
                    <label className="lbl">Profile Image (Selfie for Mobile)</label>
                    <input type="file" className="inp-file" accept="image/*" />
                  </div>

                  {/* KYC SECTION */}
                  <h4 className="section-head">KYC Documents Required</h4>
                  <div className="form-group">
                    <label className="lbl">Proof of Identity <span className="req">*</span></label>
                    <small className="small-text">PAN Card, Passport, Driving Licence, Aadhaar Card</small>
                    <input type="file" className="inp-file" required />
                  </div>
                  <div className="form-group">
                    <label className="lbl">Proof of Address <span className="req">*</span></label>
                    <small className="small-text">Utility bills, Rental agreement, or Govt address proof</small>
                    <input type="file" className="inp-file" required />
                  </div>

                  <div className="terms-box">
                    <input type="checkbox" name="terms" id="terms" required onChange={handleInput} />
                    <label htmlFor="terms">I accept the Terms and Conditions.</label>
                  </div>

                  <button type="submit" className="action-btn">Save</button>
                  
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
        }
        .auth-card.wide { max-width: 750px; }

        .tabs-header { display: flex; background: #fff; border-bottom: 1px solid #eee; }
        .tab-btn {
          flex: 1; padding: 18px; border: none; background: transparent;
          font-weight: 600; font-size: 14px; color: #666; cursor: pointer;
          border-bottom: 3px solid transparent; font-family: 'Open Sans', sans-serif;
        }
        .tab-btn.active { color: #002b5c; border-bottom: 3px solid #cfa144; }

        .form-body { padding: 30px; }
        .portal-title { text-align: center; color: #002b5c; margin: 0 0 5px 0; font-size: 26px; font-family: 'Merriweather', serif; }
        .portal-subtitle { text-align: center; color: #888; margin: 0 0 25px 0; font-size: 14px; }
        .section-head { color: #002b5c; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px; font-size: 16px; font-weight: bold; }

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
        
        .toggle-text { text-align: center; margin-top: 20px; font-size: 14px; color: #666; }
        .toggle-text span { color: #cfa144; font-weight: bold; cursor: pointer; }
        
        .captcha-box { background: #eee; padding: 8px; text-align: center; letter-spacing: 4px; font-weight: bold; border: 1px solid #ddd; margin-bottom: 5px; color: #333; }
        
        .terms-box { display: flex; align-items: center; gap: 8px; font-size: 13px; margin: 20px 0; }
        
        .alert-msg { padding: 10px; font-size: 13px; text-align: center; border-radius: 4px; margin-bottom: 15px; }
        .alert-msg.error { background: #ffe6e6; color: #d63031; border: 1px solid #ff7675; }
        .alert-msg.success { background: #e6fffa; color: #00b894; border: 1px solid #55efc4; }

        .fade-in { animation: fadeIn 0.5s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}


// 'use client';

// import { useState } from 'react';

// // --- DASHBOARD PLACEHOLDERS ---
// const ClientDashboard = () => (
//   <div className="p-5 text-center" style={{color: '#002b5c'}}>
//     <h1>🏛️ Welcome to Client Dashboard</h1>
//     <p>You have successfully logged in.</p>
//   </div>
// );
// const AttorneyDashboard = () => <div className="p-5 text-center"><h1>⚖️ Attorney Dashboard</h1></div>;
// const AdminDashboard = () => <div className="p-5 text-center"><h1>💼 Admin Dashboard</h1></div>;

// export default function UnifiedAuthPage() {
//   // --- STATES ---
//   const [activeTab, setActiveTab] = useState('Client'); // Default Client
//   const [view, setView] = useState('login'); // 'login' or 'signup'
//   const [step, setStep] = useState(1); // 1 = Account Info, 2 = Profile/KYC
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');

//   // --- FORM DATA STATE ---
//   const [formData, setFormData] = useState({
//     firstName: '', lastName: '', email: '', password: '', repeatPassword: '',
//     street: '', unit: '', city: '', state: '', country: '', zip: '',
//     countryCode: '+91', phone: '', dob: '',
//     terms: false
//   });

//   // --- HANDLERS ---

//   const handleInput = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTabSwitch = (tab) => {
//     setActiveTab(tab);
//     setView('login');
//     setStep(1);
//     setError('');
//     setSuccessMsg('');
//   };

//   // --- 1. LOGIN ACTION ---
//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Excel Validation: Invalid email/pass logic simulation
//     if (formData.email === 'error@lawfirm.com') {
//       setError('Invalid Email or Password');
//       return;
//     }
//     // Success
//     setIsAuthenticated(true);
//   };

//   // --- 2. SIGN UP STEP 1 ACTION ---
//   const handleStep1 = (e) => {
//     e.preventDefault();
//     setError('');

//     // Excel Validation 1: Check existing email
//     if (formData.email === 'exist@lawfirm.com') {
//       setError('This Email ID is already registered. Please Sign In.');
//       return;
//     }

//     // Excel Validation 2: Password Match
//     if (formData.password !== formData.repeatPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     // Navigate to Form 2 (Profile Update)
//     setStep(2);
//     window.scrollTo(0, 0);
//   };

//   // --- 3. FINAL SUBMIT (PROFILE SAVE) ---
//   const handleFinalSubmit = (e) => {
//     e.preventDefault();
    
//     // Excel Action: Provide info message
//     setSuccessMsg('Please check your email to activate your account or contact us.');

//     // Excel Action: Auto send email & Generate ID
//     setTimeout(() => {
//       alert(`Profile Created! Check Email.\nGenerated ${activeTab} ID: MEM-2025-9988`);
//       setSuccessMsg('');
//       setView('login');
//       setStep(1);
//     }, 3000);
//   };

//   // --- RENDER DASHBOARD ---
//   if (isAuthenticated) {
//     if (activeTab === 'Client') return <ClientDashboard />;
//     if (activeTab === 'Attorney') return <AttorneyDashboard />;
//     if (activeTab === 'Admin') return <AdminDashboard />;
//   }

//   return (
//     <>
//       <div className="main-wrapper">
//         {/* Dynamic Width: Step 2 becomes wider for better layout */}
//         <div className={`auth-card ${step === 2 && view === 'signup' ? 'wide' : ''}`}>
          
//           {/* HEADER TABS */}
//           <div className="tabs-header">
//             {['Client', 'Attorney', 'Admin'].map((tab) => (
//               <button 
//                 key={tab} 
//                 className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
//                 onClick={() => handleTabSwitch(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           <div className="form-body">
            
//             {/* ================= LOGIN FORM ================= */}
//             {view === 'login' && (
//               <div className="fade-in">
//                 <h2 className="portal-title">{activeTab} Portal</h2>
//                 <p className="portal-subtitle">Sign In</p>

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
                  
//                   <div className="forgot-link"><a href="#">Forgot Password?</a></div>
                  
//                   <button type="submit" className="action-btn">Log In</button>

//                   {activeTab !== 'Admin' && (
//                     <div className="toggle-text">
//                       No Account Yet? <span onClick={() => setView('signup')}>Sign Up</span>
//                     </div>
//                   )}
//                 </form>
//               </div>
//             )}

//             {/* ================= SIGN UP STEP 1 (Basic Info) ================= */}
//             {view === 'signup' && step === 1 && (
//               <div className="fade-in">
//                 <h2 className="portal-title">Sign Up</h2>
//                 <p className="portal-subtitle">Step 1: Account Details</p>

//                 {error && <div className="alert-msg error">{error}</div>}

//                 <form onSubmit={handleStep1}>
//                   <div className="row-split">
//                     <div className="col">
//                       <label className="lbl">First Name <span className="req">*</span></label>
//                       <input type="text" name="firstName" className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                       <label className="lbl">Last Name <span className="req">*</span></label>
//                       <input type="text" name="lastName" className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label className="lbl">Email ID <span className="req">*</span></label>
//                     <input type="email" name="email" className="inp" onChange={handleInput} required />
//                     <small style={{fontSize:'11px', color:'#888'}}>Use 'exist@lawfirm.com' to test error.</small>
//                   </div>

//                   <div className="form-group">
//                     <label className="lbl">Password <span className="req">*</span></label>
//                     <input type="password" name="password" className="inp" onChange={handleInput} required />
//                   </div>
//                   <div className="form-group">
//                     <label className="lbl">Repeat Password <span className="req">*</span></label>
//                     <input type="password" name="repeatPassword" className="inp" onChange={handleInput} required />
//                   </div>

//                   <div className="form-group">
//                     <label className="lbl">Captcha <span className="req">*</span></label>
//                     <div className="captcha-box">X 7 K 9 B</div>
//                     <input type="text" className="inp" placeholder="Enter Code" required />
//                   </div>

//                   <button type="submit" className="action-btn">Sign Up</button>
                  
//                   <div className="toggle-text">
//                     Already Have An Account? <span onClick={() => setView('login')}>Sign In</span>
//                   </div>
//                 </form>
//               </div>
//             )}

//             {/* ================= SIGN UP STEP 2 (Client Profile Update) ================= */}
//             {view === 'signup' && step === 2 && (
//               <div className="fade-in">
//                 <h2 className="portal-title">Update Your Profile</h2>
//                 <p className="portal-subtitle">Step 2: Personal & KYC Details</p>

//                 {successMsg && <div className="alert-msg success">{successMsg}</div>}

//                 <form onSubmit={handleFinalSubmit}>
//                   {/* 1. Address Fields */}
//                   <h4 className="section-head">Address Details</h4>
//                   <div className="row-split">
//                     <div className="col" style={{flex:2}}>
//                       <label className="lbl">Street Name <span className="req">*</span></label>
//                       <input type="text" name="street" className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                       <label className="lbl">Apt/Unit <span className="req">*</span></label>
//                       <input type="text" name="unit" className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   <div className="row-split">
//                     <div className="col">
//                       <label className="lbl">City <span className="req">*</span></label>
//                       <input type="text" name="city" className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                       <label className="lbl">State <span className="req">*</span></label>
//                       <input type="text" name="state" className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   <div className="row-split">
//                     <div className="col">
//                       <label className="lbl">Country <span className="req">*</span></label>
//                       <input type="text" name="country" className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col">
//                       <label className="lbl">Zip/Pin Code <span className="req">*</span></label>
//                       <input type="number" name="zip" className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   {/* 2. Contact & DOB */}
//                   <h4 className="section-head">Personal Details</h4>
//                   <div className="row-split">
//                     <div className="col" style={{flex:0.5}}>
//                       <label className="lbl">Code <span className="req">*</span></label>
//                       <select name="countryCode" className="inp" onChange={handleInput}>
//                         <option>+91</option><option>+1</option><option>+44</option>
//                       </select>
//                     </div>
//                     <div className="col" style={{flex:1.5}}>
//                       <label className="lbl">Phone Number <span className="req">*</span></label>
//                       <input type="number" name="phone" className="inp" onChange={handleInput} required />
//                     </div>
//                     <div className="col" style={{flex:1.5}}>
//                       <label className="lbl">Date Of Birth <span className="req">*</span></label>
//                       <input type="date" name="dob" className="inp" onChange={handleInput} required />
//                     </div>
//                   </div>

//                   {/* 3. Image & KYC */}
//                   <h4 className="section-head">Documents & KYC</h4>
                  
//                   <div className="file-box">
//                     <label className="lbl">Profile Image (Selfie for Mobile)</label>
//                     <input type="file" className="inp-file" accept="image/*" />
//                   </div>

//                   <div className="row-split">
//                     <div className="col">
//                        <label className="lbl">Proof of Identity <span className="req">*</span></label>
//                        <small className="small-text">PAN, Passport, DL, Aadhaar</small>
//                        <input type="file" className="inp-file" required />
//                     </div>
//                     <div className="col">
//                        <label className="lbl">Proof of Address <span className="req">*</span></label>
//                        <small className="small-text">Utility Bill, Rent Agreement</small>
//                        <input type="file" className="inp-file" required />
//                     </div>
//                   </div>
                  
//                   {/* Attorney Extra (Optional Logic - Hidden for Client) */}
//                   {activeTab === 'Attorney' && (
//                      <div className="file-box mt-2">
//                         <label className="lbl">Upload Resume / CV <span className="req">*</span></label>
//                         <input type="file" className="inp-file" required />
//                      </div>
//                   )}

//                   {/* 4. Terms */}
//                   <div className="terms-box">
//                     <input type="checkbox" id="terms" required />
//                     <label htmlFor="terms">I accept the Terms and Conditions.</label>
//                   </div>

//                   <button type="submit" className="action-btn">Save & Activate Account</button>
                  
//                   <div className="toggle-text" style={{marginTop:'15px'}}>
//                      <span onClick={() => setStep(1)} style={{color:'#666', fontSize:'13px'}}>← Back to Step 1</span>
//                   </div>

//                 </form>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>

//       {/* ================= STYLES (Navy Blue & Gold) ================= */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
        
//         * { box-sizing: border-box; }
//         body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background-color: #f4f7f6; }

//         .main-wrapper {
//           display: flex; justify-content: center; align-items: center;
//           min-height: 100vh; padding: 20px;
//         }

//         /* Card Container */
//         .auth-card {
//           background: white; width: 100%; max-width: 450px;
//           border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);
//           overflow: hidden; transition: max-width 0.4s ease;
//         }
//         .auth-card.wide { max-width: 700px; } /* Wider for Profile Form */

//         /* Tabs */
//         .tabs-header { display: flex; background: #fff; border-bottom: 1px solid #eee; }
//         .tab-btn {
//           flex: 1; padding: 18px; border: none; background: transparent;
//           font-weight: 600; font-size: 14px; color: #666; cursor: pointer;
//           border-bottom: 3px solid transparent; font-family: 'Open Sans', sans-serif;
//         }
//         .tab-btn.active { color: #002b5c; border-bottom: 3px solid #cfa144; }

//         /* Form Layout */
//         .form-body { padding: 30px; }
//         .portal-title { text-align: center; color: #002b5c; margin: 0 0 5px 0; font-size: 26px; font-family: 'Merriweather', serif; }
//         .portal-subtitle { text-align: center; color: #888; margin: 0 0 25px 0; font-size: 14px; }
//         .section-head { color: #002b5c; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px; font-size: 16px; font-weight: bold; }

//         /* Inputs */
//         .form-group { margin-bottom: 15px; }
//         .row-split { display: flex; gap: 15px; margin-bottom: 15px; }
//         .col { flex: 1; }

//         .lbl { display: block; font-size: 13px; font-weight: 600; color: #444; margin-bottom: 5px; }
//         .req { color: red; }
//         .small-text { display: block; font-size: 11px; color: #888; margin-bottom: 5px; }

//         .inp, select { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; color: #333; outline: none; }
//         .inp:focus { border-color: #002b5c; }
        
//         .file-box { background: #fafafa; border: 1px dashed #ccc; padding: 10px; border-radius: 4px; margin-bottom: 15px; }
//         .inp-file { font-size: 12px; width: 100%; }

//         /* Buttons */
//         .action-btn { width: 100%; padding: 12px; background: #002b5c; color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 10px; }
//         .action-btn:hover { background: #001f42; }

//         /* Links & Utility */
//         .forgot-link { text-align: right; margin-bottom: 20px; }
//         .forgot-link a { color: #002b5c; font-size: 13px; text-decoration: none; }
        
//         .toggle-text { text-align: center; margin-top: 20px; font-size: 14px; color: #666; }
//         .toggle-text span { color: #cfa144; font-weight: bold; cursor: pointer; }
        
//         .captcha-box { background: #eee; padding: 8px; text-align: center; letter-spacing: 4px; font-weight: bold; border: 1px solid #ddd; margin-bottom: 5px; color: #333; }
        
//         .terms-box { display: flex; align-items: center; gap: 8px; font-size: 13px; margin: 15px 0; }
        
//         .alert-msg { padding: 10px; font-size: 13px; text-align: center; border-radius: 4px; margin-bottom: 15px; }
//         .alert-msg.error { background: #ffe6e6; color: #d63031; border: 1px solid #ff7675; }
//         .alert-msg.success { background: #e6fffa; color: #00b894; border: 1px solid #55efc4; }

//         .fade-in { animation: fadeIn 0.5s; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//       `}</style>
//     </>
//   );
// }