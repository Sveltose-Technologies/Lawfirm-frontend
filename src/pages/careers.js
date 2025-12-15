import React, { useState } from 'react';
import Head from 'next/head';

function Careers() {
  
  // --- STATES FOR SEARCH ---
  const [searchTerm, setSearchTerm] = useState('');
  const [locationType, setLocationType] = useState('All'); // Remote/Hybrid/Onsite
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('');

  // --- THEME ---
  const theme = {
    primaryBlue: '#002855',
    accentGold: '#cfa144',
    textDark: '#212529',
    bgLight: '#f8f9fa'
  };

  // --- HANDLE SEARCH (Fake Alert) ---
  const handleSearch = (e) => {
    e.preventDefault();
  };

  // --- HANDLE DEAD CLICK ---
  const handleLessClick = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <Head>
        <title>Careers | Greenberg Traurig</title>
      </Head>

      {/* ==========================================================================
          1. HERO BANNER (Modified to include "View Openings" Button)
      ========================================================================== */}
      <div className="career-banner">
        <div className="overlay"></div>
        <div className="container position-relative z-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <span className="text-gold text-uppercase fw-bold ls-2">Join Our Team</span>
              <h1 className="text-white display-3 fw-bold mt-3 mb-4 font-serif">
                Impact. Opportunity. <span className="text-gold">Growth.</span>
              </h1>
              <p className="text-white lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
                Build a career that matters. At Greenberg Traurig, we empower you to shape your own path to success in a collaborative global environment.
              </p>
              
              {/* REQUIREMENT: "View Openings and Apply" Button */}
              <a href="#search-section" className="btn-gold text-decoration-none">
                View Openings & Apply
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          2. SEARCH & FILTER SECTION (NEW - AS PER EXCEL SHEET)
      ========================================================================== */}
      <div id="search-section" className="py-5 bg-light border-bottom">
        <div className="container">
           <div className="row justify-content-center">
              <div className="col-lg-10">
                 
                 <div className="card shadow-lg border-0 p-4 rounded-3" style={{marginTop: '-80px'}}>
                    <h4 className="fw-bold mb-4 text-center" style={{color: theme.primaryBlue}}>Search for Your Next Role</h4>
                    
                    <form onSubmit={handleSearch}>
                        <div className="row g-3">
                            
                            {/* Search Keywords */}
                            <div className="col-md-4">
                                <label className="form-label fw-bold small text-muted">Keywords</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="e.g. Associate, Paralegal" 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Location (Distance) */}
                            <div className="col-md-4">
                                <label className="form-label fw-bold small text-muted">Location / City</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="e.g. New York, London" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>

                            {/* Job Category */}
                            <div className="col-md-4">
                                <label className="form-label fw-bold small text-muted">Job Category</label>
                                <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="All">All Categories</option>
                                    <option value="Attorneys">Attorneys</option>
                                    <option value="Professional Staff">Professional Staff</option>
                                    <option value="Summer Associates">Summer Associates</option>
                                </select>
                            </div>

                            {/* Work Type (Onsite/Hybrid/Remote) */}
                            <div className="col-md-8">
                                <label className="form-label fw-bold small text-muted">Work Type</label>
                                <div className="d-flex gap-3 pt-2">
                                    {['Onsite', 'Hybrid', 'Remote'].map((type) => (
                                        <div className="form-check" key={type}>
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="workType" 
                                                id={type} 
                                                checked={locationType === type}
                                                onChange={() => setLocationType(type)}
                                            />
                                            <label className="form-check-label" htmlFor={type}>
                                                {type}
                                            </label>
                                        </div>
                                    ))}
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="workType" 
                                            id="allTypes" 
                                            checked={locationType === 'All'}
                                            onChange={() => setLocationType('All')}
                                        />
                                        <label className="form-check-label" htmlFor="allTypes">All</label>
                                    </div>
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="col-md-4 d-grid align-items-end">
                                <button type="submit" className="btn btn-dark fw-bold py-2" style={{backgroundColor: theme.primaryBlue}}>
                                    Search Jobs
                                </button>
                            </div>

                        </div>
                    </form>
                 </div>

              </div>
           </div>
        </div>
      </div>

      {/* ==========================================================================
          3. EXISTING CONTENT (Law Students, Attorneys, Staff)
      ========================================================================== */}
      
      {/* --- Law Students --- */}
      <div className="section-gap py-5 my-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
               <div className="image-wrapper">
                 <img src="/assets/images/career1.png" alt="Law Students" className="img-fluid" />
               </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <h6 className="text-gold text-uppercase fw-bold mb-2">Start Your Journey</h6>
                <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Law Students</h2>
                <p className="text-muted mb-3">
                  With our broad geographic and practice platform, law students will find wide-ranging professional opportunities as they start their legal careers.
                </p>
                
                <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold">
                  <h6 className="fw-bold mb-3 text-dark">Browse Opportunities:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['Summer Programs', 'Entry Level Associates', 'Fellowships'].map((item) => (
                      <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Experienced Attorneys --- */}
      <div className="section-gap py-5" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
               <div className="image-wrapper">
                 <img src="/assets/images/promoter-banner.png" alt="Attorneys" className="img-fluid" />
               </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="content-box">
                <h6 className="text-gold text-uppercase fw-bold mb-2">Grow With Us</h6>
                <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Experienced Attorneys</h2>
                <p className="text-muted mb-3">
                  Our global platform provides our experienced attorneys with unique professional opportunities. We value and promote inclusion and empower attorneys at all levels.
                </p>
                
                <div className="region-box p-4 bg-white rounded-3 border-start border-4 border-gold shadow-sm">
                  <h6 className="fw-bold mb-3 text-dark">Browse Opportunities:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['Lateral Associates', 'Partners', 'Counsel'].map((item) => (
                      <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Professional Staff --- */}
      <div className="section-gap py-5 my-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
               <div className="image-wrapper">
                 <img src="/assets/images/career2.png" alt="Staff" className="img-fluid" />
               </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <h6 className="text-gold text-uppercase fw-bold mb-2">Support & Excellence</h6>
                <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Professional Staff</h2>
                <p className="text-muted mb-3">
                  We offer a supportive, stimulating environment that encourages the qualities we value most: collaboration, professionalism, and trust.
                </p>
                
                <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold">
                  <h6 className="fw-bold mb-3 text-dark">Browse Opportunities:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['HR & Recruiting', 'IT & Support', 'Finance', 'Marketing'].map((item) => (
                      <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .text-blue { color: ${theme.primaryBlue}; }
        .text-gold { color: ${theme.accentGold}; }
        
        .career-banner {
          position: relative;
          background-image: url('/assets/images/our-firm4.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 160px 0 100px 0; /* Adjusted padding for overlap */
          color: white;
        }
        .career-banner .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(0,40,85,0.9), rgba(0,40,85,0.7));
        }
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .ls-2 { letter-spacing: 2px; }
        
        .btn-gold {
          background-color: ${theme.accentGold};
          color: #fff;
          border: none;
          padding: 12px 35px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 2px;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .btn-gold:hover {
          background-color: #b58b36;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(207, 161, 68, 0.4);
          color: #fff;
        }

        .btn-chip {
          background: transparent;
          border: 1px solid #ced4da;
          color: ${theme.textDark};
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-chip:hover {
          background-color: ${theme.primaryBlue};
          color: white;
          border-color: ${theme.primaryBlue};
        }

        .image-wrapper {
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .image-wrapper img {
          transition: transform 0.5s ease;
          width: 100%;
        }
        .image-wrapper:hover img {
          transform: scale(1.05);
        }
        
        /* Mobile Tweaks */
        @media (max-width: 991px) {
            .career-banner { padding: 120px 0 80px 0; }
            .content-box { text-align: center; }
            .region-box { text-align: center; }
            .d-flex.flex-wrap { justify-content: center; }
        }
      `}</style>
    </>
  );
}

export default Careers;