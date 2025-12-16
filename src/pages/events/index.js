// // FILE: pages/events/index.js
// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';

// // --- DATA SOURCE ---
// export const eventsData = [
//   {
//     id: 1,
//     title: "26th Annual Berkeley - Stanford Advanced Patent Law Institute",
//     date: "2025-12-04",
//     time: "09:00 AM - 05:00 PM",
//     location: "Stanford, CA, USA",
//     type: "Conference",
//     relatedProfessionals: ["Caroline K. Abbott"],
//     topic: "Intellectual Property",
//     registrationLink: "/register"
//   },
//   {
//     id: 2,
//     title: "Reconfiguration of Amparo in Mexico: Business Implications",
//     date: "2025-12-04",
//     time: "02:00 PM - 04:00 PM",
//     location: "Virtual / Webinar",
//     type: "Webinar",
//     relatedProfessionals: ["Jacob M. Abdo"],
//     topic: "International Law",
//     registrationLink: "/register"
//   },
//   {
//     id: 3,
//     title: "Patent Litigation Trends in MedTech",
//     date: "2025-12-10",
//     time: "12:00 PM - 01:00 PM ET",
//     location: "Online",
//     type: "Webinar",
//     relatedProfessionals: ["Darren J. Abernethy"],
//     topic: "MedTech",
//     registrationLink: "/register"
//   },
//   {
//     id: 4,
//     title: "Renewables M&A and Tax Equity Markets Preview",
//     date: "2025-12-15",
//     time: "02:00 PM - 03:00 PM ET",
//     location: "New York, NY",
//     type: "Seminar",
//     relatedProfessionals: ["Charles J. Abrams"],
//     topic: "Energy & Tax",
//     registrationLink: "/register"
//   },
//   {
//     id: 5,
//     title: "Builders Association Holiday Party & Awards",
//     date: "2025-12-20",
//     time: "06:00 PM - 10:00 PM",
//     location: "Miami, FL",
//     type: "Networking",
//     relatedProfessionals: ["Ejim Peter Achi"],
//     topic: "Real Estate",
//     registrationLink: "/register"
//   }
// ];

// export default function EventsPage() {
//   const theme = {
//     primaryBlue: '#002855',
//     accentGold: '#cfa144',
//     white: '#ffffff',
//     lightGray: '#f8f9fa'
//   };

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({ location: 'All', topic: 'All' });

//   const locations = ['All', ...new Set(eventsData.map(e => e.location))].sort();
//   const topics = ['All', ...new Set(eventsData.map(e => e.topic))].sort();

//   const filteredEvents = useMemo(() => {
//     return eventsData.filter(event => {
//       if (searchTerm && !event.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
//       if (filters.location !== 'All' && event.location !== filters.location) return false;
//       if (filters.topic !== 'All' && event.topic !== filters.topic) return false;
//       return true;
//     });
//   }, [searchTerm, filters]);

//   const getDayMonth = (dateStr) => {
//     const date = new Date(dateStr);
//     return {
//       day: date.getDate(),
//       month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
//       year: date.getFullYear()
//     };
//   };

//   return (
//     <>
//       <Head>
//         <title>Events | Core Law</title>
//       </Head>

//       <div style={{ backgroundColor: theme.primaryBlue, padding: '100px 0', textAlign: 'center' }}>
//         <div className="container">
//           <h1 className="text-white display-4 fw-bold font-serif">Events & Webinars</h1>
//           <p className="text-white lead">Connect with our legal experts.</p>
//         </div>
//       </div>

//       <div className="py-5 bg-white">
//         <div className="container">
//           {/* Filters */}
//           <div className="row mb-5 g-3">
//             <div className="col-md-4">
//               <input type="text" className="form-control" placeholder="Search events..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//             </div>
//             <div className="col-md-3">
//               <select className="form-select" value={filters.location} onChange={(e) => setFilters({...filters, location: e.target.value})}>
//                 {locations.map(l => <option key={l} value={l}>{l}</option>)}
//               </select>
//             </div>
//             <div className="col-md-3">
//               <select className="form-select" value={filters.topic} onChange={(e) => setFilters({...filters, topic: e.target.value})}>
//                 {topics.map(t => <option key={t} value={t}>{t}</option>)}
//               </select>
//             </div>
//             <div className="col-md-2">
//                 <button className="btn btn-outline-danger w-100" onClick={() => {setSearchTerm(''); setFilters({location:'All', topic:'All'})}}>Reset</button>
//             </div>
//           </div>

