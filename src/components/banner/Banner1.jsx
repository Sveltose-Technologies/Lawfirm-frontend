// import Link from 'next/link'
// import React from 'react'
// import Greenberg from '../home-contend/Greenberg'

// function Banner1() {
//   return (
//     <>
//       {/* ========================================================================== 
//           PART 1: ORIGINAL BANNER SECTION 
//       ========================================================================== */}
//       <div 
//         className="banner-section d-flex align-items-center justify-content-center" 
//         style={{ minHeight: '100vh', padding: '0' }}
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="banner-content text-center">

//                 {/* Stats Section */}
//                 <div className="row text-center mt-5">
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">2,500+</h2>
//                     <p className="text-white fs-5">Total Client Consultations</p>
//                   </div>
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">98%</h2>
//                     <p className="text-white fs-5">Successful Cases</p>
//                   </div>
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">20+</h2>
//                     <p className="text-white fs-5">Years of Legal Experience</p>
//                   </div>
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">35+</h2>
//                     <p className="text-white fs-5">Professional Attorneys</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//       {/* ========================================================================== 
//           PART 2: IN MEMORIAM SECTION 
//       ========================================================================== */}
//       <div id="memoriam" className="memoriam-section" style={{ backgroundColor: '#111', padding: '120px 0', color: '#fff' }}>
//         <div className="container">
//           <div className="row align-items-center">

//             <div className="col-lg-5 mb-5 mb-lg-0">
//               <img
//                 src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
//                 alt="Larry J. Hoffman"
//                 className="img-fluid rounded shadow"
//                 style={{ borderLeft: '5px solid #CFA167' }}
//               />
//             </div>

//             <div className="col-lg-7 ps-lg-5">
             
//               <h2 className="mb-4 display-5 fw-bold" style={{ fontFamily: 'serif' }}>In Memoriam: Larry J. Hoffman</h2>
//               <p className="lead text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
//                It is with a heavy heart that we announce the passing of Larry J. Hoffman, one of Greenberg Traurig’s co-founders and the architect of the plan to build a global law firm. He passed on September 11, 2025, at 95.
//               </p>
//               <p className="text-secondary mb-4">
               
// Larry’s strategic vision and business acumen set the blueprint not only for Greenberg Traurig’s growth, but for a new approach to the entire legal profession.
//               </p>
//               <Link href="#"><a className="eg-btn btn--primary btn--lg">IN MEMORIAM</a></Link>
//             </div>

//           </div>
//         </div>
//       </div>


//       {/* ========================================================================== 
//           PART 3: MISSION SECTION 
//       ========================================================================== */}
//       <div className="mission-section" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
//         <div className="container text-center">
//           <div className="row justify-content-center">
//             <div className="col-lg-9">

//               <h2 className="display-3 fw-bold mb-4 text-dark">Adapt. Act. Advance.</h2>
//               <p className="lead text-muted mb-5" style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>
//                 In a rapidly changing world, having the right legal partner makes a vital difference. At Greenberg Traurig, we help clients master uncertainty through proactive legal strategies, skilled counsel, and access to vast resources worldwide.
//               </p>

//               <div className="d-flex justify-content-center gap-3">
//                 <Link href="/about">
//                    <Link href="#"><a className="eg-btn btn--primary btn--lg">LAERN MORE</a></Link>
//                 </Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>


//       {/* ========================================================================== 
//           PART 4: EXECUTIVE ORDER & PRESIDENTIAL ACTION HUB
//       ========================================================================== */}
//       <div className="featured-hubs" style={{ backgroundColor: '#f4f7f6' }}>
//         <div className="executive-order-section" style={{ backgroundColor: "#B9973F", padding: "0" }}>
//           <div className="container-fluid px-0">
//             <div className="row g-0 align-items-center">

//               {/* Image */}
//               <div className="col-lg-6">
//                 <div style={{ height: "100%", overflow: "hidden" }}>
//                   <img
//                     src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
//                     alt="White House"
//                     className="img-fluid w-100 h-100"
//                     style={{ objectFit: "cover", minHeight: '500px' }}
//                   />
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="col-lg-6 px-5 py-5 text-white">
//                 <h2 className="fw-bold display-6 mb-4">
//                   Executive Order and <br /> Presidential Actions Hub
//                 </h2>

