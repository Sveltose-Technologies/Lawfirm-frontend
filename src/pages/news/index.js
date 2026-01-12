
// // // // import React, { useState, useEffect } from 'react';
// // // // import Head from 'next/head';

// // // // // --- 1. MOCK DATA ---
// // // // const excelData = [
// // // //   {
// // // //     id: 1,
// // // //     date: "2024-12-05",
// // // //     type: "Press Release",
// // // //     subject: "Core Law Expands Global Footprint with New Office in London",
// // // //     mediaType: "image", 
// // // //       src: "/assets/images/news1.png",
// // // //     professionals: ["Rajesh Oberoi", "Sarah Jenkins"],
// // // //     capabilities: ["Corporate Expansion", "International Law"],
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     date: "2024-11-20",
// // // //     type: "News",
// // // //     subject: "Video Recap: Annual Legal Tech Summit 2024 Highlights",
// // // //     mediaType: "video",
// // // //     // Using a reliable sample video link
// // // //     src: "/assets/videos/news.mp4",
// // // //     professionals: ["Vikram Singhania"],
// // // //     capabilities: ["Technology Law", "IP Rights"],
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     date: "2023-10-15",
// // // //     type: "Publication",
// // // //     subject: "Understanding New Taxation Laws for Startups in India",
// // // //     mediaType: "image",
// // // //     src: "/assets/images/news2.png",
// // // //     professionals: ["Meera Kapoor", "Amit Verma"],
// // // //     capabilities: ["Taxation", "Startups"],
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     date: "2023-08-10",
// // // //     type: "Press Release",
// // // //     subject: "Core Law Named 'Firm of the Year' by Asian Legal Business",
// // // //     mediaType: "image",
// // // //     src: "/assets/images/news3.png",
// // // //     professionals: ["Firm Wide"],
// // // //     capabilities: ["Awards", "Recognition"],
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     date: "2022-05-12",
// // // //     type: "News",
// // // //     subject: "Charity Gala: Supporting Education for Underprivileged Children",
// // // //     mediaType: "video",
// // // //    src: "/assets/videos/news.mp4",
// // // //     professionals: ["Anjali Desai"],
// // // //     capabilities: ["Pro Bono", "CSR"],
// // // //   }
// // // // ];

// // // // function NewsPressRelease() {
  
// // // //   // --- STATES ---
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [filterYear, setFilterYear] = useState('All');
// // // //   const [filterType, setFilterType] = useState('All');
// // // //   const [mounted, setMounted] = useState(false);

// // // //   // --- HYDRATION FIX ---
// // // //   useEffect(() => {
// // // //     setMounted(true);
// // // //   }, []);

// // // //   // --- DATE FORMATTER ---
// // // //   const getDateParts = (dateString) => {
// // // //     const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// // // //     const d = new Date(dateString);
// // // //     return {
// // // //       day: d.getDate(),
// // // //       month: months[d.getMonth()],
// // // //       year: d.getFullYear()
// // // //     };
// // // //   };

// // // //   // --- DERIVE YEARS ---
// // // //   const years = ['All', ...new Set(excelData.map(item => new Date(item.date).getFullYear()))].sort().reverse();

// // // //   // --- FILTER LOGIC ---
// // // //   const filteredData = excelData.filter(item => {
// // // //     const itemYear = new Date(item.date).getFullYear().toString();
// // // //     const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase());
// // // //     const matchesYear = filterYear === 'All' || itemYear === filterYear;
// // // //     const matchesType = filterType === 'All' || item.type === filterType;
// // // //     return matchesSearch && matchesYear && matchesType;
// // // //   });

// // // //   const handlePrint = () => { if (typeof window !== "undefined") window.print(); };
// // // //   const shareUrl = "https://corelaw.com/news";

// // // //   if (!mounted) return null;

// // // //   return (
// // // //     <>
// // // //       <Head>
// // // //         <title>News & Insights | Core Law</title>
// // // //       </Head>

// // // //       {/* ==========================================================================
// // // //           1. PREMIUM BANNER
// // // //       ========================================================================== */}
// // // //       <div className="inner-banner-section d-flex align-items-center justify-content-center" style={{
// // // //           backgroundImage: 'linear-gradient(to right, rgba(10, 28, 56, 0.9), rgba(10, 28, 56, 0.7)), url(/assets/images/news-banner.png)', 
// // // //           minHeight: '400px', 
// // // //           backgroundSize: 'cover', 
// // // //           backgroundPosition: 'center', 
// // // //           textAlign: 'center'
// // // //         }}>
// // // //         <div className="container">
// // // //            <span className="text-warning fw-bold letter-spacing-2 text-uppercase">Stay Informed</span>
// // // //            <h1 className="text-white display-3 fw-bold mt-2">News & Insights</h1>
// // // //            <p className="text-white-50 lead mx-auto" style={{maxWidth: '600px'}}>
// // // //              Discover our latest achievements, legal updates, and press releases.
// // // //            </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* ==========================================================================
// // // //           2. SEARCH & FILTER BAR (Floating Effect)
// // // //       ========================================================================== */}
// // // //       <div className="container" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
// // // //         <div className="card shadow-lg border-0 rounded-3">
// // // //             <div className="card-body p-4">
// // // //                 <div className="row g-3 align-items-end">
                    
// // // //                     {/* Search */}
// // // //                     <div className="col-lg-5">
// // // //                         <label className="fw-bold small text-secondary mb-1">SEARCH TOPICS</label>
// // // //                         <div className="input-group">
// // // //                             <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-warning"></i></span>
// // // //                             <input 
// // // //                                 type="text" 
// // // //                                 className="form-control border-start-0 ps-0" 
// // // //                                 placeholder="Search headlines..."
// // // //                                 value={searchTerm}
// // // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // // //                             />
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Filter Year */}
// // // //                     <div className="col-lg-3">
// // // //                         <label className="fw-bold small text-secondary mb-1">YEAR</label>
// // // //                         <select className="form-select" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
// // // //                             {years.map(year => <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>)}
// // // //                         </select>
// // // //                     </div>

// // // //                     {/* Filter Type */}
// // // //                     <div className="col-lg-4">
// // // //                         <label className="fw-bold small text-secondary mb-1">CATEGORY</label>
// // // //                         <select className="form-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
// // // //                             <option value="All">All Categories</option>
// // // //                             <option value="Press Release">Press Release</option>
// // // //                             <option value="News">News</option>
// // // //                             <option value="Publication">Publication</option>
// // // //                         </select>
// // // //                     </div>

// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ==========================================================================
// // // //           3. NEWS CARDS (Design & Video Logic)
// // // //       ========================================================================== */}
// // // //       <div className="container py-5 mt-4">
// // // //         <div className="news-list">
            
// // // //             {filteredData.length > 0 ? (
// // // //                 filteredData.map((item) => {
// // // //                     const { day, month, year } = getDateParts(item.date);

// // // //                     return (
// // // //                         <div key={item.id} className="card border-0 shadow-sm mb-4 overflow-hidden hover-lift rounded-3">
// // // //                             <div className="row g-0">
                                
// // // //                                 {/* A. Date Block (Left) */}
// // // //                                 <div className="col-lg-2 bg-light d-flex flex-column justify-content-center align-items-center p-3 border-end">
// // // //                                     <h2 className="display-5 fw-bold" style={{color: '#0a1c38'}}>{day}</h2>
// // // //                                     <span className="h5 text-muted text-uppercase mb-2">{month}</span>
// // // //                                     <span className="badge rounded-pill px-3 py-2" style={{backgroundColor: '#de9f57'}}>{year}</span>
// // // //                                     <span className="badge bg-secondary mt-2 small">{item.type}</span>
// // // //                                 </div>

