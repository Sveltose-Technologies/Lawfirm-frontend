/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Link from 'next/link'

function FirmOverview() {
  return (
    <>
     

      {/* ==========================================================================
          1. BANNER SECTION (Kept as requested)
      ========================================================================== */}
      <div className="inner-banner-section" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop)', 
          padding: '160px 0', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
             <div className="col-lg-10">
                <h1 className="text-white display-3 fw-bold">Firm Overview</h1>
                <p className="text-white lead fs-4">Global Reach. Local Experience. Unmatched Dedication.</p>
             </div>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          2. WHO WE ARE (Clean White & Gold Design)
      ========================================================================== */}
      <div className="about-section py-5 my-5">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
               <div className="position-relative">
                   <img 
                     src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                     alt="Firm Overview" 
                     className="img-fluid shadow-lg" 
                     style={{ borderBottom: '10px solid #0a1c38' }}
                   />
                   <div style={{
                       position: 'absolute', 
                       bottom: '-20px', 
                       right: '-20px', 
                       background: '#CFA167', 
                       padding: '30px',
                       color: '#000',
                       fontWeight: 'bold'
                   }} className="d-none d-md-block shadow">
                       <h3 className="m-0 display-4">20+</h3>
                       <span>Years Experience</span>
                   </div>
               </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content ps-lg-4">
                <h6 style={{color: '#CFA167', letterSpacing: '2px', fontWeight: 'bold', textTransform: 'uppercase'}}>Who We Are</h6>
                <h2 className="mb-4 display-6 fw-bold text-dark">We Specialise In All Criminal Law & Business Matters</h2>
                <p className="text-muted lead" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                  We are a leading global law firm with a history of delivering quality legal services to our clients. 
                  Our team of experienced attorneys is dedicated to providing strategic, practical, and innovative legal solutions tailored to your unique needs.
                </p>
                <p className="text-muted mb-4">
                  Whether you are a startup, a growing business, or a multinational corporation, we have the expertise to help you navigate the complex legal landscape with confidence.
                </p>
                
          

                <div className="mt-5">
                   <Link href="/contact">
                       <a className="btn btn-dark px-5 py-3 rounded-0 text-uppercase fw-bold" style={{backgroundColor: '#0a1c38'}}>Contact Us Today</a>
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 

      

      {/* ==========================================================================
          5. OUR VALUES / WHY CHOOSE US (Dark Navy Theme)
      ========================================================================== */}
      <div className="why-choose-us py-5" style={{ backgroundColor: '#0a1c38', color: '#fff' }}>
         <div className="container py-5">
            <div className="row mb-5 text-center">
                <div className="col-lg-8 mx-auto">
                    <span className="fw-bold text-uppercase" style={{color: '#CFA167', letterSpacing: '1px'}}>Our Core Values</span>
                    <h2 className="display-4 fw-bold mt-2">Why Choose Us?</h2>
                    <p className="lead text-white-50">We combine deep legal expertise with a thorough understanding of your business goals to deliver exceptional results.</p>
                </div>
            </div>
            
            <div className="row g-4">
               {/* Card 1 */}
               <div className="col-lg-4 col-md-6">
                  <div className="card h-100 text-center p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                     <div className="mb-4">
                        <i className="bi bi-globe2" style={{fontSize: '3.5rem', color: '#CFA167'}}></i>
                     </div>
                     <h4 className="text-white fw-bold">Global Reach</h4>
                     <p className="text-white-50 mt-3">With offices in major cities worldwide, we serve clients around the globe, providing seamless cross-border legal support.</p>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="col-lg-4 col-md-6">
                  <div className="card h-100 text-center p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                     <div className="mb-4">
                        <i className="bi bi-people-fill" style={{fontSize: '3.5rem', color: '#CFA167'}}></i>
                     </div>
                     <h4 className="text-white fw-bold">Experienced Team</h4>
                     <p className="text-white-50 mt-3">Our attorneys are recognized leaders in their fields, bringing decades of experience and industry knowledge to every case.</p>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="col-lg-4 col-md-6">
                  <div className="card h-100 text-center p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                     <div className="mb-4">
                        <i className="bi bi-shield-check" style={{fontSize: '3.5rem', color: '#CFA167'}}></i>
                     </div>
                     <h4 className="text-white fw-bold">Client Focused</h4>
                     <p className="text-white-50 mt-3">We prioritize our clients' goals above all else, working tirelessly with integrity and transparency to achieve the best outcomes.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

    
    </>
  )
}

export default FirmOverview;