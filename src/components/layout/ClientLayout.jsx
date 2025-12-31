// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { useRouter } from 'next/router';

// // export default function ClientLayout({ children }) {
// //   const router = useRouter();
// //   const [showMobileMenu, setShowMobileMenu] = useState(false);

// //   // --- MENU ITEMS ---
// //   const menuItems = [
// //     { name: 'Dashboard', icon: 'bi-grid', path: '/client-panel' },
// //     { name: 'Attorney', icon: 'bi-person', path: '/client-panel/attorneys' },
// //     { name: 'Case Details', icon: 'bi-clock-history', path: '/client-panel/cases' },
// //     { name: 'Appointments', icon: 'bi-calendar-event', path: '/client-panel/appointments' },
// //     { name: 'Files', icon: 'bi-folder', path: '/client-panel/files' },
// //     { name: 'Message', icon: 'bi-chat-left-text', path: '/client-panel/messages' },
// //     { name: 'Settings', icon: 'bi-gear', path: '/client-panel/settings' },
// //   ];

// //   const handleLogout = () => {
// //     if (confirm("Are you sure you want to logout?")) {
// //       localStorage.clear();
// //       router.push('/');
// //     }
// //   };

// //   return (
// //     <div className="layout-wrapper">
     

// //       {/* --- MAIN BODY SECTION --- */}
// //       <div className="container py-5 pt-5">
// //         <div className="row g-4 ">
          
// //           {/* --- SIDEBAR --- */}
// //           <aside className="col-lg-3 pt-5">
// //             <div className="card border-0 shadow-sm rounded-4 sidebar-card overflow-hidden">
// //               {/* Profile Card Part */}
// //               <div className="p-4 border-bottom d-flex align-items-center gap-3">
// //                 <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm" style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt="John" />
// //                 <div>
// //                   <h6 className="fw-bold mb-0 text-navy">John</h6>
// //                   <p className="text-muted mb-0 small" style={{ fontSize: '11px' }}>user@gmail.com</p>
// //                 </div>
// //               </div>

// //               {/* Navigation List */}
// //               <div className="p-3">
// //                 <nav className="nav flex-column sidebar-nav">
// //                   {menuItems.map((item, idx) => (
// //                     <Link key={idx} href={item.path}>
// //                       <a className={`nav-link ${router.pathname === item.path ? 'active' : ''}`}>
// //                         <i className={`bi ${item.icon} me-3`}></i> {item.name}
// //                       </a>
// //                     </Link>
// //                   ))}
                  
// //                   <div className="border-top mt-4 pt-3">
// //                     <Link href="/client-panel/help">
// //                       <a className="nav-link"><i className="bi bi-info-circle me-3"></i> Help & Info</a>
// //                     </Link>
// //                     <a href="#" className="nav-link text-muted" onClick={handleLogout}>
// //                       <i className="bi bi-box-arrow-right me-3"></i> Logout
// //                     </a>
// //                   </div>
// //                 </nav>
// //               </div>
// //             </div>
// //           </aside>

// //           {/* --- CONTENT AREA --- */}
// //           <main className="col-lg-9">
// //             {children}
// //           </main>
// //         </div>
// //       </div>

    
// //       <style jsx>{`
// //         .layout-wrapper { background-color: #f4f7fa; min-height: 100vh; }
// //         .text-navy { color: #002147; }
// //         .header-links a { text-decoration: none; color: #444; font-size: 14px; font-weight: 500; }
// //         .header-links a:hover { color: #de9f57; }
        
