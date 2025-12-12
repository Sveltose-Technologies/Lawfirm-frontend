

// import React from 'react'


// import Link from 'next/link'

// function OurFirm() {
//   // Theme Constants
//   const themeColors = {
//     primaryBlue: '#0a1c38',
//     accentGold: '#D4AF37',   // Gold sirf headings/accents ke liye rakha hai
//     lightGray: 'rgb(244, 247, 246)',
//     white: '#ffffff'
//   };

//   return (
//     <>
     
      
//       {/* ========================================================================== 
//           HERO BANNER 
//       ========================================================================== */}
//       <div className="inner-banner-section d-flex align-items-center justify-content-center" style={{
//           backgroundImage: 'linear-gradient(rgba(10, 28, 56, 0.7), rgba(10, 28, 56, 0.7)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop)', 
//           minHeight: '60vh',
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           textAlign: 'center'
//         }}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <h1 className="text-white display-3 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Our Firm</h1>
//               <p className="text-white lead fs-4" style={{ letterSpacing: '1px' }}>Culture. Commitment. Engagement.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           SECTION 1: AWARDS & ACCOLADES 
//       ========================================================================== */}
//       <div className="section-gap py-5" style={{ backgroundColor: themeColors.white }}>
//         <div className="container py-lg-4">
//           <div className="row align-items-center">
            
//             <div className="col-lg-6 mb-4 mb-lg-0">
//                <div style={{ height: '400px', overflow: 'hidden' }}>
//                  <img 
//                    src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop" 
//                    alt="Awards" 
//                    className="img-fluid w-100 h-100 rounded shadow"
//                    style={{ objectFit: 'cover' }} 
//                  />
//                </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="ps-lg-5">
//                 <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
//                   Recognition
//                 </span>
//                 <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
//                   Awards & Accolades
//                 </h2>
//                 <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
//                   We are thankful for the trust our clients place in us and we are proud of being recognized for the service we provide. Our commitment to excellence drives us to achieve the best results for our clients.
//                 </p>
//                 <div className="mt-4">
//                   <Link href="/awards"><a className="btn-premium">View Awards</a></Link>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           SECTION 2: INNOVATION 
//       ========================================================================== */}
//       <div className="section-gap py-5" style={{ backgroundColor: themeColors.lightGray }}>
//         <div className="container py-lg-4">
//           <div className="row align-items-center">
            
//             <div className="col-lg-6 order-2 order-lg-1">
//               <div className="pe-lg-5">
//                 <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
//                   Innovation
//                 </span>
//                 <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
//                   Innovative Client Strategies
//                 </h2>
//                 <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
//                   At GT, innovation is more than just talk. It’s in our DNA. GT utilizes a systemic, holistic approach to innovation, helping you cut through the noise.
//                 </p>
//                 {/* <div className="mt-4">
//                   <Link href="/practice-areas"><a className="btn-premium">Our Strategies</a></Link>
//                 </div> */}
//               </div>
//             </div>

//             <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
//                <div style={{ height: '400px', overflow: 'hidden' }}>
//                  <img 
//                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
//                    alt="Innovation" 
//                    className="img-fluid w-100 h-100 rounded shadow"
//                    style={{ objectFit: 'cover' }} 
//                  />
//                </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           SECTION 3: CULTURE 
//       ========================================================================== */}
//       <div className="section-gap py-5" style={{ backgroundColor: themeColors.white }}>
//         <div className="container py-lg-4">
//           <div className="row align-items-center">
            
//             <div className="col-lg-6 mb-4 mb-lg-0">
//                <div style={{ height: '400px', overflow: 'hidden' }}>
//                  <img 
//                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
//                    alt="Culture" 
//                    className="img-fluid w-100 h-100 rounded shadow"
//                    style={{ objectFit: 'cover' }} 
//                  />
//                </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="ps-lg-5">
//                 <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
//                   Our People
//                 </span>
//                 <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
//                   Engagement, Culture <br/> & Opportunity
//                 </h2>
//                 <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
//                   At Greenberg Traurig, we believe the best ideas come from people with the drive to challenge expectations and the determination to deliver results.
//                 </p>
//                 <div className="mt-4">
//                   <Link href="/careers"><a className="btn-premium">Join Our Team</a></Link>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           SECTION 4: IMPACT (Dark Blue Section)
//       ========================================================================== */}
//       <div className="section-gap py-5" style={{backgroundColor: themeColors.primaryBlue}}>
//         <div className="container py-lg-4">
//           <div className="row g-5">
            
