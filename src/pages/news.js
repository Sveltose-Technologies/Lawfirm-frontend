
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';

// // --- 1. MOCK DATA ---
// const excelData = [
//   {
//     id: 1,
//     date: "2024-12-05",
//     type: "Press Release",
//     subject: "Core Law Expands Global Footprint with New Office in London",
//     mediaType: "image", 
//       src: "/assets/images/news1.png",
//     professionals: ["Rajesh Oberoi", "Sarah Jenkins"],
//     capabilities: ["Corporate Expansion", "International Law"],
//   },
//   {
//     id: 2,
//     date: "2024-11-20",
//     type: "News",
//     subject: "Video Recap: Annual Legal Tech Summit 2024 Highlights",
//     mediaType: "video",
//     // Using a reliable sample video link
//     src: "/assets/videos/news.mp4",
//     professionals: ["Vikram Singhania"],
//     capabilities: ["Technology Law", "IP Rights"],
//   },
//   {
//     id: 3,
//     date: "2023-10-15",
//     type: "Publication",
//     subject: "Understanding New Taxation Laws for Startups in India",
//     mediaType: "image",
//     src: "/assets/images/news2.png",
//     professionals: ["Meera Kapoor", "Amit Verma"],
//     capabilities: ["Taxation", "Startups"],
//   },
//   {
//     id: 4,
//     date: "2023-08-10",
//     type: "Press Release",
//     subject: "Core Law Named 'Firm of the Year' by Asian Legal Business",
//     mediaType: "image",
//     src: "/assets/images/news3.png",
//     professionals: ["Firm Wide"],
//     capabilities: ["Awards", "Recognition"],
//   },
//   {
//     id: 5,
//     date: "2022-05-12",
//     type: "News",
//     subject: "Charity Gala: Supporting Education for Underprivileged Children",
//     mediaType: "video",
//    src: "/assets/videos/news.mp4",
//     professionals: ["Anjali Desai"],
//     capabilities: ["Pro Bono", "CSR"],
//   }
// ];

// function NewsPressRelease() {
  
//   // --- STATES ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterYear, setFilterYear] = useState('All');
//   const [filterType, setFilterType] = useState('All');
//   const [mounted, setMounted] = useState(false);

//   // --- HYDRATION FIX ---
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // --- DATE FORMATTER ---
//   const getDateParts = (dateString) => {
//     const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
//     const d = new Date(dateString);
//     return {
//       day: d.getDate(),
//       month: months[d.getMonth()],
//       year: d.getFullYear()
//     };
//   };

//   // --- DERIVE YEARS ---
//   const years = ['All', ...new Set(excelData.map(item => new Date(item.date).getFullYear()))].sort().reverse();

//   // --- FILTER LOGIC ---
//   const filteredData = excelData.filter(item => {
//     const itemYear = new Date(item.date).getFullYear().toString();
//     const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesYear = filterYear === 'All' || itemYear === filterYear;
//     const matchesType = filterType === 'All' || item.type === filterType;
//     return matchesSearch && matchesYear && matchesType;
//   });

//   const handlePrint = () => { if (typeof window !== "undefined") window.print(); };
//   const shareUrl = "https://corelaw.com/news";

//   if (!mounted) return null;

//   return (
//     <>
//       <Head>
//         <title>News & Insights | Core Law</title>
//       </Head>

//       {/* ==========================================================================
//           1. PREMIUM BANNER
//       ========================================================================== */}
//       <div className="inner-banner-section d-flex align-items-center justify-content-center" style={{
//           backgroundImage: 'linear-gradient(to right, rgba(10, 28, 56, 0.9), rgba(10, 28, 56, 0.7)), url(/assets/images/news-banner.png)', 
//           minHeight: '400px', 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           textAlign: 'center'
//         }}>
//         <div className="container">
//            <span className="text-warning fw-bold letter-spacing-2 text-uppercase">Stay Informed</span>
//            <h1 className="text-white display-3 fw-bold mt-2">News & Insights</h1>
//            <p className="text-white-50 lead mx-auto" style={{maxWidth: '600px'}}>
//              Discover our latest achievements, legal updates, and press releases.
//            </p>
//         </div>
//       </div>

