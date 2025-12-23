// import React, { useState } from 'react';
// import Head from 'next/head';
// import AttorneyLayout from '../../components/layout/AttorneyLayout';

// export default function Appointments() {
//   // Real-time State for Appointments
//   const [appointments, setAppointments] = useState([
//     { id: 1, attorney: 'Adv. Tasnia Sharin', type: 'Criminal', title: 'State vs Sharma', date: '2025-01-05', time: '10:30 AM', reason: 'Evidence Discussion', doc: '📁', status: 'Scheduled' },
//     { id: 2, attorney: 'Adv. Tasnia Sharin', type: 'Civil', title: 'Property Dispute', date: '2025-01-12', time: '02:00 PM', reason: 'Client Meeting', doc: '📁', status: 'Scheduled' },
//   ]);

//   const [history, setHistory] = useState([
//     { id: 101, attorney: 'Adv. Tasnia Sharin', type: 'Family', title: 'Divorce Case', date: '2024-12-15', time: '11:00 AM', reason: 'Final Hearing', doc: '📄', status: 'Completed' },
//   ]);

//   // Modal State
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({ attorney: 'Adv. Tasnia Sharin', type: '', title: '', date: '', time: '', reason: '', status: 'Scheduled' });
//   const [editId, setEditId] = useState(null);