//                 <p className="mb-4" style={{ lineHeight: "1.8", maxWidth: "600px" }}>
//                   President Donald Trump has opened his second term with more than 100 executive orders, proclamations and memorandums. These executive actions will have broad legal and economic impacts on public and private sector entities. Our Federal Government Law & Policy Practice, in collaboration with a broad and experienced network of practice and industry lawyers across the firm, have created this hub as a resource to help track all of these changes, and will continue to update it with summaries, analysis, and other practical information.
//                 </p>

//                 <Link href="/cta-task-force">
//                 <a className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold" style={{ borderWidth: '2px' }}>
//                   LEARN MORE
//                 </a>
//               </Link>

//               </div>

//             </div>
//           </div>
//         </div>
//       </div>


//       {/* ========================================================================== 
//           PART 5: CTA SECTION (MOVED HERE)
//           Corporate Transparency Act Task Force
//       ========================================================================== */}
//       <div className="container-fluid p-0">
//         <div className="row g-0">
          
//           {/* Blue Text Side */}
//           <div className="col-lg-6 d-flex align-items-center" style={{ backgroundColor: '#62B5E5' }}>
//             <div className="p-5 m-lg-4">
//               <h2 className="display-5 fw-bold text-dark mb-4" style={{ fontFamily: 'serif' }}>
//                 Corporate Transparency Act <br /> Task Force
//               </h2>

//               <p className="text-dark mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
//                 On Jan. 1, 2024, the Corporate Transparency Act (CTA) took effect, requiring non-exempt U.S. entities and non-exempt foreign entities registered to do business in the United States to submit beneficial ownership information (BOI) reports to a confidential database maintained by the U.S. Department of the Treasury’s Financial Crimes Enforcement Network (FinCEN).
//               </p>

//               <Link href="/cta-task-force">
//                 <a className="btn btn-outline-dark rounded-0 px-4 py-2 fw-bold" style={{ borderWidth: '2px' }}>
//                   LEARN MORE
//                 </a>
//               </Link>
//             </div>
//           </div>

//           {/* Image Side */}
//           <div className="col-lg-6">
//             <div style={{ height: '100%', minHeight: '400px' }}>
//               <img 
//                 src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop" 
//                 alt="Abstract Architecture" 
//                 className="img-fluid w-100 h-100"
//                 style={{ objectFit: 'cover' }}
//               />
//             </div>
//           </div>

//         </div>
//       </div>


//       {/* 

// ========================================================================== 
//           PART 6: GREENBERG COMPONENT 
//       ========================================================================== */}
//       <Greenberg />
//       {/* ========================================================================== 
//           PART 7: GLOBAL STATS SECTION 
//       ========================================================================== */}
//       <div className="stats-section" style={{ backgroundColor: '#0a1c38', padding: '120px 0', color: '#fff' }}>
//         <div className="container">

//           <div className="row text-center mb-5">
//             <div className="col-lg-8 mx-auto">
//               <h2 className="display-4 fw-bold mb-3">Global scale with street smarts.</h2>
//               <p className="lead text-white-50">
//                 With 51 locations, Greenberg Traurig's global network provides
// the platform clients need to operate in today’s legal marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="row text-center gy-5 gx-5 mt-4">
//             <div className="col-lg-3 col-md-6 border-end border-secondary">
//               <h2 className="display-3 fw-bold text-white">800+</h2>
//               <p className="text-uppercase" style={{ color: '#CFA167', fontWeight: 'bold' }}>Chambers Rankings</p>
//             </div>
//             <div className="col-lg-3 col-md-6 border-end border-secondary">
//               <h2 className="display-3 fw-bold text-white">60+</h2>
//               <p className="text-uppercase" style={{ color: '#CFA167', fontWeight: 'bold' }}>Languages Spoken</p>
//             </div>
//             <div className="col-lg-3 col-md-6 border-end border-secondary">
//               <h2 className="display-3 fw-bold text-white">15</h2>
//               <p className="text-uppercase" style={{ color: '#CFA167', fontWeight: 'bold' }}>Countries</p>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h2 className="display-3 fw-bold text-white">51</h2>
//               <p className="text-uppercase" style={{ color: '#CFA167', fontWeight: 'bold' }}>Locations</p>
//             </div>
//           </div>

