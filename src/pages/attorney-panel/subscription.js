import React, { useState } from 'react';
import AttorneyLayout from '../../components/layout/AttorneyLayout'
export default function Dashboard() {
  const [showSuccessList, setShowSuccessList] = useState(false);

  const successCasesData = [
    { id: '1', name: 'Land Dispute - Sharma vs Gupta', result: 'Won (2024)', date: '12 Dec 2024' },
    { id: '2', name: 'Criminal - State vs Rahul', result: 'Acquitted', date: '05 Nov 2024' }
  ];

  return (
    <AttorneyLayout>
      <div className="mb-5">
        <h1 className="fw-bold text-navy display-5">Good Morning, Tasnia</h1>
        <p className="text-muted fs-5">Here your performance overview.</p>
      </div>

      <div className="row g-4 mb-5">
        {/* Success Cases Card - CLICKABLE */}
        <div className="col-md-4" onClick={() => setShowSuccessList(!showSuccessList)} style={{cursor: 'pointer'}}>
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-success-light hover-up">
            <div className="stat-icon-circle bg-success mb-3 mx-auto">
              <i className="bi bi-hammer fs-3 text-white"></i>
            </div>
            <p className="mb-1 fw-bold text-muted">Success Cases</p>
            <h1 className="fw-bold mb-0 text-navy">2</h1>
            <small className="text-success fw-bold">Click to view details</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-white">
            <div className="stat-icon-circle bg-warning mb-3 mx-auto text-white"><i className="bi bi-calendar-check fs-3"></i></div>
            <p className="mb-1 fw-bold text-muted">Appointments</p>
            <h1 className="fw-bold mb-0 text-navy">36</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-white">
            <div className="stat-icon-circle bg-primary mb-3 mx-auto text-white"><i className="bi bi-briefcase fs-3"></i></div>
            <p className="mb-1 fw-bold text-muted">Total Cases</p>
            <h1 className="fw-bold mb-0 text-navy">9</h1>
          </div>
        </div>
      </div>

      {/* SUCCESS CASES DETAILS TABLE - Visible only on click */}
      {showSuccessList && (
        <div className="card border-0 shadow rounded-4 p-4 mt-4 animate__animated animate__fadeIn">
          <div className="d-flex justify-content-between align-items-center mb-3">
             <h5 className="fw-bold text-navy mb-0">Success Case Records</h5>
             <button className="btn-close" onClick={() => setShowSuccessList(false)}></button>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="bg-light">
                <tr>
                  <th>Case ID</th>
                  <th>Title</th>
                  <th>Outcome</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {successCasesData.map((item) => (
                  <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td className="fw-bold">{item.name}</td>
                    <td><span className="badge bg-success">{item.result}</span></td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <style jsx>{`
        .text-navy { color: #002147; }
        .bg-success-light { background: #e8f7f0; border: 2px solid #28a745 !important; }
        .stat-icon-circle { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .hover-up { transition: 0.3s; }
        .hover-up:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
      `}</style>
    </AttorneyLayout>
  );
}