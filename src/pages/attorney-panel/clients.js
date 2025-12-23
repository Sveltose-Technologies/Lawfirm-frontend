// import React, { useState } from 'react';
// import Head from 'next/head';
// import AttorneyLayout from '../../components/layout/AttorneyLayout';

// export default function ClientTransactionPage() {
//   const [activeTab, setActiveTab] = useState('clients');
//   const [search, setSearch] = useState('');

//   // --- DUMMY DATA FOR UI ---
//   const clients = [
//     { id: 1, name: 'Rajesh Malhotra', clientId: 'CL-8821', number: '9876543210', caseType: 'Criminal', status: 'Scheduled' },
//     { id: 2, name: 'Suman Lata', clientId: 'CL-9902', number: '9988776655', caseType: 'Civil', status: 'Completed' },
//   ];

//   const milestones = [
//     { id: 101, case: 'State vs Rajesh', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Released', note: 'Initial Filing' },
//     { id: 102, case: 'Land Dispute', client: 'Suman Lata', amount: '₹12,000', status: 'Pending', note: 'Evidence submission' },
//   ];

//   const invoices = [
//     { id: 'INV-001', date: '2025-12-20', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Paid' },
//     { id: 'INV-002', date: '2025-12-22', client: 'Suman Lata', amount: '₹12,000', status: 'Generated' },
//   ];

//   const payments = [
//     { id: 201, date: '2025-12-21', type: 'Income', cat: 'Milestone', amount: '₹5,000', party: 'Rajesh Malhotra' },
//     { id: 202, date: '2025-12-22', type: 'Expense', cat: 'Office Supplies', amount: '₹1,200', party: 'Stationary Shop' },
//     { id: 203, date: '2025-12-23', type: 'Income', cat: 'Subscription', amount: '₹2,000', party: 'Adv. Tasnia' },
//   ];

//   const handleExport = () => {
//     console.log("Generating CSV for", activeTab);
//     // Real logic can go here
//   };

//   return (
//     <AttorneyLayout>
//       <Head><title>Lawstick | Client & Transactions</title></Head>

//       <div className="container-fluid px-0">
//         {/* 1. Page Header */}
//         <div className="mb-4">
//           <h3 className="fw-bold mb-1" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Client & Transaction Management</h3>
//           <p className="text-muted small">Manage your client records, payment milestones, and financial invoices.</p>
//         </div>

//         {/* 2. Professional Nav Tabs */}
//         <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 gap-3">
//           <ul className="nav nav-pills gap-2 p-1 bg-white rounded-pill shadow-sm border">
//             {['clients', 'milestones', 'invoices', 'payments'].map((tab) => (
//               <li className="nav-item" key={tab}>
//                 <button 
//                   className={`nav-link rounded-pill px-4 fw-bold text-uppercase ${activeTab === tab ? 'active-pill' : 'inactive-pill'}`}
//                   style={{fontSize: '12px'}}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
//           {/* 3. Filter Bar (Search + Export) */}
//           <div className="p-4 border-bottom bg-light d-flex justify-content-between align-items-center flex-wrap gap-2">
//             <div className="d-flex align-items-center gap-2">
//               <div className="input-group input-group-sm" style={{ width: '280px' }}>
//                 <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
//                 <input 
//                   type="text" 
//                   className="form-control border-start-0 py-2" 
//                   placeholder={`Search ${activeTab}...`} 
//                   onChange={(e) => setSearch(e.target.value)} 
//                 />
//               </div>
//               {activeTab === 'payments' && (
//                 <div className="d-flex gap-2">
//                   <input type="date" className="form-control form-control-sm" />
//                 </div>
//               )}
//             </div>

//             <button className="btn btn-sm btn-outline-navy fw-bold px-4 rounded-pill d-flex align-items-center gap-2" onClick={handleExport}>
//               <i className="bi bi-download"></i> EXPORT
//             </button>
//           </div>

//           {/* 4. Table Content Area */}
//           <div className="p-0">
//             <div className="table-responsive">
//               <table className="table table-hover align-middle mb-0">
//                 <thead style={{ backgroundColor: '#fcf6ef' }}>
//                   <tr style={{fontSize: '13px', color: '#002147'}}>
//                     {activeTab === 'clients' && <><th className="py-3 px-4">Client Name</th><th>Client ID</th><th>Number</th><th>Case Type</th><th>Status</th><th className="text-center">Action</th></>}
//                     {activeTab === 'milestones' && <><th className="py-3 px-4">Case Title</th><th>Client</th><th>Amount</th><th>Status</th><th>Notes</th><th className="text-center">Action</th></>}
//                     {activeTab === 'invoices' && <><th className="py-3 px-4">Invoice #</th><th>Date</th><th>Client</th><th>Amount</th><th>Status</th><th className="text-center">Download</th></>}
//                     {activeTab === 'payments' && <><th className="py-3 px-4">Date</th><th>Type</th><th>Category</th><th>Amount</th><th>Payer/Payee</th><th className="text-center">Status</th></>}
//                   </tr>
//                 </thead>
//                 <tbody style={{fontSize: '14px'}}>
//                   {/* CLIENTS VIEW */}
//                   {activeTab === 'clients' && clients.map(cl => (
//                     <tr key={cl.id}>
//                       <td className="px-4 fw-bold">{cl.name}</td>
//                       <td>{cl.clientId}</td><td>{cl.number}</td><td>{cl.caseType}</td>
//                       <td><span className="badge bg-primary-subtle text-primary px-3 rounded-pill">{cl.status}</span></td>
//                       <td className="text-center"><i className="bi bi-pencil-square text-primary me-3" style={{cursor:'pointer'}}></i><i className="bi bi-trash text-danger" style={{cursor:'pointer'}}></i></td>
//                     </tr>
//                   ))}

