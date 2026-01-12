

// // // import React from 'react'

// // // function OurFirm() {
// // //   // Theme Constants
// // //   const themeColors = {
// // //     primaryBlue: '#0a1c38',
// // //     accentGold: '#D4AF37',   
// // //     lightGray: 'rgb(244, 247, 246)',
// // //     white: '#ffffff'
// // //   };

// // //   const handleDeadClick = (e) => {
// // //     e.preventDefault();
// // //   };

// // //   return (
// // //     <>
// // //       {/* ========================================================================== 
// // //           HERO BANNER (Height reduced, Padding reduced)
// // //       ========================================================================== */}
// // //       <div className="inner-banner-section d-flex align-items-center justify-content-center" style={{
// // //           backgroundImage: "linear-gradient(rgba(10, 28, 56, 0.7), rgba(10, 28, 56, 0.7)), url('/assets/images/our-firm4.png')", 
// // //           minHeight: '40vh', // Reduced from 60vh
// // //           backgroundSize: 'cover', 
// // //           backgroundPosition: 'center', 
// // //           textAlign: 'center'
// // //         }}>
// // //         <div className="container">
// // //           <div className="row justify-content-center">
// // //             <div className="col-lg-10">
// // //               {/* Reduced margins */}
// // //               <h1 className="text-white display-4 fw-bold mb-2" style={{ fontFamily: 'serif' }}>Our Firm</h1>
// // //               <p className="text-white lead fs-5 mb-0" style={{ letterSpacing: '1px' }}>Culture. Commitment. Engagement.</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

     
// // //       {/* ========================================================================== 
// // //           SECTION 2: INNOVATION (Gap Reduced)
// // //       ========================================================================== */}
// // //       <div className="section-gap py-4" style={{ backgroundColor: themeColors.lightGray }}> {/* py-5 -> py-4 */}
// // //         <div className="container py-2">
// // //           <div className="row align-items-center">
            
// // //             <div className="col-lg-6 order-2 order-lg-1">
// // //               <div className="pe-lg-5">
// // //                 <span className="d-block mb-1" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem'}}>
// // //                   Innovation
// // //                 </span>
// // //                 <h2 className="mb-3 display-6 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
// // //                   Innovative Client Strategies
// // //                 </h2>
// // //                 <p className="text-secondary mb-3" style={{ lineHeight: '1.6' }}>
// // //                   At GT, innovation is more than just talk. It’s in our DNA. GT utilizes a systemic, holistic approach to innovation, helping you cut through the noise.
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0">
// // //                <div style={{ height: '300px', overflow: 'hidden' }}> {/* Height reduced */}
// // //                  <img 
// // //                    src="/assets/images/our-firm2.png" 
// // //                    alt="Innovation" 
// // //                    className="img-fluid w-100 h-100 rounded shadow"
// // //                    style={{ objectFit: 'cover' }} 
// // //                  />
// // //                </div>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ========================================================================== 
// // //           SECTION 3: CULTURE (Gap Reduced)
// // //       ========================================================================== */}
// // //       <div className="section-gap py-4" style={{ backgroundColor: themeColors.white }}>
// // //         <div className="container py-2">
// // //           <div className="row align-items-center">
            
// // //             <div className="col-lg-6 mb-3 mb-lg-0">
// // //                <div style={{ height: '300px', overflow: 'hidden' }}> {/* Height reduced */}
// // //                  <img 
// // //                    src="/assets/images/our-firm3.png" 
// // //                    alt="Culture" 
// // //                    className="img-fluid w-100 h-100 rounded shadow"
// // //                    style={{ objectFit: 'cover' }} 
// // //                  />
// // //                </div>
// // //             </div>

// // //             <div className="col-lg-6">
// // //               <div className="ps-lg-5">
// // //                 <span className="d-block mb-1" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem'}}>
// // //                   Our People
// // //                 </span>
// // //                 <h2 className="mb-3 display-6 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
// // //                   Engagement, Culture & Opportunity
// // //                 </h2>
// // //                 <p className="text-secondary mb-3" style={{ lineHeight: '1.6' }}>
// // //                   At Greenberg Traurig, we believe the best ideas come from people with the drive to challenge expectations and the determination to deliver results.
// // //                 </p>
// // //                 <div className="mt-3">
// // //                   <a href="#" onClick={handleDeadClick} className="btn-premium btn-sm">Join Our Team</a>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ========================================================================== 
// // //           SECTION 4: IMPACT (Gap Reduced)
// // //       ========================================================================== */}
// // //       <div className="section-gap py-4" style={{backgroundColor: themeColors.primaryBlue}}>
// // //         <div className="container py-2">
// // //           <div className="row g-4"> {/* g-5 -> g-4 */}
            
