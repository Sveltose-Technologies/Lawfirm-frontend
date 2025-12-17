// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';

// export const attorneysData = [
//   {
//     id: 1,
//     name: 'Caroline K. Abbott',
//     role: 'Senior Associate',
//     phone: '1 202.530.8593',
//     email: 'caroline.abbott@lawfirm.com',
//     location: 'Washington, D.C.',
//     category: 'Corporate',
//     rating: 5,
//     hourlyRate: 350,
//     image: '/assets/images/attorney1.png',
//     bio: ["Caroline K. Abbott focuses her practice on corporate matters, including mergers and acquisitions.", "She has experience representing public and private companies."],
//     education: ["J.D., Harvard Law School", "B.A., Yale University"],
//     admissions: ["New York", "Washington, D.C."]
//   },
//   {
//     id: 2,
//     name: 'Jacob M. Abdo',
//     role: 'Associate',
//     phone: '1 612.259.9681',
//     email: 'jake.abdo@lawfirm.com',
//     location: 'Minneapolis',
//     category: 'Intellectual Property',
//     rating: 4,
//     hourlyRate: 280,
//     image: '/assets/images/attorney2.png',
//     bio: ["Jacob M. Abdo advises clients on intellectual property matters.", "He assists clients in protecting their intellectual property assets."],
//     education: ["J.D., Yale University", "B.S., University of Minnesota"],
//     admissions: ["Minnesota"]
//   },
//   {
//     id: 3,
//     name: 'Darren J. Abernethy',
//     role: 'Shareholder',
//     phone: '1 415.655.1261',
//     email: 'abernethyd@lawfirm.com',
//     location: 'San Francisco',
//     category: 'Data Privacy',
//     rating: 5,
//     hourlyRate: 700,
//     image: '/assets/images/attorney3.png',
//     bio: ["Darren J. Abernethy focuses on data privacy and cybersecurity.", "He advises on GDPR, CCPA, and other data protection laws."],
//     education: ["J.D., Stanford Law", "B.A., UCLA"],
//     admissions: ["California"]
//   },
//   {
//     id: 4,
//     name: 'Charles J. Abrams',
//     role: 'Shareholder',
//     phone: '1 561.650.7984',
//     email: 'abramsc@lawfirm.com',
//     location: 'West Palm Beach',
//     category: 'Real Estate',
//     rating: 3,
//     hourlyRate: 450,
//     image: '/assets/images/attorney4.png',
//     bio: ["Charles J. Abrams has extensive experience in commercial real estate transactions.", "He represents developers, investors, and lenders."],
//     education: ["J.D., University of Florida", "B.A., University of Miami"],
//     admissions: ["Florida"]
//   },
//   {
//     id: 5,
//     name: 'Ejim Peter Achi',
//     role: 'Partner',
//     phone: '1 212.801.6963',
//     email: 'achie@lawfirm.com',
//     location: 'New York',
//     category: 'Corporate',
//     rating: 5,
//     hourlyRate: 900,
//      image: '/assets/images/attorney5.png',
//     bio: ["Ejim Peter Achi represents private equity sponsors and their portfolio companies.", "His practice focuses on leveraged buyouts and growth equity."],
//     education: ["J.D., Columbia Law School", "B.A., University of Pennsylvania"],
//     admissions: ["New York"]
//   },
//   {
//     id: 6,
//     name: 'Ashia D. Adams',
//     role: 'Senior Associate',
//     phone: '+44 203 349 8800',
//     email: 'ashia.adams@lawfirm.com',
//     location: 'London',
//     category: 'Real Estate',
//     rating: 4,
//     hourlyRate: 550,
//     image: '/assets/images/attorney6.png',
//     bio: ["Ashia D. Adams is a member of the Real Estate Practice in London.", "She handles complex cross-border transactions."],
//     education: ["LLB, Oxford University", "LPC, BPP Law School"],
//     admissions: ["England & Wales"]
//   },
//   {
//     id: 7,
//     name: 'Bianca Z. Bailey',
//     role: 'Associate',
//     phone: '1 310.555.0192',
//     email: 'bianca.b@lawfirm.com',
//     location: 'Los Angeles',
//     category: 'Litigation',
//     rating: 5,
//     hourlyRate: 400,
//     image: '/assets/images/attorney7.png',
//     bio: ["Bianca specializes in commercial litigation and dispute resolution.", "She has a strong track record in mediation."],
//     education: ["J.D., UCLA Law", "B.A., USC"],
//     admissions: ["California", "Nevada"]
//   }
// ];

// export default function AttorneysPage() {

//   // --- THEME ---
//   const theme = {
//     primaryBlue: '#002855',
//     accentGold: '#de9f57',
//     white: '#ffffff',
//     lightGray: '#f8f9fa',
//   };

//   // --- STATE ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedLetter, setSelectedLetter] = useState('All');
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   // Filters State
//   const [filters, setFilters] = useState({
//     category: 'All',
//     location: 'All',
//     rating: 'All',
//     price: 'All'
//   });

//   // --- DYNAMIC DATA EXTRACTION ---
//   const categories = ['All', ...new Set(attorneysData.map(a => a.category))].sort();
//   const locations = ['All', ...new Set(attorneysData.map(a => a.location))].sort();
//   const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//   // --- MAIN FILTER LOGIC ---
//   const filteredData = useMemo(() => {
//     return attorneysData.filter(attorney => {

//       // 1. Search Logic
//       if (searchTerm && !attorney.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;

//       // 2. Alphabet Filter
//       if (selectedLetter !== 'All' && !attorney.name.startsWith(selectedLetter)) return false;

//       // 3. Category Filter
//       if (filters.category !== 'All' && attorney.category !== filters.category) return false;

//       // 4. Location Filter
//       if (filters.location !== 'All' && attorney.location !== filters.location) return false;

//       // 5. Rating Filter
//       if (filters.rating !== 'All') {
//         if (attorney.rating < parseInt(filters.rating)) return false;
//       }

//       // 6. Price Filter
//       if (filters.price !== 'All') {
//         if (filters.price === 'low' && attorney.hourlyRate > 300) return false;
//         if (filters.price === 'mid' && (attorney.hourlyRate <= 300 || attorney.hourlyRate > 600)) return false;
//         if (filters.price === 'high' && attorney.hourlyRate <= 600) return false;
//       }

//       return true;
//     }).sort((a, b) => a.name.localeCompare(b.name));
//   }, [searchTerm, selectedLetter, filters]);

//   // Handlers
//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({ ...prev, [key]: value }));
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//     setSelectedLetter('All');
//     setFilters({ category: 'All', location: 'All', rating: 'All', price: 'All' });
//   };

//   return (
//     <>
//       <Head>
//         <title>Professionals List | Core Law</title>
//       </Head>

//       {/* HERO */}
//       <div style={{ backgroundColor: theme.primaryBlue, padding: '80px 0 50px 0', color: theme.white }}>
//         <div className="container text-center text-lg-start">
//           <h5 className="text-uppercase fw-bold mb-2" style={{ color: theme.accentGold, letterSpacing: '2px' }}>
//             Our Team
//           </h5>
//           <h1 className="display-4 fw-bold font-serif">Find a Professional</h1>
//           <p className="lead opacity-75">Filter by expertise, location, rating or hourly rate.</p>
//         </div>
//       </div>

//       <div className="py-5" style={{ backgroundColor: theme.lightGray }}>
//         <div className="container">
//           <div className="row">

//             {/* MOBILE FILTER TOGGLE */}
//             <div className="col-12 d-lg-none mb-3">
//               <button
//                 className="btn btn-primary w-100 d-flex justify-content-between align-items-center"
//                 style={{ backgroundColor: theme.primaryBlue, borderColor: theme.primaryBlue }}
//                 onClick={() => setShowMobileFilters(!showMobileFilters)}
//               >
//                 <span><i className="bi bi-funnel-fill me-2"></i>Filter Results</span>
//                 <i className={`bi bi-chevron-${showMobileFilters ? 'up' : 'down'}`}></i>
//               </button>
//             </div>

//             {/* --- FILTERS SIDEBAR --- */}
//             <div className={`col-lg-3 mb-5 pe-lg-4 ${showMobileFilters ? 'd-block' : 'd-none d-lg-block'}`}>
//               <div className="bg-white p-4 shadow-sm rounded border">

//                 {/* Search */}
//                 <div className="mb-4">
//                   <label className="fw-bold small text-muted mb-2">SEARCH NAME</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="e.g. Caroline"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>

//                 <hr className="text-muted opacity-25" />

