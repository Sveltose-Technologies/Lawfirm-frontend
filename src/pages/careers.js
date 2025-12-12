// import React from 'react'

// import Link from 'next/link'

// function Careers() {
//   return (
//     <>
   
      
//       {/* --- Page Banner --- */}
//       <div className="inner-banner-section" style={{
//           backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop)', 
//           padding: '140px 0', 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           textAlign: 'center'
//         }}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <h1 className="text-white" style={{fontSize: '3.5rem', fontWeight: 'bold'}}>Careers</h1>
//               <p className="text-white lead mb-4">Impact. Opportunity. Culture. Growth.</p>
//               <Link href="/openings">
//                 <a className="eg-btn btn--primary btn--lg">View Openings and Apply</a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Section 1: Law Students --- */}
//       <div className="section-gap pt-100 pb-100">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//                {/* Image: Law Students / Library */}
//                <img 
//                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
//                  alt="Law Students" 
//                  className="img-fluid rounded shadow-lg" 
//                />
//             </div>
//             <div className="col-lg-6">
//               <div className="pl-lg-4">
//                 <h2 className="mb-4">Law Students</h2>
//                 <p className="text-secondary">
//                   With our broad geographic and practice platform, law students will find wide-ranging professional opportunities as they start their legal careers at Greenberg Traurig. We use creativity to educate – and ultimately empower – our new attorneys.
//                 </p>
//                 <p className="text-secondary">
//                   In addition to our mentoring programs, we provide our new associates with high-level training in client management, business development, collaboration, and cultural skills. Our success hinges on our ability to develop a class of lawyers who can adapt to our clients’ emerging needs.
//                 </p>
                
//                 <div className="mt-4">
//                   <h6 className="fw-bold mb-3 text-primary">Apply by Region:</h6>
//                   <div className="d-flex flex-wrap gap-2">
//                     <Link href="/careers/law-students/asia"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Asia</a></Link>
//                     <Link href="/careers/law-students/europe"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Europe</a></Link>
//                     <Link href="/careers/law-students/latin-america"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Latin America</a></Link>
//                     <Link href="/careers/law-students/united-states"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">United States</a></Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Section 2: Attorneys (Grey Background) --- */}
//       <div className="section-gap pt-100 pb-100 bg-light">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
//                {/* Image: Experienced Attorneys / Meeting */}
//                <img 
//                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
//                  alt="Attorneys" 
//                  className="img-fluid rounded shadow-lg" 
//                />
//             </div>
//             <div className="col-lg-6 order-lg-1">
//               <div className="pr-lg-4">
//                 <h2 className="mb-4">Attorneys</h2>
//                 <p className="text-secondary">
//                   Our global platform provides our experienced attorneys with unique professional opportunities as they grow their legal careers. Greenberg Traurig values and promotes inclusion and empowers attorneys at all levels to shape their own paths to success.
//                 </p>
//                 <p className="text-secondary">
//                   With sound financial management and a culture of entrepreneurship and collaboration, our attorneys are positioned to deliver both the quality and value that our clients seek, today and in the future.
//                 </p>
                
//                 <div className="mt-4">
//                   <h6 className="fw-bold mb-3 text-primary">Apply by Region:</h6>
//                   <div className="d-flex flex-wrap gap-2">
//                     <Link href="/careers/attorneys/asia"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Asia</a></Link>
//                     <Link href="/careers/attorneys/europe"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Europe</a></Link>
//                     <Link href="/careers/attorneys/latin-america"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Latin America</a></Link>
//                     <Link href="/careers/attorneys/united-states"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">United States</a></Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Section 3: Professional Staff --- */}
//       <div className="section-gap pt-100 pb-100">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//                {/* Image: Professional Staff / Teamwork */}
//                <img 
//                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
//                  alt="Professional Staff" 
//                  className="img-fluid rounded shadow-lg" 
//                />
//             </div>
//             <div className="col-lg-6">
//               <div className="pl-lg-4">
//                 <h2 className="mb-4">Professional Staff</h2>
//                 <p className="text-secondary">
//                   We offer a supportive, stimulating environment that encourages the qualities we value most: collaboration, professionalism, determination, inclusion, and trust.
//                 </p>
//                 <p className="text-secondary">
//                   We believe in promoting both professional and personal growth, along with pride of ownership, for every Greenberg Traurig employee.
//                 </p>
                
//                 <div className="mt-4">
//                   <h6 className="fw-bold mb-3 text-primary">Apply by Region:</h6>
//                   <div className="d-flex flex-wrap gap-2">
//                     <Link href="/careers/staff/europe"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Europe</a></Link>
//                     <Link href="/careers/staff/united-states"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">United States</a></Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row mt-5">
//             <div className="col-12 text-center">
//               <p className="text-muted fst-italic small">*Images on this page are not GT employees.</p>
//             </div>
//           </div>

//         </div>
//       </div>

//     </>
//   )
// }

// export default Careers


import React from 'react';
import Head from 'next/head';