// // // //                                 {/* B. Media (Video/Image) */}
// // // //                                 <div className="col-lg-4 position-relative bg-black d-flex align-items-center justify-content-center">
// // // //                                     {item.mediaType === 'video' ? (
// // // //                                         <div className="ratio ratio-16x9 w-100 h-100">
// // // //                                             {/* HTML5 Video with Controls - Click to Play */}
// // // //                                             <video 
// // // //                                                 controls 
// // // //                                                 preload="metadata" 
// // // //                                                 playsInline 
// // // //                                                 className="w-100 h-100 object-fit-cover"
// // // //                                                 style={{cursor: 'pointer'}}
// // // //                                             >
// // // //                                                 <source src={item.src} type="video/mp4" />
// // // //                                                 Your browser does not support the video tag.
// // // //                                             </video>
// // // //                                         </div>
// // // //                                     ) : (
// // // //                                         <img src={item.src} alt="News" className="w-100 h-100 object-fit-cover" style={{minHeight: '220px'}} />
// // // //                                     )}
// // // //                                 </div>

// // // //                                 {/* C. Content */}
// // // //                                 <div className="col-lg-4 p-4 d-flex flex-column justify-content-center">
// // // //                                     <h4 className="fw-bold mb-3 hover-text-gold" style={{ color: '#0a1c38', cursor:'pointer' }}>{item.subject}</h4>
                                    
// // // //                                     <div className="mb-2">
// // // //                                         <i className="bi bi-person-fill text-warning me-2"></i>
// // // //                                         <span className="small fw-bold text-muted">Professionals:</span>
// // // //                                         <span className="small ms-1">{item.professionals.join(", ")}</span>
// // // //                                     </div>
// // // //                                     <div>
// // // //                                         <i className="bi bi-briefcase-fill text-warning me-2"></i>
// // // //                                         <span className="small fw-bold text-muted">Capabilities:</span>
// // // //                                         <span className="small ms-1">{item.capabilities.join(", ")}</span>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* D. Share Actions */}
// // // //                                 <div className="col-lg-2 bg-light d-flex flex-lg-column flex-row justify-content-center align-items-center p-3 border-start gap-3">
// // // //                                     <span className="text-muted small fw-bold d-none d-lg-block">SHARE</span>
                                    
// // // //                                     <div className="d-flex flex-lg-column flex-row gap-3">
// // // //                                         <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-facebook fs-5"></i></a>
// // // //                                         <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-twitter fs-5"></i></a>
// // // //                                         <a href={`https://linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-linkedin fs-5"></i></a>
// // // //                                     </div>
                                    
// // // //                                     <div className="border-top border-lg-0 w-50 my-2 d-none d-lg-block"></div>
                                    
// // // //                                     <button onClick={handlePrint} className="btn btn-outline-dark btn-sm rounded-pill px-3" title="Print News">
// // // //                                         <i className="bi bi-printer me-1"></i> Print
// // // //                                     </button>
// // // //                                 </div>

// // // //                             </div>
// // // //                         </div>
// // // //                     );
// // // //                 })
// // // //             ) : (
// // // //                 <div className="text-center py-5">
// // // //                     <div className="mb-3">
// // // //                         <i className="bi bi-journal-x fs-1 text-muted"></i>
// // // //                     </div>
// // // //                     <h3 className="text-muted">No updates found.</h3>
// // // //                     <p className="text-muted">Try adjusting your search or filters.</p>
// // // //                     <button className="btn text-white mt-2" style={{backgroundColor: '#0a1c38'}} onClick={() => {setFilterYear('All'); setSearchTerm('');}}>
// // // //                         View All News
// // // //                     </button>
// // // //                 </div>
// // // //             )}
            
// // // //         </div>
// // // //       </div>
      
// // // //       {/* CSS Styles */}
// // // //       <style jsx>{`
// // // //         .letter-spacing-2 { letter-spacing: 2px; }
        
// // // //         /* Card Hover Effect */
// // // //         .hover-lift {
// // // //             transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // //         }
// // // //         .hover-lift:hover {
// // // //             transform: translateY(-5px);
// // // //             box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
// // // //         }

// // // //         /* Text Hover */
// // // //         .hover-text-gold:hover {
// // // //             color: #de9f57 !important;
// // // //             transition: color 0.2s ease;
// // // //         }

// // // //         /* Icon Hover */
// // // //         .hover-icon:hover {
// // // //             color: #0a1c38 !important;
// // // //             transform: scale(1.2);
// // // //             transition: all 0.2s ease;
// // // //         }
// // // //       `}</style>

// // // //     </>
// // // //   )
// // // // }

// // // // export default NewsPressRelease;




// // // // import React, { useState, useEffect } from 'react';
// // // // import Head from 'next/head';

// // // // // --- 1. MOCK DATA ---
// // // // const excelData = [
// // // //   {
// // // //     id: 1,
// // // //     date: "2024-12-05",
// // // //     type: "Press Release",
// // // //     subject: "Core Law Expands Global Footprint with New Office in London",
// // // //     mediaType: "image", 
// // // //       src: "/assets/images/news1.png",
// // // //     professionals: ["Rajesh Oberoi", "Sarah Jenkins"],
// // // //     capabilities: ["Corporate Expansion", "International Law"],
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     date: "2024-11-20",
// // // //     type: "News",
// // // //     subject: "Video Recap: Annual Legal Tech Summit 2024 Highlights",
// // // //     mediaType: "video",
// // // //     src: "/assets/videos/news.mp4",
// // // //     professionals: ["Vikram Singhania"],
// // // //     capabilities: ["Technology Law", "IP Rights"],
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     date: "2023-10-15",
// // // //     type: "Publication",
// // // //     subject: "Understanding New Taxation Laws for Startups in India",
// // // //     mediaType: "image",
// // // //     src: "/assets/images/news2.png",
// // // //     professionals: ["Meera Kapoor", "Amit Verma"],
// // // //     capabilities: ["Taxation", "Startups"],
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     date: "2023-08-10",
// // // //     type: "Press Release",
// // // //     subject: "Core Law Named 'Firm of the Year' by Asian Legal Business",
// // // //     mediaType: "image",
// // // //     src: "/assets/images/news3.png",
// // // //     professionals: ["Firm Wide"],
// // // //     capabilities: ["Awards", "Recognition"],
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     date: "2022-05-12",
// // // //     type: "News",
// // // //     subject: "Charity Gala: Supporting Education for Underprivileged Children",
// // // //     mediaType: "video",
// // // //    src: "/assets/videos/news.mp4",
// // // //     professionals: ["Anjali Desai"],
// // // //     capabilities: ["Pro Bono", "CSR"],
// // // //   }
// // // // ];

// // // // function NewsPressRelease() {
  
// // // //   // --- STATES ---
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [filterYear, setFilterYear] = useState('All');
// // // //   const [filterType, setFilterType] = useState('All');
// // // //   const [mounted, setMounted] = useState(false);

// // // //   // --- HYDRATION FIX ---
// // // //   useEffect(() => {
// // // //     setMounted(true);
// // // //   }, []);

// // // //   // --- DATE FORMATTER ---
// // // //   const getDateParts = (dateString) => {
// // // //     const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// // // //     const d = new Date(dateString);
// // // //     return {
// // // //       day: d.getDate(),
// // // //       month: months[d.getMonth()],
// // // //       year: d.getFullYear()
// // // //     };
// // // //   };

