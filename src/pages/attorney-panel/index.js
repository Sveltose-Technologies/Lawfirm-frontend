import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AttorneyDashboard() {
  const router = useRouter();
  const [showSuccessList, setShowSuccessList] = useState(false); // Success case click ke liye
  const [isValidAccount, setIsValidAccount] = useState(true); // Subscription validation

  const theme = {
    navy: '#002147',
    gold: '#de9f57',
    bgLight: '#f4f7fa'
  };

  return (
    <div className="dashboard-page" style={{ backgroundColor: theme.bgLight, minHeight: '100vh' }}>
      <Head><title>Lawstick | Dashboard</title></Head>

      <div className="container py-5">
        <div className="mb-5 pt-5">
          <h1 className="fw-bold text-navy display-5">
            Good Morning, <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>Tasnia Sharin</span>
          </h1>
          <p className="text-muted fs-5">Here's a quick overview of your performance. Let's make today another successful day!</p>
        </div>

        <div className="row g-4">
          {/* --- SIDEBAR --- */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <div className="p-4 text-center border-bottom bg-white">
                <div className="mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                    <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm w-100 h-100" style={{ objectFit: 'cover', border: '4px solid #f8f9fa' }} alt="avatar" />
                </div>
                <h4 className="fw-bold mb-1 text-navy">Tasnia Sharin</h4>
                <p className="text-muted mb-0 fs-6">attorney@gmail.com</p>
              </div>

              <div className="p-3 bg-white">
                <div className="nav flex-column sidebar-nav">
                  {/* Link add kiya navigation ke liye */}
                  <Link href="/attorney-panel">
                    <a className={`nav-link ${router.pathname === '/attorney-panel' ? 'active' : ''}`}><i className="bi bi-grid-fill me-3"></i> Dashboard</a>
                  </Link>
                  <Link href="/attorney-panel/cases">
                    <a className={`nav-link ${router.pathname === '/attorney-panel/cases' ? 'active' : ''}`}><i className="bi bi-clock-history me-3"></i> Case Details</a>
                  </Link>
                  
                  <div className="mt-4 pt-4 border-top">
                    <a className="nav-link"><i className="bi bi-info-circle me-3"></i> Help & Info</a>
                    <a className="nav-link text-danger"><i className="bi bi-box-arrow-right me-3"></i> Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- DASHBOARD MAIN CONTENT --- */}
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white h-100">
              <h2 className="fw-bold text-navy mb-5" style={{fontFamily:'serif'}}>Dashboard</h2>

              {/* Stats Cards */}
              <div className="row g-4 mb-5">
                {/* SUCCESS CASE CLICK ACTION */}
                <div className="col-md-4" onClick={() => setShowSuccessList(!showSuccessList)} style={{cursor: 'pointer'}}>
                    <div className="card h-100 border shadow-sm rounded-4 p-4 d-flex flex-column align-items-center justify-content-center text-center bg-white hover-card">
                        <div className="stat-icon-circle mb-3 bg-success-light text-success">
                           <i className="bi bi-hammer fs-3"></i>
                        </div>
                        <p className="mb-1 fw-bold text-muted fs-6">Success Cases</p>
                        <h1 className="fw-bold mb-0 display-5 text-navy">0</h1>
                        {showSuccessList && <small className="text-success mt-2 fw-bold animate__animated animate__fadeIn">Loading Details...</small>}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border shadow-sm rounded-4 p-4 d-flex flex-column align-items-center justify-content-center text-center bg-white">
                        <div className="stat-icon-circle mb-3 bg-warning-light text-warning">
                           <i className="bi bi-hammer fs-3"></i>
                        </div>
                        <p className="mb-1 fw-bold text-muted fs-6">Total Appointments</p>
                        <h1 className="fw-bold mb-0 display-5 text-navy">36</h1>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border shadow-sm rounded-4 p-4 d-flex flex-column align-items-center justify-content-center text-center bg-white">
                        <div className="stat-icon-circle mb-3 bg-primary-light text-primary">
                           <i className="bi bi-hammer fs-3"></i>
                        </div>
                        <p className="mb-1 fw-bold text-muted fs-6">Total Cases</p>
                        <h1 className="fw-bold mb-0 display-5 text-navy">9</h1>
                    </div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="row g-4 mb-5">
                <div className="col-md-6">
                   <div className="card border rounded-4 p-4 h-100 shadow-none">
                      <h5 className="fw-bold text-navy mb-4">Case Overview</h5>
                      <div className="d-flex justify-content-between text-center mb-4">
                        <div><span className="d-block text-warning fw-bold fs-6">● 22.22%</span><span className="text-muted small">Pending</span></div>
                        <div><span className="d-block text-success fw-bold fs-6">● 0.00%</span><span className="text-muted small">Success</span></div>
                        <div><span className="d-block text-primary fw-bold fs-6">● 11.11%</span><span className="text-muted small">Ongoing</span></div>
                      </div>
                      <div className="gauge-box mx-auto text-center pt-2">
                         <svg viewBox="0 0 100 50" width="260">
                            <path d="M 10 45 A 40 40 0 0 1 90 45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                            <path d="M 20 45 A 30 30 0 0 1 80 45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                            <path d="M 10 45 A 40 40 0 0 1 30 15" fill="none" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />
                            <path d="M 20 45 A 30 30 0 0 1 35 30" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" />
                         </svg>
                      </div>
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="card border rounded-4 p-4 h-100 shadow-none d-flex flex-column align-items-center justify-content-center text-center">
                      <h5 className="fw-bold text-navy w-100 text-start mb-4">Upcoming Appointment</h5>
                      <i className="bi bi-file-earmark-text display-1 text-light opacity-50"></i>
                      <p className="text-muted fs-5 mt-3">No Upcoming Appointment</p>
                   </div>
                </div>
              </div>

              {/* Bottom Grid */}
              <div className="row g-3">
                 <div className="col-md-4">
                    <div className="border rounded-4 p-4 h-100">
                      <h6 className="fw-bold text-navy mb-4">Clients</h6>
                      <div className="d-flex align-items-center mb-3">
                        <img src="https://i.pravatar.cc/150?u=a" width="40" className="rounded-circle me-3"/> 
                        <div className="progress w-100" style={{height:'8px'}}><div className="progress-bar" style={{width:'70%', backgroundColor: theme.navy}}></div></div>
                        <span className="ms-3 fw-bold fs-5">8</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <img src="https://i.pravatar.cc/150?u=b" width="40" className="rounded-circle me-3"/> 
                        <div className="progress w-100" style={{height:'8px'}}><div className="progress-bar" style={{width:'20%', backgroundColor: theme.navy}}></div></div>
                        <span className="ms-3 fw-bold fs-5">1</span>
                      </div>
                    </div>
                 </div>
                 <div className="col-md-4"><div className="border rounded-4 p-4 h-100 text-center"><h6 className="fw-bold text-navy text-start mb-auto">Next Appointment's</h6><i className="bi bi-calendar-x text-light opacity-75" style={{fontSize: '3rem'}}></i><p className="text-muted fs-6">No Appointments</p></div></div>
                 <div className="col-md-4"><div className="border rounded-4 p-4 h-100 text-center"><h6 className="fw-bold text-navy text-start mb-auto">Message</h6><i className="bi bi-chat-left-text text-light opacity-75" style={{fontSize: '3rem'}}></i><p className="text-muted fs-6">No Messages</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-navy { color: #002147; }
        .sidebar-nav .nav-link { 
          color: #444 !important; font-size: 17px; padding: 12px 20px; 
          border-radius: 10px; transition: 0.3s; margin-bottom: 5px; font-weight: 500; text-decoration: none; display: block;
        }
        .sidebar-nav .nav-link:hover { background: #f8f9fa; color: ${theme.gold} !important; }
        .sidebar-nav .nav-link.active { background: #fcf6ef; color: ${theme.gold} !important; font-weight: bold; }
        .stat-icon-circle { width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .bg-success-light { background: #e8f7f0; }
        .bg-warning-light { background: #fff8e6; }
        .bg-primary-light { background: #eef4ff; }
        .hover-card:hover { transform: translateY(-5px); transition: 0.3s; }
      `}</style>
    </div>
  );
}