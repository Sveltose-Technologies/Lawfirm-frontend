// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { getAllCapabilitySubCategories } from "../../../services/authService";

// export default function CapabilityDetail() {
//   const router = useRouter();
//   const { slug: type } = router.query;

//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Static News
//   const staticNews = [
//     {
//       id: "news-1",
//       date: "July 23, 2025",
//       type: "Media Coverage",
//       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
//       source: "Law360",
//     },
//     {
//       id: "news-2",
//       date: "January 03, 2025",
//       type: "GT Advisory",
//       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
//       readTime: "2 min read",
//     },
//   ];

//   // Static Related Capabilities
//   const staticRelatedCapabilities = [
//     "Venture Capital & Emerging Technology",
//     "Innovation & Artificial Intelligence",
//     "Government Law & Policy",
//     "Technology, Media & Telecommunications",
//   ];

//   useEffect(() => {
//     async function fetchCategories() {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await getAllCapabilitySubCategories();
//         if (res && res.data) {
//           setCategories(res.data);

//           // Find selected category based on slug (converted to slug format)
//           if (type) {
//             const matched = res.data.find(
//               (cat) =>
//                 cat.subcategoryName
//                   ?.toLowerCase()
//                   .replace(/\s+/g, "-") === type
//             );
//             setSelectedCategory(matched || res.data[0]);
//           } else {
//             setSelectedCategory(res.data[0]);
//           }
//         } else {
//           setError("No data received from server");
//         }
//       } catch (err) {
//         setError("Error fetching categories");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (type) fetchCategories();
//   }, [type]);

//   if (loading) return <div className="p-5 text-center">Loading...</div>;
//   if (error) return <div className="p-5 text-center text-danger">{error}</div>;
//   if (!selectedCategory)
//     return (
//       <div className="p-5 text-center">
//         No category found for <strong>{type}</strong>
//       </div>
//     );

//   return (
//     <>
//       <Head>
//         <title>{selectedCategory.subcategoryName} | GT Law</title>
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
//         />
//       </Head>

//       {/* HERO SECTION */}
//       <div
//         className="hero-section"
//         style={{
//           backgroundImage: `url(${selectedCategory.bannerImage.startsWith("uploads") ? "/" + selectedCategory.bannerImage : selectedCategory.bannerImage
//             })`,
//         }}
//       >
//         <div className="overlay"></div>
//         <div className="container hero-content text-center">
//           <h1 className="hero-title font-serif">
//             {selectedCategory.subcategoryName}
//           </h1>
//           <Link href="/attorneys">
//             <a className="btn-gold-outline mt-3">
//               MEET THE TEAM{" "}
//               <i className="bi bi-chevron-right ms-2 small-icon"></i>
//             </a>
//           </Link>
//         </div>
//       </div>

//       {/* DESCRIPTION */}
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <p className="lead-text">{selectedCategory.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* MEET THE TEAM (STATIC as you requested) */}
//       <div className="team-bg py-5">
//         <div className="container">
//           <h2 className="font-serif fw-bold mb-5 border-bottom border-dark pb-3">
//             Meet the Team
//           </h2>

//           {/* Example static team members */}
//           <div className="team-card row mb-4 align-items-center bg-white p-3 mx-0 shadow-sm border">
//             <div className="col-md-2 text-center">
//               <img
//                 src="/assets/images/attorney1.png"
//                 alt="David I. Miller"
//                 className="member-img"
//               />
//             </div>
//             <div className="col-md-6 mt-3 mt-md-0">
//               <h3 className="font-serif text-gold mb-1">David I. Miller</h3>
//               <p className="small text-muted fw-bold mb-2">SHAREHOLDER</p>
//               <p className="mb-1">
//                 <a
//                   href="mailto:David.Miller@gtlaw.com"
//                   className="text-gold-link fw-bold small"
//                 >
//                   David.Miller@gtlaw.com
//                 </a>
//               </p>
//               <p className="small mb-0 fw-bold">+1 212.801.9205</p>
//             </div>
//             <div className="col-md-4 text-md-end mt-3 mt-md-0">
//               <p className="small text-navy fw-bold mb-3">New York</p>
//               <div className="practice-tag">WHITE COLLAR DEFENSE & INVESTIGATIONS</div>
//             </div>
//           </div>

