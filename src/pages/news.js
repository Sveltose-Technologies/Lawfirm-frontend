import React from 'react'

import Link from 'next/link'

function News() {
  return (
    <>

      
      {/* --- Page Banner --- */}
      <div className="inner-banner-section" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop)', 
          padding: '120px 0', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-white">News</h1>
              <p className="text-white" style={{fontSize: '24px'}}>Our developing story.</p>
              <div className="mt-4">
                 <Link href="/contact"><a className="btn btn-outline-light">Media Contacts</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Search & Filter Section --- */}
      <div className="filter-section py-5 bg-light border-bottom">
        <div className="container">
          <div className="row g-3 align-items-center">
             {/* Search */}
             <div className="col-lg-4">
                <input type="text" className="form-control p-3" placeholder="Search News By Keyword..." />
             </div>
             
             {/* Filters */}
             <div className="col-lg-8">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                   <span className="fw-bold me-2">Filter News by:</span>
                   <select className="form-select w-auto"><option>Capability</option></select>
                   <select className="form-select w-auto"><option>Topic</option></select>
                   <select className="form-select w-auto"><option>Professional</option></select>
                   <select className="form-select w-auto"><option>Date</option></select>
                   <select className="form-select w-auto"><option>Location</option></select>
                   <select className="form-select w-auto"><option>Type</option></select>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- Recent News Grid --- */}
      <div className="news-section pt-100 pb-100">
        <div className="container">
          <h2 className="mb-5">Recent News</h2>
          <div className="row g-4">

            {/* News Item 1 */}
            <div className="col-lg-4 col-md-6">
               <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
                     <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body p-4">
                     <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">December 03, 2025</small>
                        <small className="text-primary fw-bold">Media Coverage</small>
                     </div>
                     <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Adds 2 Private Equity Shareholders in Chicago</a></Link></h5>
                     <p className="card-text text-muted">The American Lawyer</p>
                     <small className="text-secondary"><i className="bi bi-clock"></i> Less than a minute</small>
                  </div>
               </div>
            </div>

            {/* News Item 2 */}
            <div className="col-lg-4 col-md-6">
               <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
                     <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body p-4">
                     <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">December 03, 2025</small>
                        <small className="text-success fw-bold">Press Release</small>
                     </div>
                     <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Advises Enlivex in $212M Private Placement</a></Link></h5>
                     <small className="text-secondary"><i className="bi bi-clock"></i> 1 min read</small>
                  </div>
               </div>
            </div>

            {/* News Item 3 */}
            <div className="col-lg-4 col-md-6">
               <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
                     <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body p-4">
                     <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">December 03, 2025</small>
                        <small className="text-success fw-bold">Press Release</small>
                     </div>
                     <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Continues to Grow Products Liability Practice with Addition of Thuy T. Bui</a></Link></h5>
                     <small className="text-secondary"><i className="bi bi-clock"></i> 1 min read</small>
                  </div>
               </div>
            </div>

            {/* News Item 4 */}
            <div className="col-lg-4 col-md-6">
               <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body p-4">
                     <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">December 02, 2025</small>
                        <small className="text-success fw-bold">Press Release</small>
                     </div>
                     <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Advises Oxford Properties on Lease of ‘The Penthouse’ at Center am Potsdamer Platz</a></Link></h5>
                     <small className="text-secondary"><i className="bi bi-clock"></i> 1 min read</small>
                  </div>
               </div>
            </div>

            {/* News Item 5 */}
            <div className="col-lg-4 col-md-6">
               <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top overflow-hidden" style={{height: '240px'}}>
                     <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="News" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body p-4">
                     <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">December 02, 2025</small>
                        <small className="text-primary fw-bold">Media Coverage</small>
                     </div>
                     <h5 className="card-title mb-3"><Link href="/news-details"><a>Greenberg Traurig Bolsters PE Practice With Graham, Castaldi</a></Link></h5>
                     <p className="card-text text-muted">The Deal</p>
                     <small className="text-secondary"><i className="bi bi-clock"></i> Less than a minute</small>
                  </div>
               </div>
            </div>

          </div>

          <div className="row mt-5 text-center">
             <div className="col-12">
                <Link href="/news"><a className="eg-btn btn--primary btn--lg">View More +</a></Link>
             </div>
          </div>
        </div>
      </div>

      {/* --- Stay Connected Section --- */}
      <div className="stay-connected-section py-5 text-white" style={{backgroundColor: '#0a1c38'}}>
         <div className="container">
            <div className="row g-5">
               
               {/* Blogs */}
               <div className="col-lg-4">
                  <div className="text-center p-3">
                     <img src="https://images.unsplash.com/photo-1499750310159-52f8f6819fc4?q=80&w=400&auto=format&fit=crop" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Blogs" />
                     <h4>Greenberg Traurig Blogs</h4>
                     <p className="text-white-50 mt-3">Stay informed about legal and regulatory developments that impact your business. Follow one or more of our blogs for information about legal issues and industry trends.</p>
                     <Link href="/blogs"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">View Our Blogs</a></Link>
                  </div>
               </div>

               {/* Social Media */}
               <div className="col-lg-4 border-start border-end border-secondary">
                  <div className="text-center p-3">
                     <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Social Media" />
                     <h4>Follow Us on Social Media</h4>
                     <p className="text-white-50 mt-3">Stay current with the latest legal insights, news, and GT happenings by following our social media accounts.</p>
                     <Link href="/social-media"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">Social Media Library</a></Link>
                  </div>
               </div>

               {/* Podcasts */}
               <div className="col-lg-4">
                  <div className="text-center p-3">
                     <img src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=400&auto=format&fit=crop" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Podcasts" />
                     <h4>Subscribe to Podcasts</h4>
                     <p className="text-white-50 mt-3">Stay up to date on the latest legal and regulatory trends, changes, and advancements that may be impacting your business by subscribing to our podcasts.</p>
                     <Link href="/podcasts"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">Greenberg Traurig Podcasts</a></Link>
                  </div>
               </div>

            </div>
         </div>
      </div>

  
    </>
  )
}

export default News