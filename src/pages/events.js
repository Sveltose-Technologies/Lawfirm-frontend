import React from 'react'

import Link from 'next/link'

function Events() {
  return (
    <>
   
      
      {/* --- Page Banner --- */}
      <div className="inner-banner-section" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop)', 
          padding: '120px 0', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-white" style={{fontSize: '3.5rem', fontWeight: 'bold'}}>Events</h1>
              <p className="text-white lead">Opportunities for us to connect.</p>
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
                <input type="text" className="form-control p-3" placeholder="Search Events By Keyword..." />
             </div>
             
             {/* Filters */}
             <div className="col-lg-8">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                   <span className="fw-bold me-2">Filter Events by:</span>
                   <select className="form-select w-auto"><option>Date</option></select>
                   <select className="form-select w-auto"><option>Location</option></select>
                   <select className="form-select w-auto"><option>Capability</option></select>
                   <select className="form-select w-auto"><option>Topic</option></select>
                   <select className="form-select w-auto"><option>Professional</option></select>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- Upcoming Events List --- */}
      <div className="events-section pt-100 pb-100">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
             <h2 className="mb-0">Upcoming Events</h2>
             <Link href="/subscribe"><a className="btn btn-outline-primary"><i className="bi bi-bell"></i> Subscribe</a></Link>
          </div>
          
          <div className="row g-4">

            {/* Event 1 */}
            <div className="col-12">
               <div className="card border-0 shadow-sm hover-effect overflow-hidden">
                  <div className="row g-0 align-items-center">
                     <div className="col-md-3 bg-primary text-white text-center p-4 d-flex flex-column justify-content-center" style={{minHeight: '180px'}}>
                        <h3 className="fw-bold mb-0 text-white">04-05</h3>
                        <span className="text-uppercase fw-bold fs-5">Dec 2025</span>
                     </div>
                     <div className="col-md-9">
                        <div className="card-body p-4">
                           <span className="badge bg-secondary mb-2">Event</span>
                           <h4 className="card-title mb-2"><Link href="/event-details"><a>26th Annual Berkeley - Stanford Advanced Patent Law Institute</a></Link></h4>
                           <p className="card-text text-muted mb-2"><i className="bi bi-geo-alt-fill text-primary"></i> Stanford, United States</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Event 2 */}
            <div className="col-12">
               <div className="card border-0 shadow-sm hover-effect overflow-hidden">
                  <div className="row g-0 align-items-center">
                     <div className="col-md-3 bg-dark text-white text-center p-4 d-flex flex-column justify-content-center" style={{minHeight: '180px'}}>
                        <h3 className="fw-bold mb-0 text-white">04</h3>
                        <span className="text-uppercase fw-bold fs-5">Dec 2025</span>
                     </div>
                     <div className="col-md-9">
                        <div className="card-body p-4">
                           <span className="badge bg-secondary mb-2">Event</span>
                           <h4 className="card-title mb-2"><Link href="/event-details"><a>ICC: “Reconfiguration of Amparo in Mexico: Implications for the Business Community”</a></Link></h4>
                           <p className="card-text text-muted mb-2"><i className="bi bi-globe text-primary"></i> Virtual / International</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Event 3 */}
            <div className="col-12">
               <div className="card border-0 shadow-sm hover-effect overflow-hidden">
                  <div className="row g-0 align-items-center">
                     <div className="col-md-3 bg-primary text-white text-center p-4 d-flex flex-column justify-content-center" style={{minHeight: '180px'}}>
                        <h3 className="fw-bold mb-0 text-white">04</h3>
                        <span className="text-uppercase fw-bold fs-5">Dec 2025</span>
                        <small className="d-block mt-2">12:00 PM - 1:00 PM ET</small>
                     </div>
                     <div className="col-md-9">
                        <div className="card-body p-4">
                           <span className="badge bg-info text-dark mb-2">Webinar</span>
                           <h4 className="card-title mb-2"><Link href="/event-details"><a>Patent Litigation Trends in MedTech Webinar</a></Link></h4>
                           <p className="card-text text-muted mb-2"><i className="bi bi-camera-video-fill text-primary"></i> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Event 4 */}
            <div className="col-12">
               <div className="card border-0 shadow-sm hover-effect overflow-hidden">
                  <div className="row g-0 align-items-center">
                     <div className="col-md-3 bg-dark text-white text-center p-4 d-flex flex-column justify-content-center" style={{minHeight: '180px'}}>
                        <h3 className="fw-bold mb-0 text-white">04</h3>
                        <span className="text-uppercase fw-bold fs-5">Dec 2025</span>
                        <small className="d-block mt-2">2:00 PM - 3:00 PM ET</small>
                     </div>
                     <div className="col-md-9">
                        <div className="card-body p-4">
                           <span className="badge bg-secondary mb-2">Event</span>
                           <h4 className="card-title mb-2"><Link href="/event-details"><a>Year-End Sneak Preview—Renewables M&A, Finance, Credit Transfers and Tax Equity Markets</a></Link></h4>
                           <p className="card-text text-muted mb-2"><i className="bi bi-building text-primary"></i> New York, US</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Event 5 */}
            <div className="col-12">
               <div className="card border-0 shadow-sm hover-effect overflow-hidden">
                  <div className="row g-0 align-items-center">
                     <div className="col-md-3 bg-primary text-white text-center p-4 d-flex flex-column justify-content-center" style={{minHeight: '180px'}}>
                        <h3 className="fw-bold mb-0 text-white">04</h3>
                        <span className="text-uppercase fw-bold fs-5">Dec 2025</span>
                        <small className="d-block mt-2">5:00 PM - 8:00 PM ET</small>
                     </div>
                     <div className="col-md-9">
                        <div className="card-body p-4">
                           <span className="badge bg-secondary mb-2">Event</span>
                           <h4 className="card-title mb-2"><Link href="/event-details"><a>Builders Association of South Florida Holiday Party & Awards Celebration</a></Link></h4>
                           <p className="card-text text-muted mb-2"><i className="bi bi-geo-alt-fill text-primary"></i> Miami</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>

          <div className="row mt-5 text-center">
             <div className="col-12">
                <Link href="/events"><a className="eg-btn btn--primary btn--lg">View More +</a></Link>
             </div>
          </div>
        </div>
      </div>

      {/* --- Stay Connected Section (Same as News Page) --- */}
      <div className="stay-connected-section py-5 text-white" style={{backgroundColor: '#0a1c38'}}>
         <div className="container">
            <div className="row g-5">
               
               {/* Blogs */}
               <div className="col-lg-4">
                  <div className="text-center p-3">
                     <img src="https://images.unsplash.com/photo-1499750310159-52f8f6819fc4?q=80&w=400&auto=format&fit=crop" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Blogs" />
                     <h4>Greenberg Traurig Blogs</h4>
                     <p className="text-white-50 mt-3">Stay informed about legal and regulatory developments that impact your business.</p>
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
                     <p className="text-white-50 mt-3">Stay up to date on the latest legal and regulatory trends and changes.</p>
                     <Link href="/podcasts"><a className="text-warning text-decoration-underline fw-bold mt-2 d-inline-block">Greenberg Traurig Podcasts</a></Link>
                  </div>
               </div>

            </div>
         </div>
      </div>

    </>
  )
}

export default Events