// import React, { useState } from 'react';
// import Head from 'next/head';
// import AttorneyLayout from '../../components/layout/AttorneyLayout';

// export default function ClientTransactionPage() {
//   const [activeTab, setActiveTab] = useState('clients');
//   const [search, setSearch] = useState('');
//   const [dateFilter, setDateFilter] = useState({ start: '', end: '' });

//   // --- 1. CLIENTS STATE ---
//   const [clients, setClients] = useState([
//     { id: 1, name: 'Rajesh Malhotra', clientId: 'CL-8821', number: '9876543210', caseType: 'Criminal', caseTitle: 'State vs Rajesh', apptDate: '2025-12-25', status: 'Scheduled', proof: 'Utility Bill' },
//   ]);

//   // --- 2. MILESTONES STATE (Case wise requests) ---
//   const [milestones, setMilestones] = useState([
//     { id: 101, caseTitle: 'State vs Rajesh', client: 'Rajesh Malhotra', amount: '₹5000', note: 'Initial Filing', status: 'Release', date: '2025-12-20' },
//     { id: 102, caseTitle: 'Property Dispute', client: 'Suman Lata', amount: '₹12000', note: 'Evidence Submission', status: 'Pending', date: '2025-12-22' },
//   ]);

//   // --- 3. PAYMENTS STATE (Income + Expense) ---
//   const [payments, setPayments] = useState([
//     { id: 201, date: '2025-12-21', type: 'Income', category: 'Milestone Paid', amount: '₹5000', client: 'Rajesh Malhotra', status: 'Paid' },
//     { id: 202, date: '2025-12-22', type: 'Expense', category: 'Office Rent', amount: '₹15000', client: 'N/A', status: 'Paid' },
//     { id: 203, date: '2025-12-23', type: 'Income', category: 'Subscription', amount: '₹2000', client: 'Adv. Tasnia', status: 'Paid' },
//   ]);

//   // --- FUNCTIONS ---
//   const handleDeleteClient = (id) => {
//     if (confirm("Delete this client record?")) setClients(clients.filter(c => c.id !== id));
//   };

//   const handleExport = () => {
//     alert("Exporting data to Excel/CSV...");
//     // Yahan actual CSV export logic lag sakti hai
//   };

//   return (
//     <AttorneyLayout>
//       <Head><title>Lawstick | Client & Transaction Management</title></Head>

//       <div className="container-fluid px-0">
//         {/* PAGE HEADER */}
//         <div className="mb-4">
//           <h3 className="fw-bold mb-1" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Client & Transaction Management</h3>
//           <p className="text-muted" style={{fontSize: '15px'}}>Manage clients, milestones, invoices, and financial tracking.</p>
//         </div>

//         {/* TABS NAVIGATION */}
//         <ul className="nav nav-tabs border-0 mb-4 gap-2">
//           {['clients', 'milestones', 'invoices', 'payments'].map((tab) => (
//             <li className="nav-item" key={tab}>
//               <button 
//                 className={`nav-link rounded-pill px-4 fw-bold border-0 ${activeTab === tab ? 'active-tab' : 'inactive-tab'}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
          
//           {/* TOP FILTERS (Search, Date, Export) */}
//           <div className="row g-3 mb-4 align-items-end">
//             <div className="col-md-3">
//               <label className="form-label small fw-bold">Search Data</label>
//               <input type="text" className="form-control rounded-pill" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
//             </div>
//             {activeTab === 'payments' && (
//               <>
//                 <div className="col-md-2">
//                   <label className="form-label small fw-bold">From Date</label>
//                   <input type="date" className="form-control rounded-pill" onChange={(e) => setDateFilter({...dateFilter, start: e.target.value})} />
//                 </div>
//                 <div className="col-md-2">
//                   <label className="form-label small fw-bold">To Date</label>
//                   <input type="date" className="form-control rounded-pill" onChange={(e) => setDateFilter({...dateFilter, end: e.target.value})} />
//                 </div>
//               </>
//             )}
//             <div className="col-md-2 ms-auto text-end">
//               <button className="btn btn-outline-dark rounded-pill px-4 fw-bold w-100" onClick={handleExport}>
//                 <i className="bi bi-download me-2"></i> Export
//               </button>
//             </div>
//           </div>

//           {/* --- CONTENT BASED ON ACTIVE TAB --- */}
          
