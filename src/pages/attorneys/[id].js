// // import React, { useEffect, useState } from 'react';
// // import { useRouter } from 'next/router';
// // import Link from 'next/link';

// // import { attorneysData } from './index'; 

// // function AttorneyDetails() {
// //   const router = useRouter();
// //   const { id } = router.query;
// //   const [attorney, setAttorney] = useState(null);

// //   const theme = {
// //     primaryBlue: '#002855',
// //     accentGold: '#de9f57',
// //     white: '#ffffff',
// //     lightGray: '#f9f9f9',
// //   };

// //   useEffect(() => {
// //     if (id) {
// //       // Find attorney by ID from the data source
// //       const found = attorneysData.find(item => item.id.toString() === id.toString());
// //       setAttorney(found);
// //     }
// //   }, [id]);

// //   if (!id) return <div className="text-center py-5">Loading...</div>;
// //   if (!attorney) return (
// //     <div className="text-center py-5">
// //       <h3>Attorney Not Found</h3>
// //       <Link href="/attorneys">
// //         <a className="btn btn-primary mt-3">Back to List</a>
// //       </Link>
// //     </div>
// //   );

// //   return (
// //     <>
// //       {/* HERO */}
// //       <div style={{ backgroundColor: theme.primaryBlue, paddingTop: '100px', paddingBottom: '60px', color: theme.white }}>
// //         <div className="container">
// //           <div className="row align-items-center">
            
// //             {/* Profile Image */}
// //             <div className="col-lg-3 col-md-4 mb-4 mb-md-0 text-center text-md-start">
// //               <img 
// //                 src={attorney.image} 
// //                 alt={attorney.name} 
// //                 className="img-fluid rounded shadow-lg" 
// //                 style={{ 
// //                   border: `4px solid ${theme.accentGold}`, 
// //                   width: '100%', 
// //                   maxWidth: '300px',
// //                   height: 'auto',
// //                   aspectRatio: '1/1',
// //                   objectFit: 'cover',
// //                   objectPosition: 'top'
// //                 }}
// //               />
// //             </div>

// //             {/* Basic Info */}
// //             <div className="col-lg-9 col-md-8 ps-md-5">
// //               <h4 className="text-uppercase fw-bold mb-2" style={{ color: theme.accentGold, letterSpacing: '1px' }}>
// //                 {attorney.role}
// //               </h4>
// //               <h1 className="display-4 fw-bold font-serif mb-3 responsive-title">{attorney.name}</h1>
              
// //               <div className="d-flex flex-wrap gap-4 mb-4 text-white-50 info-icons">
// //                 <div className="d-flex align-items-center gap-2">
// //                   <i className="bi bi-geo-alt-fill text-white"></i>
// //                   <span className="text-white">{attorney.location}</span>
// //                 </div>
// //                 <div className="d-flex align-items-center gap-2">
// //                   <i className="bi bi-envelope-fill text-white"></i>
// //                   <a href={`mailto:${attorney.email}`} className="text-white text-decoration-none">{attorney.email}</a>
// //                 </div>
// //                 <div className="d-flex align-items-center gap-2">
// //                   <i className="bi bi-telephone-fill text-white"></i>
// //                   <span className="text-white">{attorney.phone}</span>
// //                 </div>
// //               </div>
              
// //               <div className="d-flex align-items-center gap-2">
// //                  <span className="badge bg-warning text-dark fs-6">${attorney.hourlyRate} / hr</span>
// //                  <div className="text-warning">
// //                     {[...Array(5)].map((_, i) => (
// //                         <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
// //                     ))}
// //                  </div>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* DETAILS CONTENT */}
// //       <div className="py-5" style={{ backgroundColor: theme.white }}>
// //         <div className="container">
// //           <div className="row">
            
// //             {/* Left: Bio */}
// //             <div className="col-lg-8 pe-lg-5 mb-4">
// //               <h3 className="border-bottom pb-2 mb-4" style={{color: theme.primaryBlue, borderColor: theme.accentGold}}>Biography</h3>
// //               {attorney.bio?.map((para, idx) => (
// //                   <p key={idx} className="lead fs-6 text-secondary">{para}</p>
// //               ))}
// //               <div className="mt-4">
// //                   <Link href="/attorneys">
// //                     <a className="btn btn-outline-dark"><i className="bi bi-arrow-left me-2"></i>Back to Professionals</a>
// //                   </Link>
// //               </div>
// //             </div>

