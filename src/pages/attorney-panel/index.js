import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AttorneyDashboard() {
  const router = useRouter();

  const theme = {
    navy: '#002147',
    gold: '#de9f57',
    bgLight: '#f4f7fa'
  };

  return (
    <div className="dashboard-page" style={{ backgroundColor: theme.bgLight, minHeight: '100vh' }}>
      <Head>
        <title>Lawstick | Dashboard</title>
      </Head>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="container py-5">
        
        {/* Greeting Section - Large Fonts */}
        <div className="mb-5 pt-5">
<h1 className="fw-bold text-navy display-5">
  Good Morning,{" "}
  <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
    Tasnia Sharin
  </span>
</h1>          <p className="text-muted fs-5">Here&apos; a quick overview of your performance. Let&apos; make today another successful day!</p>
        </div>

        <div className="row g-4">
          
          {/* --- SIDEBAR --- */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <div className="p-4 text-center border-bottom bg-white">
                {/* Circular Image Centered */}
                <div className="mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                    <img 
                      src="/assets/images/attorney1.png" 
                      className="rounded-circle shadow-sm w-100 h-100" 
                      style={{ objectFit: 'cover', border: '4px solid #f8f9fa' }} 
                      alt="avatar" 
                    />
                </div>
                <h4 className="fw-bold mb-1 text-navy">Tasnia Sharin</h4>
                <p className="text-muted mb-0 fs-6">attorney@gmail.com</p>
              </div>

              <div className="p-3 bg-white">
                <div className="nav flex-column sidebar-nav">
                  <a className="nav-link active"><i className="bi bi-grid-fill me-3"></i> Dashboard</a>
                  <a className="nav-link"><i className="bi bi-clock-history me-3"></i> Case Details</a>
                
                  
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

              {/* Stats Cards - EQUAL WIDTH AND HEIGHT */}
              <div className="row g-4 mb-5">
                {[
                  { label: 'Success Cases', val: '0', icon: 'bi-hammer', color: 'text-success', bg: 'bg-success-light' },
                  { label: 'Total Appointments', val: '36', icon: 'bi-hammer', color: 'text-warning', bg: 'bg-warning-light' },
                  { label: 'Total Cases', val: '9', icon: 'bi-hammer', color: 'text-primary', bg: 'bg-primary-light' }
                ].map((item, index) => (
                  <div className="col-md-4" key={index}>
                    {/* h-100 ensures equal height, flex-column + align-items-center ensures centered content */}
                    <div className="card h-100 border shadow-sm rounded-4 p-4 d-flex flex-column align-items-center justify-content-center text-center bg-white">
                        <div className={`stat-icon-circle mb-3 ${item.bg} ${item.color}`}>
                           <i className={`bi ${item.icon} fs-3`}></i>
                        </div>
                        <p className="mb-1 fw-bold text-muted fs-6">{item.label}</p>
                        <h1 className="fw-bold mb-0 display-5 text-navy">{item.val}</h1>
                    </div>
                  </div>
                ))}
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
                 <div className="col-md-4">
                    <div className="border rounded-4 p-4 h-100 text-center d-flex flex-column justify-content-center align-items-center">
                      <h6 className="fw-bold text-navy w-100 text-start mb-auto">Next Appointment's</h6>
                      <i className="bi bi-calendar-x text-light opacity-75" style={{fontSize: '3rem'}}></i>
                      <p className="text-muted fs-6 mt-3">No Appointments</p>
                    </div>
                 </div>
                 <div className="col-md-4">
                    <div className="border rounded-4 p-4 h-100 text-center d-flex flex-column justify-content-center align-items-center">
                      <h6 className="fw-bold text-navy w-100 text-start mb-auto">Message</h6>
                      <i className="bi bi-chat-left-text text-light opacity-75" style={{fontSize: '3rem'}}></i>
                      <p className="text-muted fs-6 mt-3">No Messages</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-navy { color: #002147; }
        
        .sidebar-nav .nav-link { 
          color: #444 !important; font-size: 17px; padding: 12px 20px; 
          border-radius: 10px; transition: 0.3s; margin-bottom: 5px; font-weight: 500;
        }
        .sidebar-nav .nav-link:hover { background: #f8f9fa; color: ${theme.gold} !important; }
        .sidebar-nav .nav-link.active { background: #fcf6ef; color: ${theme.gold} !important; font-weight: bold; }

        .stat-icon-circle { 
          width: 70px; height: 70px; border-radius: 50%; 
          display: flex; align-items: center; justify-content: center; 
        }
        .bg-success-light { background: #e8f7f0; }
        .bg-warning-light { background: #fff8e6; }
        .bg-primary-light { background: #eef4ff; }
      `}</style>
    </div>
  );
}