//           {/* 1. CLIENTS TAB */}
//           {activeTab === 'clients' && (
//             <div className="table-responsive">
//               <table className="table table-hover align-middle border rounded">
//                 <thead className="bg-light">
//                   <tr style={{fontSize: '14px', color: '#002147'}}>
//                     <th>Client Name</th><th>ID</th><th>Number</th><th>Case Type</th><th>Status</th><th className="text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody style={{fontSize: '14px'}}>
//                   {clients.map(cl => (
//                     <tr key={cl.id}>
//                       <td className="fw-bold">{cl.name}</td>
//                       <td>{cl.clientId}</td><td>{cl.number}</td><td>{cl.caseType}</td>
//                       <td><span className="badge bg-primary-subtle text-primary">{cl.status}</span></td>
//                       <td className="text-center">
//                         <button className="btn btn-sm border-0"><i className="bi bi-pencil-square text-primary"></i></button>
//                         <button className="btn btn-sm border-0" onClick={() => handleDeleteClient(cl.id)}><i className="bi bi-trash text-danger"></i></button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {/* 2. MILESTONES TAB */}
//           {activeTab === 'milestones' && (
//             <div className="table-responsive">
//               <table className="table table-hover align-middle border">
//                 <thead className="bg-light">
//                   <tr style={{fontSize: '14px', color: '#002147'}}>
//                     <th>Case Title</th><th>Client</th><th>Amount</th><th>Note</th><th>Status</th><th>Invoice</th>
//                   </tr>
//                 </thead>
//                 <tbody style={{fontSize: '14px'}}>
//                   {milestones.map(m => (
//                     <tr key={m.id}>
//                       <td className="fw-bold">{m.caseTitle}</td>
//                       <td>{m.client}</td><td>{m.amount}</td>
//                       <td><small>{m.note}</small></td>
//                       <td>
//                         <span className={`badge ${m.status === 'Release' ? 'bg-success' : m.status === 'Pending' ? 'bg-warning' : 'bg-danger'}`}>
//                           {m.status}
//                         </span>
//                       </td>
//                       <td>{m.status === 'Release' ? <button className="btn btn-sm btn-light border"><i className="bi bi-download me-1"></i> Invoice</button> : '---'}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {/* 3. INVOICES TAB */}
//           {activeTab === 'invoices' && (
//             <div className="table-responsive text-center py-4">
//               <i className="bi bi-receipt display-4 text-light"></i>
//               <p className="mt-3 text-muted">All generated invoices for paid milestones will appear here.</p>
//               <table className="table border mt-3">
//                 <thead className="bg-light"><tr><th>Invoice ID</th><th>Date</th><th>Amount</th><th>Action</th></tr></thead>
//                 <tbody><tr><td colSpan="4">No Invoices to Download</td></tr></tbody>
//               </table>
//             </div>
//           )}

//           {/* 4. PAYMENTS TAB (Income + Expense Combination) */}
//           {activeTab === 'payments' && (
//             <div className="table-responsive">
//               <table className="table table-hover align-middle border">
//                 <thead className="bg-light">
//                   <tr style={{fontSize: '14px', color: '#002147'}}>
//                     <th>Date</th><th>Type</th><th>Category</th><th>Amount</th><th>Payer/Client</th><th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody style={{fontSize: '14px'}}>
//                   {payments.map(p => (
//                     <tr key={p.id}>
//                       <td>{p.date}</td>
//                       <td><span className={`fw-bold ${p.type === 'Income' ? 'text-success' : 'text-danger'}`}>{p.type}</span></td>
//                       <td>{p.category}</td>
//                       <td className="fw-bold">{p.amount}</td>
//                       <td>{p.client}</td>
//                       <td><span className="badge bg-light text-dark border">Completed</span></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//         </div>
//       </div>

//       {/* <style jsx>{`
//         .active-tab { background-color: #002147 !important; color: white !important; }
//         .inactive-tab { background-color: #f1f5f9; color: black; transition: 0.3s; }
//         .inactive-tab:hover { background-color: #e2e8f0; }
//         .form-control:focus { border-color: #de9f57; box-shadow: none; }
//         .table th { text-transform: uppercase; letter-spacing: 0.5px; padding: 15px; }
//         :global(.container-fluid) { max-width: 100% !important; }
//       `}</style> */}

//       <style jsx>{`
//   /* Tab Styles Fix */
//   .active-tab { 
//     background-color: #002147 !important; 
//     color: white !important; 
//     box-shadow: 0 4px 10px rgba(0,33,71,0.2);
//   }
  
