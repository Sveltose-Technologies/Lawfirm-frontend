'use client';

import { useState } from 'react';

export default function AdminPanel() {
  // --- States ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeFilter, setTimeFilter] = useState('Monthly'); // Weekly, Monthly, Yearly

  // --- Mock Data for Dashboard ---
  const stats = [
    { title: 'Total Attorneys', count: 120, icon: '⚖️', color: 'primary' },
    { title: 'Total Clients', count: 850, icon: '👥', color: 'success' },
    { title: 'Total Employees', count: 45, icon: '👔', color: 'info' },
    { title: 'Total Cases', count: 1240, icon: '📁', color: 'warning' },
  ];

  const caseStats = { open: 450, closed: 700, success: 650 }; // Success is a subset of closed usually, but following requirements

  const upcomingCases = [
    { id: 'C-101', client: 'John Doe', attorney: 'Adv. Sharma', date: '12 Dec, 2025', type: 'Criminal' },
    { id: 'C-102', client: 'Tesla Corp', attorney: 'Adv. Roberts', date: '14 Dec, 2025', type: 'Corporate' },
    { id: 'C-103', client: 'Jane Smith', attorney: 'Adv. Gupta', date: '15 Dec, 2025', type: 'Family' },
  ];

  const topClients = [
    { name: 'Tech Solutions Ltd', cases: 12, revenue: '$50k' },
    { name: 'Real Estate Group', cases: 8, revenue: '$35k' },
    { name: 'Dr. A. K. Verma', cases: 5, revenue: '$12k' },
  ];

  const messages = [
    { from: 'Adv. Sharma', subject: 'Case File #99 Update', time: '2 hrs ago' },
    { from: 'Front Desk', subject: 'New Client Registration', time: '5 hrs ago' },
  ];

  // --- Actions ---
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        body { background-color: #f4f7f6; font-family: 'Segoe UI', sans-serif; }
        
        /* Theme Colors */
        .bg-navy { background-color: #002b5c !important; color: white; }
        .text-navy { color: #002b5c !important; }
        .border-gold { border-left: 5px solid #cfa144 !important; }
        .text-gold { color: #cfa144 !important; }

        /* Sidebar */
        .sidebar { min-height: 100vh; width: 250px; background: #002b5c; color: #fff; position: fixed; }
        .sidebar-link { padding: 12px 20px; color: #b3cde0; text-decoration: none; display: block; border-left: 4px solid transparent; }
        .sidebar-link:hover, .sidebar-link.active { background: #001f42; color: #fff; border-left-color: #cfa144; }
        
        /* Main Content */
        .main-content { margin-left: 250px; padding: 20px; }
        @media (max-width: 768px) {
            .sidebar { display: none; }
            .main-content { margin-left: 0; }
        }

        /* Cards */
        .stat-card { transition: transform 0.2s; }
        .stat-card:hover { transform: translateY(-5px); }
        .chart-bar { height: 10px; border-radius: 5px; }
      `}</style>

      {/* ======================= LOGIN PAGE ======================= */}
      {!isLoggedIn && (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
          <div className="card shadow-lg border-0" style={{ width: '400px' }}>
            <div className="card-header bg-navy text-center py-4">
              <h3 className="mb-0 fw-bold" style={{fontFamily: 'serif'}}>Admin Panel</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email ID</label>
                  <input type="email" className="form-control" defaultValue="admin@lawfirm.com" required />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">Password</label>
                  <input type="password" className="form-control" defaultValue="admin123" required />
                </div>
                <button type="submit" className="btn bg-navy text-white w-100 py-2">Login to Dashboard</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ======================= DASHBOARD PAGE ======================= */}
      {isLoggedIn && (
        <div className="d-flex">
          
          {/* 1. SIDEBAR */}
          <div className="sidebar shadow">
            <div className="p-4 text-center border-bottom border-secondary">
              <h4 className="fw-bold mb-0 text-white" style={{fontFamily:'serif'}}>LawFirm Admin</h4>
            </div>
            <nav className="mt-4">
              <a href="#" className="sidebar-link active">Dashboard</a>
              <a href="#" className="sidebar-link">Attorneys</a>
              <a href="#" className="sidebar-link">Clients</a>
              <a href="#" className="sidebar-link">Cases</a>
              <a href="#" className="sidebar-link">Employees</a>
              <a href="#" className="sidebar-link">Revenue</a>
              <a href="#" className="sidebar-link mt-5" onClick={() => setIsLoggedIn(false)}>Logout</a>
            </nav>
          </div>

          {/* 2. MAIN CONTENT */}
          <div className="main-content w-100">
            
            {/* Top Navbar */}
            <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-3 rounded shadow-sm">
              <h4 className="m-0 text-navy fw-bold">Dashboard Overview</h4>
              <div className="d-flex align-items-center gap-3">
                 <span className="badge bg-danger rounded-pill">3 Notifications</span>
                 <div className="fw-bold text-navy">Admin User 👤</div>
              </div>
            </div>

            {/* A. Top Stats Cards */}
            <div className="row g-3 mb-4">
              {stats.map((stat, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card border-0 shadow-sm stat-card border-gold">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="text-muted text-uppercase small fw-bold">{stat.title}</h6>
                            <h2 className="mb-0 fw-bold text-navy">{stat.count}</h2>
                        </div>
                        <div className="fs-1 opacity-25">{stat.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* B. Case Analytics & Revenue Row */}
            <div className="row g-3 mb-4">
              
              {/* Case Analytics (Pie Chart Simulation) */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-white fw-bold py-3">Case Analytics 📊</div>
                  <div className="card-body">
                    <div className="mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                            <span>Open Cases</span> <span className="fw-bold">{caseStats.open}</span>
                        </div>
                        <div className="progress chart-bar"><div className="progress-bar bg-primary" style={{width: '35%'}}></div></div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                            <span>Closed Cases</span> <span className="fw-bold">{caseStats.closed}</span>
                        </div>
                        <div className="progress chart-bar"><div className="progress-bar bg-secondary" style={{width: '55%'}}></div></div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                            <span>Success Rate</span> <span className="fw-bold text-success">{caseStats.success} Won</span>
                        </div>
                        <div className="progress chart-bar"><div className="progress-bar bg-success" style={{width: '80%'}}></div></div>
                    </div>
                    <div className="text-center mt-4 small text-muted">
                        Total 1240 Cases Handled
                    </div>
                  </div>
                </div>
              </div>

              {/* Profit/Revenue Analytics (Bar Chart Simulation) */}
              <div className="col-md-8">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                      <span className="fw-bold">Profit Earned 📈</span>
                      <div className="btn-group btn-group-sm">
                          {['Weekly', 'Monthly', 'Yearly'].map(t => (
                              <button 
                                key={t} 
                                className={`btn ${timeFilter === t ? 'btn-navy' : 'btn-outline-secondary'}`}
                                onClick={() => setTimeFilter(t)}
                              >
                                  {t}
                              </button>
                          ))}
                      </div>
                  </div>
                  <div className="card-body d-flex align-items-end justify-content-around px-5" style={{height: '200px'}}>
                      {/* Simulated Bars */}
                      <div className="text-center w-100 mx-1">
                          <div className="progress vertical mb-2" style={{height: '150px', alignItems: 'flex-end'}}>
                              <div className="progress-bar bg-warning w-100 rounded" style={{height: '40%'}}></div>
                          </div>
                          <small className="d-block text-muted">WK 1</small>
                      </div>
                      <div className="text-center w-100 mx-1">
                          <div className="progress vertical mb-2" style={{height: '150px', alignItems: 'flex-end'}}>
                              <div className="progress-bar bg-warning w-100 rounded" style={{height: '60%'}}></div>
                          </div>
                          <small className="d-block text-muted">WK 2</small>
                      </div>
                      <div className="text-center w-100 mx-1">
                          <div className="progress vertical mb-2" style={{height: '150px', alignItems: 'flex-end'}}>
                              <div className="progress-bar bg-navy w-100 rounded" style={{height: '85%'}}></div>
                          </div>
                          <small className="d-block fw-bold text-navy">WK 3</small>
                      </div>
                      <div className="text-center w-100 mx-1">
                          <div className="progress vertical mb-2" style={{height: '150px', alignItems: 'flex-end'}}>
                              <div className="progress-bar bg-warning w-100 rounded" style={{height: '55%'}}></div>
                          </div>
                          <small className="d-block text-muted">WK 4</small>
                      </div>
                  </div>
                  <div className="card-footer bg-white text-center text-muted small border-top-0">
                      Revenue Data for {timeFilter} view
                  </div>
                </div>
              </div>
            </div>

            {/* C. Bottom Tables Row */}
            <div className="row g-3">
              
              {/* Upcoming Cases */}
              <div className="col-lg-6">
                 <div className="card border-0 shadow-sm">
                    <div className="card-header bg-white fw-bold py-3 text-navy">📅 Upcoming Cases</div>
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Client</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {upcomingCases.map(c => (
                                    <tr key={c.id}>
                                        <td><span className="badge bg-light text-dark border">{c.id}</span></td>
                                        <td>
                                            <div className="fw-bold">{c.client}</div>
                                            <small className="text-muted">{c.type}</small>
                                        </td>
                                        <td>{c.date}</td>
                                        <td><span className="badge bg-primary">Upcoming</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </div>
              </div>

              {/* Top Clients & Messages (Split) */}
              <div className="col-lg-6">
                  <div className="row g-3 h-100">
                      
                      {/* Top Clients */}
                      <div className="col-12">
                          <div className="card border-0 shadow-sm">
                              <div className="card-header bg-white fw-bold py-3 text-navy">🏆 Top Clients</div>
                              <div className="card-body p-0">
                                  <ul className="list-group list-group-flush">
                                      {topClients.map((client, i) => (
                                          <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                                              <div>
                                                  <span className="fw-bold">{client.name}</span>
                                                  <div className="small text-muted">{client.cases} Cases</div>
                                              </div>
                                              <span className="badge bg-success rounded-pill">{client.revenue}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      </div>

                      {/* Recent Messages */}
                      <div className="col-12">
                          <div className="card border-0 shadow-sm h-100">
                              <div className="card-header bg-white fw-bold py-3 text-navy">💬 Recent Messages</div>
                              <div className="card-body p-0">
                                  {messages.map((msg, i) => (
                                      <div className="p-3 border-bottom d-flex align-items-start gap-3" key={i}>
                                          <div className="bg-light rounded-circle p-2">📩</div>
                                          <div>
                                              <div className="d-flex justify-content-between w-100">
                                                  <strong className="d-block">{msg.from}</strong>
                                                  <small className="text-muted ms-5">{msg.time}</small>
                                              </div>
                                              <small className="text-muted">{msg.subject}</small>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}