//                 {/* Filter: Category */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2">CATEGORY</label>
//                   <select
//                     className="form-select form-select-sm"
//                     value={filters.category}
//                     onChange={(e) => handleFilterChange('category', e.target.value)}
//                   >
//                     {categories.map(c => <option key={c} value={c}>{c}</option>)}
//                   </select>
//                 </div>

//                 {/* Filter: Location */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2">LOCATION</label>
//                   <select
//                     className="form-select form-select-sm"
//                     value={filters.location}
//                     onChange={(e) => handleFilterChange('location', e.target.value)}
//                   >
//                     {locations.map(l => <option key={l} value={l}>{l}</option>)}
//                   </select>
//                 </div>

//                 {/* Filter: Price */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2">HOURLY RATE</label>
//                   <select
//                     className="form-select form-select-sm"
//                     value={filters.price}
//                     onChange={(e) => handleFilterChange('price', e.target.value)}
//                   >
//                     <option value="All">Any Price</option>
//                     <option value="low">Economy (&lt; $300)</option>
//                     <option value="mid">Standard ($300 - $600)</option>
//                     <option value="high">Premium (&gt; $600)</option>
//                   </select>
//                 </div>

//                 {/* Filter: Rating */}
//                 <div className="mb-4">
//                   <label className="fw-bold small text-muted mb-2">RATING</label>
//                   <div className="d-flex flex-column gap-2">
//                     <div className="form-check">
//                       <input className="form-check-input" type="radio" name="rating" id="r_all" checked={filters.rating === 'All'} onChange={() => handleFilterChange('rating', 'All')} />
//                       <label className="form-check-label small" htmlFor="r_all">All</label>
//                     </div>
//                     {[5, 4, 3].map((r) => (
//                       <div key={r} className="form-check">
//                         <input className="form-check-input" type="radio" name="rating" id={`r_${r}`} checked={filters.rating === String(r)} onChange={() => handleFilterChange('rating', String(r))} />
//                         <label className="form-check-label small" htmlFor={`r_${r}`}>
//                           <span className="text-warning">
//                             {[...Array(r)].map((_,i) => <i key={i} className="bi bi-star-fill"></i>)}
//                           </span> & Up
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button onClick={handleReset} className="btn btn-outline-danger w-100 btn-sm">
//                   <i className="bi bi-x-circle me-1"></i> Clear Filters
//                 </button>
//               </div>
//             </div>

//             {/* --- RESULTS LIST --- */}
//             <div className="col-lg-9">

//               {/* ALPHABET SCROLLER */}
//               <div className="bg-white p-3 shadow-sm rounded border mb-4">
//                 <div className="d-flex gap-2 overflow-auto alphabet-scroll">
//                    <span onClick={() => setSelectedLetter('All')} className={`alphabet-item ${selectedLetter === 'All' ? 'active' : ''}`}>All</span>
//                    {alphabet.map((letter) => (
//                       <span key={letter} onClick={() => setSelectedLetter(letter)} className={`alphabet-item ${selectedLetter === letter ? 'active' : ''}`}>
//                         {letter}
//                       </span>
//                    ))}
//                 </div>
//               </div>

//               {/* LIST ITEMS */}
//               <div className="row">
//                 {filteredData.length > 0 ? (
//                   filteredData.map((attorney) => (
//                     <div key={attorney.id} className="col-12 mb-3">
//                       <div className="card border-0 shadow-sm attorney-card overflow-hidden">
//                         <div className="row g-0">

//                           {/* Image */}
//                           <div className="col-md-3 col-sm-4 bg-light text-center position-relative">
//                             <Link href={`/attorneys/${attorney.id}`}>
//                               <a className="d-block h-100">
//                                 <img
//                                   src={attorney.image}
//                                   alt={attorney.name}
//                                   className="img-fluid h-100 w-100"
//                                   style={{ objectFit: 'cover', minHeight: '180px' }}
//                                 />
//                               </a>
//                             </Link>
//                           </div>

//                           {/* Content */}
//                           <div className="col-md-9 col-sm-8 p-3 p-md-4 d-flex flex-column justify-content-center">
//                             <div className="d-flex justify-content-between align-items-start mb-2">
//                               <div>
//                                 <h4 className="card-title fw-bold mb-0">
//                                   <Link href={`/attorneys/${attorney.id}`}>
//                                     <a className="text-decoration-none text-dark hover-gold">
//                                       {attorney.name}
//                                     </a>
//                                   </Link>
//                                 </h4>
//                                 <span className="badge bg-light text-secondary border mt-1">
//                                   {attorney.role}
//                                 </span>
//                               </div>
//                               <div className="text-end d-none d-sm-block">
//                                 <div className="text-warning small">
//                                   {[...Array(5)].map((_, i) => (
//                                     <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
//                                   ))}
//                                 </div>
//                                 <div className="fw-bold text-success mt-1">
//                                   ${attorney.hourlyRate}/hr
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="row text-muted small mt-2 gy-2">
//                               <div className="col-md-6">
//                                 <i className="bi bi-geo-alt-fill me-2 text-gold"></i>{attorney.location}
//                               </div>
//                               <div className="col-md-6">
//                                 <i className="bi bi-briefcase-fill me-2 text-gold"></i>{attorney.category}
//                               </div>
//                               <div className="col-md-6">
//                                 <i className="bi bi-telephone-fill me-2 text-gold"></i>{attorney.phone}
//                               </div>
//                             </div>

//                             {/* Mobile Price Display */}
//                             <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top d-sm-none">
//                                <div className="text-warning small">
//                                   {[...Array(attorney.rating)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
//                                </div>
//                                <span className="fw-bold text-success">${attorney.hourlyRate}/hr</span>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="col-12">
//                     <div className="alert alert-light text-center border py-5">
//                       <i className="bi bi-search display-6 text-muted mb-3"></i>
//                       <h5>No professionals found matching your criteria.</h5>
//                       <button onClick={handleReset} className="btn btn-link">Reset All Filters</button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .text-gold { color: ${theme.accentGold}; }
//         .alphabet-scroll::-webkit-scrollbar { height: 4px; }
//         .alphabet-scroll::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }

//         .alphabet-item {
//           min-width: 35px; height: 35px;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; font-weight: bold; color: ${theme.primaryBlue};
//           border-radius: 4px; transition: 0.2s; font-size: 14px;
//         }
//         .alphabet-item:hover, .alphabet-item.active { background-color: ${theme.primaryBlue}; color: white; }

//         .hover-gold:hover { color: ${theme.accentGold} !important; transition: color 0.2s; }
//         .attorney-card { transition: transform 0.2s, box-shadow 0.2s; }
//         .attorney-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1)!important; }
//       `}</style>
//     </>
//   );
// }

// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';