//           {/* List */}
//           <div className="row g-4">
//             {filteredEvents.length > 0 ? filteredEvents.map((event) => {
//                const dateObj = getDayMonth(event.date);
//                return (
//                 <div className="col-12" key={event.id}>
//                    <div className="card border-0 shadow-sm overflow-hidden">
//                       <div className="row g-0">
//                          <div className="col-md-2 bg-light text-center p-3 d-flex flex-column justify-content-center align-items-center border-end">
//                             <h2 className="fw-bold mb-0 text-primary display-5">{dateObj.day}</h2>
//                             <span className="text-uppercase fw-bold text-muted">{dateObj.month}</span>
//                             <small>{dateObj.year}</small>
//                          </div>
//                          <div className="col-md-10">
//                             <div className="card-body p-4">
//                                <span className="badge bg-secondary mb-2">{event.type}</span>
//                                <h3 className="card-title mb-2">
//                                   {/* Link Fix for dynamic routing */}
//                                   <Link href={`/events/${event.id}`} passHref>
//                                     <span className="text-decoration-none text-dark hover-gold" style={{cursor: 'pointer'}}>{event.title}</span>
//                                   </Link>
//                                </h3>
//                                <p className="text-muted mb-2"><i className="bi bi-geo-alt-fill text-warning me-2"></i>{event.location}</p>
//                                <div className="d-flex justify-content-between align-items-center mt-3">
//                                   <Link href={`/events/${event.id}`} passHref>
//                                      <span className="text-primary fw-bold text-decoration-none" style={{cursor: 'pointer'}}>View Details →</span>
//                                   </Link>
//                                   {/* Using prefetch=false to stop console 404s for register page */}
//                                   <Link href={event.registrationLink} prefetch={false} passHref>
//                                      <a className="btn btn-primary btn-sm px-4">Register</a>
//                                   </Link>
//                                </div>
//                             </div>
//                          </div>
//                       </div>
//                    </div>
//                 </div>
//                );
//             }) : (
//                 <div className="text-center py-5"><h4>No events found.</h4></div>
//             )}
//           </div>
//         </div>
//       </div>
//       <style jsx>{` .hover-gold:hover { color: ${theme.accentGold} !important; } `}</style>
//     </>
//   );
// }




// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';

// // --- DATA ---
// export const eventsData = [
//   {
//     id: 1,
//     date: "2025-12-04",
//     time: "09:00 AM",
//     title: "26th Annual Berkeley - Stanford Advanced Patent Law Institute",
//     topic: "Intellectual Property",
//     type: "Conference",
//     location: "Stanford, CA",
//     professionals: ["Caroline K. Abbott"],
//     registrationLink: "/register"
//   },
//   {
//     id: 2,
//     date: "2025-12-04",
//     time: "02:00 PM",
//     title: "Reconfiguration of Amparo in Mexico: Business Implications",
//     topic: "International Law",
//     type: "Webinar",
//     location: "Online",
//     professionals: ["Jacob M. Abdo"],
//     registrationLink: "/register"
//   },
//   {
//     id: 3,
//     date: "2025-12-10",
//     time: "12:00 PM",
//     title: "Patent Litigation Trends in MedTech",
//     topic: "MedTech",
//     type: "Webinar",
//     location: "Online",
//     professionals: ["Darren J. Abernethy"],
//     registrationLink: "/register"
//   },
//   {
//     id: 4,
//     date: "2025-12-15",
//     time: "02:00 PM",
//     title: "Renewables M&A and Tax Equity Markets Preview",
//     topic: "Energy & Tax",
//     type: "Seminar",
//     location: "New York, NY",
//     professionals: ["Charles J. Abrams"],
//     registrationLink: "/register"
//   },
//   {
//     id: 5,
//     date: "2025-12-20",
//     time: "06:00 PM",
//     title: "Builders Association Holiday Party & Awards",
//     topic: "Real Estate",
//     type: "Networking",
//     location: "Miami, FL",
//     professionals: ["Ejim Peter Achi"],
//     registrationLink: "/register"
//   }
// ];

// export default function EventsPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterLocation, setFilterLocation] = useState('All');
//   const locations = ['All', ...new Set(eventsData.map(e => e.location))].sort();