// // //             <div className="col-lg-6 border-end border-secondary border-opacity-25">
// // //               <div className="p-2">
// // //                 <h3 className="text-white h2 fw-bold mb-2" style={{ fontFamily: 'serif' }}>Pro Bono</h3>
// // //                 <p className="text-white-50 mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
// // //                   We are committed to leveraging our global platform to bring equal access to justice to the underserved.
// // //                 </p>
// // //                 <div className="mt-2">
// // //                    <a href="#" onClick={handleDeadClick} className="btn btn-outline-light btn-sm rounded-0 px-4 py-2">Learn More</a>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="col-lg-6">
// // //               <div className="p-2 ps-lg-4">
// // //                 <h3 className="text-white h2 fw-bold mb-2" style={{ fontFamily: 'serif' }}>Community Impact</h3>
// // //                 <p className="text-white-50 mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
// // //                   We are committed, both as a firm and as individuals, to making an impact on the communities in which we live and work.
// // //                 </p>
// // //                 <div className="mt-2">
// // //                    <a href="#" onClick={handleDeadClick} className="btn btn-outline-light btn-sm rounded-0 px-4 py-2">Learn More</a>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ========================================================================== 
// // //           SECTION 5: LEGACY (Gap Reduced)
// // //       ========================================================================== */}
// // //       <div className="section-gap py-4" style={{ backgroundColor: themeColors.lightGray }}>
// // //         <div className="container py-2">
// // //           <div className="row align-items-center">
            
// // //              <div className="col-lg-6 order-2 order-lg-1">
// // //               <div className="pe-lg-5">
// // //                 <span className="d-block mb-1" style={{color: themeColors.accentGold, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem'}}>
// // //                   Our History
// // //                 </span>
// // //                 <h2 className="mb-3 display-6 fw-bold" style={{ color: themeColors.primaryBlue, fontFamily: 'serif' }}>
// // //                   A Legacy of Service
// // //                 </h2>
// // //                 <p className="text-secondary mb-3" style={{ lineHeight: '1.6', fontSize: '1rem' }}>
// // //                   From our humble beginnings in 1967 in South Florida, our focus has never changed: serve clients better.
// // //                 </p>
// // //                 <div className="mt-3">
// // //                   <a href="#" onClick={handleDeadClick} className="btn-premium btn-sm">Our Story</a>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0">
// // //                <div style={{ height: '300px', overflow: 'hidden' }}> {/* Height reduced */}
// // //                  <img 
// // //                    src="/assets/images/our-firm4.png" 
// // //                    alt="History" 
// // //                    className="img-fluid w-100 h-100 rounded shadow"
// // //                    style={{ objectFit: 'cover' }} 
// // //                  />
// // //                </div>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </div>


// // //       {/* ========================================================================== 
// // //           STYLES
// // //       ========================================================================== */}
// // //       <style jsx>{`
// // //         .btn-premium {
// // //             background-color: #0a1c38;
// // //             color: #ffffff;
// // //             padding: 10px 25px; /* Reduced padding */
// // //             font-weight: 600;
// // //             text-transform: uppercase;
// // //             letter-spacing: 1px;
// // //             border: 1px solid #0a1c38;
// // //             text-decoration: none;
// // //             display: inline-block;
// // //             transition: all 0.3s ease-in-out;
// // //             box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // //             cursor: pointer;
// // //             font-size: 0.9rem; /* Reduced Font Size */
// // //         }

// // //         .btn-premium:hover {
// // //             background-color: white;
// // //             color: #0a1c38;
// // //             transform: translateY(-2px);
// // //         }
// // //       `}</style>
// // //     </>
// // //   )
// // // }

// // // export default OurFirm;

// // import React, { useEffect, useState } from 'react';
// // import { getAllOurFirm, IMG_URL } from '../services/authService'

// // function OurFirm() {
// //   const [firmData, setFirmData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const themeColors = {
// //     primaryBlue: '#0a1c38',
// //     accentGold: '#D4AF37',   
// //     lightGray: 'rgb(244, 247, 246)',
// //     white: '#ffffff'
// //   };

// //   useEffect(() => {
// //     getAllOurFirm().then(res => {
// //       if (res?.success && res.data.length > 0) setFirmData(res.data[0]);
// //       setLoading(false);
// //     }).catch(() => setLoading(false));
// //   }, []);

// //   if (loading || !firmData) return <div className="text-center py-5">Loading...</div>;

// //   return (
// //     <>
// //       <div className="hero-banner" style={{
// //           backgroundImage: `linear-gradient(rgba(10, 28, 56, 0.7), rgba(10, 28, 56, 0.7)), url('${IMG_URL}/${firmData.bannerImage}')`, 
// //           minHeight: '45vh', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'
// //         }}>
// //         <div className="container text-center">
// //           <h1 className="text-white display-4 fw-bold font-serif">Our Firm</h1>
// //           <p className="text-white lead">Culture. Commitment. Engagement.</p>
// //         </div>
// //       </div>

