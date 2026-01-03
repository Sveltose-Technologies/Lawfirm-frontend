


// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';

// import { locationData } from '../../data/allLocations';

// // --- GROUP DATA BY COUNTRY MANUALLY FOR LISTING ---
// const groupedLocations = [
//   { id: 'usa', country: "United States", offices: locationData.filter(l => ['new-york', 'los-angeles', 'chicago'].includes(l.slug)) },
//   { id: 'india', country: "India", offices: locationData.filter(l => ['new-delhi', 'mumbai'].includes(l.slug)) },
//   { id: 'uk', country: "United Kingdom", offices: locationData.filter(l => ['london'].includes(l.slug)) },
//   { id: 'europe', country: "Europe", offices: locationData.filter(l => ['amsterdam', 'berlin'].includes(l.slug)) },
//   { id: 'asia', country: "Asia & Middle East", offices: locationData.filter(l => ['tokyo', 'seoul', 'dubai', 'tel-aviv'].includes(l.slug)) },
//   { id: 'latam', country: "Latin America", offices: locationData.filter(l => ['mexico-city'].includes(l.slug)) },
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
//     setOpenSections(groupedLocations.map(g => g.id));
//   };
//   const handleCollapseAll = () => {
//     setOpenSections([]);
//   };

//   return (
//     <>
//       <Head>
//         <title>Our Locations | Global Offices</title>
//       </Head>

//       {/* =========================================
//           SECTION 1: HERO BANNER 
//       ========================================= */}
//       <div className="location-banner position-relative d-flex align-items-center justify-content-center text-center px-3">
//           <div className="overlay"></div>
//           <div className="container position-relative" style={{zIndex: 2}}>
//               <h5 className="text-gold fw-bold text-uppercase letter-spacing-2 mb-3">
//                   Global Reach
//               </h5>
         
//               <h1 className="font-serif display-3 fw-bold text-white mb-3">
//                   Our Locations
//               </h1>
//               <p className="lead text-white-50 mx-auto" style={{maxWidth: '700px'}}>
//                   Serving clients from strategic hubs around the world.
//               </p>
//           </div>
//       </div>

//       {/* =========================================
//           SECTION 2: LOCATION LIST
//       ========================================= */}
//       <div className="container py-5" style={{ minHeight: '60vh' }}>
        
//         {/* CONTROLS */}
//         <div className="row mb-4 align-items-center">
//             <div className="col-md-6">
//                 <h3 className="font-serif fw-bold text-blue mb-0">Office Directory</h3>
//             </div>
//             <div className="col-md-6 text-md-end mt-3 mt-md-0">
//                 <div className="btn-group shadow-sm">
//                     <button className="btn btn-outline-dark btn-sm" onClick={handleExpandAll}>Expand All</button>
//                     <button className="btn btn-outline-dark btn-sm" onClick={handleCollapseAll}>Collapse All</button>
//                 </div>
//             </div>
//         </div>

//         {/* LIST */}
//         <div className="row g-4">
//             {groupedLocations.map((group) => {
//                 if(group.offices.length === 0) return null; // Agar koi office nahi to section mat dikhao

//                 const isOpen = openSections.includes(group.id);

//                 return (
//                     <div className="col-12" key={group.id}>
//                         <div className="border rounded bg-white shadow-sm overflow-hidden">
                            
//                             {/* Header */}
//                             <div 
//                                 className={`p-4 d-flex justify-content-between align-items-center cursor-pointer ${isOpen ? 'bg-light border-bottom' : 'bg-white'}`}
//                                 onClick={() => toggleSection(group.id)}
//                                 style={{cursor: 'pointer'}}
//                             >
//                                 <h4 className="m-0 fw-bold text-blue font-serif">
//                                     {group.country} 
//                                     <span className="ms-2 text-muted fw-normal fs-6">({group.offices.length} Offices)</span>
//                                 </h4>
//                                 <i className={`bi bi-chevron-down transition-icon ${isOpen ? 'rotate-180' : ''}`}></i>
//                             </div>

//                             {/* Offices Grid */}
//                             {isOpen && (
//                                 <div className="p-4 bg-light">
//                                     <div className="row g-4">
//                                         {group.offices.map((office, idx) => (
//                                             <div key={idx} className="col-md-6 col-lg-4">
//                                                 <div className="card h-100 border-0 shadow-sm location-card">
                                                    
//                                                     {/* LOGIC: Click sirf tab kaam karega agar slug exist karta hai */}
//                                                     {office.slug ? (
//                                                         <Link href={`/location/${office.slug}`}>
//                                                             <a className="text-decoration-none">
//                                                                 <div className="position-relative overflow-hidden">
//                                                                     <img src={office.image || "/assets/images/banner-img3.png"} alt={office.name} className="card-img-top office-img" />
//                                                                     <div className="card-img-overlay d-flex align-items-end p-0">
//                                                                         <div className="bg-dark bg-opacity-75 text-white w-100 p-2 text-center">
//                                                                             <span className="fw-bold">{office.name}</span>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </Link>
//                                                     ) : (
//                                                         // Agar slug nahi hai to Non-clickable View
//                                                         <div className="position-relative overflow-hidden">
//                                                             <img src={office.image || "/assets/images/banner-img3.png"} alt={office.name} className="card-img-top office-img" />
//                                                             <div className="card-img-overlay d-flex align-items-end p-0">
//                                                                 <div className="bg-dark bg-opacity-75 text-white w-100 p-2 text-center">
//                                                                     <span className="fw-bold">{office.name}</span>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     )}