//   const filteredEvents = useMemo(() => {
//     return eventsData.filter(event => {
//       const matchSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchLocation = filterLocation === 'All' || event.location === filterLocation;
//       return matchSearch && matchLocation;
//     });
//   }, [searchTerm, filterLocation]);

//   const handlePrint = () => { if (typeof window !== 'undefined') window.print(); };
//   const shareUrl = "https://corelaw.com/events";

//   return (
//     <>
//       <Head>
//         <title>Events & Webinars | Core Law</title>
//       </Head>

//       {/* BANNER */}
//       <div className="inner-banner" style={{
//          backgroundColor: '#002855', 
//          padding: '120px 0', 
//          textAlign: 'center',
//          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(assets/images/event-banner.png)',
//          backgroundSize: 'cover'
//       }}>
//          <div className="container">
//             <span className="text-warning text-uppercase letter-spacing-2 fw-bold">Connect With Us</span>
//             <h1 className="text-white display-4 fw-bold mt-2">Events Calendar</h1>
//          </div>
//       </div>

//       {/* SEARCH BAR (Floating) */}
//       <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
//          <div className="card shadow-lg border-0 p-4 rounded-3">
//             <div className="row g-3 align-items-end">
//                <div className="col-md-6">
//                   <label className="fw-bold small text-muted">SEARCH</label>
//                   <input type="text" className="form-control" placeholder="Search events..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//                </div>
//                <div className="col-md-4">
//                   <label className="fw-bold small text-muted">LOCATION</label>
//                   <select className="form-select" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
//                      {locations.map(l => <option key={l} value={l}>{l}</option>)}
//                   </select>
//                </div>
//                <div className="col-md-2">
//                   <button className="btn btn-dark w-100" onClick={() => {setSearchTerm(''); setFilterLocation('All')}}>Reset</button>
//                </div>
//             </div>
//          </div>
//       </div>

//       {/* EVENTS GRID (CARDS) */}
//       <div className="container py-5 mt-3">
//          <div className="row g-4">
//             {filteredEvents.length > 0 ? filteredEvents.map((event) => {
//                const day = new Date(event.date).getDate();
//                const month = new Date(event.date).toLocaleString('default', { month: 'short' });
//                const year = new Date(event.date).getFullYear();

//                return (
//                   <div key={event.id} className="col-lg-4 col-md-6">
//                      <div className="card h-100 border-0 shadow-sm hover-card overflow-hidden">
                        
//                         {/* 1. Top Section: Date & Type */}
//                         <div className="card-header bg-white border-0 p-4 pb-0 d-flex justify-content-between align-items-start">
//                            <div className="date-box text-center rounded p-2 text-white shadow-sm" style={{backgroundColor: '#0a1c38', minWidth: '70px'}}>
//                               <span className="d-block text-uppercase small" style={{opacity: 0.8}}>{month}</span>
//                               <span className="d-block display-6 fw-bold">{day}</span>
//                               <span className="d-block small">{year}</span>
//                            </div>
//                            <span className="badge bg-light text-dark border px-3 py-2">{event.type}</span>
//                         </div>

//                         {/* 2. Body: Content */}
//                         <div className="card-body p-4 pt-3 d-flex flex-column">
//                            <span className="text-warning small fw-bold text-uppercase mb-2">{event.topic}</span>
//                            <h5 className="card-title fw-bold mb-3">
//                               <Link href={`/events/${event.id}`}>
//                                  <a className="text-decoration-none text-dark hover-gold">{event.title}</a>
//                               </Link>
//                            </h5>
                           
//                            <div className="mt-auto">
//                               <div className="d-flex align-items-center mb-2 text-muted small">
//                                  <i className="bi bi-clock me-2 text-warning"></i> {event.time}
//                               </div>
//                               <div className="d-flex align-items-center mb-3 text-muted small">
//                                  <i className="bi bi-geo-alt-fill me-2 text-warning"></i> {event.location}
//                               </div>
//                               <div className="border-top pt-3 text-muted small">
//                                  <strong>Speaker:</strong> {event.professionals[0]}
//                               </div>
//                            </div>
//                         </div>

