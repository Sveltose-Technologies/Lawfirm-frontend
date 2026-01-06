// // import React, { useState, useEffect } from 'react';
// // import { useRouter } from 'next/router';
// // import Head from 'next/head';
// // import Link from 'next/link';

// // // --- DATA SOURCE (Must match the list page EXACTLY) ---
// // // Note: registrationLink is updated to "/register"
// // const eventsData = [
// //   {
// //     id: 1,
// //     title: "26th Annual Berkeley - Stanford Advanced Patent Law Institute",
// //     date: "2025-12-04",
// //     time: "09:00 AM - 05:00 PM",
// //     location: "Stanford, CA, USA",
// //     type: "Conference",
// //     relatedProfessionals: ["Caroline K. Abbott"],
// //     topic: "Intellectual Property",
// //     description: "This advanced institute focuses on the latest developments in patent law, bringing together judges, academics, and practitioners.",
// //     agenda: ["9:00 AM - Opening Remarks", "10:00 AM - Keynote Speech", "1:00 PM - Networking Lunch", "4:00 PM - Closing Panel"],
// //     registrationLink: "/register"
// //   },
// //   {
// //     id: 2,
// //     title: "Reconfiguration of Amparo in Mexico: Business Implications",
// //     date: "2025-12-04",
// //     time: "02:00 PM - 04:00 PM",
// //     location: "Virtual / Webinar",
// //     type: "Webinar",
// //     relatedProfessionals: ["Jacob M. Abdo"],
// //     topic: "International Law",
// //     description: "A deep dive into the recent amendments to the Amparo Law in Mexico and what it means for international businesses.",
// //     agenda: ["2:00 PM - Introduction", "2:30 PM - Legal Analysis", "3:30 PM - Q&A Session"],
// //     registrationLink: "/register"
// //   },
// //   {
// //     id: 3,
// //     title: "Patent Litigation Trends in MedTech",
// //     date: "2025-12-10",
// //     time: "12:00 PM - 01:00 PM ET",
// //     location: "Online",
// //     type: "Webinar",
// //     relatedProfessionals: ["Darren J. Abernethy"],
// //     topic: "MedTech",
// //     description: "Analyzing current litigation trends in the medical technology sector.",
// //     agenda: ["12:00 PM - Trends Overview", "12:45 PM - Q&A"],
// //     registrationLink: "/register"
// //   },
// //   {
// //     id: 4,
// //     title: "Renewables M&A and Tax Equity Markets Preview",
// //     date: "2025-12-15",
// //     time: "02:00 PM - 03:00 PM ET",
// //     location: "New York, NY",
// //     type: "Seminar",
// //     relatedProfessionals: ["Charles J. Abrams"],
// //     topic: "Energy & Tax",
// //     description: "Previewing the market landscape for renewable energy mergers and acquisitions.",
// //     agenda: ["2:00 PM - Market Analysis", "2:45 PM - Networking"],
// //     registrationLink: "/register"
// //   },
// //   {
// //     id: 5,
// //     title: "Builders Association Holiday Party & Awards",
// //     date: "2025-12-20",
// //     time: "06:00 PM - 10:00 PM",
// //     location: "Miami, FL",
// //     type: "Networking",
// //     relatedProfessionals: ["Ejim Peter Achi"],
// //     topic: "Real Estate",
// //     description: "Annual holiday gathering and awards ceremony for the Builders Association.",
// //     agenda: ["6:00 PM - Cocktails", "7:00 PM - Awards", "8:00 PM - Dinner"],
// //     registrationLink: "/register"
// //   }
// // ];

// // const EventDetails = () => {
// //   const router = useRouter();
// //   const { id } = router.query;
// //   const [event, setEvent] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (router.isReady) {
// //       if (id) {
// //         const found = eventsData.find(e => e.id.toString() === id.toString());
// //         if (found) setEvent(found);
// //       }
// //       setLoading(false);
// //     }
// //   }, [router.isReady, id]);

// //   if (loading) return <div className="text-center py-5">Loading...</div>;

// //   if (!event) return (
// //     <div className="text-center py-5 container">
// //        <h3>Event Not Found</h3>
// //        <Link href="/events"><a className="btn btn-primary mt-3">Back to List</a></Link>
// //     </div>
// //   );

