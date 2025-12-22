// import React, { useState } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';

// // Import Data Correctly
// // Agar aapka folder structure alag hai to path adjust karein.
// // Filhal ye manke chal rahe hain ki: src/pages/blog/index.js aur src/data/blogData.js
// import { blogPosts } from '../../data/blogData'; 

// const categories = ["All", "Corporate Law", "Criminal Law", "Family Law", "Real Estate", "Labor Law", "Tax Law"];

// function Blog() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [visibleCount, setVisibleCount] = useState(6); 

//   // --- 🔴 CRASH FIX HERE ---
//   // (blogPosts || []) lagane se agar data nahi mila to ye crash nahi hoga
//   const safePosts = blogPosts || [];

//   // --- FILTER LOGIC ---
//   const filteredPosts = safePosts.filter((post) => {
//     const matchCategory = activeCategory === "All" || post.category === activeCategory;
//     // Safety check for title as well
//     const title = post.title ? post.title.toLowerCase() : "";
//     const matchSearch = title.includes(searchTerm.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 6);
//   };

//   // --- THEME ---
//   const theme = {
//     primaryBlue: '#0a1c38',
//     accentGold: '#D4AF37',   
//     lightGray: 'rgb(244, 247, 246)',
//     white: '#ffffff'
//   };

//   return (
//     <>
//     <Head>
//         <title>Legal Blog | Insights & News</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//     </Head>

//     {/* Inline Style for Hover Effects */}
//     <style jsx>{`
//         .blog-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
//         .blog-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
//         .blog-title:hover { color: ${theme.accentGold} !important; transition: color 0.3s; }
//         .read-more-link:hover { color: ${theme.accentGold} !important; padding-left: 5px; transition: all 0.3s; }
//         /* Responsive tweaks */
//         @media (max-width: 768px) {
//             .display-4 { font-size: 2.5rem; }
//         }
//     `}</style>

//     <section style={{ backgroundColor: theme.lightGray, minHeight: '100vh', paddingBottom: '60px' }}>
      
//       {/* HERO SECTION */}
//       <div className="d-flex align-items-center justify-content-center" style={{
//           backgroundImage: `linear-gradient(rgba(10, 28, 56, 0.85), rgba(10, 28, 56, 0.85)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop)`, 
//           minHeight: '450px',
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           textAlign: 'center',
//           color: theme.white,
//           marginTop: '0px' 
//         }}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10 col-12 px-3">
//               <span className="d-block mb-2 text-uppercase fw-bold" style={{ color: theme.accentGold, letterSpacing: '2px', fontSize: '14px' }}>
//                   Insights & News
//               </span>
//               <h1 className="display-4 fw-bold mb-3 font-serif">Legal Blog</h1>
//               <p className="lead text-white-50 mb-4 d-none d-md-block">
//                 Stay updated with the latest legal trends, firm announcements, and in-depth analysis.
//               </p>
//                {/* Search Bar */}
//                 <div className="mt-4 d-flex justify-content-center w-100">
//                     <input 
//                         type="text" 
//                         placeholder="Search for topics..." 
//                         className="form-control border-0 shadow"
//                         style={{ maxWidth: '500px', padding: '15px 25px', borderRadius: '50px', fontSize: '1rem' }}
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container py-5">
        
//         {/* FILTERS (Scrollable on Mobile) */}
//         <div className="row mb-5">
//           <div className="col-12">
//             <div className="d-flex justify-content-md-center justify-content-start flex-nowrap flex-md-wrap gap-2" 
//                  style={{ overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
//               {categories.map((cat, index) => (
//                 <button
//                   key={index}
//                   onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
//                   className="btn fw-bold px-4 py-2 rounded-pill flex-shrink-0"
//                   style={{
//                     backgroundColor: activeCategory === cat ? theme.primaryBlue : theme.white,
//                     color: activeCategory === cat ? theme.white : theme.primaryBlue,
//                     border: `1px solid ${theme.primaryBlue}`,
//                     fontSize: '14px',
//                     transition: 'all 0.3s'
//                   }}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* BLOG GRID */}
//         <div className="row g-4">
//           {filteredPosts.slice(0, visibleCount).length > 0 ? (
//             filteredPosts.slice(0, visibleCount).map((post) => (
//               <div key={post.id} className="col-12 col-md-6 col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm blog-card" style={{ backgroundColor: theme.white, borderRadius: '10px', overflow: 'hidden' }}>
                  