//                   {/* MILESTONES VIEW */}
//                   {activeTab === 'milestones' && milestones.map(m => (
//                     <tr key={m.id}>
//                       <td className="px-4 fw-bold">{m.case}</td>
//                       <td>{m.client}</td><td>{m.amount}</td>
//                       <td><span className={`badge px-3 rounded-pill ${m.status === 'Released' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>{m.status}</span></td>
//                       <td className="text-muted"><small>{m.note}</small></td>
//                       <td className="text-center"><button className="btn btn-sm btn-link text-navy text-decoration-none fw-bold">Request</button></td>
//                     </tr>
//                   ))}

//                   {/* INVOICES VIEW (Now with Data) */}
//                   {activeTab === 'invoices' && invoices.map(inv => (
//                     <tr key={inv.id}>
//                       <td className="px-4 fw-bold">{inv.id}</td>
//                       <td>{inv.date}</td><td>{inv.client}</td><td>{inv.amount}</td>
//                       <td><span className="badge bg-info-subtle text-info px-3 rounded-pill">{inv.status}</span></td>
//                       <td className="text-center"><i className="bi bi-file-earmark-pdf fs-5 text-danger" style={{cursor:'pointer'}}></i></td>
//                     </tr>
//                   ))}

//                   {/* PAYMENTS VIEW */}
//                   {activeTab === 'payments' && payments.map(p => (
//                     <tr key={p.id}>
//                       <td className="px-4">{p.date}</td>
//                       <td className={`fw-bold ${p.type === 'Income' ? 'text-success' : 'text-danger'}`}>{p.type}</td>
//                       <td>{p.cat}</td><td className="fw-bold">{p.amount}</td><td>{p.party}</td>
//                       <td className="text-center"><span className="badge bg-light text-dark border px-2">Completed</span></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .active-pill { background-color: #002147 !important; color: white !important; }
//         .inactive-pill { color: #666 !important; background: transparent !important; }
//         .inactive-pill:hover { color: #002147 !important; background: #f8f9fa !important; }
        
//         .btn-outline-navy { border: 1.5px solid #002147; color: #002147; background: transparent; transition: 0.3s; }
//         .btn-outline-navy:hover { background: #002147; color: white; }
        
//         .text-navy { color: #002147; }
//         .table th { border-top: 0; }
//         .form-control:focus { border-color: #de9f57; box-shadow: none; }
//         :global(.container-fluid) { max-width: 100% !important; }
//       `}</style>
//     </AttorneyLayout>
//   );
// }


// import React, { useState } from 'react';
// import Head from 'next/head';
// import AttorneyLayout from '../../components/layout/AttorneyLayout';

// export default function ClientTransactionPage() {
//   const [activeTab, setActiveTab] = useState('clients');
//   const [search, setSearch] = useState('');
  
//   // --- PAGINATION STATES ---
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // --- DUMMY DATA (Extended for Pagination Testing) ---
//   const clients = [
//     { id: 1, name: 'Rajesh Malhotra', clientId: 'CL-8821', number: '9876543210', caseType: 'Criminal', status: 'Scheduled' },
//     { id: 2, name: 'Suman Lata', clientId: 'CL-9902', number: '9988776655', caseType: 'Civil', status: 'Completed' },
//     { id: 3, name: 'Amit Sharma', clientId: 'CL-1023', number: '9812345678', caseType: 'Family', status: 'Pending' },
//     { id: 4, name: 'Priya Verma', clientId: 'CL-4456', number: '9900112233', caseType: 'Criminal', status: 'Scheduled' },
//     { id: 5, name: 'Rahul Singh', clientId: 'CL-7788', number: '9845612300', caseType: 'Corporate', status: 'Active' },
//     { id: 6, name: 'Kavita Devi', clientId: 'CL-2233', number: '9123456789', caseType: 'Civil', status: 'Closed' },
//     { id: 7, name: 'Suresh Raina', clientId: 'CL-5544', number: '9877665544', caseType: 'Criminal', status: 'Scheduled' },
//   ];

//   const milestones = [
//     { id: 101, case: 'State vs Rajesh', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Released', note: 'Initial Filing' },
//     { id: 102, case: 'Land Dispute', client: 'Suman Lata', amount: '₹12,000', status: 'Pending', note: 'Evidence submission' },
//     { id: 103, case: 'Divorce Case', client: 'Amit Sharma', amount: '₹8,000', status: 'Pending', note: 'First Hearing' },
//     { id: 104, case: 'Theft Case', client: 'Priya Verma', amount: '₹3,000', status: 'Released', note: 'Documentation' },
//     { id: 105, case: 'Merger Agreement', client: 'Rahul Singh', amount: '₹50,000', status: 'Pending', note: 'Final Draft' },
//     { id: 106, case: 'Property Suit', client: 'Kavita Devi', amount: '₹15,000', status: 'Released', note: 'Title Search' },
//     { id: 107, case: 'Bail Application', client: 'Suresh Raina', amount: '₹7,500', status: 'Pending', note: 'Urgent' },
//   ];

//   const invoices = [
//     { id: 'INV-001', date: '2025-12-20', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Paid' },
//     { id: 'INV-002', date: '2025-12-22', client: 'Suman Lata', amount: '₹12,000', status: 'Generated' },
//     { id: 'INV-003', date: '2025-12-23', client: 'Amit Sharma', amount: '₹8,000', status: 'Paid' },
//     { id: 'INV-004', date: '2025-12-24', client: 'Priya Verma', amount: '₹3,000', status: 'Pending' },
//     { id: 'INV-005', date: '2025-12-25', client: 'Rahul Singh', amount: '₹50,000', status: 'Generated' },
//     { id: 'INV-006', date: '2025-12-26', client: 'Kavita Devi', amount: '₹15,000', status: 'Paid' },
//     { id: 'INV-007', date: '2025-12-27', client: 'Suresh Raina', amount: '₹7,500', status: 'Generated' },
//   ];