// //   return (
// //     <>
// //       <Head>
// //         <title>{event.title} | Event Details</title>
// //       </Head>

// //       <div className="py-5 text-white text-center" style={{ backgroundColor: '#002855' }}>
// //         <div className="container">
// //           <span className="badge bg-warning text-dark mb-3">{event.type}</span>
// //           <h1 className="display-5 fw-bold font-serif">{event.title}</h1>
// //           <p className="lead mt-3"><i className="bi bi-geo-alt-fill text-warning"></i> {event.location} &nbsp;|&nbsp; <i className="bi bi-calendar3 text-warning"></i> {event.date}</p>
// //         </div>
// //       </div>

// //       <div className="py-5 bg-white">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-8">
// //                <h3 className="mb-3">About the Event</h3>
// //                <p className="lead text-muted">{event.description}</p>
// //                <h4 className="mt-5 mb-3">Agenda</h4>
// //                <ul className="list-group list-group-flush">
// //                  {event.agenda?.map((item, i) => (
// //                     <li key={i} className="list-group-item px-0"><i className="bi bi-check-circle me-2 text-success"></i>{item}</li>
// //                  ))}
// //                </ul>
// //             </div>
// //             <div className="col-lg-4">
// //                <div className="card shadow-sm border-0 p-4 bg-light">
// //                   <h4 className="mb-3">Event Details</h4>
// //                   <ul className="list-unstyled mb-4">
// //                     <li className="mb-2"><strong>Time:</strong> {event.time}</li>
// //                     <li className="mb-2"><strong>Topic:</strong> {event.topic}</li>
// //                     <li className="mb-2"><strong>Speakers:</strong> {event.relatedProfessionals.join(', ')}</li>
// //                   </ul>
                  
// //                   {/* Fixed Link: Points to /register with prefetch false */}
// //                   <Link href={event.registrationLink} prefetch={false}>
// //                     <a className="btn btn-primary w-100">Register Now</a>
// //                   </Link>

// //                   <div className="mt-4 pt-3 border-top">
// //                      <small className="text-muted">Share:</small>
// //                      <div className="d-flex gap-3 fs-5 mt-2">
// //                         <i className="bi bi-facebook text-primary" style={{cursor:'pointer'}}></i>
// //                         <i className="bi bi-twitter text-info" style={{cursor:'pointer'}}></i>
// //                         <i className="bi bi-linkedin text-primary" style={{cursor:'pointer'}}></i>
// //                         <i className="bi bi-printer text-dark" style={{cursor:'pointer'}} onClick={() => window.print()}></i>
// //                      </div>
// //                   </div>
// //                </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default EventDetails;


// // import React, { useState, useEffect } from 'react';
// // import { useRouter } from 'next/router';
// // import Head from 'next/head';
// // import Link from 'next/link';
// // import { eventsData } from './index'; // Importing data from main file

// // const EventDetails = () => {
// //   const router = useRouter();
// //   const { id } = router.query;
// //   const [event, setEvent] = useState(null);

// //   useEffect(() => {
// //     if (router.isReady && id) {
// //        // Find event by ID
// //        const found = eventsData.find(e => e.id.toString() === id.toString());
// //        setEvent(found);
// //     }
// //   }, [router.isReady, id]);

// //   const handlePrint = () => { if (typeof window !== 'undefined') window.print(); };

// //   if (!event) return <div className="text-center py-5">Loading Details...</div>;

// //   return (
// //     <>
// //       <Head>
// //         <title>{event.title} | Event Details</title>
// //       </Head>

// //       {/* --- HEADER --- */}
// //       <div className="py-5 text-white text-center" style={{ backgroundColor: '#002855' }}>
// //         <div className="container">
// //           <span className="badge bg-warning text-dark mb-3 text-uppercase">{event.type}</span>
// //           <h1 className="display-5 fw-bold font-serif px-lg-5">{event.title}</h1>
// //         </div>
// //       </div>

// //       {/* --- CONTENT --- */}
// //       <div className="py-5 bg-light">
// //         <div className="container">
// //           <div className="row g-4">
            