//                   {/* Image Area */}
//                   <div style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: '#e0e0e0' }}>
//                     <span className="position-absolute top-0 end-0 m-3 px-3 py-1 fw-bold text-white rounded-1 shadow-sm"
//                           style={{ backgroundColor: theme.accentGold, fontSize: '0.7rem', zIndex: 10, textTransform: 'uppercase', letterSpacing: '1px' }}>
//                         {post.category}
//                     </span>
//                     <Link href={`/blog/${post.id}`}>
//                       <a className="d-block w-100 h-100">
//                         <img 
//                             src={post.image} 
//                             className="w-100 h-100" 
//                             alt={post.title} 
//                             style={{ objectFit: 'cover' }}
//                             onError={(e) => { e.target.style.display='none'; }} 
//                         />
//                       </a>
//                     </Link>
//                   </div>

//                   {/* Content Area */}
//                   <div className="card-body p-4 d-flex flex-column">
//                     <div className="d-flex align-items-center mb-3">
//                         <i className="bi bi-calendar3 me-2" style={{ color: theme.accentGold }}></i>
//                         <small className="text-muted fw-bold">{post.date}</small>
//                     </div>

//                     <Link href={`/blog/${post.id}`}>
//                         <a className="text-decoration-none">
//                             <h4 className="card-title fw-bold mb-3 blog-title" style={{ color: theme.primaryBlue, fontSize: '1.25rem', lineHeight: '1.4' }}>
//                                 {post.title}
//                             </h4>
//                         </a>
//                     </Link>

//                     <p className="card-text mb-4 text-secondary small" style={{ lineHeight: '1.6' }}>
//                         {post.excerpt && post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + "..." : post.excerpt}
//                     </p>

//                     <div className="mt-auto pt-3 border-top">
//                         <Link href={`/blog/${post.id}`}>
//                             <a className="text-decoration-none fw-bold d-flex align-items-center read-more-link" style={{ color: theme.primaryBlue, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
//                                 Read Article &rarr;
//                             </a>
//                         </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//              <div className="col-12 text-center py-5">
//                  <div className="p-5 bg-white rounded shadow-sm">
//                     <h3 className="text-muted">No articles found.</h3>
//                     <p className="text-muted">Try adjusting your search or category filter.</p>
//                     <button className="btn btn-outline-dark mt-2" onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>Reset Filters</button>
//                  </div>
//              </div>
//           )}
//         </div>

//         {/* Load More Button */}
//         {visibleCount < filteredPosts.length && (
//           <div className="row mt-5">
//             <div className="col-12 text-center">
//               <button 
//                 onClick={handleLoadMore} 
//                 className="btn fw-bold px-5 py-3 rounded-pill shadow-sm" 
//                 style={{ backgroundColor: theme.primaryBlue, color: theme.white, letterSpacing: '1px' }}
//               >
//                 LOAD MORE ARTICLES
//               </button>
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//     </>
//   );
// }

// export default Blog;

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { blogPosts } from '../../data/blogData'; 