// //       {/* Innovation Section */}
// //       <div className="py-5" style={{ backgroundColor: themeColors.lightGray }}>
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <div className="col-lg-6 order-2 order-lg-1">
// //               <span className="text-gold fw-bold mb-2 d-block">INNOVATION</span>
// //               <h2 className="fw-bold font-serif mb-3">Innovative Client Strategies</h2>
// //               <div className="text-secondary" dangerouslySetInnerHTML={{ __html: firmData.innovationContent }} />
// //             </div>
// //             <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
// //                <div className="img-wrapper">
// //                  <img src={`${IMG_URL}/${firmData.innovationImage}`} className="img-cover shadow rounded" />
// //                </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* People Section */}
// //       <div className="py-5 bg-white">
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <div className="col-lg-6 mb-4 mb-lg-0">
// //                <div className="img-wrapper">
// //                  <img src={`${IMG_URL}/${firmData.peopleImage}`} className="img-cover shadow rounded" />
// //                </div>
// //             </div>
// //             <div className="col-lg-6 ps-lg-5">
// //               <span className="text-gold fw-bold mb-2 d-block">OUR PEOPLE</span>
// //               <h2 className="fw-bold font-serif mb-3">Engagement, Culture & Opportunity</h2>
// //               <div className="text-secondary" dangerouslySetInnerHTML={{ __html: firmData.peopleContent }} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* History Section */}
// //       <div className="py-5" style={{ backgroundColor: themeColors.lightGray }}>
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <div className="col-lg-6 order-2 order-lg-1">
// //               <span className="text-gold fw-bold mb-2 d-block">OUR HISTORY</span>
// //               <h2 className="fw-bold font-serif mb-3">A Legacy of Service</h2>
// //               <div className="text-secondary" dangerouslySetInnerHTML={{ __html: firmData.historyContent }} />
// //             </div>
// //             <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
// //                <div className="img-wrapper">
// //                  <img src={`${IMG_URL}/${firmData.historyImage}`} className="img-cover shadow rounded" />
// //                </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .font-serif { font-family: "Georgia", serif; }
// //         .text-gold { color: ${themeColors.accentGold}; text-transform: uppercase; letter-spacing: 1.5px; }
// //         .img-wrapper { height: 350px; width: 100%; overflow: hidden; }
// //         .img-cover { width: 100%; height: 100%; object-fit: cover; object-position: center; }
// //       `}</style>
// //     </>
// //   );
// // }
// // export default OurFirm;

// import React, { useEffect, useState } from 'react';
// import { getAllOurFirm, IMG_URL } from '../services/authService';

// function OurFirm() {
//   const [firmData, setFirmData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getAllOurFirm().then(res => {
//       if (res?.success && res.data.length > 0) setFirmData(res.data[0]);
//       setLoading(false);
//     }).catch(() => setLoading(false));
//   }, []);

//   if (loading || !firmData) return <div className="text-center py-5 my-5">Loading...</div>;

//   return (
//     <>
//       {/* Banner - Original style with reduced height (40vh) */}
//       <div className="hero-banner" style={{
//           backgroundImage: `linear-gradient(rgba(10, 28, 56, 0.7), rgba(10, 28, 56, 0.7)), url('${IMG_URL}/${firmData.bannerImage}')`, 
//           minHeight: '40vh', 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center'
//         }}>
//         <div className="container text-center">
//           <h1 className="text-white display-4 fw-bold font-serif">Our Firm</h1>
//           <p className="text-white lead">Culture. Commitment. Engagement.</p>
//         </div>
//       </div>

//       {/* Innovation Section - Using Global CSS and Bootstrap */}
//       <div className="py-5 bg-light-gray">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6 order-2 order-lg-1">
//               <span className="text-gold tracking-wide d-block mb-2">INNOVATION</span>
//               <h2 className="display-5 fw-bold font-serif mb-3 text-dark">Innovative Client Strategies</h2>
//               <div className="text-dark" dangerouslySetInnerHTML={{ __html: firmData.innovationContent }} />
//             </div>
//             <div className="col-lg-6 order-1 order-lg-2">
//                <img 
//                  src={`${IMG_URL}/${firmData.innovationImage}`} 
//                  className="img-cover card-shadow rounded" 
//                  alt="Innovation"
//                />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* People Section - Using Global CSS and Bootstrap */}
//       <div className="py-5 bg-white">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6">
//                <img 
//                  src={`${IMG_URL}/${firmData.peopleImage}`} 
//                  className="img-cover card-shadow rounded" 
//                  alt="Our People"
//                />
//             </div>
//             <div className="col-lg-6 ps-lg-5">
//               <span className="text-gold tracking-wide d-block mb-2">OUR PEOPLE</span>
//               <h2 className="display-5 fw-bold font-serif mb-3 text-dark">Engagement, Culture & Opportunity</h2>
//               <div className="text-dark" dangerouslySetInnerHTML={{ __html: firmData.peopleContent }} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* History Section - Using Global CSS and Bootstrap */}
//       <div className="py-5 bg-light-gray">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6 order-2 order-lg-1">
//               <span className="text-gold tracking-wide d-block mb-2">OUR HISTORY</span>
//               <h2 className="display-5 fw-bold font-serif mb-3 text-dark">A Legacy of Service</h2>
//               <div className="text-dark" dangerouslySetInnerHTML={{ __html: firmData.historyContent }} />
//             </div>
//             <div className="col-lg-6 order-1 order-lg-2">
//                <img 
//                  src={`${IMG_URL}/${firmData.historyImage}`} 
//                  className="img-cover card-shadow rounded" 
//                  alt="Our History"
//                />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OurFirm;


