



// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link'; // 1. Link import kiya

// // --- DATA ---
// const locationsData = [
//   {
//     id: 'usa',
//     country: "United States",
//     offices: [
//       {
//         id: 'ny',
//         city: "New York",
//         slug: "new-york", // 2. Slug add kiya URL ke liye
//         address: "200 Park Avenue, Suite 1700, New York, NY 10166",
//         phone: "+1 (212) 555-0199",
//         image: '/assets/images/location1.png',
//         mapLink: "https://maps.google.com/?q=200+Park+Avenue+New+York"
//       },
//       {
//         id: 'la',
//         city: "Los Angeles",
//         slug: "los-angeles",
//         address: "10250 Constellation Blvd, Los Angeles, CA 90067",
//         phone: "+1 (310) 555-0144",
//         image: "/assets/images/our-firm4.png", 
//         mapLink: "https://maps.google.com/?q=Los+Angeles+CA"
//       },
//       {
//         id: 'chi',
//         city: "Chicago",
//         slug: "chicago",
//         address: "77 West Wacker Drive, Suite 3100, Chicago, IL 60601",
//         phone: "+1 (312) 555-0123",
//         image: "/assets/images/location1.png", 
//         mapLink: "https://maps.google.com/?q=Chicago+IL"
//       }
//     ]
//   },
//   {
//     id: 'india',
//     country: "India",
//     offices: [
//       {
//         id: 'del',
//         city: "New Delhi",
//         slug: "new-delhi",
//         address: "Barakhamba Road, Connaught Place, New Delhi - 110001",
//         phone: "+91 11 2345 6789",
//         image: "/assets/images/location1.png", 
//         mapLink: "https://maps.google.com/?q=Connaught+Place+New+Delhi"
//       },
//       {
//         id: 'mum',
//         city: "Mumbai",
//         slug: "mumbai",
//         address: "One BKC, Bandra Kurla Complex, Mumbai - 400051",
//         phone: "+91 22 2345 6789",
//         image: "/assets/images/location2.png",
//         mapLink: "https://maps.google.com/?q=BKC+Mumbai"
//       }
//     ]
//   },
//   {
//     id: 'uk',
//     country: "United Kingdom",
//     offices: [
//       {
//         id: 'lon',
//         city: "London",
//         slug: "london",
//         address: "The Shard, 32 London Bridge St, London SE1 9SG",
//         phone: "+44 20 7946 0123",
//         image: "/assets/images/our-firm4.png", 
//         mapLink: "https://maps.google.com/?q=The+Shard+London"
//       }
//     ]
//   },
//   {
//     id: 'uae',
//     country: "United Arab Emirates",
//     offices: [
//       {
//         id: 'dub',
//         city: "Dubai",
//         slug: "dubai",
//         address: "Burj Khalifa District, Downtown Dubai, UAE",
//         phone: "+971 4 123 4567",
//         image: '/assets/images/location1.png',
//         mapLink: "https://maps.google.com/?q=Dubai+UAE"
//       }
//     ]
//   }
// ];

// function Locations() {
//   const [openSections, setOpenSections] = useState(['usa']);

//   const toggleSection = (id) => {
//     if (openSections.includes(id)) {
//       setOpenSections(openSections.filter(item => item !== id));
//     } else {
//       setOpenSections([...openSections, id]);
//     }
//   };

//   const handleExpandAll = () => {
//     const allIds = locationsData.map(loc => loc.id);
//     setOpenSections(allIds);
//   };

//   const handleCollapseAll = () => {
//     setOpenSections([]);
//   };

//   const theme = {
//     primaryBlue: '#0a1c38',
//     accentGold: '#D4AF37',   
//     bgLight: '#f8f9fa',
//     white: '#ffffff'
//   };

//   return (
//     <>
//       <Head>
//         <title>Our Locations | Global Offices</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       {/* --- HERO SECTION --- */}
//       <div className="location-banner d-flex align-items-center justify-content-center text-center px-3">
//           <div className="container">
//               <span className="d-block mb-2 text-uppercase fw-bold text-gold">
//                   Global Reach
//               </span>
//               <h1 className="display-3 fw-bold hero-title font-serif">Our Locations</h1>
//               <p className="lead opacity-75">Serving clients from strategic hubs around the world.</p>
//           </div>
//       </div>

//       <div className="container py-5 min-vh-60">
        
