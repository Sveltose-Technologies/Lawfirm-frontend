// // // // // // // import React from 'react';
// // // // // // // import Head from 'next/head';
// // // // // // // import Link from 'next/link';
// // // // // // // import { useRouter } from 'next/router';

// // // // // // // // --- DATA SOURCE ---
// // // // // // // const blockchainData = {
// // // // // // //   title: "Blockchain & Digital Assets",
// // // // // // //   heroImage: "/assets/images/our-firm4.png", 
  
// // // // // // //   areasOfFocus: [
// // // // // // //     "Cryptocurrency Enforcement",
// // // // // // //     "Fintech"
// // // // // // //   ],

// // // // // // //   introText: `Greenberg Traurig's global Blockchain & Digital Assets Group comprises more than 100 attorneys across multiple legal disciplines in key financial hubs around the world, providing a centralized approach to blockchain and digital asset matters. We leverage our diverse experience to advise clients on a wide array of matters ranging from token structuring, fund formation, investment strategies, financial regulation and registration, international tax planning and structuring, stable coins and asset-backed digital assets, infrastructure applications, technology licensing and development, mining, securities compliance, cryptocurrency exchanges and trading, and blockchain-as-a-service.`,
  
// // // // // // //   secondaryText: `Our multidisciplinary approach enables the team to readily anticipate, recognize, and address the legal challenges that our clients may face with respect to blockchain and digital asset development or utilization. Our dedicated response team consists of experienced attorneys with diverse backgrounds in securities, commodities and broker-dealer regulations, entity and fund formation, financing, exchange formation, federal and state financial services regulation, technology and intellectual property licensing, privacy concerns, cybersecurity issues, and taxation.`,

// // // // // // //   subSections: [
// // // // // // //     {
// // // // // // //       title: "Advising on Blockchain and Smart Contract Technology Implementations",
// // // // // // //       content: "As blockchain applications and smart contracts introduce automation to entirely new functions, our attorneys advise clients on appropriate standards and protocols for the deployment of blockchain applications and smart contract coding to ensure that clients can meet the demands of regulators, law enforcement, and any trier of fact or law."
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Cryptocurrency and Digital Assets (including NFTs)",
// // // // // // //       content: "As cryptocurrencies and other digital assets, including NFTs, have gained market acceptance in recent years as a fundraising vehicle for our clients, a critical part of a blockchain platform, or for consumptive use, our team carefully evaluates each opportunity in terms of the business and financing requirements of the client."
// // // // // // //     }
// // // // // // //   ],

// // // // // // //   capabilitiesList: [
// // // // // // //     "Contractual Structure and Implementation",
// // // // // // //     "Corporate, Fund Formation, Venture Capital & Capital Raises",
// // // // // // //     "Cybersecurity & Privacy",
// // // // // // //     "Intellectual Property",
// // // // // // //     "Litigation",
// // // // // // //     "Marketplace Lending",
// // // // // // //     "M&A",
// // // // // // //     "Regulatory Matters",
// // // // // // //     "Tax",
// // // // // // //     "Technology & Digital Transactions",
// // // // // // //     "Virtual Currency, Digital Assets & NFTs"
// // // // // // //   ],

// // // // // // //   cryptoEnforcement: {
// // // // // // //     title: "Cryptocurrency Enforcement",
// // // // // // //     content: "Greenberg Traurig’s Cryptocurrency Enforcement Team comprises dedicated former government officials and experienced white collar defense attorneys with the industry-specific knowledge and skills to help clients navigate today’s complex and evolving cryptocurrency enforcement landscape."
// // // // // // //   },

// // // // // // //   blog: {
// // // // // // //     title: "Overheard on the Block(chain) Blog",
// // // // // // //     content: "GT's Overheard on the Block(chain) blog provides timely updates on the regulatory and legal developments in the blockchain and cryptocurrency sector."
// // // // // // //   },

// // // // // // //   contactText: "To learn more about our capabilities, please feel free to reach out to our Blockchain & Digital Assets Group contacts.",

// // // // // // //   newsList: [
// // // // // // //     {
// // // // // // //       id: "news-1",
// // // // // // //       date: "July 23, 2025",
// // // // // // //       type: "Media Coverage",
// // // // // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // // // // //       source: "Law360"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "news-2",
// // // // // // //       date: "January 03, 2025",
// // // // // // //       type: "GT Advisory",
// // // // // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // // // // //       readTime: "2 min read"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "news-3",
// // // // // // //       date: "August 22, 2024",
// // // // // // //       type: "Press Release",
// // // // // // //       title: "Barbara Jones Wins ‘Women Leaders in Tech Law’ Award",
// // // // // // //       readTime: "1 min read"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "news-4",
// // // // // // //       date: "Thursday, April 27, 2023",
// // // // // // //       type: "Event",
// // // // // // //       title: "Elevating Black Excellence: A Showcase for Black Partners",
// // // // // // //       readTime: ""
// // // // // // //     }
// // // // // // //   ],

// // // // // // //   relatedCapabilities: [
// // // // // // //     "Venture Capital & Emerging Technology",
// // // // // // //     "Innovation & Artificial Intelligence",
// // // // // // //     "Government Law & Policy",
// // // // // // //     "Technology, Media & Telecommunications",
// // // // // // //     "Intellectual Property & Technology",
// // // // // // //     "Litigation",
// // // // // // //     "Mergers & Acquisitions",
// // // // // // //     "Corporate",
// // // // // // //     "Data Privacy & Cybersecurity",
// // // // // // //     "Regulatory & Compliance",
// // // // // // //     "Tax"
// // // // // // //   ]
// // // // // // // };

// // // // // // // export default function CapabilityDetail() {
// // // // // // //   const data = blockchainData; 

// // // // // // //   if (!data) return <div className="p-5 text-center">Loading...</div>;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Head>
// // // // // // //         <title>{data.title} | GT Law</title>
// // // // // // //         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
// // // // // // //       </Head>

// // // // // // //       {/* ==================== 1. HERO SECTION ==================== */}
// // // // // // //       <div className="hero-section">
// // // // // // //         <div className="overlay"></div>
// // // // // // //         <div className="container hero-content">
// // // // // // //           <h1 className="hero-title font-serif">{data.title}</h1>
// // // // // // //           <Link href="/attorneys">
// // // // // // //             <a className="btn-gold-outline">
// // // // // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // // // // //             </a>
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* ==================== 2. MAIN CONTENT ==================== */}
// // // // // // //       <div className="container content-wrapper">
// // // // // // //         <div className="row">
          
// // // // // // //           {/* LEFT COLUMN */}
// // // // // // //           <div className="col-lg-8 pe-lg-5">
// // // // // // //             <p className="lead-text mb-4">{data.introText}</p>
// // // // // // //             <p className="body-text mb-5">{data.secondaryText}</p>

// // // // // // //             {data.subSections.map((sec, idx) => (
// // // // // // //               <div key={idx} className="mb-5">
// // // // // // //                 <h3 className="section-sub-title font-serif">{sec.title}</h3>
// // // // // // //                 <p className="body-text">{sec.content}</p>
// // // // // // //               </div>
// // // // // // //             ))}

// // // // // // //             <div className="highlight-box mb-5">
// // // // // // //               <h3 className="section-sub-title font-serif text-navy">{data.cryptoEnforcement.title}</h3>
// // // // // // //               <p className="body-text">{data.cryptoEnforcement.content}</p>
// // // // // // //               <Link href="/capability/enforcement">
// // // // // // //                 <a className="link-gold fw-bold mt-2 d-inline-block">
// // // // // // //                   Learn more about our Cryptocurrency Enforcement capabilities.
// // // // // // //                 </a>
// // // // // // //               </Link>
// // // // // // //             </div>

// // // // // // //             <div className="blog-box mb-5">
// // // // // // //               <div className="d-flex align-items-center mb-3">
// // // // // // //                  <i className="bi bi-chat-quote-fill text-gold fs-2 me-3"></i>
// // // // // // //                  <h3 className="section-sub-title font-serif mb-0">{data.blog.title}</h3>
// // // // // // //               </div>
// // // // // // //               <p className="body-text fst-italic">{data.blog.content}</p>
// // // // // // //             </div>

// // // // // // //             <div className="mb-5 border-top pt-4">
// // // // // // //                <h3 className="section-sub-title font-serif">Contact Us</h3>
// // // // // // //                <p className="body-text">{data.contactText}</p>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* RIGHT COLUMN */}
// // // // // // //           <div className="col-lg-4 mt-5 mt-lg-0">
// // // // // // //             <div className="sidebar-box mb-5">
// // // // // // //               <h4 className="sidebar-title font-serif">Areas of Focus</h4>
      
// // // // // // // <ul className="sidebar-list">
// // // // // // //   {data.areasOfFocus.map((item, idx) => {
// // // // // // //     // Text ko URL friendly banana (slug)
// // // // // // //     // "Cryptocurrency Enforcement" -> "cryptocurrency-enforcement"
// // // // // // //     const typeSlug = item.toLowerCase().trim().replace(/\s+/g, '-');
    
// // // // // // //     return (
// // // // // // //       <li key={idx} style={{cursor: 'pointer'}}>
// // // // // // //         <Link href={`/capability/area-detail-page?type=${typeSlug}`}>
// // // // // // //           <a className="text-decoration-none text-dark d-block py-1">
// // // // // // //              <i className="bi bi-caret-right-fill text-gold me-2"></i>{item}
// // // // // // //           </a>
// // // // // // //         </Link>
// // // // // // //       </li>
// // // // // // //     );
// // // // // // //   })}
// // // // // // // </ul>
// // // // // // //             </div>

// // // // // // //             <div className="sidebar-box gray-bg">
// // // // // // //               <h4 className="sidebar-title font-serif text-navy">Our Capabilities</h4>
// // // // // // //               <ul className="capabilities-list">
// // // // // // //                 {data.capabilitiesList.map((item, idx) => (
// // // // // // //                    <li key={idx}>
// // // // // // //                       <Link href={`/capability/${item.toLowerCase().replace(/ /g, '-')}`}>
// // // // // // //                         <a className="cap-link">{item}</a>
// // // // // // //                       </Link>
// // // // // // //                    </li>
// // // // // // //                 ))}
// // // // // // //               </ul>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* ==================== 3. NEWS SECTION ==================== */}
// // // // // // //       <div className="news-section">
// // // // // // //         <div className="container">
// // // // // // //           <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
// // // // // // //              <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // // // // //              <div className="d-none d-md-block">
// // // // // // //                 <span className="text-gold mx-2 fw-bold" style={{borderBottom:'2px solid #cfa144'}}>News</span>
// // // // // // //                 <span className="text-muted mx-2 pointer">Insights</span>
// // // // // // //                 <span className="text-muted mx-2 pointer">Past Events</span>
// // // // // // //              </div>
// // // // // // //           </div>

// // // // // // //           <div className="row">
// // // // // // //             {data.newsList.map((news) => (
// // // // // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // // // // //                 <div className="d-flex flex-column">
// // // // // // //                    <div className="mb-2">
// // // // // // //                       <span className="text-white fw-bold text-uppercase small">{news.date}</span>
// // // // // // //                       <span className="text-gold ms-2 small border border-secondary px-2 py-1">{news.type}</span>
// // // // // // //                    </div>
// // // // // // //                    <Link href={`/news/${news.id}`}>
// // // // // // //                       <a className="news-title font-serif">{news.title}</a>
// // // // // // //                    </Link>
// // // // // // //                    <div className="text-muted small mt-1 fst-italic">
// // // // // // //                       {news.readTime || news.source || "Read More"}
// // // // // // //                    </div>
// // // // // // //                 </div>
// // // // // // //                 <hr className="border-secondary opacity-25 mt-3" />
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
          
// // // // // // //           <div className="text-end">
// // // // // // //              <Link href="/news"><a className="text-white fw-bold small text-uppercase" style={{letterSpacing:'1px'}}>View More +</a></Link>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* ==================== 4. RELATED CAPABILITIES ==================== */}
// // // // // // //       <div className="container py-5 mb-5">
// // // // // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // // // // //         <div className="related-grid">
// // // // // // //            {data.relatedCapabilities.map((cap, idx) => (
// // // // // // //               <Link key={idx} href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`}>
// // // // // // //                  <a className="related-pill">{cap}</a>
// // // // // // //               </Link>
// // // // // // //            ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* ==================== STYLES ==================== */}
// // // // // // //       <style jsx>{`
// // // // // // //         /* VARIABLES */
// // // // // // //         :global(:root) {
// // // // // // //             --gold: #de9f57;
// // // // // // //             --navy: #002855;
// // // // // // //         }
// // // // // // //         .text-gold { color: var(--gold) !important; }
// // // // // // //         .text-navy { color: var(--navy) !important; }
// // // // // // //         .font-serif { font-family: "Georgia", "Times New Roman", serif; }

// // // // // // //         /* HERO SECTION (UPDATED FOR SIZE & POSITION) */
// // // // // // //         .hero-section {
// // // // // // //             background-image: url("${data.heroImage}");
// // // // // // //             background-size: cover;
// // // // // // //             background-position: center;
// // // // // // //             height: 60vh;
// // // // // // //             min-height: 450px;
// // // // // // //             display: flex;
// // // // // // //             align-items: center;
// // // // // // //             justify-content: center;
// // // // // // //             text-align: center;
// // // // // // //             position: relative;
// // // // // // //             margin-top: -80px; 
// // // // // // //         }
// // // // // // //         .hero-content { 
// // // // // // //             position: relative; 
// // // // // // //             z-index: 2; 
// // // // // // //             color: white; 
// // // // // // //             /* Added padding-top to visually push content down */
// // // // // // //             padding-top: 100px;
// // // // // // //         }
// // // // // // //         .hero-title { 
// // // // // // //             /* Reduced font size */
// // // // // // //             font-size: clamp(2rem, 3.5vw, 3rem); 
// // // // // // //             font-weight: 700; 
// // // // // // //             margin-bottom: 30px; 
// // // // // // //             line-height: 1.2;
// // // // // // //             text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
// // // // // // //         }
        
// // // // // // //         .overlay { background: rgba(0, 40, 85, 0.7); position: absolute; inset: 0; }
        
// // // // // // //         .btn-gold-outline {
// // // // // // //             border: 2px solid white; color: white; padding: 12px 30px;
// // // // // // //             font-weight: bold; letter-spacing: 2px; transition: 0.3s;
// // // // // // //             text-decoration: none; display: inline-block;
// // // // // // //         }
// // // // // // //         .btn-gold-outline:hover { background: white; color: var(--navy); }

// // // // // // //         /* CONTENT */
// // // // // // //         .content-wrapper { padding: 60px 15px; }
// // // // // // //         .lead-text { font-size: 1.25rem; line-height: 1.7; color: #333; font-weight: 500; }
// // // // // // //         .body-text { font-size: 1.1rem; line-height: 1.8; color: #444; margin-bottom: 20px; }
// // // // // // //         .section-sub-title { font-size: 1.5rem; font-weight: bold; margin-bottom: 15px; color: #222; }

// // // // // // //         /* HIGHLIGHT BOXES */
// // // // // // //         .highlight-box { background: #f0f4f8; padding: 30px; border-left: 5px solid var(--navy); }
// // // // // // //         .blog-box { background: #fffcf5; padding: 30px; border: 1px solid #eee; border-left: 5px solid var(--gold); }
// // // // // // //         .link-gold { color: var(--gold); text-decoration: none; }
// // // // // // //         .link-gold:hover { text-decoration: underline; }

// // // // // // //         /* SIDEBAR */
// // // // // // //         .sidebar-box { margin-bottom: 40px; }
// // // // // // //         .sidebar-title { font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }
// // // // // // //         .sidebar-list { list-style: none; padding: 0; }
// // // // // // //         .sidebar-list li { padding: 8px 0; font-size: 1.1rem; color: #333; border-bottom: 1px solid #eee; }
        
// // // // // // //         .gray-bg { background: #f9f9f9; padding: 25px; }
// // // // // // //         .capabilities-list { list-style: none; padding: 0; }
// // // // // // //         .cap-link { display: block; padding: 6px 0; color: #444; text-decoration: none; transition: 0.2s; }
// // // // // // //         .cap-link:hover { color: var(--gold); transform: translateX(5px); }

// // // // // // //         /* NEWS SECTION */
// // // // // // //         .news-section { background-color: #222; padding: 80px 0; color: white; }
// // // // // // //         .news-title { font-size: 1.6rem; color: var(--gold); text-decoration: none; display: block; transition: 0.2s; }
// // // // // // //         .news-title:hover { text-decoration: underline; color: #eac07a; }
// // // // // // //         .pointer { cursor: pointer; }

// // // // // // //         /* RELATED PILLS */
// // // // // // //         .related-grid { display: flex; flex-wrap: wrap; gap: 10px; }
// // // // // // //         .related-pill {
// // // // // // //             background: white; border: 1px solid #ddd; padding: 10px 20px;
// // // // // // //             color: #333; text-decoration: none; font-weight: 500; transition: 0.2s;
// // // // // // //         }
// // // // // // //         .related-pill:hover { background: var(--navy); color: white; border-color: var(--navy); }

// // // // // // //         @media (max-width: 768px) {
// // // // // // //             .hero-section { height: 50vh; }
// // // // // // //             .hero-title { font-size: 1.8rem; }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // // // 'use client';
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import Head from 'next/head';
// // // // // // // // import Link from 'next/link';
// // // // // // // // import { useRouter } from 'next/router';
// // // // // // // // import authService from '../../services/authService';

