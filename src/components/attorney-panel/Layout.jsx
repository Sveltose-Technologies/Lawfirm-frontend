import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AttorneyLayout({ children }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  
  const isActive = (path) => router.pathname === path ? 'active-panel-link' : 'text-muted';

  return (
    <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      
      {/* --- MOBILE HEADER (Visible only on Mobile/Tablet) --- */}
      <div className="d-lg-none bg-dark text-white p-3 d-flex justify-content-between align-items-center sticky-top shadow-sm">
         <span className="font-serif fw-bold text-gold">LawStick Panel</span>
         <button className="btn btn-outline-light btn-sm" onClick={() => setShowSidebar(!showSidebar)}>
            <i className={`bi ${showSidebar ? 'bi-x-lg' : 'bi-list'} fs-4`}></i>
         </button>
      </div>

      {/* --- SIDEBAR (Responsive) --- */}
      <div className={`sidebar-panel bg-white border-end shadow-sm ${showSidebar ? 'show-sidebar' : ''}`}>
        
        {/* Logo Area */}
        <div className="p-4 border-bottom text-center">
             <h3 className="font-serif text-blue fw-bold m-0 d-none d-lg-block">LawStick</h3>
             <small className="text-gold fw-bold letter-spacing-1 d-none d-lg-block">ATTORNEY PANEL</small>
             
             {/* Mobile Close Button */}
             <div className="d-lg-none d-flex justify-content-between align-items-center">
                <span className="text-blue fw-bold">Menu</span>
                <button className="btn btn-sm btn-light" onClick={() => setShowSidebar(false)}><i className="bi bi-x-lg"></i></button>
             </div>
        </div>
        
        {/* Navigation */}
        <ul className="nav flex-column gap-1 p-3 mt-2">
          <li className="nav-item">
            <Link href="/attorney-panel">
              <a className={`nav-link-custom ${isActive('/attorney-panel')}`} onClick={() => setShowSidebar(false)}>
                <i className="bi bi-grid-fill me-3"></i> Dashboard
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/attorney-panel/cases">
              <a className={`nav-link-custom ${isActive('/attorney-panel/cases')}`} onClick={() => setShowSidebar(false)}>
                <i className="bi bi-briefcase-fill me-3"></i> Case Details
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/attorney-panel/appointments">
              <a className={`nav-link-custom ${isActive('/attorney-panel/appointments')}`} onClick={() => setShowSidebar(false)}>
                <i className="bi bi-calendar-check-fill me-3"></i> Appointments
              </a>
            </Link>
          </li>
        </ul>

        {/* User Profile */}
        <div className="position-absolute bottom-0 start-0 w-100 p-3 border-top bg-light">
            <div className="d-flex align-items-center">
                <div className="bg-blue text-white rounded-circle d-flex align-items-center justify-content-center me-2 flex-shrink-0" style={{width:'40px', height:'40px'}}>A</div>
                <div className="text-truncate">
                    <div className="fw-bold text-dark small text-truncate">Adv. Amit Verma</div>
                    <div className="text-muted" style={{fontSize:'0.75rem'}}>View Profile</div>
                </div>
            </div>
        </div>
      </div>

      {/* --- OVERLAY for Mobile (When sidebar opens) --- */}
      {showSidebar && <div className="sidebar-overlay d-lg-none" onClick={() => setShowSidebar(false)}></div>}

      {/* --- MAIN CONTENT AREA --- */}
      <div className="main-content flex-grow-1 p-3 p-md-4">
        {children}
      </div>

      {/* --- CSS STYLES --- */}
      <style jsx>{`
        .text-gold { color: var(--primary-gold); }
        .text-blue { color: var(--primary-blue); }
        .bg-dark { background-color: var(--dark-navy) !important; }
        .font-serif { font-family: var(--font-serif); }
        
        /* SIDEBAR DEFAULT (Desktop) */
        .sidebar-panel {
            width: 260px;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 1050;
            transition: transform 0.3s ease-in-out;
            overflow-y: auto;
        }

        /* MAIN CONTENT MARGIN (Desktop) */
        .main-content {
            margin-left: 260px;
            width: calc(100% - 260px);
        }

        /* RESPONSIVE LOGIC */
        @media (max-width: 991.98px) {
            /* Hide Sidebar by default on mobile/tablet */
            .sidebar-panel {
                transform: translateX(-100%);
            }
            /* Show Sidebar when active */
            .sidebar-panel.show-sidebar {
                transform: translateX(0);
            }
            /* Remove margin from content on mobile */
            .main-content {
                margin-left: 0;
                width: 100%;
            }
            /* Overlay */
            .sidebar-overlay {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 1040;
            }
        }

        .nav-link-custom {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            font-size: 1rem;
            border-radius: 6px;
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 500;
            color: var(--text-dark);
            font-family: var(--font-base);
        }
        .nav-link-custom:hover {
            background-color: rgba(222, 159, 87, 0.1);
            color: var(--primary-gold);
        }
        .active-panel-link {
            background-color: var(--primary-blue);
            color: var(--text-light) !important;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}