//           <div className="row mt-5 pt-4">
//             <div className="col-12 text-center">
              
//                  <Link href="/about">
//                    <Link href="#"><a className="eg-btn btn--primary btn--lg">Explore Locations</a></Link>
//                 </Link>
               
//             </div>
//           </div>

//         </div>
//       </div>
 
//     </>
//   )
// } 

// export default Banner1

// import Link from 'next/link'
// import React from 'react'
// import Greenberg from '../home-contend/Greenberg'

// function Banner1() {
//   return (
//     <>
//       {/* ========================================================================== 
//           PART 1: MAIN HERO BANNER 
//       ========================================================================== */}
//       <div 
//         className="banner-section d-flex align-items-center justify-content-center position-relative bg-primary-blue" 
//         style={{ minHeight: '90vh', padding: '0' }} 
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="banner-content text-center py-5">

//                 {/* Stats Section */}
//                 <div className="row text-center mt-5">
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">2,500+</h2>
//                     <p className="text-white fs-5">Total Client Consultations</p>
//                   </div>
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">98%</h2>
//                     <p className="text-white fs-5">Successful Cases</p>
//                   </div>
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">20+</h2>
//                     <p className="text-white fs-5">Years of Legal Experience</p>
//                   </div>
//                   <div className="col-md-3 col-6 mb-4">
//                     <h2 className="text-white fw-bold display-4">35+</h2>
//                     <p className="text-white fs-5">Professional Attorneys</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           PART 2: IN MEMORIAM SECTION 
//       ========================================================================== */}
//       <div id="memoriam" className="memoriam-section py-5 bg-primary-blue" style={{ borderTop: '1px solid #ffffff20' }}>
//         <div className="container py-lg-5">
//           <div className="row align-items-center">

//             <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
//               <img
//                 src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
//                 alt="Larry J. Hoffman"
//                 className="img-fluid rounded shadow"
//                 style={{ borderLeft: '5px solid #D4AF37' }}
//               />
//             </div>

//             <div className="col-lg-7 ps-lg-5 text-white">
//               <h2 className="mb-4 display-5 fw-bold font-serif">In Memoriam: Larry J. Hoffman</h2>
//               <p className="lead text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
//                It is with a heavy heart that we announce the passing of Larry J. Hoffman, one of Greenberg Traurig&apos;s co-founders and the architect of the plan to build a global law firm. He passed on September 11, 2025, at 95.
//               </p>
//               <p className="text-white-50 mb-4">
//                 Larry&apos;s strategic vision and business acumen set the blueprint not only for Greenberg Traurig&apos;s growth, but for a new approach to the entire legal profession.
//               </p>
//               <Link href="#">
//                 <a className="btn btn-outline-light rounded-0 px-4 py-2 fw-bold">IN MEMORIAM</a>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           PART 3: MISSION SECTION 
//       ========================================================================== */}
//       <div className="mission-section py-5 bg-white">
//         <div className="container text-center py-lg-4">
//           <div className="row justify-content-center">
//             <div className="col-lg-9">

//               <h2 className="display-4 fw-bold mb-4 text-dark">Adapt. Act. Advance.</h2>
//               <p className="lead text-muted mb-5" style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
//                 In a rapidly changing world, having the right legal partner makes a vital difference. At Greenberg Traurig, we help clients master uncertainty through proactive legal strategies, skilled counsel, and access to vast resources worldwide.
//               </p>

//               <div className="d-flex justify-content-center gap-3">
//                 <Link href="/about">
//                    <a className="btn-premium">LEARN MORE</a>
//                 </Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           PART 4: EXECUTIVE ORDER HUB (Boxed)
//       ========================================================================== */}
//       <div className="featured-hubs py-5 bg-white">
//         <div className="container">
//           <div className="row g-0 shadow-lg bg-light-gray" style={{ borderRadius: '4px', overflow: 'hidden' }}>
            
//             <div className="col-lg-6">
//               <div style={{ height: "100%", minHeight: '550px' }}>
//                 <img
//                   src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
//                   alt="White House"
//                   className="img-fluid w-100 h-100"
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </div>