//             <div className="col-lg-6 border-end border-secondary border-opacity-25">
//               <div className="p-2">
//                 <h3 className="text-white display-6 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Pro Bono</h3>
//                 <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
//                   We are committed to leveraging our global platform to bring equal access to justice to the underserved.
//                 </p>
//                 <div className="mt-4">
//                    <Link href="/pro-bono"><a className="btn btn-outline-light rounded-0 px-4 py-2">Learn More</a></Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="p-2 ps-lg-4">
//                 <h3 className="text-white display-6 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Community Impact</h3>
//                 <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
//                   We are committed, both as a firm and as individuals, to making an impact on the communities in which we live and work.
//                 </p>
//                 <div className="mt-4">
//                    <Link href="/community"><a className="btn btn-outline-light rounded-0 px-4 py-2">Learn More</a></Link>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           SECTION 5: LEGACY 
//       ========================================================================== */}
//       <div className="section-gap py-5" style={{ backgroundColor: themeColors.lightGray }}>
//         <div className="container py-lg-4">
//           <div className="row align-items-center">
            
//              <div className="col-lg-6 order-2 order-lg-1">
//               <div className="pe-lg-5">
//                 <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
//                   Our History
//                 </span>
//                 <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
//                   A Legacy of Service
//                 </h2>
//                 <p className="text-secondary mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
//                   From our humble beginnings in 1967 in South Florida, our focus has never changed: serve clients better.
//                 </p>
//                 <div className="mt-4">
//                   <Link href="/history"><a className="btn-premium">Our Story</a></Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
//                <div style={{ height: '400px', overflow: 'hidden' }}>
//                  <img 
//                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
//                    alt="History" 
//                    className="img-fluid w-100 h-100 rounded shadow"
//                    style={{ objectFit: 'cover' }} 
//                  />
//                </div>
//             </div>

//           </div>
//         </div>
//       </div>


//       {/* ========================================================================== 
//           STYLES (Light Blue Hover Applied)
//       ========================================================================== */}
//       <style jsx>{`
//         .btn-premium {
//             background-color: #0a1c38; /* Dark Blue Default */
//             color: #ffffff;
//             padding: 12px 30px;
//             font-weight: 700;
//             text-transform: uppercase;
//             letter-spacing: 1px;
//             border: 1px solid #0a1c38;
//             text-decoration: none;
//             display: inline-block;
//             transition: all 0.3s ease-in-out;
//             box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//         }

//         .btn-premium:hover {
//             background-color: white; /* Sky Blue / Light Blue Hover */
           
//             color: black; /* Keeping text white looks cleaner on Blue */
//             transform: translateY(-3px);
           
//         }
//       `}</style>
//     </>
//   )
// }

// export default OurFirm


import React from 'react'