// // // //   // --- DERIVE YEARS ---
// // // //   const years = ['All', ...new Set(excelData.map(item => new Date(item.date).getFullYear()))].sort().reverse();

// // // //   // --- FILTER LOGIC ---
// // // //   const filteredData = excelData.filter(item => {
// // // //     const itemYear = new Date(item.date).getFullYear().toString();
// // // //     const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase());
// // // //     const matchesYear = filterYear === 'All' || itemYear === filterYear;
// // // //     const matchesType = filterType === 'All' || item.type === filterType;
// // // //     return matchesSearch && matchesYear && matchesType;
// // // //   });

// // // //   const handlePrint = () => { if (typeof window !== "undefined") window.print(); };
// // // //   const shareUrl = "https://corelaw.com/news";

// // // //   if (!mounted) return null;

// // // //   return (
// // // //     <>
// // // //       <Head>
// // // //         <title>News & Insights | Core Law</title>
// // // //       </Head>

// // // //       {/* ==========================================================================
// // // //           1. PREMIUM BANNER
// // // //       ========================================================================== */}
// // // //       <div className="inner-banner-section d-flex align-items-center justify-content-center">
// // // //         <div className="container">
// // // //            <span className="text-warning fw-bold letter-spacing-2 text-uppercase">Stay Informed</span>
// // // //            <h1 className="text-white display-3 fw-bold mt-2">News & Insights</h1>
// // // //            <p className="text-white-50 lead mx-auto lead-text">
// // // //              Discover our latest achievements, legal updates, and press releases.
// // // //            </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* ==========================================================================
// // // //           2. SEARCH & FILTER BAR (Floating Effect)
// // // //       ========================================================================== */}
// // // //       <div className="container floating-search-container">
// // // //         <div className="card shadow-lg border-0 rounded-3">
// // // //             <div className="card-body p-4">
// // // //                 <div className="row g-3 align-items-end">
                    
// // // //                     {/* Search */}
// // // //                     <div className="col-lg-5">
// // // //                         <label className="fw-bold small text-secondary mb-1">SEARCH TOPICS</label>
// // // //                         <div className="input-group">
// // // //                             <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-warning"></i></span>
// // // //                             <input 
// // // //                                 type="text" 
// // // //                                 className="form-control border-start-0 ps-0" 
// // // //                                 placeholder="Search headlines..."
// // // //                                 value={searchTerm}
// // // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // // //                             />
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Filter Year */}
// // // //                     <div className="col-lg-3">
// // // //                         <label className="fw-bold small text-secondary mb-1">YEAR</label>
// // // //                         <select className="form-select" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
// // // //                             {years.map(year => <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>)}
// // // //                         </select>
// // // //                     </div>

// // // //                     {/* Filter Type */}
// // // //                     <div className="col-lg-4">
// // // //                         <label className="fw-bold small text-secondary mb-1">CATEGORY</label>
// // // //                         <select className="form-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
// // // //                             <option value="All">All Categories</option>
// // // //                             <option value="Press Release">Press Release</option>
// // // //                             <option value="News">News</option>
// // // //                             <option value="Publication">Publication</option>
// // // //                         </select>
// // // //                     </div>

// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ==========================================================================
// // // //           3. NEWS CARDS (Design & Video Logic)
// // // //       ========================================================================== */}
// // // //       <div className="container py-5 mt-4">
// // // //         <div className="news-list">
            
// // // //             {filteredData.length > 0 ? (
// // // //                 filteredData.map((item) => {
// // // //                     const { day, month, year } = getDateParts(item.date);

// // // //                     return (
// // // //                         <div key={item.id} className="card border-0 shadow-sm mb-4 overflow-hidden hover-lift rounded-3">
// // // //                             <div className="row g-0">
                                
// // // //                                 {/* A. Date Block (Left) */}
// // // //                                 <div className="col-lg-2 bg-light d-flex flex-column justify-content-center align-items-center p-3 border-end">
// // // //                                     <h2 className="display-5 fw-bold text-primary-dark">{day}</h2>
// // // //                                     <span className="h5 text-muted text-uppercase mb-2">{month}</span>
// // // //                                     <span className="badge rounded-pill px-3 py-2 bg-gold">{year}</span>
// // // //                                     <span className="badge bg-secondary mt-2 small">{item.type}</span>
// // // //                                 </div>

// // // //                                 {/* B. Media (Video/Image) */}
// // // //                                 <div className="col-lg-4 position-relative bg-black d-flex align-items-center justify-content-center">
// // // //                                     {item.mediaType === 'video' ? (
// // // //                                         <div className="ratio ratio-16x9 w-100 h-100">
// // // //                                             {/* HTML5 Video with Controls - Click to Play */}
// // // //                                             <video 
// // // //                                                 controls 
// // // //                                                 preload="metadata" 
// // // //                                                 playsInline 
// // // //                                                 className="w-100 h-100 object-fit-cover video-element"
// // // //                                             >
// // // //                                                 <source src={item.src} type="video/mp4" />
// // // //                                                 Your browser does not support the video tag.
// // // //                                             </video>
// // // //                                         </div>
// // // //                                     ) : (
// // // //                                         <img src={item.src} alt="News" className="w-100 h-100 object-fit-cover media-img" />
// // // //                                     )}
// // // //                                 </div>

// // // //                                 {/* C. Content */}
// // // //                                 <div className="col-lg-4 p-4 d-flex flex-column justify-content-center">
// // // //                                     <h4 className="fw-bold mb-3 hover-text-gold text-primary-dark cursor-pointer">{item.subject}</h4>
                                    
// // // //                                     <div className="mb-2">
// // // //                                         <i className="bi bi-person-fill text-warning me-2"></i>
// // // //                                         <span className="small fw-bold text-muted">Professionals:</span>
// // // //                                         <span className="small ms-1">{item.professionals.join(", ")}</span>
// // // //                                     </div>
// // // //                                     <div>
// // // //                                         <i className="bi bi-briefcase-fill text-warning me-2"></i>
// // // //                                         <span className="small fw-bold text-muted">Capabilities:</span>
// // // //                                         <span className="small ms-1">{item.capabilities.join(", ")}</span>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* D. Share Actions */}
// // // //                                 <div className="col-lg-2 bg-light d-flex flex-lg-column flex-row justify-content-center align-items-center p-3 border-start gap-3">
// // // //                                     <span className="text-muted small fw-bold d-none d-lg-block">SHARE</span>
                                    
// // // //                                     <div className="d-flex flex-lg-column flex-row gap-3">
// // // //                                         <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-facebook fs-5"></i></a>
// // // //                                         <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-twitter fs-5"></i></a>
// // // //                                         <a href={`https://linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-linkedin fs-5"></i></a>
// // // //                                     </div>
                                    
// // // //                                     <div className="border-top border-lg-0 w-50 my-2 d-none d-lg-block"></div>
                                    
// // // //                                     <button onClick={handlePrint} className="btn btn-outline-dark btn-sm rounded-pill px-3" title="Print News">
// // // //                                         <i className="bi bi-printer me-1"></i> Print
// // // //                                     </button>
// // // //                                 </div>

// // // //                             </div>
// // // //                         </div>
// // // //                     );
// // // //                 })
// // // //             ) : (
// // // //                 <div className="text-center py-5">
// // // //                     <div className="mb-3">
// // // //                         <i className="bi bi-journal-x fs-1 text-muted"></i>
// // // //                     </div>
// // // //                     <h3 className="text-muted">No updates found.</h3>
// // // //                     <p className="text-muted">Try adjusting your search or filters.</p>
// // // //                     <button className="btn text-white mt-2 bg-primary-dark" onClick={() => {setFilterYear('All'); setSearchTerm('');}}>
// // // //                         View All News
// // // //                     </button>
// // // //                 </div>
// // // //             )}
            