//       {/* ==========================================================================
//           2. SEARCH & FILTER BAR (Floating Effect)
//       ========================================================================== */}
//       <div className="container" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
//         <div className="card shadow-lg border-0 rounded-3">
//             <div className="card-body p-4">
//                 <div className="row g-3 align-items-end">
                    
//                     {/* Search */}
//                     <div className="col-lg-5">
//                         <label className="fw-bold small text-secondary mb-1">SEARCH TOPICS</label>
//                         <div className="input-group">
//                             <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-warning"></i></span>
//                             <input 
//                                 type="text" 
//                                 className="form-control border-start-0 ps-0" 
//                                 placeholder="Search headlines..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     {/* Filter Year */}
//                     <div className="col-lg-3">
//                         <label className="fw-bold small text-secondary mb-1">YEAR</label>
//                         <select className="form-select" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
//                             {years.map(year => <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>)}
//                         </select>
//                     </div>

//                     {/* Filter Type */}
//                     <div className="col-lg-4">
//                         <label className="fw-bold small text-secondary mb-1">CATEGORY</label>
//                         <select className="form-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//                             <option value="All">All Categories</option>
//                             <option value="Press Release">Press Release</option>
//                             <option value="News">News</option>
//                             <option value="Publication">Publication</option>
//                         </select>
//                     </div>

//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ==========================================================================
//           3. NEWS CARDS (Design & Video Logic)
//       ========================================================================== */}
//       <div className="container py-5 mt-4">
//         <div className="news-list">
            
//             {filteredData.length > 0 ? (
//                 filteredData.map((item) => {
//                     const { day, month, year } = getDateParts(item.date);

//                     return (
//                         <div key={item.id} className="card border-0 shadow-sm mb-4 overflow-hidden hover-lift rounded-3">
//                             <div className="row g-0">
                                
//                                 {/* A. Date Block (Left) */}
//                                 <div className="col-lg-2 bg-light d-flex flex-column justify-content-center align-items-center p-3 border-end">
//                                     <h2 className="display-5 fw-bold" style={{color: '#0a1c38'}}>{day}</h2>
//                                     <span className="h5 text-muted text-uppercase mb-2">{month}</span>
//                                     <span className="badge rounded-pill px-3 py-2" style={{backgroundColor: '#de9f57'}}>{year}</span>
//                                     <span className="badge bg-secondary mt-2 small">{item.type}</span>
//                                 </div>

//                                 {/* B. Media (Video/Image) */}
//                                 <div className="col-lg-4 position-relative bg-black d-flex align-items-center justify-content-center">
//                                     {item.mediaType === 'video' ? (
//                                         <div className="ratio ratio-16x9 w-100 h-100">
//                                             {/* HTML5 Video with Controls - Click to Play */}
//                                             <video 
//                                                 controls 
//                                                 preload="metadata" 
//                                                 playsInline 
//                                                 className="w-100 h-100 object-fit-cover"
//                                                 style={{cursor: 'pointer'}}
//                                             >
//                                                 <source src={item.src} type="video/mp4" />
//                                                 Your browser does not support the video tag.
//                                             </video>
//                                         </div>
//                                     ) : (
//                                         <img src={item.src} alt="News" className="w-100 h-100 object-fit-cover" style={{minHeight: '220px'}} />
//                                     )}
//                                 </div>

//                                 {/* C. Content */}
//                                 <div className="col-lg-4 p-4 d-flex flex-column justify-content-center">
//                                     <h4 className="fw-bold mb-3 hover-text-gold" style={{ color: '#0a1c38', cursor:'pointer' }}>{item.subject}</h4>
                                    
