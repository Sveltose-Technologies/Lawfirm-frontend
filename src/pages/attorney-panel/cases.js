// import React, { useState } from 'react';
// import AttorneyLayout from '../../components/layout/AttorneyLayout';

// export default function CaseDetails() {
//   const [activeTab, setActiveTab] = useState('open');

//   return (
//     <AttorneyLayout>
//       <div className="container-fluid">
//         <h2 className="fw-bold text-navy mb-4" style={{ fontFamily: 'serif' }}>Case Details</h2>

//         {/* 1. OPEN AND CLOSED TABS */}
//         <div className="d-inline-flex bg-white p-1 rounded-pill shadow-sm border mb-4">
//           <button 
//             className={`btn rounded-pill px-5 btn-sm ${activeTab === 'open' ? 'btn-dark' : 'btn-light'}`}
//             onClick={() => setActiveTab('open')}
//           >
//             Open Cases
//           </button>
//           <button 
//             className={`btn rounded-pill px-5 btn-sm ${activeTab === 'closed' ? 'btn-dark' : 'btn-light'}`}
//             onClick={() => setActiveTab('closed')}
//           >
//             Closed Cases
//           </button>
//         </div>

//         {/* 2. SEARCH DROPDOWNS / FILTERS */}
//         <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
//           <div className="row g-3">
//             <div className="col-md-3">
//               <label className="small fw-bold mb-1">Case Number</label>
//               <input type="text" className="form-control form-control-sm" placeholder="Search Case #" />
//             </div>
//             <div className="col-md-3">
//               <label className="small fw-bold mb-1">Practice Area</label>
//               <select className="form-select form-select-sm">
//                 <option>All Areas</option>
//                 <option>Criminal</option>
//                 <option>Civil</option>
//                 <option>Family Law</option>
//               </select>
//             </div>
//             <div className="col-md-3">
//               <label className="small fw-bold mb-1">Attorney Name</label>
//               <input type="text" className="form-control form-control-sm" placeholder="Name..." />
//             </div>
//             <div className="col-md-3">
//               <label className="small fw-bold mb-1">Case Stage</label>
//               <select className="form-select form-select-sm">
//                 <option>Hearing</option>
//                 <option>Evidence</option>
//                 <option>Final Argument</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* 3. SEARCH RESULTS TABLE */}
//         <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5">
//           <div className="table-responsive">
//             <table className="table table-hover align-middle mb-0" style={{ minWidth: '1200px' }}>
//               <thead className="bg-light">
//                 <tr className="small text-uppercase fw-bold text-muted">
//                   <th className="p-3">Case Type</th>
//                   <th>Case Number</th>
//                   <th>First Party (Client)</th>
//                   <th>Opposite Party</th>
//                   <th>Location (State/City)</th>
//                   <th>Court #</th>
//                   <th>Stage</th>
//                   <th>Next Hearing</th>
//                   <th>Docs</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="small">
//                 <tr>
//                   <td className="p-3">Civil</td>
//                   <td className="fw-bold text-primary">CV-2025-001</td>
//                   <td>Amit Sharma</td>
//                   <td>HDFC Bank Ltd.</td>
//                   <td>Maharashtra, Mumbai</td>
//                   <td>Court Room 4</td>
//                   <td><span className="badge bg-navy px-2">Evidence</span></td>
//                   <td>20-12-2025</td>
//                   <td><i className="bi bi-file-earmark-pdf text-danger fs-5"></i></td>
//                   <td><button className="btn btn-sm btn-outline-navy">View</button></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="row g-4">
//           {/* 4. TRANSFERRED CASE DETAILS */}
//           <div className="col-md-6">
//             <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
//               <h6 className="fw-bold text-navy mb-3"><i className="bi bi-arrow-left-right me-2"></i>Transferred Case Info</h6>
//               <div className="mb-3">
//                 <label className="x-small fw-bold text-muted">Previous Lawyer/Court Name</label>
//                 <input type="text" className="form-control" placeholder="Enter details if transferred..." />
//               </div>
//               <textarea className="form-control" rows="3" placeholder="Transfer notes..."></textarea>
//             </div>
//           </div>