// // // // // // // // export default function CapabilityDetail() {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const { slug } = router.query; 

// // // // // // // //   const [categoryData, setCategoryData] = useState(null);
// // // // // // // //   const [dynamicSubCategories, setDynamicSubCategories] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   const BASE_URL = "https://nodejs.nrislawfirm.com";

// // // // // // // //   const createSlug = (text) => {
// // // // // // // //     return text?.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w-]+/g, '') || '';
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!slug) return;

// // // // // // // //     const fetchDetailData = async () => {
// // // // // // // //       try {
// // // // // // // //         setLoading(true);
        
// // // // // // // //         const [catRes, subRes] = await Promise.all([
// // // // // // // //           authService.getAllCapabilityCategories(),
// // // // // // // //           authService.getAllCapabilitySubCategories()
// // // // // // // //         ]);

// // // // // // // //         if (catRes.success) {
// // // // // // // //           const categories = catRes.data.data || catRes.data;
// // // // // // // //           const subCategories = subRes.success ? (subRes.data.data || subRes.data) : [];

// // // // // // // //           // URL se Category dhundna
// // // // // // // //           const matchedCategory = categories.find(cat => createSlug(cat.categoryName) === slug);

// // // // // // // //           if (matchedCategory) {
// // // // // // // //             setCategoryData(matchedCategory);

// // // // // // // //             // --- AAPKI REQUIREMENT: ID COMPARISON HATA DIYA ---
// // // // // // // //             // Ab ye database ki SAARI sub-categories dikhayega
// // // // // // // //             setDynamicSubCategories(subCategories); 
            
// // // // // // // //             console.log("Total Subcategories Found:", subCategories.length);
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error:", error);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchDetailData();
// // // // // // // //   }, [slug]);

// // // // // // // //   if (loading) return <div className="p-5 text-center">Loading...</div>;
// // // // // // // //   if (!categoryData) return <div className="p-5 text-center">Category Not Found</div>;

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Head>
// // // // // // // //         <title>{categoryData.categoryName} | Lawstick</title>
// // // // // // // //       </Head>

// // // // // // // //       {/* Hero Section */}
// // // // // // // //       <div 
// // // // // // // //         className="hero-section"
// // // // // // // //         style={{
// // // // // // // //           backgroundImage: `url(${BASE_URL}/${categoryData.bannerImage})`,
// // // // // // // //           backgroundSize: 'cover', backgroundPosition: 'center', height: '400px',
// // // // // // // //           position: 'relative', display: 'flex', alignItems: 'center', marginTop: '-80px'
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
// // // // // // // //         <div className="container position-relative text-white pt-5 text-center">
// // // // // // // //           <h1 className="display-4 fw-bold">{categoryData.categoryName}</h1>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <div className="container py-5">
// // // // // // // //         <div className="row">
// // // // // // // //           <div className="col-lg-8 pe-lg-5">
// // // // // // // //             <h3 className="fw-bold mb-4">Overview</h3>
// // // // // // // //             <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{categoryData.description}</p>
// // // // // // // //           </div>

// // // // // // // //           {/* RIGHT COLUMN - AREAS OF FOCUS */}
// // // // // // // //           <div className="col-lg-4">
// // // // // // // //             <div className="p-4 bg-white shadow-sm border mb-4">
// // // // // // // //               <h4 className="fw-bold border-bottom pb-2 mb-3">Areas of Focus</h4>
// // // // // // // //               <ul className="list-unstyled">
// // // // // // // //                 {dynamicSubCategories.length > 0 ? (
// // // // // // // //                   dynamicSubCategories.map((sub) => (
// // // // // // // //                     <li key={sub.id} className="mb-2 pb-2 border-bottom border-light">
// // // // // //                       // <Link href={`/capability/area-detail-page?type=${createSlug(sub.subcategoryName)}`}>
// // // // // // // //                         <a className="text-decoration-none text-dark d-flex align-items-center">
// // // // // // // //                           <i className="bi bi-caret-right-fill text-warning me-2"></i>
// // // // // // // //                           {sub.subcategoryName}
// // // // // // // //                         </a>
// // // // // // // //                       </Link>
// // // // // // // //                     </li>
// // // // // // // //                   ))
// // // // // // // //                 ) : (
// // // // // // // //                   <li className="text-muted small">No sub-categories in Database.</li>
// // // // // // // //                 )}
// // // // // // // //               </ul>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }




// // // // // // // 'use client';
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useRouter } from 'next/router';
// // // // // // // import Head from 'next/head';
// // // // // // // import Link from 'next/link';
// // // // // // // import authService from '../../services/authService';

// // // // // // // export default function CapabilityDetail() {
// // // // // // //   const router = useRouter();
// // // // // // //   const { slug } = router.query;

// // // // // // //   const [dynamicData, setDynamicData] = useState(null);
// // // // // // //   const [allSubCategories, setAllSubCategories] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   const IMG_URL = "https://nodejs.nrislawfirm.com";

// // // // // // //   const createSlug = (text) => text?.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w-]+/g, '') || '';

// // // // // // //   useEffect(() => {
// // // // // // //     if (!slug) return;

// // // // // // //     const fetchData = async () => {
// // // // // // //       try {
// // // // // // //         setLoading(true);
// // // // // // //         const [catRes, subRes] = await Promise.all([
// // // // // // //           authService.getAllCapabilityCategories(),
// // // // // // //           authService.getAllCapabilitySubCategories()
// // // // // // //         ]);

// // // // // // //         const categories = catRes.data?.data || catRes.data || [];
// // // // // // //         const subcategories = subRes.data?.data || subRes.data || [];
// // // // // // //         setAllSubCategories(subcategories); // Sidebar ke liye

// // // // // // //         // Check if slug matches a Category or Sub-category
// // // // // // //         let matched = categories.find(c => createSlug(c.categoryName) === slug);
// // // // // // //         if (!matched) {
// // // // // // //           matched = subcategories.find(s => createSlug(s.subcategoryName) === slug);
// // // // // // //         }

// // // // // // //         if (matched) {
// // // // // // //           setDynamicData(matched);
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Detail Fetch Error:", error);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchData();
// // // // // // //   }, [slug]);

// // // // // // //   if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading Content...</div>;
// // // // // // //   if (!dynamicData) return <div style={{ padding: '50px', textAlign: 'center' }}>Expertise Not Found</div>;

// // // // // // //   const displayName = dynamicData.categoryName || dynamicData.subcategoryName;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Head><title>{displayName} | Lawstick</title></Head>

// // // // // // //       {/* Hero Section */}
// // // // // // //       <div style={{
// // // // // // //         backgroundImage: `url(${IMG_URL}/${dynamicData.bannerImage})`,
// // // // // // //         height: '400px', backgroundSize: 'cover', backgroundPosition: 'center',
// // // // // // //         position: 'relative', display: 'flex', alignItems: 'center', marginTop: '-80px'
// // // // // // //       }}>
// // // // // // //         <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
// // // // // // //         <div className="container" style={{ position: 'relative', zIndex: 2, color: 'white', textAlign: 'center' }}>
// // // // // // //           <h1 style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Georgia' }}>{displayName}</h1>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Content Section */}
// // // // // // //       <div className="container py-5">
// // // // // // //         <div className="row">
// // // // // // //           <div className="col-lg-8">
// // // // // // //             <h3 style={{ fontWeight: 'bold', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Overview</h3>
// // // // // // //             <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333', marginTop: '20px' }}>
// // // // // // //               {dynamicData.description}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           <div className="col-lg-4">
// // // // // // //             <div style={{ padding: '25px', border: '1px solid #ddd', backgroundColor: '#fff' }}>
// // // // // // //               <h4 style={{ fontWeight: 'bold', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Areas of Focus</h4>
// // // // // // //               <ul style={{ listStyle: 'none', padding: 0 }}>
// // // // // // //                 {allSubCategories.map((sub) => (
// // // // // // //                   <li key={sub.id} style={{ padding: '10px 0', borderBottom: '1px solid #f9f9f9' }}>
// // // // // // //                     <Link href={`/capability/${createSlug(sub.subcategoryName)}`}>
// // // // // // //                       <a style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
// // // // // // //                         <span style={{ color: '#cfa144', marginRight: '10px' }}>▶</span>
// // // // // // //                         {sub.subcategoryName}
// // // // // // //                       </a>
// // // // // // //                     </Link>
// // // // // // //                   </li>
// // // // // // //                 ))}
// // // // // // //               </ul>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }


// // // // // // // 'use client';
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useRouter } from 'next/router';
// // // // // // // import Head from 'next/head';
// // // // // // // import Link from 'next/link';
// // // // // // // import authService from '../../services/authService';

// // // // // // // export default function CapabilityDetail() {
// // // // // // //   const router = useRouter();
// // // // // // //   const { slug } = router.query;

// // // // // // //   const [dynamicData, setDynamicData] = useState(null);
// // // // // // //   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   const IMG_URL = "https://nodejs.nrislawfirm.com";

// // // // // // //   const createSlug = (text) =>
// // // // // // //     text?.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

// // // // // // //   useEffect(() => {
// // // // // // //     if (!slug) return;

// // // // // // //     const fetchData = async () => {
// // // // // // //       try {
// // // // // // //         setLoading(true);

// // // // // // //         const [catRes, subRes] = await Promise.all([
// // // // // // //           authService.getAllCapabilityCategories(),
// // // // // // //           authService.getAllCapabilitySubCategories()
// // // // // // //         ]);

// // // // // // //         const categories = catRes.data?.data || catRes.data || [];
// // // // // // //         const subcategories = subRes.data?.data || subRes.data || [];

// // // // // // //         let matchedCategory = null;
// // // // // // //         let matchedSubCategory = null;

// // // // // // //         // 🔹 Category match
// // // // // // //         matchedCategory = categories.find(
// // // // // // //           c => createSlug(c.categoryName) === slug
// // // // // // //         );

// // // // // // //         // 🔹 Subcategory match
// // // // // // //         if (!matchedCategory) {
// // // // // // //           matchedSubCategory = subcategories.find(
// // // // // // //             s => createSlug(s.subcategoryName) === slug
// // // // // // //           );
// // // // // // //         }

// // // // // // //         // ===== CASE 1: CATEGORY PAGE =====
// // // // // // //         if (matchedCategory) {
// // // // // // //           setDynamicData(matchedCategory);

// // // // // // //           const relatedSubs = subcategories.filter(
// // // // // // //             sub => String(sub.categoryId) === String(matchedCategory.id)
// // // // // // //           );

// // // // // // //           setFilteredSubCategories(relatedSubs);
// // // // // // //         }

// // // // // // //         // ===== CASE 2: SUBCATEGORY PAGE =====
// // // // // // //         if (matchedSubCategory) {
// // // // // // //           setDynamicData(matchedSubCategory);

// // // // // // //           const relatedSubs = subcategories.filter(
// // // // // // //             sub => String(sub.categoryId) === String(matchedSubCategory.categoryId)
// // // // // // //           );

// // // // // // //           setFilteredSubCategories(relatedSubs);
// // // // // // //         }

// // // // // // //       } catch (error) {
// // // // // // //         console.error("Detail Fetch Error:", error);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchData();
// // // // // // //   }, [slug]);

// // // // // // //   if (loading)
// // // // // // //     return <div style={{ padding: '50px', textAlign: 'center' }}>Loading Content...</div>;

// // // // // // //   if (!dynamicData)
// // // // // // //     return <div style={{ padding: '50px', textAlign: 'center' }}>Expertise Not Found</div>;

// // // // // // //   const displayName =
// // // // // // //     dynamicData.categoryName || dynamicData.subcategoryName;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Head>
// // // // // // //         <title>{displayName} | Lawstick</title>
// // // // // // //       </Head>

// // // // // // //       {/* Hero Section */}
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           backgroundImage: `url(${IMG_URL}/${dynamicData.bannerImage})`,
// // // // // // //           height: '400px',
// // // // // // //           backgroundSize: 'cover',
// // // // // // //           backgroundPosition: 'center',
// // // // // // //           position: 'relative',
// // // // // // //           display: 'flex',
// // // // // // //           alignItems: 'center',
// // // // // // //           marginTop: '-80px'
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             position: 'absolute',
// // // // // // //             inset: 0,
// // // // // // //             backgroundColor: 'rgba(0,0,0,0.6)'
// // // // // // //           }}
// // // // // // //         ></div>

// // // // // // //         <div
// // // // // // //           className="container"
// // // // // // //           style={{
// // // // // // //             position: 'relative',
// // // // // // //             zIndex: 2,
// // // // // // //             color: 'white',
// // // // // // //             textAlign: 'center'
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <h1
// // // // // // //             style={{
// // // // // // //               fontSize: '3rem',
// // // // // // //               fontWeight: 'bold',
// // // // // // //               fontFamily: 'Georgia'
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {displayName}
// // // // // // //           </h1>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Content Section */}
// // // // // // //       <div className="container py-5">
// // // // // // //         <div className="row">
// // // // // // //           {/* LEFT CONTENT */}
// // // // // // //           <div className="col-lg-8">
// // // // // // //             <h3
// // // // // // //               style={{
// // // // // // //                 fontWeight: 'bold',
// // // // // // //                 borderBottom: '2px solid #eee',
// // // // // // //                 paddingBottom: '10px'
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Overview
// // // // // // //             </h3>

// // // // // // //             <p
// // // // // // //               style={{
// // // // // // //                 fontSize: '1.2rem',
// // // // // // //                 lineHeight: '1.8',
// // // // // // //                 color: '#333',
// // // // // // //                 marginTop: '20px'
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {dynamicData.description}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* RIGHT SIDEBAR */}
// // // // // // //           <div className="col-lg-4">
// // // // // // //             <div
// // // // // // //               style={{
// // // // // // //                 padding: '25px',
// // // // // // //                 border: '1px solid #ddd',
// // // // // // //                 backgroundColor: '#fff'
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               <h4
// // // // // // //                 style={{
// // // // // // //                   fontWeight: 'bold',
// // // // // // //                   borderBottom: '2px solid #eee',
// // // // // // //                   paddingBottom: '10px',
// // // // // // //                   marginBottom: '20px'
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Areas of Focus
// // // // // // //               </h4>

// // // // // // //               <ul style={{ listStyle: 'none', padding: 0 }}>
// // // // // // //                 {filteredSubCategories.map((sub) => (
// // // // // // //                   <li
// // // // // // //                     key={sub.id}
// // // // // // //                     style={{
// // // // // // //                       padding: '10px 0',
// // // // // // //                       borderBottom: '1px solid #f1f1f1'
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     <Link href={`/capability/${createSlug(sub.subcategoryName)}`}>
// // // // // // //                       <a
// // // // // // //                         style={{
// // // // // // //                           textDecoration: 'none',
// // // // // // //                           color: '#333',
// // // // // // //                           display: 'flex',
// // // // // // //                           alignItems: 'center'
// // // // // // //                         }}
// // // // // // //                       >
// // // // // // //                         <span style={{ color: '#cfa144', marginRight: '10px' }}>
// // // // // // //                           ▶
// // // // // // //                         </span>
// // // // // // //                         {sub.subcategoryName}
// // // // // // //                       </a>
// // // // // // //                     </Link>
// // // // // // //                   </li>
// // // // // // //                 ))}
// // // // // // //               </ul>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import Head from "next/head";
// // // // // // // import Link from "next/link";
// // // // // // // import { useRouter } from "next/router";
// // // // // // // import { getAllCapabilitySubCategories } from "../../services/authService";

// // // // // // // export default function CapabilityDetail() {
// // // // // // //   const router = useRouter();
// // // // // // //   const { slug: type } = router.query;

