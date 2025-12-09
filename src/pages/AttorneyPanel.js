'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function AttorneyPanel() {
  // --- States ---
  const [view, setView] = useState('login'); // 'login', 'signup1', 'signup2'
  const [activeTab, setActiveTab] = useState('Attorney'); // Default tab Attorney
  
  // Form States
  const [email, setEmail] = useState('');
  const [hasFamilyPractice, setHasFamilyPractice] = useState(false); // For Family Member Logic
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // --- Helpers ---
  // Generate Years for Passing Year Dropdown (1980 - 2025)
  const years = Array.from(new Array(46), (val, index) => 2025 - index);

  // --- Actions ---

  // 1. Login Action
  const handleLogin = (e) => {
    e.preventDefault();
    // Excel Validation: "Email ID and Password invalid validations" (Simulated)
    alert("Attorney Login Successful! Navigating to Dashboard...");
  };

  // 2. Sign Up Step 1 Action
  const handleSignUpStep1 = (e) => {
    e.preventDefault();
    setError('');

    // Excel Action: "Click Sign Up button with existing email Id should get an error"
    if (email === 'exist@lawfirm.com') {
      setError('Error: This Email ID is already registered.');
      return;
    }

    // Excel Action: "Navigate to Form 2"
    setView('signup2');
    window.scrollTo(0, 0); // Scroll to top for new form
  };

  // 3. Final Profile Update Action
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    
    // Excel Action: Provide information message
    setSuccessMsg('Please check your email to activate your account or contact us.');

    // Excel Action: Auto send email & Generate Attorney ID
    setTimeout(() => {
      alert('Profile Created Successfully! Auto Generated Attorney ID: ATT-2025-8899');
      setSuccessMsg('');
      setView('login');
      setEmail('');
    }, 4000);
  };

  return (
    <>
      {/* Bootstrap CDN for styling */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        .bg-navy { background-color: #002b5c; color: white; }
        .text-navy { color: #002b5c; }
        .btn-navy { background-color: #002b5c; color: white; }
        .btn-navy:hover { background-color: #001f42; color: white; }
        .nav-link.active { border-bottom: 3px solid #cfa144 !important; color: #002b5c !important; font-weight: bold; }
        .nav-link { color: #666; cursor: pointer; }
        .form-section-title { color: #002b5c; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 15px; margin-top: 20px; font-weight: 600; font-size: 1.1rem; }
        .small-label { font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; }
      `}</style>

      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
        
        {/* Container Logic: Wider for Profile Form */}
        <div className="card shadow border-0" style={{ maxWidth: view === 'signup2' ? '900px' : '450px', width: '100%' }}>
          
          {/* Tabs */}
          <div className="card-header bg-white border-bottom-0 p-0">
            <ul className="nav nav-tabs nav-fill border-bottom">
              <li className="nav-item"><a className="nav-link" onClick={() => alert('Redirect to Client Panel')}>Client</a></li>
              <li className="nav-item"><a className={`nav-link ${activeTab === 'Attorney' ? 'active' : ''}`}>Attorney</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => alert('Redirect to Admin Panel')}>Admin</a></li>
            </ul>
          </div>

          <div className="card-body p-4">

            {/* ===================== VIEW 1: LOGIN ===================== */}
            {view === 'login' && (
              <div>
                <h3 className="text-center text-navy mb-1" style={{fontFamily: 'serif'}}>Attorney Portal</h3>
                <p className="text-center text-muted mb-4">Sign In</p>

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="small-label">Email ID <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" placeholder="attorney@lawfirm.com" required />
                  </div>
                  <div className="mb-3">
                    <label className="small-label">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" required />
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                        {/* Optional Remember Me */}
                    </div>
                    <a href="#" className="text-decoration-none small text-navy" onClick={() => alert('Navigate to Forgot Password Form')}>Forgot Password?</a>
                  </div>

                  <button type="submit" className="btn btn-navy w-100 py-2 fw-bold">Log In</button>

                  <div className="text-center mt-3">
                    <span className="small text-muted">No Account Yet? </span>
                    <a href="#" className="text-navy fw-bold text-decoration-none" onClick={() => setView('signup1')}>Sign Up</a>
                  </div>
                </form>
              </div>
            )}

            {/* ===================== VIEW 2: SIGN UP STEP 1 ===================== */}
            {view === 'signup1' && (
              <div>
                <h3 className="text-center text-navy mb-1" style={{fontFamily: 'serif'}}>Sign Up</h3>
                <p className="text-center text-muted mb-4">Create Attorney Account</p>
                
                {error && <div className="alert alert-danger p-2 small text-center">{error}</div>}

                <form onSubmit={handleSignUpStep1}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="small-label">First Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Last Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="small-label">Email ID <span className="text-danger">*</span></label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        required 
                    />
                    <small className="text-muted" style={{fontSize:'11px'}}>Test Error: Enter 'exist@lawfirm.com'</small>
                  </div>

                  <div className="mb-3">
                    <label className="small-label">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" required />
                    <small className="text-muted" style={{fontSize:'11px'}}>Must contain 1 uppercase, 1 number.</small>
                  </div>

                  <div className="mb-3">
                    <label className="small-label">Repeat Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="small-label">Captcha <span className="text-danger">*</span></label>
                    <div className="bg-light text-center border p-2 mb-2 fw-bold" style={{letterSpacing:'4px'}}>X 7 K 9 B</div>
                    <input type="text" className="form-control" placeholder="Enter Captcha" required />
                  </div>

                  <button type="submit" className="btn btn-navy w-100 py-2 fw-bold">Sign Up</button>
                  <div className="text-center mt-3">
                    <span className="small text-muted">Already Have An Account? </span>
                    <a href="#" className="text-navy fw-bold text-decoration-none" onClick={() => setView('login')}>Sign In</a>
                  </div>
                </form>
              </div>
            )}

            {/* ===================== VIEW 3: SIGN UP STEP 2 (PROFILE) ===================== */}
            {view === 'signup2' && (
              <div>
                <h3 className="text-center text-navy mb-1" style={{fontFamily: 'serif'}}>Update Profile</h3>
                <p className="text-center text-muted mb-4">Complete your Professional Profile</p>

                {successMsg && <div className="alert alert-success text-center">{successMsg}</div>}

                <form onSubmit={handleFinalSubmit}>
                  
                  {/* --- 1. Address Section --- */}
                  <h5 className="form-section-title">Personal & Address</h5>
                  <div className="row">
                    <div className="col-12 mb-3">
                        <label className="small-label">Street Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="small-label">Apt/Block/Unit <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="small-label">City <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="small-label">State <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Country <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Zip/Pin Code <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Phone Number <span className="text-danger">*</span></label>
                        <div className="input-group">
                            <select className="form-select" style={{maxWidth:'90px'}} required>
                                <option>Cell</option>
                                <option>Home</option>
                                <option>Office</option>
                            </select>
                            <input type="number" className="form-control" placeholder="Enter Number" required />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Date of Birth <span className="text-danger">*</span></label>
                        <input type="date" className="form-control" required />
                    </div>
                    <div className="col-12 mb-3">
                        <label className="small-label">Profile Image (Selfie/Photo)</label>
                        <input type="file" className="form-control" accept="image/*" />
                    </div>
                  </div>

                  {/* --- 2. Education & Professional --- */}
                  <h5 className="form-section-title">Professional Information</h5>
                  
                  <div className="mb-3">
                    <label className="small-label">Services Offered (Select Multiple) <span className="text-danger">*</span></label>
                    <select className="form-select" multiple size="3" required>
                        <option>Criminal Law</option>
                        <option>Civil Litigation</option>
                        <option>Corporate Law</option>
                        <option>Family Law</option>
                        <option>Intellectual Property</option>
                    </select>
                    <small className="text-muted" style={{fontSize:'10px'}}>Hold Ctrl (Windows) or Cmd (Mac) to select multiple</small>
                  </div>

                  <div className="row">
                    <div className="col-md-8 mb-3">
                        <label className="small-label">Law College / University Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="small-label">Year of Passing <span className="text-danger">*</span></label>
                        <select className="form-select" required>
                            <option value="">Select Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                    <div className="col-12 mb-3">
                        <label className="small-label">Upload Degree Certificates (Marklist & Degree) <span className="text-danger">*</span></label>
                        <input type="file" className="form-control" multiple required />
                    </div>
                  </div>

                  {/* Previous Experience */}
                  <div className="row bg-light p-2 rounded mb-3 mx-1 border">
                     <div className="col-md-8 mb-2">
                        <label className="small-label">Previous Firm / Court Name</label>
                        <input type="text" className="form-control" required />
                     </div>
                     <div className="col-md-4 mb-2">
                        <label className="small-label">Years of Experience</label>
                        <input type="number" className="form-control" required />
                     </div>
                  </div>

                  {/* Bar Council Info */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Bar Council of India No. <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Upload BCI ID Card <span className="text-danger">*</span></label>
                        <input type="file" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Bar Council of State ID <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="small-label">Upload State ID Card <span className="text-danger">*</span></label>
                        <input type="file" className="form-control" required />
                    </div>
                  </div>

                  {/* --- 3. Family Logic --- */}
                  <h5 className="form-section-title">Conflict of Interest Check</h5>
                  <div className="mb-3">
                    <label className="small-label d-block">Is any immediate family member doing law practice? <span className="text-danger">*</span></label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="familyRadio" id="famYes" value="yes" onChange={() => setHasFamilyPractice(true)} />
                        <label className="form-check-label" htmlFor="famYes">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="familyRadio" id="famNo" value="no" defaultChecked onChange={() => setHasFamilyPractice(false)} />
                        <label className="form-check-label" htmlFor="famNo">No</label>
                    </div>
                  </div>

                  {/* Conditional Fields for Family */}
                  {hasFamilyPractice && (
                      <div className="p-3 mb-3 border rounded" style={{backgroundColor: '#f9f9f9'}}>
                          <h6 className="text-navy small fw-bold">Family Member Details</h6>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                                <label className="small-label">Name (First & Last)</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="small-label">Practice Areas</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="small-label">Court Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="small-label">City</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-2">
                                <label className="small-label">State</label>
                                <input type="text" className="form-control" />
                            </div>
                          </div>
                      </div>
                  )}

                  {/* --- 4. KYC & Resume --- */}
                  <h5 className="form-section-title">KYC Documents & Resume</h5>
                  <div className="row">
                     <div className="col-md-6 mb-3">
                        <label className="small-label">Proof of Identity (PAN/Passport/DL/Aadhaar) <span className="text-danger">*</span></label>
                        <input type="file" className="form-control" required />
                     </div>
                     <div className="col-md-6 mb-3">
                        <label className="small-label">Proof of Address (Utility Bill/Rent Agmt) <span className="text-danger">*</span></label>
                        <input type="file" className="form-control" required />
                     </div>
                     <div className="col-12 mb-3">
                        <label className="small-label">Upload Resume <span className="text-danger">*</span></label>
                        <input type="file" className="form-control" required />
                     </div>
                  </div>

                  {/* Terms */}
                  <div className="form-check mb-4 mt-4">
                    <input className="form-check-input" type="checkbox" id="termsCheck" required />
                    <label className="form-check-label small" htmlFor="termsCheck">
                      I accept the Terms and Conditions
                    </label>
                  </div>

                  <button type="submit" className="btn btn-navy w-100 py-3 fw-bold fs-5">Save & Submit Profile</button>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}