//                         {/* 3. Footer: Actions */}
//                         <div className="card-footer bg-light border-0 p-3 d-flex justify-content-between align-items-center">
//                            <div className="d-flex gap-3">
//                               <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank"  rel="noopener noreferrer" className="text-secondary hover-icon"><i className="bi bi-facebook"></i></a>
//                               <a href={`https://linkedin.com/shareArticle?url=${shareUrl}`} target="_blank"  rel="noopener noreferrer" className="text-secondary hover-icon"><i className="bi bi-linkedin"></i></a>
//                               <i className="bi bi-printer text-secondary hover-icon" style={{cursor: 'pointer'}} onClick={handlePrint}></i>
//                            </div>
                           
//                            <Link href={`/events/${event.id}`}>
//                               <a className="btn btn-sm text-white px-4 fw-bold" style={{backgroundColor: '#de9f57', borderRadius: '20px'}}>Register</a>
//                            </Link>
//                         </div>

//                      </div>
//                   </div>
//                );
//             }) : (
//                <div className="col-12 text-center py-5">
//                   <h3 className="text-muted">No events found.</h3>
//                </div>
//             )}
//          </div>
//       </div>

//       <style jsx>{`
//         .letter-spacing-2 { letter-spacing: 2px; }
//         .hover-card {
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .hover-card:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
//         }
//         .hover-gold:hover {
//             color: #de9f57 !important;
//             transition: color 0.2s;
//         }
//         .hover-icon:hover {
//             color: #0a1c38 !important;
//             transform: scale(1.2);
//             transition: all 0.2s;
//         }
//       `}</style>
//     </>
//   );
// }