// export const attorneysData = [
//   {
//     id: 1,
//     name: 'Caroline K. Abbott',
//     role: 'Senior Associate',
//     phone: '1 202.530.8593',
//     email: 'caroline.abbott@lawfirm.com',
//     location: 'Washington, D.C.',
//     category: 'Corporate',
//     rating: 5,
//     hourlyRate: 350,
//     image: '/assets/images/attorney1.png',
//     bio: ["Caroline K. Abbott focuses her practice on corporate matters, including mergers and acquisitions.", "She has experience representing public and private companies."],
//     education: ["J.D., Harvard Law School", "B.A., Yale University"],
//     admissions: ["New York", "Washington, D.C."]
//   },
//   {
//     id: 2,
//     name: 'Jacob M. Abdo',
//     role: 'Associate',
//     phone: '1 612.259.9681',
//     email: 'jake.abdo@lawfirm.com',
//     location: 'Minneapolis',
//     category: 'Intellectual Property',
//     rating: 4,
//     hourlyRate: 280,
//     image: '/assets/images/attorney2.png',
//     bio: ["Jacob M. Abdo advises clients on intellectual property matters.", "He assists clients in protecting their intellectual property assets."],
//     education: ["J.D., Yale University", "B.S., University of Minnesota"],
//     admissions: ["Minnesota"]
//   },
//   {
//     id: 3,
//     name: 'Darren J. Abernethy',
//     role: 'Shareholder',
//     phone: '1 415.655.1261',
//     email: 'abernethyd@lawfirm.com',
//     location: 'San Francisco',
//     category: 'Data Privacy',
//     rating: 5,
//     hourlyRate: 700,
//     image: '/assets/images/attorney3.png',
//     bio: ["Darren J. Abernethy focuses on data privacy and cybersecurity.", "He advises on GDPR, CCPA, and other data protection laws."],
//     education: ["J.D., Stanford Law", "B.A., UCLA"],
//     admissions: ["California"]
//   },
//   {
//     id: 4,
//     name: 'Charles J. Abrams',
//     role: 'Shareholder',
//     phone: '1 561.650.7984',
//     email: 'abramsc@lawfirm.com',
//     location: 'West Palm Beach',
//     category: 'Real Estate',
//     rating: 3,
//     hourlyRate: 450,
//     image: '/assets/images/attorney4.png',
//     bio: ["Charles J. Abrams has extensive experience in commercial real estate transactions.", "He represents developers, investors, and lenders."],
//     education: ["J.D., University of Florida", "B.A., University of Miami"],
//     admissions: ["Florida"]
//   },
//   {
//     id: 5,
//     name: 'Ejim Peter Achi',
//     role: 'Partner',
//     phone: '1 212.801.6963',
//     email: 'achie@lawfirm.com',
//     location: 'New York',
//     category: 'Corporate',
//     rating: 5,
//     hourlyRate: 900,
//      image: '/assets/images/attorney5.png',
//     bio: ["Ejim Peter Achi represents private equity sponsors and their portfolio companies.", "His practice focuses on leveraged buyouts and growth equity."],
//     education: ["J.D., Columbia Law School", "B.A., University of Pennsylvania"],
//     admissions: ["New York"]
//   },
//   {
//     id: 6,
//     name: 'Ashia D. Adams',
//     role: 'Senior Associate',
//     phone: '+44 203 349 8800',
//     email: 'ashia.adams@lawfirm.com',
//     location: 'London',
//     category: 'Real Estate',
//     rating: 4,
//     hourlyRate: 550,
//     image: '/assets/images/attorney6.png',
//     bio: ["Ashia D. Adams is a member of the Real Estate Practice in London.", "She handles complex cross-border transactions."],
//     education: ["LLB, Oxford University", "LPC, BPP Law School"],
//     admissions: ["England & Wales"]
//   },
//   {
//     id: 7,
//     name: 'Bianca Z. Bailey',
//     role: 'Associate',
//     phone: '1 310.555.0192',
//     email: 'bianca.b@lawfirm.com',
//     location: 'Los Angeles',
//     category: 'Litigation',
//     rating: 5,
//     hourlyRate: 400,
//     image: '/assets/images/attorney7.png',
//     bio: ["Bianca specializes in commercial litigation and dispute resolution.", "She has a strong track record in mediation."],
//     education: ["J.D., UCLA Law", "B.A., USC"],
//     admissions: ["California", "Nevada"]
//   }
// ];

// export default function AttorneysPage() {

//   // --- STATE ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedLetter, setSelectedLetter] = useState('All');
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   // Filters State
//   const [filters, setFilters] = useState({
//     category: 'All',
//     location: 'All',
//     rating: 'All',
//     price: 'All'
//   });

//   // --- DYNAMIC DATA EXTRACTION ---
//   const categories = ['All', ...new Set(attorneysData.map(a => a.category))].sort();
//   const locations = ['All', ...new Set(attorneysData.map(a => a.location))].sort();
//   const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//   // --- MAIN FILTER LOGIC ---
//   const filteredData = useMemo(() => {
//     return attorneysData.filter(attorney => {

//       // 1. Search Logic
//       if (searchTerm && !attorney.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;

//       // 2. Alphabet Filter
//       if (selectedLetter !== 'All' && !attorney.name.startsWith(selectedLetter)) return false;

//       // 3. Category Filter
//       if (filters.category !== 'All' && attorney.category !== filters.category) return false;

//       // 4. Location Filter
//       if (filters.location !== 'All' && attorney.location !== filters.location) return false;

//       // 5. Rating Filter
//       if (filters.rating !== 'All') {
//         if (attorney.rating < parseInt(filters.rating)) return false;
//       }

//       // 6. Price Filter
//       if (filters.price !== 'All') {
//         if (filters.price === 'low' && attorney.hourlyRate > 300) return false;
//         if (filters.price === 'mid' && (attorney.hourlyRate <= 300 || attorney.hourlyRate > 600)) return false;
//         if (filters.price === 'high' && attorney.hourlyRate <= 600) return false;
//       }

//       return true;
//     }).sort((a, b) => a.name.localeCompare(b.name));
//   }, [searchTerm, selectedLetter, filters]);

//   // Handlers
//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({ ...prev, [key]: value }));
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//     setSelectedLetter('All');
//     setFilters({ category: 'All', location: 'All', rating: 'All', price: 'All' });
//   };

//   return (
//     <>
//       <Head>
//         <title>Professionals List | Core Law</title>
//       </Head>

//       {/* HERO SECTION */}
//       <div className="section-hero">
//         <div className="container text-center text-lg-start">
//           <h5 className="text-uppercase fw-bold mb-2 section-subtitle">
//             Our Team
//           </h5>
//           <h1 className="display-4 fw-bold font-serif">Find a Professional</h1>
//           <p className="lead opacity-75">Filter by expertise, location, rating or hourly rate.</p>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="py-5 section-main">
//         <div className="container">
//           <div className="row">

//             {/* MOBILE FILTER TOGGLE */}
//             <div className="col-12 d-lg-none mb-3">
//               <button
//                 className="btn btn-primary w-100 d-flex justify-content-between align-items-center btn-mobile-filter"
//                 onClick={() => setShowMobileFilters(!showMobileFilters)}
//               >
//                 <span><i className="bi bi-funnel-fill me-2"></i>Filter Results</span>
//                 <i className={`bi bi-chevron-${showMobileFilters ? 'up' : 'down'}`}></i>
//               </button>
//             </div>

//             {/* --- FILTERS SIDEBAR --- */}
//             <div className={`col-lg-3 mb-5 pe-lg-4 ${showMobileFilters ? 'd-block' : 'd-none d-lg-block'}`}>
//               <div className="bg-white p-4 shadow-sm rounded border">

//                 {/* Search */}
//                 <div className="mb-4">
//                   <label className="fw-bold small text-muted mb-2">SEARCH NAME</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="e.g. Caroline"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>

//                 <hr className="text-muted opacity-25" />

//                 {/* Filter: Category */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2">CATEGORY</label>
//                   <select
//                     className="form-select form-select-sm"
//                     value={filters.category}
//                     onChange={(e) => handleFilterChange('category', e.target.value)}
//                   >
//                     {categories.map(c => <option key={c} value={c}>{c}</option>)}
//                   </select>
//                 </div>

//                 {/* Filter: Location */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2">LOCATION</label>
//                   <select
//                     className="form-select form-select-sm"
//                     value={filters.location}
//                     onChange={(e) => handleFilterChange('location', e.target.value)}
//                   >
//                     {locations.map(l => <option key={l} value={l}>{l}</option>)}
//                   </select>
//                 </div>

//                 {/* Filter: Price */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2">HOURLY RATE</label>
//                   <select
//                     className="form-select form-select-sm"
//                     value={filters.price}
//                     onChange={(e) => handleFilterChange('price', e.target.value)}
//                   >
//                     <option value="All">Any Price</option>
//                     <option value="low">Economy (&lt; $300)</option>
//                     <option value="mid">Standard ($300 - $600)</option>
//                     <option value="high">Premium (&gt; $600)</option>
//                   </select>
//                 </div>

//                 {/* Filter: Rating */}
//                 <div className="mb-4">
//                   <label className="fw-bold small text-muted mb-2">RATING</label>
//                   <div className="d-flex flex-column gap-2">
//                     <div className="form-check">
//                       <input className="form-check-input" type="radio" name="rating" id="r_all" checked={filters.rating === 'All'} onChange={() => handleFilterChange('rating', 'All')} />
//                       <label className="form-check-label small" htmlFor="r_all">All</label>
//                     </div>
//                     {[5, 4, 3].map((r) => (
//                       <div key={r} className="form-check">
//                         <input className="form-check-input" type="radio" name="rating" id={`r_${r}`} checked={filters.rating === String(r)} onChange={() => handleFilterChange('rating', String(r))} />
//                         <label className="form-check-label small" htmlFor={`r_${r}`}>
//                           <span className="text-warning">
//                             {[...Array(r)].map((_,i) => <i key={i} className="bi bi-star-fill"></i>)}
//                           </span> & Up
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button onClick={handleReset} className="btn btn-outline-danger w-100 btn-sm">
//                   <i className="bi bi-x-circle me-1"></i> Clear Filters
//                 </button>
//               </div>
//             </div>

//             {/* --- RESULTS LIST --- */}
//             <div className="col-lg-9">

//               {/* ALPHABET SCROLLER */}
//               <div className="bg-white p-3 shadow-sm rounded border mb-4">
//                 <div className="d-flex gap-2 overflow-auto alphabet-scroll">
//                    <span onClick={() => setSelectedLetter('All')} className={`alphabet-item ${selectedLetter === 'All' ? 'active' : ''}`}>All</span>
//                    {alphabet.map((letter) => (
//                       <span key={letter} onClick={() => setSelectedLetter(letter)} className={`alphabet-item ${selectedLetter === letter ? 'active' : ''}`}>
//                         {letter}
//                       </span>
//                    ))}
//                 </div>
//               </div>