//           {/* 5. CASE DOCUMENTS - ROLE BASED */}
//           <div className="col-md-6">
//             <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
//               <h6 className="fw-bold text-navy mb-3"><i className="bi bi-cloud-upload me-2"></i>Document Center</h6>
//               <p className="x-small text-muted mb-3">Upload documents based on role:</p>
//               <div className="d-flex flex-wrap gap-2">
//                 <button className="btn btn-sm btn-outline-primary"><i className="bi bi-person-badge me-2"></i>Attorney Upload</button>
//                 <button className="btn btn-sm btn-outline-success"><i className="bi bi-person me-2"></i>Client Upload</button>
//                 <button className="btn btn-sm btn-outline-warning"><i className="bi bi-building me-2"></i>Office Staff</button>
//               </div>
//               <div className="mt-4 p-3 border-dashed text-center rounded-3 bg-light">
//                  <i className="bi bi-file-earmark-arrow-up fs-2 text-muted"></i>
//                  <p className="mb-0 x-small fw-bold">Drag & Drop files here</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-navy { background: #002147; }
//         .text-navy { color: #002147; }
//         .btn-outline-navy { border: 1px solid #002147; color: #002147; }
//         .btn-outline-navy:hover { background: #002147; color: #fff; }
//         .x-small { font-size: 12px; }
//         .border-dashed { border: 2px dashed #ccc; }
//       `}</style>
//     </AttorneyLayout>
//   );
// }
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CaseDetails() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('open');

  const theme = {
    navy: '#002147',
    gold: '#de9f57',
    bgLight: '#f4f7fa'
  };

  return (
    <div className="dashboard-page" style={{ backgroundColor: theme.bgLight, minHeight: '100vh' }}>
      <Head><title>Lawstick | Case Details</title></Head>

      <div className="container py-5">
        <div className="mb-5 pt-5">
          <h1 className="fw-bold text-navy display-5">Case Details</h1>
          <p className="text-muted fs-5">Manage your legal records and documents.</p>
        </div>

        <div className="row g-4">
          {/* --- SIDEBAR (Same Structure) --- */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="p-4 text-center border-bottom bg-white">
                <div className="mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                    <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm w-100 h-100" style={{ objectFit: 'cover', border: '4px solid #f8f9fa' }} alt="avatar" />
                </div>
                <h4 className="fw-bold mb-1 text-navy">Tasnia Sharin</h4>
              </div>
              <div className="p-3 bg-white">
                <div className="nav flex-column sidebar-nav">
                  <Link href="/attorney-panel"><a className={`nav-link ${router.pathname === '/attorney-panel' ? 'active' : ''}`}><i className="bi bi-grid-fill me-3"></i> Dashboard</a></Link>
                  <Link href="/attorney-panel/cases"><a className={`nav-link ${router.pathname === '/attorney-panel/cases' ? 'active' : ''}`}><i className="bi bi-clock-history me-3"></i> Case Details</a></Link>
                </div>
              </div>
            </div>
          </div>

          {/* --- CASE DETAILS CONTENT --- */}
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <h3 className="fw-bold text-navy mb-5" style={{fontFamily:'serif'}}>Case Details</h3>

              {/* 1. Open and Closed Tabs */}
              <div className="d-flex gap-3 mb-4">
                <button className={`btn rounded-pill px-4 ${activeTab === 'open' ? 'btn-navy' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('open')}>Open Cases</button>
                <button className={`btn rounded-pill px-4 ${activeTab === 'closed' ? 'btn-navy' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('closed')}>Closed Cases</button>
              </div>

              {/* 2. Search Dropdowns */}
              <div className="row g-3 mb-5 p-4 rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="col-md-3">
                  <label className="form-label fw-bold">Case Number</label>
                  <input type="text" className="form-control" placeholder="Search #" />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-bold">Practice Area</label>
                  <select className="form-select"><option>All Areas</option></select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-bold">Attorney Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-bold">Case Stage</label>
                  <select className="form-select"><option>All Stages</option></select>
                </div>
              </div>

              {/* 3. Search Results Table */}
              <div className="table-responsive mb-5">
                <table className="table table-hover align-middle border">
                  <thead style={{ backgroundColor: '#fcf6ef' }}>
                    <tr className="text-navy small">
                      <th>Case Type</th><th>Case Number</th><th>First Party</th><th>Opposit Party</th><th>State</th><th>City</th><th>Court Number</th><th>Stage</th><th>Next Date</th><th>Notes</th><th>Docs</th>
                    </tr>
                  </thead>
                  <tbody className="small text-muted">
                    <tr><td colSpan="11" className="text-center py-4">No records found</td></tr>
                  </tbody>
                </table>
              </div>

              {/* 4. Case Transfer Section */}
              <div className="mb-5 p-4 border rounded-4" style={{borderStyle: 'dashed'}}>
                <h5 className="fw-bold text-navy mb-3">Case Transfer Details</h5>
                <p className="small text-muted mb-3">If case transfered from previous lawer/court name, Please enter the details</p>
                <div className="row g-3">
                  <div className="col-md-6"><input type="text" className="form-control" placeholder="Previous Lawyer Name" /></div>
                  <div className="col-md-6"><input type="text" className="form-control" placeholder="Previous Court Name" /></div>
                </div>
              </div>

              {/* 5. Case Documents Upload */}
              <div>
                <h5 className="fw-bold text-navy mb-4">Case Documents - Upload</h5>
                <div className="row g-4 text-center">
                  {['Attorney', 'Client', 'Office Staff'].map((user, idx) => (
                    <div className="col-md-4" key={idx}>
                      <div className="p-3 border rounded-4">
                        <i className="bi bi-cloud-arrow-up fs-2 text-gold"></i>
                        <p className="fw-bold small mt-2">{user} Upload</p>
                        <input type="file" className="form-control form-control-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-navy { color: #002147; }
        .btn-navy { background: #002147; color: white; }
        .sidebar-nav .nav-link { color: #444 !important; font-size: 17px; padding: 12px 20px; border-radius: 10px; transition: 0.3s; margin-bottom: 5px; font-weight: 500; text-decoration: none; display: block; }
        .sidebar-nav .nav-link:hover { background: #f8f9fa; color: ${theme.gold} !important; }
        .sidebar-nav .nav-link.active { background: #fcf6ef; color: ${theme.gold} !important; font-weight: bold; }
        .text-gold { color: #de9f57; }
      `}</style>
    </div>
  );
}