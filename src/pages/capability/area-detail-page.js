// import React from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// // --- CENTRAL DATA STORE FOR ALL AREAS ---
// const allAreasData = {
//   "cryptocurrency-enforcement": {
//     title: "Cryptocurrency Enforcement",
//     breadcrumb: "BLOCKCHAIN & DIGITAL ASSETS | WHITE COLLAR DEFENSE & INVESTIGATIONS",
//     heroImg: "/assets/images/our-firm4.png",
//     intro: "Greenberg Traurig’s Cryptocurrency Enforcement Team comprises dedicated former government officials and experienced white collar defense attorneys.",
//     paragraphs: [
//       "With cryptocurrencies and other digital assets continuing to gain market acceptance, scrutiny from regulators is on the rise.",
//       "Our team consists of former federal prosecutors and high-ranking officials from the DOJ and SEC."
//     ],
//     team: [
//       { 
//         name: "David I. Miller", title: "SHAREHOLDER", email: "David.Miller@gtlaw.com", phone: "+1 212.801.9205", 
//         location: "New York", img: "/assets/images/attorney1.png", 
//         practice: "WHITE COLLAR DEFENSE & INVESTIGATIONS" 
//       },
//       { 
//         name: "John Huber", title: "SHAREHOLDER", email: "John.Huber@gtlaw.com", phone: "+1 801.478.6915", 
//         location: "Salt Lake City", img: "/assets/images/attorney2.png", 
//         practice: "WHITE COLLAR DEFENSE & INVESTIGATIONS" 
//       }
//     ]
//   },
//   "fintech": {
//     title: "Fintech",
//     breadcrumb: "BLOCKCHAIN & DIGITAL ASSETS | CORPORATE & SECURITIES",
//     heroImg: "/assets/images/our-firm4.png",
//     intro: "Our Fintech practice provides strategic counsel to companies at the intersection of financial services and technology.",
//     paragraphs: [
//       "We advise clients on emerging payment systems, mobile banking, and peer-to-peer lending platforms.",
//       "We help navigate the complex regulatory web of state and federal financial laws."
//     ],
//     team: [
//       { 
//         name: "Elaine Walker", title: "DIRECTOR", email: "walkere@gtlaw.com", phone: "+1 305 579 0832", 
//         location: "Miami", img: "/assets/images/attorney6.png", 
//         practice: "CORPORATE & SECURITIES" 
//       }
//     ]
//   }
// };

// export default function AreaDetailPage() {
//   const router = useRouter();
//   const { type } = router.query;

//   // Jab tak router ready na ho, loading dikhao
//   if (!router.isReady) return <div className="p-5 text-center">Loading...</div>;

//   // URL wale 'type' se data nikalna
//   const data = allAreasData[type];

//   // Agar data na mile (galat URL)
//   if (!data) {
//     return (
//       <div className="container py-5 text-center">
//         <h2 className="font-serif">Page Not Found</h2>
//         <p>Hume <strong>{type}</strong> se juda koi data nahi mila.</p>
//         <button className="btn btn-outline-dark mt-3" onClick={() => router.back()}>Back</button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>{data.title} | GT Law</title>
//       </Head>

//       {/* --- HERO SECTION --- */}
//       <div className="area-hero" style={{ backgroundImage: `url(${data.heroImg})` }}>
//         <div className="overlay"></div>
//         <div className="container hero-content text-center">
//           <h1 className="hero-title font-serif">{data.title}</h1>
//         </div>
//       </div>

//       {/* --- GOLD BREADCRUMB --- */}
//       <div className="gold-bar">
//         <div className="container py-2 text-center">
//           <span className="breadcrumb-txt fw-bold text-uppercase">{data.breadcrumb}</span>
//         </div>
//       </div>

//       {/* --- CONTENT SECTION --- */}
//       <div className="container py-5 mt-3">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <p className="lead-text fw-bold mb-4">{data.intro}</p>
//             {data.paragraphs.map((p, i) => <p key={i} className="body-text">{p}</p>)}
//           </div>
//         </div>
//       </div>

//       {/* --- MEET THE TEAM SECTION --- */}
//       <div className="team-bg py-5">
//         <div className="container">
//           <h2 className="font-serif fw-bold mb-5 border-bottom border-dark pb-3">Meet the Team</h2>
          