// // // // // // //   const [categories, setCategories] = useState([]);
// // // // // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   // Static news (unchanged)
// // // // // // //   const staticNews = [
// // // // // // //     {
// // // // // // //       id: "news-1",
// // // // // // //       date: "July 23, 2025",
// // // // // // //       type: "Media Coverage",
// // // // // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // // // // //       source: "Law360",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "news-2",
// // // // // // //       date: "January 03, 2025",
// // // // // // //       type: "GT Advisory",
// // // // // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // // // // //       readTime: "2 min read",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   // Static related capabilities (unchanged)
// // // // // // //   const staticRelatedCapabilities = [
// // // // // // //     "Venture Capital & Emerging Technology",
// // // // // // //     "Innovation & Artificial Intelligence",
// // // // // // //     "Government Law & Policy",
// // // // // // //     "Technology, Media & Telecommunications",
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     async function fetchCategories() {
// // // // // // //       try {
// // // // // // //         const res = await getAllCapabilitySubCategories();
// // // // // // //         if (res && res.data) {
// // // // // // //           setCategories(res.data);

// // // // // // //           // Match category based on slug in URL
// // // // // // //           if (type) {
// // // // // // //             const matched = res.data.find(
// // // // // // //               (cat) =>
// // // // // // //                 cat.categoryName
// // // // // // //                   ?.toLowerCase()
// // // // // // //                   .replace(/\s+/g, "-") === type
// // // // // // //             );
// // // // // // //             setSelectedCategory(matched || res.data[0]);
// // // // // // //           } else {
// // // // // // //             setSelectedCategory(res.data[0]);
// // // // // // //           }
// // // // // // //         }
// // // // // // //         setLoading(false);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching categories:", error);
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     fetchCategories();
// // // // // // //   }, [type]);

// // // // // // //   if (loading || !selectedCategory)
// // // // // // //     return <div className="p-5 text-center">Loading...</div>;

// // // // // // //   // Get subcategories of the selected category
// // // // // // //   const subcategories = categories.filter(
// // // // // // //     (cat) => cat.categoryName === selectedCategory.categoryName
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Head>
// // // // // // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // // // // // //         <link
// // // // // // //           rel="stylesheet"
// // // // // // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // // // // // //         />
// // // // // // //       </Head>

// // // // // // //       {/* HERO SECTION */}
// // // // // // //       <div
// // // // // // //         className="hero-section"
// // // // // // //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// // // // // // //       >
// // // // // // //         <div className="overlay"></div>
// // // // // // //         <div className="container hero-content">
// // // // // // //           <h1 className="hero-title font-serif">{selectedCategory.categoryName}</h1>
// // // // // // //           <Link href="/attorneys">
// // // // // // //             <a className="btn-gold-outline mt-3">
// // // // // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // // // // //             </a>
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //     {/* RIGHT COLUMN */}
// // // // // // // <div className="col-lg-4 mt-5 mt-lg-0">
// // // // // // //   <div className="sidebar-box mb-5">
// // // // // // //     <h4 className="sidebar-title font-serif">Areas of Focus</h4>
// // // // // // //     <ul className="sidebar-list">
// // // // // // //       {categories.map((subcat) => {
// // // // // // //         if (!subcat || !subcat.subcategoryName) return null;
// // // // // // //         const subSlug = subcat.subcategoryName
// // // // // // //           .toLowerCase()
// // // // // // //           .trim()
// // // // // // //           .replace(/\s+/g, "-");
// // // // // // //         return (
// // // // // // //           <li key={subcat.id} style={{ cursor: "pointer" }}>
// // // // // // //             <Link href={`/area-detail/${subSlug}`}>
// // // // // // //               <a
// // // // // // //                 className={`text-decoration-none d-block py-1 ${
// // // // // // //                   selectedCategory?.id === subcat.id
// // // // // // //                     ? "fw-bold text-gold"
// // // // // // //                     : "text-dark"
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 <i className="bi bi-caret-right-fill text-gold me-2"></i>
// // // // // // //                 {subcat.subcategoryName}
// // // // // // //               </a>
// // // // // // //             </Link>
// // // // // // //           </li>
// // // // // // //         );
// // // // // // //       })}
// // // // // // //     </ul>
// // // // // // //   </div>
// // // // // // // </div>

// // // // // // //       {/* NEWS SECTION (STATIC) */}
// // // // // // //       <div className="news-section">
// // // // // // //         <div className="container">
// // // // // // //           <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
// // // // // // //             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // // // // //           </div>

// // // // // // //           <div className="row">
// // // // // // //             {staticNews.map((news) => (
// // // // // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // // // // //                 <div className="d-flex flex-column">
// // // // // // //                   <div className="mb-2">
// // // // // // //                     <span className="text-white fw-bold text-uppercase small">{news.date}</span>
// // // // // // //                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
// // // // // // //                       {news.type}
// // // // // // //                     </span>
// // // // // // //                   </div>
// // // // // // //                   <Link href={`/news/${news.id}`}>
// // // // // // //                     <a className="news-title font-serif">{news.title}</a>
// // // // // // //                   </Link>
// // // // // // //                   <div className="text-muted small mt-1 fst-italic">
// // // // // // //                     {news.readTime || news.source || "Read More"}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //                 <hr className="border-secondary opacity-25 mt-3" />
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           <div className="text-end">
// // // // // // //             <Link href="/news">
// // // // // // //               <a
// // // // // // //                 className="text-white fw-bold small text-uppercase"
// // // // // // //                 style={{ letterSpacing: "1px" }}
// // // // // // //               >
// // // // // // //                 View More +
// // // // // // //               </a>
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* RELATED CAPABILITIES (STATIC) */}
// // // // // // //       <div className="container py-5 mb-5">
// // // // // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // // // // //         <div className="related-grid">
// // // // // // //           {staticRelatedCapabilities.map((cap, idx) => (
// // // // // // //             <Link
// // // // // // //               key={idx}
// // // // // // //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// // // // // // //             >
// // // // // // //               <a className="related-pill">{cap}</a>
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* STYLES */}
// // // // // // //       <style jsx>{`
// // // // // // //         :global(:root) {
// // // // // // //           --gold: #de9f57;
// // // // // // //           --navy: #002855;
// // // // // // //         }
// // // // // // //         .text-gold {
// // // // // // //           color: var(--gold) !important;
// // // // // // //         }
// // // // // // //         .font-serif {
// // // // // // //           font-family: "Georgia", "Times New Roman", serif;
// // // // // // //         }
// // // // // // //         .hero-section {
// // // // // // //           background-size: cover;
// // // // // // //           background-position: center;
// // // // // // //           height: 60vh;
// // // // // // //           min-height: 450px;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           text-align: center;
// // // // // // //           position: relative;
// // // // // // //           margin-top: -80px;
// // // // // // //         }
// // // // // // //         .overlay {
// // // // // // //           background: rgba(0, 40, 85, 0.7);
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //         }
// // // // // // //         .hero-content {
// // // // // // //           position: relative;
// // // // // // //           z-index: 2;
// // // // // // //           color: white;
// // // // // // //           padding-top: 100px;
// // // // // // //         }
// // // // // // //         .hero-title {
// // // // // // //           font-size: clamp(2rem, 3.5vw, 3rem);
// // // // // // //           font-weight: 700;
// // // // // // //           margin-bottom: 30px;
// // // // // // //           line-height: 1.2;
// // // // // // //           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
// // // // // // //         }
// // // // // // //         .btn-gold-outline {
// // // // // // //           border: 2px solid white;
// // // // // // //           color: white;
// // // // // // //           padding: 12px 30px;
// // // // // // //           font-weight: bold;
// // // // // // //           letter-spacing: 2px;
// // // // // // //           transition: 0.3s;
// // // // // // //           text-decoration: none;
// // // // // // //           display: inline-block;
// // // // // // //         }
// // // // // // //         .btn-gold-outline:hover {
// // // // // // //           background: white;
// // // // // // //           color: var(--navy);
// // // // // // //         }
// // // // // // //         .content-wrapper {
// // // // // // //           padding: 60px 15px;
// // // // // // //         }
// // // // // // //         .lead-text {
// // // // // // //           font-size: 1.25rem;
// // // // // // //           line-height: 1.7;
// // // // // // //           color: #333;
// // // // // // //           font-weight: 500;
// // // // // // //         }
// // // // // // //         .sidebar-box {
// // // // // // //           margin-bottom: 40px;
// // // // // // //         }
// // // // // // //         .sidebar-title {
// // // // // // //           font-size: 1.2rem;
// // // // // // //           font-weight: bold;
// // // // // // //           text-transform: uppercase;
// // // // // // //           letter-spacing: 1px;
// // // // // // //           border-bottom: 2px solid #eee;
// // // // // // //           padding-bottom: 10px;
// // // // // // //           margin-bottom: 20px;
// // // // // // //         }
// // // // // // //         .sidebar-list {
// // // // // // //           list-style: none;
// // // // // // //           padding: 0;
// // // // // // //         }
// // // // // // //         .sidebar-list li {
// // // // // // //           padding: 8px 0;
// // // // // // //           font-size: 1.1rem;
// // // // // // //           border-bottom: 1px solid #eee;
// // // // // // //         }
// // // // // // //         .news-section {
// // // // // // //           background-color: #222;
// // // // // // //           padding: 80px 0;
// // // // // // //           color: white;
// // // // // // //         }
// // // // // // //         .news-title {
// // // // // // //           font-size: 1.6rem;
// // // // // // //           color: var(--gold);
// // // // // // //           text-decoration: none;
// // // // // // //           display: block;
// // // // // // //           transition: 0.2s;
// // // // // // //         }
// // // // // // //         .news-title:hover {
// // // // // // //           text-decoration: underline;
// // // // // // //           color: #eac07a;
// // // // // // //         }
// // // // // // //         .related-grid {
// // // // // // //           display: flex;
// // // // // // //           flex-wrap: wrap;
// // // // // // //           gap: 10px;
// // // // // // //         }
// // // // // // //         .related-pill {
// // // // // // //           background: white;
// // // // // // //           border: 1px solid #ddd;
// // // // // // //           padding: 10px 20px;
// // // // // // //           color: #333;
// // // // // // //           text-decoration: none;
// // // // // // //           font-weight: 500;
// // // // // // //           transition: 0.2s;
// // // // // // //         }
// // // // // // //         .related-pill:hover {
// // // // // // //           background: var(--navy);
// // // // // // //           color: white;
// // // // // // //           border-color: var(--navy);
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }


// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import Head from "next/head";
// // // // // // // import Link from "next/link";
// // // // // // // import { useRouter } from "next/router";
// // // // // // // import { getAllCapabilitySubCategories } from "../../services/authService";

// // // // // // // export default function CapabilityDetail() {
// // // // // // //   const router = useRouter();
// // // // // // //   const { slug: type } = router.query;

// // // // // // //   const [categories, setCategories] = useState([]);
// // // // // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   // Static news
// // // // // // //   const staticNews = [
// // // // // // //     {
// // // // // // //       id: "news-1",
// // // // // // //       date: "July 23, 2025",
// // // // // // //       type: "Media Coverage",
// // // // // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // // // // //       source: "Law360",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "news-2",
// // // // // // //       date: "January 03, 2025",
// // // // // // //       type: "GT Advisory",
// // // // // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // // // // //       readTime: "2 min read",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const staticRelatedCapabilities = [
// // // // // // //     "Venture Capital & Emerging Technology",
// // // // // // //     "Innovation & Artificial Intelligence",
// // // // // // //     "Government Law & Policy",
// // // // // // //     "Technology, Media & Telecommunications",
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     async function fetchCategories() {
// // // // // // //       try {
// // // // // // //         const res = await getAllCapabilitySubCategories();
// // // // // // //         if (res && res.data) {
// // // // // // //           setCategories(res.data);

// // // // // // //           // Match category slug
// // // // // // //           if (type) {
// // // // // // //             const matched = res.data.find(
// // // // // // //               (cat) =>
// // // // // // //                 cat.categoryName
// // // // // // //                   ?.toLowerCase()
// // // // // // //                   .replace(/\s+/g, "-") === type
// // // // // // //             );
// // // // // // //             setSelectedCategory(matched || res.data[0]);
// // // // // // //           } else {
// // // // // // //             setSelectedCategory(res.data[0]);
// // // // // // //           }
// // // // // // //         }
// // // // // // //         setLoading(false);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching categories:", error);
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     fetchCategories();
// // // // // // //   }, [type]);

// // // // // // //   if (loading || !selectedCategory)
// // // // // // //     return <div className="p-5 text-center">Loading...</div>;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Head>
// // // // // // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // // // // // //         <link
// // // // // // //           rel="stylesheet"
// // // // // // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // // // // // //         />
// // // // // // //       </Head>

// // // // // // //       {/* HERO */}
// // // // // // //       <div
// // // // // // //         className="hero-section"
// // // // // // //         style={{
// // // // // // //           backgroundImage: `url(${selectedCategory.bannerImage})`,
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <div className="overlay"></div>
// // // // // // //         <div className="container hero-content">
// // // // // // //           <h1 className="hero-title font-serif">{selectedCategory.categoryName}</h1>
// // // // // // //           <Link href="/attorneys">
// // // // // // //             <a className="btn-gold-outline mt-3">
// // // // // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // // // // //             </a>
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* MAIN CONTENT */}
// // // // // // //       <div className="container content-wrapper">
// // // // // // //         <div className="row">
// // // // // // //           {/* LEFT COLUMN */}
// // // // // // //           <div className="col-lg-8 pe-lg-5">
// // // // // // //             <p className="lead-text mb-4">{selectedCategory.description}</p>
// // // // // // //           </div>

// // // // // // //           RIGHT COLUMN
// // // // // // //           <div className="col-lg-4 mt-5 mt-lg-0">
// // // // // // //             <div className="sidebar-box mb-5">
// // // // // // //               <h4 className="sidebar-title font-serif">Areas of Focus</h4>
// // // // // // //               <ul className="sidebar-list">
// // // // // // //                 {categories.map((cat) => {
// // // // // // //                   if (!cat || !cat.subcategoryName) return null;
// // // // // // //                   const slug = cat.subcategoryName
// // // // // // //                     .toLowerCase()
// // // // // // //                     .trim()
// // // // // // //                     .replace(/\s+/g, "-");
// // // // // // //                   return (
// // // // // // //                     <li key={cat.id} style={{ cursor: "pointer" }}>
// // // // // // //                    <Link href={`/capability/area-detail-page?type=${createSlug(sub.subcategoryName)}`}>

// // // // // // //                         <a
// // // // // // //                           className={`text-decoration-none d-block py-1 ${
// // // // // // //                             selectedCategory?.id === cat.id
// // // // // // //                               ? "fw-bold text-gold"
// // // // // // //                               : "text-dark"
// // // // // // //                           }`}
// // // // // // //                         >
// // // // // // //                           <i className="bi bi-caret-right-fill text-gold me-2"></i>
// // // // // // //                           {cat.subcategoryName}
// // // // // // //                         </a>
// // // // // // //                       </Link>
// // // // // // //                     </li>
// // // // // // //                   );
// // // // // // //                 })}
// // // // // // //               </ul>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* NEWS SECTION */}
// // // // // // //       <div className="news-section">
// // // // // // //         <div className="container">
// // // // // // //           <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
// // // // // // //             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // // // // //           </div>

// // // // // // //           <div className="row">
// // // // // // //             {staticNews.map((news) => (
// // // // // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // // // // //                 <div className="d-flex flex-column">
// // // // // // //                   <div className="mb-2">
// // // // // // //                     <span className="text-white fw-bold text-uppercase small">
// // // // // // //                       {news.date}
// // // // // // //                     </span>
// // // // // // //                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
// // // // // // //                       {news.type}
// // // // // // //                     </span>
// // // // // // //                   </div>
// // // // // // //                   <Link href={`/news/${news.id}`}>
// // // // // // //                     <a className="news-title font-serif">{news.title}</a>
// // // // // // //                   </Link>
// // // // // // //                   <div className="text-muted small mt-1 fst-italic">
// // // // // // //                     {news.readTime || news.source || "Read More"}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //                 <hr className="border-secondary opacity-25 mt-3" />
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           <div className="text-end">
// // // // // // //             <Link href="/news">
// // // // // // //               <a
// // // // // // //                 className="text-white fw-bold small text-uppercase"
// // // // // // //                 style={{ letterSpacing: "1px" }}
// // // // // // //               >
// // // // // // //                 View More +
// // // // // // //               </a>
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* RELATED CAPABILITIES */}
// // // // // // //       <div className="container py-5 mb-5">
// // // // // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // // // // //         <div className="related-grid">
// // // // // // //           {staticRelatedCapabilities.map((cap, idx) => (
// // // // // // //             <Link
// // // // // // //               key={idx}
// // // // // // //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// // // // // // //             >
// // // // // // //               <a className="related-pill">{cap}</a>
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* STYLES */}
// // // // // // //       <style jsx>{`
// // // // // // //         :global(:root) {
// // // // // // //           --gold: #de9f57;
// // // // // // //           --navy: #002855;
// // // // // // //         }
// // // // // // //         .text-gold {
// // // // // // //           color: var(--gold) !important;
// // // // // // //         }
// // // // // // //         .font-serif {
// // // // // // //           font-family: "Georgia", "Times New Roman", serif;
// // // // // // //         }
// // // // // // //         .hero-section {
// // // // // // //           background-size: cover;
// // // // // // //           background-position: center;
// // // // // // //           height: 60vh;
// // // // // // //           min-height: 450px;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           text-align: center;
// // // // // // //           position: relative;
// // // // // // //           margin-top: -80px;
// // // // // // //         }
// // // // // // //         .overlay {
// // // // // // //           background: rgba(0, 40, 85, 0.7);
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //         }
// // // // // // //         .hero-content {
// // // // // // //           position: relative;
// // // // // // //           z-index: 2;
// // // // // // //           color: white;
// // // // // // //           padding-top: 100px;
// // // // // // //         }
// // // // // // //         .hero-title {
// // // // // // //           font-size: clamp(2rem, 3.5vw, 3rem);
// // // // // // //           font-weight: 700;
// // // // // // //           margin-bottom: 30px;
// // // // // // //           line-height: 1.2;
// // // // // // //           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
// // // // // // //         }
// // // // // // //         .btn-gold-outline {
// // // // // // //           border: 2px solid white;
// // // // // // //           color: white;
// // // // // // //           padding: 12px 30px;
// // // // // // //           font-weight: bold;
// // // // // // //           letter-spacing: 2px;
// // // // // // //           transition: 0.3s;
// // // // // // //           text-decoration: none;
// // // // // // //           display: inline-block;
// // // // // // //         }
// // // // // // //         .btn-gold-outline:hover {
// // // // // // //           background: white;
// // // // // // //           color: var(--navy);
// // // // // // //         }
// // // // // // //         .content-wrapper {
// // // // // // //           padding: 60px 15px;
// // // // // // //         }
// // // // // // //         .lead-text {
// // // // // // //           font-size: 1.25rem;
// // // // // // //           line-height: 1.7;
// // // // // // //           color: #333;
// // // // // // //           font-weight: 500;
// // // // // // //         }
// // // // // // //         .sidebar-box {
// // // // // // //           margin-bottom: 40px;
// // // // // // //         }
// // // // // // //         .sidebar-title {
// // // // // // //           font-size: 1.2rem;
// // // // // // //           font-weight: bold;
// // // // // // //           text-transform: uppercase;
// // // // // // //           letter-spacing: 1px;
// // // // // // //           border-bottom: 2px solid #eee;
// // // // // // //           padding-bottom: 10px;
// // // // // // //           margin-bottom: 20px;
// // // // // // //         }
// // // // // // //         .sidebar-list {
// // // // // // //           list-style: none;
// // // // // // //           padding: 0;
// // // // // // //         }
// // // // // // //         .sidebar-list li {
// // // // // // //           padding: 8px 0;
// // // // // // //           font-size: 1.1rem;
// // // // // // //           border-bottom: 1px solid #eee;
// // // // // // //         }
// // // // // // //         .news-section {
// // // // // // //           background-color: #222;
// // // // // // //           padding: 80px 0;
// // // // // // //           color: white;
// // // // // // //         }
// // // // // // //         .news-title {
// // // // // // //           font-size: 1.6rem;
// // // // // // //           color: var(--gold);
// // // // // // //           text-decoration: none;
// // // // // // //           display: block;
// // // // // // //           transition: 0.2s;
// // // // // // //         }
// // // // // // //         .news-title:hover {
// // // // // // //           text-decoration: underline;
// // // // // // //           color: #eac07a;
// // // // // // //         }
// // // // // // //         .related-grid {
// // // // // // //           display: flex;
// // // // // // //           flex-wrap: wrap;
// // // // // // //           gap: 10px;
// // // // // // //         }
// // // // // // //         .related-pill {
// // // // // // //           background: white;
// // // // // // //           border: 1px solid #ddd;
// // // // // // //           padding: 10px 20px;
// // // // // // //           color: #333;
// // // // // // //           text-decoration: none;
// // // // // // //           font-weight: 500;
// // // // // // //           transition: 0.2s;
// // // // // // //         }
// // // // // // //         .related-pill:hover {
// // // // // // //           background: var(--navy);
// // // // // // //           color: white;
// // // // // // //           border-color: var(--navy);
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import Head from "next/head";
// // // // // // import Link from "next/link";
// // // // // // import { useRouter } from "next/router";
// // // // // // import { getAllCapabilitySubCategories } from "../../services/authService";