const categories = ["All", "Corporate Law", "Criminal Law", "Family Law", "Real Estate", "Labor Law", "Tax Law"];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); 

  const safePosts = blogPosts || [];

  const filteredPosts = safePosts.filter((post) => {
    const matchCategory = activeCategory === "All" || post.category === activeCategory;
    const title = post.title ? post.title.toLowerCase() : "";
    const matchSearch = title.includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
    <Head>
        <title>Legal Blog | Insights & News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <section className="blog-page-wrapper">
      
      {/* HERO SECTION */}
      <div className="hero-section d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 px-3">
              <span className="hero-subtitle d-block mb-2 text-uppercase fw-bold">
                  Insights & News
              </span>
              <h1 className="display-4 fw-bold mb-3 font-serif">Legal Blog</h1>
              <p className="lead text-white-50 mb-4 d-none d-md-block">
                Stay updated with the latest legal trends, firm announcements, and in-depth analysis.
              </p>
               {/* Search Bar */}
                <div className="mt-4 d-flex justify-content-center w-100">
                    <input 
                        type="text" 
                        placeholder="Search for topics..." 
                        className="form-control border-0 shadow search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        
        {/* FILTERS */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="category-scroll d-flex justify-content-md-center justify-content-start flex-nowrap flex-md-wrap gap-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                  className={`btn fw-bold px-4 py-2 rounded-pill flex-shrink-0 category-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="row g-4">
          {filteredPosts.slice(0, visibleCount).length > 0 ? (
            filteredPosts.slice(0, visibleCount).map((post) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm blog-card">
                  
                  {/* Image Area */}
                  <div className="card-img-wrapper">
                    <span className="category-badge position-absolute top-0 end-0 m-3 px-3 py-1 fw-bold text-white rounded-1 shadow-sm">
                        {post.category}
                    </span>
                    <Link href={`/blog/${post.id}`}>
                      <a className="d-block w-100 h-100">
                        <img 
                            src={post.image} 
                            className="w-100 h-100 post-image" 
                            alt={post.title} 
                            onError={(e) => { e.target.style.display='none'; }} 
                        />
                      </a>
                    </Link>
                  </div>

                  {/* Content Area */}
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-calendar3 me-2 text-gold"></i>
                        <small className="text-muted fw-bold">{post.date}</small>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                        <a className="text-decoration-none">
                            <h4 className="card-title fw-bold mb-3 blog-title">
                                {post.title}
                            </h4>
                        </a>
                    </Link>

                    <p className="card-text mb-4 text-secondary small excerpt-text">
                        {post.excerpt && post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + "..." : post.excerpt}
                    </p>

                    <div className="mt-auto pt-3 border-top">
                        <Link href={`/blog/${post.id}`}>
                            <a className="text-decoration-none fw-bold d-flex align-items-center read-more-link">
                                Read Article &rarr;
                            </a>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
             <div className="col-12 text-center py-5">
                 <div className="p-5 bg-white rounded shadow-sm">
                    <h3 className="text-muted">No articles found.</h3>
                    <p className="text-muted">Try adjusting your search or category filter.</p>
                    <button className="btn btn-outline-dark mt-2" onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>Reset Filters</button>
                 </div>
             </div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button 
                onClick={handleLoadMore} 
                className="btn fw-bold px-5 py-3 rounded-pill shadow-sm load-more-btn" 
              >
                LOAD MORE ARTICLES
              </button>
            </div>
          </div>
        )}

      </div>
    </section>

    <style jsx>{`
        /* --- VARIABLES --- */
        .blog-page-wrapper {
            background-color: rgb(244, 247, 246);
            min-height: 100vh;
            padding-bottom: 60px;
            --primary-blue: #0a1c38;
            --accent-gold: #D4AF37;
            --white: #ffffff;
        }

        /* --- HERO SECTION --- */
        .hero-section {
            background-image: linear-gradient(rgba(10, 28, 56, 0.85), rgba(10, 28, 56, 0.85)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop');
            min-height: 450px;
            background-size: cover;
            background-position: center;
            text-align: center;
            color: var(--white);
            margin-top: 0px;
        }

        .hero-subtitle {
            color: var(--accent-gold);
            letter-spacing: 2px;
            font-size: 14px;
        }

        .search-input {
            max-width: 500px;
            padding: 15px 25px;
            border-radius: 50px;
            font-size: 1rem;
        }

        /* --- CATEGORIES --- */
        .category-scroll {
            overflow-x: auto;
            padding-bottom: 10px;
            scrollbar-width: none;
        }
        
        .category-btn {
            background-color: var(--white);
            color: var(--primary-blue);
            border: 1px solid var(--primary-blue);
            font-size: 14px;
            transition: all 0.3s;
        }

        .category-btn.active {
            background-color: var(--primary-blue);
            color: var(--white);
        }

        .category-btn:hover {
            opacity: 0.9;
        }

        /* --- BLOG CARD --- */
        .blog-card {
            background-color: var(--white);
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }

        .card-img-wrapper {
            position: relative;
            height: 220px;
            overflow: hidden;
            background-color: #e0e0e0;
        }

        .post-image {
            object-fit: cover;
        }

        .category-badge {
            background-color: var(--accent-gold);
            font-size: 0.7rem;
            z-index: 10;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .text-gold {
            color: var(--accent-gold);
        }

        .blog-title {
            color: var(--primary-blue);
            font-size: 1.25rem;
            line-height: 1.4;
        }

        .blog-title:hover {
            color: var(--accent-gold) !important;
            transition: color 0.3s;
        }

        .excerpt-text {
            line-height: 1.6;
        }

        .read-more-link {
            color: var(--primary-blue);
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .read-more-link:hover {
            color: var(--accent-gold) !important;
            padding-left: 5px;
            transition: all 0.3s;
        }

        /* --- LOAD MORE --- */
        .load-more-btn {
            background-color: var(--primary-blue);
            color: var(--white);
            letter-spacing: 1px;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
            .display-4 {
                font-size: 2.5rem;
            }
        }
    `}</style>
    </>
  );
}

export default Blog;