// // // //         </div>
// // // //       </div>
      
// // // //       {/* CSS Styles */}
// // // //       <style jsx>{`
// // // //         /* Global & Banner */
// // // //         .inner-banner-section {
// // // //           background-image: linear-gradient(to right, rgba(10, 28, 56, 0.9), rgba(10, 28, 56, 0.7)), url(/assets/images/news-banner.png);
// // // //           min-height: 400px;
// // // //           background-size: cover;
// // // //           background-position: center;
// // // //           text-align: center;
// // // //         }

// // // //         .letter-spacing-2 { letter-spacing: 2px; }
// // // //         .lead-text { max-width: 600px; }

// // // //         /* Floating Search */
// // // //         .floating-search-container {
// // // //            margin-top: -50px;
// // // //            position: relative;
// // // //            z-index: 10;
// // // //         }

// // // //         /* Colors */
// // // //         .text-primary-dark { color: #0a1c38; }
// // // //         .bg-primary-dark { background-color: #0a1c38; }
// // // //         .bg-gold { background-color: #de9f57; }
        
// // // //         /* Media */
// // // //         .media-img {
// // // //            min-height: 220px;
// // // //         }
// // // //         .video-element {
// // // //            cursor: pointer;
// // // //         }

// // // //         /* Utilities */
// // // //         .cursor-pointer { cursor: pointer; }

// // // //         /* Card Hover Effect */
// // // //         .hover-lift {
// // // //             transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // //         }
// // // //         .hover-lift:hover {
// // // //             transform: translateY(-5px);
// // // //             box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
// // // //         }

// // // //         /* Text Hover */
// // // //         .hover-text-gold:hover {
// // // //             color: #de9f57 !important;
// // // //             transition: color 0.2s ease;
// // // //         }

// // // //         /* Icon Hover */
// // // //         .hover-icon:hover {
// // // //             color: #0a1c38 !important;
// // // //             transform: scale(1.2);
// // // //             transition: all 0.2s ease;
// // // //         }
// // // //       `}</style>

// // // //     </>
// // // //   )
// // // // }

// // // // export default NewsPressRelease;


// // // import React, { useState, useEffect } from 'react';
// // // import Head from 'next/head';
// // // import Link from 'next/link';
// // // // Path check karein ki sahi hai ya nahi
// // // import { getAllNews, IMG_URL } from '../../services/authService'; 

// // // function NewsPressRelease() {
// // //   const [newsList, setNewsList] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [mounted, setMounted] = useState(false);

// // //   useEffect(() => {
// // //     setMounted(true);
// // //     const fetchNewsData = async () => {
// // //       console.log("🚀 [Flow 1] useEffect triggered. Calling getAllNews API...");
// // //       setLoading(true);

// // //       try {
// // //         const response = await getAllNews();
// // //         console.log("📦 [Flow 2] Full API Response received:", response);

// // //         // Aapke console screenshot ke mutabiq yahan 'status' hai, 'success' nahi
// // //         if (response && response.status === true) {
// // //           console.log("✅ [Flow 3] Success! Data received:", response.data);
// // //           setNewsList(response.data);
// // //         } else {
// // //           console.error("❌ [Flow 3] API returned status: false or unexpected format", response);
// // //         }
// // //       } catch (error) {
// // //         console.error("❌ [Flow 3] Critical Error in API call:", error);
// // //       } finally {
// // //         setLoading(false);
// // //         console.log("🔚 [Flow 4] Loading finished.");
// // //       }
// // //     };

// // //     fetchNewsData();
// // //   }, []);

// // //   if (!mounted) return null;

// // //   // Filter Logic based on 'title' (Aapke API mein 'title' field hai)
// // //   const filteredNews = newsList.filter(item => 
// // //     (item.title || "").toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   console.log("🖥️ [Flow 5] Rendering Component. Items to show:", filteredNews.length);

// // //   return (
// // //     <>
// // //       <Head>
// // //         <title>News | Core Law</title>
// // //       </Head>

// // //       {/* ================= HERO SECTION ================= */}
// // //       <div className="news-hero">
// // //         <div className="container text-center">
// // //           <h1 className="display-1 fw-serif mt-5">News</h1>
// // //           <p className="lead fs-4">Our developing story.</p>
// // //           <Link href="/media-contacts">
// // //       <a className="btn btn-dark text-uppercase px-4 py-2 mt-3 fw-bold btn-media">
// // //         Media Contacts
// // //       </a>
// // //     </Link>
// // //         </div>
// // //       </div>

// // //       {/* ================= DARK FILTER BAR ================= */}
// // //       <div className="filter-bar">
// // //         <div className="container">
// // //           <div className="row align-items-center">
// // //             <div className="col-lg-5">
// // //               <div className="search-box">
// // //                 <input 
// // //                   type="text" 
// // //                   placeholder="Search News By Keyword" 
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                 />
// // //                 <i className="bi bi-search"></i>
// // //               </div>
// // //             </div>
// // //             <div className="col-lg-7">
// // //               <div className="d-flex flex-wrap justify-content-lg-end gap-4 filter-labels">
// // //                 <span>Capability <i className="bi bi-chevron-right small"></i></span>
// // //                 <span>Topic <i className="bi bi-chevron-right small"></i></span>
// // //                 <span>Professional <i className="bi bi-chevron-right small"></i></span>
// // //                 <span>Date <i className="bi bi-chevron-right small"></i></span>
// // //                 <span>Location <i className="bi bi-chevron-right small"></i></span>
// // //                 <span>Type <i className="bi bi-chevron-right small"></i></span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ================= NEWS LIST SECTION ================= */}
// // //       <div className="container py-5 bg-white min-vh-100">
// // //         <h2 className="fw-bold mb-5 fs-2">Recent News</h2>

// // //         <div className="news-container">
// // //           {loading ? (
// // //             <div className="text-center py-5">
// // //                <div className="spinner-border text-gold" role="status"></div>
// // //                <p className="mt-2">Fetching news from server...</p>
// // //             </div>
// // //           ) : filteredNews.length > 0 ? (
// // //             filteredNews.map((item, index) => {
// // //               // Date logic
// // //               const newsDate = item.date ? new Date(item.date).toLocaleDateString('en-US', {
// // //                 month: 'long',
// // //                 day: '2-digit',
// // //                 year: 'numeric'
// // //               }) : "Date not available";

// // //               return (
// // //                 <div key={item.id || index} className="news-item border-bottom pb-4 mb-4">
// // //                   <div className="row align-items-start">
// // //                     <div className="col-md-10">
// // //                       {/* Meta Info */}
// // //                       <div className="news-meta mb-2">
// // //                         <span className="date text-uppercase fw-bold me-2" style={{fontSize: '13px'}}>
// // //                           {newsDate}
// // //                         </span>
// // //                         <span className="category text-uppercase fw-bold text-muted border-start ps-2" style={{fontSize: '13px'}}>
// // //                            Press Release
// // //                         </span>
// // //                       </div>
                      
// // //                       {/* Title: Linked to detail */}
// // //                       <Link href={`/news/${item.id}`}>
// // //                         <a className="text-decoration-none">
// // //                           <h3 className="news-title fw-bold mb-2" style={{color: '#b88b4a', fontSize: '24px'}}>
// // //                              {item.title}
// // //                           </h3>
// // //                         </a>
// // //                       </Link>

// // //                       {/* Content Preview (from textEditor) */}
// // //                       <div 
// // //                         className="news-excerpt text-muted small"
// // //                         style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
// // //                         dangerouslySetInnerHTML={{ __html: item.textEditor }} 
// // //                       />
// // //                     </div>

