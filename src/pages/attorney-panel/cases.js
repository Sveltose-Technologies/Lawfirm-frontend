

// import React, { useState } from 'react';
// import Head from 'next/head';
// import AttorneyLayout from '../../components/layout/AttorneyLayout';

// export default function CaseDetails() {
//   const [activeTab, setActiveTab] = useState('open');

//   return (
//     <AttorneyLayout>
//       <Head><title>Lawstick | Case Details</title></Head>

//       <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
//         <h3 className="fw-bold mb-5" style={{fontFamily:'serif', color: '#002147'}}>Case Details</h3>

//         {/* 1. Open and Closed Tabs */}
//         <div className="d-flex gap-3 mb-4">
//           <button className={`btn rounded-pill px-4 ${activeTab === 'open' ? 'btn-dark' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('open')} style={{backgroundColor: activeTab === 'open' ? '#002147' : ''}}>Open Cases</button>
//           <button className={`btn rounded-pill px-4 ${activeTab === 'closed' ? 'btn-dark' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('closed')} style={{backgroundColor: activeTab === 'closed' ? '#002147' : ''}}>Closed Cases</button>
//         </div>

//         {/* 2. Search Dropdowns */}
//         <div className="row g-3 mb-5 p-4 rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
//           <div className="col-md-3"><label className="form-label fw-bold">Case Number</label><input type="text" className="form-control" placeholder="Search #" /></div>
//           <div className="col-md-3"><label className="form-label fw-bold">Practice Area</label><select className="form-select"><option>All Areas</option></select></div>
//           <div className="col-md-3"><label className="form-label fw-bold">Attorney Name</label><input type="text" className="form-control" /></div>
//           <div className="col-md-3"><label className="form-label fw-bold">Case Stage</label><select className="form-select"><option>All Stages</option></select></div>
//         </div>

//         {/* 3. Search Results Table */}
//         <div className="table-responsive mb-5">
//           <table className="table table-hover align-middle border">
//             <thead style={{ backgroundColor: '#fcf6ef' }}>
//               <tr className="small" style={{color: '#002147'}}>
//                 <th>Case Type</th><th>Case Number</th><th>First Party</th><th>Opposit Party</th><th>State</th><th>City</th><th>Court Number</th><th>Stage</th><th>Next Date</th><th>Notes</th><th>Docs</th>
//               </tr>
//             </thead>
//             <tbody className="small text-muted">
//               <tr><td colSpan="11" className="text-center py-4">No records found</td></tr>
//             </tbody>
//           </table>
//         </div>

//         {/* 4. Case Transfer Section */}
//         <div className="mb-5 p-4 border rounded-4" style={{borderStyle: 'dashed'}}>
//           <h5 className="fw-bold mb-3" style={{color: '#002147'}}>Case Transfer Details</h5>
//           <p className="small text-muted mb-3">If case transfered from previous lawer/court name, Please enter the details</p>
//           <div className="row g-3">
//             <div className="col-md-6"><input type="text" className="form-control" placeholder="Previous Lawyer Name" /></div>
//             <div className="col-md-6"><input type="text" className="form-control" placeholder="Previous Court Name" /></div>
//           </div>
//         </div>

//         {/* 5. Case Documents Upload */}
//         <div>
//           <h5 className="fw-bold mb-4" style={{color: '#002147'}}>Case Documents - Upload</h5>
//           <div className="row g-4 text-center">
//             {['Attorney', 'Client', 'Office Staff'].map((user, idx) => (
//               <div className="col-md-4" key={idx}>
//                 <div className="p-3 border rounded-4">
//                   <i className="bi bi-cloud-arrow-up fs-2" style={{color: '#de9f57'}}></i>
//                   <p className="fw-bold small mt-2">{user} Upload</p>
//                   <input type="file" className="form-control form-control-sm" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </AttorneyLayout>
//   );
// }

import React, { useState } from 'react';
import Head from 'next/head';
import AttorneyLayout from '../../components/layout/AttorneyLayout';