//         {/* --- CONTROLS (Expand/Collapse) --- */}
//         <div className="row mb-4 align-items-center">
//             <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
//                 <h3 className="fw-bold mb-0 text-blue">Office Directory</h3>
//             </div>
//             <div className="col-12 col-md-6 text-center text-md-end">
//                 <div className="btn-group shadow-sm" role="group">
//                     <button 
//                         type="button" 
//                         className="btn btn-outline-dark fs-small"
//                         onClick={handleExpandAll}
//                     >
//                         <i className="bi bi-arrows-expand me-2"></i>Expand All
//                     </button>
//                     <button 
//                         type="button" 
//                         className="btn btn-outline-dark fs-small"
//                         onClick={handleCollapseAll}
//                     >
//                         <i className="bi bi-arrows-collapse me-2"></i>Collapse All
//                     </button>
//                 </div>
//             </div>
//         </div>

//         {/* --- LOCATIONS LIST --- */}
//         <div className="row g-4">
//             {locationsData.map((location) => {
//                 const isOpen = openSections.includes(location.id);

//                 return (
//                     <div className="col-12" key={location.id}>
//                         <div className="border rounded bg-white shadow-sm overflow-hidden">
                            
//                             {/* COUNTRY HEADER (Clickable) */}
//                             <div 
//                                 className={`accordion-header p-4 d-flex justify-content-between align-items-center ${isOpen ? 'active-header' : ''}`}
//                                 onClick={() => toggleSection(location.id)}
//                             >
//                                 <h4 className="m-0 fw-bold text-blue">
//                                     {location.country} 
//                                     <span className="ms-2 text-muted fw-normal fs-6">({location.offices.length} Offices)</span>
//                                 </h4>
//                                 <div className={`rotate-icon ${isOpen ? 'open' : ''}`}>
//                                     <i className="bi bi-chevron-down fs-5"></i>
//                                 </div>
//                             </div>

//                             {/* OFFICES GRID (Collapsible) */}
//                             {isOpen && (
//                                 <div className="p-4 bg-light-section">
//                                     <div className="row g-4">
//                                         {location.offices.map((office) => (
//                                             <div key={office.id} className="col-12 col-md-6 col-lg-4">
//                                                 <div className="location-card">
                                                    
//                                                     {/* 3. Image ko Link me wrap kiya */}
//                                                     <Link href={`/location/${office.slug}`}>
//                                                         <a className="d-block position-relative text-decoration-none cursor-pointer">
//                                                             <img 
//                                                                 src={office.image} 
//                                                                 alt={office.city} 
//                                                                 className="office-img"
//                                                             />
//                                                             <div className="overlay-gradient position-absolute bottom-0 start-0 w-100 p-2">
//                                                                 <span className="text-white fw-bold px-2">{office.city}</span>
//                                                             </div>
//                                                         </a>
//                                                     </Link>

//                                                     {/* Details */}
//                                                     <div className="p-4">
//                                                         {/* 4. Title ko bhi Link me wrap kiya */}
//                                                         <Link href={`/location/${office.slug}`}>
//                                                             <a className="text-decoration-none">
//                                                                 <h5 className="fw-bold mb-3 text-blue hover-gold">
//                                                                     {office.city} Office
//                                                                 </h5>
//                                                             </a>
//                                                         </Link>
                                                        
//                                                         <div className="mb-3 d-flex align-items-start">
//                                                             <i className="bi bi-geo-alt-fill me-2 mt-1 text-gold"></i>
//                                                             <p className="mb-0 small text-muted">{office.address}</p>
//                                                         </div>

//                                                         <div className="mb-4 d-flex align-items-center">
//                                                             <i className="bi bi-telephone-fill me-2 text-gold"></i>
//                                                             <a href={`tel:${office.phone}`} className="mb-0 small text-decoration-none text-dark fw-bold">
//                                                                 {office.phone}
//                                                             </a>
//                                                         </div>

//                                                         {/* Get Directions Button (Ye Google maps par hi jayega) */}
//                                                         <a 
//                                                             href={office.mapLink} 
//                                                             target="_blank" 
//                                                             rel="noopener noreferrer"
//                                                             className="btn btn-directions w-100 py-2 rounded-1 text-uppercase small"
//                                                         >
//                                                             <i className="bi bi-map me-2"></i>Get Directions
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>

//       </div>

//       <style jsx>{`
//         /* Colors */
//         .text-blue { color: ${theme.primaryBlue}; }
//         .text-gold { color: ${theme.accentGold}; letter-spacing: 2px; }
//         .bg-light-section { background-color: ${theme.bgLight}; }
//         .hover-gold:hover { color: ${theme.accentGold} !important; transition: 0.3s; }
//         .cursor-pointer { cursor: pointer; }