// // //                     {/* Right side: Read Time */}
// // //                     <div className="col-md-2 text-md-end mt-2 mt-md-0">
// // //                       <div className="read-time text-muted small d-flex align-items-center justify-content-md-end">
// // //                         <span className="line d-none d-md-inline-block me-2"></span> 1 min read
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })
// // //           ) : (
// // //             <div className="text-center py-5">
// // //                <h3>No Recent News Available</h3>
// // //                <p className="text-muted">We couldn't find any news at this moment.</p>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* View More Button */}
// // //         <div className="text-center mt-5">
// // //           <button className="btn btn-link text-dark fw-bold text-decoration-none fs-5">
// // //             View More +
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* ================= STAY CONNECTED (Blue Section) ================= */}
// // //       <div className="stay-connected py-5" style={{backgroundColor: '#94cce9'}}>
// // //         <div className="container">
// // //           <h2 className="fw-bold mb-5">Stay Connected</h2>
// // //           <div className="row">
// // //             <div className="col-md-6 mb-4">
// // //                <h5 className="fw-bold mb-3">Core Law Blogs</h5>
// // //                <p className="text-muted w-75 mb-4">Stay informed about legal and regulatory developments that impact your business.</p>
// // //                <button className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold">VIEW OUR BLOGS</button>
// // //             </div>
// // //             <div className="col-md-6 mb-4">
// // //                <h5 className="fw-bold mb-3">Follow Us on Social Media</h5>
// // //                <p className="text-muted w-75 mb-4">Stay current with the latest legal insights, news, and happenings.</p>
// // //                <button className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold">SOCIAL MEDIA LIBRARY</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         .fw-serif { font-family: 'Georgia', serif; }
// // //         .news-hero { background: #fff; padding: 80px 0; }
// // //         .btn-media { border-radius: 0; background: #000; letter-spacing: 1px; font-size: 11px; }

// // //         .filter-bar { background: #333; padding: 25px 0; color: white; border-top: 5px solid #b88b4a; }
// // //         .search-box { position: relative; border-bottom: 1px solid #777; }
// // //         .search-box input { background: transparent; border: none; color: white; width: 100%; padding: 8px 0; outline: none; }
// // //         .search-box i { position: absolute; right: 0; top: 10px; color: #b88b4a; }
        
// // //         .filter-labels span { cursor: pointer; font-size: 12px; font-weight: 600; text-transform: uppercase; }
// // //         .filter-labels span:hover { color: #b88b4a; }

// // //         .news-title:hover { color: #000 !important; text-decoration: underline; }
// // //         .line { width: 35px; height: 1px; background: #ccc; }
        
// // //         .text-gold { color: #b88b4a; }
// // //       `}</style>
// // //     </>
// // //   );
// // // }

// // // export default NewsPressRelease;

// // import React, { useState, useEffect } from 'react';
// // import Head from 'next/head';
// // import Link from 'next/head';
// // import NextLink from 'next/link';
// // import { 
// //   getAllNews, 
// //   getAllCapabilitySubCategories, 
// //   getAllLocationCities,
// //   IMG_URL 
// // } from '../../services/authService';

// // function NewsPressRelease() {
// //   const [newsList, setNewsList] = useState([]);
// //   const [capabilities, setCapabilities] = useState([]);
// //   const [locations, setLocations] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [mounted, setMounted] = useState(false);

// //   // --- Filter States ---
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [activeFilterTab, setActiveFilterTab] = useState(null); 
// //   const [filters, setFilters] = useState({
// //     capability: '',
// //     location: '',
// //     date: '', // Specific date filter
// //     type: ''
// //   });

// //   useEffect(() => {
// //     setMounted(true);
// //     const fetchNewsData = async () => {
// //       setLoading(true);
// //       try {
// //         const [newsRes, capRes, locRes] = await Promise.all([
// //           getAllNews(),
// //           getAllCapabilitySubCategories(),
// //           getAllLocationCities()
// //         ]);

// //         if (newsRes?.status) setNewsList(newsRes.data);
// //         if (capRes?.success) setCapabilities(capRes.data);
// //         if (locRes?.success) setLocations(locRes.data);
// //       } catch (error) {
// //         console.error("Fetch Error:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchNewsData();
// //   }, []);

// //   if (!mounted) return null;

// //   // --- Filter Logic ---
// //   const filteredNews = newsList.filter(item => {
// //     // 1. Keyword Search
// //     const matchesSearch = (item.title || "").toLowerCase().includes(searchTerm.toLowerCase());
    
// //     // 2. Capability Filter
// //     let matchesCap = true;
// //     if (filters.capability) {
// //         try {
// //             const ids = JSON.parse(item.capabilityCategoryId || "[]");
// //             matchesCap = ids.includes(Number(filters.capability));
// //         } catch (e) { matchesCap = false; }
// //     }

// //     // 3. Location Filter
// //     let matchesLoc = true;
// //     if (filters.location) {
// //         try {
// //             const ids = JSON.parse(item.cityId || "[]");
// //             matchesLoc = ids.includes(Number(filters.location));
// //         } catch (e) { matchesLoc = false; }
// //     }

// //     // 4. Date Filter (Exact match with YYYY-MM-DD)
// //     let matchesDate = true;
// //     if (filters.date) {
// //         matchesDate = item.date === filters.date;
// //     }

// //     return matchesSearch && matchesCap && matchesLoc && matchesDate;
// //   });

// //   const toggleFilter = (tab) => {
// //     setActiveFilterTab(activeFilterTab === tab ? null : tab);
// //   };

// //   const handleFilterChange = (name, value) => {
// //     setFilters({ ...filters, [name]: value });
// //     // Date ke liye dropdown khula rehne dete hain taaki change kar sakein, 
// //     // baaki dropdowns band kar dete hain
// //     if (name !== 'date') setActiveFilterTab(null);
// //   };

// //   // Filter Clear karne ka option
// //   const clearFilters = () => {
// //     setFilters({ capability: '', location: '', date: '', type: '' });
// //     setSearchTerm('');
// //   };

// //   return (
// //     <>
// //       <Head><title>News & Insights | Core Law</title></Head>

// //       {/* HERO SECTION */}
// //       <div className="news-hero py-5 bg-white">
// //         <div className="container text-center pt-5">
// //           <h1 className="display-1 fw-serif" style={{fontFamily: 'Georgia, serif'}}>News</h1>
// //           <p className="lead fs-4">Our developing story.</p>
// //           <button className="btn btn-dark text-uppercase px-4 py-2 mt-3 fw-bold" style={{borderRadius: '0', fontSize: '11px'}}>
// //            <a href='/media-contacts'>MEDIA CONTACTS</a>
// //           </button>
// //         </div>
// //       </div>

// //       {/* FILTER BAR SECTION */}
// //       <div className="filter-section">
// //         <div className="container">
// //           <div className="row align-items-center py-4">
// //             {/* Keyword Search */}
// //             <div className="col-lg-5">
// //               <div className="search-box">
// //                 <input 
// //                   type="text" 
// //                   placeholder="Search News By Keyword" 
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //                 <i className="bi bi-search"></i>
// //               </div>
// //             </div>

