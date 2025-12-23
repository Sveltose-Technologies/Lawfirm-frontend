
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function AttorneyLayout({ children }) {
//   const router = useRouter();
//   const [showSidebar, setShowSidebar] = useState(false);

//   const menuItems = [
//     { name: 'Dashboard', icon: 'bi-grid-fill', path: '/attorney-panel' },
//     { name: 'Appointments', icon: 'bi-calendar-check', path: '/attorney-panel/appointments' },
//     { name: 'Client Management', icon: 'bi-people-fill', path: '/attorney-panel/clients' },
//     { name: 'Case Details', icon: 'bi-clock-history', path: '/attorney-panel/cases' },
//     { name: 'Messages', icon: 'bi-chat-dots-fill', path: '/attorney-panel/messages' },
//     { name: 'Ticket Management', icon: 'bi-ticket-perforated-fill', path: '/attorney-panel/tickets' },
//     { name: 'Edit Profile', icon: 'bi-person-bounding-box', path: '/attorney-panel/profile' },
//   ];

//   return (
//     <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f4f7fa' }}>
      
//       {/* --- HEADER --- */}
//       <header className="bg-white shadow-sm py-3 px-4 border-bottom">
//         <div className="container-fluid d-flex align-items-center justify-content-between">
//           <div className="d-flex align-items-center">
//              <button className="btn d-lg-none me-2" onClick={() => setShowSidebar(!showSidebar)}>
//                 <i className="bi bi-list fs-3"></i>
//              </button>
//              <h4 className="mb-0 fw-bold" style={{color: '#002147'}}>LAWSTICK</h4>
//           </div>
//           <div className="d-flex align-items-center gap-3">
//              <div className="text-end d-none d-sm-block">
//                 <p className="mb-0 fw-bold small">Adv. Tasnia Sharin</p>
//              </div>
//              <img src="/assets/images/attorney1.png" className="rounded-circle border" width="35" height="35" alt="Avatar" />
//           </div>
//         </div>
//       </header>

//       {/* --- MAIN BODY (Sidebar + Content) --- */}
//       <div className="container py-4 flex-grow-1">
//         <div className="row g-4">
          
//           {/* Sidebar Column (NOT FIXED) */}
//           <aside className={`col-lg-3 ${showSidebar ? 'd-block' : 'd-none d-lg-block'}`}>
//             <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//               <div className="p-4 text-center border-bottom bg-white">
//                 <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
//                     <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm w-100 h-100" style={{ objectFit: 'cover', border: '4px solid #f8f9fa' }} alt="avatar" />
//                 </div>
//                 <h5 className="fw-bold mb-1" style={{color: '#002147'}}>Tasnia Sharin</h5>
//                 <p className="text-muted small mb-0">attorney@gmail.com</p>
//               </div>
//               <div className="p-3 bg-white">
//                 <nav className="nav flex-column sidebar-nav">
//                   {menuItems.map((item, idx) => (
//                     <Link key={idx} href={item.path}>
//                       <a className={`nav-link-custom ${router.pathname === item.path ? 'active' : ''}`}>
//                         <i className={`bi ${item.icon} me-3`}></i> {item.name}
//                       </a>
//                     </Link>
//                   ))}
//                   <div className="mt-4 pt-4 border-top">
//                     <Link href="/logout">
//                       <a className="nav-link-custom text-danger fw-bold"><i className="bi bi-box-arrow-right me-3"></i> Logout</a>
//                     </Link>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </aside>

//           {/* Content Column */}
//           <main className="col-lg-9">
//             {children}
//           </main>
//         </div>
//       </div>

//       {/* --- FOOTER --- */}
//       <footer className="bg-white border-top py-4 mt-auto">
//         <div className="container text-center">
//           <p className="mb-0 text-muted small">© 2025 Lawstick. All rights reserved.</p>
//         </div>
//       </footer>

//       <style jsx>{`
//         .nav-link-custom { display: flex; align-items: center; padding: 12px 15px; border-radius: 10px; color: #444; text-decoration: none; font-size: 14px; margin-bottom: 5px; transition: 0.3s; font-weight: 500; }
//         .nav-link-custom:hover { background: #f8f9fa; color: #de9f57; }
//         .nav-link-custom.active { background: #fcf6ef; color: #de9f57; font-weight: bold; }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AttorneyLayout({ children }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: 'bi-grid-fill', path: '/attorney-panel' },
    { name: 'Appointments', icon: 'bi-calendar-check', path: '/attorney-panel/appointments' },
    { name: 'Client Management', icon: 'bi-people-fill', path: '/attorney-panel/clients' },
    { name: 'Case Details', icon: 'bi-clock-history', path: '/attorney-panel/cases' },
    { name: 'Messages', icon: 'bi-chat-dots-fill', path: '/attorney-panel/messages' },
    { name: 'Ticket Management', icon: 'bi-ticket-perforated-fill', path: '/attorney-panel/tickets' },
    { name: 'Edit Profile', icon: 'bi-person-bounding-box', path: '/attorney-panel/profile' },
  ];

  return (
    <div style={{ backgroundColor: '#f4f7fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
   

      {/* --- MAIN BODY (Sidebar + Content) --- */}
      <div className="container py-5 flex-grow-1">
        <div className="row g-4 pt-5">
          {/* Sidebar Column */}
          <aside className={`col-lg-3 ${showSidebar ? 'd-block' : 'd-none d-lg-block'}`}>
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="p-4 text-center border-bottom bg-white">
                <div className="mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                    <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm w-100 h-100" style={{ objectFit: 'cover', border: '4px solid #f8f9fa' }} alt="avatar" />
                </div>
                <h4 className="fw-bold mb-1" style={{color: '#002147'}}>Tasnia Sharin</h4>
                <p className="text-muted mb-0 fs-6">attorney@gmail.com</p>
              </div>
              <div className="p-3 bg-white">
                <nav className="nav flex-column sidebar-nav">
                  {menuItems.map((item, idx) => (
                    <Link key={idx} href={item.path}>
                      <a className={`nav-link ${router.pathname === item.path ? 'active' : ''}`}>
                        <i className={`bi ${item.icon} me-3`}></i> {item.name}
                      </a>
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-top">
                    <Link href="/logout">
                      <a className="nav-link text-danger fw-bold"><i className="bi bi-box-arrow-right me-3"></i> Logout</a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </aside>

          {/* Page Content Column */}
          <main className="col-lg-9">
            {children}
          </main>
        </div>
      </div>

   

      <style jsx>{`
        .sidebar-nav .nav-link { 
          color: #444 !important; font-size: 17px; padding: 12px 20px; 
          border-radius: 10px; transition: 0.3s; margin-bottom: 5px; font-weight: 500; text-decoration: none; display: block;
        }
        .sidebar-nav .nav-link:hover { background: #f8f9fa; color: #de9f57 !important; }
        .sidebar-nav .nav-link.active { background: #fcf6ef; color: #de9f57 !important; font-weight: bold; }
      `}</style>
    </div>
  );
}