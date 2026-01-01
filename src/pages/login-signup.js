'use client';

import { useState, useEffect } from 'react';
import { signupUser, loginUser } from '../services/authService';
import { toastService } from '../utils/toast';

export default function UnifiedAuthPage() {
  const [userRole, setUserRole] = useState('Client');
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

  // 🔐 CAPTCHA (Frontend only)
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
    const value = e.target.type === 'checkbox'
      ? e.target.checked
      : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await loginUser({
      email: formData.email,
      password: formData.password
    });

    if (response.token) {
      localStorage.setItem('token', response.token);
    }

    toastService.success('Login Successful');

    // ✅ Role-based redirect
    // Backend se role aana chahiye: "Client" ya "Attorney"
    const role = response.role || userRole; // agar backend role de raha hai to use karo, nahi to selected role
    localStorage.setItem('role', role.toLowerCase());

    if (role.toLowerCase() === 'attorney') {
      window.location.href = '/attorney-panel';
    } else {
      window.location.href = '/client-panel';
    }

  } catch (err) {
    toastService.error(err.message || 'Invalid credentials');
  } finally {
    setIsLoading(false);
  }
};




  // ✅ SIGNUP
  const handleSignup = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  if (formData.password !== formData.repeatPassword) {
    toastService.error('Passwords do not match');
    return;
  }

  if (!formData.terms) {
    toastService.error('Please accept terms');
    return;
  }

  try {
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      repeatPassword: formData.repeatPassword,
      captcha: captchaInput.toUpperCase(),
      role: userRole.toLowerCase()
    };

    await signupUser(payload);
    toastService.success(`${userRole} account created successfully!`);

    setTimeout(() => {
      setView('login');
      setFormData({
        firstName: '', lastName: '', email: '', password: '', repeatPassword: '', terms: false
      });
    }, 2000);

  } catch (err) {
    toastService.error(err.message || 'Registration failed');
  } finally {
    setIsLoading(false);
  }
};


  
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