function OurFirm() {
  // Theme Constants
  const themeColors = {
    primaryBlue: '#0a1c38',
    accentGold: '#D4AF37',   
    lightGray: 'rgb(244, 247, 246)',
    white: '#ffffff'
  };

  // --- Handle Dead Click (No Action, No Error) ---
  const handleDeadClick = (e) => {
    e.preventDefault(); // यह पेज को कहीं भी जाने से रोकता है
  };

  return (
    <>
      {/* ========================================================================== 
          HERO BANNER 
      ========================================================================== */}
      <div className="inner-banner-section d-flex align-items-center justify-content-center" style={{
          backgroundImage: 'linear-gradient(rgba(10, 28, 56, 0.7), rgba(10, 28, 56, 0.7)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop)', 
          minHeight: '60vh',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-white display-3 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Our Firm</h1>
              <p className="text-white lead fs-4" style={{ letterSpacing: '1px' }}>Culture. Commitment. Engagement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================== 
          SECTION 1: AWARDS & ACCOLADES 
      ========================================================================== */}
      <div className="section-gap py-5" style={{ backgroundColor: themeColors.white }}>
        <div className="container py-lg-4">
          <div className="row align-items-center">
            
            <div className="col-lg-6 mb-4 mb-lg-0">
               <div style={{ height: '400px', overflow: 'hidden' }}>
                 <img 
                   src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop" 
                   alt="Awards" 
                   className="img-fluid w-100 h-100 rounded shadow"
                   style={{ objectFit: 'cover' }} 
                 />
               </div>
            </div>

            <div className="col-lg-6">
              <div className="ps-lg-5">
                <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
                  Recognition
                </span>
                <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
                  Awards & Accolades
                </h2>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                  We are thankful for the trust our clients place in us and we are proud of being recognized for the service we provide. Our commitment to excellence drives us to achieve the best results for our clients.
                </p>
                <div className="mt-4">
                  {/* Changed Link to anchor tag with preventDefault */}
                  <a href="#" onClick={handleDeadClick} className="btn-premium">View Awards</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          SECTION 2: INNOVATION 
      ========================================================================== */}
      <div className="section-gap py-5" style={{ backgroundColor: themeColors.lightGray }}>
        <div className="container py-lg-4">
          <div className="row align-items-center">
            
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="pe-lg-5">
                <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
                  Innovation
                </span>
                <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
                  Innovative Client Strategies
                </h2>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                  At GT, innovation is more than just talk. It’s in our DNA. GT utilizes a systemic, holistic approach to innovation, helping you cut through the noise.
                </p>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
               <div style={{ height: '400px', overflow: 'hidden' }}>
                 <img 
                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                   alt="Innovation" 
                   className="img-fluid w-100 h-100 rounded shadow"
                   style={{ objectFit: 'cover' }} 
                 />
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          SECTION 3: CULTURE 
      ========================================================================== */}
      <div className="section-gap py-5" style={{ backgroundColor: themeColors.white }}>
        <div className="container py-lg-4">
          <div className="row align-items-center">
            
            <div className="col-lg-6 mb-4 mb-lg-0">
               <div style={{ height: '400px', overflow: 'hidden' }}>
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                   alt="Culture" 
                   className="img-fluid w-100 h-100 rounded shadow"
                   style={{ objectFit: 'cover' }} 
                 />
               </div>
            </div>

            <div className="col-lg-6">
              <div className="ps-lg-5">
                <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
                  Our People
                </span>
                <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
                  Engagement, Culture <br/> & Opportunity
                </h2>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                  At Greenberg Traurig, we believe the best ideas come from people with the drive to challenge expectations and the determination to deliver results.
                </p>
                <div className="mt-4">
                  <a href="#" onClick={handleDeadClick} className="btn-premium">Join Our Team</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          SECTION 4: IMPACT (Dark Blue Section)
      ========================================================================== */}
      <div className="section-gap py-5" style={{backgroundColor: themeColors.primaryBlue}}>
        <div className="container py-lg-4">
          <div className="row g-5">
            
            <div className="col-lg-6 border-end border-secondary border-opacity-25">
              <div className="p-2">
                <h3 className="text-white display-6 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Pro Bono</h3>
                <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  We are committed to leveraging our global platform to bring equal access to justice to the underserved.
                </p>
                <div className="mt-4">
                   <a href="#" onClick={handleDeadClick} className="btn btn-outline-light rounded-0 px-4 py-2">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-2 ps-lg-4">
                <h3 className="text-white display-6 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Community Impact</h3>
                <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  We are committed, both as a firm and as individuals, to making an impact on the communities in which we live and work.
                </p>
                <div className="mt-4">
                   <a href="#" onClick={handleDeadClick} className="btn btn-outline-light rounded-0 px-4 py-2">Learn More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          SECTION 5: LEGACY 
      ========================================================================== */}
      <div className="section-gap py-5" style={{ backgroundColor: themeColors.lightGray }}>
        <div className="container py-lg-4">
          <div className="row align-items-center">
            
             <div className="col-lg-6 order-2 order-lg-1">
              <div className="pe-lg-5">
                <span className="d-block mb-2" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
                  Our History
                </span>
                <h2 className="mb-4 display-5 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
                  A Legacy of Service
                </h2>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                  From our humble beginnings in 1967 in South Florida, our focus has never changed: serve clients better.
                </p>
                <div className="mt-4">
                  <a href="#" onClick={handleDeadClick} className="btn-premium">Our Story</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
               <div style={{ height: '400px', overflow: 'hidden' }}>
                 <img 
                   src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                   alt="History" 
                   className="img-fluid w-100 h-100 rounded shadow"
                   style={{ objectFit: 'cover' }} 
                 />
               </div>
            </div>

          </div>
        </div>
      </div>


      {/* ========================================================================== 
          STYLES
      ========================================================================== */}
      <style jsx>{`
        .btn-premium {
            background-color: #0a1c38;
            color: #ffffff;
            padding: 12px 30px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 1px solid #0a1c38;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            cursor: pointer;
        }

        .btn-premium:hover {
            background-color: white;
            color: #0a1c38;
            transform: translateY(-3px);
        }
      `}</style>
    </>
  )
}

export default OurFirm;