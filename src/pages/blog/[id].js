// import React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import Head from 'next/head';
// // Import shared data
// import { blogPosts } from '../../data/blogData';

// function BlogDetail() {
//   const router = useRouter();
//   const { id } = router.query;

//   // 1. URL ID se post dhoondo
//   const post = blogPosts ? blogPosts.find((p) => p.id.toString() === id) : null;

//   // Loading/Not Found State
//   if (!post) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-center">
//             {id ? <h3>Loading Article...</h3> : <h3>Article Not Found</h3>}
//             <Link href="/blog"><a className="btn btn-dark mt-3">Back to Blog</a></Link>
//         </div>
//       </div>
//     );
//   }

//   // Related posts (Same Category)
//   const relatedPosts = blogPosts 
//     ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3) 
//     : [];

//   const theme = {
//     primaryBlue: '#0a1c38',
//     accentGold: '#D4AF37',   
//     bgLight: '#f8f9fa'
//   };

//   return (
//     <>
//       <Head>
//         <title>{post.title} | Blog Details</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       {/* --- RESPONSIVE CSS (Mobile Friendly Fonts) --- */}
//       <style jsx>{`
//         /* Mobile Default: Smaller Fonts */
//         .banner-title {
//             font-size: 1.8rem; 
//             font-weight: 800;
//             line-height: 1.3;
//         }
//         .content-body {
//             font-size: 1rem;
//             line-height: 1.7;
//             color: #444;
//         }
        
//         /* Desktop (md and up): Larger Fonts */
//         @media (min-width: 768px) {
//             .banner-title {
//                 font-size: 3.5rem;
//             }
//             .content-body {
//                 font-size: 1.125rem; /* 18px */
//                 line-height: 1.8;
//             }
//         }
//       `}</style>

//       <div style={{ backgroundColor: theme.bgLight, minHeight: '100vh', paddingBottom: '80px' }}>
        
//         {/* --- HEADER IMAGE --- */}
//         <div className="d-flex align-items-center justify-content-center text-center px-3" style={{ 
//             minHeight: '400px', // Fixed height logic
//             paddingTop: '80px', // Extra padding for navbar overlap
//             paddingBottom: '60px',
//             backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${post.image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             color: '#fff',
//         }}>
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-12 col-lg-10">
//                         <span className="badge px-3 py-2 mb-3 text-uppercase" style={{ backgroundColor: theme.accentGold, letterSpacing: '1px' }}>
//                             {post.category}
//                         </span>
//                         {/* Responsive Class Applied Here */}
//                         <h1 className="banner-title mb-3 font-serif">{post.title}</h1>
//                         <p className="mt-2 fs-5 opacity-75">
//                             <i className="bi bi-calendar3 me-2"></i> {post.date}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* --- MAIN CONTAINER --- */}
//         <div className="container mt-4 mt-lg-5">
//             {/* g-4 for mobile gap, g-lg-5 for desktop gap */}
//             <div className="row g-4 g-lg-5">
                
//                 {/* LEFT: Main Content */}
//                 <div className="col-12 col-lg-8">
//                     {/* p-3 for mobile padding, p-md-5 for desktop */}
//                     <div className="bg-white p-4 p-md-5 rounded shadow-sm">
//                         <Link href="/blog">
//                             <a className="text-decoration-none fw-bold mb-4 d-inline-block text-uppercase small" style={{ color: theme.primaryBlue }}>
//                                 &larr; Back to All Articles
//                             </a>
//                         </Link>
                        
//                         <div className="blog-content">
//                             <p className="lead fw-bold" style={{ color: theme.primaryBlue }}>
//                                 {post.excerpt}
//                             </p>
//                             <hr className="my-4 opacity-25"/>
                            
