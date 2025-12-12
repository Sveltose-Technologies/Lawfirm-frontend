// import React from 'react'

// import Link from 'next/link'

// function News() {
//   return (
//     <>

      
//       {/* --- Page Banner --- */}
//       <div className="inner-banner-section" style={{
//           backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop)', 
//           padding: '120px 0', 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           textAlign: 'center'
//         }}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <h1 className="text-white">News</h1>
//               <p className="text-white" style={{fontSize: '24px'}}>Our developing story.</p>
//               <div className="mt-4">
//                  <Link href="/contact"><a className="btn btn-outline-light">Media Contacts</a></Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Search & Filter Section --- */}
//       <div className="filter-section py-5 bg-light border-bottom">
//         <div className="container">
//           <div className="row g-3 align-items-center">
//              {/* Search */}
//              <div className="col-lg-4">
//                 <input type="text" className="form-control p-3" placeholder="Search News By Keyword..." />
//              </div>
             
//              {/* Filters */}
//              <div className="col-lg-8">
//                 <div className="d-flex flex-wrap gap-2 align-items-center">
//                    <span className="fw-bold me-2">Filter News by:</span>
//                    <select className="form-select w-auto"><option>Capability</option></select>
//                    <select className="form-select w-auto"><option>Topic</option></select>
//                    <select className="form-select w-auto"><option>Professional</option></select>
//                    <select className="form-select w-auto"><option>Date</option></select>
//                    <select className="form-select w-auto"><option>Location</option></select>
//                    <select className="form-select w-auto"><option>Type</option></select>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Recent News Grid --- */}
//       <div className="news-section pt-100 pb-100">
//         <div className="container">
//           <h2 className="mb-5">Recent News</h2>
//           <div className="row g-4">

//             {/* News Item 1 */}
//             <div className="col-lg-4 col-md-6">
//                <div className="card h-100 border-0 shadow-sm">
//                   <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
//                      <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
//                   </div>
//                   <div className="card-body p-4">
//                      <div className="d-flex justify-content-between mb-2">
//                         <small className="text-muted">December 03, 2025</small>
//                         <small className="text-primary fw-bold">Media Coverage</small>
//                      </div>
//                      <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Adds 2 Private Equity Shareholders in Chicago</a></Link></h5>
//                      <p className="card-text text-muted">The American Lawyer</p>
//                      <small className="text-secondary"><i className="bi bi-clock"></i> Less than a minute</small>
//                   </div>
//                </div>
//             </div>

//             {/* News Item 2 */}
//             <div className="col-lg-4 col-md-6">
//                <div className="card h-100 border-0 shadow-sm">
//                   <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
//                      <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
//                   </div>
//                   <div className="card-body p-4">
//                      <div className="d-flex justify-content-between mb-2">
//                         <small className="text-muted">December 03, 2025</small>
//                         <small className="text-success fw-bold">Press Release</small>
//                      </div>
//                      <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Advises Enlivex in $212M Private Placement</a></Link></h5>
//                      <small className="text-secondary"><i className="bi bi-clock"></i> 1 min read</small>
//                   </div>
//                </div>
//             </div>

//             {/* News Item 3 */}
//             <div className="col-lg-4 col-md-6">
//                <div className="card h-100 border-0 shadow-sm">
//                   <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
//                      <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
//                   </div>
//                   <div className="card-body p-4">
//                      <div className="d-flex justify-content-between mb-2">
//                         <small className="text-muted">December 03, 2025</small>
//                         <small className="text-success fw-bold">Press Release</small>
//                      </div>
//                      <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Continues to Grow Products Liability Practice with Addition of Thuy T. Bui</a></Link></h5>
//                      <small className="text-secondary"><i className="bi bi-clock"></i> 1 min read</small>
//                   </div>
//                </div>
//             </div>

//             {/* News Item 4 */}
//             <div className="col-lg-4 col-md-6">
//                <div className="card h-100 border-0 shadow-sm">
//                   <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
//                      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
//                   </div>
//                   <div className="card-body p-4">
//                      <div className="d-flex justify-content-between mb-2">
//                         <small className="text-muted">December 02, 2025</small>
//                         <small className="text-success fw-bold">Press Release</small>
//                      </div>
//                      <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Advises Oxford Properties on Lease of ‘The Penthouse’ at Center am Potsdamer Platz</a></Link></h5>
//                      <small className="text-secondary"><i className="bi bi-clock"></i> 1 min read</small>
//                   </div>
//                </div>
//             </div>