// //             {/* Filter Labels */}
// //             <div className="col-lg-7">
// //               <div className="filter-labels-container">
// //                 <span className="filter-title">Filter News by:</span>
// //                 <div className="labels-group">
// //                   <span onClick={() => toggleFilter('capability')} className={activeFilterTab === 'capability' ? 'active' : ''}>
// //                     CAPABILITY <i className="bi bi-chevron-down ms-1"></i>
// //                   </span>
// //                   <span onClick={() => toggleFilter('location')} className={activeFilterTab === 'location' ? 'active' : ''}>
// //                     LOCATION <i className="bi bi-chevron-down ms-1"></i>
// //                   </span>
// //                   <span onClick={() => toggleFilter('professional')}>PROFESSIONAL <i className="bi bi-chevron-right ms-1"></i></span>
// //                   <span onClick={() => toggleFilter('date')} className={activeFilterTab === 'date' ? 'active' : ''}>
// //                     DATE <i className="bi bi-chevron-down ms-1"></i>
// //                   </span>
// //                   <span onClick={() => toggleFilter('type')}>TYPE <i className="bi bi-chevron-right ms-1"></i></span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* DYNAMIC DROPDOWN AREA */}
// //           {activeFilterTab && (
// //             <div className="active-dropdown-area pb-4">
// //               <div className="select-wrapper">
// //                 {activeFilterTab === 'capability' && (
// //                   <select 
// //                     className="form-select custom-select" 
// //                     value={filters.capability}
// //                     onChange={(e) => handleFilterChange('capability', e.target.value)}
// //                   >
// //                     <option value="">Select a Capability</option>
// //                     {capabilities.map(cap => (
// //                       <option key={cap.id} value={cap.id}>
// //                         {cap.subcategoryName} {/* Removed parentheses () */}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 )}

// //                 {activeFilterTab === 'location' && (
// //                   <select 
// //                     className="form-select custom-select" 
// //                     value={filters.location}
// //                     onChange={(e) => handleFilterChange('location', e.target.value)}
// //                   >
// //                     <option value="">Select a Location</option>
// //                     {locations.map(loc => (
// //                       <option key={loc.id} value={loc.id}>{loc.cityName}</option>
// //                     ))}
// //                   </select>
// //                 )}

// //                 {activeFilterTab === 'date' && (
// //                   <div className="date-filter-box d-flex gap-2">
// //                     <input 
// //                       type="date" 
// //                       className="form-control custom-select"
// //                       value={filters.date}
// //                       onChange={(e) => handleFilterChange('date', e.target.value)}
// //                     />
// //                     <button className="btn btn-gold" onClick={() => handleFilterChange('date', '')}>Reset Date</button>
// //                   </div>
// //                 )}

// //                 {['professional', 'type'].includes(activeFilterTab) && (
// //                     <div className="p-3 bg-white text-dark border">Filters for {activeFilterTab} coming soon...</div>
// //                 )}
// //               </div>
// //             </div>
// //           )}

// //           {/* Active Filters Display */}
// //           {(filters.capability || filters.location || filters.date) && (
// //             <div className="pb-3 text-white-50 small">
// //               Filtering by: {filters.date && `[Date: ${filters.date}] `} 
// //               <span className="text-warning cursor-pointer ms-2" onClick={clearFilters}>Clear All</span>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* NEWS LISTING */}
// //       <div className="container py-5 min-vh-100 bg-white">
// //         <h2 className="fw-bold mb-5 fs-2">Recent News</h2>
        
// //         {loading ? (
// //             <div className="text-center py-5">Loading News...</div>
// //         ) : filteredNews.length > 0 ? (
// //           filteredNews.map((item) => (
// //             <div key={item.id} className="news-item mb-5 pb-4 border-bottom">
// //               <div className="row align-items-start">
// //                 <div className="col-md-10">
// //                   <div className="small fw-bold text-uppercase mb-2">
// //                     <span className="me-2">{item.date}</span>
// //                     <span className="text-muted border-start ps-2">Press Release</span>
// //                   </div>
// //                   <NextLink href={`/news/${item.id}`}>
// //                     <a className="text-decoration-none">
// //                       <h3 className="news-title fw-bold" style={{color: '#b88b4a', fontSize: '24px'}}>{item.title}</h3>
// //                     </a>
// //                   </NextLink>
// //                   <div className="text-muted small excerpt" dangerouslySetInnerHTML={{ __html: item.textEditor }} />
// //                 </div>
// //                 <div className="col-md-2 text-md-end mt-2 mt-md-0">
// //                   <div className="small text-muted d-flex align-items-center justify-content-md-end">
// //                     <span className="line d-none d-md-inline-block"></span> 1 min read
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <div className="text-center py-5">
// //             <h3>No results found.</h3>
// //             <p className="text-muted">Try changing your filters or keyword.</p>
// //           </div>
// //         )}
// //       </div>

// //       <style jsx>{`
// //         .filter-section { background: #333; color: white; border-top: 5px solid #b88b4a; }
// //         .search-box { position: relative; border-bottom: 1px solid #777; }
// //         .search-box input { background: transparent; border: none; color: white; width: 100%; padding: 10px 0; outline: none; font-size: 1.2rem; }
// //         .search-box i { position: absolute; right: 0; top: 15px; color: #b88b4a; }
// //         .filter-labels-container { display: flex; align-items: center; justify-content: flex-end; gap: 20px; }
// //         .filter-title { font-weight: bold; color: #94cce9; font-size: 1.1rem; }
// //         .labels-group { display: flex; gap: 15px; }
// //         .labels-group span { cursor: pointer; font-size: 13px; font-weight: 600; text-transform: uppercase; transition: 0.3s; }
// //         .labels-group span:hover, .labels-group span.active { color: #b88b4a; }
// //         .custom-select { background-color: white; border: 1px solid #b88b4a; border-radius: 0; height: 50px; font-weight: 500; }
// //         .btn-gold { background: #b88b4a; color: white; border-radius: 0; }
// //         .news-title:hover { color: #000 !important; text-decoration: underline; }
// //         .line { width: 35px; height: 1px; background: #ccc; display: inline-block; margin-right: 10px; }
// //         .cursor-pointer { cursor: pointer; }
// //         .excerpt { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
// //       `}</style>
// //     </>
// //   );
// // }

// // export default NewsPressRelease;

// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { 
//   getAllNews, 
//   getAllCapabilitySubCategories, 
//   getAllLocationCities,
//   IMG_URL 
// } from '../../services/authService';

// function NewsIndex() {
//   const [newsList, setNewsList] = useState([]);
//   const [capabilities, setCapabilities] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   // --- Filter States ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilterTab, setActiveFilterTab] = useState(null); 
//   const [filters, setFilters] = useState({
//     capability: '',
//     location: '',
//     date: '', 
//     type: ''
//   });

//   // --- Helper: Create Slug from Title ---
//   const createSlug = (text) => {
//     return text?.toLowerCase()
//       .trim()
//       .replace(/\s+/g, '-')           // Replace spaces with -
//       .replace(/[^\w-]+/g, '')       // Remove all non-word chars
//       .replace(/--+/g, '-');         // Replace multiple - with single -
//   };

//   useEffect(() => {
//     setMounted(true);
//     const fetchAllData = async () => {
//       setLoading(true);
//       try {
//         const [newsRes, capRes, locRes] = await Promise.all([
//           getAllNews(),
//           getAllCapabilitySubCategories(),
//           getAllLocationCities()
//         ]);

//         if (newsRes?.status) setNewsList(newsRes.data);
//         // Correct path for sub-categories based on your logs
//         if (capRes?.success) setCapabilities(capRes.data?.data || capRes.data || []);
//         if (locRes?.success) setLocations(locRes.data || []);
//       } catch (error) {
//         console.error("Fetch Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAllData();
//   }, []);

//   if (!mounted) return null;

