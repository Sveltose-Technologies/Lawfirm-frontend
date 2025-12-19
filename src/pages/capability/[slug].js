import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// --- DATA SOURCE ---
const blockchainData = {
  title: "Blockchain & Digital Assets",
  heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop", 
  
  areasOfFocus: [
    "Cryptocurrency Enforcement",
    "Fintech"
  ],

  introText: `Greenberg Traurig's global Blockchain & Digital Assets Group comprises more than 100 attorneys across multiple legal disciplines in key financial hubs around the world, providing a centralized approach to blockchain and digital asset matters. We leverage our diverse experience to advise clients on a wide array of matters ranging from token structuring, fund formation, investment strategies, financial regulation and registration, international tax planning and structuring, stable coins and asset-backed digital assets, infrastructure applications, technology licensing and development, mining, securities compliance, cryptocurrency exchanges and trading, and blockchain-as-a-service.`,
  
  secondaryText: `Our multidisciplinary approach enables the team to readily anticipate, recognize, and address the legal challenges that our clients may face with respect to blockchain and digital asset development or utilization. Our dedicated response team consists of experienced attorneys with diverse backgrounds in securities, commodities and broker-dealer regulations, entity and fund formation, financing, exchange formation, federal and state financial services regulation, technology and intellectual property licensing, privacy concerns, cybersecurity issues, and taxation.`,

  subSections: [
    {
      title: "Advising on Blockchain and Smart Contract Technology Implementations",
      content: "As blockchain applications and smart contracts introduce automation to entirely new functions, our attorneys advise clients on appropriate standards and protocols for the deployment of blockchain applications and smart contract coding to ensure that clients can meet the demands of regulators, law enforcement, and any trier of fact or law."
    },
    {
      title: "Cryptocurrency and Digital Assets (including NFTs)",
      content: "As cryptocurrencies and other digital assets, including NFTs, have gained market acceptance in recent years as a fundraising vehicle for our clients, a critical part of a blockchain platform, or for consumptive use, our team carefully evaluates each opportunity in terms of the business and financing requirements of the client."
    }
  ],

  capabilitiesList: [
    "Contractual Structure and Implementation",
    "Corporate, Fund Formation, Venture Capital & Capital Raises",
    "Cybersecurity & Privacy",
    "Intellectual Property",
    "Litigation",
    "Marketplace Lending",
    "M&A",
    "Regulatory Matters",
    "Tax",
    "Technology & Digital Transactions",
    "Virtual Currency, Digital Assets & NFTs"
  ],

  cryptoEnforcement: {
    title: "Cryptocurrency Enforcement",
    content: "Greenberg Traurig’s Cryptocurrency Enforcement Team comprises dedicated former government officials and experienced white collar defense attorneys with the industry-specific knowledge and skills to help clients navigate today’s complex and evolving cryptocurrency enforcement landscape."
  },

  blog: {
    title: "Overheard on the Block(chain) Blog",
    content: "GT's Overheard on the Block(chain) blog provides timely updates on the regulatory and legal developments in the blockchain and cryptocurrency sector."
  },

  contactText: "To learn more about our capabilities, please feel free to reach out to our Blockchain & Digital Assets Group contacts.",

  newsList: [
    {
      id: "news-1",
      date: "July 23, 2025",
      type: "Media Coverage",
      title: "Rising Star: Greenberg Traurig's Michael Burshteyn",
      source: "Law360"
    },
    {
      id: "news-2",
      date: "January 03, 2025",
      type: "GT Advisory",
      title: "5 Trends to Watch: 2025 Blockchain & Digital Assets",
      readTime: "2 min read"
    },
    {
      id: "news-3",
      date: "August 22, 2024",
      type: "Press Release",
      title: "Barbara Jones Wins ‘Women Leaders in Tech Law’ Award",
      readTime: "1 min read"
    },
    {
      id: "news-4",
      date: "Thursday, April 27, 2023",
      type: "Event",
      title: "Elevating Black Excellence: A Showcase for Black Partners",
      readTime: ""
    }
  ],

  relatedCapabilities: [
    "Venture Capital & Emerging Technology",
    "Innovation & Artificial Intelligence",
    "Government Law & Policy",
    "Technology, Media & Telecommunications",
    "Intellectual Property & Technology",
    "Litigation",
    "Mergers & Acquisitions",
    "Corporate",
    "Data Privacy & Cybersecurity",
    "Regulatory & Compliance",
    "Tax"
  ]
};

