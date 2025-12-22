// // File Path: pages/location/[slug].js

// import React from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Link from 'next/link';
// import { locationData } from '../../data/allLocations'; // Data import kiya

// function LocationDetail() {
//   const router = useRouter();
//   const { slug } = router.query;

//   // 1. Find Data based on URL slug
//   const office = locationData.find((loc) => loc.slug === slug);

//   // 2. Agar page load ho raha he ya data nahi mila to Fallback dikhayein
//   if (!office) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-center">
//             <h2>Loading Location...</h2>
//             <Link href="/" className="btn btn-primary mt-3">Go Home</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>{office.name} Office | NRIS Law Firm</title>
//       </Head>

//       {/* --- HERO BANNER --- */}
//       <div className="location-hero position-relative">
//         <div className="overlay"></div>
//         <img src={office.image} alt={office.name} className="img-cover w-100" style={{height: '50vh', objectFit: 'cover'}} />
//         <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white w-100">
//             <h5 className="text-gold text-uppercase letter-spacing-2 mb-2">Global Presence</h5>
//             <h1 className="display-3 fw-bold">{office.name}</h1>
//         </div>
//       </div>

//       {/* --- DETAILS SECTION --- */}
//       <div className="container py-5">
//         <div className="row justify-content-center">
//             <div className="col-lg-10">
//                 <div className="card shadow-lg border-0 mt-n5 p-4 p-md-5">
                    
//                     <div className="row align-items-center">
//                         <div className="col-md-7 mb-4 mb-md-0">
//                             <h2 className="mb-4 text-blue">About Our {office.name} Office</h2>
//                             <p className="lead text-secondary">{office.description}</p>
//                             <p>
//                                 At NRIS Law Firm, our {office.name} team is dedicated to providing 
//                                 world-class legal services. We specialize in local and international 
//                                 laws ensuring our clients get the best representation possible.
//                             </p>
//                         </div>

//                         <div className="col-md-5">
//                             <div className="bg-light p-4 rounded border-start border-4 border-gold">
//                                 <h4 className="mb-3">Contact Details</h4>
                                
//                                 <div className="mb-3 d-flex">
//                                     <i className="bi bi-geo-alt-fill text-gold me-3 fs-5"></i>
//                                     <span>{office.address}</span>
//                                 </div>
                                
//                                 <div className="mb-3 d-flex">
//                                     <i className="bi bi-telephone-fill text-gold me-3 fs-5"></i>
//                                     <a href={`tel:${office.phone}`} className="text-dark text-decoration-none fw-bold">
//                                         {office.phone}
//                                     </a>
//                                 </div>

//                                 <div className="mb-4 d-flex">
//                                     <i className="bi bi-envelope-fill text-gold me-3 fs-5"></i>
//                                     <a href={`mailto:${office.email}`} className="text-dark text-decoration-none">
//                                         {office.email}
//                                     </a>
//                                 </div>

//                                 <button className="btn btn-primary w-100 rounded-0 text-uppercase fw-bold py-2" style={{backgroundColor: '#003366', borderColor: '#003366'}}>
//                                     Get Directions
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* CSS for this page (Inline for simplicity) */}
//       <style jsx>{`
//         .location-hero {
//             position: relative;
//         }
//         .overlay {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: rgba(0, 33, 71, 0.6); /* Blue Overlay */
//         }
//         .text-gold { color: #de9f57; }
//         .text-blue { color: #003366; }
//         .border-gold { border-color: #de9f57 !important; }
//         .mt-n5 { margin-top: -80px; }
//         .letter-spacing-2 { letter-spacing: 2px; }
//       `}</style>
//     </>
//   );
// }

// export default LocationDetail;

// File Path: pages/location/[slug].js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { locationData } from '../../data/allLocations';