//         /* Hero Banner */
//         .location-banner {
//             min-height: 400px;
//             background-image: linear-gradient(rgba(10, 28, 56, 0.8), rgba(10, 28, 56, 0.8)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop);
//             background-size: cover;
//             background-position: center;
//             color: #fff;
//             padding-top: 80px;
//         }

//         /* Location Card */
//         .location-card {
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//             height: 100%;
//             background: #fff;
//             border-radius: 8px;
//             overflow: hidden;
//             border: 1px solid rgba(0,0,0,0.05);
//         }
//         .location-card:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 10px 20px rgba(0,0,0,0.08);
//         }

//         /* Accordion */
//         .accordion-header {
//             cursor: pointer;
//             transition: all 0.3s ease;
//             background-color: #fff;
//         }
//         .accordion-header:hover {
//             background-color: #f1f1f1;
//         }
//         .active-header {
//             background-color: #f8f9fa;
//             border-bottom: 1px solid #eee;
//         }

//         /* Icons */
//         .rotate-icon {
//             transition: transform 0.3s ease;
//         }
//         .rotate-icon.open {
//             transform: rotate(180deg);
//         }

//         /* Images & Overlays */
//         .office-img {
//             height: 200px;
//             width: 100%;
//             object-fit: cover;
//         }
//         .overlay-gradient {
//             background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
//         }

//         /* Buttons */
//         .btn-directions {
//             background-color: transparent;
//             border: 1px solid ${theme.primaryBlue};
//             color: ${theme.primaryBlue};
//             font-weight: 600;
//             transition: all 0.3s;
//         }
//         .btn-directions:hover {
//             background-color: ${theme.primaryBlue};
//             color: #fff;
//         }

//         .fs-small { font-size: 0.9rem; }
//         .min-vh-60 { min-height: 60vh; }

//         /* Mobile Adjustments */
//         @media (max-width: 768px) {
//             .hero-title { font-size: 2.5rem; }
//             .office-img { height: 180px; }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Locations;


// File Path: pages/locations.js
// File Path: pages/locations.js

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { locationData } from '../../data/allLocations';

// --- GROUP DATA BY COUNTRY MANUALLY FOR LISTING ---
const groupedLocations = [
  { id: 'usa', country: "United States", offices: locationData.filter(l => ['new-york', 'los-angeles', 'chicago'].includes(l.slug)) },
  { id: 'india', country: "India", offices: locationData.filter(l => ['new-delhi', 'mumbai'].includes(l.slug)) },
  { id: 'uk', country: "United Kingdom", offices: locationData.filter(l => ['london'].includes(l.slug)) },
  { id: 'europe', country: "Europe", offices: locationData.filter(l => ['amsterdam', 'berlin'].includes(l.slug)) },
  { id: 'asia', country: "Asia & Middle East", offices: locationData.filter(l => ['tokyo', 'seoul', 'dubai', 'tel-aviv'].includes(l.slug)) },
  { id: 'latam', country: "Latin America", offices: locationData.filter(l => ['mexico-city'].includes(l.slug)) },
];