//   // Handle Input Change
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   // Add or Re-schedule Appointment
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editId) {
//       // Re-schedule logic
//       setAppointments(appointments.map(app => app.id === editId ? { ...formData, id: editId } : app));
//     } else {
//       // New Appointment (Descending order - add to top)
//       setAppointments([{ ...formData, id: Date.now(), doc: '📁' }, ...appointments]);
//     }
//     setShowModal(false);
//     setEditId(null);
//     setFormData({ attorney: 'Adv. Tasnia Sharin', type: '', title: '', date: '', time: '', reason: '', status: 'Scheduled' });
//   };

//   // Cancel Appointment
//   const handleCancel = (id) => {
//     if (confirm("Are you sure you want to cancel this appointment?")) {
//       setAppointments(appointments.filter(app => app.id !== id));
//     }
//   };

//   // Open Re-schedule Modal
//   const openReschedule = (app) => {
//     setEditId(app.id);
//     setFormData(app);
//     setShowModal(true);
//   };

//   return (
//     <AttorneyLayout>
//       <Head><title>Lawstick | Appointment History</title></Head>

//       <div className="container-fluid px-0">
//         <div className="card border-0 shadow-sm rounded-4 p-3 p-md-5 bg-white w-100">
//           <div className="d-flex justify-content-between align-items-center mb-5">
//             <h3 className="fw-bold mb-0" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Appointment History</h3>
//             <button className="btn text-white px-4 rounded-pill fw-bold" style={{ backgroundColor: '#002147', fontSize: '15px' }} onClick={() => { setEditId(null); setShowModal(true); }}>
//               <i className="bi bi-plus-lg me-2"></i> New Appointment
//             </button>
//           </div>

//           {/* 1. NEW APPOINTMENTS TABLE (Active) */}
//           <div className="mb-5">
//             <h5 className="fw-bold mb-4" style={{ color: '#002147', fontSize: '18px' }}>Active Appointments</h5>
//             <div className="table-responsive border rounded-3">
//               <table className="table table-hover align-middle mb-0">
//                 <thead style={{ backgroundColor: '#fcf6ef' }}>
//                   <tr className="text-nowrap" style={{ color: '#002147', fontSize: '14px' }}>
//                     <th className="py-3 px-3">Attorney Name</th>
//                     <th>Case Type</th><th>Case Title</th><th>Date</th><th>Time</th><th>Reason</th><th>Document</th><th>Status</th><th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody style={{ fontSize: '14px' }}>
//                   {appointments.length > 0 ? appointments.map((app) => (
//                     <tr key={app.id} className="text-nowrap">
//                       <td className="px-3 py-3 fw-bold">{app.attorney}</td>
//                       <td>{app.type}</td><td>{app.title}</td><td>{app.date}</td><td>{app.time}</td>
//                       <td><small className="text-muted">{app.reason}</small></td>
//                       <td className="text-center">{app.doc}</td>
//                       <td><span className="badge bg-success-subtle text-success border border-success-subtle">{app.status}</span></td>
//                       <td>
//                         <button className="btn btn-sm btn-outline-primary me-2" onClick={() => openReschedule(app)}>Re-schedule</button>
//                         <button className="btn btn-sm btn-outline-danger" onClick={() => handleCancel(app.id)}>Cancel</button>
//                       </td>
//                     </tr>
//                   )) : <tr><td colSpan="9" className="text-center py-4 text-muted">No Active Appointments</td></tr>}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* 2. APPOINTMENTS HISTORY TABLE (View Mode Only) */}
//           <div>
//             <h5 className="fw-bold mb-4" style={{ color: '#002147', fontSize: '18px' }}>Previous Appointments</h5>
//             <div className="table-responsive border rounded-3">
//               <table className="table align-middle mb-0" style={{ backgroundColor: '#f8f9fa' }}>
//                 <thead style={{ backgroundColor: '#e9ecef' }}>
//                   <tr className="text-nowrap" style={{ color: '#002147', fontSize: '14px' }}>
//                     <th className="py-3 px-3">Attorney Name</th>
//                     <th>Case Type</th><th>Case Title</th><th>Date</th><th>Time</th><th>Reason</th><th>Document</th><th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody style={{ fontSize: '14px', color: '#6c757d' }}>
//                   {history.map((app) => (
//                     <tr key={app.id} className="text-nowrap">
//                       <td className="px-3 py-3">{app.attorney}</td>
//                       <td>{app.type}</td><td>{app.title}</td><td>{app.date}</td><td>{app.time}</td>
//                       <td>{app.reason}</td><td className="text-center">{app.doc}</td>
//                       <td><span className="badge bg-secondary-subtle text-secondary">{app.status}</span></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- POPUP MODAL (Add / Re-schedule) --- */}
//       {/* {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-card card border-0 shadow-lg rounded-4 overflow-hidden">
//             <div className="p-4 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#002147' }}>
//               <h5 className="mb-0 fw-bold">{editId ? 'Re-schedule Appointment' : 'New Appointment'}</h5>
//               <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
//             </div>
//             <form onSubmit={handleSubmit} className="p-4">
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <label className="form-label fw-bold" style={{fontSize: '14px'}}>Case Type</label>
//                   <input type="text" name="type" className="form-control" value={formData.type} onChange={handleChange} required />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label fw-bold" style={{fontSize: '14px'}}>Case Title</label>
//                   <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label fw-bold" style={{fontSize: '14px'}}>Date</label>
//                   <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label fw-bold" style={{fontSize: '14px'}}>Time</label>
//                   <input type="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
//                 </div>
//                 <div className="col-12">
//                   <label className="form-label fw-bold" style={{fontSize: '14px'}}>Reason</label>
//                   <textarea name="reason" className="form-control" rows="3" value={formData.reason} onChange={handleChange} required></textarea>
//                 </div>
//               </div>
//               <div className="mt-4 d-flex gap-2">
//                 <button type="submit" className="btn text-white w-100 fw-bold py-2" style={{ backgroundColor: '#002147' }}>{editId ? 'Update Schedule' : 'Schedule Now'}</button>
//                 <button type="button" className="btn btn-light w-100 fw-bold border py-2" onClick={() => setShowModal(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )} */}
//       {showModal && (
//   <div className="modal-overlay">
//     <div className="modal-card border-0 shadow-lg">
//       {/* Modal Header */}
//       <div className="p-4 d-flex justify-content-between align-items-center text-white" style={{ backgroundColor: '#002147' }}>
//         <h5 className="mb-0 fw-bold">{editId ? 'Re-schedule Appointment' : 'New Appointment'}</h5>
//         <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
//       </div>

//       {/* Modal Body */}
//       <div className="p-4 bg-white">
//         <form onSubmit={handleSubmit}>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <label className="form-label fw-bold small">Case Type</label>
//               <input type="text" name="type" className="form-control" placeholder="Criminal, Civil etc." value={formData.type} onChange={handleChange} required />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label fw-bold small">Case Title</label>
//               <input type="text" name="title" className="form-control" placeholder="Case Name" value={formData.title} onChange={handleChange} required />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label fw-bold small">Date</label>
//               <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label fw-bold small">Time</label>
//               <input type="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
//             </div>
//             <div className="col-12">
//               <label className="form-label fw-bold small">Reason</label>
//               <textarea name="reason" className="form-control" rows="3" placeholder="Description..." value={formData.reason} onChange={handleChange} required></textarea>
//             </div>
//           </div>

//           <div className="mt-4 d-flex gap-2">
//             <button type="submit" className="btn text-white w-100 fw-bold py-2" style={{ backgroundColor: '#002147' }}>
//               {editId ? 'Update Appointment' : 'Schedule Appointment'}
//             </button>
//             <button type="button" className="btn btn-light border w-100 fw-bold py-2" onClick={() => setShowModal(false)}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// )}

//       {/* <style jsx>{`
//         .modal-overlay {
//           position: fixed; top: 0; left: 0; width: 100%; height: 100%;
//           background: rgba(0, 33, 71, 0.5); display: flex; align-items: center; justify-content: center; z-index: 2000;
//         }
//         .modal-card { width: 100%; max-width: 600px; animation: slideUp 0.3s ease-out; }
//         @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
//         .table th, .table td { vertical-align: middle; }
//         .form-control:focus { border-color: #de9f57; box-shadow: none; }
//         :global(.container-fluid) { max-width: 100% !important; }
//       `}</style> */}

//       <style jsx>{`
//   .modal-overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background: rgba(0, 0, 0, 0.7); /* Black overlay with transparency */
//     backdrop-filter: blur(3px);     /* Background ko halka blur karega */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: 9999;                  /* Sabse upar dikhne ke liye */
//     padding: 20px;
//   }

//   .modal-card {
//     width: 100%;
//     max-width: 600px;
//     background: white;
//     border-radius: 15px;
//     box-shadow: 0 10px 30px rgba(0,0,0,0.3);
//     animation: zoomIn 0.3s ease;
//     overflow: hidden;
//   }

//   @keyframes zoomIn {
//     from { transform: scale(0.9); opacity: 0; }
//     to { transform: scale(1); opacity: 1; }
//   }

//   .form-control:focus {
//     border-color: #de9f57;
//     box-shadow: none;
//   }
// `}</style>
//     </AttorneyLayout>
//   );
// }

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AttorneyLayout from '../../components/layout/AttorneyLayout';

export default function Appointments() {
  const router = useRouter();
  const { selectedUser, openModal, actionType } = router.query;

  // 1. New Appointment State (Latest date at top - Descending)
  const [appointments, setAppointments] = useState([
    { id: 2, attorney: 'Adv. Tasnia Sharin', type: 'Civil', title: 'Property Dispute', date: '2025-01-12', time: '02:00 PM', reason: 'Client Meeting', doc: '📁', status: 'Scheduled' },
    { id: 1, attorney: 'Adv. Tasnia Sharin', type: 'Criminal', title: 'State vs Sharma', date: '2025-01-05', time: '10:30 AM', reason: 'Evidence Discussion', doc: '📁', status: 'Scheduled' },
  ]);

  // 2. Appointment History State (View Mode Only - Descending)
  const [history, setHistory] = useState([
    { id: 101, attorney: 'Adv. Tasnia Sharin', type: 'Family', title: 'Divorce Case', date: '2024-12-15', time: '11:00 AM', reason: 'Final Hearing', doc: '📄', status: 'Completed' },
  ]);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ attorney: 'Adv. Tasnia Sharin', type: '', title: '', date: '', time: '', reason: '', status: 'Scheduled' });
  const [editId, setEditId] = useState(null);

  // Effect to handle navigation back from Organization Users List
  useEffect(() => {
    if (openModal === 'true' && selectedUser) {
      setFormData(prev => ({ ...prev, reason: `Meeting with ${selectedUser}` }));
      setShowModal(true);
      if (actionType === 'edit') setEditId(Date.now()); // Mocking edit state
    }
  }, [openModal, selectedUser, actionType]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Add or Re-schedule Appointment logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setAppointments(appointments.map(app => app.id === editId ? { ...formData, id: editId } : app));
    } else {
      // Adding to top (Descending)
      setAppointments([{ ...formData, id: Date.now(), doc: '📁' }, ...appointments]);
    }
    setShowModal(false);
    setEditId(null);
    router.replace('/attorney-panel/appointments', undefined, { shallow: true }); // Clear query params
  };

  // ACTION 4: Cancel Appointment
  const handleCancel = (id) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments(appointments.filter(app => app.id !== id));
    }
  };

  // ACTION 3: Navigate to Org Users List (For New or Re-schedule)
  const navigateToOrgUsers = (type = 'new') => {
    router.push(`/attorney-panel/organization-users?action=${type}`);
  };

  return (
    <AttorneyLayout>
      <Head><title>Lawstick | Appointment History</title></Head>

      <div className="container-fluid px-0">
        <div className="card border-0 shadow-sm rounded-4 p-3 p-md-5 bg-white w-100">
          
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
            <h3 className="fw-bold mb-0" style={{ fontFamily: 'serif', color: '#002147', fontSize: '26px' }}>Appointment History</h3>
            <button 
              className="btn text-white px-4 rounded-pill fw-bold" 
              style={{ backgroundColor: '#002147', fontSize: '15px' }} 
              onClick={() => navigateToOrgUsers('new')}
            >
              <i className="bi bi-plus-lg me-2"></i> New Appointment
            </button>
          </div>

          {/* 1. NEW APPOINTMENT TABLE (Active Actions) */}
          <div className="mb-5">
            <h5 className="fw-bold mb-4" style={{ color: '#002147', fontSize: '18px' }}>New Appointment</h5>
            <div className="table-responsive border rounded-3">
              <table className="table table-hover align-middle mb-0">
                <thead style={{ backgroundColor: '#fcf6ef' }}>
                  <tr className="text-nowrap" style={{ color: '#002147', fontSize: '14px' }}>
                    <th className="py-3 px-3">Attorney Name</th>
                    <th>Case Type</th><th>Case Title</th><th>Date</th><th>Time</th><th>Reason</th><th>Document</th><th>Status</th><th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '14px' }}>
                  {appointments.length > 0 ? appointments.map((app) => (
                    <tr key={app.id} className="text-nowrap border-bottom">
                      <td className="px-3 py-3 fw-bold">{app.attorney}</td>
                      <td>{app.type}</td><td>{app.title}</td><td>{app.date}</td><td>{app.time}</td>
                      <td><small className="text-muted">{app.reason}</small></td>
                      <td className="text-center">{app.doc}</td>
                      <td><span className="badge bg-success-subtle text-success border border-success-subtle px-3">{app.status}</span></td>
                      <td className="text-center">
                        <div className="d-flex gap-2 justify-content-center">
                            <button className="btn btn-sm btn-outline-primary" onClick={() => navigateToOrgUsers('edit')}>Re-schedule</button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleCancel(app.id)}>Cancel</button>
                        </div>
                      </td>
                    </tr>
                  )) : <tr><td colSpan="9" className="text-center py-4 text-muted">No Active Appointments</td></tr>}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. APPOINTMENTS HISTORY TABLE (View Mode Only) */}
          <div>
            <h5 className="fw-bold mb-4" style={{ color: '#6c757d', fontSize: '18px' }}>Appointments History</h5>
            <div className="table-responsive border rounded-3">
              <table className="table align-middle mb-0" style={{ backgroundColor: '#f8f9fa' }}>
                <thead style={{ backgroundColor: '#e9ecef' }}>
                  <tr className="text-nowrap" style={{ color: '#002147', fontSize: '14px' }}>
                    <th className="py-3 px-3">Attorney Name</th>
                    <th>Case Type</th><th>Case Title</th><th>Date</th><th>Time</th><th>Reason</th><th>Document</th><th>Status</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '14px', color: '#6c757d' }}>
                  {history.map((app) => (
                    <tr key={app.id} className="text-nowrap border-bottom">
                      <td className="px-3 py-3">{app.attorney}</td>
                      <td>{app.type}</td><td>{app.title}</td><td>{app.date}</td><td>{app.time}</td>
                      <td>{app.reason}</td><td className="text-center">{app.doc}</td>
                      <td><span className="badge bg-secondary-subtle text-secondary px-3">{app.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card border-0 shadow-lg">
            <div className="p-4 d-flex justify-content-between align-items-center text-white" style={{ backgroundColor: '#002147' }}>
              <h5 className="mb-0 fw-bold">{editId ? 'Re-schedule Appointment' : 'New Appointment'}</h5>
              <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
            </div>

            <div className="p-4 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold small">Case Type</label>
                    <input type="text" name="type" className="form-control" placeholder="Criminal, Civil etc." value={formData.type} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold small">Case Title</label>
                    <input type="text" name="title" className="form-control" placeholder="Case Name" value={formData.title} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold small">Date</label>
                    <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold small">Time</label>
                    <input type="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold small">Reason</label>
                    <textarea name="reason" className="form-control" rows="3" placeholder="Description..." value={formData.reason} onChange={handleChange} required></textarea>
                  </div>
                </div>

                <div className="mt-4 d-flex gap-2">
                  <button type="submit" className="btn text-white w-100 fw-bold py-2" style={{ backgroundColor: '#002147' }}>
                    {editId ? 'Update Appointment' : 'Schedule Appointment'}
                  </button>
                  <button type="button" className="btn btn-light border w-100 fw-bold py-2" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(3px);
          display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px;
        }
        .modal-card { width: 100%; max-width: 600px; background: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); animation: zoomIn 0.3s ease; overflow: hidden; }
        @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .table th { font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .form-control:focus { border-color: #de9f57; box-shadow: none; }
        :global(.container-fluid) { max-width: 100% !important; }
        .badge { font-weight: 600; font-size: 11px; }
      `}</style>
    </AttorneyLayout>
  );
}