//           {/* Add more static team members here if needed */}
//         </div>
//       </div>

//       {/* NEWS SECTION (STATIC) */}
//       <div className="news-section">
//         <div className="container">
//           <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
//             <h2 className="text-white font-serif fw-bold m-0">
//               News, Insights & Events
//             </h2>
//           </div>

//           <div className="row">
//             {staticNews.map((news) => (
//               <div key={news.id} className="col-12 mb-4 news-item">
//                 <div className="d-flex flex-column">
//                   <div className="mb-2">
//                     <span className="text-white fw-bold text-uppercase small">
//                       {news.date}
//                     </span>
//                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
//                       {news.type}
//                     </span>
//                   </div>
//                   <Link href={`/news/${news.id}`}>
//                     <a className="news-title font-serif">{news.title}</a>
//                   </Link>
//                   <div className="text-muted small mt-1 fst-italic">
//                     {news.readTime || news.source || "Read More"}
//                   </div>
//                 </div>
//                 <hr className="border-secondary opacity-25 mt-3" />
//               </div>
//             ))}
//           </div>

//           <div className="text-end">
//             <Link href="/news">
//               <a
//                 className="text-white fw-bold small text-uppercase"
//                 style={{ letterSpacing: "1px" }}
//               >
//                 View More +
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* RELATED CAPABILITIES (STATIC) */}
//       <div className="container py-5 mb-5">
//         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
//         <div className="related-grid">
//           {staticRelatedCapabilities.map((cap, idx) => (
//             <Link
//               key={idx}
//               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
//             >
//               <a className="related-pill">{cap}</a>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* STYLES */}
//       <style jsx>{`
//         :global(:root) {
//           --gold: #de9f57;
//           --navy: #002855;
//         }
//         .text-gold {
//           color: var(--gold) !important;
//         }
//         .font-serif {
//           font-family: "Georgia", "Times New Roman", serif;
//         }
//         .hero-section {
//           background-size: cover;
//           background-position: center;
//           height: 60vh;
//           min-height: 450px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           position: relative;
//           margin-top: -80px;
//         }
//         .overlay {
//           background: rgba(0, 40, 85, 0.7);
//           position: absolute;
//           inset: 0;
//         }
//         .hero-content {
//           position: relative;
//           z-index: 2;
//           color: white;
//           padding-top: 100px;
//           width: 100%;
//         }
//         .hero-title {
//           font-size: clamp(2rem, 3.5vw, 3rem);
//           font-weight: 700;
//           margin-bottom: 30px;
//           line-height: 1.2;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
//         }
//         .btn-gold-outline {
//           border: 2px solid white;
//           color: white;
//           padding: 12px 30px;
//           font-weight: bold;
//           letter-spacing: 2px;
//           transition: 0.3s;
//           text-decoration: none;
//           display: inline-block;
//         }
//         .btn-gold-outline:hover {
//           background: white;
//           color: var(--navy);
//         }
//         .lead-text {
//           font-size: 1.25rem;
//           line-height: 1.7;
//           color: #333;
//           font-weight: 500;
//         }
//         .team-bg {
//           background-color: #f8f9fa;
//         }
//         .member-img {
//           width: 120px;
//           height: 150px;
//           object-fit: cover;
//           border: 1px solid #ddd;
//         }
//         .text-gold-link {
//           color: var(--gold);
//           text-decoration: underline;
//         }
//         .practice-tag {
//           display: inline-block;
//           border: 1px solid var(--navy);
//           padding: 8px 15px;
//           font-size: 0.7rem;
//           font-weight: 800;
//           color: var(--navy);
//           letter-spacing: 1px;
//         }
//         .news-section {
//           background-color: #222;
//           padding: 80px 0;
//           color: white;
//         }
//         .news-title {
//           font-size: 1.6rem;
//           color: var(--gold);
//           text-decoration: none;
//           display: block;
//           transition: 0.2s;
//         }
//         .news-title:hover {
//           text-decoration: underline;
//           color: #eac07a;
//         }
//         .related-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 10px;
//         }
//         .related-pill {
//           background: white;
//           border: 1px solid #ddd;
//           padding: 10px 20px;
//           color: #333;
//           text-decoration: none;
//           font-weight: 500;
//           transition: 0.2s;
//         }
//         .related-pill:hover {
//           background: var(--navy);
//           color: white;
//           border-color: var(--navy);
//         }
//       `}</style>
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { getAllCapabilitySubCategories } from "../../../services/authService";

