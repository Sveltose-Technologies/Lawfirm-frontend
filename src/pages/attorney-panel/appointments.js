import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AppointmentHistory() {
  const router = useRouter();

  // --- 1. INITIAL DATA ---
  const [appointments, setAppointments] = useState([
    { id: 1, attorney: "Adv. Amit Verma", type: "Civil", title: "Verma vs HDFC Bank", date: "2025-12-28", time: "11:00", reason: "Evidence Submission", status: "Scheduled" },
    { id: 2, attorney: "Adv. Amit Verma", type: "Criminal", title: "State vs Rahul", date: "2025-12-30", time: "14:30", reason: "Cross Examination", status: "Scheduled" },
    { id: 3, attorney: "Adv. Amit Verma", type: "Family", title: "Sonia vs Vikram", date: "2025-10-15", time: "10:00", reason: "Final Settlement", status: "Completed" },
  ]);

  // --- 2. STATES ---
  const [activeTab, setActiveTab] = useState('new'); // 'new' or 'history'
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    attorney: "Adv. Amit Verma", type: "Civil", title: "", date: "", time: "", reason: ""
  });

  // --- 3. LOGIC: SEARCH + SORT + TAB FILTER ---
  const filteredData = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    
    // Step 1: Filter by Tab
    let data = appointments.filter(item => activeTab === 'new' ? item.date >= today : item.date < today);

    // Step 2: Search Logic
    if (searchTerm) {
      data = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.attorney.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Step 3: Descending Sort (Latest Date First)
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [appointments, activeTab, searchTerm]);

  // --- 4. ACTION HANDLERS ---
  const handleAdd = (e) => {
    e.preventDefault();
    const newEntry = { ...formData, id: Date.now(), status: "Scheduled" };
    setAppointments([newEntry, ...appointments]);
    setIsModalOpen(false);
    setFormData({ attorney: "Adv. Amit Verma", type: "Civil", title: "", date: "", time: "", reason: "" });
  };

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel/delete this appointment?")) {
      setAppointments(appointments.filter(item => item.id !== id));
    }
  };

  const handleReschedule = () => {
    alert("Navigating to Organization Users list screen...");
  };

  return (
    <div className="dashboard-page-wrapper">
      <Head><title>Appointments | LawStick</title></Head>

      <div className="container-fluid px-md-5 pb-5" style={{ paddingTop: '110px' }}>
        
        {/* TOP HEADER */}
        <div className="mb-4 d-flex justify-content-between align-items-end">
          <div>
            <h2 className="fw-bold text-navy mb-1">Appointment History</h2>
            <p className="text-muted small">Manage schedules in descending order as per requirement.</p>
          </div>
        </div>

        <div className="row g-4">
          {/* SIDEBAR */}
          <div className="col-12 col-lg-2">
            <div className="card border-0 shadow-sm rounded-4 sidebar-card">
              <div className="p-3 text-center border-bottom bg-white">
                <div className="sidebar-avatar-sm mx-auto mb-2 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Profile" />
                </div>
                <h6 className="fw-bold mb-0 text-navy">Tasnia Sharin</h6>
                <p className="text-muted xx-small mb-0">attorney@gmail.com</p>
              </div>
              <nav className="nav flex-column p-2 sidebar-nav-links">
                <Link href="/attorney-panel"><a className="nav-link"><i className="bi bi-grid-1x2 me-2"></i> Dashboard</a></Link>
                <Link href="/attorney-panel/cases"><a className="nav-link"><i className="bi bi-clock-history me-2"></i> Case Details</a></Link>
                <Link href="/attorney-panel/appointments"><a className="nav-link active"><i className="bi bi-calendar-check me-2"></i> Booking</a></Link>
              </nav>
            </div>
          </div>

          {/* MAIN CONTENT AREA (Full Width) */}
          <div className="col-12 col-lg-10">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3 border-bottom pb-3">
                {/* 1. TABS */}
                <div className="tab-box p-1 bg-light rounded-pill border">
                  <button onClick={() => setActiveTab('new')} className={`btn rounded-pill px-4 py-1 small fw-bold ${activeTab === 'new' ? 'btn-navy text-white shadow-sm' : 'btn-light'}`}>New Appointment</button>
                  <button onClick={() => setActiveTab('history')} className={`btn rounded-pill px-4 py-1 small fw-bold ${activeTab === 'history' ? 'btn-navy text-white shadow-sm' : 'btn-light'}`}>Appointment History</button>
                </div>

                {/* SEARCH & ADD */}
                <div className="d-flex gap-2">
                  <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    placeholder="Search Title..." 
                    style={{width: '200px'}}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {activeTab === 'new' && (
                    <button className="btn btn-navy btn-sm px-4 rounded-pill fw-bold" onClick={() => setIsModalOpen(true)}>+ NEW SCHEDULE</button>
                  )}
                </div>
              </div>

              {/* TABLE */}
              <div className="table-responsive border rounded-3 overflow-hidden">
                <table className="table table-hover align-middle mb-0">
                  <thead className="bg-navy text-white">
                    <tr className="small">
                      <th className="p-3">Attorney</th>
                      <th className="p-3">Case Info</th>
                      <th className="p-3">Date & Time</th>
                      <th className="p-3">Reason</th>
                      <th className="p-3 text-center">Status</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredData.length > 0 ? filteredData.map((item) => (
                      <tr key={item.id} className="small">
                        <td className="p-3 fw-bold text-navy">{item.attorney}</td>
                        <td className="p-3"><b>{item.title}</b> <br/><span className="text-gold xx-small fw-bold">{item.type}</span></td>
                        <td className="p-3"><b>{item.date}</b> <br/><span className="text-muted xx-small">{item.time}</span></td>
                        <td className="p-3 text-truncate" style={{maxWidth:'150px'}}>{item.reason}</td>
                        <td className="p-3 text-center"><span className="stage-badge-navy">{item.status}</span></td>
                        <td className="p-3 text-center">
                          {activeTab === 'new' ? (
                            <div className="d-flex justify-content-center gap-2">
                              <button className="btn btn-outline-navy btn-xs" onClick={handleReschedule}><i className="bi bi-pencil-square"></i></button>
                              <button className="btn btn-outline-danger btn-xs" onClick={() => handleCancel(item.id)}><i className="bi bi-trash"></i></button>
                            </div>
                          ) : <span className="text-muted xx-small">VIEW ONLY</span>}
                        </td>
                      </tr>
                    )) : <tr><td colSpan="6" className="text-center p-5 text-muted small">No records found.</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ADD MODAL --- */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content-card p-4 rounded-4 shadow-lg animate__animated animate__fadeInDown">
            <h5 className="fw-bold text-navy mb-4 border-bottom pb-2">Schedule New Appointment</h5>
            <form onSubmit={handleAdd}>
              <div className="row g-3">
                <div className="col-md-6"><label className="xx-small fw-bold">Case Title</label><input type="text" className="form-control form-control-sm" required onChange={(e)=>setFormData({...formData, title: e.target.value})} /></div>
                <div className="col-md-6"><label className="xx-small fw-bold">Case Type</label><select className="form-select form-select-sm" onChange={(e)=>setFormData({...formData, type: e.target.value})}><option>Civil</option><option>Criminal</option><option>Family</option></select></div>
                <div className="col-md-6"><label className="xx-small fw-bold">Date</label><input type="date" className="form-control form-control-sm" required onChange={(e)=>setFormData({...formData, date: e.target.value})} /></div>
                <div className="col-md-6"><label className="xx-small fw-bold">Time</label><input type="time" className="form-control form-control-sm" required onChange={(e)=>setFormData({...formData, time: e.target.value})} /></div>
                <div className="col-12"><label className="xx-small fw-bold">Reason</label><textarea className="form-control form-control-sm" rows="2" required onChange={(e)=>setFormData({...formData, reason: e.target.value})}></textarea></div>
              </div>
              <div className="mt-4 d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-light btn-sm px-4" onClick={()=>setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-navy btn-sm px-4">Add Schedule</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .dashboard-page-wrapper { background-color: #f4f7fc; min-height: 100vh; }
        .text-navy { color: #002147; }
        .bg-navy { background-color: #002147; }
        .btn-navy { background-color: #002147; color: white; border: none; transition: 0.3s; }
        .btn-navy:hover { background-color: #001530; color: white; }
        .text-gold { color: #de9f57; }
        .small { font-size: 13px !important; }
        .xx-small { font-size: 11px !important; }

        .stage-badge-navy { background-color: #002147; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 10px; font-weight: 600; text-transform: uppercase; }

        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 2000; }
        .modal-content-card { background: #fff; width: 95%; max-width: 550px; }
        
        .sidebar-avatar-sm { width: 55px; height: 55px; border-radius: 10px; overflow: hidden; }
        .sidebar-avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
        .sidebar-nav-links .nav-link { color: #4b5563 !important; font-size: 13px; font-weight: 500; padding: 10px 15px; }
        .sidebar-nav-links .nav-link.active { color: #de9f57 !important; background: #fffaf4; font-weight: 700; border-right: 3px solid #de9f57; }
        
        .btn-xs { padding: 2px 6px; font-size: 12px; }
      `}</style>
    </div>
  );
}