function Locations() {
  const [openSections, setOpenSections] = useState(['usa']);

  const toggleSection = (id) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter(item => item !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };

  const handleExpandAll = () => {
    setOpenSections(groupedLocations.map(g => g.id));
  };
  const handleCollapseAll = () => {
    setOpenSections([]);
  };

  return (
    <>
      <Head>
        <title>Our Locations | Global Offices</title>
      </Head>

      {/* =========================================
          SECTION 1: HERO BANNER 
      ========================================= */}
      <div className="location-banner position-relative d-flex align-items-center justify-content-center text-center px-3">
          <div className="overlay"></div>
          <div className="container position-relative" style={{zIndex: 2}}>
              <h5 className="text-gold fw-bold text-uppercase letter-spacing-2 mb-3">
                  Global Reach
              </h5>
         
              <h1 className="font-serif display-3 fw-bold text-white mb-3">
                  Our Locations
              </h1>
              <p className="lead text-white-50 mx-auto" style={{maxWidth: '700px'}}>
                  Serving clients from strategic hubs around the world.
              </p>
          </div>
      </div>

      {/* =========================================
          SECTION 2: LOCATION LIST
      ========================================= */}
      <div className="container py-5" style={{ minHeight: '60vh' }}>
        
        {/* CONTROLS */}
        <div className="row mb-4 align-items-center">
            <div className="col-md-6">
                <h3 className="font-serif fw-bold text-blue mb-0">Office Directory</h3>
            </div>
            <div className="col-md-6 text-md-end mt-3 mt-md-0">
                <div className="btn-group shadow-sm">
                    <button className="btn btn-outline-dark btn-sm" onClick={handleExpandAll}>Expand All</button>
                    <button className="btn btn-outline-dark btn-sm" onClick={handleCollapseAll}>Collapse All</button>
                </div>
            </div>
        </div>

        {/* LIST */}
        <div className="row g-4">
            {groupedLocations.map((group) => {
                if(group.offices.length === 0) return null; // Agar koi office nahi to section mat dikhao

                const isOpen = openSections.includes(group.id);

                return (
                    <div className="col-12" key={group.id}>
                        <div className="border rounded bg-white shadow-sm overflow-hidden">
                            
                            {/* Header */}
                            <div 
                                className={`p-4 d-flex justify-content-between align-items-center cursor-pointer ${isOpen ? 'bg-light border-bottom' : 'bg-white'}`}
                                onClick={() => toggleSection(group.id)}
                                style={{cursor: 'pointer'}}
                            >
                                <h4 className="m-0 fw-bold text-blue font-serif">
                                    {group.country} 
                                    <span className="ms-2 text-muted fw-normal fs-6">({group.offices.length} Offices)</span>
                                </h4>
                                <i className={`bi bi-chevron-down transition-icon ${isOpen ? 'rotate-180' : ''}`}></i>
                            </div>

                            {/* Offices Grid */}
                            {isOpen && (
                                <div className="p-4 bg-light">
                                    <div className="row g-4">
                                        {group.offices.map((office, idx) => (
                                            <div key={idx} className="col-md-6 col-lg-4">
                                                <div className="card h-100 border-0 shadow-sm location-card">
                                                    
                                                    {/* LOGIC: Click sirf tab kaam karega agar slug exist karta hai */}
                                                    {office.slug ? (
                                                        <Link href={`/location/${office.slug}`}>
                                                            <a className="text-decoration-none">
                                                                <div className="position-relative overflow-hidden">
                                                                    <img src={office.image || "/assets/images/banner-img3.png"} alt={office.name} className="card-img-top office-img" />
                                                                    <div className="card-img-overlay d-flex align-items-end p-0">
                                                                        <div className="bg-dark bg-opacity-75 text-white w-100 p-2 text-center">
                                                                            <span className="fw-bold">{office.name}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    ) : (
                                                        // Agar slug nahi hai to Non-clickable View
                                                        <div className="position-relative overflow-hidden">
                                                            <img src={office.image || "/assets/images/banner-img3.png"} alt={office.name} className="card-img-top office-img" />
                                                            <div className="card-img-overlay d-flex align-items-end p-0">
                                                                <div className="bg-dark bg-opacity-75 text-white w-100 p-2 text-center">
                                                                    <span className="fw-bold">{office.name}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="card-body">
                                                        {office.slug ? (
                                                            <Link href={`/location/${office.slug}`}>
                                                                <a className="text-decoration-none">
                                                                    <h5 className="card-title font-serif fw-bold text-blue hover-gold">{office.name} Office</h5>
                                                                </a>
                                                            </Link>
                                                        ) : (
                                                            <h5 className="card-title font-serif fw-bold text-blue">{office.name} Office</h5>
                                                        )}
                                                        
                                                        <p className="card-text small text-muted mt-2">
                                                            <i className="bi bi-geo-alt-fill text-gold me-2"></i>{office.address}
                                                        </p>
                                                        <p className="card-text small text-muted">
                                                            <i className="bi bi-telephone-fill text-gold me-2"></i>{office.phone}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>

      </div>

      <style jsx>{`
        .location-banner {
            min-height: 400px;
            background-image: url('/assets/images/banner-img3.png'); /* Apni banner image lagayein */
            background-size: cover;
            background-position: center;
            background-color: #0a1c38;
        }
        .overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(10, 28, 56, 0.7);
            z-index: 1;
        }
        .font-serif { font-family: "Times New Roman", serif; }
        .text-gold { color: #de9f57 !important; }
        .text-blue { color: #003366 !important; }
        .letter-spacing-2 { letter-spacing: 2px; }
        .office-img { height: 200px; object-fit: cover; transition: transform 0.3s; }
        .location-card:hover .office-img { transform: scale(1.05); }
        .hover-gold:hover { color: #de9f57 !important; }
        .transition-icon { transition: transform 0.3s; }
        .rotate-180 { transform: rotate(180deg); }
      `}</style>
    </>
  );
}

export default Locations;