//           {data.team.map((member, idx) => (
//             <div key={idx} className="team-card row mb-4 align-items-center bg-white p-3 mx-0 shadow-sm border">
//               <div className="col-md-2 text-center">
//                 <img src={member.img} alt={member.name} className="member-img" />
//               </div>
//               <div className="col-md-6 mt-3 mt-md-0">
//                 <h3 className="font-serif text-gold mb-1">{member.name}</h3>
//                 <p className="small text-muted fw-bold mb-2">{member.title}</p>
//                 <p className="mb-1">
//                   <a href={`mailto:${member.email}`} className="text-gold-link fw-bold small">{member.email}</a>
//                 </p>
//                 <p className="small mb-0 fw-bold">{member.phone}</p>
//               </div>
//               <div className="col-md-4 text-md-end mt-3 mt-md-0">
//                 <p className="small text-navy fw-bold mb-3">{member.location}</p>
//                 <div className="practice-tag">{member.practice}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .font-serif { font-family: "Georgia", serif; }
//         .text-gold { color: #cfa144; }
//         .text-navy { color: #002855; }

//         .area-hero {
//             height: 380px; background-size: cover; background-position: center;
//             position: relative; display: flex; align-items: center;
//         }
//         .overlay { background: rgba(0,0,0,0.45); position: absolute; inset: 0; }
//         .hero-content { position: relative; z-index: 2; color: white; width: 100%; }
//         .hero-title { font-size: 3.5rem; font-weight: bold; }

//         .gold-bar { background: #cfa144; color: #002855; border-bottom: 5px solid #b38a3a; }
//         .breadcrumb-txt { font-size: 0.8rem; letter-spacing: 1.2px; }

//         .lead-text { font-size: 1.2rem; line-height: 1.8; color: #111; }
//         .body-text { font-size: 1.1rem; line-height: 1.8; color: #333; margin-bottom: 20px; }

//         .team-bg { background-color: #f8f9fa; }
//         .member-img { width: 120px; height: 150px; object-fit: cover; border: 1px solid #ddd; }
//         .text-gold-link { color: #cfa144; text-decoration: underline; }

//         .practice-tag {
//             display: inline-block; border: 1px solid #002855; padding: 8px 15px;
//             font-size: 0.7rem; font-weight: 800; color: #002855; letter-spacing: 1px;
//         }

//         @media (max-width: 768px) {
//             .hero-title { font-size: 2.2rem; }
//             .team-card { text-align: center; }
//         }
//       `}</style>
//     </>
//   );
// }

'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllCapabilitySubCategories } from '../../services/authService';

export default function AreaDetailPage() {
  const router = useRouter();
  const { type } = router.query;

  const [subCategoryData, setSubCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ========= SLUG HELPER ========= */
  const createSlug = (text) =>
    text
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');

  useEffect(() => {
    if (!router.isReady || !type) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllCapabilitySubCategories();
        console.log("ALL SUB CATEGORIES:", res);

        if (res.success) {
          const matched = res.data.find(
            item => createSlug(item.subcategoryName) === type
          );

          if (matched) {
            setSubCategoryData(matched);
          } else {
            console.error("No matching subcategory for:", type);
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.isReady, type]);

  /* ========= LOADING ========= */
  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  /* ========= NOT FOUND ========= */
  if (!subCategoryData) {
    return (
      <div className="container py-5 text-center">
        <h2>Data Not Found</h2>
        <button className="btn btn-dark mt-3" onClick={() => router.back()}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{subCategoryData.subcategoryName} | NRIS Law</title>
      </Head>

      {/* ===== HERO SECTION ===== */}
      <div
        style={{
          backgroundImage: `url(${subCategoryData.bannerImage})`,
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.55)'
          }}
        />
        <div className="container position-relative text-center text-white">
          <h1 className="display-4 fw-bold">
            {subCategoryData.subcategoryName}
          </h1>
        </div>
      </div>

      {/* ===== BREADCRUMB ===== */}
      <div style={{ backgroundColor: '#cfa144' }} className="py-2 text-center">
        <strong className="text-dark">
          CAPABILITY | {subCategoryData.subcategoryName}
        </strong>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="container py-5">
        <h2 className="fw-bold mb-4">Overview</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          {subCategoryData.description}
        </p>
      </div>

      {/* ===== TEAM SECTION (STATIC UI) ===== */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="fw-bold mb-4">Legal Professionals</h3>
          <div className="bg-white shadow-sm p-4 d-flex align-items-center">
            <img
              src="/assets/images/attorney1.png"
              alt="Attorney"
              style={{ width: 100, height: 120, objectFit: 'cover' }}
            />
            <div className="ms-4">
              <h5 className="mb-1">Expert Counsel</h5>
              <p className="mb-2 text-muted">
                For matters related to {subCategoryData.subcategoryName}
              </p>
              <button className="btn btn-dark btn-sm">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
