import React from 'react';
// IMPORT PATH FIX: Agar Layout components folder me hai to ye path use karein
import AttorneyLayout from '../../components/attorney-panel/Layout';

export default function Dashboard() {
  
  const handleSuccessClick = () => {
    // Ye tab chalega jab Success Cases card par click hoga
    alert("Displaying All Success Cases Details...");
  };

  return (
    <AttorneyLayout>
      <h2 className="fw-bold mb-4 font-serif text-dark">Dashboard</h2>
      
      <div className="row g-4">
        
        {/* Success Cases Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div 
            className="card border-0 shadow-sm bg-success text-white p-4 h-100" 
            onClick={handleSuccessClick} 
            style={{cursor: 'pointer', transition: 'transform 0.2s'}}
          >
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className="text-white-50 text-uppercase fw-bold mb-3">Success Cases</h5>
                    <h1 className="display-3 fw-bold mb-0">85</h1>
                </div>
                <i className="bi bi-check-circle-fill fs-1 text-white-50"></i>
            </div>
            
            <div className="mt-4 pt-3 border-top border-white-50">
                <span className="badge bg-white text-success rounded-pill px-3 py-2">
                    Click to View Details <i className="bi bi-arrow-right ms-1"></i>
                </span>
            </div>
          </div>
        </div>

        {/* Total Cases Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm bg-white p-4 h-100">
             <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className="text-muted text-uppercase fw-bold mb-3">Total Cases</h5>
                    <h1 className="display-3 fw-bold text-dark mb-0">120</h1>
                </div>
                <i className="bi bi-briefcase-fill fs-1 text-muted opacity-25"></i>
            </div>
             <div className="mt-4 pt-3 border-top">
                <small className="text-muted">Updated Just Now</small>
            </div>
          </div>
        </div>

         {/* Pending Cases Card */}
         <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm bg-warning text-dark p-4 h-100">
             <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className="text-uppercase fw-bold mb-3" style={{opacity: 0.7}}>Pending</h5>
                    <h1 className="display-3 fw-bold mb-0">35</h1>
                </div>
                <i className="bi bi-hourglass-split fs-1 text-dark opacity-25"></i>
            </div>
             <div className="mt-4 pt-3 border-top border-dark-subtle">
                <small>Requires Attention</small>
            </div>
          </div>
        </div>

      </div>
    </AttorneyLayout>
  );
}