//             <div className="col-lg-6 d-flex align-items-center p-5">
//               <div>
//                 <h2 className="fw-bold display-6 mb-4 font-serif text-primary-blue">
//                   Executive Order and <br /> Presidential Actions Hub
//                 </h2>

//                 <p className="mb-4 text-secondary" style={{ lineHeight: "1.8", fontSize: '1.05rem' }}>
//                   President Donald Trump has opened his second term with more than 100 executive orders, proclamations and memorandums. These executive actions will have broad legal and economic impacts on public and private sector entities. 
//                 </p>
//                 <p className="mb-4 text-secondary" style={{ lineHeight: "1.8", fontSize: '1.05rem' }}>
//                   Our Federal Government Law & Policy Practice, in collaboration with a broad and experienced network of practice and industry lawyers across the firm, have created this hub as a resource to help track all of these changes.
//                 </p>

//                 <Link href="/cta-task-force">
//                   <a className="btn-premium">EXPLORE HUB</a>
//                 </Link>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           PART 5: CTA TASK FORCE (Boxed - Reversed)
//       ========================================================================== */}
//       <div className="cta-section py-5 bg-white">
//         <div className="container">
//           <div className="row g-0 shadow-lg bg-light-gray" style={{ borderRadius: '4px', overflow: 'hidden' }}>
            
//             <div className="col-lg-6 d-flex align-items-center p-5 order-lg-1 order-2">
//               <div>
//                 <h2 className="display-5 fw-bold mb-4 font-serif text-primary-blue">
//                   Corporate Transparency Act <br /> Task Force
//                 </h2>

//                 <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
//                   On Jan. 1, 2024, the Corporate Transparency Act (CTA) took effect, requiring non-exempt U.S. entities and non-exempt foreign entities registered to do business in the United States to submit beneficial ownership information (BOI) reports to a confidential database maintained by the U.S. Department of the Treasury&apos;s Financial Crimes Enforcement Network (FinCEN).
//                 </p>

//                 <Link href="/cta-task-force">
//                   <a className="btn-premium">LEARN MORE</a>
//                 </Link>
//               </div>
//             </div>

//             <div className="col-lg-6 order-lg-2 order-1">
//               <div style={{ height: '100%', minHeight: '500px' }}>
//                 <img 
//                   src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Abstract Architecture" 
//                   className="img-fluid w-100 h-100"
//                   style={{ objectFit: 'cover' }}
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ========================================================================== 
//           PART 6: GREENBERG COMPONENT 
//       ========================================================================== */}
//       <Greenberg />

//       {/* ========================================================================== 
//           PART 7: GLOBAL STATS SECTION 
//       ========================================================================== */}
//       <div className="stats-section py-5 bg-primary-blue text-white">
//         <div className="container py-lg-5">

//           <div className="row text-center mb-5">
//             <div className="col-lg-8 mx-auto">
//               <h2 className="display-4 fw-bold mb-3">Global scale with street smarts.</h2>
//               <p className="lead text-white-50">
//                 With 51 locations, Greenberg Traurig&apos;s global network provides the platform clients need to operate in today&apos;s legal marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="row text-center gy-5 gx-5 mt-4">
//             <div className="col-lg-3 col-md-6 border-end border-secondary">
//               <h2 className="display-3 fw-bold">800+</h2>
//               <p className="text-gold fw-bold text-uppercase">Chambers Rankings</p>
//             </div>
//             <div className="col-lg-3 col-md-6 border-end border-secondary">
//               <h2 className="display-3 fw-bold">60+</h2>
//               <p className="text-gold fw-bold text-uppercase">Languages Spoken</p>
//             </div>
//             <div className="col-lg-3 col-md-6 border-end border-secondary">
//               <h2 className="display-3 fw-bold">15</h2>
//               <p className="text-gold fw-bold text-uppercase">Countries</p>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h2 className="display-3 fw-bold">51</h2>
//               <p className="text-gold fw-bold text-uppercase">Locations</p>
//             </div>
//           </div>

//           <div className="row mt-5 pt-4">
//             <div className="col-12 text-center">
//                  <Link href="/about">
//                    <a className="btn btn-light btn-lg rounded-0 px-5 fw-bold">Explore Locations</a>
//                 </Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// } 

