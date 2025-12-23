// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function AttorneyLayout({ children }) {
//   const router = useRouter();
//   const [showSidebar, setShowSidebar] = useState(false);

//   // Saare links yahan ek baar define karein
//   const menuItems = [
//     { name: 'Dashboard', icon: 'bi-grid-fill', path: '/attorney-panel' },
//     { name: 'Case Details', icon: 'bi-clock-history', path: '/attorney-panel/cases' },
//     { name: 'Appointments', icon: 'bi-calendar-event', path: '/attorney-panel/appointments' },
   
//   ];

//   return (
//     <div className="dashboard-wrapper d-flex">
      
//       {/* --- SHARED SIDEBAR --- */}
//       <aside className={`dashboard-sidebar ${showSidebar ? 'active' : ''}`}>
//         <div className="sidebar-header p-4 text-center">
//           <div className="profile-section">
//              <div className="profile-img-container shadow">
//                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Tasnia" />
//              </div>
//              <h6 className="mt-3 mb-0 fw-bold text-navy">Tasnia Sharin</h6>
//              <p className="text-muted xx-small">attorney@gmail.com</p>
//           </div>
//         </div>

//         <nav className="sidebar-nav px-3 mt-3">
//           {menuItems.map((item, idx) => (
//             <Link key={idx} href={item.path}>
//               <a className={`nav-link-custom ${router.pathname === item.path ? 'active' : ''}`}>
//                 <i className={`bi ${item.icon} me-3`}></i> {item.name}
//               </a>
//             </Link>
//           ))}
//           <div className="mt-4 pt-4 border-top">
//             <Link href="/logout"><a className="nav-link-custom text-danger fw-bold"><i className="bi bi-box-arrow-right me-3"></i> Logout</a></Link>
//           </div>
//         </nav>
//       </aside>

//       {/* --- MAIN AREA --- */}
//       <main className="dashboard-main flex-grow-1">
//         {/* SHARED TOP HEADER */}
//         <header className="dashboard-header d-flex align-items-center justify-content-between px-4 py-3 bg-white shadow-sm sticky-top">
//            <div className="d-flex align-items-center gap-3">
//               <button className="btn d-lg-none" onClick={() => setShowSidebar(!showSidebar)}>
//                 <i className="bi bi-list fs-3"></i>
//               </button>
//               <h5 className="mb-0 fw-bold text-navy">Attorney Panel</h5>
//            </div>
           
//            <div className="d-flex align-items-center gap-4">
//               <i className="bi bi-bell fs-5 text-muted cursor-pointer"></i>
//               <div className="d-flex align-items-center gap-2 border-start ps-3">
//                  <div className="text-end d-none d-sm-block">
//                     <p className="mb-0 fw-bold x-small text-navy">Adv. Tasnia Sharin</p>
//                  </div>
//                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" className="avatar-rounded" alt="Avatar" />
//               </div>
//            </div>
//         </header>

//         {/* PAGE CONTENT COMES HERE */}
//         <div className="dashboard-content-container p-4">
//            {children}
//         </div>
//       </main>

//       {showSidebar && <div className="sidebar-overlay d-lg-none" onClick={() => setShowSidebar(false)}></div>}

//       <style jsx>{`
//         .dashboard-wrapper { background-color: #f4f7fc; min-height: 100vh; }
//         .text-navy { color: #002147; }
//         .xx-small { font-size: 11px; }
//         .x-small { font-size: 13px; }

//         /* Sidebar Styles */
//         .dashboard-sidebar {
//           width: 260px; height: 100vh; background: #fff;
//           border-right: 1px solid #eee; position: fixed;
//           left: 0; top: 0; z-index: 1000; transition: 0.3s;
//         }
//         .dashboard-main { margin-left: 260px; transition: 0.3s; }

//         .profile-img-container { width: 75px; height: 75px; margin: 0 auto; border-radius: 15px; overflow: hidden; border: 3px solid #fff; }
//         .profile-img-container img { width: 100%; height: 100%; object-fit: cover; }
//         .avatar-rounded { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; }