//               {/* LIST ITEMS */}
//               <div className="row">
//                 {filteredData.length > 0 ? (
//                   filteredData.map((attorney) => (
//                     <div key={attorney.id} className="col-12 mb-3">
//                       <div className="card border-0 shadow-sm attorney-card overflow-hidden">
//                         <div className="row g-0">

//                           {/* Image */}
//                           <div className="col-md-3 col-sm-4 bg-light text-center position-relative">
//                             <Link href={`/attorneys/${attorney.id}`}>
//                               <a className="d-block h-100">
//                                 <img
//                                   src={attorney.image}
//                                   alt={attorney.name}
//                                   className="img-fluid h-100 w-100 attorney-img"
//                                 />
//                               </a>
//                             </Link>
//                           </div>

//                           {/* Content */}
//                           <div className="col-md-9 col-sm-8 p-3 p-md-4 d-flex flex-column justify-content-center">
//                             <div className="d-flex justify-content-between align-items-start mb-2">
//                               <div>
//                                 <h4 className="card-title fw-bold mb-0">
//                                   <Link href={`/attorneys/${attorney.id}`}>
//                                     <a className="text-decoration-none text-dark hover-gold">
//                                       {attorney.name}
//                                     </a>
//                                   </Link>
//                                 </h4>
//                                 <span className="badge bg-light text-secondary border mt-1">
//                                   {attorney.role}
//                                 </span>
//                               </div>
//                               <div className="text-end d-none d-sm-block">
//                                 <div className="text-warning small">
//                                   {[...Array(5)].map((_, i) => (
//                                     <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
//                                   ))}
//                                 </div>
//                                 <div className="fw-bold text-success mt-1">
//                                   ${attorney.hourlyRate}/hr
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="row text-muted small mt-2 gy-2">
//                               <div className="col-md-6">
//                                 <i className="bi bi-geo-alt-fill me-2 text-gold"></i>{attorney.location}
//                               </div>
//                               <div className="col-md-6">
//                                 <i className="bi bi-briefcase-fill me-2 text-gold"></i>{attorney.category}
//                               </div>
//                               <div className="col-md-6">
//                                 <i className="bi bi-telephone-fill me-2 text-gold"></i>{attorney.phone}
//                               </div>
//                             </div>

//                             {/* Mobile Price Display */}
//                             <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top d-sm-none">
//                                <div className="text-warning small">
//                                   {[...Array(attorney.rating)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
//                                </div>
//                                <span className="fw-bold text-success">${attorney.hourlyRate}/hr</span>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="col-12">
//                     <div className="alert alert-light text-center border py-5">
//                       <i className="bi bi-search display-6 text-muted mb-3"></i>
//                       <h5>No professionals found matching your criteria.</h5>
//                       <button onClick={handleReset} className="btn btn-link">Reset All Filters</button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Hero Section */
//         .section-hero {
//           background-color: #002855;
//           padding: 80px 0 50px 0;
//           color: #ffffff;
//         }

//         .section-subtitle {
//           color: #de9f57;
//           letter-spacing: 2px;
//         }

//         /* Main Content Background */
//         .section-main {
//           background-color: #f8f9fa;
//         }

//         /* Mobile Filter Button */
//         .btn-mobile-filter {
//           background-color: #002855 !important;
//           border-color: #002855 !important;
//         }

//         /* Attorney Image */
//         .attorney-img {
//           object-fit: cover;
//           min-height: 180px;
//         }

//         /* Golden Accents */
//         .text-gold {
//           color: #de9f57;
//         }

//         .hover-gold:hover {
//           color: #de9f57 !important;
//           transition: color 0.2s;
//         }

//         /* Alphabet Scroller */
//         .alphabet-scroll::-webkit-scrollbar {
//           height: 4px;
//         }
//         .alphabet-scroll::-webkit-scrollbar-thumb {
//           background: #ccc;
//           border-radius: 4px;
//         }

//         .alphabet-item {
//           min-width: 35px;
//           height: 35px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-weight: bold;
//           color: #002855;
//           border-radius: 4px;
//           transition: 0.2s;
//           font-size: 14px;
//         }
//         .alphabet-item:hover,
//         .alphabet-item.active {
//           background-color: #002855;
//           color: white;
//         }

//         /* Card Hover Effects */
//         .attorney-card {
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .attorney-card:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 20px rgba(0,0,0,0.1)!important;
//         }
//       `}</style>
//     </>
//   );
// }



// import React, { useState, useMemo } from "react";
// import Link from "next/link";
// import Head from "next/head";

// // --- DATA (Added Languages & Admissions) ---
// export const attorneysData = [
//   {
//     id: 1,
//     name: "Caroline K. Abbott",
//     role: "Senior Associate",
//     phone: "1 202.530.8593",
//     email: "caroline.abbott@lawfirm.com",
//     location: "Washington, D.C.",
//     category: "Corporate",
//     rating: 5,
//     hourlyRate: 350,
//     image: "/assets/images/attorney1.png",
//     admissions: ["New York", "Washington, D.C."],
//     languages: ["English", "French"],
//   },
//   {
//     id: 2,
//     name: "Jacob M. Abdo",
//     role: "Associate",
//     phone: "1 612.259.9681",
//     email: "jake.abdo@lawfirm.com",
//     location: "Minneapolis",
//     category: "Intellectual Property",
//     rating: 4,
//     hourlyRate: 280,
//     image: "/assets/images/attorney2.png",
//     admissions: ["Minnesota"],
//     languages: ["English"],
//   },
//   {
//     id: 3,
//     name: "Darren J. Abernethy",
//     role: "Shareholder",
//     phone: "1 415.655.1261",
//     email: "abernethyd@lawfirm.com",
//     location: "San Francisco",
//     category: "Data Privacy",
//     rating: 5,
//     hourlyRate: 700,
//     image: "/assets/images/attorney3.png",
//     admissions: ["California", "New York"],
//     languages: ["English", "Spanish"],
//   },
//   {
//     id: 4,
//     name: "Charles J. Abrams",
//     role: "Shareholder",
//     phone: "1 561.650.7984",
//     email: "abramsc@lawfirm.com",
//     location: "West Palm Beach",
//     category: "Real Estate",
//     rating: 3,
//     hourlyRate: 450,
//     image: "/assets/images/attorney4.png",
//     admissions: ["Florida"],
//     languages: ["English", "Hebrew"],
//   },
//   {
//     id: 5,
//     name: "Ejim Peter Achi",
//     role: "Partner",
//     phone: "1 212.801.6963",
//     email: "achie@lawfirm.com",
//     location: "New York",
//     category: "Corporate",
//     rating: 5,
//     hourlyRate: 900,
//     image: "/assets/images/attorney5.png",
//     admissions: ["New York", "New Jersey"],
//     languages: ["English", "Igbo"],
//   },
//   {
//     id: 6,
//     name: "Ashia D. Adams",
//     role: "Senior Associate",
//     phone: "+44 203 349 8800",
//     email: "ashia.adams@lawfirm.com",
//     location: "London",
//     category: "Real Estate",
//     rating: 4,
//     hourlyRate: 550,
//     image: "/assets/images/attorney6.png",
//     admissions: ["England & Wales"],
//     languages: ["English", "German"],
//   },
//   {
//     id: 7,
//     name: "Bianca Z. Bailey",
//     role: "Associate",
//     phone: "1 310.555.0192",
//     email: "bianca.b@lawfirm.com",
//     location: "Los Angeles",
//     category: "Litigation",
//     rating: 5,
//     hourlyRate: 400,
//     image: "/assets/images/attorney7.png",
//     admissions: ["California", "Nevada"],
//     languages: ["English", "Spanish", "Italian"],
//   },
// ];

// export default function AttorneysPage() {
//   // --- STATE ---
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLetter, setSelectedLetter] = useState("All");
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   // Updated Filters State
//   const [filters, setFilters] = useState({
//     category: "All",
//     location: "All",
//     rating: "All",
//     price: "All",
//     admissions: "All", // New
//     language: "All", // New
//   });

//   // --- LOGIC ---
//   // Extract Unique Values
//   const categories = [
//     "All",
//     ...new Set(attorneysData.map((a) => a.category)),
//   ].sort();
//   const locations = [
//     "All",
//     ...new Set(attorneysData.map((a) => a.location)),
//   ].sort();

//   // Extract Unique Admissions (Flatten array first)
//   const uniqueAdmissions = [
//     "All",
//     ...new Set(attorneysData.flatMap((a) => a.admissions || [])),
//   ].sort();