// // // // // // export default function CapabilityDetail() {
// // // // // //   const router = useRouter();
// // // // // //   const { slug: type } = router.query;

// // // // // //   const [categories, setCategories] = useState([]);
// // // // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // Static news
// // // // // //   const staticNews = [
// // // // // //     {
// // // // // //       id: "news-1",
// // // // // //       date: "July 23, 2025",
// // // // // //       type: "Media Coverage",
// // // // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // // // //       source: "Law360",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "news-2",
// // // // // //       date: "January 03, 2025",
// // // // // //       type: "GT Advisory",
// // // // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // // // //       readTime: "2 min read",
// // // // // //     },
// // // // // //   ];

// // // // // //   const staticRelatedCapabilities = [
// // // // // //     "Venture Capital & Emerging Technology",
// // // // // //     "Innovation & Artificial Intelligence",
// // // // // //     "Government Law & Policy",
// // // // // //     "Technology, Media & Telecommunications",
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     async function fetchCategories() {
// // // // // //       try {
// // // // // //         const res = await getAllCapabilitySubCategories();
// // // // // //         if (res && res.data) {
// // // // // //           setCategories(res.data);

// // // // // //           // Match category slug
// // // // // //           if (type) {
// // // // // //             const matched = res.data.find(
// // // // // //               (cat) =>
// // // // // //                 cat.categoryName
// // // // // //                   ?.toLowerCase()
// // // // // //                   .replace(/\s+/g, "-") === type
// // // // // //             );
// // // // // //             setSelectedCategory(matched || res.data[0]);
// // // // // //           } else {
// // // // // //             setSelectedCategory(res.data[0]);
// // // // // //           }
// // // // // //         }
// // // // // //         setLoading(false);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching categories:", error);
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     }

// // // // // //     fetchCategories();
// // // // // //   }, [type]);

// // // // // //   if (loading || !selectedCategory)
// // // // // //     return <div className="p-5 text-center">Loading...</div>;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Head>
// // // // // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // // // // //         <link
// // // // // //           rel="stylesheet"
// // // // // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // // // // //         />
// // // // // //       </Head>

// // // // // //       {/* HERO SECTION */}
// // // // // //       <div
// // // // // //         className="hero-section"
// // // // // //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// // // // // //       >
// // // // // //         <div className="overlay"></div>
// // // // // //         <div className="container hero-content text-center">
// // // // // //           <h1 className="hero-title font-serif">{selectedCategory.categoryName}</h1>
// // // // // //           <Link href="/attorneys">
// // // // // //             <a className="btn-gold-outline mt-3">
// // // // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // // // //             </a>
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* MAIN CONTENT */}
// // // // // //       <div className="container content-wrapper">
// // // // // //         <div className="row">
// // // // // //           {/* LEFT COLUMN */}
// // // // // //           <div className="col-lg-8 pe-lg-5">
// // // // // //             <p className="lead-text mb-4">{selectedCategory.description}</p>
// // // // // //           </div>

// // // // // //           {/* RIGHT COLUMN - Subcategory sidebar */}
// // // // // //           <div className="col-lg-4 mt-5 mt-lg-0">
// // // // // //             <div className="sidebar-box mb-5">
// // // // // //               <h4 className="sidebar-title font-serif">Areas of Focus</h4>
// // // // // //               <ul className="sidebar-list">
// // // // // //                 {categories.map((subcat) => {
// // // // // //                   if (!subcat || !subcat.subcategoryName) return null;
// // // // // //                   const slug = subcat.subcategoryName
// // // // // //                     .toLowerCase()
// // // // // //                     .trim()
// // // // // //                     .replace(/\s+/g, "-");

// // // // // //                   return (
// // // // // //                     <li key={subcat.id} style={{ cursor: "pointer" }}>
// // // // // //                       <Link href={`/area-detail/${slug}`}>
// // // // // //                         <a
// // // // // //                           className={`text-decoration-none d-block py-1 ${
// // // // // //                             selectedCategory?.id === subcat.id
// // // // // //                               ? "fw-bold text-gold"
// // // // // //                               : "text-dark"
// // // // // //                           }`}
// // // // // //                         >
// // // // // //                           <i className="bi bi-caret-right-fill text-gold me-2"></i>
// // // // // //                           {subcat.subcategoryName}
// // // // // //                         </a>
// // // // // //                       </Link>
// // // // // //                     </li>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </ul>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* NEWS SECTION */}
// // // // // //       <div className="news-section">
// // // // // //         <div className="container">
// // // // // //           <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
// // // // // //             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // // // //           </div>

// // // // // //           <div className="row">
// // // // // //             {staticNews.map((news) => (
// // // // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // // // //                 <div className="d-flex flex-column">
// // // // // //                   <div className="mb-2">
// // // // // //                     <span className="text-white fw-bold text-uppercase small">
// // // // // //                       {news.date}
// // // // // //                     </span>
// // // // // //                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
// // // // // //                       {news.type}
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                   <Link href={`/news/${news.id}`}>
// // // // // //                     <a className="news-title font-serif">{news.title}</a>
// // // // // //                   </Link>
// // // // // //                   <div className="text-muted small mt-1 fst-italic">
// // // // // //                     {news.readTime || news.source || "Read More"}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <hr className="border-secondary opacity-25 mt-3" />
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <div className="text-end">
// // // // // //             <Link href="/news">
// // // // // //               <a
// // // // // //                 className="text-white fw-bold small text-uppercase"
// // // // // //                 style={{ letterSpacing: "1px" }}
// // // // // //               >
// // // // // //                 View More +
// // // // // //               </a>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* RELATED CAPABILITIES */}
// // // // // //       <div className="container py-5 mb-5">
// // // // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // // // //         <div className="related-grid">
// // // // // //           {staticRelatedCapabilities.map((cap, idx) => (
// // // // // //             <Link
// // // // // //               key={idx}
// // // // // //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// // // // // //             >
// // // // // //               <a className="related-pill">{cap}</a>
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* STYLES */}
// // // // // //       <style jsx>{`
// // // // // //         :global(:root) {
// // // // // //           --gold: #de9f57;
// // // // // //           --navy: #002855;
// // // // // //         }
// // // // // //         .text-gold { color: var(--gold) !important; }
// // // // // //         .font-serif { font-family: "Georgia", "Times New Roman", serif; }
// // // // // //         .hero-section {
// // // // // //           background-size: cover;
// // // // // //           background-position: center;
// // // // // //           height: 60vh;
// // // // // //           min-height: 450px;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           text-align: center;
// // // // // //           position: relative;
// // // // // //           margin-top: -80px;
// // // // // //         }
// // // // // //         .overlay { background: rgba(0, 40, 85, 0.7); position: absolute; inset: 0; }
// // // // // //         .hero-content { position: relative; z-index: 2; color: white; }
// // // // // //         .hero-title { font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; line-height: 1.2; text-shadow: 2px 2px 4px rgba(0,0,0,0.6); }
// // // // // //         .btn-gold-outline { border: 2px solid white; color: white; padding: 12px 30px; font-weight: bold; letter-spacing: 2px; text-decoration: none; display: inline-block; transition: 0.3s; }
// // // // // //         .btn-gold-outline:hover { background: white; color: var(--navy); }
// // // // // //         .content-wrapper { padding: 60px 15px; }
// // // // // //         .lead-text { font-size: 1.25rem; line-height: 1.7; color: #333; font-weight: 500; }
// // // // // //         .sidebar-box { margin-bottom: 40px; }
// // // // // //         .sidebar-title { font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }
// // // // // //         .sidebar-list { list-style: none; padding: 0; }
// // // // // //         .sidebar-list li { padding: 8px 0; font-size: 1.1rem; border-bottom: 1px solid #eee; }
// // // // // //         .news-section { background-color: #222; padding: 80px 0; color: white; }
// // // // // //         .news-title { font-size: 1.6rem; color: var(--gold); text-decoration: none; display: block; transition: 0.2s; }
// // // // // //         .news-title:hover { text-decoration: underline; color: #eac07a; }
// // // // // //         .related-grid { display: flex; flex-wrap: wrap; gap: 10px; }
// // // // // //         .related-pill { background: white; border: 1px solid #ddd; padding: 10px 20px; color: #333; text-decoration: none; font-weight: 500; transition: 0.2s; }
// // // // // //         .related-pill:hover { background: var(--navy); color: white; border-color: var(--navy); }
// // // // // //       `}</style>
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import Head from "next/head";
// // // // // // import Link from "next/link";
// // // // // // import { useRouter } from "next/router";
// // // // // // import { getAllCapabilitySubCategories } from "../../services/authService";
// // // // // // export default function CapabilityDetail() {
// // // // // //   const router = useRouter();
// // // // // //   const { slug: type } = router.query;

// // // // // //   const [categories, setCategories] = useState([]);
// // // // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // Static news (unchanged)
// // // // // //   const staticNews = [
// // // // // //     {
// // // // // //       id: "news-1",
// // // // // //       date: "July 23, 2025",
// // // // // //       type: "Media Coverage",
// // // // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // // // //       source: "Law360",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "news-2",
// // // // // //       date: "January 03, 2025",
// // // // // //       type: "GT Advisory",
// // // // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // // // //       readTime: "2 min read",
// // // // // //     },
// // // // // //   ];

// // // // // //   // Static related capabilities (unchanged)
// // // // // //   const staticRelatedCapabilities = [
// // // // // //     "Venture Capital & Emerging Technology",
// // // // // //     "Innovation & Artificial Intelligence",
// // // // // //     "Government Law & Policy",
// // // // // //     "Technology, Media & Telecommunications",
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     async function fetchCategories() {
// // // // // //       try {
// // // // // //         const res = await getAllCapabilitySubCategories();
// // // // // //         if (res && res.data) {
// // // // // //           setCategories(res.data);

// // // // // //           // Match category based on slug in URL
// // // // // //           if (type) {
// // // // // //             const matched = res.data.find(
// // // // // //               (cat) =>
// // // // // //                 cat.categoryName
// // // // // //                   ?.toLowerCase()
// // // // // //                   .replace(/\s+/g, "-") === type
// // // // // //             );
// // // // // //             setSelectedCategory(matched || res.data[0]);
// // // // // //           } else {
// // // // // //             setSelectedCategory(res.data[0]);
// // // // // //           }
// // // // // //         }
// // // // // //         setLoading(false);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching categories:", error);
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     }

// // // // // //     fetchCategories();
// // // // // //   }, [type]);

// // // // // //   if (loading || !selectedCategory)
// // // // // //     return <div className="p-5 text-center">Loading...</div>;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Head>
// // // // // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // // // // //         <link
// // // // // //           rel="stylesheet"
// // // // // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // // // // //         />
// // // // // //       </Head>

// // // // // //       {/* HERO SECTION */}
// // // // // //       <div
// // // // // //         className="hero-section"
// // // // // //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// // // // // //       >
// // // // // //         <div className="overlay"></div>
// // // // // //         <div className="container hero-content">
// // // // // //           <h1 className="hero-title font-serif">{selectedCategory.categoryName}</h1>
// // // // // //           <Link href="/attorneys">
// // // // // //             <a className="btn-gold-outline mt-3">
// // // // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // // // //             </a>
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* MAIN CONTENT */}
// // // // // //       <div className="container content-wrapper">
// // // // // //         <div className="row">
// // // // // //           {/* LEFT COLUMN */}
// // // // // //           <div className="col-lg-8 pe-lg-5">
// // // // // //             <p className="lead-text mb-4">{selectedCategory.description}</p>
// // // // // //           </div>

// // // // // //           {/* RIGHT COLUMN */}
// // // // // //           <div className="col-lg-4 mt-5 mt-lg-0">
// // // // // //             <div className="sidebar-box mb-5">
// // // // // //               <h4 className="sidebar-title font-serif">Areas of Focus</h4>
// // // // // //               <ul className="sidebar-list">
// // // // // //                 {categories.map((subcat) => {
// // // // // //                   if (!subcat || !subcat.subcategoryName) return null;
// // // // // //                   const subSlug = subcat.subcategoryName
// // // // // //                     .toLowerCase()
// // // // // //                     .trim()
// // // // // //                     .replace(/\s+/g, "-");
// // // // // //                   return (
// // // // // //                     <li key={subcat.id} style={{ cursor: "pointer" }}>
// // // // // //                       <Link href={`/capability/area-detail/${subSlug}`}>
// // // // // //                         <a
// // // // // //                           className={`text-decoration-none d-block py-1 ${
// // // // // //                             selectedCategory?.id === subcat.id
// // // // // //                               ? "fw-bold text-gold"
// // // // // //                               : "text-dark"
// // // // // //                           }`}
// // // // // //                         >
// // // // // //                           <i className="bi bi-caret-right-fill text-gold me-2"></i>
// // // // // //                           {subcat.subcategoryName}
// // // // // //                         </a>
// // // // // //                       </Link>
// // // // // //                     </li>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </ul>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* NEWS SECTION */}
// // // // // //       <div className="news-section">
// // // // // //         <div className="container">
// // // // // //           <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
// // // // // //             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // // // //           </div>