//                             {/* Responsive Text Class */}
//                             <div className="content-body">
//                                 <p>{post.content}</p>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                
//                                 <h3 className="mt-4 mb-3 fw-bold" style={{color: theme.primaryBlue}}>Key Takeaways</h3>
//                                 <ul>
//                                     <li className="mb-2">Understanding the core legal principles.</li>
//                                     <li className="mb-2">Documentation required for compliance.</li>
//                                     <li className="mb-2">Future implications of this law.</li>
//                                 </ul>
                                
//                                 <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT: Sidebar (Related Posts) */}
//                 <div className="col-12 col-lg-4">
//                     {/* Sticky only works if parent has height, works best on desktop */}
//                     <div className="position-sticky" style={{ top: '100px' }}>
//                         <div className="bg-white p-4 rounded shadow-sm">
//                             <h5 className="fw-bold mb-4 border-bottom pb-2" style={{ color: theme.primaryBlue }}>
//                                 Related Articles
//                             </h5>
                            
//                             {relatedPosts.length > 0 ? relatedPosts.map(rp => (
//                                 <div key={rp.id} className="d-flex mb-3 align-items-start">
//                                     <Link href={`/blog/${rp.id}`}>
//                                         <a className="flex-shrink-0">
//                                             <img 
//                                                 src={rp.image} 
//                                                 className="rounded"
//                                                 style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
//                                                 alt="thumb" 
//                                             />
//                                         </a>
//                                     </Link>
//                                     <div className="ms-3">
//                                         <Link href={`/blog/${rp.id}`}>
//                                             <a className="text-decoration-none text-dark fw-bold d-block mb-1" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
//                                                 {rp.title}
//                                             </a>
//                                         </Link>
//                                         <small className="text-muted" style={{ fontSize: '0.8rem' }}>{rp.date}</small>
//                                     </div>
//                                 </div>
//                             )) : (
//                                 <p className="text-muted small">No related articles found.</p>
//                             )}
//                         </div>

//                         {/* Optional: Call to Action Box */}
//                         <div className="mt-4 p-4 rounded text-center text-white" style={{ backgroundColor: theme.primaryBlue }}>
//                             <h5 className="fw-bold">Need Help?</h5>
//                             <p className="small opacity-75 mb-3">Contact our legal experts for a consultation.</p>
//                             <Link href="/contact">
//                                 <a className="btn w-100 fw-bold shadow-sm" style={{ backgroundColor: theme.accentGold, color: '#fff' }}>Contact Us</a>
//                             </Link>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlogDetail;


import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
// Import shared data
import { blogPosts } from '../../data/blogData';