//   .inactive-tab { 
//     background-color: #eeeeee !important; /* Light grey taaki dikhai de */
//     color: #555555 !important;           /* Darker text color */
//     border: 1px solid #ddd !important;
//     transition: 0.3s;
//   }
  
//   .inactive-tab:hover { 
//     background-color: #e2e8f0 !important; 
//     color: #002147 !important;
//   }

//   /* Search & Export Button Fix (Chota size) */
//   .custom-search {
//     max-width: 300px;
//     height: 38px;
//     font-size: 14px;
//     border-radius: 8px !important;
//   }

//   .btn-export {
//     height: 38px;
//     padding: 0 20px;
//     font-size: 14px;
//     font-weight: 600;
//     border-radius: 8px !important;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid #002147;
//     color: #002147;
//     background: white;
//     transition: 0.3s;
//   }

//   .btn-export:hover {
//     background: #002147;
//     color: white;
//   }

//   .table th { 
//     background-color: #f8f9fa; 
//     text-transform: uppercase; 
//     font-size: 12px; 
//     letter-spacing: 0.5px;
//     padding: 12px;
//   }

//   :global(.container-fluid) { max-width: 100% !important; }
// `}</style>
//     </AttorneyLayout>
//   );
// }

import React, { useState } from 'react';
import Head from 'next/head';
import AttorneyLayout from '../../components/layout/AttorneyLayout';