//             {/* News Item 5 */}
//             <div className="col-lg-4 col-md-6">
//                <div className="card h-100 border-0 shadow-sm">
//                   <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
//                      <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
//                   </div>
//                   <div className="card-body p-4">
//                      <div className="d-flex justify-content-between mb-2">
//                         <small className="text-muted">December 02, 2025</small>
//                         <small className="text-primary fw-bold">Media Coverage</small>
//                      </div>
//                      <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Bolsters PE Practice With Graham, Castaldi</a></Link></h5>
//                      <p className="card-text text-muted">The Deal</p>
//                      <small className="text-secondary"><i className="bi bi-clock"></i> Less than a minute</small>
//                   </div>
//                </div>
//             </div>

//           </div>

//           <div className="row mt-5 text-center">
//              <div className="col-12">
//                 <Link href="/news"><a className="eg-btn btn--primary btn--lg">View More +</a></Link>
//              </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Stay Connected Section --- */}
//       <div className="stay-connected-section py-5 text-white" style={{backgroundColor: '#0a1c38'}}>
//          <div className="container">
//             <div className="row g-5">
               
//                {/* Blogs */}
//                <div className="col-lg-4">
//                   <div className="text-center p-3">
                    
//                      <h4>Greenberg Traurig Blogs</h4>
//                      <p className="text-white-50 mt-3">Stay informed about legal and regulatory developments that impact your business. Follow one or more of our blogs for information about legal issues and industry trends.</p>
//                      <Link href="/blogs"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">View Our Blogs</a></Link>
//                   </div>
//                </div>

//                {/* Social Media */}
//                <div className="col-lg-4 border-start border-end border-secondary">
//                   <div className="text-center p-3">
                     
//                      <h4>Follow Us on Social Media</h4>
//                      {/* <p className="text-white-50 mt-3">Stay current with the latest legal insights, news, and GT happenings by following our social media accounts.</p> */}
//                      <p className="text-white-50 mt-3">Stay informed about legal and regulatory developments that impact your business. Follow one or more of our blogs for information about legal issues and industry trends.</p>
//                      <Link href="/blogs"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">View Our Blogs</a></Link>
//                      <Link href="/social-media"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">Social Media Library</a></Link>
//                   </div>
//                </div>

//                {/* Podcasts */}
//                <div className="col-lg-4">
//                   <div className="text-center p-3">
                   
//                      <h4>Subscribe to Podcasts</h4>
//                      <p className="text-white-50 mt-3">Stay up to date on the latest legal and regulatory trends, changes, and advancements that may be impacting your business by subscribing to our podcasts.</p>
//                      <Link href="/podcasts"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">Greenberg Traurig Podcasts</a></Link>
//                   </div>
//                </div>

//             </div>
//          </div>
//       </div>

  
//     </>
//   )
// }

// export default News
import React, { useState, useMemo } from 'react';
import Head from 'next/head';

// --- MOCK DATA ---
const newsData = [
  {
    id: 1,
    title: "Greenberg Traurig Adds 2 Private Equity Shareholders in Chicago",
    date: "2025-12-03",
    type: "Media Coverage",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    relatedProfessionals: ["Caroline K. Abbott", "Jacob M. Abdo"],
    capabilities: ["Corporate", "Private Equity"],
    location: "Chicago"
  },
  {
    id: 2,
    title: "Global Summit Highlights: Video Recap of Key Legal Trends",
    date: "2025-11-15",
    type: "Press Release",
    mediaType: "video",
    src: "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-call-center-4638-large.mp4",
    relatedProfessionals: ["Darren J. Abernethy"],
    capabilities: ["Litigation", "Technology"],
    location: "Global"
  },
  {
    id: 3,
    title: "Greenberg Traurig Advises Enlivex in $212M Private Placement",
    date: "2024-10-20",
    type: "Press Release",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    relatedProfessionals: ["Charles J. Abrams"],
    capabilities: ["Banking & Finance", "Corporate"],
    location: "New York"
  },
  {
    id: 4,
    title: "New Environmental Regulations: What You Need to Know",
    date: "2024-08-10",
    type: "Publication",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    relatedProfessionals: ["Ejim Peter Achi", "Ashia D. Adams"],
    capabilities: ["Environmental", "Government Law"],
    location: "Washington, D.C."
  },
  {
    id: 5,
    title: "Annual Charity Gala: Giving Back to the Community",
    date: "2023-12-05",
    type: "Press Release",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    relatedProfessionals: [],
    capabilities: ["Pro Bono"],
    location: "Miami"
  }
];