function LocationDetail({ office }) {
  
  if (!office) return null; // Agar data nahi to kuch mat dikhao (404 page avoid)

  return (
    <>
      <Head>
        <title>{office.name} Office | NRIS Law Firm</title>
      </Head>

      {/* =========================================
          SECTION 1: HERO BANNER (Matches Banner1 Style)
      ========================================= */}
      <div className="location-hero position-relative d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        {/* Banner Image */}
        <img 
            src={office.image || "/assets/images/banner-img3.png"} 
            alt={office.name} 
            className="img-cover w-100 position-absolute h-100" 
            style={{ objectFit: 'cover', zIndex: -1 }} 
        />
        
        <div className="container position-relative text-center text-white" style={{ zIndex: 2 }}>
            <h5 className="text-gold fw-bold text-uppercase letter-spacing-2 mb-3">
                Global Network
            </h5>
            <h1 className="font-serif display-3 fw-bold mb-3">
                {office.name}
            </h1>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
                Defining the future of law with integrity in {office.name}.
            </p>
        </div>
      </div>

      {/* =========================================
          SECTION 2: CONTENT & SIDEBAR
      ========================================= */}
      <div className="container py-5">
        <div className="row justify-content-center">
            
            {/* LEFT SIDE: RICH CONTENT */}
            <div className="col-lg-8 pe-lg-5">
                <h2 className="font-serif text-blue mb-4">Strategic Presence in {office.name}</h2>
                <p className="lead text-secondary mb-4">
                    {office.description}
                </p>
                <p className="mb-4 text-dark">
                    {office.content || "At NRIS Law Firm, we provide comprehensive legal solutions tailored to the local market while leveraging our global resources."}
                </p>
                
                <hr className="my-5 opacity-25" />

                <h3 className="font-serif text-blue mb-4">Key Practice Areas</h3>
                <div className="row g-3">
                    {office.practices && office.practices.map((practice, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="d-flex align-items-center p-3 bg-light border rounded">
                                <i className="bi bi-check-circle-fill text-gold me-3"></i>
                                <span className="fw-bold text-dark">{practice}</span>
                            </div>
                        </div>
                    ))}
                    {!office.practices && <p>General Corporate Law & Litigation</p>}
                </div>
            </div>

            {/* RIGHT SIDE: CONTACT CARD */}
            <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="sticky-top" style={{ top: '100px' }}>
                    <div className="bg-blue text-white p-4 rounded shadow-lg" style={{ backgroundColor: '#003366' }}>
                        <h4 className="font-serif text-gold mb-4 border-bottom border-secondary pb-3">
                            Office Details
                        </h4>
                        
                        <div className="mb-4">
                            <label className="text-white-50 small text-uppercase fw-bold mb-1">Address</label>
                            <div className="d-flex">
                                <i className="bi bi-geo-alt-fill text-gold me-3 mt-1"></i>
                                <p className="mb-0">{office.address}</p>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                             <label className="text-white-50 small text-uppercase fw-bold mb-1">Phone</label>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-telephone-fill text-gold me-3"></i>
                                <a href={`tel:${office.phone}`} className="text-white text-decoration-none fw-bold">
                                    {office.phone}
                                </a>
                            </div>
                        </div>

                        <div className="mb-4">
                             <label className="text-white-50 small text-uppercase fw-bold mb-1">Email</label>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-envelope-fill text-gold me-3"></i>
                                <a href={`mailto:${office.email}`} className="text-white text-decoration-none">
                                    {office.email}
                                </a>
                            </div>
                        </div>

                        <button className="btn w-100 rounded-0 text-uppercase fw-bold py-3 mt-2" 
                                style={{ backgroundColor: '#de9f57', color: '#000' }}>
                            View on Map
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>

      <style jsx>{`
        .location-hero {
            height: 60vh;
            min-height: 400px;
            background-color: #0a1c38;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 28, 56, 0.7);
            z-index: 1;
        }
        .font-serif { font-family: "Times New Roman", serif; }
        .text-gold { color: #de9f57 !important; }
        .text-blue { color: #003366 !important; }
        .bg-blue { background-color: #003366 !important; }
        .letter-spacing-2 { letter-spacing: 2px; }
      `}</style>
    </>
  );
}

// --- STATIC GENERATION LOGIC ---

export async function getStaticPaths() {
  // Sirf wahi pages banenge jo data me hain
  const paths = locationData.map((loc) => ({
    params: { slug: loc.slug },
  }));

  return {
    paths,
    fallback: false, // 404 dega agar slug galat hai
  };
}

export async function getStaticProps({ params }) {
  const office = locationData.find((loc) => loc.slug === params.slug);
  return {
    props: { office },
  };
}

export default LocationDetail;