import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AttorneyLayout({ children }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  
  const isActive = (path) => router.pathname === path ? 'active-link' : '';

  return (
    <div className="d-flex min-vh-100 bg-soft-gray">
      
      {/* --- SIDEBAR --- */}
      <aside className={`sidebar bg-navy text-white ${showSidebar ? 'show' : ''}`}>
        <div className="p-4 text-center border-bottom border-white border-opacity-10 mb-3">
          <h3 className="fw-bold m-0 text-white letter-spacing-1">LawStick</h3>
          <small className="text-gold fw-bold x-small">ATTORNEY PANEL</small>
        </div>
        
        <nav className="p-2 flex-grow-1">
          <Link href="/attorney-panel"><a className={`nav-item ${isActive('/attorney-panel')}`}><i className="bi bi-grid-1x2-fill me-3"></i> Dashboard</a></Link>
          <Link href="/attorney-panel/cases"><a className={`nav-item ${isActive('/attorney-panel/cases')}`}><i className="bi bi-briefcase-fill me-3"></i> Case Details</a></Link>
          <Link href="/attorney-panel/appointments"><a className={`nav-item ${isActive('/attorney-panel/appointments')}`}><i className="bi bi-calendar2-check-fill me-3"></i> Appointments</a></Link>
        </nav>
      </aside>

      {/* --- MAIN AREA --- */}
      <div className="main-area flex-grow-1 d-flex flex-column">
        
        {/* --- TOP HEADER (Now clearly visible) --- */}
        <header className="top-navbar d-flex align-items-center justify-content-between px-3 px-md-5">
          
          <div className="d-flex align-items-center flex-grow-1">
            <button className="btn d-lg-none me-2" onClick={() => setShowSidebar(!showSidebar)}>
              <i className="bi bi-list fs-2 text-navy"></i>
            </button>
            
            {/* Search Bar with Border */}
            <div className="search-box d-none d-md-flex">
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Search case numbers, clients..." />
            </div>
          </div>

          <div className="d-flex align-items-center gap-4">
            {/* Notification */}
            <div className="position-relative cursor-pointer d-none d-sm-block">
                <i className="bi bi-bell-fill fs-5 text-muted"></i>
                <span className="notification-dot"></span>
            </div>
            
            {/* Profile Section */}
            <div className="d-flex align-items-center gap-2 cursor-pointer border-start ps-4">
                <div className="text-end d-none d-lg-block">
                    <div className="fw-bold text-navy small mb-0">Adv. Amit Verma</div>
                  
                </div>
                <div className="profile-img-circle">
                    {/* Professional Image from Unsplash/Google */}
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                      alt="Advocate Amit" 
                    />
                </div>
            </div>
          </div>
        </header>

        {/* --- PAGE CONTENT --- */}
        <main className="content-body">
          {children}
        </main>
      </div>

      {showSidebar && <div className="sidebar-overlay" onClick={() => setShowSidebar(false)}></div>}

      <style jsx>{`
        /* Colors & Variables */
        .bg-soft-gray { background-color: #f4f7fa; }
        .bg-navy { background-color: #002147; }
        .text-navy { color: #002147; }
        .text-gold { color: #de9f57; }
        .x-small { font-size: 10px; }

        /* Sidebar */
        .sidebar {
          width: 250px;
          height: 100vh;
          position: fixed;
          left: 0; top: 0;
          z-index: 1050;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* TOP NAVBAR - Professional Style */
        .top-navbar {
          height: 80px;
          background: #dbd9d9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); /* Soft Shadow to make it visible */
          border-bottom: 1px solid #e0e6ed;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .main-area { margin-left: 250px; transition: 0.3s; }

        .search-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          padding: 8px 18px;
          width: 350px;
          display: flex;
          align-items: center;
        }
        .search-box input {
          border: none; background: transparent; outline: none;
          padding-left: 10px; width: 100%; font-size: 14px;
        }
        .search-box i { color: #94a3b8; }

        .profile-img-circle {
          width: 45px; height: 45px;
          border-radius: 50%;
          border: 2px solid #de9f57;
          overflow: hidden;
          background: #eee;
        }
        .profile-img-circle img { width: 100%; height: 100%; object-fit: cover; }

        .notification-dot {
          position: absolute; top: 0; right: 0;
          width: 8px; height: 8px;
          background: #ff4d4d; border-radius: 50%;
          border: 2px solid #fff;
        }

        .nav-item {
          display: flex; align-items: center;
          padding: 14px 18px; color: #a5b1c2;
          text-decoration: none; border-radius: 12px;
          margin: 5px 12px; font-size: 14px; font-weight: 500;
        }
        .nav-item:hover { color: #de9f57; background: rgba(255,255,255,0.05); }
        .active-link { background: #de9f57 !important; color: white !important; box-shadow: 0 4px 12px rgba(222, 159, 87, 0.3); }

        .content-body { padding-top: 20px; }

        @media (max-width: 991px) {
          .sidebar { transform: translateX(-100%); }
          .sidebar.show { transform: translateX(0); }
          .main-area { margin-left: 0; }
        }
      `}</style>
    </div>
  );
}