import React, { useEffect, useState } from 'react';
import { getAllOurFirm, IMG_URL } from '../services/authService';

function OurFirm() {
  const [firmData, setFirmData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllOurFirm()
      .then((res) => {
        console.log("📡 Our Firm API Data:", res);
        if (res?.success && res.data && res.data.length > 0) {
          setFirmData(res.data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ API Error:", err);
        setLoading(false);
      });
  }, []);

  // Helper function to build correct Image URL
  const getFullImg = (path) => {
    if (!path) return "";
    // Agar path pehle se http se shuru hota hai to wahi rakho, warna IMG_URL jodo
    return path.startsWith("http") ? path : `${IMG_URL}/${path}`;
  };

  if (loading) return <div className="text-center py-5 my-5">Loading...</div>;
  if (!firmData) return <div className="text-center py-5 my-5">No firm data available.</div>;

  return (
    <>
      {/* Banner - Blue Tint hatakar Neutral Dark Overlay rakha hai */}
      <div 
        className="hero-banner" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${getFullImg(firmData.bannerImage)}')`, 
          height: '45vh', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: '70px' 

        }}
      >
        <div className="container text-center pt-5">
          <h1 className="text-white display-3 fw-bold font-serif">Our Firm</h1>
          <p className="text-white lead fs-4">Culture. Commitment. Engagement.</p>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <span className="text-gold tracking-wide d-block mb-2 fw-bold">INNOVATION</span>
              <h2 className="display-5 fw-bold font-serif mb-4 text-dark" style={{ color: 'var(--primary-blue) !important' }}>Innovative Client Strategies</h2>
              <div className="text-dark fs-5 cms-content" dangerouslySetInnerHTML={{ __html: firmData.innovationContent }} />
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
               <img 
                 src={getFullImg(firmData.innovationImage)} 
                 className="img-fluid rounded shadow-lg w-100" 
                 style={{ height: '400px', objectFit: 'cover' }}
                 alt="Innovation"
               />
            </div>
          </div>
        </div>
      </div>

      {/* People Section */}
      <div className="py-5 bg-white">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
               <img 
                 src={getFullImg(firmData.peopleImage)} 
                 className="img-fluid rounded shadow-lg w-100" 
                 style={{ height: '400px', objectFit: 'cover' }}
                 alt="Our People"
               />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <span className="text-gold tracking-wide d-block mb-2 fw-bold">OUR PEOPLE</span>
              <h2 className="display-5 fw-bold font-serif mb-4 text-dark">Engagement, Culture & Opportunity</h2>
              <div className="text-dark fs-5 cms-content" dangerouslySetInnerHTML={{ __html: firmData.peopleContent }} />
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <span className="text-gold tracking-wide d-block mb-2 fw-bold">OUR HISTORY</span>
              <h2 className="display-5 fw-bold font-serif mb-4 text-dark">A Legacy of Service</h2>
              <div className="text-dark fs-5 cms-content" dangerouslySetInnerHTML={{ __html: firmData.historyContent }} />
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
               <img 
                 src={getFullImg(firmData.historyImage)} 
                 className="img-fluid rounded shadow-lg w-100" 
                 style={{ height: '400px', objectFit: 'cover' }}
                 alt="Our History"
               />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: var(--font-serif), serif; }
        .text-gold { color: var(--primary-gold) !important; }
        .tracking-wide { letter-spacing: 2px; text-transform: uppercase; font-size: 0.85rem; }
        .cms-content :global(p) { margin-bottom: 1rem; line-height: 1.8; }
        
        @media (max-width: 991px) {
          .img-fluid { height: 300px !important; margin-bottom: 20px; }
          .display-3 { font-size: 2.8rem !important; }
          .display-5 { font-size: 2rem !important; }
        }
      `}</style>
    </>
  );
}

export default OurFirm;