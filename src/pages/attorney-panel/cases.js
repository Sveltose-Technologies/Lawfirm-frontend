import React, { useState } from 'react';
import AttorneyLayout from '../../components/attorney-panel/Layout';

export default function CaseDetails() {
  const [activeTab, setActiveTab] = useState('Open');

  // Mock Data
  const casesData = [
    { 
      id: 'CV-2025-001', type: 'Civil', 
      firstParty: 'Amit Verma', oppParty: 'HDFC Bank', 
      location: 'Mumbai, MH', courtNo: '04', 
      stage: 'Evidence', nextDate: '2025-12-20', 
      notes: 'Transferred from Adv. R.K. Singh', 
      documents: [] 
    },
    { 
      id: 'CR-2025-099', type: 'Criminal', 
      firstParty: 'State', oppParty: 'John Doe', 
      location: 'Delhi, DL', courtNo: '10', 
      stage: 'Hearing', nextDate: '2025-12-24', 
      notes: '-', 
      documents: [] 
    }
  ];

  return (
    <AttorneyLayout>
      
      {/* HEADER: Flex wrap ensures buttons stack on mobile */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
         <h2 className="font-serif fw-bold text-blue m-0">Case Details</h2>
         <div className="d-flex gap-2">
            <button 
                className={`btn px-4 py-2 ${activeTab === 'Open' ? 'btn-primary-custom' : 'btn-outline-secondary'}`}
                onClick={() => setActiveTab('Open')}
            >
                Open Cases
            </button>
            <button 
                className={`btn px-4 py-2 ${activeTab === 'Closed' ? 'btn-primary-custom' : 'btn-outline-secondary'}`}
                onClick={() => setActiveTab('Closed')}
            >
                Closed
            </button>
         </div>
      </div>

      {/* SEARCH FILTERS: Responsive Grid */}
      <div className="card border-0 shadow-sm mb-4 p-3 p-md-4" style={{borderRadius: '8px'}}>
         <h5 className="text-blue mb-3 font-serif"><i className="bi bi-funnel me-2"></i>Search Filters</h5>
         
         <div className="row g-3">
            {/* Mobile: col-12, Tablet: col-6, Desktop: col-3 */}
            <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label text-muted small fw-bold">Case Number</label>
                <input type="text" className="form-control" placeholder="Enter Case No" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label text-muted small fw-bold">Practice Area</label>
                <select className="form-select text-dark">
                    <option>All Areas</option>
                    <option>Corporate</option>
                    <option>Criminal</option>
                </select>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label text-muted small fw-bold">Attorney Name</label>
                <input type="text" className="form-control" placeholder="Search Attorney" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label text-muted small fw-bold">Case Stage</label>
                <select className="form-select text-dark">
                    <option>All Stages</option>
                    <option>Hearing</option>
                    <option>Verdict</option>
                </select>
            </div>
         </div>
         <div className="text-end mt-3">
            <button className="btn btn-primary-custom px-4 w-100 w-md-auto">
                <i className="bi bi-search me-2"></i> Search
            </button>
         </div>
      </div>

      {/* TRANSFER NOTE */}
      <div className="transfer-note mb-4 p-3 rounded d-flex align-items-start">
         <i className="bi bi-exclamation-triangle-fill text-gold fs-4 me-3 flex-shrink-0"></i>
         <p className="m-0 text-dark small pt-1">
            <strong>Transfer Case Note:</strong> If this case is transferred from a previous lawyer or court, please ensure the details are entered in the <strong>Notes</strong> section below.
         </p>
      </div>

      {/* TABLE SECTION: table-responsive adds scroll on mobile */}
      <div className="card border-0 shadow-sm" style={{borderRadius: '8px', overflow: 'hidden'}}>
         <div className="card-header bg-white py-3 border-bottom">
            <h5 className="m-0 font-serif fw-bold text-dark">Case List</h5>
         </div>
         <div className="table-responsive">
            <table className="table table-hover align-middle mb-0 text-nowrap">
               <thead className="table-light">
                  <tr>
                     <th className="py-3 ps-3">Case No</th>
                     <th>Type</th>
                     <th>Parties</th>
                     <th>Location</th>
                     <th>Stage</th>
                     <th>Next Hearing</th>
                     <th>Notes</th>
                     <th className="pe-3 text-end">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {casesData.map((c, i) => (
                     <tr key={i}>
                        <td className="ps-3 fw-bold text-blue">{c.id}</td>
                        <td>{c.type}</td>
                        <td>
                           <div className="fw-bold">{c.firstParty}</div>
                           <div className="small text-muted">vs {c.oppParty}</div>
                        </td>
                        <td>{c.location}</td>
                        <td>
                            <span className="badge bg-info text-dark rounded-pill px-3">{c.stage}</span>
                        </td>
                        <td className="text-danger fw-bold">{c.nextDate}</td>
                        <td style={{minWidth: '200px'}}>
                           <textarea className="form-control form-control-sm bg-light" rows="1" defaultValue={c.notes}></textarea>
                        </td>
                        <td className="pe-3 text-end">
                           <button className="btn btn-sm btn-outline-primary">
                              <i className="bi bi-cloud-upload"></i>
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        /* COLORS & FONTS from Global CSS */
        .text-gold { color: var(--primary-gold); }
        .text-blue { color: var(--primary-blue); }
        .font-serif { font-family: var(--font-serif); }
        .bg-light { background-color: var(--bg-light) !important; }

        /* Custom Button */
        .btn-primary-custom {
            background-color: var(--primary-blue);
            color: var(--text-light);
            border: 1px solid var(--primary-blue);
            font-weight: 600;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        .btn-primary-custom:hover, .btn-primary-custom:active {
            background-color: var(--primary-gold);
            border-color: var(--primary-gold);
            color: var(--text-light);
        }

        /* Inputs */
        .form-control, .form-select {
            border: 1px solid #e0e0e0;
            padding: 10px;
            font-size: 0.95rem;
        }
        .form-control:focus, .form-select:focus {
            border-color: var(--primary-gold);
            box-shadow: 0 0 0 0.2rem rgba(222, 159, 87, 0.25);
        }

        /* Transfer Note */
        .transfer-note {
            background-color: rgba(222, 159, 87, 0.15);
            border-left: 5px solid var(--primary-gold);
        }

        /* Responsive Table adjustments */
        .text-nowrap { white-space: nowrap; }

        /* Mobile specific adjustments */
        @media (max-width: 576px) {
            .btn-primary-custom { width: 100%; margin-bottom: 5px; }
            .d-flex.gap-2 { flex-direction: column; width: 100%; }
        }
      `}</style>
    </AttorneyLayout>
  );
}