//   // Extract Unique Languages (Flatten array first)
//   const uniqueLanguages = [
//     "All",
//     ...new Set(attorneysData.flatMap((a) => a.languages || [])),
//   ].sort();

//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   // --- FILTER LOGIC ---
//   const filteredData = useMemo(() => {
//     return attorneysData
//       .filter((attorney) => {
//         // 1. Search
//         if (
//           searchTerm &&
//           !attorney.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//           return false;

//         // 2. Letter
//         if (
//           selectedLetter !== "All" &&
//           !attorney.name.startsWith(selectedLetter)
//         )
//           return false;

//         // 3. Category
//         if (
//           filters.category !== "All" &&
//           attorney.category !== filters.category
//         )
//           return false;

//         // 4. Location
//         if (
//           filters.location !== "All" &&
//           attorney.location !== filters.location
//         )
//           return false;

//         // 5. Admissions (Check if array includes selected value)
//         if (
//           filters.admissions !== "All" &&
//           !attorney.admissions?.includes(filters.admissions)
//         )
//           return false;

//         // 6. Language (Check if array includes selected value)
//         if (
//           filters.language !== "All" &&
//           !attorney.languages?.includes(filters.language)
//         )
//           return false;

//         // 7. Rating
//         if (
//           filters.rating !== "All" &&
//           attorney.rating < parseInt(filters.rating)
//         )
//           return false;

//         // 8. Price
//         if (filters.price !== "All") {
//           if (filters.price === "low" && attorney.hourlyRate > 300)
//             return false;
//           if (
//             filters.price === "mid" &&
//             (attorney.hourlyRate <= 300 || attorney.hourlyRate > 600)
//           )
//             return false;
//           if (filters.price === "high" && attorney.hourlyRate <= 600)
//             return false;
//         }
//         return true;
//       })
//       .sort((a, b) => a.name.localeCompare(b.name));
//   }, [searchTerm, selectedLetter, filters]);

//   const handleFilterChange = (key, value) =>
//     setFilters((prev) => ({ ...prev, [key]: value }));

//   const handleReset = () => {
//     setSearchTerm("");
//     setSelectedLetter("All");
//     setFilters({
//       category: "All",
//       location: "All",
//       rating: "All",
//       price: "All",
//       admissions: "All",
//       language: "All",
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Professionals List | Core Law</title>
//       </Head>

//       {/* HERO SECTION */}
//       <div className="section-hero">
//         <div className="container text-center text-lg-start">
//           <h5 className="text-uppercase fw-bold mb-2 section-subtitle">
//             Our Team
//           </h5>
//           <h1 className="display-4 fw-bold font-serif">Find a Professional</h1>
//           <p className="lead opacity-75">
//             Expert legal representation across the globe.
//           </p>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="py-5 section-main">
//         <div className="container">
//           <div className="row">
//             {/* MOBILE FILTER BUTTON */}
//             <div className="col-12 d-lg-none mb-3">
//               <button
//                 className="btn btn-navy w-100 d-flex justify-content-between align-items-center"
//                 onClick={() => setShowMobileFilters(!showMobileFilters)}
//               >
//                 <span>
//                   <i className="bi bi-funnel-fill me-2"></i>Filter Results
//                 </span>
//                 <i
//                   className={`bi bi-chevron-${
//                     showMobileFilters ? "up" : "down"
//                   }`}
//                 ></i>
//               </button>
//             </div>

//             {/* --- SIDEBAR (FILTERS) --- */}
//             <div
//               className={`col-lg-3 mb-5 pe-lg-4 ${
//                 showMobileFilters ? "d-block" : "d-none d-lg-block"
//               }`}
//             >
//               <div className="bg-white p-4 shadow-sm rounded-3 border-0">
//                 {/* Search */}
//                 <div className="mb-4">
//                   <label className="fw-bold small text-muted mb-2 ls-1">
//                     SEARCH NAME
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light border-0"
//                     placeholder="e.g. Caroline"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>

//                 <hr className="text-muted opacity-25 my-4" />

//                 {/* --- EXISTING FILTERS --- */}

//                 {/* Category */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">
//                     Practise Area
//                   </label>
//                   <select
//                     className="form-select border-0 bg-light"
//                     value={filters.category}
//                     onChange={(e) =>
//                       handleFilterChange("category", e.target.value)
//                     }
//                   >
//                     {categories.map((x) => (
//                       <option key={x} value={x}>
//                         {x}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Location */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">
//                     Location
//                   </label>
//                   <select
//                     className="form-select border-0 bg-light"
//                     value={filters.location}
//                     onChange={(e) =>
//                       handleFilterChange("location", e.target.value)
//                     }
//                   >
//                     {locations.map((x) => (
//                       <option key={x} value={x}>
//                         {x}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* --- NEW FILTERS --- */}

//                 {/* Admissions Filter */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">
//                     Admissions
//                   </label>
//                   <select
//                     className="form-select border-0 bg-light"
//                     value={filters.admissions}
//                     onChange={(e) =>
//                       handleFilterChange("admissions", e.target.value)
//                     }
//                   >
//                     {uniqueAdmissions.map((x) => (
//                       <option key={x} value={x}>
//                         {x}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Language Filter */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">
//                     Language
//                   </label>
//                   <select
//                     className="form-select border-0 bg-light"
//                     value={filters.language}
//                     onChange={(e) =>
//                       handleFilterChange("language", e.target.value)
//                     }
//                   >
//                     {uniqueLanguages.map((x) => (
//                       <option key={x} value={x}>
//                         {x}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-3">
//                   <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">
//                     Hourly Rate
//                   </label>
//                   <select
//                     className="form-select border-0 bg-light"
//                     value={filters.price}
//                     onChange={(e) =>
//                       handleFilterChange("price", e.target.value)
//                     }
//                   >
//                     <option value="All">Any</option>
//                     <option value="low">Economy (&lt;$300)</option>
//                     <option value="mid">Standard</option>
//                     <option value="high">Premium (&gt;$600)</option>
//                   </select>
//                 </div>

//                 <button
//                   onClick={handleReset}
//                   className="btn btn-outline-danger w-100 mt-3"
//                 >
//                   Reset Filters
//                 </button>
//               </div>
//             </div>

//             {/* --- RESULTS LIST --- */}
//             <div className="col-lg-9">
//               {/* ALPHABET SCROLLER */}
//               <div className="bg-white p-3 shadow-sm rounded-3 border-0 mb-4 d-flex gap-2 overflow-auto alphabet-scroll">
//                 <span
//                   onClick={() => setSelectedLetter("All")}
//                   className={`alphabet-item ${
//                     selectedLetter === "All" ? "active" : ""
//                   }`}
//                 >
//                   All
//                 </span>
//                 {alphabet.map((l) => (
//                   <span
//                     key={l}
//                     onClick={() => setSelectedLetter(l)}
//                     className={`alphabet-item ${
//                       selectedLetter === l ? "active" : ""
//                     }`}
//                   >
//                     {l}
//                   </span>
//                 ))}
//               </div>

//               {/* LIST ITEMS */}
//               <div className="d-flex flex-column gap-3">
//                 {filteredData.length > 0 ? (
//                   filteredData.map((attorney) => (
//                     <div
//                       key={attorney.id}
//                       className="card border-0 shadow-sm rounded-3 p-4 hover-card"
//                     >
//                       <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
//                         {/* 1. SQUARE IMAGE */}
//                         <div className="flex-shrink-0 mb-3 mb-md-0 me-md-4 text-center">
//                           <Link href={`/attorneys/${attorney.id}`}>
//                             <a>
//                               <img
//                                 src={attorney.image}
//                                 alt={attorney.name}
//                                 className="shadow-sm rounded"
//                                 style={{
//                                   width: "130px",
//                                   height: "150px",
//                                   objectFit: "cover",
//                                   objectPosition: "top center",
//                                 }}
//                               />
//                             </a>
//                           </Link>
//                           <div className="mt-2 text-warning small">
//                             {[...Array(5)].map((_, i) => (
//                               <i
//                                 key={i}
//                                 className={`bi bi-star${
//                                   i < attorney.rating ? "-fill" : ""
//                                 }`}
//                               ></i>
//                             ))}
//                           </div>
//                         </div>

//                         {/* 2. TEXT CONTENT */}
//                         <div className="flex-grow-1 text-center text-md-start w-100">
//                           <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
//                             <div>
//                               {/* CODE LINE NUMBER: Approx 300 */}

