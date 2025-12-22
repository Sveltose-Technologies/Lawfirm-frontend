import React from 'react';

export default function Dashboard() {
  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      
      {/* Welcome Title - Large & Bold */}
      <div className="row mb-5 pt-3">
        <div className="col-12">
          <h2 className="welcome-text fw-bold text-navy mb-2">
            Welcome Back, Adv. Amit
          </h2>
          <p className="text-muted lead fw-medium">Here's what's happening with your cases today.</p>
          <div className="accent-bar"></div>
        </div>
      </div>
      
      {/* Stats Cards - Compact & Responsive */}
      <div className="row g-4">
        {/* Success Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="stat-card bg-success text-white shadow-lg border-0">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-uppercase fw-bold opacity-75 letter-spacing-1">Success Cases</small>
                <h2 className="display-3 fw-bold mb-0">85</h2>
              </div>
              <i className="bi bi-patch-check-fill display-3 opacity-25"></i>
            </div>
            <div className="mt-4 pt-2 border-top border-white border-opacity-10 d-flex justify-content-between">
              <small className="fw-bold cursor-pointer">View All Cases</small>
              <i className="bi bi-arrow-right-short fs-4"></i>
            </div>
          </div>
        </div>

        {/* Total Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="stat-card bg-white text-navy shadow-sm border">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-muted text-uppercase fw-bold letter-spacing-1">Total Cases</small>
                <h2 className="display-3 fw-bold mb-0">120</h2>
              </div>
              <i className="bi bi-briefcase-fill display-3 text-navy opacity-10"></i>
            </div>
            <div className="mt-4 pt-2 border-top">
              <small className="text-success fw-bold"><i className="bi bi-graph-up-arrow me-1"></i> +12.5% <span className="text-muted fw-normal">since last month</span></small>
            </div>
          </div>
        </div>

        {/* Pending Card */}
        <div className="col-12 col-lg-4">
          <div className="stat-card bg-warning text-dark shadow-sm border-0">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-dark opacity-75 text-uppercase fw-bold letter-spacing-1">Pending Action</small>
                <h2 className="display-3 fw-bold mb-0">35</h2>
              </div>
              <i className="bi bi-clock-history display-3 opacity-25"></i>
            </div>
            <div className="mt-4 pt-2 border-top border-dark border-opacity-10">
              <small className="fw-bold">12 cases need urgent attention</small>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-navy { color: #002147; }
        .welcome-text { font-size: 3.2rem; font-family: 'Playfair Display', serif; }
        .accent-bar { width: 80px; height: 5px; background: #de9f57; border-radius: 10px; margin-top: 10px; }
        
        .stat-card {
          padding: 30px;
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        .stat-card:hover { transform: translateY(-10px); }
        .letter-spacing-1 { letter-spacing: 1px; font-size: 11px; }

        @media (max-width: 991px) {
          .welcome-text { font-size: 2.2rem; }
          .display-3 { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
}