//   const payments = [
//     { id: 201, date: '2025-12-21', type: 'Income', cat: 'Milestone', amount: '₹5,000', party: 'Rajesh Malhotra' },
//     { id: 202, date: '2025-12-22', type: 'Expense', cat: 'Office Supplies', amount: '₹1,200', party: 'Stationary Shop' },
//     { id: 203, date: '2025-12-23', type: 'Income', cat: 'Subscription', amount: '₹2,000', party: 'Adv. Tasnia' },
//     { id: 204, date: '2025-12-24', type: 'Income', cat: 'Milestone', amount: '₹8,000', party: 'Amit Sharma' },
//     { id: 205, date: '2025-12-25', type: 'Expense', cat: 'Rent', amount: '₹25,000', party: 'Office Owner' },
//     { id: 206, date: '2025-12-26', type: 'Income', cat: 'Legal Fees', amount: '₹15,000', party: 'Kavita Devi' },
//     { id: 207, date: '2025-12-27', type: 'Income', cat: 'Consultation', amount: '₹7,500', party: 'Suresh Raina' },
//   ];

//   // --- LOGIC TO GET DATA BASED ON TAB ---
//   const getActiveData = () => {
//     let data = [];
//     if (activeTab === 'clients') data = clients;
//     else if (activeTab === 'milestones') data = milestones;
//     else if (activeTab === 'invoices') data = invoices;
//     else if (activeTab === 'payments') data = payments;

//     // Optional Search Filtering
//     if (search) {
//       return data.filter(item => 
//         Object.values(item).some(val => 
//           String(val).toLowerCase().includes(search.toLowerCase())
//         )
//       );
//     }
//     return data;
//   };

//   const filteredData = getActiveData();

//   // --- PAGINATION CALCULATION ---
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setCurrentPage(1); // Reset to page 1 on tab switch
//   };

//   return (
//     <AttorneyLayout>
//       <Head>
//         <title>Lawstick | Client & Transactions</title>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
//       </Head>

//       <div className="container-fluid px-0">
//         <div className="mb-4">
//           <h3 className="fw-bold mb-1" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Client & Transaction Management</h3>
//           <p className="text-muted small">Manage your client records, payment milestones, and financial invoices.</p>
//         </div>

//         {/* Professional Nav Tabs */}
//         <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 gap-3">
//           <ul className="nav nav-pills gap-2 p-1 bg-white rounded-pill shadow-sm border">
//             {['clients', 'milestones', 'invoices', 'payments'].map((tab) => (
//               <li className="nav-item" key={tab}>
//                 <button 
//                   className={`nav-link rounded-pill px-4 fw-bold text-uppercase ${activeTab === tab ? 'active-pill' : 'inactive-pill'}`}
//                   style={{fontSize: '12px'}}
//                   onClick={() => handleTabChange(tab)}
//                 >
//                   {tab}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
//           {/* Filter Bar */}
//           <div className="p-4 border-bottom bg-light d-flex justify-content-between align-items-center flex-wrap gap-2">
//             <div className="input-group input-group-sm" style={{ width: '280px' }}>
//               <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
//               <input 
//                 type="text" 
//                 className="form-control border-start-0 py-2" 
//                 placeholder={`Search ${activeTab}...`} 
//                 value={search}
//                 onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} 
//               />
//             </div>
//             <button className="btn btn-sm btn-outline-navy fw-bold px-4 rounded-pill d-flex align-items-center gap-2">
//               <i className="bi bi-download"></i> EXPORT
//             </button>
//           </div>

//           {/* Table Area */}
//           <div className="table-responsive">
//             <table className="table table-hover align-middle mb-0">
//               <thead style={{ backgroundColor: '#fcf6ef' }}>
//                 <tr style={{fontSize: '13px', color: '#002147'}}>
//                   {activeTab === 'clients' && <><th className="py-3 px-4">Client Name</th><th>Client ID</th><th>Number</th><th>Case Type</th><th>Status</th><th className="text-center">Action</th></>}
//                   {activeTab === 'milestones' && <><th className="py-3 px-4">Case Title</th><th>Client</th><th>Amount</th><th>Status</th><th>Notes</th><th className="text-center">Action</th></>}
//                   {activeTab === 'invoices' && <><th className="py-3 px-4">Invoice #</th><th>Date</th><th>Client</th><th>Amount</th><th>Status</th><th className="text-center">Download</th></>}
//                   {activeTab === 'payments' && <><th className="py-3 px-4">Date</th><th>Type</th><th>Category</th><th>Amount</th><th>Payer/Payee</th><th className="text-center">Status</th></>}
//                 </tr>
//               </thead>
//               <tbody style={{fontSize: '14px'}}>
//                 {currentItems.map((item) => (
//                   <tr key={item.id}>
//                     {activeTab === 'clients' && (
//                       <><td className="px-4 fw-bold">{item.name}</td><td>{item.clientId}</td><td>{item.number}</td><td>{item.caseType}</td>
//                       <td><span className="badge bg-primary-subtle text-primary px-3 rounded-pill">{item.status}</span></td>
//                       <td className="text-center"><i className="bi bi-pencil-square text-primary me-3" style={{cursor:'pointer'}}></i><i className="bi bi-trash text-danger" style={{cursor:'pointer'}}></i></td></>
//                     )}
//                     {activeTab === 'milestones' && (
//                       <><td className="px-4 fw-bold">{item.case}</td><td>{item.client}</td><td>{item.amount}</td>
//                       <td><span className={`badge px-3 rounded-pill ${item.status === 'Released' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>{item.status}</span></td>
//                       <td className="text-muted"><small>{item.note}</small></td>
//                       <td className="text-center"><button className="btn btn-sm btn-link text-navy text-decoration-none fw-bold">Request</button></td></>
//                     )}
//                     {activeTab === 'invoices' && (
//                       <><td className="px-4 fw-bold">{item.id}</td><td>{item.date}</td><td>{item.client}</td><td>{item.amount}</td>
//                       <td><span className="badge bg-info-subtle text-info px-3 rounded-pill">{item.status}</span></td>
//                       <td className="text-center"><i className="bi bi-file-earmark-pdf fs-5 text-danger" style={{cursor:'pointer'}}></i></td></>
//                     )}
//                     {activeTab === 'payments' && (
//                       <><td className="px-4">{item.date}</td><td className={`fw-bold ${item.type === 'Income' ? 'text-success' : 'text-danger'}`}>{item.type}</td>
//                       <td>{item.cat}</td><td className="fw-bold">{item.amount}</td><td>{item.party}</td>
//                       <td className="text-center"><span className="badge bg-light text-dark border px-2">Completed</span></td></>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* --- PROFESSIONAL PAGINATION BAR --- */}
//           <div className="d-flex justify-content-between align-items-center p-4 bg-light border-top flex-wrap gap-3">
            