// export default function CapabilityDetail() {
//   const router = useRouter();
//   const { slug: type } = router.query;

//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [relatedSubcategories, setRelatedSubcategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   /* ================= STATIC NEWS ================= */
//   const staticNews = [
//     {
//       id: "news-1",
//       date: "July 23, 2025",
//       type: "Media Coverage",
//       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
//       source: "Law360",
//     },
//     {
//       id: "news-2",
//       date: "January 03, 2025",
//       type: "GT Advisory",
//       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
//       readTime: "2 min read",
//     },
//   ];

//   /* ============ STATIC RELATED CAPABILITIES ============ */
//   const staticRelatedCapabilities = [
//     "Venture Capital & Emerging Technology",
//     "Innovation & Artificial Intelligence",
//     "Government Law & Policy",
//     "Technology, Media & Telecommunications",
//   ];

//   useEffect(() => {
//     async function fetchCategories() {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await getAllCapabilitySubCategories();
//         if (res?.data?.length) {
//           setCategories(res.data);

//           const matched = res.data.find(
//             (cat) =>
//               cat.subcategoryName
//                 ?.toLowerCase()
//                 .replace(/\s+/g, "-") === type
//           );

//           const selected = matched || res.data[0];
//           setSelectedCategory(selected);

//           const related = res.data.filter(
//             (cat) => cat.id !== selected.id
//           );
//           setRelatedSubcategories(related.slice(0, 6));
//         }
//       } catch (err) {
//         setError("Error fetching categories");
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (type) fetchCategories();
//   }, [type]);

//   if (loading) return <div className="p-5 text-center">Loading...</div>;
//   if (error) return <div className="p-5 text-center text-danger">{error}</div>;
//   if (!selectedCategory) return null;

//   return (
//     <>
//       <Head>
//         <title>{selectedCategory.subcategoryName} | GT Law</title>
//       </Head>

//       {/* ================= HERO ================= */}
//       <div
//         className="hero-section"
//         style={{
//           backgroundImage: `url(${
//             selectedCategory.bannerImage?.startsWith("uploads")
//               ? "/" + selectedCategory.bannerImage
//               : selectedCategory.bannerImage
//           })`,
//         }}
//       >
//         <div className="overlay" />
//         <div className="hero-content text-center">
//           <h1 className="hero-title font-serif">
//             {selectedCategory.subcategoryName}
//           </h1>
//         </div>
//       </div>

//       {/* ================= DESCRIPTION ================= */}
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 text-center">
//             <p className="lead-text">
//               {selectedCategory.description}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ================= AREA OF FOCUS ================= */}
//       <div className="container py-5 text-center">
//         <h3 className="font-serif fw-bold mb-4">Area of Focus</h3>
//         <div className="focus-grid justify-content-center">
//           {relatedSubcategories.map((sub) => (
//             <Link
//               key={sub.id}
//               href={`/capability/${sub.subcategoryName
//                 .toLowerCase()
//                 .replace(/\s+/g, "-")}`}
//             >
//               <a className="focus-pill">
//                 {sub.subcategoryName}
//               </a>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* ================= NEWS (STATIC) ================= */}
//       <div className="news-section">
//         <div className="container">
//           <h2 className="font-serif fw-bold mb-4">
//             News, Insights & Events
//           </h2>