//                               <h3 className="fw-bold text-navy mb-1 hover-gold fs-2">
//                                 <Link href={`/attorneys/${attorney.id}`}>
//                                   <a className="text-decoration-none text-navy">
//                                     {attorney.name}
//                                   </a>
//                                 </Link>
//                               </h3>
//                               <div className="text-gold fw-bold text-uppercase ls-1 small mb-2 mb-md-0">
//                                 {attorney.role}
//                               </div>
//                             </div>
//                             <div className="d-none d-md-block text-end">
//                               <span className="fs-5 fw-bold text-success">
//                                 ${attorney.hourlyRate}
//                                 <span className="fs-6 text-muted fw-normal">
//                                   /hr
//                                 </span>
//                               </span>
//                             </div>
//                           </div>

//                           <hr className="opacity-10 my-2" />

//                           {/* DETAILS GRID */}
//                           {/* DETAILS GRID - MOBILE RESPONSIVE FIX */}
//                           <div className="row mt-3 gy-2 text-dark">
//                             {/* Location */}
//                             <div className="col-12 col-md-6 d-flex align-items-start">
//                               <div
//                                 className="text-gold fs-5 me-2"
//                                 style={{ width: "24px", textAlign: "center" }}
//                               >
//                                 <i className="bi bi-geo-alt-fill"></i>
//                               </div>
//                               <span className="fs-6 align-self-center">
//                                 {attorney.location}
//                               </span>
//                             </div>

//                             {/* Category */}
//                             <div className="col-12 col-md-6 d-flex align-items-start">
//                               <div
//                                 className="text-gold fs-5 me-2"
//                                 style={{ width: "24px", textAlign: "center" }}
//                               >
//                                 <i className="bi bi-briefcase-fill"></i>
//                               </div>
//                               <span className="fs-6 align-self-center">
//                                 {attorney.category}
//                               </span>
//                             </div>

//                             {/* Phone */}
//                             <div className="col-12 col-md-6 d-flex align-items-start">
//                               <div
//                                 className="text-gold fs-5 me-2"
//                                 style={{ width: "24px", textAlign: "center" }}
//                               >
//                                 <i className="bi bi-telephone-fill"></i>
//                               </div>
//                               <span className="fs-6 align-self-center">
//                                 {attorney.phone}
//                               </span>
//                             </div>

//                             {/* Languages */}
//                             <div className="col-12 col-md-6 d-flex align-items-start">
//                               <div
//                                 className="text-gold fs-5 me-2"
//                                 style={{ width: "24px", textAlign: "center" }}
//                               >
//                                 <i className="bi bi-translate"></i>
//                               </div>
//                               <span className="fs-6 align-self-center text-truncate">
//                                 {attorney.languages?.join(", ")}
//                               </span>
//                             </div>

//                             {/* Email - Special Handling for Long Emails */}
//                             <div className="col-12 col-md-6 d-flex align-items-start">
//                               <div
//                                 className="text-gold fs-5 me-2"
//                                 style={{ width: "24px", textAlign: "center" }}
//                               >
//                                 <i className="bi bi-envelope-fill"></i>
//                               </div>
//                               {/* text-break lagaya taki email bahar na nikle */}
//                               <span className="fs-6 align-self-center text-break">
//                                 {attorney.email}
//                               </span>
//                             </div>
//                           </div>

//                           {/* Mobile Price */}
//                           <div className="d-md-none mt-3 pt-2 border-top">
//                             <span className="fw-bold text-success fs-5">
//                               ${attorney.hourlyRate}/hr
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="alert alert-light text-center border py-5">
//                     <h4>No matches found.</h4>
//                     <button
//                       onClick={handleReset}
//                       className="btn btn-link text-gold"
//                     >
//                       Clear Filters
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* COLORS */
//         .text-navy {
//           color: #002855;
//         }
//         .bg-navy {
//           background-color: #002855;
//         }
//         .text-gold {
//           color: #de9f57;
//         }
//         .btn-navy {
//           background-color: #002855;
//           color: white;
//         }

//         .ls-1 {
//           letter-spacing: 1px;
//         }

//         .section-hero {
//           background-color: #002855;
//           padding: 80px 0 50px 0;
//           color: #ffffff;
//         }

//         .section-main {
//           background-color: #f4f6f8;
//         }

//         /* HOVER EFFECTS */
//         .hover-card {
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//         }
//         .hover-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 10px 25px rgba(0, 40, 85, 0.08) !important;
//         }

//         a.text-navy:hover {
//           color: #de9f57 !important;
//           transition: 0.2s;
//         }

//         /* ALPHABET */
//         .alphabet-scroll::-webkit-scrollbar {
//           height: 4px;
//         }
//         .alphabet-scroll::-webkit-scrollbar-thumb {
//           background: #ccc;
//           border-radius: 4px;
//         }

//         .alphabet-item {
//           min-width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-weight: bold;
//           color: #002855;
//           border-radius: 50%;
//           background: #f8f9fa;
//           transition: 0.2s;
//         }
//         .alphabet-item:hover,
//         .alphabet-item.active {
//           background-color: #002855;
//           color: #de9f57;
//         }
//       `}</style>
//     </>
//   );
// }
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Head from "next/head";

