
// import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link'; // Link import karna zaroori hai
// import { useRouter } from 'next/router'; // useRouter import karein

// export default function AttorneyDashboard() {
//   const router = useRouter(); 

//   return (
//     <div className="dashboard-page-wrapper">
//       <Head>
//         <title>LawStick | Attorney Dashboard</title>
//       </Head>

//       {/* Main Container */}
//       <div className="container pb-5" style={{ paddingTop: '120px' }}>
        
//         {/* --- TOP GREETING --- */}
//         <div className="mb-5 px-3">
//           <h1 className="display-5 text-navy mb-1" style={{ fontWeight: '400' }}>
//             Good Morning, <span className="fw-bold">Tasnia Sharin</span>
//           </h1>
//           <p className="text-muted small">
//             Here's a quick overview of your performance.<br />
//             Let's make today another successful day!
//           </p>
//         </div>

//         <div className="row g-4">
          
//           {/* --- LEFT SIDEBAR --- */}
//           <div className="col-12 col-lg-3">
//             <div className="card border-0 shadow-sm rounded-4 sidebar-main-card">
//               <div className="p-4 text-center border-bottom bg-white">
//                 <div className="sidebar-avatar-box mb-3 mx-auto shadow-sm">
//                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Profile" />
//                 </div>
//                 <h6 className="fw-bold mb-0 text-navy">Tasnia Sharin</h6>
//                 <p className="text-muted x-small mb-0">attorney@gmail.com</p>
//               </div>

//               <div className="card-body p-3">
//                 <nav className="nav flex-column sidebar-nav-links">
                  
//                   {/* Dashboard Link */}
//                   <Link href="/attorney-panel">
//                     <a className={`nav-link ${router.pathname === '/attorney-panel' ? 'active' : ''}`}>
//                         <i className="bi bi-grid-1x2 me-3"></i>
//                         <span>Dashboard</span>
//                     </a>
//                   </Link>

//                   {/* Case Details Link */}
//                   <Link href="/attorney-panel/cases">
//                     <a className={`nav-link ${router.pathname === '/attorney-panel/cases' ? 'active' : ''}`}>
//                         <i className="bi bi-clock-history me-3"></i>
//                         <span>Case Details</span>
//                     </a>
//                   </Link>

//                 <Link href="/attorney-panel/appointments">
//   <a className={`nav-link ${router.pathname === '/attorney-panel/appointments' ? 'active' : ''}`}>
//     <i className="bi bi-calendar2-check me-2"></i> Appointments
//   </a>
// </Link>             
                  
//                   <div className="mt-4 pt-3 border-top">
//                     <a href="#" className="nav-link"><i className="bi bi-info-circle me-3"></i><span>Help & Info</span></a>
//                     <a href="#" className="nav-link text-danger"><i className="bi bi-box-arrow-right me-3"></i><span>Logout</span></a>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </div>

//           {/* --- RIGHT DASHBOARD CONTENT --- */}
//           <div className="col-12 col-lg-9">
//             <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 main-content-card">
//               <h2 className="fw-bold text-navy mb-5" style={{fontFamily: 'serif', fontSize: '2.5rem'}}>Dashboard</h2>

//               {/* Stats Grid */}
//               <div className="row g-4 mb-5">
//                 {[
//                   { label: 'Success Cases', val: '0', icon: 'bi-hammer', color: '#10b981', bg: '#ecfdf5' },
//                   { label: 'Total Appointments', val: '36', icon: 'bi-hammer', color: '#f59e0b', bg: '#fffbeb' },
//                   { label: 'Total Cases', val: '9', icon: 'bi-scales', color: '#3b82f6', bg: '#eff6ff' }
//                 ].map((stat, i) => (
//                   <div key={i} className="col-12 col-md-4">
//                     <div className="card border shadow-sm rounded-4 p-4 text-center d-flex flex-column align-items-center bg-white">
//                        <div className="stat-icon-circle mb-3" style={{backgroundColor: stat.bg, color: stat.color}}>
//                           <i className={`bi ${stat.icon}`}></i>
//                        </div>
//                        <small className="text-muted fw-bold mb-1" style={{fontSize: '11px'}}>{stat.label}</small>
//                        <h1 className="fw-bold mb-0 text-navy" style={{fontSize: '3rem'}}>{stat.val}</h1>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Chart & Appointments Row */}
//               <div className="row g-4">
//                 <div className="col-12 col-md-6">
//                   <div className="card border rounded-4 p-4 h-100 shadow-none">
//                     <h6 className="fw-bold mb-5 text-navy">Case Overview</h6>
//                     <div className="gauge-outer mx-auto">
//                         <div className="gauge-arc color-yellow"></div>
//                         <div className="gauge-arc color-green"></div>
//                         <div className="gauge-arc color-blue"></div>
//                     </div>
//                     <div className="row g-1 mt-5 text-center">
//                         <div className="col-4"><span className="d-block text-warning fw-bold small">● 22.22%</span><span className="text-muted x-small">Pending</span></div>
//                         <div className="col-4"><span className="d-block text-success fw-bold small">● 0.00%</span><span className="text-muted x-small">Success</span></div>
//                         <div className="col-4"><span className="d-block text-primary fw-bold small">● 11.11%</span><span className="text-muted x-small">Ongoing</span></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-12 col-md-6">
//                   <div className="card border rounded-4 p-4 h-100 text-center d-flex flex-column justify-content-center">
//                     <h6 className="fw-bold mb-4 text-start text-navy">Upcoming Appointment</h6>
//                     <i className="bi bi-file-earmark-text display-3 text-light opacity-50"></i>
//                     <p className="text-muted x-small mt-3">No Upcoming Appointment</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .dashboard-page-wrapper { background-color: #f9fbff; min-height: 100vh; }
//         .text-navy { color: #002147; }
//         .x-small { font-size: 11px; }