//             {/* 1. Records Info */}
//             <div className="text-muted small fw-bold">
//               Showing {filteredData.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} records
//             </div>

//             {/* 2. Page X of Y Badge */}
//             <div className="badge border text-dark fw-bold px-3 py-2 rounded-pill shadow-sm bg-white" style={{ fontSize: '12px' }}>
//               <span style={{ color: '#002147' }}>Page {currentPage}</span> 
//               <span className="mx-2 text-muted">of</span> 
//               <span style={{ color: '#de9f57' }}>{totalPages || 1} {totalPages > 1 ? 'Pages' : 'Page'}</span>
//             </div>

//             {/* 3. Navigation Buttons */}
//             <nav>
//               <ul className="pagination pagination-sm mb-0 gap-1">
//                 <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                   <button className="page-link border-0 rounded-circle shadow-sm" onClick={() => paginate(currentPage - 1)}>
//                     <i className="bi bi-chevron-left"></i>
//                   </button>
//                 </li>
                
//                 {[...Array(totalPages)].map((_, i) => (
//                   <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//                     <button 
//                       className="page-link border-0 rounded-3 px-3 shadow-sm mx-1" 
//                       onClick={() => paginate(i + 1)}
//                       style={{ 
//                         backgroundColor: currentPage === i + 1 ? '#002147' : '#fff',
//                         color: currentPage === i + 1 ? 'white' : '#002147'
//                       }}
//                     >
//                       {i + 1}
//                     </button>
//                   </li>
//                 ))}

