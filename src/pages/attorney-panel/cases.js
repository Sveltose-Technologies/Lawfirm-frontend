import React, { useState } from 'react';
import AttorneyLayout from '../../components/layout/AttorneyLayout';

export default function CaseDetails() {
  const [activeTab, setActiveTab] = useState('open');

  return (
    <AttorneyLayout>
      <div className="container-fluid">
        <h2 className="fw-bold text-navy mb-4" style={{ fontFamily: 'serif' }}>Case Details</h2>

        {/* 1. OPEN AND CLOSED TABS */}
        <div className="d-inline-flex bg-white p-1 rounded-pill shadow-sm border mb-4">
          <button 
            className={`btn rounded-pill px-5 btn-sm ${activeTab === 'open' ? 'btn-dark' : 'btn-light'}`}
            onClick={() => setActiveTab('open')}
          >
            Open Cases
          </button>
          <button 
            className={`btn rounded-pill px-5 btn-sm ${activeTab === 'closed' ? 'btn-dark' : 'btn-light'}`}
            onClick={() => setActiveTab('closed')}
          >
            Closed Cases
          </button>
        </div>

        {/* 2. SEARCH DROPDOWNS / FILTERS */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
          <div className="row g-3">
            <div className="col-md-3">
              <label className="small fw-bold mb-1">Case Number</label>
              <input type="text" className="form-control form-control-sm" placeholder="Search Case #" />
            </div>
            <div className="col-md-3">
              <label className="small fw-bold mb-1">Practice Area</label>
              <select className="form-select form-select-sm">
                <option>All Areas</option>
                <option>Criminal</option>
                <option>Civil</option>
                <option>Family Law</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="small fw-bold mb-1">Attorney Name</label>
              <input type="text" className="form-control form-control-sm" placeholder="Name..." />
            </div>
            <div className="col-md-3">
              <label className="small fw-bold mb-1">Case Stage</label>
              <select className="form-select form-select-sm">
                <option>Hearing</option>
                <option>Evidence</option>
                <option>Final Argument</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. SEARCH RESULTS TABLE */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0" style={{ minWidth: '1200px' }}>
              <thead className="bg-light">
                <tr className="small text-uppercase fw-bold text-muted">
                  <th className="p-3">Case Type</th>
                  <th>Case Number</th>
                  <th>First Party (Client)</th>
                  <th>Opposite Party</th>
                  <th>Location (State/City)</th>
                  <th>Court #</th>
                  <th>Stage</th>
                  <th>Next Hearing</th>
                  <th>Docs</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="small">
                <tr>
                  <td className="p-3">Civil</td>
                  <td className="fw-bold text-primary">CV-2025-001</td>
                  <td>Amit Sharma</td>
                  <td>HDFC Bank Ltd.</td>
                  <td>Maharashtra, Mumbai</td>
                  <td>Court Room 4</td>
                  <td><span className="badge bg-navy px-2">Evidence</span></td>
                  <td>20-12-2025</td>
                  <td><i className="bi bi-file-earmark-pdf text-danger fs-5"></i></td>
                  <td><button className="btn btn-sm btn-outline-navy">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row g-4">
          {/* 4. TRANSFERRED CASE DETAILS */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <h6 className="fw-bold text-navy mb-3"><i className="bi bi-arrow-left-right me-2"></i>Transferred Case Info</h6>
              <div className="mb-3">
                <label className="x-small fw-bold text-muted">Previous Lawyer/Court Name</label>
                <input type="text" className="form-control" placeholder="Enter details if transferred..." />
              </div>
              <textarea className="form-control" rows="3" placeholder="Transfer notes..."></textarea>
            </div>
          </div>

          {/* 5. CASE DOCUMENTS - ROLE BASED */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <h6 className="fw-bold text-navy mb-3"><i className="bi bi-cloud-upload me-2"></i>Document Center</h6>
              <p className="x-small text-muted mb-3">Upload documents based on role:</p>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-sm btn-outline-primary"><i className="bi bi-person-badge me-2"></i>Attorney Upload</button>
                <button className="btn btn-sm btn-outline-success"><i className="bi bi-person me-2"></i>Client Upload</button>
                <button className="btn btn-sm btn-outline-warning"><i className="bi bi-building me-2"></i>Office Staff</button>
              </div>
              <div className="mt-4 p-3 border-dashed text-center rounded-3 bg-light">
                 <i className="bi bi-file-earmark-arrow-up fs-2 text-muted"></i>
                 <p className="mb-0 x-small fw-bold">Drag & Drop files here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-navy { background: #002147; }
        .text-navy { color: #002147; }
        .btn-outline-navy { border: 1px solid #002147; color: #002147; }
        .btn-outline-navy:hover { background: #002147; color: #fff; }
        .x-small { font-size: 12px; }
        .border-dashed { border: 2px dashed #ccc; }
      `}</style>
    </AttorneyLayout>
  );
}