export default function CaseDetails() {
  const [activeTab, setActiveTab] = useState('open');

  // Sample Data for Table
  const caseData = [
    { type: 'Criminal', no: 'CR-2024-001', p1: 'John Doe', p2: 'State Authority', state: 'New York', city: 'NYC', court: 'Court 12', stage: 'Hearing', date: '2024-06-15', notes: 'Urgent', docs: '📁' },
    { type: 'Civil', no: 'CV-2024-089', p1: 'Jane Smith', p2: 'Robert Wilson', state: 'California', city: 'LA', court: 'Court 05', stage: 'Mediation', date: '2024-07-10', notes: 'Pending', docs: '📁' },
    { type: 'Family', no: 'FM-2024-102', p1: 'Alice Brown', p2: 'Mark Brown', state: 'Texas', city: 'Houston', court: 'Court 03', stage: 'Evidence', date: '2024-06-25', notes: 'Ongoing', docs: '📁' },
  ];

  return (
    <AttorneyLayout>
      <Head><title>Lawstick | Case Details</title></Head>

      <div className="w-100">
        <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
          <h3 className="fw-bold mb-5" style={{fontFamily:'serif', color: '#002147', fontSize: '28px'}}>Case Details</h3>

          {/* 1. Open and Closed Tabs */}
          <div className="d-flex gap-3 mb-4">
            <button 
              className={`btn rounded-pill px-4 fw-bold`} 
              onClick={() => setActiveTab('open')} 
              style={{
                backgroundColor: activeTab === 'open' ? '#002147' : 'transparent',
                color: activeTab === 'open' ? 'white' : '#6c757d',
                border: activeTab === 'open' ? '1px solid #002147' : '1px solid #ced4da',
                fontSize: '15px'
              }}
            >
              Open Cases
            </button>
            <button 
              className={`btn rounded-pill px-4 fw-bold`} 
              onClick={() => setActiveTab('closed')} 
              style={{
                backgroundColor: activeTab === 'closed' ? '#002147' : 'transparent',
                color: activeTab === 'closed' ? 'white' : '#6c757d',
                border: activeTab === 'closed' ? '1px solid #002147' : '1px solid #ced4da',
                fontSize: '15px'
              }}
            >
              Closed Cases
            </button>
          </div>

          {/* 2. Search Dropdowns */}
          <div className="row g-3 mb-5 p-4 rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-bold" style={{fontSize: '15px'}}>Case Number</label>
              <input type="text" className="form-control" placeholder="Search #" style={{fontSize: '15px'}} />
            </div>
            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-bold" style={{fontSize: '15px'}}>Practice Area</label>
              <select className="form-select" style={{fontSize: '15px'}}><option>All Areas</option></select>
            </div>
            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-bold" style={{fontSize: '15px'}}>Attorney Name</label>
              <input type="text" className="form-control" style={{fontSize: '15px'}} />
            </div>
            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-bold" style={{fontSize: '15px'}}>Case Stage</label>
              <select className="form-select" style={{fontSize: '15px'}}><option>All Stages</option></select>
            </div>
          </div>

          {/* 3. Search Results Table with Data */}
          <div className="table-responsive mb-5" style={{width: '100%'}}>
            <table className="table table-hover align-middle border">
              <thead style={{ backgroundColor: '#fcf6ef' }}>
                <tr style={{color: '#002147', fontSize: '14px'}}>
                  <th className="py-3">Case Type</th>
                  <th>Case Number</th>
                  <th>First Party</th>
                  <th>Opposite Party</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Court Number</th>
                  <th>Stage</th>
                  <th>Next Date</th>
                  <th>Notes</th>
                  <th>Docs</th>
                </tr>
              </thead>
              <tbody style={{fontSize: '14px', color: '#444'}}>
                {caseData.map((val, idx) => (
                  <tr key={idx}>
                    <td className="py-3">{val.type}</td>
                    <td><span className="badge bg-light text-dark border">{val.no}</span></td>
                    <td>{val.p1}</td>
                    <td>{val.p2}</td>
                    <td>{val.state}</td>
                    <td>{val.city}</td>
                    <td>{val.court}</td>
                    <td><span className="text-primary">{val.stage}</span></td>
                    <td>{val.date}</td>
                    <td><small>{val.notes}</small></td>
                    <td className="text-center" style={{cursor: 'pointer'}}>{val.docs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4. Case Transfer Section */}
          <div className="mb-5 p-4 border rounded-4" style={{borderStyle: 'dashed', borderColor: '#ced4da'}}>
            <h5 className="fw-bold mb-3" style={{color: '#002147', fontSize: '18px'}}>Case Transfer Details</h5>
            <p className="text-muted mb-3" style={{fontSize: '14px'}}>If case transferred from previous lawyer/court name, Please enter the details</p>
            <div className="row g-3">
              <div className="col-md-6"><input type="text" className="form-control" placeholder="Previous Lawyer Name" style={{fontSize: '15px'}} /></div>
              <div className="col-md-6"><input type="text" className="form-control" placeholder="Previous Court Name" style={{fontSize: '15px'}} /></div>
            </div>
          </div>

          {/* 5. Case Documents Upload */}
          <div>
            <h5 className="fw-bold mb-4" style={{color: '#002147', fontSize: '18px'}}>Case Documents - Upload</h5>
            <div className="row g-4 text-center">
              {['Attorney', 'Client', 'Office Staff'].map((user, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="p-4 border rounded-4 bg-white hover-shadow" style={{transition: '0.3s'}}>
                    <i className="bi bi-cloud-arrow-up fs-2" style={{color: '#de9f57'}}></i>
                    <p className="fw-bold mt-2" style={{fontSize: '15px', color: '#002147'}}>{user} Upload</p>
                    <input type="file" className="form-control form-control-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-shadow:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .form-control:focus, .form-select:focus { border-color: #de9f57; box-shadow: none; }
        .table th { white-space: nowrap; }
        .table td { white-space: nowrap; }
      `}</style>
    </AttorneyLayout>
  );
}