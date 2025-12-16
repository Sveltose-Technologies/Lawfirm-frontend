import React, { useState } from 'react';
import Head from 'next/head';

// --- DATA ---
const locationsData = [
  {
    id: 'usa',
    country: "United States",
    offices: [
      {
        id: 'ny',
        city: "New York",
        address: "200 Park Avenue, Suite 1700, New York, NY 10166",
        phone: "+1 (212) 555-0199",
       image: '/assets/images/location1.png',
        mapLink: "https://maps.google.com/?q=200+Park+Avenue+New+York"
      },
      {
        id: 'la',
        city: "Los Angeles",
        address: "10250 Constellation Blvd, Los Angeles, CA 90067",
        phone: "+1 (310) 555-0144",
        image: "/assets/images/our-firm4.png", 
        mapLink: "https://maps.google.com/?q=Los+Angeles+CA"
      },
      {
        id: 'chi',
        city: "Chicago",
        address: "77 West Wacker Drive, Suite 3100, Chicago, IL 60601",
        phone: "+1 (312) 555-0123",
         image: "/assets/images/location1.png", 
        mapLink: "https://maps.google.com/?q=Chicago+IL"
      }
    ]
  },
  {
    id: 'india',
    country: "India",
    offices: [
      {
        id: 'del',
        city: "New Delhi",
        address: "Barakhamba Road, Connaught Place, New Delhi - 110001",
        phone: "+91 11 2345 6789",
         image: "/assets/images/location1.png", 
        mapLink: "https://maps.google.com/?q=Connaught+Place+New+Delhi"
      },
      {
        id: 'mum',
        city: "Mumbai",
        address: "One BKC, Bandra Kurla Complex, Mumbai - 400051",
        phone: "+91 22 2345 6789",
        image: "/assets/images/location2.png",
        mapLink: "https://maps.google.com/?q=BKC+Mumbai"
      }
    ]
  },
  {
    id: 'uk',
    country: "United Kingdom",
    offices: [
      {
        id: 'lon',
        city: "London",
        address: "The Shard, 32 London Bridge St, London SE1 9SG",
        phone: "+44 20 7946 0123",
       image: "/assets/images/our-firm4.png", 
        mapLink: "https://maps.google.com/?q=The+Shard+London"
      }
    ]
  },
  {
    id: 'uae',
    country: "United Arab Emirates",
    offices: [
      {
        id: 'dub',
        city: "Dubai",
        address: "Burj Khalifa District, Downtown Dubai, UAE",
        phone: "+971 4 123 4567",
       image: '/assets/images/location1.png',
        mapLink: "https://maps.google.com/?q=Dubai+UAE"
      }
    ]
  }
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
    const allIds = locationsData.map(loc => loc.id);
    setOpenSections(allIds);
  };

  const handleCollapseAll = () => {
    setOpenSections([]);
  };

  const theme = {
    primaryBlue: '#0a1c38',
    accentGold: '#D4AF37',   
    bgLight: '#f8f9fa',
    white: '#ffffff'
  };

  return (
    <>
      <Head>
        <title>Our Locations | Global Offices</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* --- HERO SECTION --- */}
      <div className="location-banner d-flex align-items-center justify-content-center text-center px-3">
          <div className="container">
              <span className="d-block mb-2 text-uppercase fw-bold text-gold">
                  Global Reach
              </span>
              <h1 className="display-3 fw-bold hero-title font-serif">Our Locations</h1>
              <p className="lead opacity-75">Serving clients from strategic hubs around the world.</p>
          </div>
      </div>

      <div className="container py-5 min-vh-60">
        
        {/* --- CONTROLS (Expand/Collapse) --- */}
        <div className="row mb-4 align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                <h3 className="fw-bold mb-0 text-blue">Office Directory</h3>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
                <div className="btn-group shadow-sm" role="group">
                    <button 
                        type="button" 
                        className="btn btn-outline-dark fs-small"
                        onClick={handleExpandAll}
                    >
                        <i className="bi bi-arrows-expand me-2"></i>Expand All
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-dark fs-small"
                        onClick={handleCollapseAll}
                    >
                        <i className="bi bi-arrows-collapse me-2"></i>Collapse All
                    </button>
                </div>
            </div>
        </div>

        {/* --- LOCATIONS LIST --- */}
        <div className="row g-4">
            {locationsData.map((location) => {
                const isOpen = openSections.includes(location.id);

                return (
                    <div className="col-12" key={location.id}>
                        <div className="border rounded bg-white shadow-sm overflow-hidden">
                            
                            {/* COUNTRY HEADER (Clickable) */}
                            <div 
                                className={`accordion-header p-4 d-flex justify-content-between align-items-center ${isOpen ? 'active-header' : ''}`}
                                onClick={() => toggleSection(location.id)}
                            >
                                <h4 className="m-0 fw-bold text-blue">
                                    {location.country} 
                                    <span className="ms-2 text-muted fw-normal fs-6">({location.offices.length} Offices)</span>
                                </h4>
                                <div className={`rotate-icon ${isOpen ? 'open' : ''}`}>
                                    <i className="bi bi-chevron-down fs-5"></i>
                                </div>
                            </div>

                            {/* OFFICES GRID (Collapsible) */}
                            {isOpen && (
                                <div className="p-4 bg-light-section">
                                    <div className="row g-4">
                                        {location.offices.map((office) => (
                                            <div key={office.id} className="col-12 col-md-6 col-lg-4">
                                                <div className="location-card">
                                                    {/* State Picture */}
                                                    <div className="position-relative">
                                                        <img 
                                                            src={office.image} 
                                                            alt={office.city} 
                                                            className="office-img"
                                                        />
                                                        <div className="overlay-gradient position-absolute bottom-0 start-0 w-100 p-2">
                                                            <span className="text-white fw-bold px-2">{office.city}</span>
                                                        </div>
                                                    </div>

                                                    {/* Details */}
                                                    <div className="p-4">
                                                        <h5 className="fw-bold mb-3 text-blue">{office.city} Office</h5>
                                                        
                                                        <div className="mb-3 d-flex align-items-start">
                                                            <i className="bi bi-geo-alt-fill me-2 mt-1 text-gold"></i>
                                                            <p className="mb-0 small text-muted">{office.address}</p>
                                                        </div>

                                                        <div className="mb-4 d-flex align-items-center">
                                                            <i className="bi bi-telephone-fill me-2 text-gold"></i>
                                                            <a href={`tel:${office.phone}`} className="mb-0 small text-decoration-none text-dark fw-bold">
                                                                {office.phone}
                                                            </a>
                                                        </div>

                                                        {/* Get Directions Button */}
                                                        <a 
                                                            href={office.mapLink} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="btn btn-directions w-100 py-2 rounded-1 text-uppercase small"
                                                        >
                                                            <i className="bi bi-map me-2"></i>Get Directions
                                                        </a>
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
        /* Colors */
        .text-blue { color: ${theme.primaryBlue}; }
        .text-gold { color: ${theme.accentGold}; letter-spacing: 2px; }
        .bg-light-section { background-color: ${theme.bgLight}; }

        /* Hero Banner */
        .location-banner {
            min-height: 400px;
            background-image: linear-gradient(rgba(10, 28, 56, 0.8), rgba(10, 28, 56, 0.8)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop);
            background-size: cover;
            background-position: center;
            color: #fff;
            padding-top: 80px;
        }

        /* Location Card */
        .location-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid rgba(0,0,0,0.05);
        }
        .location-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }

        /* Accordion */
        .accordion-header {
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: #fff;
        }
        .accordion-header:hover {
            background-color: #f1f1f1;
        }
        .active-header {
            background-color: #f8f9fa;
            border-bottom: 1px solid #eee;
        }

        /* Icons */
        .rotate-icon {
            transition: transform 0.3s ease;
        }
        .rotate-icon.open {
            transform: rotate(180deg);
        }

        /* Images & Overlays */
        .office-img {
            height: 200px;
            width: 100%;
            object-fit: cover;
        }
        .overlay-gradient {
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        /* Buttons */
        .btn-directions {
            background-color: transparent;
            border: 1px solid ${theme.primaryBlue};
            color: ${theme.primaryBlue};
            font-weight: 600;
            transition: all 0.3s;
        }
        .btn-directions:hover {
            background-color: ${theme.primaryBlue};
            color: #fff;
        }

        .fs-small { font-size: 0.9rem; }
        .min-vh-60 { min-height: 60vh; }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .office-img { height: 180px; }
        }
      `}</style>
    </>
  );
}

export default Locations;


// import React, { useState } from 'react';
// import Head from 'next/head';

// // --- DATA ---
// const locationsData = [
//   {
//     id: 'usa',
//     country: "United States",
//     offices: [
//       {
//         id: 'ny',
//         city: "New York",
//         address: "200 Park Avenue, Suite 1700, New York, NY 10166",
//         phone: "+1 (212) 555-0199",
//         image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop", 
//         mapLink: "https://maps.google.com/?q=200+Park+Avenue+New+York"
//       },
//       {
//         id: 'la',
//         city: "Los Angeles",
//         address: "10250 Constellation Blvd, Los Angeles, CA 90067",
//         phone: "+1 (310) 555-0144",
//         image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop", 
//         mapLink: "https://maps.google.com/?q=Los+Angeles+CA"
//       },
//       {
//         id: 'chi',
//         city: "Chicago",
//         address: "77 West Wacker Drive, Suite 3100, Chicago, IL 60601",
//         phone: "+1 (312) 555-0123",
//         image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=800&auto=format&fit=crop", 
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
//         address: "Barakhamba Road, Connaught Place, New Delhi - 110001",
//         phone: "+91 11 2345 6789",
//         image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop", 
//         mapLink: "https://maps.google.com/?q=Connaught+Place+New+Delhi"
//       },
//       {
//         id: 'mum',
//         city: "Mumbai",
//         address: "One BKC, Bandra Kurla Complex, Mumbai - 400051",
//         phone: "+91 22 2345 6789",
//         image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800&auto=format&fit=crop",
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
//         address: "The Shard, 32 London Bridge St, London SE1 9SG",
//         phone: "+44 20 7946 0123",
//         image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
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
//         address: "Burj Khalifa District, Downtown Dubai, UAE",
//         phone: "+971 4 123 4567",
//         image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
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
//                                                     {/* State Picture */}
//                                                     <div className="position-relative">
//                                                         <img 
//                                                             src={office.image} 
//                                                             alt={office.city} 
//                                                             className="office-img"
//                                                         />
//                                                         <div className="overlay-gradient position-absolute bottom-0 start-0 w-100 p-2">
//                                                             <span className="text-white fw-bold px-2">{office.city}</span>
//                                                         </div>
//                                                     </div>

//                                                     {/* Details */}
//                                                     <div className="p-4">
//                                                         <h5 className="fw-bold mb-3 text-blue">{office.city} Office</h5>
                                                        
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

//                                                         {/* Get Directions Button */}
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