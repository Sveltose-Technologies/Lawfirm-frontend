import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// --- 1. DATA (Jo aapne provide kiya) ---
const newsData = {
  id: "boston-ai-week",
  date: "30 September 2025",
  type: "Event",
  title: "Boston AI Week Panel & Networking Reception: AI Trends Shaping Innovation, Enterprise, and Investment",
  professionals: ["Andrew (A.J.) Tibbetts", "Chinh H. Pham"],
  capabilities: [
    "Innovation & Artificial Intelligence", 
    "Venture Capital & Emerging Technology", 
    "Intellectual Property & Technology"
  ],
  offices: ["Boston"],
  locationDetails: {
    venue: "Back Bay Social Club",
    address: "867 Boylston St, Boston 02116",
    registerLink: "https://gtlawinfo.com/rv/ff00f18d5ec81549afbaae18d54ab31961da0d91"
  },
  content: `
    <p>Join Greenberg Traurig during Boston AI Week for a panel discussion and networking reception.</p>
    <p>Greenberg Traurig’s AI Group will host a panel discussion on “AI Trends Shaping Innovation, Enterprise, and Investment" featuring insights from experts at the intersection of innovation, enterprise, and capital.</p>
    <p>Our panelists Christine Parker, Managing Director of Workplace AI, and Drew Volpe, Founder and Managing Partner of First Star Ventures, will explore the latest AI trends transforming technology, reshaping business strategies, and driving investment decisions.</p>
    <p>The panel will be followed by cocktails and light bites.</p>
  `
};

// --- 2. RELATED NEWS DATA (Footer ke liye) ---
const relatedNews = [
  {
    id: "1",
    date: "January 22, 2026",
    type: "Event",
    title: "Advanced Data Privacy, Cybersecurity, and TCPA Class Action Litigation 2026",
    location: "San Francisco, United States"
  },
  {
    id: "2",
    date: "December 15, 2025",
    type: "GT Alert",
    title: "Trump Administration Issues Executive Order on National AI Policy Framework",
    readTime: "2 min read"
  },
  {
    id: "3",
    date: "December 10, 2025",
    type: "GT Alert",
    title: "Florida Gov. Ron DeSantis Announces Proposed Citizens Bill of Rights for Artificial Intelligence",
    readTime: "2 min read"
  }
];