//         /* Sidebar Styling */
//         .sidebar-avatar-box { width: 85px; height: 85px; border-radius: 18px; overflow: hidden; }
//         .sidebar-avatar-box img { width: 100%; height: 100%; object-fit: cover; }
        
//         .sidebar-nav-links .nav-link {
//           color: #4b5563 !important;
//           font-size: 14px; font-weight: 500; padding: 12px 15px;
//           display: flex; align-items: center; transition: 0.3s;
//         }
//         .sidebar-nav-links .nav-link:hover { color: #de9f57 !important; background: #fffaf4; }
//         .sidebar-nav-links .nav-link.active { 
//           color: #de9f57 !important; background: #fffaf4; font-weight: 700;
//           border-right: 3px solid #de9f57;
//         }

//         .stat-icon-circle { width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; }

//         .gauge-outer { position: relative; width: 220px; height: 110px; overflow: hidden; }
//         .gauge-arc { position: absolute; border-radius: 50%; border: 12px solid #f1f5f9; border-bottom-color: transparent; border-left-color: transparent; transform: rotate(-45deg); }
//         .color-yellow { width: 220px; height: 220px; top: 0; left: 0; border-top-color: #fbbf24; transform: rotate(-85deg); }
//         .color-green { width: 180px; height: 180px; top: 20px; left: 20px; border-top-color: #10b981; transform: rotate(-50deg); }
//         .color-blue { width: 140px; height: 140px; top: 40px; left: 40px; border-top-color: #3b82f6; transform: rotate(-10deg); }
//       `}</style>
//     </div>
//   );
// }

import AttorneyLayout from '../../components/layout/AttorneyLayout';

export default function AttorneyDashboard() {
  return (
    <div className="container-fluid">
      {/* GREETING */}
      <div className="mb-4">
        <h2 className="fw-bold text-navy">Good Morning, Tasnia Sharin</h2>
        <p className="text-muted small">Here's your performance overview for today.</p>
      </div>

      {/* STATS */}
      <div className="row g-4 mb-4">
        {[{l: 'Success Cases', v: '0', c: '#10b981', bg: '#ecfdf5'}, {l: 'Appointments', v: '36', c: '#f59e0b', bg: '#fffbeb'}, {l: 'Total Cases', v: '9', c: '#3b82f6', bg: '#eff6ff'}].map((s, i) => (
          <div key={i} className="col-md-4">
            <div className="card border-0 shadow-sm p-4 rounded-4 text-center h-100">
               <h1 className="fw-bold display-4 mb-1" style={{color: s.c}}>{s.v}</h1>
               <small className="fw-bold text-muted text-uppercase">{s.l}</small>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS (Inspired by LawStick Image) */}
      <div className="row g-4">
         <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 rounded-4 h-100">
               <h6 className="fw-bold mb-4">Case Overview</h6>
               {/* Simulating your semi-circle chart */}
               <div className="text-center py-5 border rounded-3 mb-3">Circular Chart Placeholder</div>
               <div className="d-flex justify-content-around small fw-bold">
                  <span className="text-warning">● Pending</span> <span className="text-success">● Success</span> <span className="text-primary">● Ongoing</span>
               </div>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="card border-0 shadow-sm p-4 rounded-4 h-100 text-center">
               <h6 className="fw-bold text-start mb-4">Upcoming Appointment</h6>
               <div className="py-5"><i className="bi bi-journal-x display-1 text-light"></i><p className="text-muted mt-2">No Appointment</p></div>
            </div>
         </div>
      </div>
    </div>
  );
}