function Careers() {
  // --- Custom Theme Colors ---
  const theme = {
    primaryBlue: '#002855',
    accentGold: '#cfa144',
    textDark: '#212529',
    textGray: '#6c757d',
    bgLight: '#f8f9fa'
  };

  // --- Handle Click (Prevent 404) ---
  const handleLessClick = (e) => {
    e.preventDefault(); // यह पेज को बदलने से रोकेगा
    alert("Applications for this region will open soon!"); // यूजर को मैसेज देगा
  };

  return (
    <>
      <Head>
        <title>Careers | Greenberg Traurig</title>
      </Head>

      {/* --- Page Banner --- */}
      <div className="career-banner">
        <div className="overlay"></div>
        <div className="container position-relative z-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <span className="text-gold text-uppercase fw-bold ls-2">Join Our Team</span>
              <h1 className="text-white display-3 fw-bold mt-3 mb-4 font-serif">
                Impact. Opportunity. <span className="text-gold">Growth.</span>
              </h1>
              <p className="text-white lead mb-5 opacity-75" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Build a career that matters. At Greenberg Traurig, we empower you to shape your own path to success in a collaborative global environment.
              </p>
              <button onClick={handleLessClick} className="btn-gold">
                View Openings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 1: Law Students --- */}
      <div className="section-gap py-5 my-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
               <div className="image-wrapper">
                 <img 
                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
                   alt="Law Students" 
                   className="img-fluid" 
                 />
               </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <h6 className="text-gold text-uppercase fw-bold mb-2">Start Your Journey</h6>
                <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Law Students</h2>
                <p className="text-muted mb-3">
                  With our broad geographic and practice platform, law students will find wide-ranging professional opportunities as they start their legal careers. We use creativity to educate – and ultimately empower – our new attorneys.
                </p>
                <p className="text-muted mb-4">
                  We provide our new associates with high-level training in client management, business development, collaboration, and cultural skills.
                </p>
                
                <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold">
                  <h6 className="fw-bold mb-3 text-dark">Apply by Region:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {/* Links replaced with dummy buttons to prevent 404 */}
                    {['Asia', 'Europe', 'Latin America', 'United States'].map((region) => (
                      <button key={region} onClick={handleLessClick} className="btn-chip">
                        {region}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Attorneys (Alternate BG) --- */}
      <div className="section-gap py-5" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
               <div className="image-wrapper">
                 <img 
                   src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                   alt="Attorneys" 
                   className="img-fluid" 
                 />
               </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="content-box">
                <h6 className="text-gold text-uppercase fw-bold mb-2">Grow With Us</h6>
                <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Experienced Attorneys</h2>
                <p className="text-muted mb-3">
                  Our global platform provides our experienced attorneys with unique professional opportunities. We value and promote inclusion and empower attorneys at all levels to shape their own paths to success.
                </p>
                <p className="text-muted mb-4">
                  With sound financial management and a culture of entrepreneurship, our attorneys are positioned to deliver quality and value.
                </p>
                
                <div className="region-box p-4 bg-white rounded-3 border-start border-4 border-gold shadow-sm">
                  <h6 className="fw-bold mb-3 text-dark">Apply by Region:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['Asia', 'Europe', 'Latin America', 'United States'].map((region) => (
                      <button key={region} onClick={handleLessClick} className="btn-chip">
                        {region}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 3: Professional Staff --- */}
      <div className="section-gap py-5 my-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
               <div className="image-wrapper">
                 <img 
                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                   alt="Professional Staff" 
                   className="img-fluid" 
                 />
               </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <h6 className="text-gold text-uppercase fw-bold mb-2">Support & Excellence</h6>
                <h2 className="mb-4 display-6 fw-bold text-blue font-serif">Professional Staff</h2>
                <p className="text-muted mb-3">
                  We offer a supportive, stimulating environment that encourages the qualities we value most: collaboration, professionalism, determination, inclusion, and trust.
                </p>
                <p className="text-muted mb-4">
                  We believe in promoting both professional and personal growth, along with pride of ownership, for every employee.
                </p>
                
                <div className="region-box p-4 bg-light rounded-3 border-start border-4 border-gold">
                  <h6 className="fw-bold mb-3 text-dark">Apply by Region:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['Europe', 'United States'].map((region) => (
                      <button key={region} onClick={handleLessClick} className="btn-chip">
                        {region}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-4">
            <div className="col-12 text-center">
           
            </div>
          </div>

        </div>
      </div>

      {/* --- STYLES (CSS) --- */}
      <style jsx>{`
        /* Colors */
        .text-blue { color: ${theme.primaryBlue}; }
        .text-gold { color: ${theme.accentGold}; }
        
        /* Banner Styles */
        .career-banner {
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 180px 0;
          color: white;
        }
        .career-banner .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(0,40,85,0.9), rgba(0,40,85,0.7));
        }
        
        /* Typography */
        .font-serif { font-family: 'Playfair Display', serif; }
        .ls-2 { letter-spacing: 2px; }
        
        /* Buttons */
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
        }
        .btn-gold:hover {
          background-color: #b58b36;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(207, 161, 68, 0.4);
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

        /* Image Styling */
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
        
        /* Region Box */
        .region-box {
          transition: transform 0.3s ease;
        }
        .region-box:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </>
  );
}

export default Careers;