// export default Banner1


import Link from 'next/link'
import React from 'react'
import Greenberg from '../home-contend/Greenberg'

function Banner1() {
  return (
    <>
      <style jsx>{`
        .bg-primary-blue {
            background-color: #003366; /* Dark Blue for other sections */
        }
        .text-gold {
            color: #D4AF37;
        }
        .btn-premium {
            background-color: transparent;
            border: 2px solid #003366;
            color: #003366;
            padding: 10px 25px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
        }
        .btn-premium:hover {
            background-color: #003366;
            color: #fff;
        }
        /* Mobile Specific Tweaks */
        @media (max-width: 768px) {
            .display-4 { font-size: 2.5rem; }
            .display-3 { font-size: 2rem; }
            .banner-section { min-height: auto !important; padding-top: 100px !important; padding-bottom: 50px !important; }
        }
      `}</style>

      {/* ==========================================================================
          PART 1: MAIN HERO BANNER (NO BLUE OVERLAY)
      ========================================================================== */}
      <div
        className="banner-section d-flex align-items-center justify-content-center position-relative"
        style={{
          width: '100%',              
          minHeight: '90vh',          
          backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')", // Apni image lagayein
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '0',
          overflow: 'hidden'
        }}
      >
        {/* UPDATED: Blue color hata kar Black kar diya hai taaki image natural dikhe */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // <--- Ab ye Black hai (Blue hat gaya)
            zIndex: 1
        }}></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              
              <div className="banner-content py-5">
                <h1 className="text-white fw-bold display-3 mb-4">
                  Global Legal Excellence
                </h1>
                <p className="lead text-white-50 mb-5 fs-4">
                  Defining the future of law with integrity, innovation, and impact.
                </p>

                {/* Stats Section inside Banner */}
                <div className="row text-center mt-5">
                  <div className="col-md-3 col-6 mb-4">
                    <h2 className="text-white fw-bold display-4">2,500+</h2>
                    <p className="text-white fs-6">Consultations</p>
                  </div>
                  <div className="col-md-3 col-6 mb-4">
                    <h2 className="text-white fw-bold display-4">98%</h2>
                    <p className="text-white fs-6">Success Rate</p>
                  </div>
                  <div className="col-md-3 col-6 mb-4">
                    <h2 className="text-white fw-bold display-4">20+</h2>
                    <p className="text-white fs-6">Years Experience</p>
                  </div>
                  <div className="col-md-3 col-6 mb-4">
                    <h2 className="text-white fw-bold display-4">35+</h2>
                    <p className="text-white fs-6">Attorneys</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================== 
          PART 2: IN MEMORIAM SECTION 
      ========================================================================== */}
      <div id="memoriam" className="memoriam-section py-5 bg-primary-blue text-white" style={{ backgroundColor: '#003366', borderTop: '1px solid #ffffff20' }}>
        <div className="container py-lg-5">
          <div className="row align-items-center">

            <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
                alt="Larry J. Hoffman"
                className="img-fluid rounded shadow"
                style={{ borderLeft: '5px solid #D4AF37' }}
              />
            </div>

            <div className="col-lg-7 ps-lg-5">
              <h2 className="mb-4 display-5 fw-bold font-serif">In Memoriam: Larry J. Hoffman</h2>
              <p className="lead text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
               It is with a heavy heart that we announce the passing of Larry J. Hoffman, one of Greenberg Traurig&apos;s co-founders and the architect of the plan to build a global law firm. He passed on September 11, 2025, at 95.
              </p>
              <p className="text-white-50 mb-4">
                Larry&apos;s strategic vision and business acumen set the blueprint not only for Greenberg Traurig&apos;s growth, but for a new approach to the entire legal profession.
              </p>
              <Link href="#">
                <a className="btn btn-outline-light rounded-0 px-4 py-2 fw-bold">IN MEMORIAM</a>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          PART 3: MISSION SECTION 
      ========================================================================== */}
      <div className="mission-section py-5 bg-white">
        <div className="container text-center py-lg-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <h2 className="display-4 fw-bold mb-4 text-dark">Adapt. Act. Advance.</h2>
              <p className="lead text-muted mb-5" style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
                In a rapidly changing world, having the right legal partner makes a vital difference. At Greenberg Traurig, we help clients master uncertainty through proactive legal strategies, skilled counsel, and access to vast resources worldwide.
              </p>

              <div className="d-flex justify-content-center gap-3">
                <Link href="/about">
                   <a className="btn-premium">LEARN MORE</a>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================== 
          PART 4: EXECUTIVE ORDER HUB 
      ========================================================================== */}
      <div className="featured-hubs py-5 bg-light">
        <div className="container">
          <div className="row g-0 shadow-lg bg-white" style={{ borderRadius: '4px', overflow: 'hidden' }}>
            
            <div className="col-lg-6">
              <div style={{ height: "100%", minHeight: '400px' }}>
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
                  alt="White House"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center p-4 p-lg-5">
              <div>
                <h2 className="fw-bold display-6 mb-4 font-serif" style={{ color: '#003366' }}>
                  Executive Order and <br /> Presidential Actions Hub
                </h2>

                <p className="mb-4 text-secondary" style={{ lineHeight: "1.8", fontSize: '1.05rem' }}>
                  President Donald Trump has opened his second term with more than 100 executive orders, proclamations and memorandums. These executive actions will have broad legal and economic impacts on public and private sector entities. 
                </p>
                
                <Link href="/cta-task-force">
                  <a className="btn-premium">EXPLORE HUB</a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          PART 5: CTA TASK FORCE 
      ========================================================================== */}
      <div className="cta-section py-5 bg-white">
        <div className="container">
          <div className="row g-0 shadow-lg bg-light" style={{ borderRadius: '4px', overflow: 'hidden' }}>
            
            <div className="col-lg-6 d-flex align-items-center p-4 p-lg-5 order-lg-1 order-2">
              <div>
                <h2 className="display-5 fw-bold mb-4 font-serif" style={{ color: '#003366' }}>
                  Corporate Transparency Act <br /> Task Force
                </h2>

                <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  On Jan. 1, 2024, the Corporate Transparency Act (CTA) took effect, requiring non-exempt U.S. entities and non-exempt foreign entities registered to do business in the United States to submit beneficial ownership information (BOI) reports.
                </p>

                <Link href="/cta-task-force">
                  <a className="btn-premium">LEARN MORE</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div style={{ height: '100%', minHeight: '400px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Abstract Architecture" 
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================== 
          PART 6: GREENBERG COMPONENT 
      ========================================================================== */}
      <Greenberg />

      {/* ========================================================================== 
          PART 7: GLOBAL STATS SECTION 
      ========================================================================== */}
      <div className="stats-section py-5 text-white" style={{ backgroundColor: '#003366' }}>
        <div className="container py-lg-5">

          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-4 fw-bold mb-3">Global scale with street smarts.</h2>
              <p className="lead text-white-50">
                With 51 locations, Greenberg Traurig&apos;s global network provides the platform clients need to operate in today&apos;s legal marketplace.
              </p>
            </div>
          </div>

          <div className="row text-center gy-5 gx-md-5 mt-4">
            <div className="col-lg-3 col-6 border-end border-secondary">
              <h2 className="display-4 fw-bold">800+</h2>
              <p className="text-gold fw-bold text-uppercase small">Chambers Rankings</p>
            </div>
            <div className="col-lg-3 col-6 border-end border-secondary">
              <h2 className="display-4 fw-bold">60+</h2>
              <p className="text-gold fw-bold text-uppercase small">Languages Spoken</p>
            </div>
            <div className="col-lg-3 col-6 border-end border-secondary">
              <h2 className="display-4 fw-bold">15</h2>
              <p className="text-gold fw-bold text-uppercase small">Countries</p>
            </div>
            <div className="col-lg-3 col-6">
              <h2 className="display-4 fw-bold">51</h2>
              <p className="text-gold fw-bold text-uppercase small">Locations</p>
            </div>
          </div>

          <div className="row mt-5 pt-4">
            <div className="col-12 text-center">
                 <Link href="/about">
                   <a className="btn btn-light btn-lg rounded-0 px-5 fw-bold">Explore Locations</a>
                </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Banner1