//                                     <div className="mb-2">
//                                         <i className="bi bi-person-fill text-warning me-2"></i>
//                                         <span className="small fw-bold text-muted">Professionals:</span>
//                                         <span className="small ms-1">{item.professionals.join(", ")}</span>
//                                     </div>
//                                     <div>
//                                         <i className="bi bi-briefcase-fill text-warning me-2"></i>
//                                         <span className="small fw-bold text-muted">Capabilities:</span>
//                                         <span className="small ms-1">{item.capabilities.join(", ")}</span>
//                                     </div>
//                                 </div>

//                                 {/* D. Share Actions */}
//                                 <div className="col-lg-2 bg-light d-flex flex-lg-column flex-row justify-content-center align-items-center p-3 border-start gap-3">
//                                     <span className="text-muted small fw-bold d-none d-lg-block">SHARE</span>
                                    
//                                     <div className="d-flex flex-lg-column flex-row gap-3">
//                                         <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-facebook fs-5"></i></a>
//                                         <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-twitter fs-5"></i></a>
//                                         <a href={`https://linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-linkedin fs-5"></i></a>
//                                     </div>
                                    
//                                     <div className="border-top border-lg-0 w-50 my-2 d-none d-lg-block"></div>
                                    
//                                     <button onClick={handlePrint} className="btn btn-outline-dark btn-sm rounded-pill px-3" title="Print News">
//                                         <i className="bi bi-printer me-1"></i> Print
//                                     </button>
//                                 </div>

//                             </div>
//                         </div>
//                     );
//                 })
//             ) : (
//                 <div className="text-center py-5">
//                     <div className="mb-3">
//                         <i className="bi bi-journal-x fs-1 text-muted"></i>
//                     </div>
//                     <h3 className="text-muted">No updates found.</h3>
//                     <p className="text-muted">Try adjusting your search or filters.</p>
//                     <button className="btn text-white mt-2" style={{backgroundColor: '#0a1c38'}} onClick={() => {setFilterYear('All'); setSearchTerm('');}}>
//                         View All News
//                     </button>
//                 </div>
//             )}
            
//         </div>
//       </div>
      
//       {/* CSS Styles */}
//       <style jsx>{`
//         .letter-spacing-2 { letter-spacing: 2px; }
        
//         /* Card Hover Effect */
//         .hover-lift {
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .hover-lift:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
//         }

//         /* Text Hover */
//         .hover-text-gold:hover {
//             color: #de9f57 !important;
//             transition: color 0.2s ease;
//         }

//         /* Icon Hover */
//         .hover-icon:hover {
//             color: #0a1c38 !important;
//             transform: scale(1.2);
//             transition: all 0.2s ease;
//         }
//       `}</style>

//     </>
//   )
// }

// export default NewsPressRelease;

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// --- 1. MOCK DATA ---
const excelData = [
  {
    id: 1,
    date: "2024-12-05",
    type: "Press Release",
    subject: "Core Law Expands Global Footprint with New Office in London",
    mediaType: "image", 
      src: "/assets/images/news1.png",
    professionals: ["Rajesh Oberoi", "Sarah Jenkins"],
    capabilities: ["Corporate Expansion", "International Law"],
  },
  {
    id: 2,
    date: "2024-11-20",
    type: "News",
    subject: "Video Recap: Annual Legal Tech Summit 2024 Highlights",
    mediaType: "video",
    src: "/assets/videos/news.mp4",
    professionals: ["Vikram Singhania"],
    capabilities: ["Technology Law", "IP Rights"],
  },
  {
    id: 3,
    date: "2023-10-15",
    type: "Publication",
    subject: "Understanding New Taxation Laws for Startups in India",
    mediaType: "image",
    src: "/assets/images/news2.png",
    professionals: ["Meera Kapoor", "Amit Verma"],
    capabilities: ["Taxation", "Startups"],
  },
  {
    id: 4,
    date: "2023-08-10",
    type: "Press Release",
    subject: "Core Law Named 'Firm of the Year' by Asian Legal Business",
    mediaType: "image",
    src: "/assets/images/news3.png",
    professionals: ["Firm Wide"],
    capabilities: ["Awards", "Recognition"],
  },
  {
    id: 5,
    date: "2022-05-12",
    type: "News",
    subject: "Charity Gala: Supporting Education for Underprivileged Children",
    mediaType: "video",
   src: "/assets/videos/news.mp4",
    professionals: ["Anjali Desai"],
    capabilities: ["Pro Bono", "CSR"],
  }
];