// //             {/* Left Column: Details */}
// //             <div className="col-lg-8">
// //                <div className="bg-white p-4 shadow-sm rounded mb-4">
// //                    <h3 className="mb-3 border-bottom pb-2">About the Event</h3>
// //                    <p className="text-muted lead">
// //                      Join us for this exclusive session on <strong>{event.title}</strong>. 
// //                      Our experts will dive deep into the legal nuances and provide actionable insights.
// //                    </p>
// //                    <p className="text-muted">
// //                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// //                    </p>
// //                </div>
               
// //                {/* Related Professionals */}
// //                <div className="bg-white p-4 shadow-sm rounded">
// //                    <h4 className="mb-3">Featured Speakers</h4>
// //                    <div className="d-flex gap-3">
// //                        {event.professionals.map((prof, i) => (
// //                            <div key={i} className="d-flex align-items-center bg-light p-2 rounded border pe-3">
// //                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white me-2" style={{width:'40px', height:'40px'}}>
// //                                    {prof.charAt(0)}
// //                                </div>
// //                                <span className="fw-bold">{prof}</span>
// //                            </div>
// //                        ))}
// //                    </div>
// //                </div>
// //             </div>

// //             {/* Right Column: Sidebar (Excel Data Card) */}
// //             <div className="col-lg-4">
// //                <div className="card border-0 shadow-sm">
// //                   <div className="card-header bg-dark text-white fw-bold py-3">
// //                       Event Summary
// //                   </div>
// //                   <div className="card-body p-4">
                      
// //                       <div className="mb-3">
// //                           <label className="text-muted small fw-bold text-uppercase">Date</label>
// //                           <div className="fs-5 fw-bold"><i className="bi bi-calendar-event me-2 text-warning"></i>{event.date}</div>
// //                       </div>

// //                       <div className="mb-3">
// //                           <label className="text-muted small fw-bold text-uppercase">Time</label>
// //                           <div className="fs-5"><i className="bi bi-clock me-2 text-warning"></i>{event.time}</div>
// //                       </div>

// //                       <div className="mb-3">
// //                           <label className="text-muted small fw-bold text-uppercase">Location</label>
// //                           <div className="fs-5"><i className="bi bi-geo-alt-fill me-2 text-warning"></i>{event.location}</div>
// //                       </div>
                      
// //                       <hr />

// //                       {/* ACTIONS */}
// //                       <Link href="/contact">
// //                         <a className="btn btn-primary w-100 mb-2" style={{backgroundColor: '#cfa144', border: 'none'}}>Register Now</a>
// //                       </Link>

// //                       <div className="row g-2 mt-2">
// //                           <div className="col-6">
// //                               <button onClick={handlePrint} className="btn btn-outline-dark w-100 btn-sm">
// //                                   <i className="bi bi-printer me-1"></i> Print
// //                               </button>
// //                           </div>
// //                           <div className="col-6">
// //                               <Link href="/events">
// //                                   <a className="btn btn-outline-secondary w-100 btn-sm">Back</a>
// //                               </Link>
// //                           </div>
// //                       </div>

// //                       {/* Social Share */}
// //                       <div className="mt-4 text-center">
// //                           <small className="text-muted">Share this event</small>
// //                           <div className="d-flex justify-content-center gap-3 mt-2 fs-5">
// //                              <a href="#" className="text-secondary"><i className="bi bi-facebook"></i></a>
// //                              <a href="#" className="text-secondary"><i className="bi bi-twitter"></i></a>
// //                              <a href="#" className="text-secondary"><i className="bi bi-linkedin"></i></a>
// //                           </div>
// //                       </div>

// //                   </div>
// //                </div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default EventDetails;


// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Link from 'next/link';

// // Import data from the main index file
// import { eventsData } from './index'; 

// const EventDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     if (router.isReady && id) {
//        // Find event by ID
//        const found = eventsData.find(e => e.id.toString() === id.toString());
//        setEvent(found);
//     }
//   }, [router.isReady, id]);

//   const handlePrint = () => { if (typeof window !== 'undefined') window.print(); };

//   if (!event) return <div className="text-center py-5">Loading Details...</div>;

//   return (
//     <>
//       <Head>
//         <title>{event.title} | Event Details</title>
//       </Head>