// // // // // //           <div className="row">
// // // // // //             {staticNews.map((news) => (
// // // // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // // // //                 <div className="d-flex flex-column">
// // // // // //                   <div className="mb-2">
// // // // // //                     <span className="text-white fw-bold text-uppercase small">{news.date}</span>
// // // // // //                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
// // // // // //                       {news.type}
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                   <Link href={`/news/${news.id}`}>
// // // // // //                     <a className="news-title font-serif">{news.title}</a>
// // // // // //                   </Link>
// // // // // //                   <div className="text-muted small mt-1 fst-italic">
// // // // // //                     {news.readTime || news.source || "Read More"}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <hr className="border-secondary opacity-25 mt-3" />
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <div className="text-end">
// // // // // //             <Link href="/news">
// // // // // //               <a
// // // // // //                 className="text-white fw-bold small text-uppercase"
// // // // // //                 style={{ letterSpacing: "1px" }}
// // // // // //               >
// // // // // //                 View More +
// // // // // //               </a>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* RELATED CAPABILITIES */}
// // // // // //       <div className="container py-5 mb-5">
// // // // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // // // //         <div className="related-grid">
// // // // // //           {staticRelatedCapabilities.map((cap, idx) => (
// // // // // //             <Link
// // // // // //               key={idx}
// // // // // //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// // // // // //             >
// // // // // //               <a className="related-pill">{cap}</a>
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* STYLES */}
// // // // // //       <style jsx>{`
// // // // // //         :global(:root) {
// // // // // //           --gold: #de9f57;
// // // // // //           --navy: #002855;
// // // // // //         }
// // // // // //         .text-gold {
// // // // // //           color: var(--gold) !important;
// // // // // //         }
// // // // // //         .font-serif {
// // // // // //           font-family: "Georgia", "Times New Roman", serif;
// // // // // //         }
// // // // // //         .hero-section {
// // // // // //           background-size: cover;
// // // // // //           background-position: center;
// // // // // //           height: 60vh;
// // // // // //           min-height: 450px;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           text-align: center;
// // // // // //           position: relative;
// // // // // //           margin-top: -80px;
// // // // // //         }
// // // // // //         .overlay {
// // // // // //           background: rgba(0, 40, 85, 0.7);
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //         }
// // // // // //         .hero-content {
// // // // // //           position: relative;
// // // // // //           z-index: 2;
// // // // // //           color: white;
// // // // // //           padding-top: 100px;
// // // // // //         }
// // // // // //         .hero-title {
// // // // // //           font-size: clamp(2rem, 3.5vw, 3rem);
// // // // // //           font-weight: 700;
// // // // // //           margin-bottom: 30px;
// // // // // //           line-height: 1.2;
// // // // // //           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
// // // // // //         }
// // // // // //         .btn-gold-outline {
// // // // // //           border: 2px solid white;
// // // // // //           color: white;
// // // // // //           padding: 12px 30px;
// // // // // //           font-weight: bold;
// // // // // //           letter-spacing: 2px;
// // // // // //           transition: 0.3s;
// // // // // //           text-decoration: none;
// // // // // //           display: inline-block;
// // // // // //         }
// // // // // //         .btn-gold-outline:hover {
// // // // // //           background: white;
// // // // // //           color: var(--navy);
// // // // // //         }
// // // // // //         .content-wrapper {
// // // // // //           padding: 60px 15px;
// // // // // //         }
// // // // // //         .lead-text {
// // // // // //           font-size: 1.25rem;
// // // // // //           line-height: 1.7;
// // // // // //           color: #333;
// // // // // //           font-weight: 500;
// // // // // //         }
// // // // // //         .sidebar-box {
// // // // // //           margin-bottom: 40px;
// // // // // //         }
// // // // // //         .sidebar-title {
// // // // // //           font-size: 1.2rem;
// // // // // //           font-weight: bold;
// // // // // //           text-transform: uppercase;
// // // // // //           letter-spacing: 1px;
// // // // // //           border-bottom: 2px solid #eee;
// // // // // //           padding-bottom: 10px;
// // // // // //           margin-bottom: 20px;
// // // // // //         }
// // // // // //         .sidebar-list {
// // // // // //           list-style: none;
// // // // // //           padding: 0;
// // // // // //         }
// // // // // //         .sidebar-list li {
// // // // // //           padding: 8px 0;
// // // // // //           font-size: 1.1rem;
// // // // // //           border-bottom: 1px solid #eee;
// // // // // //         }
// // // // // //         .news-section {
// // // // // //           background-color: #222;
// // // // // //           padding: 80px 0;
// // // // // //           color: white;
// // // // // //         }
// // // // // //         .news-title {
// // // // // //           font-size: 1.6rem;
// // // // // //           color: var(--gold);
// // // // // //           text-decoration: none;
// // // // // //           display: block;
// // // // // //           transition: 0.2s;
// // // // // //         }
// // // // // //         .news-title:hover {
// // // // // //           text-decoration: underline;
// // // // // //           color: #eac07a;
// // // // // //         }
// // // // // //         .related-grid {
// // // // // //           display: flex;
// // // // // //           flex-wrap: wrap;
// // // // // //           gap: 10px;
// // // // // //         }
// // // // // //         .related-pill {
// // // // // //           background: white;
// // // // // //           border: 1px solid #ddd;
// // // // // //           padding: 10px 20px;
// // // // // //           color: #333;
// // // // // //           text-decoration: none;
// // // // // //           font-weight: 500;
// // // // // //           transition: 0.2s;
// // // // // //         }
// // // // // //         .related-pill:hover {
// // // // // //           background: var(--navy);
// // // // // //           color: white;
// // // // // //           border-color: var(--navy);
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import Head from "next/head";
// // // // // // import Link from "next/link";
// // // // // // import { useRouter } from "next/router";
// // // // // // import { getAllCapabilitySubCategories } from "../../services/authService";

// // // // // // export default function CapabilityDetail() {
// // // // // //   const router = useRouter();
// // // // // //   const { slug: type } = router.query;

// // // // // //   const [categories, setCategories] = useState([]);
// // // // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // Static news (unchanged)
// // // // // //   const staticNews = [
// // // // // //     {
// // // // // //       id: "news-1",
// // // // // //       date: "July 23, 2025",
// // // // // //       type: "Media Coverage",
// // // // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // // // //       source: "Law360",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "news-2",
// // // // // //       date: "January 03, 2025",
// // // // // //       type: "GT Advisory",
// // // // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // // // //       readTime: "2 min read",
// // // // // //     },
// // // // // //   ];

// // // // // //   // Static related capabilities (unchanged)
// // // // // //   const staticRelatedCapabilities = [
// // // // // //     "Venture Capital & Emerging Technology",
// // // // // //     "Innovation & Artificial Intelligence",
// // // // // //     "Government Law & Policy",
// // // // // //     "Technology, Media & Telecommunications",
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     async function fetchCategories() {
// // // // // //       try {
// // // // // //         const res = await getAllCapabilitySubCategories();
// // // // // //         if (res && res.data) {
// // // // // //           setCategories(res.data);

// // // // // //           // Match category based on slug in URL
// // // // // //           if (type) {
// // // // // //             const matched = res.data.find(
// // // // // //               (cat) =>
// // // // // //                 cat.categoryName
// // // // // //                   ?.toLowerCase()
// // // // // //                   .replace(/\s+/g, "-") === type
// // // // // //             );
// // // // // //             setSelectedCategory(matched || res.data[0]);
// // // // // //           } else {
// // // // // //             setSelectedCategory(res.data[0]);
// // // // // //           }
// // // // // //         }
// // // // // //         setLoading(false);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching categories:", error);
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     }

// // // // // //     fetchCategories();
// // // // // //   }, [type]);

// // // // // //   if (loading || !selectedCategory)
// // // // // //     return <div className="p-5 text-center">Loading...</div>;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Head>
// // // // // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // // // // //         <link
// // // // // //           rel="stylesheet"
// // // // // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // // // // //         />
// // // // // //       </Head>

// // // // // //       {/* HERO SECTION */}
// // // // // //       <div
// // // // // //         className="hero-section"
// // // // // //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// // // // // //       >
// // // // // //         <div className="overlay"></div>
// // // // // //         <div className="container hero-content">
// // // // // //           <h1 className="hero-title font-serif">{selectedCategory.categoryName}</h1>
// // // // // //           <Link href="/attorneys">
// // // // // //             <a className="btn-gold-outline mt-3">
// // // // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // // // //             </a>
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* MAIN CONTENT */}
// // // // // //       <div className="container content-wrapper">
// // // // // //         <div className="row">
// // // // // //           {/* LEFT COLUMN */}
// // // // // //           <div className="col-lg-8 pe-lg-5">
// // // // // //             <p className="lead-text mb-4">{selectedCategory.description}</p>
// // // // // //           </div>

// // // // // //           {/* RIGHT COLUMN */}
// // // // // //           <div className="col-lg-4 mt-5 mt-lg-0">
// // // // // //             <div className="sidebar-box mb-5">
// // // // // //               <h4 className="sidebar-title font-serif">Areas of Focus</h4>
// // // // // //               <ul className="sidebar-list">
// // // // // //                 {categories.map((subcat) => {
// // // // // //                   if (!subcat || !subcat.subcategoryName) return null;
// // // // // //                   const subSlug = subcat.subcategoryName
// // // // // //                     .toLowerCase()
// // // // // //                     .trim()
// // // // // //                     .replace(/\s+/g, "-");
// // // // // //                   return (
// // // // // //                     <li key={subcat.id} style={{ cursor: "pointer" }}>
// // // // // //                       <Link href={`/capability/area-detail/${subSlug}`}>
// // // // // //                         <a
// // // // // //                           className={`text-decoration-none d-block py-1 ${
// // // // // //                             selectedCategory?.id === subcat.id
// // // // // //                               ? "fw-bold text-gold"
// // // // // //                               : "text-dark"
// // // // // //                           }`}
// // // // // //                         >
// // // // // //                           <i className="bi bi-caret-right-fill text-gold me-2"></i>
// // // // // //                           {subcat.subcategoryName}
// // // // // //                         </a>
// // // // // //                       </Link>
// // // // // //                     </li>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </ul>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* NEWS SECTION */}
// // // // // //       <div className="news-section">
// // // // // //         <div className="container">
// // // // // //           <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
// // // // // //             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // // // //           </div>

// // // // // //           <div className="row">
// // // // // //             {staticNews.map((news) => (
// // // // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // // // //                 <div className="d-flex flex-column">
// // // // // //                   <div className="mb-2">
// // // // // //                     <span className="text-white fw-bold text-uppercase small">{news.date}</span>
// // // // // //                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
// // // // // //                       {news.type}
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                   <Link href={`/news/${news.id}`}>
// // // // // //                     <a className="news-title font-serif">{news.title}</a>
// // // // // //                   </Link>
// // // // // //                   <div className="text-muted small mt-1 fst-italic">
// // // // // //                     {news.readTime || news.source || "Read More"}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <hr className="border-secondary opacity-25 mt-3" />
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <div className="text-end">
// // // // // //             <Link href="/news">
// // // // // //               <a
// // // // // //                 className="text-white fw-bold small text-uppercase"
// // // // // //                 style={{ letterSpacing: "1px" }}
// // // // // //               >
// // // // // //                 View More +
// // // // // //               </a>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* RELATED CAPABILITIES */}
// // // // // //       <div className="container py-5 mb-5">
// // // // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // // // //         <div className="related-grid">
// // // // // //           {staticRelatedCapabilities.map((cap, idx) => (
// // // // // //             <Link
// // // // // //               key={idx}
// // // // // //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// // // // // //             >
// // // // // //               <a className="related-pill">{cap}</a>
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* STYLES */}
// // // // // //       <style jsx>{`
// // // // // //         :global(:root) {
// // // // // //           --gold: #de9f57;
// // // // // //           --navy: #002855;
// // // // // //         }
// // // // // //         .text-gold {
// // // // // //           color: var(--gold) !important;
// // // // // //         }
// // // // // //         .font-serif {
// // // // // //           font-family: "Georgia", "Times New Roman", serif;
// // // // // //         }
// // // // // //         .hero-section {
// // // // // //           background-size: cover;
// // // // // //           background-position: center;
// // // // // //           height: 60vh;
// // // // // //           min-height: 450px;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           text-align: center;
// // // // // //           position: relative;
// // // // // //           margin-top: -80px;
// // // // // //         }
// // // // // //         .overlay {
// // // // // //           background: rgba(0, 40, 85, 0.7);
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //         }
// // // // // //         .hero-content {
// // // // // //           position: relative;
// // // // // //           z-index: 2;
// // // // // //           color: white;
// // // // // //           padding-top: 100px;
// // // // // //         }
// // // // // //         .hero-title {
// // // // // //           font-size: clamp(2rem, 3.5vw, 3rem);
// // // // // //           font-weight: 700;
// // // // // //           margin-bottom: 30px;
// // // // // //           line-height: 1.2;
// // // // // //           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
// // // // // //         }
// // // // // //         .btn-gold-outline {
// // // // // //           border: 2px solid white;
// // // // // //           color: white;
// // // // // //           padding: 12px 30px;
// // // // // //           font-weight: bold;
// // // // // //           letter-spacing: 2px;
// // // // // //           transition: 0.3s;
// // // // // //           text-decoration: none;
// // // // // //           display: inline-block;
// // // // // //         }
// // // // // //         .btn-gold-outline:hover {
// // // // // //           background: white;
// // // // // //           color: var(--navy);
// // // // // //         }
// // // // // //         .content-wrapper {
// // // // // //           padding: 60px 15px;
// // // // // //         }
// // // // // //         .lead-text {
// // // // // //           font-size: 1.25rem;
// // // // // //           line-height: 1.7;
// // // // // //           color: #333;
// // // // // //           font-weight: 500;
// // // // // //         }
// // // // // //         .sidebar-box {
// // // // // //           margin-bottom: 40px;
// // // // // //         }
// // // // // //         .sidebar-title {
// // // // // //           font-size: 1.2rem;
// // // // // //           font-weight: bold;
// // // // // //           text-transform: uppercase;
// // // // // //           letter-spacing: 1px;
// // // // // //           border-bottom: 2px solid #eee;
// // // // // //           padding-bottom: 10px;
// // // // // //           margin-bottom: 20px;
// // // // // //         }
// // // // // //         .sidebar-list {
// // // // // //           list-style: none;
// // // // // //           padding: 0;
// // // // // //         }
// // // // // //         .sidebar-list li {
// // // // // //           padding: 8px 0;
// // // // // //           font-size: 1.1rem;
// // // // // //           border-bottom: 1px solid #eee;
// // // // // //         }

// // // // // //         /* ** ADDED THIS TO VERTICALLY CENTER SIDEBAR ** */
// // // // // //         .col-lg-4.mt-5.mt-lg-0 {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           justify-content: center;
// // // // // //         }

// // // // // //         .news-section {
// // // // // //           background-color: #222;
// // // // // //           padding: 80px 0;
// // // // // //           color: white;
// // // // // //         }
// // // // // //         .news-title {
// // // // // //           font-size: 1.6rem;
// // // // // //           color: var(--gold);
// // // // // //           text-decoration: none;
// // // // // //           display: block;
// // // // // //           transition: 0.2s;
// // // // // //         }
// // // // // //         .news-title:hover {
// // // // // //           text-decoration: underline;
// // // // // //           color: #eac07a;
// // // // // //         }
// // // // // //         .related-grid {
// // // // // //           display: flex;
// // // // // //           flex-wrap: wrap;
// // // // // //           gap: 10px;
// // // // // //         }
// // // // // //         .related-pill {
// // // // // //           background: white;
// // // // // //           border: 1px solid #ddd;
// // // // // //           padding: 10px 20px;
// // // // // //           color: #333;
// // // // // //           text-decoration: none;
// // // // // //           font-weight: 500;
// // // // // //           transition: 0.2s;
// // // // // //         }
// // // // // //         .related-pill:hover {
// // // // // //           background: var(--navy);
// // // // // //           color: white;
// // // // // //           border-color: var(--navy);
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // import React, { useState, useEffect } from "react";
// // // // // import Head from "next/head";
// // // // // import Link from "next/link";
// // // // // import { useRouter } from "next/router";
// // // // // import { getAllCapabilitySubCategories } from "../../services/authService";

// // // // // export default function CapabilityDetail() {
// // // // //   const router = useRouter();
// // // // //   const { slug: type } = router.query;

// // // // //   const [allData, setAllData] = useState([]); // Sara data store karne ke liye
// // // // //   const [filteredSubCategories, setFilteredSubCategories] = useState([]); // Sirf current category ki sub-categories
// // // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   const staticNews = [
// // // // //     {
// // // // //       id: "news-1",
// // // // //       date: "July 23, 2025",
// // // // //       type: "Media Coverage",
// // // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // // //       source: "Law360",
// // // // //     },
// // // // //     {
// // // // //       id: "news-2",
// // // // //       date: "January 03, 2025",
// // // // //       type: "GT Advisory",
// // // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // // //       readTime: "2 min read",
// // // // //     },
// // // // //   ];

