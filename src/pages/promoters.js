

// import React, { useState } from 'react';

// const promotersData = [
//   {
//     id: 1,
//     image: '/assets/images/attorney2.png', // Replace with Dilip Kr. Niranjan's image
//     name: "Anil varma",
//     designation: "Senior Partner–Commercial, Insolvency, Banking & Finance Law",
//   },
//   {
//     id: 2,
//     image: '/assets/images/attorney1.png', // Replace with Prema Priyadarshini's image
//     name: "Prema Sharma",
//     designation: "Dispute Resolution Expert & Trainer Mediator",
//   },
//   {
//     id: 3,
//     image: '/assets/images/attorney3.png', // Replace with Ramesh Kumar's image
//     name: "Ravi Kumar",
//     designation: "Head Business Development & Senior Associate",
//   },
//   {
//     id: 4,
//     image: '/assets/images/attorney6.png', 
//     name: "Meera Sharma",
//     designation: "Head Business Development & Senior Associate",
//   }
// ];

// function Promoters() {
//   return (
//     <>
//            {/* ==========================================================================
//           1. BANNER SECTION (Keeping your original color/style)
//       ========================================================================== */}
//       <div className="inner-banner-section position-relative" style={{
//           backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/images/promoter-banner.png)', 
//           padding: '120px 0', 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           textAlign: 'center'
//         }}>
//         <div className="container">
//            <h1 className="text-white display-4 fw-bold">About The Team</h1>
//            <p className="text-white lead">The Visionary Leadership Team</p>
//         </div>
//       </div>
//       {/* ==========================================================================
//           2. TEAM GRID SECTION
//       ========================================================================== */}
//       <div className="container py-2">
//         <div className="row g-4 justify-content-center">
//           {promotersData.map((promoter) => (
//             <div className="col-lg-3 col-md-6 text-center" key={promoter.id}>
//               <div className="team-card-wrapper">
                
//                 {/* Profile Image with Black Border */}
//                 <div className="profile-img-container mb-3">
//                   <img 
//                     src={promoter.image} 
//                     alt={promoter.name} 
//                     className="img-fluid profile-img"
//                   />
//                 </div>

//                 {/* Name */}
//                 <h4 className="fw-bold  team-name" style={{ color: '#333' }}>
//                   {promoter.name}
//                 </h4>

//                 {/* Designation */}
//                 <p className="team-designation text-muted ">
//                   {promoter.designation}
//                 </p>

//                 {/* Know More Button */}
//                 <button className="btn-know-more">
//                   Know more
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ==========================================================================
//           STYLES (CSS-in-JS)
//       ========================================================================== */}
//       <style jsx>{`
//         /* Banner Style */
//         .about-team-banner {
//           background: linear-gradient(90deg, #A45035 0%, #CB8D73 100%);
//           padding: 60px 0;
//           position: relative;
//           overflow: hidden;
//         }
        
//         /* Optional: Adding the subtle pattern seen in the image */
//         .about-team-banner::after {
//           content: "";
//           position: absolute;
//           right: 0;
//           top: 0;
//           width: 300px;
//           height: 100%;
        
//           opacity: 0.1;
//           pointer-events: none;
//         }

//         /* Image Container (Square with black border) */
//         .profile-img-container {
//           display: inline-block;
//           border: 1px solid #000; /* Black border as per image */
//           padding: 0;
//           width: 100%;
//           max-width: 230px;
//           height: 250px;
//           overflow: hidden;
//           background-color: #f8f9fa;
//         }

//         .profile-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Text Styling */
//         .team-name {
//           font-size: 1.4rem;
//           line-height: 1.2;
//         }

//         .team-designation {
//           font-size: 0.9rem;
//           min-height: 50px; /* Keeps buttons aligned */
//           line-height: 1.4;
//           /* padding: 0 10px; */
//         }

//         /* Know More Button (Terracotta/Brown color) */
//         .btn-know-more {
//           background-color: #A35233; /* Brown/Orange color from image */
//           color: #fff;
//           border: none;
//           padding: 8px 25px;
//           font-size: 0.95rem;
//           font-weight: 600;
//           transition: background 0.3s ease;
//           border-radius: 0; /* Square corners like image */
//         }

//         .btn-know-more:hover {
//           background-color: #854028;
//         }

//         /* Card Wrapper Hover Effect */
//         .team-card-wrapper {
//           padding: 20px;
//           transition: transform 0.3s;
//         }
        
//         @media (max-width: 768px) {
//           .about-team-banner {
//              padding: 40px 0;
//              text-align: center;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Promoters;
import React, { useState, useEffect } from 'react';
import { getAllPromoters , IMG_URL } from '../services/authService'
function Promoters() {
  const [promoters, setPromoters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPromoters().then(res => {
      if (res?.success) setPromoters(res.data);
      setLoading(false);
    });
  }, []);

  const bannerImg = promoters.length > 0 && promoters[0].bannerImage 
                    ? `${IMG_URL}/${promoters[0].bannerImage}` : '/assets/images/promoter-banner.png';

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <>
      <div className="banner" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bannerImg})`, 
          padding: '100px 0', backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center'
      }}>
        <h1 className="text-white display-4 fw-bold">Our Team</h1>
      </div>

      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {promoters.map((p) => (
            <div className="col-lg-3 col-md-6 text-center" key={p.id}>
              <div className="profile-container mb-3">
                <img src={`${IMG_URL}/${p.personImage}`} className="profile-img" alt={p.personName} />
              </div>
              <h4 className="fw-bold mb-1">{p.personName}</h4>
              <p className="text-muted small mb-3" style={{ minHeight: '40px' }}>{p.designation}</p>
              <button className="btn-gt">Know more</button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .profile-container {
          width: 100%;
          max-width: 240px;
          height: 280px;
          margin: 0 auto;
          border: 1px solid #000;
          overflow: hidden;
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top; /* Face fix: Isse head nahi katega */
        }
        .btn-gt {
          background-color: #A35233; color: #fff; border: none; padding: 8px 20px; font-weight: 600;
        }
      `}</style>
    </>
  );
}
export default Promoters;