import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// --- DATA ---
// Aap is data ko ek alag file (e.g., data/eventsData.js) mein bhi rakh sakte hain agar chahein.
export const eventsData = [
  {
    id: 1,
    date: "2025-12-04",
    time: "09:00 AM",
    title: "26th Annual Berkeley - Stanford Advanced Patent Law Institute",
    topic: "Intellectual Property",
    type: "Conference",
    location: "Stanford, CA",
    professionals: ["Caroline K. Abbott"],
    registrationLink: "/register"
  },
  {
    id: 2,
    date: "2025-12-04",
    time: "02:00 PM",
    title: "Reconfiguration of Amparo in Mexico: Business Implications",
    topic: "International Law",
    type: "Webinar",
    location: "Online",
    professionals: ["Jacob M. Abdo"],
    registrationLink: "/register"
  },
  {
    id: 3,
    date: "2025-12-10",
    time: "12:00 PM",
    title: "Patent Litigation Trends in MedTech",
    topic: "MedTech",
    type: "Webinar",
    location: "Online",
    professionals: ["Darren J. Abernethy"],
    registrationLink: "/register"
  },
  {
    id: 4,
    date: "2025-12-15",
    time: "02:00 PM",
    title: "Renewables M&A and Tax Equity Markets Preview",
    topic: "Energy & Tax",
    type: "Seminar",
    location: "New York, NY",
    professionals: ["Charles J. Abrams"],
    registrationLink: "/register"
  },
  {
    id: 5,
    date: "2025-12-20",
    time: "06:00 PM",
    title: "Builders Association Holiday Party & Awards",
    topic: "Real Estate",
    type: "Networking",
    location: "Miami, FL",
    professionals: ["Ejim Peter Achi"],
    registrationLink: "/register"
  }
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('All');
  const locations = ['All', ...new Set(eventsData.map(e => e.location))].sort();

  const filteredEvents = useMemo(() => {
    return eventsData.filter(event => {
      const matchSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLocation = filterLocation === 'All' || event.location === filterLocation;
      return matchSearch && matchLocation;
    });
  }, [searchTerm, filterLocation]);

  const handlePrint = () => { if (typeof window !== 'undefined') window.print(); };
  const shareUrl = "https://corelaw.com/events";

  return (
    <>
      <Head>
        <title>Events & Webinars | Core Law</title>
      </Head>

      {/* BANNER */}
      <div className="inner-banner" style={{
         backgroundColor: '#002855', 
         padding: '120px 0', 
         textAlign: 'center',
         backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/images/event-banner.png)',
         backgroundSize: 'cover'
      }}>
         <div className="container">
            <span className="text-warning text-uppercase letter-spacing-2 fw-bold">Connect With Us</span>
            <h1 className="text-white display-4 fw-bold mt-2">Events Calendar</h1>
         </div>
      </div>

      {/* SEARCH BAR (Floating) */}
      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
         <div className="card shadow-lg border-0 p-4 rounded-3">
            <div className="row g-3 align-items-end">
               <div className="col-md-6">
                  <label className="fw-bold small text-muted">SEARCH</label>
                  <input type="text" className="form-control" placeholder="Search events..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
               </div>
               <div className="col-md-4">
                  <label className="fw-bold small text-muted">LOCATION</label>
                  <select className="form-select" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
                     {locations.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
               </div>
               <div className="col-md-2">
                  <button className="btn btn-dark w-100" onClick={() => {setSearchTerm(''); setFilterLocation('All')}}>Reset</button>
               </div>
            </div>
         </div>
      </div>

      {/* EVENTS GRID (CARDS) */}
      <div className="container py-5 mt-3">
         <div className="row g-4">
            {filteredEvents.length > 0 ? filteredEvents.map((event) => {
               const day = new Date(event.date).getDate();
               const month = new Date(event.date).toLocaleString('default', { month: 'short' });
               const year = new Date(event.date).getFullYear();

               return (
                  <div key={event.id} className="col-lg-4 col-md-6">
                     <div className="card h-100 border-0 shadow-sm hover-card overflow-hidden">
                        
                        {/* 1. Top Section: Date & Type */}
                        <div className="card-header bg-white border-0 p-4 pb-0 d-flex justify-content-between align-items-start">
                           <div className="date-box text-center rounded p-2 text-white shadow-sm" style={{backgroundColor: '#0a1c38', minWidth: '70px'}}>
                              <span className="d-block text-uppercase small" style={{opacity: 0.8}}>{month}</span>
                              <span className="d-block display-6 fw-bold">{day}</span>
                              <span className="d-block small">{year}</span>
                           </div>
                           <span className="badge bg-light text-dark border px-3 py-2">{event.type}</span>
                        </div>

                        {/* 2. Body: Content */}
                        <div className="card-body p-4 pt-3 d-flex flex-column">
                           <span className="text-warning small fw-bold text-uppercase mb-2">{event.topic}</span>
                           <h5 className="card-title fw-bold mb-3">
                              <Link href={`/events/${event.id}`}>
                                 <a className="text-decoration-none text-dark hover-gold">{event.title}</a>
                              </Link>
                           </h5>
                           
                           <div className="mt-auto">
                              <div className="d-flex align-items-center mb-2 text-muted small">
                                 <i className="bi bi-clock me-2 text-warning"></i> {event.time}
                              </div>
                              <div className="d-flex align-items-center mb-3 text-muted small">
                                 <i className="bi bi-geo-alt-fill me-2 text-warning"></i> {event.location}
                              </div>
                              <div className="border-top pt-3 text-muted small">
                                 <strong>Speaker:</strong> {event.professionals[0]}
                              </div>
                           </div>
                        </div>

                        {/* 3. Footer: Actions */}
                        <div className="card-footer bg-light border-0 p-3 d-flex justify-content-between align-items-center">
                           <div className="d-flex gap-3">
                              <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank"  rel="noopener noreferrer" className="text-secondary hover-icon"><i className="bi bi-facebook"></i></a>
                              <a href={`https://linkedin.com/shareArticle?url=${shareUrl}`} target="_blank"  rel="noopener noreferrer" className="text-secondary hover-icon"><i className="bi bi-linkedin"></i></a>
                              <i className="bi bi-printer text-secondary hover-icon" style={{cursor: 'pointer'}} onClick={handlePrint}></i>
                           </div>
                           
                           <Link href={`/events/${event.id}`}>
                              <a className="btn btn-sm text-white px-4 fw-bold" style={{backgroundColor: '#de9f57', borderRadius: '20px'}}>Register</a>
                           </Link>
                        </div>

                     </div>
                  </div>
               );
            }) : (
               <div className="col-12 text-center py-5">
                  <h3 className="text-muted">No events found.</h3>
               </div>
            )}
         </div>
      </div>

      <style jsx>{`
        .letter-spacing-2 { letter-spacing: 2px; }
        .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .hover-gold:hover {
            color: #de9f57 !important;
            transition: color 0.2s;
        }
        .hover-icon:hover {
            color: #0a1c38 !important;
            transform: scale(1.2);
            transition: all 0.2s;
        }
      `}</style>
    </>
  );
}