//   // --- Filtering Logic ---
//   const filteredNews = newsList.filter(item => {
//     const matchesSearch = (item.title || "").toLowerCase().includes(searchTerm.toLowerCase());
    
//     let matchesCap = true;
//     if (filters.capability) {
//         try {
//             const ids = JSON.parse(item.capabilityCategoryId || "[]");
//             matchesCap = ids.includes(Number(filters.capability));
//         } catch (e) { matchesCap = false; }
//     }

//     let matchesLoc = true;
//     if (filters.location) {
//         try {
//             const ids = JSON.parse(item.cityId || "[]");
//             matchesLoc = ids.includes(Number(filters.location));
//         } catch (e) { matchesLoc = false; }
//     }

//     let matchesDate = true;
//     if (filters.date) {
//         matchesDate = item.date === filters.date;
//     }

//     return matchesSearch && matchesCap && matchesLoc && matchesDate;
//   });

//   const toggleFilter = (tab) => {
//     setActiveFilterTab(activeFilterTab === tab ? null : tab);
//   };

//   const handleFilterChange = (name, value) => {
//     setFilters({ ...filters, [name]: value });
//     if (name !== 'date') setActiveFilterTab(null); 
//   };

//   return (
//     <>
//       <Head>
//         <title>News & Press Releases | Core Law</title>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
//       </Head>

//       {/* HERO SECTION */}
//       <div className="news-hero py-5 bg-white">
//         <div className="container text-center pt-5">
//           <h1 className="display-1 fw-serif" style={{fontFamily: 'Georgia, serif'}}>News</h1>
//           <p className="lead fs-4">Our developing story.</p>
//           <Link href="/media-contacts">
//             <a className="btn btn-dark text-uppercase px-4 py-2 mt-3 fw-bold" style={{borderRadius: '0', fontSize: '11px'}}>
//               MEDIA CONTACTS
//             </a>
//           </Link>
//         </div>
//       </div>

//       {/* FILTER BAR SECTION */}
//       <div className="filter-section">
//         <div className="container">
//           <div className="row align-items-center py-4">
//             {/* Search Box */}
//             <div className="col-lg-5">
//               <div className="search-box">
//                 <input 
//                   type="text" 
//                   placeholder="Search News By Keyword" 
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <i className="bi bi-search"></i>
//               </div>
//             </div>

//             {/* Filter Labels */}
//             <div className="col-lg-7">
//               <div className="filter-labels-container">
//                 <span className="filter-title">Filter News by:</span>
//                 <div className="labels-group">
//                   <span onClick={() => toggleFilter('capability')} className={activeFilterTab === 'capability' ? 'active' : ''}>
//                     CAPABILITY <i className="bi bi-chevron-down ms-1"></i>
//                   </span>
//                   <span onClick={() => toggleFilter('location')} className={activeFilterTab === 'location' ? 'active' : ''}>
//                     LOCATION <i className="bi bi-chevron-down ms-1"></i>
//                   </span>
//                   <span onClick={() => toggleFilter('professional')}>PROFESSIONAL <i className="bi bi-chevron-right ms-1"></i></span>
//                   <span onClick={() => toggleFilter('date')} className={activeFilterTab === 'date' ? 'active' : ''}>
//                     DATE <i className="bi bi-chevron-down ms-1"></i>
//                   </span>
//                   <span onClick={() => toggleFilter('type')}>TYPE <i className="bi bi-chevron-right ms-1"></i></span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* DYNAMIC DROPDOWNS */}
//           {activeFilterTab && (
//             <div className="active-dropdown-area pb-4">
//               {activeFilterTab === 'capability' && (
//                 <select 
//                   className="form-select custom-select" 
//                   value={filters.capability}
//                   onChange={(e) => handleFilterChange('capability', e.target.value)}
//                 >
//                   <option value="">Select a Capability</option>
//                   {capabilities.map(cap => (
//                     <option key={cap.id} value={cap.id}>{cap.subcategoryName}</option>
//                   ))}
//                 </select>
//               )}

//               {activeFilterTab === 'location' && (
//                 <select 
//                   className="form-select custom-select" 
//                   value={filters.location}
//                   onChange={(e) => handleFilterChange('location', e.target.value)}
//                 >
//                   <option value="">Select a Location</option>
//                   {locations.map(loc => (
//                     <option key={loc.id} value={loc.id}>{loc.cityName}</option>
//                   ))}
//                 </select>
//               )}

//               {activeFilterTab === 'date' && (
//                 <div className="d-flex gap-2 align-items-center">
//                   <input 
//                     type="date" 
//                     className="form-control custom-select w-50"
//                     value={filters.date}
//                     onChange={(e) => handleFilterChange('date', e.target.value)}
//                   />
//                   <button className="btn btn-gold text-white px-3 h-100" onClick={() => handleFilterChange('date', '')}>RESET</button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* NEWS LISTING */}
//       <div className="container py-5 min-vh-100 bg-white">
//         <h2 className="fw-bold mb-5 fs-2">Recent News</h2>
        
//         {loading ? (
//             <div className="text-center py-5">Loading News...</div>
//         ) : filteredNews.length > 0 ? (
//           filteredNews.map((item) => (
//             <div key={item.id} className="news-item mb-5 pb-4 border-bottom">
//               <div className="row align-items-start">
//                 <div className="col-md-10">
//                   <div className="small fw-bold text-uppercase mb-2">
//                     <span className="me-2">{item.date}</span>
//                     <span className="text-muted border-start ps-2">Press Release</span>
//                   </div>
                  
//                   {/* Link with Slug */}
//                   <Link href={`/news/${createSlug(item.title)}`}>
//                     <a className="text-decoration-none">
//                       <h3 className="news-title fw-bold" style={{color: '#b88b4a', fontSize: '24px'}}>{item.title}</h3>
//                     </a>
//                   </Link>

//                   <div 
//                     className="text-muted small excerpt" 
//                     dangerouslySetInnerHTML={{ __html: item.textEditor }} 
//                   />
//                 </div>
//                 <div className="col-md-2 text-md-end mt-2 mt-md-0">
//                   <div className="small text-muted d-flex align-items-center justify-content-md-end">
//                     <span className="line d-none d-md-inline-block"></span> 1 min read
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center py-5"><h3>No news found for the selected criteria.</h3></div>
//         )}
//       </div>

//       {/* FOOTER SECTION */}
//       <div className="stay-connected py-5" style={{backgroundColor: '#94cce9'}}>
//         <div className="container">
//           <h2 className="fw-bold mb-5">Stay Connected</h2>
//           <div className="row">
//             <div className="col-md-6 mb-4">
//                <h5 className="fw-bold mb-3">Core Law Blogs</h5>
//                <p className="text-muted w-75 mb-4">Stay informed about legal and regulatory developments impacting your business.</p>
//                <button className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold">VIEW OUR BLOGS</button>
//             </div>
//             <div className="col-md-6 mb-4">
//                <h5 className="fw-bold mb-3">Follow Us on Social Media</h5>
//                <p className="text-muted w-75 mb-4">Stay current with the latest legal insights, news, and occurrences.</p>
//                <button className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold">SOCIAL MEDIA LIBRARY</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .filter-section { background: #333; color: white; border-top: 5px solid #b88b4a; }
//         .search-box { position: relative; border-bottom: 1px solid #777; }
//         .search-box input {
//           background: transparent; border: none; color: white;
//           width: 100%; padding: 10px 0; outline: none; font-size: 1.2rem;
//         }
//         .search-box i { position: absolute; right: 0; top: 15px; color: #b88b4a; }
//         .filter-labels-container { display: flex; align-items: center; justify-content: flex-end; gap: 20px; }
//         .filter-title { font-weight: bold; color: #94cce9; font-size: 1.1rem; }
//         .labels-group { display: flex; gap: 15px; }
//         .labels-group span { cursor: pointer; font-size: 13px; font-weight: 600; text-transform: uppercase; transition: 0.3s; }
//         .labels-group span:hover, .labels-group span.active { color: #b88b4a; }
//         .custom-select { background-color: white; border: 1px solid #b88b4a; border-radius: 0; height: 50px; font-weight: 500; outline: none; }
//         .btn-gold { background: #b88b4a; border: none; border-radius: 0; }
//         .news-title:hover { color: #000 !important; text-decoration: underline; }
//         .line { width: 35px; height: 1px; background: #ccc; display: inline-block; margin-right: 10px; }
//         .excerpt { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
//       `}</style>
//     </>
//   );
// }