//       {/* --- HEADER --- */}
//       <div className="py-5 text-white text-center" style={{ backgroundColor: '#002855' }}>
//         <div className="container">
//           <span className="badge bg-warning text-dark mb-3 text-uppercase">{event.type}</span>
//           <h1 className="display-5 fw-bold font-serif px-lg-5">{event.title}</h1>
//         </div>
//       </div>

//       {/* --- CONTENT --- */}
//       <div className="py-5 bg-light">
//         <div className="container">
//           <div className="row g-4">
            
//             {/* Left Column: Details */}
//             <div className="col-lg-8">
//                <div className="bg-white p-4 shadow-sm rounded mb-4">
//                    <h3 className="mb-3 border-bottom pb-2">About the Event</h3>
//                    <p className="text-muted lead">
//                      Join us for this exclusive session on <strong>{event.title}</strong>. 
//                      Our experts will dive deep into the legal nuances and provide actionable insights.
//                    </p>
//                    <p className="text-muted">
//                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                    </p>
//                </div>
               
//                {/* Related Professionals */}
//                <div className="bg-white p-4 shadow-sm rounded">
//                    <h4 className="mb-3">Featured Speakers</h4>
//                    <div className="d-flex gap-3">
//                        {event.professionals.map((prof, i) => (
//                            <div key={i} className="d-flex align-items-center bg-light p-2 rounded border pe-3">
//                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white me-2" style={{width:'40px', height:'40px'}}>
//                                    {prof.charAt(0)}
//                                </div>
//                                <span className="fw-bold">{prof}</span>
//                            </div>
//                        ))}
//                    </div>
//                </div>
//             </div>

//             {/* Right Column: Sidebar (Excel Data Card) */}
//             <div className="col-lg-4">
//                <div className="card border-0 shadow-sm">
//                   <div className="card-header bg-dark text-white fw-bold py-3">
//                       Event Summary
//                   </div>
//                   <div className="card-body p-4">
                      
//                       <div className="mb-3">
//                           <label className="text-muted small fw-bold text-uppercase">Date</label>
//                           <div className="fs-5 fw-bold"><i className="bi bi-calendar-event me-2 text-warning"></i>{event.date}</div>
//                       </div>

//                       <div className="mb-3">
//                           <label className="text-muted small fw-bold text-uppercase">Time</label>
//                           <div className="fs-5"><i className="bi bi-clock me-2 text-warning"></i>{event.time}</div>
//                       </div>

//                       <div className="mb-3">
//                           <label className="text-muted small fw-bold text-uppercase">Location</label>
//                           <div className="fs-5"><i className="bi bi-geo-alt-fill me-2 text-warning"></i>{event.location}</div>
//                       </div>
                      
//                       <hr />

//                       {/* ACTIONS */}
//                       <Link href="/contact">
//                         <a className="btn btn-primary w-100 mb-2" style={{backgroundColor: '#cfa144', border: 'none'}}>Register Now</a>
//                       </Link>

//                       <div className="row g-2 mt-2">
//                           <div className="col-6">
//                               <button onClick={handlePrint} className="btn btn-outline-dark w-100 btn-sm">
//                                   <i className="bi bi-printer me-1"></i> Print
//                               </button>
//                           </div>
//                           <div className="col-6">
//                               <Link href="/events">
//                                   <a className="btn btn-outline-secondary w-100 btn-sm">Back</a>
//                               </Link>
//                           </div>
//                       </div>

//                       {/* Social Share */}
//                       <div className="mt-4 text-center">
//                           <small className="text-muted">Share this event</small>
//                           <div className="d-flex justify-content-center gap-3 mt-2 fs-5">
//                              <a href="#" className="text-secondary"><i className="bi bi-facebook"></i></a>
//                              <a href="#" className="text-secondary"><i className="bi bi-twitter"></i></a>
//                              <a href="#" className="text-secondary"><i className="bi bi-linkedin"></i></a>
//                           </div>
//                       </div>

//                   </div>
//                </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EventDetails;


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

// Import data from the main index file
import { eventsData } from './index'; 