export default function ClientTransactionPage() {
  const [activeTab, setActiveTab] = useState('clients');
  const [search, setSearch] = useState('');

  // --- DUMMY DATA FOR UI ---
  const clients = [
    { id: 1, name: 'Rajesh Malhotra', clientId: 'CL-8821', number: '9876543210', caseType: 'Criminal', status: 'Scheduled' },
    { id: 2, name: 'Suman Lata', clientId: 'CL-9902', number: '9988776655', caseType: 'Civil', status: 'Completed' },
  ];

  const milestones = [
    { id: 101, case: 'State vs Rajesh', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Released', note: 'Initial Filing' },
    { id: 102, case: 'Land Dispute', client: 'Suman Lata', amount: '₹12,000', status: 'Pending', note: 'Evidence submission' },
  ];

  const invoices = [
    { id: 'INV-001', date: '2025-12-20', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Paid' },
    { id: 'INV-002', date: '2025-12-22', client: 'Suman Lata', amount: '₹12,000', status: 'Generated' },
  ];

  const payments = [
    { id: 201, date: '2025-12-21', type: 'Income', cat: 'Milestone', amount: '₹5,000', party: 'Rajesh Malhotra' },
    { id: 202, date: '2025-12-22', type: 'Expense', cat: 'Office Supplies', amount: '₹1,200', party: 'Stationary Shop' },
    { id: 203, date: '2025-12-23', type: 'Income', cat: 'Subscription', amount: '₹2,000', party: 'Adv. Tasnia' },
  ];

  const handleExport = () => {
    console.log("Generating CSV for", activeTab);
    // Real logic can go here
  };

  return (
    <AttorneyLayout>
      <Head><title>Lawstick | Client & Transactions</title></Head>

      <div className="container-fluid px-0">
        {/* 1. Page Header */}
        <div className="mb-4">
          <h3 className="fw-bold mb-1" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Client & Transaction Management</h3>
          <p className="text-muted small">Manage your client records, payment milestones, and financial invoices.</p>
        </div>

        {/* 2. Professional Nav Tabs */}
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 gap-3">
          <ul className="nav nav-pills gap-2 p-1 bg-white rounded-pill shadow-sm border">
            {['clients', 'milestones', 'invoices', 'payments'].map((tab) => (
              <li className="nav-item" key={tab}>
                <button 
                  className={`nav-link rounded-pill px-4 fw-bold text-uppercase ${activeTab === tab ? 'active-pill' : 'inactive-pill'}`}
                  style={{fontSize: '12px'}}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
          {/* 3. Filter Bar (Search + Export) */}
          <div className="p-4 border-bottom bg-light d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2">
              <div className="input-group input-group-sm" style={{ width: '280px' }}>
                <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                <input 
                  type="text" 
                  className="form-control border-start-0 py-2" 
                  placeholder={`Search ${activeTab}...`} 
                  onChange={(e) => setSearch(e.target.value)} 
                />
              </div>
              {activeTab === 'payments' && (
                <div className="d-flex gap-2">
                  <input type="date" className="form-control form-control-sm" />
                </div>
              )}
            </div>

            <button className="btn btn-sm btn-outline-navy fw-bold px-4 rounded-pill d-flex align-items-center gap-2" onClick={handleExport}>
              <i className="bi bi-download"></i> EXPORT
            </button>
          </div>

          {/* 4. Table Content Area */}
          <div className="p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead style={{ backgroundColor: '#fcf6ef' }}>
                  <tr style={{fontSize: '13px', color: '#002147'}}>
                    {activeTab === 'clients' && <><th className="py-3 px-4">Client Name</th><th>Client ID</th><th>Number</th><th>Case Type</th><th>Status</th><th className="text-center">Action</th></>}
                    {activeTab === 'milestones' && <><th className="py-3 px-4">Case Title</th><th>Client</th><th>Amount</th><th>Status</th><th>Notes</th><th className="text-center">Action</th></>}
                    {activeTab === 'invoices' && <><th className="py-3 px-4">Invoice #</th><th>Date</th><th>Client</th><th>Amount</th><th>Status</th><th className="text-center">Download</th></>}
                    {activeTab === 'payments' && <><th className="py-3 px-4">Date</th><th>Type</th><th>Category</th><th>Amount</th><th>Payer/Payee</th><th className="text-center">Status</th></>}
                  </tr>
                </thead>
                <tbody style={{fontSize: '14px'}}>
                  {/* CLIENTS VIEW */}
                  {activeTab === 'clients' && clients.map(cl => (
                    <tr key={cl.id}>
                      <td className="px-4 fw-bold">{cl.name}</td>
                      <td>{cl.clientId}</td><td>{cl.number}</td><td>{cl.caseType}</td>
                      <td><span className="badge bg-primary-subtle text-primary px-3 rounded-pill">{cl.status}</span></td>
                      <td className="text-center"><i className="bi bi-pencil-square text-primary me-3" style={{cursor:'pointer'}}></i><i className="bi bi-trash text-danger" style={{cursor:'pointer'}}></i></td>
                    </tr>
                  ))}

                  {/* MILESTONES VIEW */}
                  {activeTab === 'milestones' && milestones.map(m => (
                    <tr key={m.id}>
                      <td className="px-4 fw-bold">{m.case}</td>
                      <td>{m.client}</td><td>{m.amount}</td>
                      <td><span className={`badge px-3 rounded-pill ${m.status === 'Released' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>{m.status}</span></td>
                      <td className="text-muted"><small>{m.note}</small></td>
                      <td className="text-center"><button className="btn btn-sm btn-link text-navy text-decoration-none fw-bold">Request</button></td>
                    </tr>
                  ))}

                  {/* INVOICES VIEW (Now with Data) */}
                  {activeTab === 'invoices' && invoices.map(inv => (
                    <tr key={inv.id}>
                      <td className="px-4 fw-bold">{inv.id}</td>
                      <td>{inv.date}</td><td>{inv.client}</td><td>{inv.amount}</td>
                      <td><span className="badge bg-info-subtle text-info px-3 rounded-pill">{inv.status}</span></td>
                      <td className="text-center"><i className="bi bi-file-earmark-pdf fs-5 text-danger" style={{cursor:'pointer'}}></i></td>
                    </tr>
                  ))}

                  {/* PAYMENTS VIEW */}
                  {activeTab === 'payments' && payments.map(p => (
                    <tr key={p.id}>
                      <td className="px-4">{p.date}</td>
                      <td className={`fw-bold ${p.type === 'Income' ? 'text-success' : 'text-danger'}`}>{p.type}</td>
                      <td>{p.cat}</td><td className="fw-bold">{p.amount}</td><td>{p.party}</td>
                      <td className="text-center"><span className="badge bg-light text-dark border px-2">Completed</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active-pill { background-color: #002147 !important; color: white !important; }
        .inactive-pill { color: #666 !important; background: transparent !important; }
        .inactive-pill:hover { color: #002147 !important; background: #f8f9fa !important; }
        
        .btn-outline-navy { border: 1.5px solid #002147; color: #002147; background: transparent; transition: 0.3s; }
        .btn-outline-navy:hover { background: #002147; color: white; }
        
        .text-navy { color: #002147; }
        .table th { border-top: 0; }
        .form-control:focus { border-color: #de9f57; box-shadow: none; }
        :global(.container-fluid) { max-width: 100% !important; }
      `}</style>
    </AttorneyLayout>
  );
}