//         .nav-link-custom {
//           display: flex; align-items: center; padding: 12px 15px;
//           border-radius: 10px; color: #4b5563; text-decoration: none;
//           font-weight: 500; font-size: 14px; margin-bottom: 4px; transition: 0.2s;
//         }
//         .nav-link-custom:hover { background: #f8fafc; color: #de9f57; }
//         .nav-link-custom.active { background: #fffaf4; color: #de9f57; font-weight: 700; border-right: 4px solid #de9f57; }

//         @media (max-width: 991px) {
//           .dashboard-sidebar { left: -260px; }
//           .dashboard-sidebar.active { left: 0; }
//           .dashboard-main { margin-left: 0; }
//           .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 999; }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AttorneyLayout({ children }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Subscription check (Mock logic)
    const plan = localStorage.getItem('userPlan');
    if (plan) setIsSubscribed(true);
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: 'bi-grid-fill', path: '/attorney-panel' },
    { name: 'Case Details', icon: 'bi-clock-history', path: '/attorney-panel/cases' },
    { name: 'Subscription', icon: 'bi-credit-card-fill', path: '/attorney-panel/subscription' },
  ];

  return (
    <div className="dashboard-wrapper d-flex">
      <aside className={`dashboard-sidebar ${showSidebar ? 'active' : ''}`}>
        <div className="sidebar-header p-4 text-center">
             <div className="profile-img-container shadow">
                <img src="/assets/images/attorney1.png" alt="Tasnia" />
             </div>
             <h6 className="mt-3 mb-0 fw-bold text-navy">Tasnia Sharin</h6>
             <p className="text-muted xx-small">attorney@gmail.com</p>
        </div>

        <nav className="sidebar-nav px-3 mt-3">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.path}>
              <a className={`nav-link-custom ${router.pathname === item.path ? 'active' : ''}`}>
                <i className={`bi ${item.icon} me-3`}></i> {item.name}
              </a>
            </Link>
          ))}
          <div className="mt-4 pt-4 border-top">
            <Link href="/logout"><a className="nav-link-custom text-danger fw-bold"><i className="bi bi-box-arrow-right me-3"></i> Logout</a></Link>
          </div>
        </nav>
      </aside>

      <main className="dashboard-main flex-grow-1">
        <header className="dashboard-header d-flex align-items-center justify-content-between px-4 py-3 bg-white shadow-sm sticky-top">
           <button className="btn d-lg-none" onClick={() => setShowSidebar(!showSidebar)}>
              <i className="bi bi-list fs-3"></i>
           </button>
           <h5 className="mb-0 fw-bold text-navy">Attorney Panel</h5>
           <div className="d-flex align-items-center gap-2">
              <p className="mb-0 fw-bold x-small text-navy d-none d-sm-block">Adv. Tasnia Sharin</p>
              <img src="/assets/images/attorney1.png" className="avatar-rounded" alt="Avatar" />
           </div>
        </header>

        <div className="dashboard-content-container p-4">
           {children}
        </div>
      </main>

      <style jsx>{`
        .dashboard-wrapper { background-color: #f4f7fc; min-height: 100vh; }
        .text-navy { color: #002147; }
        .dashboard-sidebar { width: 260px; height: 100vh; background: #fff; border-right: 1px solid #eee; position: fixed; left: 0; top: 0; z-index: 1000; transition: 0.3s; }
        .dashboard-main { margin-left: 260px; transition: 0.3s; }
        .profile-img-container { width: 75px; height: 75px; margin: 0 auto; border-radius: 15px; overflow: hidden; border: 3px solid #fff; }
        .profile-img-container img { width: 100%; height: 100%; object-fit: cover; }
        .avatar-rounded { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; }
        .nav-link-custom { display: flex; align-items: center; padding: 12px 15px; border-radius: 10px; color: #4b5563; text-decoration: none; font-size: 14px; margin-bottom: 4px; }
        .nav-link-custom.active { background: #fffaf4; color: #de9f57; font-weight: 700; border-right: 4px solid #de9f57; }
        @media (max-width: 991px) { .dashboard-sidebar { left: -260px; } .dashboard-sidebar.active { left: 0; } .dashboard-main { margin-left: 0; } }
      `}</style>
    </div>
  );
}