// export default NewsIndex;


import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  getAllNews, 
  getAllCapabilitySubCategories, 
  getAllLocationCities,
  IMG_URL 
} from '../../services/authService';

function NewsIndex() {
  const [newsList, setNewsList] = useState([]);
  const [capabilities, setCapabilities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState(null); 
  const [filters, setFilters] = useState({ capability: '', location: '', date: '', type: '' });

  const createSlug = (text) => text?.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-');

  useEffect(() => {
    setMounted(true);
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [newsRes, capRes, locRes] = await Promise.all([
          getAllNews(),
          getAllCapabilitySubCategories(),
          getAllLocationCities()
        ]);
        if (newsRes?.status) setNewsList(newsRes.data);
        if (capRes?.success) setCapabilities(capRes.data?.data || capRes.data || []);
        if (locRes?.success) setLocations(locRes.data || []);
      } catch (error) { console.error(error); } finally { setLoading(false); }
    };
    fetchAllData();
  }, []);

  if (!mounted) return null;

  const filteredNews = newsList.filter(item => {
    const matchesSearch = (item.title || "").toLowerCase().includes(searchTerm.toLowerCase());
    let matchesCap = filters.capability ? JSON.parse(item.capabilityCategoryId || "[]").includes(Number(filters.capability)) : true;
    let matchesLoc = filters.location ? JSON.parse(item.cityId || "[]").includes(Number(filters.location)) : true;
    let matchesDate = filters.date ? item.date === filters.date : true;
    return matchesSearch && matchesCap && matchesLoc && matchesDate;
  });

  return (
    <div className="bg-white">
      <Head><title>News | Core Law</title></Head>

      {/* HERO SECTION */}
      <section className="py-5 text-center bg-white border-bottom">
        <div className="container py-lg-5">
          <h1 className="font-serif display-3 mb-3">News</h1>
          <p className="lead mb-4 text-secondary">Our developing story.</p>
          <Link href="/media-contacts">
            <a className="btn btn-dark rounded-0 px-4 py-2 fw-bold small">MEDIA CONTACTS</a>
          </Link>
        </div>
      </section>

      {/* FILTER BAR SECTION */}
      <section className="py-4 border-top" style={{ backgroundColor: 'var(--text-dark)', borderTop: '5px solid var(--primary-gold)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <div className="d-flex align-items-center border-bottom border-secondary pb-2">
                <input 
                  type="text" 
                  placeholder="Search News By Keyword" 
                  className="bg-transparent border-0 text-white w-100 outline-none shadow-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="bi bi-search text-gold"></i>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="d-flex flex-wrap justify-content-lg-end align-items-center gap-3 text-white">
                <span className="fw-bold d-none d-md-block" style={{ color: 'var(--bg-light)' }}>Filter News by:</span>
                <div className="d-flex flex-wrap gap-3">
                  {['capability', 'location', 'date'].map((tab) => (
                    <span 
                      key={tab}
                      onClick={() => setActiveFilterTab(activeFilterTab === tab ? null : tab)}
                      className="cursor-pointer text-uppercase small fw-bold"
                      style={{ color: activeFilterTab === tab ? 'var(--primary-gold)' : 'white', cursor: 'pointer' }}
                    >
                      {tab} <i className={`bi bi-chevron-${activeFilterTab === tab ? 'up' : 'down'} ms-1`}></i>
                    </span>
                  ))}
                  <span className="text-uppercase small fw-bold opacity-50">Professional <i className="bi bi-chevron-right ms-1"></i></span>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC DROPDOWNS */}
          {activeFilterTab && (
            <div className="row mt-3 animate__animated animate__fadeIn">
              <div className="col-12">
                {activeFilterTab === 'capability' && (
                  <select className="form-select rounded-0 border-gold shadow-none" value={filters.capability} onChange={(e) => { setFilters({...filters, capability: e.target.value}); setActiveFilterTab(null); }}>
                    <option value="">Select a Capability</option>
                    {capabilities.map(cap => <option key={cap.id} value={cap.id}>{cap.subcategoryName}</option>)}
                  </select>
                )}
                {activeFilterTab === 'location' && (
                  <select className="form-select rounded-0 border-gold shadow-none" value={filters.location} onChange={(e) => { setFilters({...filters, location: e.target.value}); setActiveFilterTab(null); }}>
                    <option value="">Select a Location</option>
                    {locations.map(loc => <option key={loc.id} value={loc.id}>{loc.cityName}</option>)}
                  </select>
                )}
                {activeFilterTab === 'date' && (
                  <div className="d-flex gap-2">
                    <input type="date" className="form-control rounded-0 border-gold shadow-none" value={filters.date} onChange={(e) => setFilters({...filters, date: e.target.value})} />
                    <button className="btn btn-warning rounded-0" onClick={() => {setFilters({...filters, date: ''}); setActiveFilterTab(null);}}>RESET</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NEWS LISTING */}
      <section className="container py-5 min-vh-100">
        <h2 className="fw-bold mb-5">Recent News</h2>
        {loading ? (
          <div className="text-center py-5"><div className="spinner-border text-gold"></div></div>
        ) : filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <div key={item.id} className="news-item border-bottom py-4 mb-2">
              <div className="row align-items-start g-3">
                <div className="col-md-10">
                  <div className="d-flex align-items-center gap-2 mb-2 small fw-bold text-uppercase">
                    <span>{item.date}</span>
                    <span className="border-start ps-2 text-muted">Press Release</span>
                  </div>
                  <Link href={`/news/${createSlug(item.title)}`}>
                    <a className="d-block text-decoration-none">
                      <h3 className="font-serif text-gold mb-3">{item.title}</h3>
                    </a>
                  </Link>
                  <div className="text-secondary small line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: item.textEditor }} />
                </div>
                <div className="col-md-2 text-md-end text-muted small mt-md-4">
                  <span className="d-none d-md-inline-block border-top me-2" style={{ width: '30px' }}></span> 1 min read
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5"><h3>No results found.</h3></div>
        )}
      </section>

      {/* STAY CONNECTED SECTION */}
      <section className="py-5" style={{ backgroundColor: '#94cce9' }}>
        <div className="container py-4 text-dark">
          <h2 className="fw-bold mb-5">Stay Connected</h2>
          <div className="row g-5">
            <div className="col-md-6">
              <h5 className="fw-bold mb-3">Core Law Blogs</h5>
              <p className="mb-4 text-dark opacity-75">Stay informed about legal and regulatory developments impacting your business.</p>
              <button className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold small">VIEW OUR BLOGS</button>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold mb-3">Follow Us on Social Media</h5>
              <p className="mb-4 text-dark opacity-75">Stay current with the latest legal insights, news, and occurrences.</p>
              <button className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold small">SOCIAL MEDIA LIBRARY</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsIndex;