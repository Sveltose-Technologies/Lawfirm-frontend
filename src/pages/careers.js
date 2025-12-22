// import React, { useState } from 'react';
// import Head from 'next/head';

// function Careers() {
  
//   // --- STATES FOR SEARCH ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [locationType, setLocationType] = useState('All'); // Remote/Hybrid/Onsite
//   const [category, setCategory] = useState('All');
//   const [location, setLocation] = useState('');

//   // --- THEME ---
//   const theme = {
//     primaryBlue: '#002855',
//     accentGold: '#cfa144',
//     textDark: '#212529',
//     bgLight: '#f8f9fa'
//   };

//   // --- HANDLE SEARCH (Fake Alert) ---
//   const handleSearch = (e) => {
//     e.preventDefault();
//   };

//   // --- HANDLE DEAD CLICK ---
//   const handleLessClick = (e) => {
//     e.preventDefault();
    
//   };

//   return (
//     <>
//       <Head>
//         <title>Careers | Greenberg Traurig</title>
//       </Head>

//       {/* ==========================================================================
//           1. HERO BANNER (Modified to include "View Openings" Button)
//       ========================================================================== */}
//       <div className="career-banner">
//         <div className="overlay"></div>
//         <div className="container position-relative z-1 text-center">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <span className="text-gold text-uppercase fw-bold ls-2">Join Our Team</span>
//               <h1 className="text-white display-3 fw-bold mt-3 mb-4 font-serif">
//                 Impact. Opportunity. <span className="text-gold">Growth.</span>
//               </h1>
//               <p className="text-white lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
//                 Build a career that matters. At Greenberg Traurig, we empower you to shape your own path to success in a collaborative global environment.
//               </p>
              
//               {/* REQUIREMENT: "View Openings and Apply" Button */}
//               <a href="#search-section" className="btn-gold text-decoration-none">
//                 View Openings & Apply
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==========================================================================
//           2. SEARCH & FILTER SECTION (NEW - AS PER EXCEL SHEET)
//       ========================================================================== */}
//       <div id="search-section" className="py-5 bg-light border-bottom">
//         <div className="container">
//            <div className="row justify-content-center">
//               <div className="col-lg-10">
                 
//                  <div className="card shadow-lg border-0 p-4 rounded-3" style={{marginTop: '-80px'}}>
//                     <h4 className="fw-bold mb-4 text-center" style={{color: theme.primaryBlue}}>Search for Your Next Role</h4>
                    
//                     <form onSubmit={handleSearch}>
//                         <div className="row g-3">
                            
//                             {/* Search Keywords */}
//                             <div className="col-md-4">
//                                 <label className="form-label fw-bold small text-muted">Keywords</label>
//                                 <input 
//                                     type="text" 
//                                     className="form-control" 
//                                     placeholder="e.g. Associate, Paralegal" 
//                                     value={searchTerm}
//                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                 />
//                             </div>

//                             {/* Location (Distance) */}
//                             <div className="col-md-4">
//                                 <label className="form-label fw-bold small text-muted">Location / City</label>
//                                 <input 
//                                     type="text" 
//                                     className="form-control" 
//                                     placeholder="e.g. New York, London" 
//                                     value={location}
//                                     onChange={(e) => setLocation(e.target.value)}
//                                 />
//                             </div>

//                             {/* Job Category */}
//                             <div className="col-md-4">
//                                 <label className="form-label fw-bold small text-muted">Job Category</label>
//                                 <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
//                                     <option value="All">All Categories</option>
//                                     <option value="Attorneys">Attorneys</option>
//                                     <option value="Professional Staff">Professional Staff</option>
//                                     <option value="Summer Associates">Summer Associates</option>
//                                 </select>
//                             </div>

//                             {/* Work Type (Onsite/Hybrid/Remote) */}
//                             <div className="col-md-8">
//                                 <label className="form-label fw-bold small text-muted">Work Type</label>
//                                 <div className="d-flex gap-3 pt-2">
//                                     {['Onsite', 'Hybrid', 'Remote'].map((type) => (
//                                         <div className="form-check" key={type}>
//                                             <input 
//                                                 className="form-check-input" 
//                                                 type="radio" 
//                                                 name="workType" 
//                                                 id={type} 
//                                                 checked={locationType === type}
//                                                 onChange={() => setLocationType(type)}
//                                             />
//                                             <label className="form-check-label" htmlFor={type}>
//                                                 {type}
//                                             </label>
//                                         </div>
//                                     ))}
//                                     <div className="form-check">
//                                         <input 
//                                             className="form-check-input" 
//                                             type="radio" 
//                                             name="workType" 
//                                             id="allTypes" 
//                                             checked={locationType === 'All'}
//                                             onChange={() => setLocationType('All')}
//                                         />
//                                         <label className="form-check-label" htmlFor="allTypes">All</label>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Search Button */}
//                             <div className="col-md-4 d-grid align-items-end">
//                                 <button type="submit" className="btn btn-dark fw-bold py-2" style={{backgroundColor: theme.primaryBlue}}>
//                                     Search Jobs
//                                 </button>
//                             </div>

//                         </div>
//                     </form>
//                  </div>

//               </div>
//            </div>
//         </div>
//       </div>

//       {/* ==========================================================================
//           3. EXISTING CONTENT (Law Students, Attorneys, Staff)
//       ========================================================================== */}
      
//       {/* --- Law Students --- */}
//       <div className="section-gap py-5 my-5">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6">
//                <div className="image-wrapper">
//                  <img src="/assets/images/career1.png" alt="Law Students" className="img-fluid" />
//                </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="content-box">
//                 <h6 className="text-gold text-uppercase fw-bold mb-2">Start Your Journey</h6>
//                 <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Law Students</h2>
//                 <p className="text-muted mb-3">
//                   With our broad geographic and practice platform, law students will find wide-ranging professional opportunities as they start their legal careers.
//                 </p>
                
//                 <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold">
//                   <h6 className="fw-bold mb-3 text-dark">Browse Opportunities:</h6>
//                   <div className="d-flex flex-wrap gap-2">
//                     {['Summer Programs', 'Entry Level Associates', 'Fellowships'].map((item) => (
//                       <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Experienced Attorneys --- */}
//       <div className="section-gap py-5" style={{ backgroundColor: '#f4f6f9' }}>
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6 order-lg-2">
//                <div className="image-wrapper">
//                  <img src="/assets/images/promoter-banner.png" alt="Attorneys" className="img-fluid" />
//                </div>
//             </div>
//             <div className="col-lg-6 order-lg-1">
//               <div className="content-box">
//                 <h6 className="text-gold text-uppercase fw-bold mb-2">Grow With Us</h6>
//                 <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Experienced Attorneys</h2>
//                 <p className="text-muted mb-3">
//                   Our global platform provides our experienced attorneys with unique professional opportunities. We value and promote inclusion and empower attorneys at all levels.
//                 </p>
                
//                 <div className="region-box p-4 bg-white rounded-3 border-start border-4 border-gold shadow-sm">
//                   <h6 className="fw-bold mb-3 text-dark">Browse Opportunities:</h6>
//                   <div className="d-flex flex-wrap gap-2">
//                     {['Lateral Associates', 'Partners', 'Counsel'].map((item) => (
//                       <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Professional Staff --- */}
//       <div className="section-gap py-5 my-5">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6">
//                <div className="image-wrapper">
//                  <img src="/assets/images/career2.png" alt="Staff" className="img-fluid" />
//                </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="content-box">
//                 <h6 className="text-gold text-uppercase fw-bold mb-2">Support & Excellence</h6>
//                 <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Professional Staff</h2>
//                 <p className="text-muted mb-3">
//                   We offer a supportive, stimulating environment that encourages the qualities we value most: collaboration, professionalism, and trust.
//                 </p>
                
//                 <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold">
//                   <h6 className="fw-bold mb-3 text-dark">Browse Opportunities:</h6>
//                   <div className="d-flex flex-wrap gap-2">
//                     {['HR & Recruiting', 'IT & Support', 'Finance', 'Marketing'].map((item) => (
//                       <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- STYLES --- */}
//       <style jsx>{`
//         .text-blue { color: ${theme.primaryBlue}; }
//         .text-gold { color: ${theme.accentGold}; }
        
//         .career-banner {
//           position: relative;
//           background-image: url(assets/images/our-firm4.png);
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//           padding: 160px 0 100px 0; /* Adjusted padding for overlap */
//           color: white;
//         }
//         .career-banner .overlay {
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: linear-gradient(135deg, rgba(0,40,85,0.9), rgba(0,40,85,0.7));
//         }
        
//         .font-serif { font-family: 'Playfair Display', serif; }
//         .ls-2 { letter-spacing: 2px; }
        
//         .btn-gold {
//           background-color: ${theme.accentGold};
//           color: #fff;
//           border: none;
//           padding: 12px 35px;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           display: inline-block;
//         }
//         .btn-gold:hover {
//           background-color: #b58b36;
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(207, 161, 68, 0.4);
//           color: #fff;
//         }

//         .btn-chip {
//           background: transparent;
//           border: 1px solid #ced4da;
//           color: ${theme.textDark};
//           padding: 8px 20px;
//           border-radius: 50px;
//           font-size: 0.9rem;
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }
//         .btn-chip:hover {
//           background-color: ${theme.primaryBlue};
//           color: white;
//           border-color: ${theme.primaryBlue};
//         }

//         .image-wrapper {
//           overflow: hidden;
//           border-radius: 8px;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.1);
//         }
//         .image-wrapper img {
//           transition: transform 0.5s ease;
//           width: 100%;
//         }
//         .image-wrapper:hover img {
//           transform: scale(1.05);
//         }
        
//         /* Mobile Tweaks */
//         @media (max-width: 991px) {
//             .career-banner { padding: 120px 0 80px 0; }
//             .content-box { text-align: center; }
//             .region-box { text-align: center; }
//             .d-flex.flex-wrap { justify-content: center; }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Careers;




// import React, { useState } from 'react';
// import Head from 'next/head';

// function Careers() {
  
//   // --- STATES FOR SEARCH ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [locationType, setLocationType] = useState('All'); // Remote/Hybrid/Onsite
//   const [category, setCategory] = useState('All');
//   const [location, setLocation] = useState('');

//   // --- THEME ---
//   const theme = {
//     primaryBlue: '#002855',
//     accentGold: '#cfa144',
//     textDark: '#212529',
//     bgLight: '#f8f9fa'
//   };

//   // --- HANDLE SEARCH (Fake Alert) ---
//   const handleSearch = (e) => {
//     e.preventDefault();
//   };

//   // --- HANDLE DEAD CLICK ---
//   const handleLessClick = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <Head>
//         <title>Careers | Greenberg Traurig</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <div style={{ overflowX: 'hidden' }}>
        
//         {/* ==========================================================================
//             1. HERO BANNER
//         ========================================================================== */}
//         <div className="career-banner d-flex align-items-center">
//           <div className="overlay"></div>
//           <div className="container position-relative z-1 text-center">
//             <div className="row justify-content-center">
//               <div className="col-12 col-lg-10">
//                 <span className="text-gold text-uppercase fw-bold ls-2 d-block mb-2">Join Our Team</span>
//                 {/* Responsive Heading */}
//                 <h1 className="text-white display-4 display-md-3 fw-bold mt-2 mb-4 font-serif">
//                   Impact. Opportunity. <span className="text-gold">Growth.</span>
//                 </h1>
//                 <p className="text-white lead mb-5 opacity-75 mx-auto px-3" style={{ maxWidth: '700px', fontSize: '1.1rem' }}>
//                   Build a career that matters. At Greenberg Traurig, we empower you to shape your own path to success in a collaborative global environment.
//                 </p>
                
//                 <a href="#search-section" className="btn-gold text-decoration-none">
//                   View Openings & Apply
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ==========================================================================
//             2. SEARCH & FILTER SECTION
//         ========================================================================== */}
//         <div id="search-section" className="bg-light border-bottom position-relative pb-5">
//           <div className="container">
//              <div className="row justify-content-center">
//                 <div className="col-12 col-lg-10">
                   
//                    {/* Responsive Margin Card */}
//                    <div className="card shadow-lg border-0 p-4 rounded-3 search-card-responsive">
//                       <h4 className="fw-bold mb-4 text-center" style={{color: theme.primaryBlue}}>Search for Your Next Role</h4>
                      
//                       <form onSubmit={handleSearch}>
//                           <div className="row g-3">
                              
//                               {/* Search Keywords */}
//                               <div className="col-12 col-md-4">
//                                   <label className="form-label fw-bold small text-muted">Keywords</label>
//                                   <input 
//                                       type="text" 
//                                       className="form-control" 
//                                       placeholder="e.g. Associate, Paralegal" 
//                                       value={searchTerm}
//                                       onChange={(e) => setSearchTerm(e.target.value)}
//                                   />
//                               </div>

//                               {/* Location (Distance) */}
//                               <div className="col-12 col-md-4">
//                                   <label className="form-label fw-bold small text-muted">Location / City</label>
//                                   <input 
//                                       type="text" 
//                                       className="form-control" 
//                                       placeholder="e.g. New York, London" 
//                                       value={location}
//                                       onChange={(e) => setLocation(e.target.value)}
//                                   />
//                               </div>

//                               {/* Job Category */}
//                               <div className="col-12 col-md-4">
//                                   <label className="form-label fw-bold small text-muted">Job Category</label>
//                                   <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
//                                       <option value="All">All Categories</option>
//                                       <option value="Attorneys">Attorneys</option>
//                                       <option value="Professional Staff">Professional Staff</option>
//                                       <option value="Summer Associates">Summer Associates</option>
//                                   </select>
//                               </div>

//                               {/* Work Type (Onsite/Hybrid/Remote) */}
//                               <div className="col-12 col-md-8">
//                                   <label className="form-label fw-bold small text-muted">Work Type</label>
//                                   <div className="d-flex flex-wrap gap-3 pt-2">
//                                       {['Onsite', 'Hybrid', 'Remote'].map((type) => (
//                                           <div className="form-check" key={type}>
//                                               <input 
//                                                   className="form-check-input" 
//                                                   type="radio" 
//                                                   name="workType" 
//                                                   id={type} 
//                                                   checked={locationType === type}
//                                                   onChange={() => setLocationType(type)}
//                                               />
//                                               <label className="form-check-label" htmlFor={type}>
//                                                   {type}
//                                               </label>
//                                           </div>
//                                       ))}
//                                       <div className="form-check">
//                                           <input 
//                                               className="form-check-input" 
//                                               type="radio" 
//                                               name="workType" 
//                                               id="allTypes" 
//                                               checked={locationType === 'All'}
//                                               onChange={() => setLocationType('All')}
//                                           />
//                                           <label className="form-check-label" htmlFor="allTypes">All</label>
//                                       </div>
//                                   </div>
//                               </div>

//                               {/* Search Button */}
//                               <div className="col-12 col-md-4 d-grid align-items-end">
//                                   <button type="submit" className="btn btn-dark fw-bold py-2 mt-3 mt-md-0" style={{backgroundColor: theme.primaryBlue}}>
//                                       Search Jobs
//                                   </button>
//                               </div>

//                           </div>
//                       </form>
//                    </div>

//                 </div>
//              </div>
//           </div>
//         </div>

//         {/* ==========================================================================
//             3. EXISTING CONTENT (Law Students, Attorneys, Staff)
//         ========================================================================== */}
        
//         {/* --- Law Students --- */}
//         <div className="section-gap py-5 my-3 my-lg-5">
//           <div className="container">
//             <div className="row align-items-center g-4 g-lg-5">
//               <div className="col-12 col-lg-6">
//                  <div className="image-wrapper mb-3 mb-lg-0">
//                    <img src="/assets/images/career1.png" alt="Law Students" className="img-fluid w-100" />
//                  </div>
//               </div>
//               <div className="col-12 col-lg-6">
//                 <div className="content-box text-center text-lg-start">
//                   <h6 className="text-gold text-uppercase fw-bold mb-2">Start Your Journey</h6>
//                   <h2 className="mb-3 display-6 fw-bold text-blue font-serif">Law Students</h2>
//                   <p className="text-muted mb-4">
//                     With our broad geographic and practice platform, law students will find wide-ranging professional opportunities as they start their legal careers.
//                   </p>
                  
//                   <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold text-start">
//                     <h6 className="fw-bold mb-3 text-dark text-center text-lg-start">Browse Opportunities:</h6>
//                     <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
//                       {['Summer Programs', 'Entry Level Associates', 'Fellowships'].map((item) => (
//                         <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- Experienced Attorneys --- */}
//         <div className="section-gap py-5" style={{ backgroundColor: '#f4f6f9' }}>
//           <div className="container">
//             <div className="row align-items-center g-4 g-lg-5">
//               {/* Order changed on mobile: Image First, Text Second */}
//               <div className="col-12 col-lg-6 order-1 order-lg-2">
//                  <div className="image-wrapper mb-3 mb-lg-0">
//                    <img src="/assets/images/promoter-banner.png" alt="Attorneys" className="img-fluid w-100" />
//                  </div>
//               </div>
//               <div className="col-12 col-lg-6 order-2 order-lg-1">
//                 <div className="content-box text-center text-lg-start">
//                   <h6 className="text-gold text-uppercase fw-bold mb-2">Grow With Us</h6>
//                   <h2 className="mb-3 display-6 fw-bold text-blue font-serif">Experienced Attorneys</h2>
//                   <p className="text-muted mb-4">
//                     Our global platform provides our experienced attorneys with unique professional opportunities. We value and promote inclusion and empower attorneys at all levels.
//                   </p>
                  
//                   <div className="region-box p-4 bg-white rounded-3 border-start border-4 border-gold shadow-sm text-start">
//                     <h6 className="fw-bold mb-3 text-dark text-center text-lg-start">Browse Opportunities:</h6>
//                     <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
//                       {['Lateral Associates', 'Partners', 'Counsel'].map((item) => (
//                         <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- Professional Staff --- */}
//         <div className="section-gap py-5 my-3 my-lg-5">
//           <div className="container">
//             <div className="row align-items-center g-4 g-lg-5">
//               <div className="col-12 col-lg-6">
//                  <div className="image-wrapper mb-3 mb-lg-0">
//                    <img src="/assets/images/career2.png" alt="Staff" className="img-fluid w-100" />
//                  </div>
//               </div>
//               <div className="col-12 col-lg-6">
//                 <div className="content-box text-center text-lg-start">
//                   <h6 className="text-gold text-uppercase fw-bold mb-2">Support & Excellence</h6>
//                   <h2 className="mb-3 display-6 fw-bold text-blue font-serif">Professional Staff</h2>
//                   <p className="text-muted mb-4">
//                     We offer a supportive, stimulating environment that encourages the qualities we value most: collaboration, professionalism, and trust.
//                   </p>
                  
//                   <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold text-start">
//                     <h6 className="fw-bold mb-3 text-dark text-center text-lg-start">Browse Opportunities:</h6>
//                     <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
//                       {['HR & Recruiting', 'IT & Support', 'Finance', 'Marketing'].map((item) => (
//                         <button key={item} onClick={handleLessClick} className="btn-chip">{item}</button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- STYLES --- */}
//       <style jsx>{`
//         .text-blue { color: ${theme.primaryBlue}; }
//         .text-gold { color: ${theme.accentGold}; }
        
//         .career-banner {
//           position: relative;
//           background-image: url(assets/images/our-firm4.png);
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//           min-height: 500px;
//           padding: 100px 0;
//           color: white;
//         }
//         .career-banner .overlay {
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: linear-gradient(135deg, rgba(0,40,85,0.9), rgba(0,40,85,0.7));
//         }
        
//         .font-serif { font-family: 'Playfair Display', serif; }
//         .ls-2 { letter-spacing: 2px; }
        
//         .btn-gold {
//           background-color: ${theme.accentGold};
//           color: #fff;
//           border: none;
//           padding: 12px 35px;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           display: inline-block;
//         }
//         .btn-gold:hover {
//           background-color: #b58b36;
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(207, 161, 68, 0.4);
//           color: #fff;
//         }

//         .btn-chip {
//           background: transparent;
//           border: 1px solid #ced4da;
//           color: ${theme.textDark};
//           padding: 8px 16px;
//           border-radius: 50px;
//           font-size: 0.85rem;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           white-space: nowrap;
//           margin-bottom: 5px;
//         }
//         .btn-chip:hover {
//           background-color: ${theme.primaryBlue};
//           color: white;
//           border-color: ${theme.primaryBlue};
//         }

//         .image-wrapper {
//           overflow: hidden;
//           border-radius: 8px;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//         }
//         .image-wrapper img {
//           transition: transform 0.5s ease;
//           width: 100%;
//           height: auto;
//         }
//         .image-wrapper:hover img {
//           transform: scale(1.05);
//         }

//         /* --- RESPONSIVE ADJUSTMENTS --- */
        
//         /* Desktop overlap logic */
//         .search-card-responsive {
//             margin-top: -80px;
//         }

//         /* Mobile Adjustments */
//         @media (max-width: 991px) {
//             .career-banner {
//                 padding: 120px 0 60px 0;
//                 min-height: auto;
//                 background-attachment: scroll; /* Fixed bg issues on some mobile browsers */
//             }
//             .search-card-responsive {
//                 margin-top: 0; /* Remove negative margin on mobile */
//                 margin-bottom: 20px;
//             }
//             .btn-chip {
//                 padding: 6px 14px;
//                 font-size: 0.8rem;
//             }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Careers;


import React, { useState } from 'react';
import Head from 'next/head';

function Careers() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [locationType, setLocationType] = useState('All'); 
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('');
  const [activeTab, setActiveTab] = useState('talent'); 

  const theme = {
    primaryBlue: '#002855',
    accentGold: '#cfa144',
    textDark: '#212529',
    bgLight: '#f8f9fa'
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted Successfully!');
  };

  return (
    <>
      <Head>
        <title>Careers | Join Our Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ overflowX: 'hidden' }}>
        
        <div className="career-banner d-flex align-items-center">
          <div className="overlay"></div>
          <div className="container position-relative z-1 text-center">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <span className="text-gold text-uppercase fw-bold ls-2 d-block mb-2">Join Our Team</span>
                <h1 className="text-white display-4 display-md-3 fw-bold mt-2 mb-4 font-serif">
                  Impact. Opportunity. <span className="text-gold">Growth.</span>
                </h1>
                <p className="text-white lead mb-5 opacity-75 mx-auto px-3" style={{ maxWidth: '700px', fontSize: '1.1rem' }}>
                  Build a career that matters. We empower you to shape your own path to success in a collaborative global environment.
                </p>
                
                <a href="#search-section" className="btn-gold text-decoration-none me-3">
                  View Openings
                </a>
                <a href="#apply-forms" className="btn-gold-outline text-decoration-none">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="search-section" className="bg-light border-bottom position-relative pb-5">
          <div className="container">
             <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                   
                   <div className="card shadow-lg border-0 p-4 rounded-3 search-card-responsive">
                      <h4 className="fw-bold mb-4 text-center" style={{color: theme.primaryBlue}}>Search Jobs</h4>
                      
                      <form onSubmit={handleSearch}>
                          <div className="row g-3">
                              
                              <div className="col-12 col-md-4">
                                  <label className="form-label fw-bold small text-muted">Keywords</label>
                                  <input 
                                      type="text" 
                                      className="form-control" 
                                      placeholder="e.g. Associate, Paralegal" 
                                      value={searchTerm}
                                      onChange={(e) => setSearchTerm(e.target.value)}
                                  />
                              </div>

                              <div className="col-12 col-md-4">
                                  <label className="form-label fw-bold small text-muted">Location / Distance</label>
                                  <input 
                                      type="text" 
                                      className="form-control" 
                                      placeholder="City, State or Zip" 
                                      value={location}
                                      onChange={(e) => setLocation(e.target.value)}
                                  />
                              </div>

                              <div className="col-12 col-md-4">
                                  <label className="form-label fw-bold small text-muted">Job Category</label>
                                  <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                      <option value="All">All Categories</option>
                                      <option value="Legal">Legal</option>
                                      <option value="Administrative">Administrative</option>
                                      <option value="IT">IT & Support</option>
                                      <option value="Finance">Finance</option>
                                  </select>
                              </div>

                              <div className="col-12 col-md-8">
                                  <label className="form-label fw-bold small text-muted">Work Type</label>
                                  <div className="d-flex flex-wrap gap-3 pt-2">
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

                              <div className="col-12 col-md-4 d-grid align-items-end">
                                  <button type="submit" className="btn btn-dark fw-bold py-2 mt-3 mt-md-0" style={{backgroundColor: theme.primaryBlue}}>
                                      Search
                                  </button>
                              </div>

                          </div>
                      </form>
                   </div>

                </div>
             </div>
          </div>
        </div>

        <div id="apply-forms" className="py-5" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-6 fw-bold font-serif" style={{color: theme.primaryBlue}}>Application Portal</h2>
                    <p className="text-muted">Choose your path below</p>
                    
                    <div className="d-inline-flex p-1 bg-light rounded-pill border mt-3">
                        <button 
                            onClick={() => setActiveTab('talent')}
                            className={`btn rounded-pill px-4 fw-bold ${activeTab === 'talent' ? 'btn-blue' : 'text-muted'}`}
                        >
                            Join Talent Community
                        </button>
                        <button 
                            onClick={() => setActiveTab('internship')}
                            className={`btn rounded-pill px-4 fw-bold ${activeTab === 'internship' ? 'btn-blue' : 'text-muted'}`}
                        >
                            Internship Application
                        </button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow border-0 p-4 p-md-5">
                            
                            {activeTab === 'talent' && (
                                <form onSubmit={handleFormSubmit}>
                                    <h4 className="fw-bold mb-4 pb-2 border-bottom" style={{color: theme.accentGold}}>Join Our Talent Community</h4>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small">First Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small">Last Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label fw-bold small">Email Address</label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                        
                                        <div className="col-md-4">
                                            <label className="form-label fw-bold small">Phone Device Type</label>
                                            <select className="form-select" required>
                                                <option value="">Select...</option>
                                                <option value="Mobile">Mobile</option>
                                                <option value="Landline">Landline</option>
                                                <option value="Fax">Fax</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label fw-bold small">Country Code</label>
                                            <input type="text" className="form-control" placeholder="+91" required />
                                        </div>
                                        <div className="col-md-5">
                                            <label className="form-label fw-bold small">Phone Number</label>
                                            <input type="tel" className="form-control" required />
                                        </div>

                                        <div className="col-12 mt-4">
                                            <label className="form-label fw-bold small">Upload Resume/CV</label>
                                            <p className="small text-muted mb-2">Accepted formats: DOC, DOCX, HTML, PDF, TXT (Max 5MB)</p>
                                            <input 
                                                type="file" 
                                                className="form-control" 
                                                accept=".doc,.docx,.html,.pdf,.txt" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-gold w-100 py-2">Submit Profile</button>
                                        </div>
                                    </div>
                                </form>
                            )}

                            {activeTab === 'internship' && (
                                <form onSubmit={handleFormSubmit}>
                                    <h4 className="fw-bold mb-4 pb-2 border-bottom" style={{color: theme.accentGold}}>Apply for Internship</h4>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small">First Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small">Last Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label fw-bold small">Email ID</label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                        <div className="col-md-8">
                                            <label className="form-label fw-bold small">Law College / University Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label fw-bold small">Pass Year</label>
                                            <input type="number" className="form-control" placeholder="YYYY" required />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-bold small">Months of Internship</label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">From</span>
                                                <input type="month" className="form-control" required />
                                                <span className="input-group-text bg-light">To</span>
                                                <input type="month" className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-bold small">Description / Statement of Purpose</label>
                                            <textarea className="form-control" rows="4" placeholder="Why do you want to intern with us?" required></textarea>
                                        </div>

                                        <div className="col-12 mt-3">
                                            <label className="form-label fw-bold small">Upload Resume</label>
                                            <input type="file" className="form-control" accept=".pdf,.doc,.docx" required />
                                        </div>

                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-gold w-100 py-2">Apply for Internship</button>
                                        </div>
                                    </div>
                                </form>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      <style jsx>{`
        .text-blue { color: ${theme.primaryBlue}; }
        .text-gold { color: ${theme.accentGold}; }
        
        .career-banner {
          position: relative;
          background-image: url(/assets/images/our-firm4.png);
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 500px;
          padding: 100px 0;
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
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(207, 161, 68, 0.4);
        }

        .btn-gold-outline {
            border: 2px solid ${theme.accentGold};
            color: ${theme.accentGold};
            padding: 10px 33px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 2px;
            transition: all 0.3s ease;
            display: inline-block;
            background: transparent;
        }
        .btn-gold-outline:hover {
            background-color: ${theme.accentGold};
            color: #fff;
        }

        .btn-blue {
            background-color: ${theme.primaryBlue};
            color: white;
        }
        
        .search-card-responsive {
            margin-top: -80px;
            background-color: white;
        }

        @media (max-width: 991px) {
            .career-banner {
                padding: 120px 0 60px 0;
                min-height: auto;
                background-attachment: scroll; 
            }
            .search-card-responsive {
                margin-top: 0; 
                margin-bottom: 20px;
            }
        }
      `}</style>
    </>
  );
}

export default Careers;