//           {staticNews.map((news) => (
//             <div key={news.id} className="mb-4">
//               <div className="small text-uppercase mb-1">
//                 {news.date} &nbsp;•&nbsp; {news.type}
//               </div>

//               <Link href={`/news/${news.id}`}>
//                 <a className="news-title font-serif">
//                   {news.title}
//                 </a>
//               </Link>

//               <div className="small fst-italic mt-1">
//                 {news.readTime || news.source}
//               </div>

//               <hr className="opacity-25" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= RELATED CAPABILITIES ================= */}
//       <div className="container py-5 mb-5">
//         <h3 className="font-serif fw-bold mb-4">
//           Related Capabilities
//         </h3>
//         <div className="related-grid">
//           {staticRelatedCapabilities.map((cap, idx) => (
//             <Link
//               key={idx}
//               href={`/capability/${cap
//                 .toLowerCase()
//                 .replace(/[^a-z0-9]+/g, "-")}`}
//             >
//               <a className="related-pill">{cap}</a>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* ================= STYLES ================= */}
//       <style jsx>{`
//         .hero-section {
//           height: 60vh;
//           min-height: 450px;
//           background-size: cover;
//           background-position: center;
//           position: relative;
//           margin-top: -80px;
//         }
//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 40, 85, 0.7);
//         }
//         .hero-content {
//           position: relative;
//           z-index: 2;
//           color: #fff;
//           padding-top: 120px;
//         }
//         .hero-title {
//           font-size: 3rem;
//           font-weight: 700;
//         }
//         .lead-text {
//           font-size: 1.2rem;
//           line-height: 1.7;
//         }
//         .focus-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//         }
//         .focus-pill {
//           border: 1px solid #002855;
//           padding: 10px 22px;
//           font-weight: 600;
//           text-decoration: none;
//           color: #002855;
//         }
//         .focus-pill:hover {
//           background: #002855;
//           color: #fff;
//         }
//         .news-section {
//           background: #222;
//           color: #fff;
//           padding: 80px 0;
//         }
//         .news-title {
//           font-size: 1.5rem;
//           color: #de9f57;
//           text-decoration: none;
//         }
//         .news-title:hover {
//           text-decoration: underline;
//         }
//         .related-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//         }
//         .related-pill {
//           border: 1px solid #ddd;
//           padding: 10px 22px;
//           text-decoration: none;
//           color: #333;
//         }
//         .related-pill:hover {
//           background: #002855;
//           color: #fff;
//         }
//       `}</style>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllCapabilitySubCategories } from "../../../services/authService";