// --- PREMIUM REALISTIC DATA ---
export const attorneysData = [
  {
    id: 1,
    name: "Caroline K. Abbott",
    role: "Senior Partner",
    phone: "+1 202.530.8593",
    email: "caroline.abbott@corelaw.com",
    location: "Washington, D.C.",
    category: "Corporate",
    rating: 5,
    hourlyRate: 850,
    image: "/assets/images/attorney1.png",
    languages: ["English", "French"],
    admissions: ["New York", "Washington, D.C.", "Supreme Court of the U.S."],
    education: [
        "J.D., Harvard Law School, magna cum laude (2010)", 
        "B.A., Yale University, with distinction (2007)"
    ],
    awards: [
        "Chambers USA: Top Ranked in Corporate M&A (2022-2024)",
        "The Legal 500: Leading Lawyer",
        "Dealmaker of the Year, American Lawyer"
    ],
    bio: [
        "Caroline K. Abbott is a preeminent corporate lawyer with over 15 years of experience advising Fortune 500 companies, private equity firms, and investment banks on their most complex and high-stakes transactions. Her practice encompasses domestic and cross-border mergers and acquisitions, hostile takeovers, shareholder activism defense, and corporate governance matters.",
        "Recognized as a strategic advisor who 'sees around corners,' Caroline has led deal teams in transactions totaling over $50 billion in value across the technology, healthcare, and energy sectors. Her deep understanding of regulatory frameworks allows her to navigate antitrust hurdles and foreign investment reviews seamlessly.",
        "Prior to joining Core Law, Caroline served as a judicial law clerk for the Honorable Justice Elena Kagan at the Supreme Court of the United States. She is a frequent speaker at international legal forums and serves on the board of the Global Women in Law Initiative."
    ],
    experience: [
        "Advised a leading Tech Giant in its $12.5 billion acquisition of an AI semiconductor startup, navigating complex antitrust scrutiny in the U.S. and E.U.",
        "Represented a global pharmaceutical company in a $4 billion cross-border merger with a Swiss biotech firm.",
        "Guided a renewable energy consortium through its $800 million Initial Public Offering (IPO) on the NASDAQ.",
        "Successfully defended a Fortune 100 board of directors against a hostile takeover bid by an activist hedge fund."
    ]
  },
  {
    id: 2,
    name: "Jacob M. Abdo",
    role: "Partner",
    phone: "+1 612.259.9681",
    email: "jake.abdo@corelaw.com",
    location: "Minneapolis",
    category: "Intellectual Property",
    rating: 5,
    hourlyRate: 650,
    image: "/assets/images/attorney2.png",
    admissions: ["Minnesota", "California", "USPTO"],
    languages: ["English"],
    education: [
        "J.D., Stanford Law School (2012)", 
        "M.S., Electrical Engineering, MIT (2009)"
    ],
    awards: ["IP Star, Managing IP Magazine", "Top 40 Under 40, Daily Journal"],
    bio: [
        "Jacob M. Abdo is a leading intellectual property litigator known for his ability to explain complex technical concepts to juries and judges. With a background in electrical engineering from MIT, Jacob specializes in high-stakes patent litigation involving semiconductors, software, and telecommunications technologies.",
        "He has successfully represented clients in federal district courts across the country, the U.S. Court of Appeals for the Federal Circuit, and the International Trade Commission (ITC). Beyond litigation, Jacob advises technology companies on IP portfolio strategy, licensing agreements, and risk management.",
        "Jacob is also dedicated to pro bono work, regularly representing inventors from underrepresented communities in securing patent protection for their innovations."
    ],
    experience: [
        "Secured a $120 million jury verdict for a software client in a patent infringement suit against a major competitor.",
        "Successfully defended a smartphone manufacturer in an ITC investigation, resulting in a finding of no violation.",
        "Negotiated a global cross-licensing agreement between two telecommunications giants, resolving multi-jurisdictional litigation.",
        " invalidated a key competitor's patent through Inter Partes Review (IPR) proceedings at the USPTO."
    ]
  },
  {
    id: 3,
    name: "Darren J. Abernethy",
    role: "Shareholder",
    phone: "+1 415.655.1261",
    email: "darren.a@corelaw.com",
    location: "San Francisco",
    category: "Data Privacy",
    rating: 5,
    hourlyRate: 725,
    image: "/assets/images/attorney3.png",
    admissions: ["California", "New York", "IAPP Certified"],
    languages: ["English", "Spanish"],
    education: ["J.D., UC Berkeley School of Law", "B.A., UCLA"],
    awards: ["Cybersecurity Lawyer of the Year (2023)", "Legal 500: Next Generation Partner"],
    bio: [
        "Darren J. Abernethy is a recognized authority on data privacy, cybersecurity, and digital assets. He advises global technology companies, financial institutions, and retailers on compliance with the GDPR, CCPA, and emerging AI regulations.",
        "Darren helps clients navigate data breach response, regulatory investigations, and privacy-by-design product development. He has served as lead counsel for companies facing investigations by the FTC and European data protection authorities.",
        "A prolific writer, Darren's articles on AI ethics and biometric data privacy have been featured in major legal publications. He also serves as an adjunct professor of Privacy Law at UC Berkeley."
    ],
    experience: [
        "Led the global GDPR compliance program for a multinational social media platform with over 500 million users.",
        "Managed the incident response and regulatory reporting for a Fortune 500 retailer following a massive ransomware attack.",
        "Defended a fintech company in a class-action lawsuit alleging violations of biometric privacy laws.",
        "Advising a generative AI startup on data scraping legality and copyright issues."
    ]
  },
  {
    id: 4,
    name: "Charles J. Abrams",
    role: "Senior Counsel",
    phone: "+1 561.650.7984",
    email: "charles.abrams@corelaw.com",
    location: "West Palm Beach",
    category: "Real Estate",
    rating: 4,
    hourlyRate: 550,
    image: "/assets/images/attorney4.png",
    admissions: ["Florida", "New York"],
    languages: ["English", "Hebrew"],
    education: ["J.D., University of Florida", "M.B.A., Kellogg School of Management"],
    awards: ["Best Lawyers in America: Real Estate", "Florida Super Lawyers"],
    bio: [
        "Charles J. Abrams brings over two decades of experience in commercial real estate law. He represents developers, REITs, private equity funds, and lenders in the acquisition, disposition, financing, and development of premier properties.",
        "His portfolio includes luxury hospitality projects, mixed-use urban developments, and industrial logistics centers. Charles is known for his pragmatic approach to closing deals and his ability to structure complex joint ventures.",
        "Before entering private practice, Charles worked as General Counsel for a major real estate development firm in Miami."
    ],
    experience: [
        "Closed a $450 million acquisition and financing of a luxury resort portfolio in South Florida.",
        "Structured a joint venture for the development of a 60-story mixed-use tower in Miami.",
        "Negotiated lease agreements for over 2 million square feet of industrial space for a global logistics company.",
        "Represented a lender in a $200 million construction loan for a high-end residential project."
    ]
  },
  {
    id: 5,
    name: "Ejim Peter Achi",
    role: "Partner",
    phone: "+1 212.801.6963",
    email: "ejim.achi@corelaw.com",
    location: "New York",
    category: "Corporate",
    rating: 5,
    hourlyRate: 950,
    image: "/assets/images/attorney5.png",
    admissions: ["New York", "New Jersey"],
    languages: ["English", "Igbo"],
    education: ["J.D., Columbia Law School", "B.A., University of Pennsylvania"],
    awards: ["Top 100 Black Lawyers", "Legal 500: Private Equity"],
    bio: [
        "Ejim Peter Achi is a powerhouse in the private equity sector, representing sponsors and their portfolio companies in leveraged buyouts, growth equity investments, and exit transactions.",
        "With a reputation for efficiency and commercial awareness, Ejim has guided clients through transactions across the manufacturing, healthcare, and consumer retail sectors. He frequently advises boards on fiduciary duties during sale processes.",
        "Ejim is a mentor to young attorneys and actively participates in initiatives to improve diversity within the legal profession."
    ],
    experience: [
        "Advised a private equity firm on its $2.3 billion take-private acquisition of a publicly traded healthcare company.",
        "Represented a portfolio company in its strategic add-on acquisition of a European competitor.",
        "Structured the recapitalization of a family-owned manufacturing business by a growth equity fund.",
        "Counsel to a consortium of investors in the distressed acquisition of a retail chain."
    ]
  },
  {
    id: 6,
    name: "Ashia D. Adams",
    role: "Associate",
    phone: "+44 203 349 8800",
    email: "ashia.adams@corelaw.com",
    location: "London",
    category: "Real Estate",
    rating: 4,
    hourlyRate: 500,
    image: "/assets/images/attorney6.png",
    admissions: ["England & Wales"],
    languages: ["English", "German"],
    education: ["LLB, Oxford University", "LPC, BPP Law School"],
    awards: ["Rising Star: Real Estate (UK)", "Women in Law Awards: Shortlisted"],
    bio: [
        "Ashia D. Adams is a key member of the firm's London Real Estate practice. She focuses on cross-border property transactions, advising international investors on incoming capital flows into the UK and European markets.",
        "Her expertise covers commercial leasing, property finance, and asset management. Ashia is particularly skilled in handling the real estate aspects of large corporate M&A deals.",
        "Fluent in German, she often acts as a bridge for clients in the DACH region investing in London real estate."
    ],
    experience: [
        "Assisted a sovereign wealth fund in the £300 million acquisition of a landmark office building in the City of London.",
        "Advised a German pension fund on the financing of a logistics portfolio across the UK.",
        "Negotiated the headquarters lease for a major fintech unicorn in London's Shoreditch district.",
        "Handled real estate due diligence for a pan-European hotel chain acquisition."
    ]
  },
  {
    id: 7,
    name: "Bianca Z. Bailey",
    role: "Senior Associate",
    phone: "+1 310.555.0192",
    email: "bianca.bailey@corelaw.com",
    location: "Los Angeles",
    category: "Litigation",
    rating: 5,
    hourlyRate: 450,
    image: "/assets/images/attorney7.png",
    admissions: ["California", "Nevada"],
    languages: ["English", "Spanish", "Italian"],
    education: ["J.D., UCLA School of Law", "B.A., USC"],
    awards: ["Ones to Watch: Commercial Litigation", "Super Lawyers: Rising Star"],
    bio: [
        "Bianca Z. Bailey is a tenacious litigator specializing in complex commercial disputes, entertainment law, and white-collar defense. She represents studios, production companies, and high-net-worth individuals in contract disputes and intellectual property claims.",
        "Known for her meticulous preparation and courtroom presence, Bianca has secured favorable outcomes in both state and federal courts. She also has significant experience in arbitration and mediation proceedings.",
        "Bianca maintains an active pro bono practice, representing artists and musicians in copyright disputes."
    ],
    experience: [
        "Obtained a summary judgment dismissal for a major film studio in a copyright infringement lawsuit.",
        "Represented a streaming service in a breach of contract dispute with a content distributor.",
        "Secured a favorable settlement for a celebrity client in a defamation case.",
        "Defended a tech executive in a white-collar investigation, resulting in no charges filed."
    ]
  }
];