function NewsPage() {
  
  // --- THEME ---
  const theme = {
    primaryBlue: '#002855',
    accentGold: '#cfa144',
    white: '#ffffff',
    lightGray: '#f8f9fa'
  };

  // --- STATES ---
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filters
  const [filters, setFilters] = useState({
    year: 'All',
    type: 'All',
    capability: 'All',
    professional: 'All'
  });

  // --- HELPER: Prevent Navigation (No 404, No Alert) ---
  const handleDeadClick = (e) => {
    e.preventDefault(); // This stops the link from doing anything
  };

  // --- DYNAMIC LISTS ---
  const years = ['All', ...new Set(newsData.map(item => new Date(item.date).getFullYear()))].sort().reverse();
  const types = ['All', ...new Set(newsData.map(item => item.type))].sort();
  const allCaps = newsData.flatMap(item => item.capabilities);
  const capabilities = ['All', ...new Set(allCaps)].sort();
  const allProfs = newsData.flatMap(item => item.relatedProfessionals);
  const professionals = ['All', ...new Set(allProfs)].sort();

  // --- FILTER LOGIC ---
  const filteredNews = useMemo(() => {
    return newsData.filter(item => {
      const itemYear = new Date(item.date).getFullYear().toString();
      
      if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase()) && !item.location.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (filters.year !== 'All' && itemYear !== String(filters.year)) return false;
      if (filters.type !== 'All' && item.type !== filters.type) return false;
      if (filters.capability !== 'All' && !item.capabilities.includes(filters.capability)) return false;
      if (filters.professional !== 'All' && !item.relatedProfessionals.includes(filters.professional)) return false;

      return true;
    });
  }, [searchTerm, filters]);

  // --- HANDLERS ---
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilters({ year: 'All', type: 'All', capability: 'All', professional: 'All' });
  };

  const shareUrl = "https://gtlaw.com"; 

  return (
    <>
      <Head>
        <title>News & Publications | Core Law</title>
      </Head>

      {/* --- Page Banner --- */}
      <div className="inner-banner-section" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop)', 
          padding: '120px 0', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-white display-4 fw-bold font-serif">News & Insights</h1>
              <p className="text-white lead">Staying ahead of the curve with our latest developments.</p>
              <div className="mt-4">
                 {/* Replaced Link with dead anchor */}
                 <a href="#" onClick={handleDeadClick} className="btn btn-outline-light rounded-0 px-4">Media Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Search & Filter Section --- */}
      <div className="filter-section py-5 bg-light border-bottom sticky-top-custom">
        <div className="container">
          <div className="row g-3 align-items-center">
             
             {/* Search */}
             <div className="col-lg-3">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-muted"></i></span>
                  <input 
                    type="text" 
                    className="form-control border-start-0 ps-0" 
                    placeholder="Search Keyword..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
             </div>
             
             {/* Filters */}
             <div className="col-lg-9">
                <div className="d-flex flex-wrap gap-2 align-items-center justify-content-lg-end">
                   
                   <select className="form-select w-auto" value={filters.year} onChange={(e) => handleFilterChange('year', e.target.value)}>
                      <option value="All">Year: All</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                   </select>

                   <select className="form-select w-auto" value={filters.type} onChange={(e) => handleFilterChange('type', e.target.value)}>
                      <option value="All">Type: All</option>
                      {types.map(t => <option key={t} value={t}>{t}</option>)}
                   </select>

                   <select className="form-select w-auto" style={{maxWidth:'160px'}} value={filters.capability} onChange={(e) => handleFilterChange('capability', e.target.value)}>
                      <option value="All">Expertise: All</option>
                      {capabilities.map(c => <option key={c} value={c}>{c}</option>)}
                   </select>

                   <select className="form-select w-auto" style={{maxWidth:'160px'}} value={filters.professional} onChange={(e) => handleFilterChange('professional', e.target.value)}>
                      <option value="All">Professional: All</option>
                      {professionals.map(p => <option key={p} value={p}>{p}</option>)}
                   </select>

                   <button onClick={handleReset} className="btn btn-link text-danger text-decoration-none">Reset</button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- Recent News Grid --- */}
      <div className="news-section pt-5 pb-5 bg-white">
        <div className="container">
          
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="font-serif text-dark">Recent Updates</h2>
            <span className="text-muted">{filteredNews.length} Result(s)</span>
          </div>

          <div className="row g-4">

            {filteredNews.length > 0 ? filteredNews.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                 <div className="card h-100 border-0 shadow-sm news-card">
                    
                    {/* Media Display */}
                    <div className="card-img-top overflow-hidden position-relative" style={{height: '240px'}}>
                       {item.mediaType === 'video' ? (
                         <video className="w-100 h-100 object-fit-cover" controls>
                            <source src={item.src} type="video/mp4" />
                         </video>
                       ) : (
                         <img src={item.src} alt={item.title} className="w-100 h-100 object-fit-cover hover-zoom" />
                       )}
                       
                       <span className="position-absolute top-0 start-0 m-3 badge bg-white text-dark shadow-sm text-uppercase">
                         {item.type}
                       </span>
                    </div>

                    <div className="card-body p-4 d-flex flex-column">
                       <div className="d-flex justify-content-between mb-2 small text-muted">
                          <span><i className="bi bi-calendar3 me-1"></i> {item.date}</span>
                          <span><i className="bi bi-geo-alt me-1"></i> {item.location}</span>
                       </div>

                       <h5 className="card-title mb-3 font-serif">
                         {/* Replaced Link with dead anchor */}
                         <a href="#" onClick={handleDeadClick} className="text-decoration-none text-dark hover-gold">
                           {item.title}
                         </a>
                       </h5>

                       <div className="mt-auto pt-3 border-top">
                          {item.relatedProfessionals.length > 0 && (
                            <div className="mb-2 small text-truncate">
                              <strong className="text-gold">Professionals:</strong> {item.relatedProfessionals.join(', ')}
                            </div>
                          )}
                          {item.capabilities.length > 0 && (
                            <div className="small text-truncate">
                              <strong className="text-gold">Expertise:</strong> {item.capabilities.join(', ')}
                            </div>
                          )}
                       </div>
                    </div>

                    {/* Footer */}
                    <div className="card-footer bg-light border-0 p-3 d-flex justify-content-between align-items-center">
                        <small className="text-muted">Share:</small>
                        <div className="social-share d-flex gap-2">
                           {/* Social links stay external (target blank) so they work */}
                           <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-blue"><i className="bi bi-facebook"></i></a>
                           <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-blue"><i className="bi bi-twitter"></i></a>
                           <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-secondary hover-blue"><i className="bi bi-linkedin"></i></a>
                           {/* Print does not navigate, so it's safe */}
                           <button onClick={() => window.print()} className="btn btn-link p-0 text-secondary hover-blue ms-2" title="Print"><i className="bi bi-printer"></i></button>
                        </div>
                    </div>

                 </div>
              </div>
            )) : (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No news found matching your criteria.</h4>
                <button className="btn btn-outline-dark mt-2" onClick={handleReset}>Clear All Filters</button>
              </div>
            )}

          </div>

          {/* Load More Button (Dead Click) */}
          {filteredNews.length > 0 && (
            <div className="row mt-5 text-center">
               <div className="col-12">
                  <button onClick={handleDeadClick} className="btn btn-outline-dark px-5 py-2">Load More News</button>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* --- Stay Connected Section --- */}
      <div className="stay-connected-section py-5 text-white" style={{backgroundColor: '#0a1c38'}}>
         <div className="container">
            <div className="row g-5">
               
               {/* Blogs */}
               <div className="col-lg-4 text-center">
                   <i className="bi bi-journals fs-1 text-gold mb-3"></i>
                   <h4>Our Blogs</h4>
                   <p className="text-white-50 mt-3 small">Stay informed about legal and regulatory developments that impact your business.</p>
                   {/* Replaced Link with dead anchor */}
                   <a href="#" onClick={handleDeadClick} className="text-gold text-decoration-none fw-bold mt-2 d-inline-block hover-white">View Blogs →</a>
               </div>

               {/* Social Media */}
               <div className="col-lg-4 border-start border-end border-secondary text-center px-4">
                   <i className="bi bi-share fs-1 text-gold mb-3"></i>
                   <h4>Social Media</h4>
                   <p className="text-white-50 mt-3 small">Follow us for real-time updates and firm news.</p>
                   {/* Replaced Link with dead anchor */}
                   <a href="#" onClick={handleDeadClick} className="text-gold text-decoration-none fw-bold mt-2 d-inline-block hover-white">Visit Social Hub →</a>
               </div>

               {/* Podcasts */}
               <div className="col-lg-4 text-center">
                   <i className="bi bi-mic fs-1 text-gold mb-3"></i>
                   <h4>Podcasts</h4>
                   <p className="text-white-50 mt-3 small">Listen to expert discussions on industry trends.</p>
                   {/* Replaced Link with dead anchor */}
                   <a href="#" onClick={handleDeadClick} className="text-gold text-decoration-none fw-bold mt-2 d-inline-block hover-white">Listen Now →</a>
               </div>

            </div>
         </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .font-serif { font-family: "Georgia", "Times New Roman", serif; }
        .text-gold { color: ${theme.accentGold} !important; }
        .hover-gold:hover { color: ${theme.accentGold} !important; transition: 0.3s; }
        .hover-white:hover { color: #fff !important; }
        .hover-blue:hover { color: ${theme.primaryBlue} !important; }
        
        .hover-zoom { transition: transform 0.5s ease; }
        .news-card:hover .hover-zoom { transform: scale(1.05); }
        .news-card { transition: transform 0.3s; }
        .news-card:hover { transform: translateY(-5px); }
      `}</style>
    </>
  )
}

export default NewsPage;