const EventDetails = () => {
  const router = useRouter();
  const { slug } = router.query; // Pehle yaha id tha, ab slug hai
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // router.isReady check karta hai ki URL ka data load ho gaya hai ya nahi
    if (router.isReady && slug) {
       // Ab hum ID ki jagah slug se find kar rahe hain
       // Dhyaan rakhein ki aapke eventsData mein 'slug' field honi chahiye
       const found = eventsData.find(e => e.slug === slug);
       setEvent(found);
    }
  }, [router.isReady, slug]); // Dependency array mein slug add kiya

  const handlePrint = () => { if (typeof window !== 'undefined') window.print(); };

  // Jab tak data na mile Loading dikhao
  if (!event) return <div className="text-center py-5">Loading Details...</div>;

  return (
    <>
      <Head>
        <title>{event.title} | Event Details</title>
      </Head>

      {/* --- HEADER --- */}
      <div className="py-5 text-white text-center" style={{ backgroundColor: '#002855' }}>
        <div className="container">
          <span className="badge bg-warning text-dark mb-3 text-uppercase">{event.type}</span>
          <h1 className="display-5 fw-bold font-serif px-lg-5">{event.title}</h1>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Column: Details */}
            <div className="col-lg-8">
               <div className="bg-white p-4 shadow-sm rounded mb-4">
                   <h3 className="mb-3 border-bottom pb-2">About the Event</h3>
                   <p className="text-muted lead">
                     Join us for this exclusive session on <strong>{event.title}</strong>. 
                     Our experts will dive deep into the legal nuances and provide actionable insights.
                   </p>
                   <p className="text-muted">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   </p>
               </div>
               
               {/* Related Professionals */}
               <div className="bg-white p-4 shadow-sm rounded">
                   <h4 className="mb-3">Featured Speakers</h4>
                   <div className="d-flex gap-3">
                       {event.professionals && event.professionals.map((prof, i) => (
                           <div key={i} className="d-flex align-items-center bg-light p-2 rounded border pe-3">
                               <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white me-2" style={{width:'40px', height:'40px'}}>
                                   {prof.charAt(0)}
                               </div>
                               <span className="fw-bold">{prof}</span>
                           </div>
                       ))}
                   </div>
               </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="col-lg-4">
               <div className="card border-0 shadow-sm">
                  <div className="card-header bg-dark text-white fw-bold py-3">
                      Event Summary
                  </div>
                  <div className="card-body p-4">
                      
                      <div className="mb-3">
                          <label className="text-muted small fw-bold text-uppercase">Date</label>
                          <div className="fs-5 fw-bold"><i className="bi bi-calendar-event me-2 text-warning"></i>{event.date}</div>
                      </div>

                      <div className="mb-3">
                          <label className="text-muted small fw-bold text-uppercase">Time</label>
                          <div className="fs-5"><i className="bi bi-clock me-2 text-warning"></i>{event.time}</div>
                      </div>

                      <div className="mb-3">
                          <label className="text-muted small fw-bold text-uppercase">Location</label>
                          <div className="fs-5"><i className="bi bi-geo-alt-fill me-2 text-warning"></i>{event.location}</div>
                      </div>
                      
                      <hr />

                      {/* ACTIONS */}
                      <Link href="/contact">
                        <a className="btn btn-primary w-100 mb-2" style={{backgroundColor: '#cfa144', border: 'none'}}>Register Now</a>
                      </Link>

                      <div className="row g-2 mt-2">
                          <div className="col-6">
                              <button onClick={handlePrint} className="btn btn-outline-dark w-100 btn-sm">
                                  <i className="bi bi-printer me-1"></i> Print
                              </button>
                          </div>
                          <div className="col-6">
                              <Link href="/events">
                                  <a className="btn btn-outline-secondary w-100 btn-sm">Back</a>
                              </Link>
                          </div>
                      </div>

                      {/* Social Share */}
                      <div className="mt-4 text-center">
                          <small className="text-muted">Share this event</small>
                          <div className="d-flex justify-content-center gap-3 mt-2 fs-5">
                             <a href="#" className="text-secondary"><i className="bi bi-facebook"></i></a>
                             <a href="#" className="text-secondary"><i className="bi bi-twitter"></i></a>
                             <a href="#" className="text-secondary"><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>

                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;