function NewsPressRelease() {
  
  // --- STATES ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [mounted, setMounted] = useState(false);

  // --- HYDRATION FIX ---
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- DATE FORMATTER ---
  const getDateParts = (dateString) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const d = new Date(dateString);
    return {
      day: d.getDate(),
      month: months[d.getMonth()],
      year: d.getFullYear()
    };
  };

  // --- DERIVE YEARS ---
  const years = ['All', ...new Set(excelData.map(item => new Date(item.date).getFullYear()))].sort().reverse();

  // --- FILTER LOGIC ---
  const filteredData = excelData.filter(item => {
    const itemYear = new Date(item.date).getFullYear().toString();
    const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === 'All' || itemYear === filterYear;
    const matchesType = filterType === 'All' || item.type === filterType;
    return matchesSearch && matchesYear && matchesType;
  });

  const handlePrint = () => { if (typeof window !== "undefined") window.print(); };
  const shareUrl = "https://corelaw.com/news";

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>News & Insights | Core Law</title>
      </Head>

      {/* ==========================================================================
          1. PREMIUM BANNER
      ========================================================================== */}
      <div className="inner-banner-section d-flex align-items-center justify-content-center">
        <div className="container">
           <span className="text-warning fw-bold letter-spacing-2 text-uppercase">Stay Informed</span>
           <h1 className="text-white display-3 fw-bold mt-2">News & Insights</h1>
           <p className="text-white-50 lead mx-auto lead-text">
             Discover our latest achievements, legal updates, and press releases.
           </p>
        </div>
      </div>

      {/* ==========================================================================
          2. SEARCH & FILTER BAR (Floating Effect)
      ========================================================================== */}
      <div className="container floating-search-container">
        <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4">
                <div className="row g-3 align-items-end">
                    
                    {/* Search */}
                    <div className="col-lg-5">
                        <label className="fw-bold small text-secondary mb-1">SEARCH TOPICS</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-warning"></i></span>
                            <input 
                                type="text" 
                                className="form-control border-start-0 ps-0" 
                                placeholder="Search headlines..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Filter Year */}
                    <div className="col-lg-3">
                        <label className="fw-bold small text-secondary mb-1">YEAR</label>
                        <select className="form-select" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
                            {years.map(year => <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>)}
                        </select>
                    </div>

                    {/* Filter Type */}
                    <div className="col-lg-4">
                        <label className="fw-bold small text-secondary mb-1">CATEGORY</label>
                        <select className="form-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                            <option value="All">All Categories</option>
                            <option value="Press Release">Press Release</option>
                            <option value="News">News</option>
                            <option value="Publication">Publication</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
      </div>

      {/* ==========================================================================
          3. NEWS CARDS (Design & Video Logic)
      ========================================================================== */}
      <div className="container py-5 mt-4">
        <div className="news-list">
            
            {filteredData.length > 0 ? (
                filteredData.map((item) => {
                    const { day, month, year } = getDateParts(item.date);

                    return (
                        <div key={item.id} className="card border-0 shadow-sm mb-4 overflow-hidden hover-lift rounded-3">
                            <div className="row g-0">
                                
                                {/* A. Date Block (Left) */}
                                <div className="col-lg-2 bg-light d-flex flex-column justify-content-center align-items-center p-3 border-end">
                                    <h2 className="display-5 fw-bold text-primary-dark">{day}</h2>
                                    <span className="h5 text-muted text-uppercase mb-2">{month}</span>
                                    <span className="badge rounded-pill px-3 py-2 bg-gold">{year}</span>
                                    <span className="badge bg-secondary mt-2 small">{item.type}</span>
                                </div>

                                {/* B. Media (Video/Image) */}
                                <div className="col-lg-4 position-relative bg-black d-flex align-items-center justify-content-center">
                                    {item.mediaType === 'video' ? (
                                        <div className="ratio ratio-16x9 w-100 h-100">
                                            {/* HTML5 Video with Controls - Click to Play */}
                                            <video 
                                                controls 
                                                preload="metadata" 
                                                playsInline 
                                                className="w-100 h-100 object-fit-cover video-element"
                                            >
                                                <source src={item.src} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    ) : (
                                        <img src={item.src} alt="News" className="w-100 h-100 object-fit-cover media-img" />
                                    )}
                                </div>

                                {/* C. Content */}
                                <div className="col-lg-4 p-4 d-flex flex-column justify-content-center">
                                    <h4 className="fw-bold mb-3 hover-text-gold text-primary-dark cursor-pointer">{item.subject}</h4>
                                    
                                    <div className="mb-2">
                                        <i className="bi bi-person-fill text-warning me-2"></i>
                                        <span className="small fw-bold text-muted">Professionals:</span>
                                        <span className="small ms-1">{item.professionals.join(", ")}</span>
                                    </div>
                                    <div>
                                        <i className="bi bi-briefcase-fill text-warning me-2"></i>
                                        <span className="small fw-bold text-muted">Capabilities:</span>
                                        <span className="small ms-1">{item.capabilities.join(", ")}</span>
                                    </div>
                                </div>

                                {/* D. Share Actions */}
                                <div className="col-lg-2 bg-light d-flex flex-lg-column flex-row justify-content-center align-items-center p-3 border-start gap-3">
                                    <span className="text-muted small fw-bold d-none d-lg-block">SHARE</span>
                                    
                                    <div className="d-flex flex-lg-column flex-row gap-3">
                                        <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-facebook fs-5"></i></a>
                                        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-twitter fs-5"></i></a>
                                        <a href={`https://linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-icon"><i className="bi bi-linkedin fs-5"></i></a>
                                    </div>
                                    
                                    <div className="border-top border-lg-0 w-50 my-2 d-none d-lg-block"></div>
                                    
                                    <button onClick={handlePrint} className="btn btn-outline-dark btn-sm rounded-pill px-3" title="Print News">
                                        <i className="bi bi-printer me-1"></i> Print
                                    </button>
                                </div>

                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="text-center py-5">
                    <div className="mb-3">
                        <i className="bi bi-journal-x fs-1 text-muted"></i>
                    </div>
                    <h3 className="text-muted">No updates found.</h3>
                    <p className="text-muted">Try adjusting your search or filters.</p>
                    <button className="btn text-white mt-2 bg-primary-dark" onClick={() => {setFilterYear('All'); setSearchTerm('');}}>
                        View All News
                    </button>
                </div>
            )}
            
        </div>
      </div>
      
      {/* CSS Styles */}
      <style jsx>{`
        /* Global & Banner */
        .inner-banner-section {
          background-image: linear-gradient(to right, rgba(10, 28, 56, 0.9), rgba(10, 28, 56, 0.7)), url(/assets/images/news-banner.png);
          min-height: 400px;
          background-size: cover;
          background-position: center;
          text-align: center;
        }

        .letter-spacing-2 { letter-spacing: 2px; }
        .lead-text { max-width: 600px; }

        /* Floating Search */
        .floating-search-container {
           margin-top: -50px;
           position: relative;
           z-index: 10;
        }

        /* Colors */
        .text-primary-dark { color: #0a1c38; }
        .bg-primary-dark { background-color: #0a1c38; }
        .bg-gold { background-color: #de9f57; }
        
        /* Media */
        .media-img {
           min-height: 220px;
        }
        .video-element {
           cursor: pointer;
        }

        /* Utilities */
        .cursor-pointer { cursor: pointer; }

        /* Card Hover Effect */
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }

        /* Text Hover */
        .hover-text-gold:hover {
            color: #de9f57 !important;
            transition: color 0.2s ease;
        }

        /* Icon Hover */
        .hover-icon:hover {
            color: #0a1c38 !important;
            transform: scale(1.2);
            transition: all 0.2s ease;
        }
      `}</style>

    </>
  )
}

export default NewsPressRelease;