// //         /* Sidebar Nav Styling */
// //         .sidebar-nav .nav-link {
// //           color: #6c757d !important;
// //           font-size: 14px;
// //           padding: 12px 15px;
// //           border-radius: 12px;
// //           margin-bottom: 5px;
// //           transition: 0.3s;
// //           text-decoration: none;
// //           display: flex;
// //           align-items: center;
// //         }
// //         .sidebar-nav .nav-link:hover {
// //           background-color: #f8f9fa;
// //           color: #de9f57 !important;
// //         }
// //         .sidebar-nav .nav-link.active {
// //           color: #de9f57 !important;
// //           background-color: transparent;
// //           font-weight: 700;
// //         }
// //         .sidebar-nav .nav-link i { font-size: 18px; }

// //         .footer-dark i { cursor: pointer; transition: 0.3s; }
// //         .footer-dark i:hover { color: #de9f57; }
// //       `}</style>
// //     </div>
// //   );
// // }



import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ClientLayout({ children }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      localStorage.clear();
      router.push('/');
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: 'bi-grid', path: '/client-panel' },
    { name: 'Attorney', icon: 'bi-person', path: '/client-panel/attorneys' },
    { name: 'Case Details', icon: 'bi-clock-history', path: '/client-panel/cases' },
    { name: 'Appointments', icon: 'bi-calendar-event', path: '/client-panel/appointments' },
    // { name: 'Files', icon: 'bi-folder', path: '/client-panel/files' },
    // { name: 'Message', icon: 'bi-chat-left-text', path: '/client-panel/messages' },
  //  { name: 'Edit Profile', icon: 'bi-person-gear', path: '/client-panel/edit-profile' },
  ];

  return (
    <div style={{ backgroundColor: '#f4f7fa', minHeight: '100vh'}}>
      {/* Mobile Toggle Button */}
      <div className="d-lg-none p-3 bg-white border-bottom sticky-top d-flex justify-content-between align-items-center pt-5">
        <img src="/assets/images/attorney1.png"  height="30" alt="logo" />
        <button className="btn border-0" onClick={() => setShowSidebar(!showSidebar)}>
          <i className={`bi ${showSidebar ? 'bi-x-lg' : 'bi-list'} fs-3`}></i>
        </button>
      </div>

      <div className="container py-lg-5 py-3 pt-5">
        <div className="row g-4 pt-5">
          {/* --- SIDEBAR --- */}
          <aside className={`col-lg-3 ${showSidebar ? 'd-block' : 'd-none d-lg-block'}`}>
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden sticky-top" style={{ top: '20px' }}>
              <div className="p-4 text-center border-bottom bg-white">
                <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                    <img src="/assets/images/attorney1.png" className="rounded-circle shadow-sm w-100 h-100" style={{ objectFit: 'cover', border: '3px solid #f8f9fa' }} alt="user" />
                </div>
                <h5 className="fw-bold mb-1" style={{color: '#002147', fontSize: '18px'}}>John</h5>
                <p className="text-muted mb-0 small">user@gmail.com</p>
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
                  <div className="mt-4 pt-3 border-top">
                    {/* <Link href="/client-panel/help"><a className="nav-link"><i className="bi bi-info-circle me-3"></i> Help & Info</a></Link> */}
                    <a href="#" className="nav-link text-danger fw-bold" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-3"></i> Logout
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </aside>

          {/* --- CONTENT --- */}
          <main className="col-lg-9">
            <div className="bg-transparent">
              {children}
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .sidebar-nav .nav-link { 
          color: #444 !important; font-size: 15px; padding: 12px 18px; 
          border-radius: 10px; transition: 0.3s; margin-bottom: 5px; font-weight: 500; text-decoration: none; display: flex; align-items: center;
        }
        .sidebar-nav .nav-link:hover { background: #f8f9fa; color: #de9f57 !important; }
        .sidebar-nav .nav-link.active { background: #fcf6ef; color: #de9f57 !important; font-weight: bold; }
        @media (max-width: 991px) {
           aside { position: fixed; top: 70px; left: 0; width: 100%; z-index: 1000; height: calc(100vh - 70px); overflow-y: auto; background: #f4f7fa; padding: 15px; }
        }
      `}</style>
    </div>
  );
}