export default function CapabilityDetail() {
  const data = blockchainData; 

  if (!data) return <div className="p-5 text-center">Loading...</div>;

  return (
    <>
      <Head>
        <title>{data.title} | GT Law</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      </Head>

      {/* ==================== 1. HERO SECTION ==================== */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title font-serif">{data.title}</h1>
          <Link href="/attorneys">
            <a className="btn-gold-outline">
              MEET THE TEAM <i className="bi bi-chevron-right ms-2 small-icon"></i>
            </a>
          </Link>
        </div>
      </div>

      {/* ==================== 2. MAIN CONTENT ==================== */}
      <div className="container content-wrapper">
        <div className="row">
          
          {/* LEFT COLUMN */}
          <div className="col-lg-8 pe-lg-5">
            <p className="lead-text mb-4">{data.introText}</p>
            <p className="body-text mb-5">{data.secondaryText}</p>

            {data.subSections.map((sec, idx) => (
              <div key={idx} className="mb-5">
                <h3 className="section-sub-title font-serif">{sec.title}</h3>
                <p className="body-text">{sec.content}</p>
              </div>
            ))}

            <div className="highlight-box mb-5">
              <h3 className="section-sub-title font-serif text-navy">{data.cryptoEnforcement.title}</h3>
              <p className="body-text">{data.cryptoEnforcement.content}</p>
              <Link href="/capability/enforcement">
                <a className="link-gold fw-bold mt-2 d-inline-block">
                  Learn more about our Cryptocurrency Enforcement capabilities.
                </a>
              </Link>
            </div>

            <div className="blog-box mb-5">
              <div className="d-flex align-items-center mb-3">
                 <i className="bi bi-chat-quote-fill text-gold fs-2 me-3"></i>
                 <h3 className="section-sub-title font-serif mb-0">{data.blog.title}</h3>
              </div>
              <p className="body-text fst-italic">{data.blog.content}</p>
            </div>

            <div className="mb-5 border-top pt-4">
               <h3 className="section-sub-title font-serif">Contact Us</h3>
               <p className="body-text">{data.contactText}</p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="sidebar-box mb-5">
              <h4 className="sidebar-title font-serif">Areas of Focus</h4>
              <ul className="sidebar-list">
                {data.areasOfFocus.map((item, idx) => (
                   <li key={idx}><i className="bi bi-caret-right-fill text-gold me-2"></i>{item}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-box gray-bg">
              <h4 className="sidebar-title font-serif text-navy">Our Capabilities</h4>
              <ul className="capabilities-list">
                {data.capabilitiesList.map((item, idx) => (
                   <li key={idx}>
                      <Link href={`/capability/${item.toLowerCase().replace(/ /g, '-')}`}>
                        <a className="cap-link">{item}</a>
                      </Link>
                   </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ==================== 3. NEWS SECTION ==================== */}
      <div className="news-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3">
             <h2 className="text-white font-serif fw-bold m-0">News, Insights & Events</h2>
             <div className="d-none d-md-block">
                <span className="text-gold mx-2 fw-bold" style={{borderBottom:'2px solid #cfa144'}}>News</span>
                <span className="text-muted mx-2 pointer">Insights</span>
                <span className="text-muted mx-2 pointer">Past Events</span>
             </div>
          </div>

          <div className="row">
            {data.newsList.map((news) => (
              <div key={news.id} className="col-12 mb-4 news-item">
                <div className="d-flex flex-column">
                   <div className="mb-2">
                      <span className="text-white fw-bold text-uppercase small">{news.date}</span>
                      <span className="text-gold ms-2 small border border-secondary px-2 py-1">{news.type}</span>
                   </div>
                   <Link href={`/news/${news.id}`}>
                      <a className="news-title font-serif">{news.title}</a>
                   </Link>
                   <div className="text-muted small mt-1 fst-italic">
                      {news.readTime || news.source || "Read More"}
                   </div>
                </div>
                <hr className="border-secondary opacity-25 mt-3" />
              </div>
            ))}
          </div>
          
          <div className="text-end">
             <Link href="/news"><a className="text-white fw-bold small text-uppercase" style={{letterSpacing:'1px'}}>View More +</a></Link>
          </div>
        </div>
      </div>

      {/* ==================== 4. RELATED CAPABILITIES ==================== */}
      <div className="container py-5 mb-5">
        <h3 className="font-serif fw-bold mb-4">Related Capabilities</h3>
        <div className="related-grid">
           {data.relatedCapabilities.map((cap, idx) => (
              <Link key={idx} href={`/capability/${cap.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`}>
                 <a className="related-pill">{cap}</a>
              </Link>
           ))}
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style jsx>{`
        /* VARIABLES */
        :global(:root) {
            --gold: #de9f57;
            --navy: #002855;
        }
        .text-gold { color: var(--gold) !important; }
        .text-navy { color: var(--navy) !important; }
        .font-serif { font-family: "Georgia", "Times New Roman", serif; }

        /* HERO SECTION (UPDATED FOR SIZE & POSITION) */
        .hero-section {
            background-image: url("${data.heroImage}");
            background-size: cover;
            background-position: center;
            height: 60vh;
            min-height: 450px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            margin-top: -80px; 
        }
        .hero-content { 
            position: relative; 
            z-index: 2; 
            color: white; 
            /* Added padding-top to visually push content down */
            padding-top: 100px;
        }
        .hero-title { 
            /* Reduced font size */
            font-size: clamp(2rem, 3.5vw, 3rem); 
            font-weight: 700; 
            margin-bottom: 30px; 
            line-height: 1.2;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
        }
        
        .overlay { background: rgba(0, 40, 85, 0.7); position: absolute; inset: 0; }
        
        .btn-gold-outline {
            border: 2px solid white; color: white; padding: 12px 30px;
            font-weight: bold; letter-spacing: 2px; transition: 0.3s;
            text-decoration: none; display: inline-block;
        }
        .btn-gold-outline:hover { background: white; color: var(--navy); }

        /* CONTENT */
        .content-wrapper { padding: 60px 15px; }
        .lead-text { font-size: 1.25rem; line-height: 1.7; color: #333; font-weight: 500; }
        .body-text { font-size: 1.1rem; line-height: 1.8; color: #444; margin-bottom: 20px; }
        .section-sub-title { font-size: 1.5rem; font-weight: bold; margin-bottom: 15px; color: #222; }

        /* HIGHLIGHT BOXES */
        .highlight-box { background: #f0f4f8; padding: 30px; border-left: 5px solid var(--navy); }
        .blog-box { background: #fffcf5; padding: 30px; border: 1px solid #eee; border-left: 5px solid var(--gold); }
        .link-gold { color: var(--gold); text-decoration: none; }
        .link-gold:hover { text-decoration: underline; }

        /* SIDEBAR */
        .sidebar-box { margin-bottom: 40px; }
        .sidebar-title { font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }
        .sidebar-list { list-style: none; padding: 0; }
        .sidebar-list li { padding: 8px 0; font-size: 1.1rem; color: #333; border-bottom: 1px solid #eee; }
        
        .gray-bg { background: #f9f9f9; padding: 25px; }
        .capabilities-list { list-style: none; padding: 0; }
        .cap-link { display: block; padding: 6px 0; color: #444; text-decoration: none; transition: 0.2s; }
        .cap-link:hover { color: var(--gold); transform: translateX(5px); }

        /* NEWS SECTION */
        .news-section { background-color: #222; padding: 80px 0; color: white; }
        .news-title { font-size: 1.6rem; color: var(--gold); text-decoration: none; display: block; transition: 0.2s; }
        .news-title:hover { text-decoration: underline; color: #eac07a; }
        .pointer { cursor: pointer; }

        /* RELATED PILLS */
        .related-grid { display: flex; flex-wrap: wrap; gap: 10px; }
        .related-pill {
            background: white; border: 1px solid #ddd; padding: 10px 20px;
            color: #333; text-decoration: none; font-weight: 500; transition: 0.2s;
        }
        .related-pill:hover { background: var(--navy); color: white; border-color: var(--navy); }

        @media (max-width: 768px) {
            .hero-section { height: 50vh; }
            .hero-title { font-size: 1.8rem; }
        }
      `}</style>
    </>
  );
}