// // // // //   const staticRelatedCapabilities = [
// // // // //     "Venture Capital & Emerging Technology",
// // // // //     "Innovation & Artificial Intelligence",
// // // // //     "Government Law & Policy",
// // // // //     "Technology, Media & Telecommunications",
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     async function fetchCategories() {
// // // // //       try {
// // // // //         const res = await getAllCapabilitySubCategories();
// // // // //         if (res && res.data) {
// // // // //           setAllData(res.data);

// // // // //           // 1. URL slug se matching category find karna
// // // // //           let matched = null;
// // // // //           if (type) {
// // // // //             matched = res.data.find(
// // // // //               (cat) =>
// // // // //                 cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
// // // // //             );
// // // // //           }

// // // // //           // Default to first item if no match
// // // // //           const activeCat = matched || res.data[0];
// // // // //           setSelectedCategory(activeCat);

// // // // //           // 2. LOGIC: Sirf wahi sub-categories filter karna jo selected category name se match karein
// // // // //           if (activeCat) {
// // // // //             const subCats = res.data.filter(
// // // // //               (item) => item.categoryName === activeCat.categoryName
// // // // //             );
// // // // //             setFilteredSubCategories(subCats);
// // // // //           }
// // // // //         }
// // // // //         setLoading(false);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching categories:", error);
// // // // //         setLoading(false);
// // // // //       }
// // // // //     }

// // // // //     fetchCategories();
// // // // //   }, [type]);

// // // // //   if (loading || !selectedCategory)
// // // // //     return <div className="p-5 text-center">Loading...</div>;

// // // // //   return (
// // // // //     <>
// // // // //       <Head>
// // // // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // // // //         <link
// // // // //           rel="stylesheet"
// // // // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // // // //         />
// // // // //       </Head>

// // // // //       {/* HERO SECTION */}
// // // // //       <div
// // // // //         className="hero-section"
// // // // //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// // // // //       >
// // // // //         <div className="overlay"></div>
// // // // //         <div className="container hero-content text-center">
// // // // //           <h1 className="hero-title font-serif">{selectedCategory.categoryName}</h1>
// // // // //           <Link href="/attorneys">
// // // // //             <a className="btn-gold-outline mt-3">
// // // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // // //             </a>
// // // // //           </Link>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* CENTERED CONTENT WRAPPER */}
// // // // //       <div className="container py-5">
        
// // // // //         {/* 1. AREAS OF FOCUS (CENTERED) - Showing only related sub-categories */}
// // // // //         <div className="text-center mb-5">
// // // // //           <h4 className="sidebar-title font-serif d-inline-block px-4">Areas of Focus</h4>
// // // // //           <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
// // // // //             {filteredSubCategories.map((subcat) => {
// // // // //               if (!subcat || !subcat.subcategoryName) return null;
// // // // //               const subSlug = subcat.subcategoryName
// // // // //                 .toLowerCase()
// // // // //                 .trim()
// // // // //                 .replace(/\s+/g, "-");
              
// // // // //               return (
// // // // //                 <Link key={subcat.id} href={`/capability/area-detail/${subSlug}`}>
// // // // //                   <a className="focus-pill">
// // // // //                     {subcat.subcategoryName}
// // // // //                   </a>
// // // // //                 </Link>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* 2. DESCRIPTION (CENTERED) */}
// // // // //         <div className="row justify-content-center">
// // // // //           <div className="col-lg-9 text-center">
// // // // //             <p className="lead-text mb-5">{selectedCategory.description}</p>
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>

// // // // //       {/* 3. NEWS SECTION */}
// // // // //       <div className="news-section">
// // // // //         <div className="container">
// // // // //           <div className="text-center mb-5 border-bottom border-secondary pb-3">
// // // // //             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // // //           </div>

// // // // //           <div className="row">
// // // // //             {staticNews.map((news) => (
// // // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // // //                 <div className="d-flex flex-column text-center align-items-center">
// // // // //                   <div className="mb-2">
// // // // //                     <span className="text-white fw-bold text-uppercase small">{news.date}</span>
// // // // //                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
// // // // //                       {news.type}
// // // // //                     </span>
// // // // //                   </div>
// // // // //                   <Link href={`/news/${news.id}`}>
// // // // //                     <a className="news-title font-serif">{news.title}</a>
// // // // //                   </Link>
// // // // //                   <div className="text-muted small mt-1 fst-italic">
// // // // //                     {news.readTime || news.source || "Read More"}
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <hr className="border-secondary opacity-25 mt-3 mx-auto w-75" />
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="text-center mt-4">
// // // // //             <Link href="/news">
// // // // //               <a
// // // // //                 className="text-white fw-bold small text-uppercase"
// // // // //                 style={{ letterSpacing: "1px" }}
// // // // //               >
// // // // //                 View More +
// // // // //               </a>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* 4. RELATED CAPABILITIES */}
// // // // //       <div className="container py-5 mb-5 text-center">
// // // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // // //         <div className="related-grid justify-content-center">
// // // // //           {staticRelatedCapabilities.map((cap, idx) => (
// // // // //             <Link
// // // // //               key={idx}
// // // // //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// // // // //             >
// // // // //               <a className="related-pill">{cap}</a>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         :global(:root) {
// // // // //           --gold: #de9f57;
// // // // //           --navy: #002855;
// // // // //         }
// // // // //         .text-gold {
// // // // //           color: var(--gold) !important;
// // // // //         }
// // // // //         .font-serif {
// // // // //           font-family: "Georgia", "Times New Roman", serif;
// // // // //         }
// // // // //         .hero-section {
// // // // //           background-size: cover;
// // // // //           background-position: center;
// // // // //           height: 60vh;
// // // // //           min-height: 450px;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           position: relative;
// // // // //           margin-top: -80px;
// // // // //         }
// // // // //         .overlay {
// // // // //           background: rgba(0, 40, 85, 0.7);
// // // // //           position: absolute;
// // // // //           inset: 0;
// // // // //         }
// // // // //         .hero-content {
// // // // //           position: relative;
// // // // //           z-index: 2;
// // // // //           color: white;
// // // // //           padding-top: 100px;
// // // // //         }
// // // // //         .hero-title {
// // // // //           font-size: clamp(2rem, 3.5vw, 3rem);
// // // // //           font-weight: 700;
// // // // //           margin-bottom: 30px;
// // // // //           line-height: 1.2;
// // // // //           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
// // // // //         }
// // // // //         .btn-gold-outline {
// // // // //           border: 2px solid white;
// // // // //           color: white;
// // // // //           padding: 12px 30px;
// // // // //           font-weight: bold;
// // // // //           letter-spacing: 2px;
// // // // //           transition: 0.3s;
// // // // //           text-decoration: none;
// // // // //           display: inline-block;
// // // // //         }
// // // // //         .btn-gold-outline:hover {
// // // // //           background: white;
// // // // //           color: var(--navy);
// // // // //         }
// // // // //         .lead-text {
// // // // //           font-size: 1.25rem;
// // // // //           line-height: 1.8;
// // // // //           color: #333;
// // // // //           font-weight: 400;
// // // // //         }
// // // // //         .sidebar-title {
// // // // //           font-size: 1.5rem;
// // // // //           font-weight: bold;
// // // // //           text-transform: uppercase;
// // // // //           letter-spacing: 2px;
// // // // //           border-bottom: 3px solid var(--gold);
// // // // //           padding-bottom: 10px;
// // // // //         }
// // // // //         .focus-pill {
// // // // //           padding: 8px 20px;
// // // // //           border: 1px solid #ddd;
// // // // //           border-radius: 4px;
// // // // //           text-decoration: none;
// // // // //           color: #444;
// // // // //           transition: 0.3s;
// // // // //           font-weight: 500;
// // // // //           background: #f9f9f9;
// // // // //         }
// // // // //         .focus-pill:hover {
// // // // //           background: var(--navy);
// // // // //           color: white;
// // // // //           border-color: var(--navy);
// // // // //         }
// // // // //         .news-section {
// // // // //           background-color: #1a1a1a;
// // // // //           padding: 80px 0;
// // // // //           color: white;
// // // // //         }
// // // // //         .news-title {
// // // // //           font-size: 1.8rem;
// // // // //           color: var(--gold);
// // // // //           text-decoration: none;
// // // // //           display: block;
// // // // //           transition: 0.2s;
// // // // //           margin: 10px 0;
// // // // //         }
// // // // //         .news-title:hover {
// // // // //           color: #eac07a;
// // // // //         }
// // // // //         .related-grid {
// // // // //           display: flex;
// // // // //           flex-wrap: wrap;
// // // // //           gap: 15px;
// // // // //         }
// // // // //         .related-pill {
// // // // //           background: white;
// // // // //           border: 1px solid #ddd;
// // // // //           padding: 12px 25px;
// // // // //           color: #333;
// // // // //           text-decoration: none;
// // // // //           font-weight: 500;
// // // // //           transition: 0.2s;
// // // // //         }
// // // // //         .related-pill:hover {
// // // // //           background: var(--navy);
// // // // //           color: white;
// // // // //           border-color: var(--navy);
// // // // //         }
// // // // //       `}</style>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // import React, { useState, useEffect } from "react";
// // // // import Head from "next/head";
// // // // import Link from "next/link";
// // // // import { useRouter } from "next/router";
// // // // import { getAllCapabilitySubCategories } from "../../services/authService";

// // // // export default function CapabilityDetail() {
// // // //   const router = useRouter();
// // // //   const { slug: type } = router.query;

// // // //   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
// // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   const staticNews = [
// // // //     {
// // // //       id: "news-1",
// // // //       date: "July 23, 2025",
// // // //       type: "Media Coverage",
// // // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // // //       source: "Law360",
// // // //     },
// // // //     {
// // // //       id: "news-2",
// // // //       date: "January 03, 2025",
// // // //       type: "GT Advisory",
// // // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // // //       readTime: "2 min read",
// // // //     },
// // // //   ];

// // // //   const staticRelatedCapabilities = [
// // // //     "Venture Capital & Emerging Technology",
// // // //     "Innovation & Artificial Intelligence",
// // // //     "Government Law & Policy",
// // // //     "Technology, Media & Telecommunications",
// // // //   ];

// // // //   useEffect(() => {
// // // //     async function fetchCategories() {
// // // //       try {
// // // //         const res = await getAllCapabilitySubCategories();
// // // //         if (res && res.data) {
// // // //           let matched = null;
// // // //           if (type) {
// // // //             matched = res.data.find(
// // // //               (cat) =>
// // // //                 cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
// // // //             );
// // // //           }

// // // //           const activeCat = matched || res.data[0];
// // // //           setSelectedCategory(activeCat);

// // // //           if (activeCat) {
// // // //             const subCats = res.data.filter(
// // // //               (item) => item.categoryName === activeCat.categoryName
// // // //             );
// // // //             setFilteredSubCategories(subCats);
// // // //           }
// // // //         }
// // // //         setLoading(false);
// // // //       } catch (error) {
// // // //         console.error("Error fetching categories:", error);
// // // //         setLoading(false);
// // // //       }
// // // //     }

// // // //     fetchCategories();
// // // //   }, [type]);

// // // //   if (loading || !selectedCategory)
// // // //     return <div className="p-5 text-center">Loading...</div>;

// // // //   return (
// // // //     <>
// // // //       <Head>
// // // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // // //         <link
// // // //           rel="stylesheet"
// // // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // // //         />
// // // //       </Head>

// // // //       {/* HERO SECTION */}
// // // //       <div
// // // //         className="hero-section"
// // // //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// // // //       >
// // // //         <div className="overlay"></div>
// // // //         <div className="container hero-content text-center">
// // // //           <h1 className="hero-title font-serif">{selectedCategory.categoryName}</h1>
// // // //           <Link href="/attorneys">
// // // //             <a className="btn-gold-outline mt-3">
// // // //               MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
// // // //             </a>
// // // //           </Link>
// // // //         </div>
// // // //       </div>

// // // //       {/* MAIN CONTENT SECTION: CENTERED LAYOUT */}
// // // //       <div className="container py-5">
        
// // // //         {/* 1. AREAS OF FOCUS (Centered) */}
// // // //         <div className="text-center mb-5">
// // // //           <h4 className="sidebar-title font-serif mb-4">Areas of Focus</h4>
// // // //           <div className="d-flex justify-content-center">
// // // //             <ul className="list-unstyled text-start">
// // // //               {filteredSubCategories.map((subcat) => {
// // // //                 if (!subcat || !subcat.subcategoryName) return null;
// // // //                 const subSlug = subcat.subcategoryName
// // // //                   .toLowerCase()
// // // //                   .trim()
// // // //                   .replace(/\s+/g, "-");
// // // //                 return (
// // // //                   <li key={subcat.id} className="mb-2">
// // // //                     <Link href={`/capability/area-detail/${subSlug}`}>
// // // //                       <a className="focus-link">
// // // //                         <i className="bi bi-caret-right-fill text-gold me-2"></i>
// // // //                         {subcat.subcategoryName}
// // // //                       </a>
// // // //                     </Link>
// // // //                   </li>
// // // //                 );
// // // //               })}
// // // //             </ul>
// // // //           </div>
// // // //         </div>

// // // //         {/* 2. DESCRIPTION (Centered below Focus) */}
// // // //         <div className="row justify-content-center">
// // // //           <div className="col-lg-10 text-center">
// // // //             <p className="lead-text">{selectedCategory.description}</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* NEWS SECTION (Unchanged) */}
// // // //       <div className="news-section">
// // // //         <div className="container">
// // // //           <div className="mb-5 border-bottom border-secondary pb-3">
// // // //             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
// // // //           </div>
// // // //           <div className="row">
// // // //             {staticNews.map((news) => (
// // // //               <div key={news.id} className="col-12 mb-4 news-item">
// // // //                 <div className="d-flex flex-column text-start">
// // // //                   <div className="mb-2">
// // // //                     <span className="text-white fw-bold text-uppercase small">{news.date}</span>
// // // //                     <span className="text-gold ms-2 small border border-secondary px-2 py-1">
// // // //                       {news.type}
// // // //                     </span>
// // // //                   </div>
// // // //                   <Link href={`/news/${news.id}`}>
// // // //                     <a className="news-title font-serif">{news.title}</a>
// // // //                   </Link>
// // // //                   <div className="text-muted small mt-1 fst-italic">
// // // //                     {news.readTime || news.source || "Read More"}
// // // //                   </div>
// // // //                 </div>
// // // //                 <hr className="border-secondary opacity-25 mt-3" />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div className="text-start mt-3">
// // // //             <Link href="/news">
// // // //               <a className="text-white fw-bold small text-uppercase" style={{ letterSpacing: "1px" }}>
// // // //                 View More +
// // // //               </a>
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* RELATED CAPABILITIES (Unchanged) */}
// // // //       <div className="container py-5 mb-5">
// // // //         <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
// // // //         <div className="related-grid text-start">
// // // //           {staticRelatedCapabilities.map((cap, idx) => (
// // // //             <Link
// // // //               key={idx}
// // // //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// // // //             >
// // // //               <a className="related-pill">{cap}</a>
// // // //             </Link>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         :global(:root) {
// // // //           --gold: #de9f57;
// // // //           --navy: #002855;
// // // //         }
// // // //         .text-gold { color: var(--gold) !important; }
// // // //         .font-serif { font-family: "Georgia", "Times New Roman", serif; }
        
// // // //         .hero-section {
// // // //           background-size: cover;
// // // //           background-position: center;
// // // //           height: 60vh;
// // // //           min-height: 450px;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           position: relative;
// // // //           margin-top: -80px;
// // // //         }
// // // //         .overlay { background: rgba(0, 40, 85, 0.7); position: absolute; inset: 0; }
// // // //         .hero-content { position: relative; z-index: 2; color: white; padding-top: 100px; }
// // // //         .hero-title { font-size: clamp(2.2rem, 3.8vw, 3.2rem); font-weight: 700; }
        
// // // //         .btn-gold-outline {
// // // //           border: 2px solid white;
// // // //           color: white;
// // // //           padding: 12px 30px;
// // // //           font-weight: bold;
// // // //           text-decoration: none;
// // // //           display: inline-block;
// // // //           transition: 0.3s;
// // // //         }
// // // //         .btn-gold-outline:hover { background: white; color: var(--navy); }

// // // //         .sidebar-title {
// // // //           font-size: 1.5rem;
// // // //           font-weight: bold;
// // // //           text-transform: uppercase;
// // // //           border-bottom: 3px solid var(--gold);
// // // //           display: inline-block;
// // // //           padding-bottom: 5px;
// // // //           letter-spacing: 1px;
// // // //         }
// // // //         .focus-link {
// // // //           font-size: 1.2rem;
// // // //           color: #333;
// // // //           text-decoration: none;
// // // //           transition: 0.2s;
// // // //         }
// // // //         .focus-link:hover { color: var(--gold); }

// // // //         .lead-text {
// // // //           font-size: 1.25rem;
// // // //           line-height: 1.8;
// // // //           color: #444;
// // // //         }

// // // //         .news-section { background-color: #111; padding: 80px 0; color: white; }
// // // //         .news-title {
// // // //           font-size: 1.7rem;
// // // //           color: var(--gold);
// // // //           text-decoration: none;
// // // //           display: block;
// // // //         }
// // // //         .news-title:hover { text-decoration: underline; }

// // // //         .related-grid { display: flex; flex-wrap: wrap; gap: 10px; }
// // // //         .related-pill {
// // // //           background: white;
// // // //           border: 1px solid #ddd;
// // // //           padding: 10px 20px;
// // // //           color: #333;
// // // //           text-decoration: none;
// // // //           font-weight: 500;
// // // //         }
// // // //         .related-pill:hover { background: var(--navy); color: white; }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // }


// // // import React, { useState, useEffect } from "react";
// // // import Head from "next/head";
// // // import Link from "next/link";
// // // import { useRouter } from "next/router";
// // // import { getAllCapabilitySubCategories } from "../../services/authService";

// // // export default function CapabilityDetail() {
// // //   const router = useRouter();
// // //   const { slug: type } = router.query;