export default function AttorneysPage() {
  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filters State
  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    rating: "All",
    price: "All",
    admissions: "All",
    language: "All",
  });

  // --- LOGIC ---
  const categories = ["All", ...new Set(attorneysData.map((a) => a.category))].sort();
  const locations = ["All", ...new Set(attorneysData.map((a) => a.location))].sort();
  const uniqueAdmissions = ["All", ...new Set(attorneysData.flatMap((a) => a.admissions || []))].sort();
  const uniqueLanguages = ["All", ...new Set(attorneysData.flatMap((a) => a.languages || []))].sort();
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  // --- FILTER LOGIC ---
  const filteredData = useMemo(() => {
    return attorneysData
      .filter((attorney) => {
        if (searchTerm && !attorney.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        if (selectedLetter !== "All" && !attorney.name.startsWith(selectedLetter)) return false;
        if (filters.category !== "All" && attorney.category !== filters.category) return false;
        if (filters.location !== "All" && attorney.location !== filters.location) return false;
        if (filters.admissions !== "All" && !attorney.admissions?.includes(filters.admissions)) return false;
        if (filters.language !== "All" && !attorney.languages?.includes(filters.language)) return false;
        if (filters.rating !== "All" && attorney.rating < parseInt(filters.rating)) return false;
        if (filters.price !== "All") {
          if (filters.price === "low" && attorney.hourlyRate > 300) return false;
          if (filters.price === "mid" && (attorney.hourlyRate <= 300 || attorney.hourlyRate > 600)) return false;
          if (filters.price === "high" && attorney.hourlyRate <= 600) return false;
        }
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedLetter, filters]);

  const handleFilterChange = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));
  const handleReset = () => {
    setSearchTerm(""); setSelectedLetter("All");
    setFilters({ category: "All", location: "All", rating: "All", price: "All", admissions: "All", language: "All" });
  };

  return (
    <>
      <Head><title>Our Professionals | Core Law</title></Head>

      {/* HERO */}
      <div className="section-hero">
        <div className="container text-center text-lg-start">
          <h5 className="text-uppercase fw-bold mb-2 section-subtitle">Our Team</h5>
          <h1 className="display-4 fw-bold font-serif">Find a Professional</h1>
          <p className="lead opacity-75">World-class legal talent delivering exceptional results.</p>
        </div>
      </div>

      <div className="py-5 section-main">
        <div className="container">
          <div className="row">
            {/* MOBILE FILTER BUTTON */}
            <div className="col-12 d-lg-none mb-3">
              <button className="btn btn-navy w-100 d-flex justify-content-between align-items-center" onClick={() => setShowMobileFilters(!showMobileFilters)}>
                <span><i className="bi bi-funnel-fill me-2"></i>Filter Results</span>
                <i className={`bi bi-chevron-${showMobileFilters ? "up" : "down"}`}></i>
              </button>
            </div>

            {/* SIDEBAR */}
            <div className={`col-lg-3 mb-5 pe-lg-4 ${showMobileFilters ? "d-block" : "d-none d-lg-block"}`}>
              <div className="bg-white p-4 shadow-sm rounded-3 border-0">
                <div className="mb-4">
                  <label className="fw-bold small text-muted mb-2 ls-1">SEARCH NAME</label>
                  <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="e.g. Caroline" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <hr className="text-muted opacity-25 my-4" />
                
                {/* Filters */}
                <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">Practise Area</label>
                  <select className="form-select border-0 bg-light" value={filters.category} onChange={(e) => handleFilterChange("category", e.target.value)}>
                    {categories.map((x) => <option key={x} value={x}>{x}</option>)}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">Location</label>
                  <select className="form-select border-0 bg-light" value={filters.location} onChange={(e) => handleFilterChange("location", e.target.value)}>
                    {locations.map((x) => <option key={x} value={x}>{x}</option>)}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">Admissions</label>
                  <select className="form-select border-0 bg-light" value={filters.admissions} onChange={(e) => handleFilterChange("admissions", e.target.value)}>
                    {uniqueAdmissions.map((x) => <option key={x} value={x}>{x}</option>)}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">Language</label>
                  <select className="form-select border-0 bg-light" value={filters.language} onChange={(e) => handleFilterChange("language", e.target.value)}>
                    {uniqueLanguages.map((x) => <option key={x} value={x}>{x}</option>)}
                  </select>
                </div>
                 <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2 text-uppercase ls-1">Hourly Rate</label>
                  <select className="form-select border-0 bg-light" value={filters.price} onChange={(e) => handleFilterChange("price", e.target.value)}>
                    <option value="All">Any</option><option value="low">Economy (&lt;$300)</option><option value="mid">Standard</option><option value="high">Premium (&gt;$600)</option>
                  </select>
                </div>
                <button onClick={handleReset} className="btn btn-outline-danger w-100 mt-3">Reset Filters</button>
              </div>
            </div>

            {/* RESULTS LIST */}
            <div className="col-lg-9">
              {/* Alphabet Scroller */}
              <div className="bg-white p-3 shadow-sm rounded-3 border-0 mb-4 d-flex gap-2 overflow-auto alphabet-scroll">
                <span onClick={() => setSelectedLetter("All")} className={`alphabet-item ${selectedLetter === "All" ? "active" : ""}`}>All</span>
                {alphabet.map((l) => (<span key={l} onClick={() => setSelectedLetter(l)} className={`alphabet-item ${selectedLetter === l ? "active" : ""}`}>{l}</span>))}
              </div>

              {/* Cards */}
              <div className="d-flex flex-column gap-3">
                {filteredData.length > 0 ? (
                  filteredData.map((attorney) => (
                    <div key={attorney.id} className="card border-0 shadow-sm rounded-3 p-4 hover-card">
                      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
                        
                        {/* IMAGE (Square & Top Aligned) */}
                        <div className="flex-shrink-0 mb-3 mb-md-0 me-md-4 text-center">
                          <Link href={`/attorneys/${attorney.id}`}>
                            <a>
                              <img 
                                src={attorney.image} 
                                alt={attorney.name} 
                                className="shadow-sm rounded" 
                                style={{ width: "130px", height: "150px", objectFit: "cover", objectPosition: "top center" }} 
                              />
                            </a>
                          </Link>
                          <div className="mt-2 text-warning small">{[...Array(5)].map((_, i) => <i key={i} className={`bi bi-star${i < attorney.rating ? "-fill" : ""}`}></i>)}</div>
                        </div>

                        {/* CONTENT */}
                        <div className="flex-grow-1 text-center text-md-start w-100">
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
                            <div>
                              {/* BIG NAME (fs-2) */}
                              <h3 className="fw-bold text-navy mb-1 hover-gold fs-2">
                                <Link href={`/attorneys/${attorney.id}`}>
                                  <a className="text-decoration-none text-navy">{attorney.name}</a>
                                </Link>
                              </h3>
                              <div className="text-gold fw-bold text-uppercase ls-1 small mb-2 mb-md-0">{attorney.role}</div>
                            </div>
                            <div className="d-none d-md-block text-end">
                              <span className="fs-5 fw-bold text-success">${attorney.hourlyRate}<span className="fs-6 text-muted fw-normal">/hr</span></span>
                            </div>
                          </div>
                          <hr className="opacity-10 my-2" />

                          {/* DETAILS GRID (Responsive Fix) */}
                          <div className="row mt-3 gy-2 text-dark">
                            <div className="col-12 col-md-6 d-flex align-items-start">
                              <div className="text-gold fs-5 me-2" style={{ width: "24px", textAlign: "center" }}><i className="bi bi-geo-alt-fill"></i></div>
                              <span className="fs-6 align-self-center">{attorney.location}</span>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-start">
                              <div className="text-gold fs-5 me-2" style={{ width: "24px", textAlign: "center" }}><i className="bi bi-briefcase-fill"></i></div>
                              <span className="fs-6 align-self-center">{attorney.category}</span>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-start">
                              <div className="text-gold fs-5 me-2" style={{ width: "24px", textAlign: "center" }}><i className="bi bi-telephone-fill"></i></div>
                              <span className="fs-6 align-self-center">{attorney.phone}</span>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-start">
                              <div className="text-gold fs-5 me-2" style={{ width: "24px", textAlign: "center" }}><i className="bi bi-translate"></i></div>
                              <span className="fs-6 align-self-center text-truncate">{attorney.languages?.join(", ")}</span>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-start">
                              <div className="text-gold fs-5 me-2" style={{ width: "24px", textAlign: "center" }}><i className="bi bi-envelope-fill"></i></div>
                              <span className="fs-6 align-self-center text-break">{attorney.email}</span>
                            </div>
                          </div>
                          
                          <div className="d-md-none mt-3 pt-2 border-top">
                            <span className="fw-bold text-success fs-5">${attorney.hourlyRate}/hr</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="alert alert-light text-center border py-5"><h4>No matches found.</h4><button onClick={handleReset} className="btn btn-link text-gold">Clear Filters</button></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-navy { color: #002855; }
        .btn-navy { background-color: #002855; color: white; }
        .text-gold { color: #de9f57; }
        .ls-1 { letter-spacing: 1px; }
        .section-hero { background-color: #002855; padding: 80px 0 50px 0; color: #ffffff; }
        .section-main { background-color: #f4f6f8; }
        .hover-card { transition: transform 0.2s ease; }
        .hover-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0, 40, 85, 0.08) !important; }
        a.text-navy:hover { color: #de9f57 !important; transition: 0.2s; }
        .alphabet-scroll::-webkit-scrollbar { height: 4px; }
        .alphabet-scroll::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
        .alphabet-item { min-width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: bold; color: #002855; border-radius: 50%; background: #f8f9fa; transition: 0.2s; }
        .alphabet-item:hover, .alphabet-item.active { background-color: #002855; color: #de9f57; }
      `}</style>
    </>
  );
}