function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  // 1. Find post by URL ID
  const post = blogPosts ? blogPosts.find((p) => p.id.toString() === id) : null;

  // Loading/Not Found State
  if (!post) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
            {id ? <h3>Loading Article...</h3> : <h3>Article Not Found</h3>}
            <Link href="/blog"><a className="btn btn-dark mt-3">Back to Blog</a></Link>
        </div>
      </div>
    );
  }

  // Related posts (Same Category)
  const relatedPosts = blogPosts 
    ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3) 
    : [];

  return (
    <>
      <Head>
        <title>{post.title} | Blog Details</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="blog-detail-page">
        
        {/* --- HEADER IMAGE --- */}
        <div 
          className="blog-banner d-flex align-items-center justify-content-center text-center px-3" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${post.image})` }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <span className="badge category-badge px-3 py-2 mb-3 text-uppercase">
                            {post.category}
                        </span>
                        <h1 className="banner-title mb-3 font-serif">{post.title}</h1>
                        <p className="mt-2 fs-5 opacity-75">
                            <i className="bi bi-calendar3 me-2"></i> {post.date}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- MAIN CONTAINER --- */}
        <div className="container mt-4 mt-lg-5">
            <div className="row g-4 g-lg-5">
                
                {/* LEFT: Main Content */}
                <div className="col-12 col-lg-8">
                    <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                        <Link href="/blog">
                            <a className="text-decoration-none fw-bold mb-4 d-inline-block text-uppercase small back-link">
                                &larr; Back to All Articles
                            </a>
                        </Link>
                        
                        <div className="blog-content">
                            <p className="lead fw-bold excerpt-text">
                                {post.excerpt}
                            </p>
                            <hr className="my-4 opacity-25"/>
                            
                            <div className="content-body">
                                <p>{post.content}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                
                                <h3 className="mt-4 mb-3 fw-bold section-heading">Key Takeaways</h3>
                                <ul>
                                    <li className="mb-2">Understanding the core legal principles.</li>
                                    <li className="mb-2">Documentation required for compliance.</li>
                                    <li className="mb-2">Future implications of this law.</li>
                                </ul>
                                
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Sidebar (Related Posts) */}
                <div className="col-12 col-lg-4">
                    <div className="position-sticky sticky-sidebar">
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h5 className="fw-bold mb-4 border-bottom pb-2 sidebar-title">
                                Related Articles
                            </h5>
                            
                            {relatedPosts.length > 0 ? relatedPosts.map(rp => (
                                <div key={rp.id} className="d-flex mb-3 align-items-start">
                                    <Link href={`/blog/${rp.id}`}>
                                        <a className="flex-shrink-0">
                                            <img 
                                                src={rp.image} 
                                                className="rounded related-thumb"
                                                alt="thumb" 
                                            />
                                        </a>
                                    </Link>
                                    <div className="ms-3">
                                        <Link href={`/blog/${rp.id}`}>
                                            <a className="text-decoration-none text-dark fw-bold d-block mb-1 related-title">
                                                {rp.title}
                                            </a>
                                        </Link>
                                        <small className="text-muted related-date">{rp.date}</small>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-muted small">No related articles found.</p>
                            )}
                        </div>

                        {/* Call to Action Box */}
                        <div className="mt-4 p-4 rounded text-center text-white cta-box">
                            <h5 className="fw-bold">Need Help?</h5>
                            <p className="small opacity-75 mb-3">Contact our legal experts for a consultation.</p>
                            <Link href="/contact">
                                <a className="btn w-100 fw-bold shadow-sm cta-btn">Contact Us</a>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>

      <style jsx>{`
        /* --- VARIABLES --- */
        .blog-detail-page {
            background-color: #f8f9fa;
            min-height: 100vh;
            padding-bottom: 80px;
            --primary-blue: #0a1c38;
            --accent-gold: #D4AF37;
        }

        /* --- HEADER --- */
        .blog-banner {
            min-height: 400px;
            padding-top: 80px;
            padding-bottom: 60px;
            background-size: cover;
            background-position: center;
            color: #fff;
        }

        .category-badge {
            background-color: var(--accent-gold);
            letter-spacing: 1px;
        }

        /* Responsive Fonts */
        .banner-title {
            font-size: 1.8rem; 
            font-weight: 800;
            line-height: 1.3;
        }
        
        .content-body {
            font-size: 1rem;
            line-height: 1.7;
            color: #444;
        }

        @media (min-width: 768px) {
            .banner-title {
                font-size: 3.5rem;
            }
            .content-body {
                font-size: 1.125rem;
                line-height: 1.8;
            }
        }

        /* --- CONTENT COLORS --- */
        .back-link {
            color: var(--primary-blue);
        }

        .excerpt-text {
            color: var(--primary-blue);
        }

        .section-heading {
            color: var(--primary-blue);
        }

        /* --- SIDEBAR --- */
        .sticky-sidebar {
            top: 100px;
        }

        .sidebar-title {
            color: var(--primary-blue);
        }

        .related-thumb {
            width: 80px;
            height: 80px;
            object-fit: cover;
        }

        .related-title {
            font-size: 0.95rem;
            line-height: 1.4;
        }

        .related-date {
            font-size: 0.8rem;
        }

        /* --- CTA BOX --- */
        .cta-box {
            background-color: var(--primary-blue);
        }

        .cta-btn {
            background-color: var(--accent-gold);
            color: #fff;
        }
        
        .cta-btn:hover {
            color: #fff;
            opacity: 0.9;
        }
      `}</style>
    </>
  );
}

export default BlogDetail;