// // //   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
// // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   // Static News (As per previous code)
// // //   const staticNews = [
// // //     {
// // //       id: "news-1",
// // //       date: "July 23, 2025",
// // //       type: "Media Coverage",
// // //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// // //       source: "Law360",
// // //     },
// // //     {
// // //       id: "news-2",
// // //       date: "January 03, 2025",
// // //       type: "GT Advisory",
// // //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// // //       readTime: "2 min read",
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     async function fetchCategories() {
// // //       try {
// // //         const res = await getAllCapabilitySubCategories();
// // //         if (res && res.data) {
// // //           let matched = null;
// // //           if (type) {
// // //             matched = res.data.find(
// // //               (cat) =>
// // //                 cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
// // //             );
// // //           }

// // //           const activeCat = matched || res.data[0];
// // //           setSelectedCategory(activeCat);

// // //           if (activeCat) {
// // //             const subCats = res.data.filter(
// // //               (item) => item.categoryName === activeCat.categoryName
// // //             );
// // //             setFilteredSubCategories(subCats);
// // //           }
// // //         }
// // //         setLoading(false);
// // //       } catch (error) {
// // //         console.error("Error fetching categories:", error);
// // //         setLoading(false);
// // //       }
// // //     }
// // //     fetchCategories();
// // //   }, [type]);

// // //   if (loading || !selectedCategory)
// // //     return <div className="p-5 text-center">Loading...</div>;

// // //   return (
// // //     <>
// // //       <Head>
// // //         <title>{selectedCategory.categoryName} | GT Law</title>
// // //         <link
// // //           rel="stylesheet"
// // //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// // //         />
// // //       </Head>

// // //       {/* HERO SECTION - Matching Screenshot */}
// // //       <div
// // //         className="hero-section"
// // //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// // //       >
// // //         <div className="overlay"></div>
// // //         <div className="container hero-content text-center pt-5 mt-5">
// // //           <Link href="/attorneys">
// // //             <a className="btn-meet-team">
// // //               MEET THE TEAM <i className="bi bi-chevron-right ms-1"></i>
// // //             </a>
// // //           </Link>
// // //         </div>
// // //       </div>

// // //       {/* MAIN CONTENT WRAPPER */}
// // //       <div className="container py-5 me-5  text-center">
       
      

// // //           {/* RIGHT CONTENT - Areas of Focus List */}
// // //           <div className="col-lg-9 ps-lg-5">
// // //             <h2 className="content-title font-serif mb-4 text-center">Areas of Focus</h2>
            
// // //             {/* 2 Column Responsive List */}
// // //             <div className="areas-grid ">
// // //               {filteredSubCategories.map((subcat) => {
// // //                 if (!subcat || !subcat.subcategoryName) return null;
// // //                 const subSlug = subcat.subcategoryName
// // //                   .toLowerCase()
// // //                   .trim()
// // //                   .replace(/\s+/g, "-");
// // //                 return (
// // //                   <div key={subcat.id} className="area-item text center">
// // //                     <span className="bullet">•</span>
// // //                     <Link href={`/capability/area-detail/${subSlug}`}>
// // //                       <a className="area-link text-center">{subcat.subcategoryName}</a>
// // //                     </Link>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>

// // //             {/* Description (Optional, placing it below for better UI) */}
// // //             <div className="mt-5 pt-4 border-top">
// // //                 <p className="description-text">{selectedCategory.description}</p>
// // //             </div>
// // //           </div>
// // //         </div>
      

// // //       {/* NEWS SECTION (Retaining from previous) */}
// // //       <div className="news-section-dark">
// // //         <div className="container">
// // //           <h3 className="text-white font-serif mb-4 pb-3 border-bottom border-secondary">
// // //             News, Insights & Events
// // //           </h3>
// // //           <div className="row">
// // //             {staticNews.map((news) => (
// // //               <div key={news.id} className="col-12 mb-4 border-bottom border-secondary pb-3">
// // //                 <p className="news-meta mb-1">
// // //                   <span className="text-white small fw-bold">{news.date}</span>
// // //                   <span className="text-gold ms-3 small">{news.type}</span>
// // //                 </p>
// // //                 <h4 className="news-link-title font-serif">{news.title}</h4>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         :global(:root) {
// // //           --gold: #de9f57;
// // //           --navy: #002855;
// // //         }
// // //         .font-serif { font-family: "Georgia", serif; }
        
// // //         /* Hero */
// // //         .hero-section {
// // //           height: 350px;
// // //           background-size: cover;
// // //           background-position: center;
// // //           position: relative;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           margin-top: -80px;
// // //         }
// // //         .overlay { background: rgba(0,0,0,0.3); position: absolute; inset: 0; }
// // //         .btn-meet-team {
// // //           position: relative;
// // //           z-index: 2;
// // //           border: 2px solid var(--gold);
// // //           color: white;
// // //           padding: 12px 30px;
// // //           text-decoration: none;
// // //           font-weight: bold;
// // //           font-size: 0.9rem;
// // //           letter-spacing: 1px;
// // //           background: rgba(0,0,0,0.2);
// // //         }

// // //         /* Sidebar */
// // //         .sidebar-container { border-top: 1px solid #ccc; }
// // //         .sidebar-link {
// // //           padding: 15px 0;
// // //           border-bottom: 1px solid #ccc;
// // //           font-weight: bold;
// // //           font-size: 0.85rem;
// // //           color: #333;
// // //           cursor: pointer;
// // //           letter-spacing: 0.5px;
// // //         }
// // //         .sidebar-link.active { color: #333; }
// // //         .sidebar-btn-black {
// // //           display: block;
// // //           background: black;
// // //           color: white;
// // //           padding: 15px;
// // //           text-decoration: none;
// // //           font-weight: bold;
// // //           font-size: 0.85rem;
// // //           margin-top: 5px;
// // //         }

// // //         /* Areas of Focus Main Content */
// // //         .content-title { font-size: 2.2rem; font-weight: bold; color: #000; }
        
// // //         .areas-grid {
// // //           display: grid;
// // //           grid-template-columns: 1fr 1fr; /* 2 Columns as per screenshot */
// // //           gap: 15px 40px;
// // //         }
// // //         .area-item { display: flex; align-items: flex-start; align-center;}
// // //         .bullet { color: var(--gold); font-size: 1.5rem; line-height: 1; margin-right: 10px; }
// // //         .area-link {
// // //           color: var(--gold);
// // //           text-decoration: underline;
// // //           font-size: 1.05rem;
// // //           line-height: 1.4;
// // //         }
// // //         .area-link:hover { color: var(--navy); }

// // //         .description-text { font-size: 1.1rem; line-height: 1.7; color: #444; }

// // //         /* News Section */
// // //         .news-section-dark { background: #1a1a1a; padding: 60px 0; }
// // //         .news-link-title { color: var(--gold); font-size: 1.4rem; cursor: pointer; }
// // //         .text-gold { color: var(--gold); }

// // //         @media (max-width: 768px) {
// // //           .areas-grid { grid-template-columns: 1fr; }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }



// // import React, { useState, useEffect } from "react";
// // import Head from "next/head";
// // import Link from "next/link";
// // import { useRouter } from "next/router";
// // import { getAllCapabilitySubCategories } from "../../services/authService";

// // export default function CapabilityDetail() {
// //   const router = useRouter();
// //   const { slug: type } = router.query;

// //   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // Static News 
// //   const staticNews = [
// //     {
// //       id: "news-1",
// //       date: "July 23, 2025",
// //       type: "Media Coverage",
// //       title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
// //       source: "Law360",
// //     },
// //     {
// //       id: "news-2",
// //       date: "January 03, 2025",
// //       type: "GT Advisory",
// //       title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
// //       readTime: "2 min read",
// //     },
// //   ];

// //   // Related Capabilities Static Data
// //   const staticRelatedCapabilities = [
// //     "Venture Capital & Emerging Technology",
// //     "Innovation & Artificial Intelligence",
// //     "Government Law & Policy",
// //     "Technology, Media & Telecommunications",
// //   ];

// //   useEffect(() => {
// //     async function fetchCategories() {
// //       try {
// //         const res = await getAllCapabilitySubCategories();
// //         if (res && res.data) {
// //           let matched = null;
// //           if (type) {
// //             matched = res.data.find(
// //               (cat) =>
// //                 cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
// //             );
// //           }

// //           const activeCat = matched || res.data[0];
// //           setSelectedCategory(activeCat);

// //           if (activeCat) {
// //             const subCats = res.data.filter(
// //               (item) => item.categoryName === activeCat.categoryName
// //             );
// //             setFilteredSubCategories(subCats);
// //           }
// //         }
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching categories:", error);
// //         setLoading(false);
// //       }
// //     }
// //     fetchCategories();
// //   }, [type]);

// //   if (loading || !selectedCategory)
// //     return <div className="p-5 text-center">Loading...</div>;

// //   return (
// //     <>
// //       <Head>
// //         <title>{selectedCategory.categoryName} | GT Law</title>
// //         <link
// //           rel="stylesheet"
// //           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
// //         />
// //       </Head>

// //       {/* HERO SECTION */}
// //       <div
// //         className="hero-section"
// //         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
// //       >
// //         <div className="overlay"></div>
// //         <div className="container hero-content text-center pt-5 mt-5">
// //           <Link href="/attorneys">
// //             <a className="btn-meet-team">
// //               MEET THE TEAM <i className="bi bi-chevron-right ms-1"></i>
// //             </a>
// //           </Link>
// //         </div>
// //       </div>

// //       {/* MAIN CONTENT WRAPPER */}
// //       <div className="container py-5 text-center">
// //         <div className="row justify-content-center">
// //           <div className="col-lg-12">
// //             <h2 className="content-title font-serif mb-4">Areas of Focus</h2>
            
// //             {/* Sub-categories with Smaller Gap */}
// //             <div className="areas-grid">
// //               {filteredSubCategories.map((subcat) => {
// //                 if (!subcat || !subcat.subcategoryName) return null;
// //                 const subSlug = subcat.subcategoryName
// //                   .toLowerCase()
// //                   .trim()
// //                   .replace(/\s+/g, "-");
// //                 return (
// //                   <div key={subcat.id} className="area-item">
// //                     <span className="bullet">•</span>
// //                     <Link href={`/capability/area-detail/${subSlug}`}>
// //                       <a className="area-link">{subcat.subcategoryName}</a>
// //                     </Link>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* Description Section */}
// //             <div className="mt-5 pt-4 border-top mx-auto" style={{ maxWidth: "800px" }}>
// //                 <p className="description-text">{selectedCategory.description}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* NEWS SECTION */}
// //       <div className="news-section-dark">
// //         <div className="container">
// //           <h3 className="text-white font-serif mb-4 pb-3 border-bottom border-secondary">
// //             News, Insights & Events
// //           </h3>
// //           <div className="row">
// //             {staticNews.map((news) => (
// //               <div key={news.id} className="col-12 mb-4 border-bottom border-secondary pb-3 text-start">
// //                 <p className="news-meta mb-1">
// //                   <span className="text-white small fw-bold">{news.date}</span>
// //                   <span className="text-gold ms-3 small">{news.type}</span>
// //                 </p>
// //                 <h4 className="news-link-title font-serif">{news.title}</h4>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* RELATED CAPABILITIES SECTION (After News) */}
// //       <div className="container py-5 mb-5">
// //         <h3 className="font-serif fw-bold mb-4 text-center">Related Capabilities</h3>
// //         <div className="related-grid">
// //           {staticRelatedCapabilities.map((cap, idx) => (
// //             <Link
// //               key={idx}
// //               href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
// //             >
// //               <a className="related-pill">{cap}</a>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         :global(:root) {
// //           --gold: #de9f57;
// //           --navy: #002855;
// //         }
// //         .font-serif { font-family: "Georgia", serif; }
        
// //         .hero-section {
// //           height: 350px;
// //           background-size: cover;
// //           background-position: center;
// //           position: relative;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           margin-top: -80px;
// //         }
// //         .overlay { background: rgba(0,0,0,0.3); position: absolute; inset: 0; }
// //         .btn-meet-team {
// //           position: relative;
// //           z-index: 2;
// //           border: 2px solid var(--gold);
// //           color: white;
// //           padding: 12px 30px;
// //           text-decoration: none;
// //           font-weight: bold;
// //           font-size: 0.9rem;
// //           letter-spacing: 1px;
// //           background: rgba(0,0,0,0.2);
// //         }

// //         .content-title { 
// //             font-size: 2.5rem; 
// //             font-weight: bold; 
// //             color: #000; 
// //         }
        
// //         /* Grid with smaller gap (40px horizontal) */
// //         .areas-grid {
// //           display: grid;
// //           grid-template-columns: repeat(2, auto);
// //           gap: 12px 40px; 
// //           justify-content: center;
// //           margin-top: 30px;
// //         }
        
// //         .area-item { 
// //             display: flex; 
// //             align-items: center; 
// //             text-align: left;
// //         }

// //         .bullet { 
// //             color: var(--gold); 
// //             font-size: 1.5rem; 
// //             line-height: 1; 
// //             margin-right: 10px; 
// //         }

// //         .area-link {
// //           color: var(--gold);
// //           text-decoration: underline;
// //           font-size: 1.1rem;
// //           line-height: 1.4;
// //         }
        
// //         .area-link:hover { color: var(--navy); }

// //         .description-text { 
// //             font-size: 1.2rem; 
// //             line-height: 1.8; 
// //             color: #444; 
// //         }

// //         .news-section-dark { background: #1a1a1a; padding: 60px 0; }
// //         .news-link-title { color: var(--gold); font-size: 1.4rem; cursor: pointer; }
// //         .text-gold { color: var(--gold); }

// //         /* Related Capabilities Styles */
// //         .related-grid {
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 12px;
// //           justify-content: center;
// //         }
// //         .related-pill {
// //           background: white;
// //           border: 1px solid #ddd;
// //           padding: 10px 22px;
// //           color: #333;
// //           text-decoration: none;
// //           font-weight: 500;
// //           font-size: 0.95rem;
// //           transition: 0.3s;
// //         }
// //         .related-pill:hover {
// //           background: var(--navy);
// //           color: white;
// //           border-color: var(--navy);
// //         }

// //         @media (max-width: 768px) {
// //           .areas-grid { 
// //             grid-template-columns: 1fr; 
// //             gap: 12px 0;
// //           }
// //           .area-item {
// //             justify-content: center;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { getAllCapabilitySubCategories } from "../../services/authService";

// export default function CapabilityDetail() {
//   const router = useRouter();
//   const { slug: type } = router.query;

//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
//   const [relatedCategories, setRelatedCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

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

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const res = await getAllCapabilitySubCategories();
//         if (res?.data?.length) {
//           setCategories(res.data);

//           // Selected category
//           const matched = res.data.find(
//             (cat) =>
//               cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
//           );
//           const activeCat = matched || res.data[0];
//           setSelectedCategory(activeCat);

//           // Subcategories for this category only
//           const subCats = res.data.filter(
//             (item) => item.categoryName === activeCat.categoryName
//           );
//           setFilteredSubCategories(subCats);

//           // Related categories: all except selected
//           const related = res.data
//             .filter((item) => item.categoryName !== activeCat.categoryName)
//             .map((item) => item.categoryName);
//           // Unique related categories
//           setRelatedCategories([...new Set(related)]);
//         }
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (type) fetchCategories();
//   }, [type]);

//   if (loading) return <div className="p-5 text-center">Loading...</div>;
//   if (!selectedCategory) return null;

//   return (
//     <>
//       <Head>
//         <title>{selectedCategory.categoryName} | GT Law</title>
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
//         />
//       </Head>

//       {/* HERO SECTION */}
//       <div
//         className="hero-section"
//         style={{ backgroundImage: `url(${selectedCategory.bannerImage})` }}
//       >
//         <div className="overlay"></div>
//         <div className="container hero-content text-center pt-5 mt-5">
//           <Link href="/attorneys">
//             <a className="btn-meet-team">
//               MEET THE TEAM <i className="bi bi-chevron-right ms-1"></i>
//             </a>
//           </Link>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="container py-5 text-center">
//         <div className="row justify-content-center">
//           <div className="col-lg-12">
//             <h2 className="content-title font-serif mb-4">Areas of Focus</h2>
            
//             <div className="areas-grid">
//               {filteredSubCategories.map((subcat) => {
//                 if (!subcat?.subcategoryName) return null;
//                 const subSlug = subcat.subcategoryName
//                   .toLowerCase()
//                   .trim()
//                   .replace(/\s+/g, "-");
//                 return (
//                   <div key={subcat.id} className="area-item">
//                     <span className="bullet">•</span>
//                     <Link href={`/capability/area-detail/${subSlug}`}>
//                       <a className="area-link">{subcat.subcategoryName}</a>
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>

//             <div
//               className="mt-5 pt-4 border-top mx-auto"
//               style={{ maxWidth: "800px" }}
//             >
//               <p className="description-text">{selectedCategory.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NEWS SECTION */}
//       <div className="news-section-dark">
//         <div className="container">
//           <h3 className="text-white font-serif mb-4 pb-3 border-bottom border-secondary">
//             News, Insights & Events
//           </h3>
//           <div className="row">
//             {staticNews.map((news) => (
//               <div
//                 key={news.id}
//                 className="col-12 mb-4 border-bottom border-secondary pb-3 text-start"
//               >
//                 <p className="news-meta mb-1">
//                   <span className="text-white small fw-bold">{news.date}</span>
//                   <span className="text-gold ms-3 small">{news.type}</span>
//                 </p>
//                 <h4 className="news-link-title font-serif">{news.title}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* RELATED CAPABILITIES */}
//       <div className="container py-5 mb-5">
//         <h3 className="font-serif fw-bold mb-4 text-center">Related Capabilities</h3>
//         <div className="related-grid">
//           {relatedCategories.map((cap, idx) => (
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
//         .font-serif { font-family: "Georgia", serif; }
        
//         .hero-section {
//           height: 350px;
//           background-size: cover;
//           background-position: center;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-top: -80px;
//         }
//         .overlay { background: rgba(0,0,0,0.3); position: absolute; inset: 0; }
//         .btn-meet-team {
//           position: relative;
//           z-index: 2;
//           border: 2px solid var(--gold);
//           color: white;
//           padding: 12px 30px;
//           text-decoration: none;
//           font-weight: bold;
//           font-size: 0.9rem;
//           letter-spacing: 1px;
//           background: rgba(0,0,0,0.2);
//         }

//         .content-title { 
//           font-size: 2.5rem; 
//           font-weight: bold; 
//           color: #000; 
//         }
//         .areas-grid {
//           display: grid;
//           grid-template-columns: repeat(2, auto);
//           gap: 12px 40px; 
//           justify-content: center;
//           margin-top: 30px;
//         }
//         .area-item { display: flex; align-items: center; text-align: left; }
//         .bullet { color: var(--gold); font-size: 1.5rem; line-height: 1; margin-right: 10px; }
//         .area-link { color: var(--gold); text-decoration: underline; font-size: 1.1rem; line-height: 1.4; }
//         .area-link:hover { color: var(--navy); }
//         .description-text { font-size: 1.2rem; line-height: 1.8; color: #444; }

//         .news-section-dark { background: #1a1a1a; padding: 60px 0; }
//         .news-link-title { color: var(--gold); font-size: 1.4rem; cursor: pointer; }
//         .text-gold { color: var(--gold); }

//         .related-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           justify-content: center;
//         }
//         .related-pill {
//           background: white;
//           border: 1px solid #ddd;
//           padding: 10px 22px;
//           color: #333;
//           text-decoration: none;
//           font-weight: 500;
//           font-size: 0.95rem;
//           transition: 0.3s;
//         }
//         .related-pill:hover {
//           background: var(--navy);
//           color: white;
//           border-color: var(--navy);
//         }

//         @media (max-width: 768px) {
//           .areas-grid { grid-template-columns: 1fr; gap: 12px 0; }
//           .area-item { justify-content: center; }
//         }
//       `}</style>
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { getAllCapabilitySubCategories, getAllCapabilityCategoryCMS, IMG_URL } from "../../services/authService";

// export default function CapabilityDetail() {
//   const router = useRouter();
//   const { slug: type } = router.query;

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [cmsData, setCmsData] = useState(null);
//   const [loading, setLoading] = useState(true);

//  useEffect(() => {
//   async function fetchData() {
//     if (!type) return;
//     try {
//       const res = await getAllCapabilitySubCategories();
//       const cmsRes = await getAllCapabilityCategoryCMS(); // Updated Call

//       if (res?.data) {
//         const matched = res.data.find(cat => 
//           cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
//         );
//         const current = matched || res.data[0];
//         setSelectedCategory(current);

//         // CMS Match logic
//         if (cmsRes?.success && cmsRes.data) {
//           // Yahan check karein ki CMS data mein 'categoryId' field hai ya 'selectCategory'
//           const matchedCMS = cmsRes.data.find(cms => 
//              Number(cms.categoryId) === Number(current.categoryId) || 
//              cms.selectCategory === current.categoryName
//           );
//           if (matchedCMS) {
//             console.log("✅ Category CMS Match Found:", matchedCMS);
//             setCmsData(matchedCMS);
//           }
//         }
//       }
//     } catch (err) {
//       console.error("❌ Error fetching category data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }
//   fetchData();
// }, [type]);
//   if (loading) return <div className="p-5 text-center">Loading Content...</div>;
//   if (!selectedCategory) return null;

//   const bannerUrl = selectedCategory.bannerImage?.startsWith("uploads")
//     ? `${IMG_URL}/${selectedCategory.bannerImage}` : selectedCategory.bannerImage;

//   return (
//     <>
//       <Head><title>{selectedCategory.categoryName} | Core Law</title></Head>

//       {/* HERO SECTION */}
//       <div className="hero-section" style={{ backgroundImage: `url(${bannerUrl})` }}>
//         <div className="overlay" />
//         <div className="container hero-content text-center text-white pt-5">
//           <h1 className="display-4 fw-bold font-serif pt-5">{selectedCategory.categoryName}</h1>
//         </div>
//       </div>

//       {/* CMS CONTENT SECTION (Admin selection area) */}
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <h2 className="font-serif fw-bold text-dark mb-4 text-center">Area of Focus</h2>
            
//             {cmsData ? (
//               // Admin ne jo Text Editor mein likha hai wo yahan dikhega
//               <div 
//                 className="cms-render-box shadow-sm p-4 bg-white border-top border-gold"
//                 dangerouslySetInnerHTML={{ __html: cmsData.textEditorContent || cmsData.content }} 
//               />
//             ) : (
//               <div className="text-center py-5 border rounded bg-light">
//                 <p className="text-muted">No specific CMS content available for this category.</p>
//                 <p className="small">{selectedCategory.description}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hero-section { height: 400px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; margin-top: -80px; }
//         .overlay { position: absolute; inset: 0; background: rgba(0, 51, 102, 0.7); }
//         .hero-content { position: relative; z-index: 2; width: 100%; }
//         .border-gold { border-top: 4px solid #cfa144 !important; }
//         .cms-render-box { min-height: 200px; line-height: 1.8; color: #333; }
//         .cms-render-box :global(p) { margin-bottom: 1.5rem; font-size: 1.1rem; }
//         .cms-render-box :global(ul) { padding-left: 1.2rem; }
//         .cms-render-box :global(li) { margin-bottom: 0.5rem; }
//         .font-serif { font-family: serif; }
//       `}</style>
//     </>
//   );
// }

// //capability details page 
// //capability/[slug].js
// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/router";
// // API imports
// import { 
//   getAllCapabilitySubCategories, 
//   getAllCapabilityCategoryCMS, 
//   IMG_URL 
// } from "../../services/authService";

// export default function CapabilityDetail() {
//   const router = useRouter();
//   const { slug: type } = router.query;

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [cmsData, setCmsData] = useState(null);
//   const [relatedCapabilities, setRelatedCapabilities] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= STATIC NEWS DATA ================= */
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

//   useEffect(() => {
//     async function fetchData() {
//       if (!type) return;
//       setLoading(true);
//       try {
//         // 1. Fetch Categories/Subcategories
//         const res = await getAllCapabilitySubCategories();
//         // 2. Fetch Category CMS Data
//         const cmsRes = await getAllCapabilityCategoryCMS();

//         if (res?.data) {
//           // Current Selected Category find karna (by Slug)
//           const matched = res.data.find(cat => 
//             cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
//           );
//           const current = matched || res.data[0];
//           setSelectedCategory(current);

//           // Related Capabilities (Other Categories) nikalna
//           const otherCats = res.data.filter(
//             (item) => item.categoryName !== current.categoryName
//           );
//           // Unique Categories extract karna
//           const uniqueCapabilities = [
//             ...new Map(otherCats.map((item) => [item.categoryName, item])).values(),
//           ];
//           setRelatedCapabilities(uniqueCapabilities.slice(0, 6));

//           // 3. CMS Matching Logic
//           if (cmsRes?.success && cmsRes.data) {
//             const matchedCMS = cmsRes.data.find(cms => 
//                Number(cms.categoryId) === Number(current.categoryId) || 
//                cms.selectCategory === current.categoryName
//             );
//             if (matchedCMS) {
//               console.log("✅ Category CMS Match Found:", matchedCMS);
//               setCmsData(matchedCMS);
//             }
//           }
//         }
//       } catch (err) {
//         console.error("❌ Error fetching category data:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [type]);

//   if (loading) return <div className="p-5 text-center">Loading Content...</div>;
//   if (!selectedCategory) return null;

//   // Banner Image logic
//   const bannerUrl = selectedCategory.bannerImage?.startsWith("uploads")
//     ? `${IMG_URL}/${selectedCategory.bannerImage}` : selectedCategory.bannerImage;

//   return (
//     <>
//       <Head>
//         <title>{selectedCategory.categoryName} | Core Law</title>
//       </Head>

//       {/* ================= HERO SECTION ================= */}
//       <div className="hero-section" style={{ backgroundImage: `url(${bannerUrl})` }}>
//         <div className="overlay" />
//         <div className="container hero-content text-center text-white">
//           <h1 className="display-3 fw-bold font-serif mb-4 pt-5 mt-5">
//             {selectedCategory.categoryName}
//           </h1>
//           <Link href="/attorneys">
//             <a className="btn-meet-team">
//               MEET THE TEAM <i className="bi bi-chevron-right ms-1"></i>
//             </a>
//           </Link>
//         </div>
//       </div>

//       {/* ================= CMS / DESCRIPTION SECTION ================= */}
//       <div className="container py-5 mt-4">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <h2 className="font-serif fw-bold text-dark mb-4 text-center">Area of Focus</h2>
            
//             {cmsData ? (
//               // Admin ka Text Editor wala content
//               <div 
//                 className="cms-render-box shadow-sm p-4 bg-white border-top border-gold"
//                 dangerouslySetInnerHTML={{ __html: cmsData.textEditorContent || cmsData.content }} 
//               />
//             ) : (
//               // Default Description agar CMS nahi hai
//               <div className="text-center py-4">
//                 <p className="lead-text fs-5 text-muted">{selectedCategory.description}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ================= NEWS SECTION (STATIC) ================= */}
//       <div className="news-section">
//         <div className="container">
//           <h3 className="text-white font-serif mb-5 pb-3 border-bottom border-secondary">
//             News, Insights & Events
//           </h3>
//           <div className="row">
//             {staticNews.map((news) => (
//               <div key={news.id} className="col-12 mb-4 text-start">
//                 <p className="news-meta mb-1">
//                   <span className="text-white small fw-bold">{news.date}</span>
//                   <span className="text-gold ms-3 small">{news.type}</span>
//                 </p>
//                 <h4 className="news-title font-serif">{news.title}</h4>
//                 <div className="small text-secondary mt-1">
//                   {news.readTime || news.source}
//                 </div>
//                 <hr className="border-secondary mt-3 opacity-25" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= RELATED CAPABILITIES ================= */}
//       <div className="container py-5 mb-5 mt-4">
//         <h3 className="font-serif fw-bold mb-4 text-center">
//           Related Capabilities
//         </h3>
//         <div className="related-grid">
//           {relatedCapabilities.map((cap) => {
//             const capSlug = cap.categoryName
//               .toLowerCase()
//               .replace(/\s+/g, "-");

//             return (
//               <Link key={cap.id} href={`/capability/${capSlug}`}>
//                 <a className="related-pill">{cap.categoryName}</a>
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* ================= STYLES ================= */}
//       <style jsx>{`
//         :global(:root) {
//           --gold: #de9f57;
//           --navy: #002855;
//         }