export default function CapabilityDetail() {
  const router = useRouter();
  const { slug: type } = router.query;

  const [allData, setAllData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [relatedSubcategories, setRelatedSubcategories] = useState([]);
  const [relatedCapabilities, setRelatedCapabilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= STATIC NEWS ================= */
  const staticNews = [
    {
      id: "news-1",
      date: "July 23, 2025",
      type: "Media Coverage",
      title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
      source: "Law360",
    },
    {
      id: "news-2",
      date: "January 03, 2025",
      type: "GT Advisory",
      title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
      readTime: "2 min read",
    },
  ];

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      setError(null);

      try {
        const res = await getAllCapabilitySubCategories();
        if (!res?.data?.length) return;

        setAllData(res.data);

        /* -------- Selected Category -------- */
        const matched = res.data.find(
          (cat) =>
            cat.subcategoryName
              ?.toLowerCase()
              .replace(/\s+/g, "-") === type
        );

        const selected = matched || res.data[0];
        setSelectedCategory(selected);

        /* -------- Area of Focus (same parent) -------- */
        const focusItems = res.data.filter(
          (item) =>
            item.categoryName === selected.categoryName &&
            item.id !== selected.id
        );
        setRelatedSubcategories(focusItems);

        /* -------- Related Capabilities (other parents) -------- */
        const otherCats = res.data.filter(
          (item) => item.categoryName !== selected.categoryName
        );

        const uniqueCapabilities = [
          ...new Map(
            otherCats.map((item) => [item.categoryName, item])
          ).values(),
        ];

        setRelatedCapabilities(uniqueCapabilities.slice(0, 6));
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    }

    if (type) fetchCategories();
  }, [type]);

  if (loading) return <div className="p-5 text-center">Loading...</div>;
  if (error) return <div className="p-5 text-center text-danger">{error}</div>;
  if (!selectedCategory) return null;

  return (
    <>
      <Head>
        <title>{selectedCategory.subcategoryName} | GT Law</title>
      </Head>

      {/* ================= HERO ================= */}
      <div
        className="hero-section "
        style={{
          backgroundImage: `url(${
            selectedCategory.bannerImage?.startsWith("uploads")
              ? "/" + selectedCategory.bannerImage
              : selectedCategory.bannerImage
          })`,
        }}
      >
        <div className="overlay" />
        <div className="hero-content text-center">
          <h2 className="hero-title font-serif pt-5 mt-5">
            {selectedCategory.subcategoryName}
          </h2>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="lead-text">{selectedCategory.description}</p>
          </div>
        </div>
      </div>

      {/* ================= AREA OF FOCUS ================= */}
      <div className="container py-5 text-center">
        <h3 className="font-serif fw-bold mb-4">Area of Focus</h3>

        <div className="areas-grid">
          {relatedSubcategories.map((sub) => {
            const slug = sub.subcategoryName
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <div key={sub.id} className="area-item">
                <span className="bullet">•</span>
                <Link href={`/capability/${slug}`}>
                  <a className="area-link">{sub.subcategoryName}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= NEWS (STATIC) ================= */}
      <div className="news-section">
        <div className="container">
          <h2 className="font-serif fw-bold mb-4">
            News, Insights & Events
          </h2>

          {staticNews.map((news) => (
            <div key={news.id} className="mb-4">
              <div className="small text-uppercase mb-1">
                {news.date} • {news.type}
              </div>
              <h4 className="news-title font-serif">{news.title}</h4>
              <div className="small fst-italic mt-1">
                {news.readTime || news.source}
              </div>
              <hr className="opacity-25" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= RELATED CAPABILITIES (DYNAMIC) ================= */}
      <div className="container py-5 mb-5">
        <h3 className="font-serif fw-bold mb-4 text-center">
          Related Capabilities
        </h3>

        <div className="related-grid">
          {relatedCapabilities.map((cap) => {
            const capSlug = cap.categoryName
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <Link key={cap.id} href={`/capability/${capSlug}`}>
                <a className="related-pill">{cap.categoryName}</a>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        :global(:root) {
          --gold: #de9f57;
          --navy: #002855;
        }

        .hero-section {
          height: 60vh;
          min-height: 450px;
          background-size: cover;
          background-position: center;
          position: relative;
          margin-top: -80px;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 40, 85, 0.7);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: #fff;
          padding-top: 120px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
        }

        .lead-text {
          font-size: 1.2rem;
          line-height: 1.7;
        }

        /* AREA OF FOCUS */
        .areas-grid {
          display: grid;
          grid-template-columns: repeat(2, auto);
          gap: 12px 40px;
          justify-content: center;
          margin-top: 30px;
        }

        .area-item {
          display: flex;
          align-items: center;
        }

        .bullet {
          color: var(--gold);
          font-size: 1.5rem;
          margin-right: 10px;
        }

        .area-link {
          color: var(--gold);
          text-decoration: underline;
          font-size: 1.1rem;
        }

        .area-link:hover {
          color: var(--navy);
        }

        /* NEWS */
        .news-section {
          background: #222;
          color: #fff;
          padding: 80px 0;
        }

        .news-title {
          color: var(--gold);
          font-size: 1.4rem;
        }

        /* RELATED */
        .related-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .related-pill {
          border: 1px solid #ddd;
          padding: 10px 22px;
          text-decoration: none;
          color: #333;
        }

        .related-pill:hover {
          background: var(--navy);
          color: #fff;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .areas-grid {
            grid-template-columns: 1fr;
          }
          .area-item {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