export default function NewsDetail() {
  return (
    <>
      <Head>
        <title>{newsData.title} | GT Law</title>
        {/* Bootstrap Icons Link (Make sure this is in your _document.js or layout if not working) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      </Head>

      {/* ==================== HEADER SECTION (Dark Navy) ==================== */}
      <div className="news-header">
        <div className="container">
          
          {/* Date & Type */}
          <div className="meta-top">
            <span className="text-white fw-bold text-uppercase">{newsData.date}</span>
            <span className="divider">|</span>
            <span className="text-white text-uppercase">{newsData.type}</span>
          </div>

          {/* Main Title (Serif Font) */}
          <h3 className="main-title text-white font-serif">
            {newsData.title}
          </h3>

          {/* Meta Grid (Professionals, Capabilities, Offices) */}
          <div className="meta-grid">
            
            {/* Row 1 */}
            <div className="meta-label text-white">Related Professionals</div>
            <div className="meta-value">
              {newsData.professionals.map((prof, i) => (
                <span key={i} className="text-gold item-link">
                  {prof}{i < newsData.professionals.length - 1 && <span className="sep">|</span>}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="meta-label text-white">Capabilities</div>
            <div className="meta-value">
              {newsData.capabilities.map((cap, i) => (
                <span key={i} className="text-gold item-link">
                  {cap}{i < newsData.capabilities.length - 1 && <span className="sep">|</span>}
                </span>
              ))}
            </div>

            {/* Row 3 */}
            <div className="meta-label text-white">Offices</div>
            <div className="meta-value">
              {newsData.offices.map((off, i) => (
                <span key={i} className="text-gold item-link">{off}</span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ==================== BODY SECTION (White) ==================== */}
      <div className="body-section">
        <div className="container">
          <div className="content-wrapper">
            
            {/* LEFT SIDEBAR (Share Icons) */}
            <div className="sidebar">
              <span className="share-label">SHARE</span>
              <div className="social-icons">
                <i className="bi bi-linkedin icon"></i>
                <i className="bi bi-twitter-x icon"></i>
                <i className="bi bi-facebook icon"></i>
                <i className="bi bi-envelope icon"></i>
                <i className="bi bi-printer icon"></i>
              </div>
            </div>

            {/* MAIN TEXT CONTENT */}
            <div className="main-text">
              
              {/* Event Location Box */}
              <div className="location-box">
                <div className="loc-row">
                  <div className="loc-label">Location Details</div>
                  <div className="loc-value">
                    {newsData.locationDetails.venue}<br/>
                    {newsData.locationDetails.address}
                  </div>
                </div>
                <div className="loc-row mt-3">
                  <div className="loc-label">Registration</div>
                  <div className="loc-value">
                    <a href={newsData.locationDetails.registerLink} className="register-link">
                      {newsData.locationDetails.registerLink}
                    </a>
                  </div>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="article-body" dangerouslySetInnerHTML={{ __html: newsData.content }}></div>

            </div>
          </div>
        </div>
      </div>

      {/* ==================== FOOTER SECTION (Darker) ==================== */}
      <div className="related-section">
        <div className="container">
          <h2 className="section-title text-white font-serif">You May Also Be Interested In:</h2>
          
          <div className="related-list">
            {relatedNews.map((item, index) => (
              <div key={index} className="related-item">
                <div className="related-meta">
                  <span className="date">{item.date}</span>
                  <span className="type">{item.type}</span>
                </div>
                <Link href="#">
                  <a className="related-title font-serif text-gold">{item.title}</a>
                </Link>
                {item.location && <div className="read-time">{item.location}</div>}
                {item.readTime && <div className="read-time"><span className="line"></span> {item.readTime}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== STYLES (Scoped) ==================== */}
      <style jsx>{`
        /* --- LAYOUT UTILS --- */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* --- HEADER --- */
       .news-header {
          background-color: var(--dark-navy, #0a1c38);
          
          /* Yahan padding-top badha diya hai (80px se 140px) */
          padding-top: 140px; 
          padding-bottom: 80px;
          
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .meta-top {
          font-size: 0.9rem;
          margin-bottom: 20px;
          letter-spacing: 1px;
          /* Agar aur extra space chahiye text ke upar to margin-top de sakte hain */
          /* margin-top: 20px; */ 
        }

        .divider { margin: 0 15px; color: #666; }
        
        /* --- TITLE SIZE FIX --- */
        .main-title {
          font-family: var(--font-serif);
          
          /* SIZE YAHAN SE CONTROL KAREIN */
          /* Pehle: clamp(2rem, 5vw, 3.5rem); */
          /* Ab (Chhota): */
          font-size: clamp(1rem, 3vw, 2.5rem); 
          
          line-height: 1.3;
          margin-bottom: 50px;
          color: white;
          max-width: 900px; /* Line zyada lambi na ho */
        }
        /* META GRID (Table-like layout) */
        .meta-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 15px 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 30px;
        }
        .meta-label {
          font-weight: 600;
          font-size: 1rem;
        }
        .meta-value {
          font-size: 1rem;
          line-height: 1.5;
        }
        .text-gold { color: var(--primary-gold, #de9f57); }
        .item-link { cursor: pointer; transition: 0.3s; }
        .item-link:hover { text-decoration: underline; color: #fff; }
        .sep { color: #666; margin: 0 10px; }

        /* --- BODY SECTION --- */
        .body-section {
          background-color: #fff;
          padding: 60px 0;
          color: var(--text-dark, #212529);
        }
        .content-wrapper {
          display: flex;
          gap: 50px;
        }
        
        /* SIDEBAR */
        .sidebar {
          width: 80px;
          flex-shrink: 0;
          text-align: center;
          padding-top: 10px;
        }
        .share-label {
          display: block;
          font-size: 0.75rem;
          font-weight: bold;
          color: #999;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }
        .social-icons {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .icon {
          font-size: 1.2rem;
          color: #666;
          cursor: pointer;
          transition: color 0.3s;
        }
        .icon:hover { color: var(--primary-gold, #de9f57); }

        /* MAIN TEXT */
        .main-text {
          flex-grow: 1;
          max-width: 900px;
        }
        .location-box {
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 1px solid #eee;
        }
        .loc-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 20px;
        }
        .loc-label {
          font-weight: bold;
          color: var(--dark-navy, #0a1c38);
        }
        .register-link {
          color: var(--primary-gold, #de9f57);
          text-decoration: underline;
          word-break: break-all;
        }
        
        .article-body {
          font-size: 1.15rem;
          line-height: 1.8;
        }
        /* Style paragraphs inside dangerouslySetInnerHTML */
        .article-body :global(p) {
          margin-bottom: 25px;
        }

        /* --- RELATED FOOTER --- */
        .related-section {
          background-color: #1a1a1a; /* Darker than header */
          padding: 80px 0;
          color: white;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 50px;
          padding-bottom: 20px;
          border-bottom: 1px solid #444;
        }
        .related-item {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #333;
        }
        .related-item:last-child { border-bottom: none; }
        
        .related-meta {
          margin-bottom: 10px;
          font-size: 0.85rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        .related-meta .type {
          margin-left: 15px;
          font-weight: normal;
          border: 1px solid #666;
          padding: 2px 8px;
        }
        
        .related-title {
          display: block;
          font-size: 1.8rem;
          margin-bottom: 15px;
          line-height: 1.3;
        }
        .related-title:hover { text-decoration: underline; }
        
        .read-time {
          font-size: 0.9rem;
          color: #999;
          font-style: italic;
          display: flex;
          align-items: center;
        }
        .line {
          display: inline-block;
          width: 30px;
          height: 1px;
          background-color: #666;
          margin-right: 10px;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 991px) {
          .meta-grid { grid-template-columns: 1fr; gap: 10px; }
          .content-wrapper { flex-direction: column; }
          .sidebar { width: 100%; display: flex; align-items: center; gap: 20px; padding-bottom: 30px; border-bottom: 1px solid #eee; margin-bottom: 30px; }
          .social-icons { flex-direction: row; }
          .loc-row { grid-template-columns: 1fr; gap: 5px; margin-bottom: 15px; }
        }
      `}</style>
    </>
  );
}