//         .hero-section {
//           height: 450px;
//           background-size: cover;
//           background-position: center;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-top: -80px;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 51, 102, 0.7);
//         }

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           width: 100%;
//         }

//         .btn-meet-team {
//           border: 2px solid var(--gold);
//           color: white;
//           padding: 12px 30px;
//           text-decoration: none;
//           font-weight: bold;
//           font-size: 0.9rem;
//           letter-spacing: 1px;
//           background: rgba(0,0,0,0.2);
//           transition: 0.3s;
//         }

//         .btn-meet-team:hover {
//           background: var(--gold);
//           color: white;
//         }

//         .border-gold { border-top: 4px solid var(--gold) !important; }

//         .cms-render-box { min-height: 200px; line-height: 1.8; color: #333; }
//         .cms-render-box :global(p) { margin-bottom: 1.5rem; font-size: 1.1rem; }
//         .cms-render-box :global(ul) { padding-left: 1.2rem; margin-bottom: 1.5rem; }
//         .cms-render-box :global(li) { margin-bottom: 0.5rem; }

//         .news-section {
//           background: #1a1a1a;
//           color: #fff;
//           padding: 80px 0;
//         }

//         .news-title {
//           color: var(--gold);
//           font-size: 1.4rem;
//           cursor: pointer;
//         }

//         .text-gold { color: var(--gold); }

//         .related-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           justify-content: center;
//         }

//         .related-pill {
//           background: white;
//           border: 1px solid #ddd;
//           padding: 10px 22px;
//           color: #333;
//           text-decoration: none;
//           font-weight: 500;
//           transition: 0.3s;
//         }

//         .related-pill:hover {
//           background: var(--navy);
//           color: white;
//           border-color: var(--navy);
//         }

//         .font-serif { font-family: "Georgia", serif; }

//         @media (max-width: 768px) {
//           .hero-title { font-size: 2.2rem; }
//         }
//       `}</style>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  getAllCapabilitySubCategories, 
  getAllCapabilityCategoryCMS, 
  IMG_URL 
} from "../../services/authService";

export default function CapabilityDetail() {
  const router = useRouter();
  const { slug: type } = router.query;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cmsData, setCmsData] = useState(null);
  const [areaOfFocusList, setAreaOfFocusList] = useState([]); 
  const [relatedCapabilities, setRelatedCapabilities] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= STATIC NEWS DATA (Unchanged) ================= */
  const staticNews = [
    { id: "news-1", date: "July 23, 2025", type: "Media Coverage", title: "Rising Star: Greenberg Traurig's Michael Burshteyn", source: "Law360" },
    { id: "news-2", date: "January 03, 2025", type: "GT Advisory", title: "5 Trends to Watch: 2025 Blockchain & Digital Assets", readTime: "2 min read" },
  ];

  useEffect(() => {
    async function fetchData() {
      if (!type) return;
      setLoading(true);
      try {
        const res = await getAllCapabilitySubCategories();
        const cmsRes = await getAllCapabilityCategoryCMS();

        if (res?.data) {
          const matched = res.data.find(cat => 
            cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === type
          );
          const current = matched || res.data[0];
          setSelectedCategory(current);

          const otherCats = res.data.filter((item) => item.categoryName !== current.categoryName);
          const uniqueCapabilities = [...new Map(otherCats.map((item) => [item.categoryName, item])).values()];
          setRelatedCapabilities(uniqueCapabilities.slice(0, 6));

          if (cmsRes?.success && cmsRes.data) {
            const matchedCMS = cmsRes.data.find(cms => Number(cms.categoryId) === Number(current.categoryId));
            if (matchedCMS) {
              setCmsData(matchedCMS);
              if (matchedCMS.subcategoryIds) {
                const subList = res.data.filter(sub => matchedCMS.subcategoryIds.includes(Number(sub.id)));
                setAreaOfFocusList(subList);
              } else {
                setAreaOfFocusList(res.data.filter(sub => Number(sub.categoryId) === Number(current.categoryId)));
              }
            } else {
              setAreaOfFocusList(res.data.filter(sub => Number(sub.categoryId) === Number(current.categoryId)));
            }
          }
        }
      } catch (err) { console.error(err); } finally { setLoading(false); }
    }
    fetchData();
  }, [type]);

  if (loading) return <div className="p-5 text-center">Loading Content...</div>;
  if (!selectedCategory) return null;

  const bannerUrl = selectedCategory.bannerImage?.startsWith("uploads")
    ? `${IMG_URL}/${selectedCategory.bannerImage}` : selectedCategory.bannerImage;

  return (
    <>
      <Head><title>{selectedCategory.categoryName} | Core Law</title></Head>

      {/* HERO SECTION */}
      <div className="hero-section" style={{ backgroundImage: `url(${bannerUrl})` }}>
        <div className="overlay" />
        <div className="container hero-content text-center text-white">
          <h1 className="display-3 fw-bold font-serif mb-4 pt-5 mt-5">{selectedCategory.categoryName}</h1>
          <Link href="/attorneys"><a className="btn-meet-team">MEET THE TEAM <i className="bi bi-chevron-right ms-1"></i></a></Link>
        </div>
      </div>

      {/* 1. AREA OF FOCUS (Moved to Top) */}
      <div className="container py-5 text-center bg-light rounded mt-5">
        <h3 className="font-serif fw-bold mb-4">Area of Focus</h3>
        <div className="areas-grid">
          {areaOfFocusList.map((sub) => (
            <div key={sub.id} className="area-item">
              <span className="bullet">•</span>
              <Link href={`/capability/area-detail/${sub.subcategoryName.toLowerCase().replace(/\s+/g, "-")}`}>
                <a className="area-link">{sub.subcategoryName}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 2. CMS CONTENT / DESCRIPTION (Moved below Focus) */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {cmsData ? (
              <div className="cms-render-box shadow-sm p-4 bg-white border-top border-gold"
                dangerouslySetInnerHTML={{ __html: cmsData.content }} 
              />
            ) : (
              <div className="text-center py-4"><p className="lead-text fs-5 text-muted">{selectedCategory.description}</p></div>
            )}
          </div>
        </div>
      </div>

      {/* NEWS SECTION (Unchanged) */}
      <div className="news-section text-start mt-5">
        <div className="container">
          <h2 className="font-serif fw-bold mb-4 text-white">News, Insights & Events</h2>
          {staticNews.map((news) => (
            <div key={news.id} className="mb-4">
              <div className="small text-uppercase mb-1 opacity-75 text-white">{news.date} • {news.type}</div>
              <h4 className="news-title font-serif">{news.title}</h4>
              <hr className="opacity-25 border-secondary" />
            </div>
          ))}
        </div>
      </div>

      {/* RELATED CAPABILITIES (Unchanged) */}
      <div className="container py-5 mb-5 text-center">
        <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
        <div className="related-grid">
          {relatedCapabilities.map((cap) => (
            <Link key={cap.id} href={`/capability/${cap.categoryName.toLowerCase().replace(/\s+/g, "-")}`}><a className="related-pill">{cap.categoryName}</a></Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(:root) { --gold: #de9f57; --navy: #002855; }
        .hero-section { height: 450px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; margin-top: -80px; }
        .overlay { position: absolute; inset: 0; background: rgba(0, 51, 102, 0.7); }
        .hero-content { position: relative; z-index: 2; width: 100%; }
        .btn-meet-team { border: 2px solid var(--gold); color: white; padding: 12px 30px; text-decoration: none; font-weight: bold; font-size: 0.9rem; background: rgba(0,0,0,0.2); transition: 0.3s; }
        .btn-meet-team:hover { background: var(--gold); }
        .border-gold { border-top: 4px solid var(--gold) !important; }
        .cms-render-box { min-height: 200px; line-height: 1.8; color: #333; }
        .areas-grid { display: grid; grid-template-columns: repeat(2, auto); gap: 12px 40px; justify-content: center; margin-top: 30px; }
        .area-item { display: flex; align-items: center; }
        .bullet { color: var(--gold); font-size: 1.5rem; margin-right: 10px; }
        .area-link { color: var(--gold); text-decoration: underline; font-size: 1.1rem; transition: 0.3s; }
        .news-section { background: #1a1a1a; color: #fff; padding: 80px 0; }
        .news-title { color: var(--gold); font-size: 1.4rem; }
        .related-grid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
        .related-pill { background: white; border: 1px solid #ddd; padding: 10px 22px; color: #333; text-decoration: none; transition: 0.3s; }
        .related-pill:hover { background: var(--navy); color: white; }
        .font-serif { font-family: "Georgia", serif; }
        @media (max-width: 768px) { .areas-grid { grid-template-columns: 1fr; } .area-item { justify-content: center; } }
      `}</style>
    </>
  );
}