//                 <li className={`page-item ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}`}>
//                   <button className="page-link border-0 rounded-circle shadow-sm" onClick={() => paginate(currentPage + 1)}>
//                     <i className="bi bi-chevron-right"></i>
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .active-pill { background-color: #002147 !important; color: white !important; }
//         .inactive-pill { color: #666 !important; background: transparent !important; }
//         .inactive-pill:hover { color: #002147 !important; background: #f8f9fa !important; }
        
//         .btn-outline-navy { border: 1.5px solid #002147; color: #002147; background: transparent; transition: 0.3s; }
//         .btn-outline-navy:hover { background: #002147; color: white; }
        
//         .text-navy { color: #002147; }
//         .table th { border-top: 0; }
//         .form-control:focus { border-color: #de9f57; box-shadow: none; }

//         .page-link { color: #002147; font-weight: bold; cursor: pointer; transition: 0.2s; }
//         .page-link:hover { background-color: #f1f5f9; color: #de9f57; }
//         .page-item.disabled .page-link { color: #ccc; cursor: not-allowed; background-color: #fff; }
        
//         :global(.container-fluid) { max-width: 100% !important; }
//       `}</style>
//     </AttorneyLayout>
//   );
// }


// import React, { useState } from 'react';
// import Head from 'next/head';
// import AttorneyLayout from '../../components/layout/AttorneyLayout';

// export default function ClientTransactionPage() {
//   const [activeTab, setActiveTab] = useState('clients');
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // --- DYNAMIC DATA STATES ---
//   const [clients, setClients] = useState([
//     { id: 1, name: 'Rajesh Malhotra', clientId: 'CL-8821', number: '9876543210', caseType: 'Criminal', status: 'Scheduled' },
//     { id: 2, name: 'Suman Lata', clientId: 'CL-9902', number: '9988776655', caseType: 'Civil', status: 'Completed' },
//     { id: 3, name: 'Amit Sharma', clientId: 'CL-1023', number: '9812345678', caseType: 'Family', status: 'Pending' },
//     { id: 4, name: 'Priya Verma', clientId: 'CL-4456', number: '9900112233', caseType: 'Criminal', status: 'Scheduled' },
//     { id: 5, name: 'Rahul Singh', clientId: 'CL-7788', number: '9845612300', caseType: 'Corporate', status: 'Active' },
//     { id: 6, name: 'Kavita Devi', clientId: 'CL-2233', number: '9123456789', caseType: 'Civil', status: 'Closed' },
//     { id: 7, name: 'Suresh Raina', clientId: 'CL-5544', number: '9877665544', caseType: 'Criminal', status: 'Scheduled' },
//   ]);

//   const [milestones, setMilestones] = useState([
//     { id: 101, case: 'State vs Rajesh', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Released', note: 'Initial Filing' },
//     { id: 102, case: 'Land Dispute', client: 'Suman Lata', amount: '₹12,000', status: 'Pending', note: 'Evidence submission' },
//     { id: 103, case: 'Divorce Case', client: 'Amit Sharma', amount: '₹8,000', status: 'Pending', note: 'First Hearing' },
//     { id: 104, case: 'Theft Case', client: 'Priya Verma', amount: '₹3,000', status: 'Released', note: 'Documentation' },
//     { id: 105, case: 'Merger Agreement', client: 'Rahul Singh', amount: '₹50,000', status: 'Pending', note: 'Final Draft' },
//     { id: 106, case: 'Property Suit', client: 'Kavita Devi', amount: '₹15,000', status: 'Released', note: 'Title Search' },
//     { id: 107, case: 'Bail Application', client: 'Suresh Raina', amount: '₹7,500', status: 'Pending', note: 'Urgent' },
//   ]);

//   const [invoices, setInvoices] = useState([
//     { id: 'INV-001', date: '2025-12-20', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Paid' },
//     { id: 'INV-002', date: '2025-12-22', client: 'Suman Lata', amount: '₹12,000', status: 'Generated' },
//     { id: 'INV-003', date: '2025-12-23', client: 'Amit Sharma', amount: '₹8,000', status: 'Paid' },
//   ]);

//   const [payments, setPayments] = useState([
//     { id: 201, date: '2025-12-21', type: 'Income', cat: 'Milestone', amount: '₹5,000', party: 'Rajesh Malhotra' },
//     { id: 202, date: '2025-12-22', type: 'Expense', cat: 'Office Supplies', amount: '₹1,200', party: 'Stationary Shop' },
//   ]);

//   // --- EDIT STATE ---
//   const [editingItem, setEditingItem] = useState(null);

//   // --- FUNCTIONALITY: DELETE ---
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this record?")) {
//       if (activeTab === 'clients') setClients(clients.filter(item => item.id !== id));
//       if (activeTab === 'milestones') setMilestones(milestones.filter(item => item.id !== id));
//       if (activeTab === 'invoices') setInvoices(invoices.filter(item => item.id !== id));
//       if (activeTab === 'payments') setPayments(payments.filter(item => item.id !== id));
//     }
//   };

//   // --- FUNCTIONALITY: EDIT ---
//   const handleEditClick = (item) => {
//     setEditingItem({ ...item }); // Open Edit Form
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     if (activeTab === 'clients') setClients(clients.map(item => item.id === editingItem.id ? editingItem : item));
//     if (activeTab === 'milestones') setMilestones(milestones.map(item => item.id === editingItem.id ? editingItem : item));
//     if (activeTab === 'invoices') setInvoices(invoices.map(item => item.id === editingItem.id ? editingItem : item));
//     if (activeTab === 'payments') setPayments(payments.map(item => item.id === editingItem.id ? editingItem : item));
//     setEditingItem(null); // Close Form
//   };

//   // --- GET ACTIVE DATA ---
//   const getActiveData = () => {
//     let data = [];
//     if (activeTab === 'clients') data = clients;
//     else if (activeTab === 'milestones') data = milestones;
//     else if (activeTab === 'invoices') data = invoices;
//     else if (activeTab === 'payments') data = payments;

//     if (search) {
//       return data.filter(item => Object.values(item).some(val => String(val).toLowerCase().includes(search.toLowerCase())));
//     }
//     return data;
//   };

//   const filteredData = getActiveData();
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setCurrentPage(1);
//     setSearch('');
//   };

//   return (
//     <AttorneyLayout>
//       <Head>
//         <title>Lawstick | Client & Transactions</title>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
//       </Head>

//       <div className="container-fluid px-0">
//         <div className="mb-4">
//           <h3 className="fw-bold mb-1" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Client & Transaction Management</h3>
//           <p className="text-muted small">Manage your client records, payment milestones, and financial invoices.</p>
//         </div>

//         {/* Tab Pills */}
//         <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 gap-3">
//           <ul className="nav nav-pills gap-2 p-1 bg-white rounded-pill shadow-sm border">
//             {['clients', 'milestones', 'invoices', 'payments'].map((tab) => (
//               <li className="nav-item" key={tab}>
//                 <button 
//                   className={`nav-link rounded-pill px-4 fw-bold text-uppercase ${activeTab === tab ? 'active-pill' : 'inactive-pill'}`}
//                   style={{fontSize: '12px'}}
//                   onClick={() => handleTabChange(tab)}
//                 >
//                   {tab}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* EDIT FORM OVERLAY (JAB EDIT PAR CLICK KAREIN) */}
//         {editingItem && (
//           <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{zIndex: 9999}}>
//              <div className="bg-white p-4 rounded-4 shadow-lg" style={{width: '400px'}}>
//                 <h5 className="fw-bold mb-3" style={{color: '#002147'}}>Update Details</h5>
//                 <input className="form-control mb-2" value={editingItem.name || editingItem.case || editingItem.id} onChange={(e) => setEditingItem({...editingItem, name: e.target.value, case: e.target.value})} placeholder="Title/Name" />
//                 <input className="form-control mb-3" value={editingItem.amount || editingItem.number || ''} onChange={(e) => setEditingItem({...editingItem, amount: e.target.value, number: e.target.value})} placeholder="Amount/Number" />
//                 <div className="d-flex gap-2">
//                   <button className="btn btn-navy flex-grow-1" onClick={handleUpdate}>Save</button>
//                   <button className="btn btn-outline-secondary flex-grow-1" onClick={() => setEditingItem(null)}>Cancel</button>
//                 </div>
//              </div>
//           </div>
//         )}

//         <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
//           {/* Search & Export */}
//           <div className="p-4 border-bottom bg-light d-flex justify-content-between align-items-center flex-wrap gap-2">
//             <div className="input-group input-group-sm" style={{ width: '280px' }}>
//               <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
//               <input type="text" className="form-control border-start-0 py-2" placeholder={`Search ${activeTab}...`} value={search} onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}} />
//             </div>
//             <button className="btn btn-sm btn-outline-navy fw-bold px-4 rounded-pill d-flex align-items-center gap-2">
//               <i className="bi bi-download"></i> EXPORT
//             </button>
//           </div>

//           <div className="table-responsive">
//             <table className="table table-hover align-middle mb-0">
//               <thead style={{ backgroundColor: '#fcf6ef' }}>
//                 <tr style={{fontSize: '13px', color: '#002147'}}>
//                   {activeTab === 'clients' && <><th className="py-3 px-4">Client Name</th><th>Client ID</th><th>Number</th><th>Case Type</th><th>Status</th><th className="text-center">Action</th></>}
//                   {activeTab === 'milestones' && <><th className="py-3 px-4">Case Title</th><th>Client</th><th>Amount</th><th>Status</th><th>Notes</th><th className="text-center">Action</th></>}
//                   {activeTab === 'invoices' && <><th className="py-3 px-4">Invoice #</th><th>Date</th><th>Client</th><th>Amount</th><th>Status</th><th className="text-center">Action</th></>}
//                   {activeTab === 'payments' && <><th className="py-3 px-4">Date</th><th>Type</th><th>Category</th><th>Amount</th><th>Payer/Payee</th><th className="text-center">Action</th></>}
//                 </tr>
//               </thead>
//               <tbody style={{fontSize: '14px'}}>
//                 {currentItems.map((item) => (
//                   <tr key={item.id}>
//                     {activeTab === 'clients' && (
//                       <><td className="px-4 fw-bold">{item.name}</td><td>{item.clientId}</td><td>{item.number}</td><td>{item.caseType}</td>
//                       <td><span className="badge bg-primary-subtle text-primary px-3 rounded-pill">{item.status}</span></td></>
//                     )}
//                     {activeTab === 'milestones' && (
//                       <><td className="px-4 fw-bold">{item.case}</td><td>{item.client}</td><td>{item.amount}</td>
//                       <td><span className={`badge px-3 rounded-pill ${item.status === 'Released' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>{item.status}</span></td>
//                       <td className="text-muted"><small>{item.note}</small></td></>
//                     )}
//                     {activeTab === 'invoices' && (
//                       <><td className="px-4 fw-bold">{item.id}</td><td>{item.date}</td><td>{item.client}</td><td>{item.amount}</td>
//                       <td><span className="badge bg-info-subtle text-info px-3 rounded-pill">{item.status}</span></td></>
//                     )}
//                     {activeTab === 'payments' && (
//                       <><td className="px-4">{item.date}</td><td className={`fw-bold ${item.type === 'Income' ? 'text-success' : 'text-danger'}`}>{item.type}</td>
//                       <td>{item.cat}</td><td className="fw-bold">{item.amount}</td><td>{item.party}</td></>
//                     )}
                    
//                     {/* UNIVERSAL ACTION BUTTONS FOR ALL TABS */}
//                     <td className="text-center">
//                       <i className="bi bi-pencil-square text-primary me-3" style={{cursor:'pointer'}} onClick={() => handleEditClick(item)}></i>
//                       <i className="bi bi-trash text-danger" style={{cursor:'pointer'}} onClick={() => handleDelete(item.id)}></i>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Bar */}
//           <div className="d-flex justify-content-between align-items-center p-4 bg-light border-top flex-wrap gap-3">
//             <div className="text-muted small fw-bold">
//               Showing {filteredData.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} records
//             </div>
//             <div className="badge border text-dark fw-bold px-3 py-2 rounded-pill shadow-sm bg-white" style={{ fontSize: '12px' }}>
//               <span style={{ color: '#002147' }}>Page {currentPage}</span> 
//               <span className="mx-2 text-muted">of</span> 
//               <span style={{ color: '#de9f57' }}>{totalPages || 1} {totalPages > 1 ? 'Pages' : 'Page'}</span>
//             </div>
//             <nav>
//               <ul className="pagination pagination-sm mb-0 gap-1">
//                 <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                   <button className="page-link border-0 rounded-circle shadow-sm" onClick={() => paginate(currentPage - 1)}><i className="bi bi-chevron-left"></i></button>
//                 </li>
//                 {[...Array(totalPages)].map((_, i) => (
//                   <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//                     <button className="page-link border-0 rounded-3 px-3 shadow-sm mx-1" onClick={() => paginate(i + 1)} style={{ backgroundColor: currentPage === i + 1 ? '#002147' : '#fff', color: currentPage === i + 1 ? 'white' : '#002147' }}>{i + 1}</button>
//                   </li>
//                 ))}
//                 <li className={`page-item ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}`}>
//                   <button className="page-link border-0 rounded-circle shadow-sm" onClick={() => paginate(currentPage + 1)}><i className="bi bi-chevron-right"></i></button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .active-pill { background-color: #002147 !important; color: white !important; }
//         .inactive-pill { color: #666 !important; background: transparent !important; }
//         .inactive-pill:hover { color: #002147 !important; background: #f8f9fa !important; }
//         .btn-outline-navy { border: 1.5px solid #002147; color: #002147; background: transparent; transition: 0.3s; }
//         .btn-outline-navy:hover { background: #002147; color: white; }
//         .btn-navy { background: #002147; color: white; }
//         .page-link { color: #002147; font-weight: bold; cursor: pointer; }
//         .page-item.disabled .page-link { color: #ccc; cursor: not-allowed; }
//         :global(.container-fluid) { max-width: 100% !important; }
//       `}</style>
//     </AttorneyLayout>
//   );
// }

import React, { useState } from 'react';
import Head from 'next/head';
import AttorneyLayout from '../../components/layout/AttorneyLayout';

export default function ClientTransactionPage() {
  const [activeTab, setActiveTab] = useState('clients');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // --- 1. DATA STATES (SAB KUCH AB STATE MEIN HAI TAAKI EDIT/DELETE HO SAKE) ---
  const [clients, setClients] = useState([
    { id: 1, name: 'Rajesh Malhotra', clientId: 'CL-8821', number: '9876543210', caseType: 'Criminal', status: 'Scheduled' },
    { id: 2, name: 'Suman Lata', clientId: 'CL-9902', number: '9988776655', caseType: 'Civil', status: 'Completed' },
    { id: 3, name: 'Amit Sharma', clientId: 'CL-1023', number: '9812345678', caseType: 'Family', status: 'Pending' },
    { id: 4, name: 'Priya Verma', clientId: 'CL-4456', number: '9900112233', caseType: 'Criminal', status: 'Scheduled' },
    { id: 5, name: 'Rahul Singh', clientId: 'CL-7788', number: '9845612300', caseType: 'Corporate', status: 'Active' },
    { id: 6, name: 'Kavita Devi', clientId: 'CL-2233', number: '9123456789', caseType: 'Civil', status: 'Closed' },
  ]);

  const [milestones, setMilestones] = useState([
    { id: 101, case: 'State vs Rajesh', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Released', note: 'Initial Filing' },
    { id: 102, case: 'Land Dispute', client: 'Suman Lata', amount: '₹12,000', status: 'Pending', note: 'Evidence submission' },
  ]);

  const [invoices, setInvoices] = useState([
    { id: 'INV-001', date: '2025-12-20', client: 'Rajesh Malhotra', amount: '₹5,000', status: 'Paid' },
  ]);

  const [payments, setPayments] = useState([
    { id: 201, date: '2025-12-21', type: 'Income', cat: 'Milestone', amount: '₹5,000', party: 'Rajesh Malhotra' },
  ]);

  // --- 2. EDIT MODAL STATE ---
  const [editingItem, setEditingItem] = useState(null);

  // --- 3. FUNCTIONS (DELETE & UPDATE) ---
  const handleDelete = (id) => {
    if (window.confirm("Kyan aap is record ko delete karna chahte hain?")) {
      if (activeTab === 'clients') setClients(clients.filter(i => i.id !== id));
      if (activeTab === 'milestones') setMilestones(milestones.filter(i => i.id !== id));
      if (activeTab === 'invoices') setInvoices(invoices.filter(i => i.id !== id));
      if (activeTab === 'payments') setPayments(payments.filter(i => i.id !== id));
    }
  };

  const handleEditClick = (item) => setEditingItem({ ...item });

  const handleUpdateSave = (e) => {
    e.preventDefault();
    if (activeTab === 'clients') setClients(clients.map(i => i.id === editingItem.id ? editingItem : i));
    if (activeTab === 'milestones') setMilestones(milestones.map(i => i.id === editingItem.id ? editingItem : i));
    if (activeTab === 'invoices') setInvoices(invoices.map(i => i.id === editingItem.id ? editingItem : i));
    if (activeTab === 'payments') setPayments(payments.map(i => i.id === editingItem.id ? editingItem : i));
    setEditingItem(null);
  };

  // --- 4. LOGIC FOR PAGINATION & SEARCH ---
  const getActiveData = () => {
    let data = [];
    if (activeTab === 'clients') data = clients;
    else if (activeTab === 'milestones') data = milestones;
    else if (activeTab === 'invoices') data = invoices;
    else if (activeTab === 'payments') data = payments;
    if (search) return data.filter(i => Object.values(i).some(v => String(v).toLowerCase().includes(search.toLowerCase())));
    return data;
  };

  const filteredData = getActiveData();
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <AttorneyLayout>
      <Head>
        <title>Lawstick | Client & Transactions</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      </Head>

      <div className="container-fluid px-0">
        <div className="mb-4">
          <h3 className="fw-bold mb-1" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Client & Transaction Management</h3>
          <p className="text-muted small">Manage records, milestones, and invoices.</p>
        </div>

        {/* Tab Selection */}
        <div className="d-flex mb-3">
          <ul className="nav nav-pills gap-2 p-1 bg-white rounded-pill shadow-sm border">
            {['clients', 'milestones', 'invoices', 'payments'].map((tab) => (
              <li key={tab}><button className={`nav-link rounded-pill px-4 fw-bold text-uppercase ${activeTab === tab ? 'active-pill' : 'inactive-pill'}`} onClick={() => {setActiveTab(tab); setCurrentPage(1);}} style={{fontSize: '12px'}}>{tab}</button></li>
            ))}
          </ul>
        </div>

        {/* --- DYNAMIC EDIT MODAL --- */}
        {editingItem && (
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{zIndex: 9999}}>
            <div className="bg-white p-4 rounded-4 shadow-lg border" style={{width: '450px', maxHeight: '90vh', overflowY: 'auto'}}>
              <h5 className="fw-bold mb-4" style={{color: '#002147', borderBottom: '2px solid #de9f57', paddingBottom: '10px'}}>Edit {activeTab.slice(0,-1)} Details</h5>
              <form onSubmit={handleUpdateSave}>
                <div className="row g-3">
                  {/* Clients Fields */}
                  {activeTab === 'clients' && (
                    <>
                      <div className="col-12"><label className="small fw-bold">Name</label><input className="form-control" value={editingItem.name} onChange={e => setEditingItem({...editingItem, name: e.target.value})} /></div>
                      <div className="col-6"><label className="small fw-bold">Number</label><input className="form-control" value={editingItem.number} onChange={e => setEditingItem({...editingItem, number: e.target.value})} /></div>
                      <div className="col-6"><label className="small fw-bold">Case Type</label><input className="form-control" value={editingItem.caseType} onChange={e => setEditingItem({...editingItem, caseType: e.target.value})} /></div>
                      <div className="col-12"><label className="small fw-bold">Status</label><select className="form-select" value={editingItem.status} onChange={e => setEditingItem({...editingItem, status: e.target.value})}><option>Scheduled</option><option>Completed</option><option>Pending</option><option>Active</option></select></div>
                    </>
                  )}
                  {/* Milestones Fields */}
                  {activeTab === 'milestones' && (
                    <>
                      <div className="col-12"><label className="small fw-bold">Case Title</label><input className="form-control" value={editingItem.case} onChange={e => setEditingItem({...editingItem, case: e.target.value})} /></div>
                      <div className="col-6"><label className="small fw-bold">Amount</label><input className="form-control" value={editingItem.amount} onChange={e => setEditingItem({...editingItem, amount: e.target.value})} /></div>
                      <div className="col-6"><label className="small fw-bold">Status</label><select className="form-select" value={editingItem.status} onChange={e => setEditingItem({...editingItem, status: e.target.value})}><option>Released</option><option>Pending</option></select></div>
                      <div className="col-12"><label className="small fw-bold">Note</label><textarea className="form-control" value={editingItem.note} onChange={e => setEditingItem({...editingItem, note: e.target.value})} /></div>
                    </>
                  )}
                  {/* Invoices & Payments (Similar Logic) */}
                  {(activeTab === 'invoices' || activeTab === 'payments') && (
                    <>
                      <div className="col-12"><label className="small fw-bold">Client/Party</label><input className="form-control" value={editingItem.client || editingItem.party} onChange={e => setEditingItem({...editingItem, client: e.target.value, party: e.target.value})} /></div>
                      <div className="col-6"><label className="small fw-bold">Amount</label><input className="form-control" value={editingItem.amount} onChange={e => setEditingItem({...editingItem, amount: e.target.value})} /></div>
                      <div className="col-6"><label className="small fw-bold">Date</label><input type="date" className="form-control" value={editingItem.date} onChange={e => setEditingItem({...editingItem, date: e.target.value})} /></div>
                    </>
                  )}
                </div>
                <div className="d-flex gap-2 mt-4">
                  <button type="submit" className="btn btn-navy flex-grow-1 fw-bold">Save Changes</button>
                  <button type="button" className="btn btn-outline-secondary flex-grow-1 fw-bold" onClick={() => setEditingItem(null)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Main Table Card */}
        <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
          <div className="p-4 border-bottom bg-light d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="input-group input-group-sm" style={{ width: '280px' }}>
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
              <input type="text" className="form-control border-start-0 py-2" placeholder={`Search...`} value={search} onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}} />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead style={{ backgroundColor: '#fcf6ef' }}>
                <tr style={{fontSize: '13px', color: '#002147'}}>
                  {activeTab === 'clients' && <><th className="py-3 px-4">Name</th><th>ID</th><th>Number</th><th>Case</th><th>Status</th><th className="text-center">Action</th></>}
                  {activeTab === 'milestones' && <><th className="py-3 px-4">Case</th><th>Client</th><th>Amount</th><th>Status</th><th>Note</th><th className="text-center">Action</th></>}
                  {activeTab === 'invoices' && <><th className="py-3 px-4">INV#</th><th>Date</th><th>Client</th><th>Amount</th><th>Status</th><th className="text-center">Action</th></>}
                  {activeTab === 'payments' && <><th className="py-3 px-4">Date</th><th>Type</th><th>Cat</th><th>Amount</th><th>Party</th><th className="text-center">Action</th></>}
                </tr>
              </thead>
              <tbody style={{fontSize: '14px'}}>
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    {activeTab === 'clients' && <><td className="px-4 fw-bold">{item.name}</td><td>{item.clientId}</td><td>{item.number}</td><td>{item.caseType}</td><td><span className="badge bg-primary-subtle text-primary px-3 rounded-pill">{item.status}</span></td></>}
                    {activeTab === 'milestones' && <><td className="px-4 fw-bold">{item.case}</td><td>{item.client}</td><td>{item.amount}</td><td><span className={`badge px-3 rounded-pill ${item.status === 'Released' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>{item.status}</span></td><td>{item.note}</td></>}
                    {activeTab === 'invoices' && <><td className="px-4 fw-bold">{item.id}</td><td>{item.date}</td><td>{item.client}</td><td>{item.amount}</td><td><span className="badge bg-info-subtle text-info px-3 rounded-pill">{item.status}</span></td></>}
                    {activeTab === 'payments' && <><td className="px-4">{item.date}</td><td className={item.type === 'Income' ? 'text-success fw-bold' : 'text-danger fw-bold'}>{item.type}</td><td>{item.cat}</td><td className="fw-bold">{item.amount}</td><td>{item.party}</td></>}
                    <td className="text-center">
                      <i className="bi bi-pencil-square text-primary me-3" style={{cursor:'pointer'}} onClick={() => handleEditClick(item)}></i>
                      <i className="bi bi-trash text-danger" style={{cursor:'pointer'}} onClick={() => handleDelete(item.id)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center p-4 bg-light border-top flex-wrap gap-3">
            <div className="text-muted small fw-bold">Showing {filteredData.length > 0 ? (currentPage-1)*itemsPerPage + 1 : 0} to {Math.min(currentPage*itemsPerPage, filteredData.length)} of {filteredData.length} records</div>
            <div className="badge border text-dark fw-bold px-3 py-2 rounded-pill shadow-sm bg-white" style={{ fontSize: '12px' }}>
              <span style={{ color: '#002147' }}>Page {currentPage}</span> <span className="mx-2 text-muted">of</span> <span style={{ color: '#de9f57' }}>{totalPages || 1}</span>
            </div>
            <nav>
              <ul className="pagination pagination-sm mb-0 gap-1">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}><button className="page-link border-0 rounded-circle shadow-sm" onClick={() => setCurrentPage(currentPage-1)}><i className="bi bi-chevron-left"></i></button></li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}><button className="page-link border-0 rounded-3 px-3 shadow-sm mx-1" onClick={() => setCurrentPage(i+1)} style={{ backgroundColor: currentPage === i+1 ? '#002147' : '#fff', color: currentPage === i+1 ? 'white' : '#002147' }}>{i+1}</button></li>
                ))}
                <li className={`page-item ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}`}><button className="page-link border-0 rounded-circle shadow-sm" onClick={() => setCurrentPage(currentPage+1)}><i className="bi bi-chevron-right"></i></button></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active-pill { background-color: #002147 !important; color: white !important; }
        .inactive-pill { color: #666 !important; background: transparent !important; }
        .inactive-pill:hover { color: #002147 !important; background: #f8f9fa !important; }
        .btn-navy { background: #002147; color: white; transition: 0.3s; }
        .btn-navy:hover { background: #de9f57; }
        .page-link { color: #002147; font-weight: bold; cursor: pointer; }
        .page-item.disabled .page-link { color: #ccc; cursor: not-allowed; }
        :global(.container-fluid) { max-width: 100% !important; }
      `}</style>
    </AttorneyLayout>
  );
}