//                                                     <div className="card-body">
//                                                         {office.slug ? (
//                                                             <Link href={`/location/${office.slug}`}>
//                                                                 <a className="text-decoration-none">
//                                                                     <h5 className="card-title font-serif fw-bold text-blue hover-gold">{office.name} Office</h5>
//                                                                 </a>
//                                                             </Link>
//                                                         ) : (
//                                                             <h5 className="card-title font-serif fw-bold text-blue">{office.name} Office</h5>
//                                                         )}
                                                        
//                                                         <p className="card-text small text-muted mt-2">
//                                                             <i className="bi bi-geo-alt-fill text-gold me-2"></i>{office.address}
//                                                         </p>
//                                                         <p className="card-text small text-muted">
//                                                             <i className="bi bi-telephone-fill text-gold me-2"></i>{office.phone}
//                                                         </p>
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
//         .location-banner {
//             min-height: 400px;
//             background-image: url('/assets/images/banner-img3.png'); /* Apni banner image lagayein */
//             background-size: cover;
//             background-position: center;
//             background-color: #0a1c38;
//         }
//         .overlay {
//             position: absolute;
//             top: 0; left: 0; right: 0; bottom: 0;
//             background: rgba(10, 28, 56, 0.7);
//             z-index: 1;
//         }
//         .font-serif { font-family: "Times New Roman", serif; }
//         .text-gold { color: #de9f57 !important; }
//         .text-blue { color: #003366 !important; }
//         .letter-spacing-2 { letter-spacing: 2px; }
//         .office-img { height: 200px; object-fit: cover; transition: transform 0.3s; }
//         .location-card:hover .office-img { transform: scale(1.05); }
//         .hover-gold:hover { color: #de9f57 !important; }
//         .transition-icon { transition: transform 0.3s; }
//         .rotate-180 { transform: rotate(180deg); }
//       `}</style>
//     </>
//   );
// }

// export default Locations;

'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import authService from '../../services/authService';

const IMG_URL = 'https://nodejs.nrislawfirm.com';

function Locations() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [openSections, setOpenSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryRes = await authService.getAllLocationCountries();
        const cityRes = await authService.getAllLocationCities();

        setCountries(countryRes?.data || []);
        setCities(cityRes?.data || []);
      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };
    fetchData();
  }, []);

  const toggleSection = (id) => {
    setOpenSections(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => setOpenSections(countries.map(c => c.id));
  const handleCollapseAll = () => setOpenSections([]);

  return (
    <>
      <Head>
        <title>Our Locations | Global Offices</title>
      </Head>

      {/* ===================== HERO BANNER ===================== */}
      <div className="location-banner position-relative d-flex align-items-center justify-content-center text-center px-3">
        <div className="overlay"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h5 className="text-gold fw-bold text-uppercase letter-spacing-2 mb-3">
            Global Reach
          </h5>
          <h1 className="font-serif display-3 fw-bold text-white mb-3">
            Our Locations
          </h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Serving clients from strategic hubs around the world.
          </p>
        </div>
      </div>

      {/* ===================== LOCATION LIST ===================== */}
      <div className="container py-5">
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

        {/* COUNTRY / CITY LIST */}
        {countries.map(country => {
          const countryCities = cities.filter(city => city.countryId === country.id);
          if (countryCities.length === 0) return null;

          const isOpen = openSections.includes(country.id);

          return (
            <div key={country.id} className="mb-4 border rounded">
              {/* COUNTRY HEADER */}
              <div
                className="p-3 d-flex justify-content-between cursor-pointer bg-light"
                onClick={() => toggleSection(country.id)}
              >
                <h5 className="fw-bold">
                  {country.countryName}
                  {/* <span className="text-muted ms-2">
                    ({countryCities.length})
                  </span> */}
                </h5>
                <i className={`bi bi-chevron-down transition-icon ${isOpen ? 'rotate-180' : ''}`}></i>
              </div>

              {/* CITY GRID */}
              {isOpen && (
                <div className="p-4 bg-light">
                  <div className="row g-4">
                    {countryCities.map(city => (
                      <div key={city.id} className="col-md-4">
                        <Link href={`/location/${city.id}`}>
                          <a className="card h-100 shadow-sm text-decoration-none">
                            <img
                              src={`${IMG_URL}/${city.image}`}
                              className="card-img-top"
                              style={{ height: 200, objectFit: 'cover' }}
                            />
                            <div className="card-body">
                              <h5 className="fw-bold">{city.cityName}</h5>
                              <p className="small text-muted">{city.address}</p>
                              <p className="small">{city.phoneNo}</p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ===================== STYLES ===================== */}
      <style jsx>{`
        .location-banner {
          min-height: 400px;
          background-image: url('/assets/images/banner-img3.png');
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
        .transition-icon { transition: transform 0.3s; }
        .rotate-180 { transform: rotate(180deg); }
      `}</style>
    </>
  );
}

export default Locations;