// //             {/* Right: Sidebar */}
// //             <div className="col-lg-4">
// //               <div className="bg-light p-4 rounded border">
// //                  <h5 className="fw-bold mb-3" style={{color: theme.primaryBlue}}>Education</h5>
// //                  <ul className="list-unstyled text-secondary">
// //                     {attorney.education?.map((edu, i) => <li key={i} className="mb-2"><i className="bi bi-mortarboard me-2"></i>{edu}</li>)}
// //                  </ul>

// //                  <hr />

// //                  <h5 className="fw-bold mb-3" style={{color: theme.primaryBlue}}>Admissions</h5>
// //                  <ul className="list-unstyled text-secondary">
// //                     {attorney.admissions?.map((adm, i) => <li key={i} className="mb-2"><i className="bi bi-check-circle me-2"></i>{adm}</li>)}
// //                  </ul>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
      
// //       <style jsx>{`
// //         @media (max-width: 768px) {
// //             .responsive-title { font-size: 2.5rem; }
// //             .info-icons { flex-direction: column; gap: 10px !important; }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// // export default AttorneyDetails;



// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// import { attorneysData } from './index'; 

// function AttorneyDetails() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [attorney, setAttorney] = useState(null);

//   useEffect(() => {
//     if (id) {
//       // Find attorney by ID from the data source
//       const found = attorneysData.find(item => item.id.toString() === id.toString());
//       setAttorney(found);
//     }
//   }, [id]);

//   if (!id) return <div className="text-center py-5">Loading...</div>;
//   if (!attorney) return (
//     <div className="text-center py-5">
//       <h3>Attorney Not Found</h3>
//       <Link href="/attorneys">
//         <a className="btn btn-primary mt-3">Back to List</a>
//       </Link>
//     </div>
//   );

//   return (
//     <>
//       {/* HERO */}
//       <div className="section-hero">
//         <div className="container">
//           <div className="row align-items-center">
            
//             {/* Profile Image */}
//             <div className="col-lg-3 col-md-4 mb-4 mb-md-0 text-center text-md-start">
//               <img 
//                 src={attorney.image} 
//                 alt={attorney.name} 
//                 className="img-fluid rounded shadow-lg profile-image" 
//               />
//             </div>

//             {/* Basic Info */}
//             <div className="col-lg-9 col-md-8 ps-md-5">
//               <h4 className="text-uppercase fw-bold mb-2 role-title">
//                 {attorney.role}
//               </h4>
//               <h1 className="display-4 fw-bold font-serif mb-3 responsive-title">{attorney.name}</h1>
              
//               <div className="d-flex flex-wrap gap-4 mb-4 text-white-50 info-icons">
//                 <div className="d-flex align-items-center gap-2">
//                   <i className="bi bi-geo-alt-fill text-white"></i>
//                   <span className="text-white">{attorney.location}</span>
//                 </div>
//                 <div className="d-flex align-items-center gap-2">
//                   <i className="bi bi-envelope-fill text-white"></i>
//                   <a href={`mailto:${attorney.email}`} className="text-white text-decoration-none">{attorney.email}</a>
//                 </div>
//                 <div className="d-flex align-items-center gap-2">
//                   <i className="bi bi-telephone-fill text-white"></i>
//                   <span className="text-white">{attorney.phone}</span>
//                 </div>
//               </div>
              
//               <div className="d-flex align-items-center gap-2">
//                  <span className="badge bg-warning text-dark fs-6">${attorney.hourlyRate} / hr</span>
//                  <div className="text-warning">
//                     {[...Array(5)].map((_, i) => (
//                         <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
//                     ))}
//                  </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* DETAILS CONTENT */}
//       <div className="py-5 section-details">
//         <div className="container">
//           <div className="row">
            
//             {/* Left: Bio */}
//             <div className="col-lg-8 pe-lg-5 mb-4">
//               <h3 className="border-bottom pb-2 mb-4 bio-heading">Biography</h3>
//               {attorney.bio?.map((para, idx) => (
//                   <p key={idx} className="lead fs-6 text-secondary">{para}</p>
//               ))}
//               <div className="mt-4">
//                   <Link href="/attorneys">
//                     <a className="btn btn-outline-dark"><i className="bi bi-arrow-left me-2"></i>Back to Professionals</a>
//                   </Link>
//               </div>
//             </div>

//             {/* Right: Sidebar */}
//             <div className="col-lg-4">
//               <div className="bg-light p-4 rounded border">
//                  <h5 className="fw-bold mb-3 sidebar-heading">Education</h5>
//                  <ul className="list-unstyled text-secondary">
//                     {attorney.education?.map((edu, i) => <li key={i} className="mb-2"><i className="bi bi-mortarboard me-2"></i>{edu}</li>)}
//                  </ul>

//                  <hr />

//                  <h5 className="fw-bold mb-3 sidebar-heading">Admissions</h5>
//                  <ul className="list-unstyled text-secondary">
//                     {attorney.admissions?.map((adm, i) => <li key={i} className="mb-2"><i className="bi bi-check-circle me-2"></i>{adm}</li>)}
//                  </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
      
//       <style jsx>{`
//         /* Hero Section */
//         .section-hero {
//           background-color: #002855;
//           padding-top: 100px;
//           padding-bottom: 60px;
//           color: #ffffff;
//         }

//         /* Profile Image */
//         .profile-image {
//           border: 4px solid #de9f57;
//           width: 100%;
//           max-width: 300px;
//           height: auto;
//           aspect-ratio: 1/1;
//           object-fit: cover;
//           object-position: top;
//         }

//         /* Role Title */
//         .role-title {
//           color: #de9f57;
//           letter-spacing: 1px;
//         }

//         /* Details Content Background */
//         .section-details {
//           background-color: #ffffff;
//         }

//         /* Biography Heading */
//         .bio-heading {
//           color: #002855;
//           border-color: #de9f57 !important;
//         }

//         /* Sidebar Headings */
//         .sidebar-heading {
//           color: #002855;
//         }

//         /* Responsive Tweaks */
//         @media (max-width: 768px) {
//             .responsive-title { 
//               font-size: 2.5rem; 
//             }
//             .info-icons { 
//               flex-direction: column; 
//               gap: 10px !important; 
//             }
//         }
//       `}</style>
//     </>
//   );
// }

// export default AttorneyDetails;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// Data Import from same folder
import { attorneysData } from './index'; 

function AttorneyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [attorney, setAttorney] = useState(null);

  useEffect(() => {
    if (id) {
      const found = attorneysData.find(item => item.id.toString() === id.toString());
      setAttorney(found);
    }
  }, [id]);

  if (!id) return <div className="text-center py-5">Loading...</div>;
  if (!attorney) return (
    <div className="text-center py-5">
      <h3>Attorney Not Found</h3>
      <Link href="/attorneys">
        <a className="btn btn-primary mt-3">Back to List</a>
      </Link>
    </div>
  );

  return (
    <>
      {/* HERO SECTION */}
      <div className="section-hero">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Profile Image */}
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0 text-center text-md-start">
              <img 
                src={attorney.image} 
                alt={attorney.name} 
                className="img-fluid rounded shadow-lg profile-image" 
              />
            </div>

            {/* Basic Info */}
            <div className="col-lg-9 col-md-8 ps-md-5">
              <h4 className="text-uppercase fw-bold mb-2 role-title">
                {attorney.role}
              </h4>
              <h1 className="display-4 fw-bold font-serif mb-3 responsive-title text-white">{attorney.name}</h1>
              
              {/* Contact Icons */}
              <div className="d-flex flex-wrap gap-4 mb-4 text-white-50 info-icons">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-gold"></i>
                  <span className="text-white fs-5">{attorney.location}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-gold"></i>
                  <a href={`mailto:${attorney.email}`} className="text-white text-decoration-none fs-5">{attorney.email}</a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill text-gold"></i>
                  <span className="text-white fs-5">{attorney.phone}</span>
                </div>
              </div>
              
              {/* Rating & Rate */}
              <div className="d-flex align-items-center gap-3">
                 <span className="badge bg-gold text-dark fs-6 px-3 py-2">${attorney.hourlyRate} / hr</span>
                 <div className="text-warning fs-5">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
                    ))}
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* DETAILS CONTENT */}
      <div className="py-5 section-details">
        <div className="container">
          <div className="row">
            
            {/* LEFT COLUMN: Bio & Experience */}
            <div className="col-lg-8 pe-lg-5 mb-5">
              
              {/* Biography Section */}
              <div className="mb-5">
                <h3 className="border-bottom pb-2 mb-4 section-heading">Biography</h3>
                {/* 18px Font applied via css below */}
                {attorney.bio?.map((para, idx) => (
                    <p key={idx} className="text-muted bio-text">{para}</p>
                ))}
              </div>

              {/* Experience Section (NEW) */}
              {attorney.experience && (
                <div className="mb-5">
                    <h3 className="border-bottom pb-2 mb-4 section-heading">Representative Experience</h3>
                    <ul className="list-unstyled">
                        {attorney.experience.map((exp, i) => (
                            <li key={i} className="mb-3 d-flex align-items-start text-muted experience-item">
                                <i className="bi bi-arrow-right-circle-fill text-gold me-3 mt-1"></i>
                                <span>{exp}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              )}

              <div className="mt-5">
                  <Link href="/attorneys">
                    <a className="btn btn-outline-navy px-4 py-2"><i className="bi bi-arrow-left me-2"></i>Back to Professionals</a>
                  </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded border sidebar-box">
                 
                 {/* Education */}
                 <h5 className="fw-bold mb-3 sidebar-heading text-uppercase ls-1">Education</h5>
                 <ul className="list-unstyled text-secondary mb-4">
                    {attorney.education?.map((edu, i) => (
                        <li key={i} className="mb-2 d-flex fs-6">
                            <i className="bi bi-mortarboard-fill me-2 text-gold"></i>
                            <span>{edu}</span>
                        </li>
                    ))}
                 </ul>

                 <hr className="text-muted opacity-25" />

                 {/* Admissions */}
                 <h5 className="fw-bold mb-3 sidebar-heading text-uppercase ls-1 mt-4">Admissions</h5>
                 <ul className="list-unstyled text-secondary mb-4">
                    {attorney.admissions?.map((adm, i) => (
                        <li key={i} className="mb-2 d-flex fs-6">
                            <i className="bi bi-building me-2 text-gold"></i>
                            <span>{adm}</span>
                        </li>
                    ))}
                 </ul>

                 {/* Awards (NEW) */}
                 {attorney.awards && (
                    <>
                        <hr className="text-muted opacity-25" />
                        <h5 className="fw-bold mb-3 sidebar-heading text-uppercase ls-1 mt-4">Recognition</h5>
                        <ul className="list-unstyled text-secondary mb-4">
                            {attorney.awards.map((award, i) => (
                                <li key={i} className="mb-2 d-flex fs-6">
                                    <i className="bi bi-trophy-fill me-2 text-gold"></i>
                                    <span>{award}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                 )}

                 {/* Languages (NEW) */}
                 {attorney.languages && (
                    <>
                        <hr className="text-muted opacity-25" />
                        <h5 className="fw-bold mb-3 sidebar-heading text-uppercase ls-1 mt-4">Languages</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {attorney.languages.map((lang, i) => (
                                <span key={i} className="badge bg-white border text-secondary p-2 fs-6">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </>
                 )}

              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* COLORS */
        .text-gold { color: #de9f57 !important; }
        .bg-gold { background-color: #de9f57 !important; }
        .btn-outline-navy { color: #002855; border: 2px solid #002855; font-weight: bold; transition: 0.3s; }
        .btn-outline-navy:hover { background-color: #002855; color: #fff; }

        .ls-1 { letter-spacing: 1px; font-size: 0.9rem; }

        /* HERO */
        .section-hero { background-color: #002855; padding-top: 100px; padding-bottom: 80px; color: #ffffff; }
        .profile-image { border: 4px solid #de9f57; width: 100%; max-width: 280px; height: 280px; object-fit: cover; object-position: top; }
        .role-title { color: #de9f57; letter-spacing: 2px; font-size: 1.1rem; }

        /* BIG FONTS CLASS */
        .bio-text {
            font-size: 18px; /* 18px Font Size for Bio */
            line-height: 1.8;
            margin-bottom: 20px;
        }
        .experience-item {
            font-size: 17px;
        }

        /* HEADINGS */
        .section-heading { color: #002855; border-color: #de9f57 !important; font-weight: bold; font-size: 1.75rem; }
        .sidebar-heading { color: #002855; }
        .sidebar-box { box-shadow: 0 5px 15px rgba(0,0,0,0.05); }

        /* RESPONSIVE */
        @media (max-width: 768px) {
            .responsive-title { font-size: 2.2rem; }
            .info-icons { flex-direction: column; gap: 10px !important; }
            .profile-image { margin-bottom: 20px; }
        }
      `}</style>
    </>
  );
}

export default AttorneyDetails;