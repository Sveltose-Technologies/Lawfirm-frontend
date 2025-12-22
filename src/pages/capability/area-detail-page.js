import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// --- CENTRAL DATA STORE FOR ALL AREAS ---
const allAreasData = {
  "cryptocurrency-enforcement": {
    title: "Cryptocurrency Enforcement",
    breadcrumb: "BLOCKCHAIN & DIGITAL ASSETS | WHITE COLLAR DEFENSE & INVESTIGATIONS",
    heroImg: "/assets/images/our-firm4.png",
    intro: "Greenberg Traurig’s Cryptocurrency Enforcement Team comprises dedicated former government officials and experienced white collar defense attorneys.",
    paragraphs: [
      "With cryptocurrencies and other digital assets continuing to gain market acceptance, scrutiny from regulators is on the rise.",
      "Our team consists of former federal prosecutors and high-ranking officials from the DOJ and SEC."
    ],
    team: [
      { 
        name: "David I. Miller", title: "SHAREHOLDER", email: "David.Miller@gtlaw.com", phone: "+1 212.801.9205", 
        location: "New York", img: "/assets/images/attorney1.png", 
        practice: "WHITE COLLAR DEFENSE & INVESTIGATIONS" 
      },
      { 
        name: "John Huber", title: "SHAREHOLDER", email: "John.Huber@gtlaw.com", phone: "+1 801.478.6915", 
        location: "Salt Lake City", img: "/assets/images/attorney2.png", 
        practice: "WHITE COLLAR DEFENSE & INVESTIGATIONS" 
      }
    ]
  },
  "fintech": {
    title: "Fintech",
    breadcrumb: "BLOCKCHAIN & DIGITAL ASSETS | CORPORATE & SECURITIES",
    heroImg: "/assets/images/our-firm4.png",
    intro: "Our Fintech practice provides strategic counsel to companies at the intersection of financial services and technology.",
    paragraphs: [
      "We advise clients on emerging payment systems, mobile banking, and peer-to-peer lending platforms.",
      "We help navigate the complex regulatory web of state and federal financial laws."
    ],
    team: [
      { 
        name: "Elaine Walker", title: "DIRECTOR", email: "walkere@gtlaw.com", phone: "+1 305 579 0832", 
        location: "Miami", img: "/assets/images/attorney6.png", 
        practice: "CORPORATE & SECURITIES" 
      }
    ]
  }
};

export default function AreaDetailPage() {
  const router = useRouter();
  const { type } = router.query;

  // Jab tak router ready na ho, loading dikhao
  if (!router.isReady) return <div className="p-5 text-center">Loading...</div>;

  // URL wale 'type' se data nikalna
  const data = allAreasData[type];

  // Agar data na mile (galat URL)
  if (!data) {
    return (
      <div className="container py-5 text-center">
        <h2 className="font-serif">Page Not Found</h2>
        <p>Hume <strong>{type}</strong> se juda koi data nahi mila.</p>
        <button className="btn btn-outline-dark mt-3" onClick={() => router.back()}>Back</button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} | GT Law</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <div className="area-hero" style={{ backgroundImage: `url(${data.heroImg})` }}>
        <div className="overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title font-serif">{data.title}</h1>
        </div>
      </div>

      {/* --- GOLD BREADCRUMB --- */}
      <div className="gold-bar">
        <div className="container py-2 text-center">
          <span className="breadcrumb-txt fw-bold text-uppercase">{data.breadcrumb}</span>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container py-5 mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="lead-text fw-bold mb-4">{data.intro}</p>
            {data.paragraphs.map((p, i) => <p key={i} className="body-text">{p}</p>)}
          </div>
        </div>
      </div>

      {/* --- MEET THE TEAM SECTION --- */}
      <div className="team-bg py-5">
        <div className="container">
          <h2 className="font-serif fw-bold mb-5 border-bottom border-dark pb-3">Meet the Team</h2>
          
          {data.team.map((member, idx) => (
            <div key={idx} className="team-card row mb-4 align-items-center bg-white p-3 mx-0 shadow-sm border">
              <div className="col-md-2 text-center">
                <img src={member.img} alt={member.name} className="member-img" />
              </div>
              <div className="col-md-6 mt-3 mt-md-0">
                <h3 className="font-serif text-gold mb-1">{member.name}</h3>
                <p className="small text-muted fw-bold mb-2">{member.title}</p>
                <p className="mb-1">
                  <a href={`mailto:${member.email}`} className="text-gold-link fw-bold small">{member.email}</a>
                </p>
                <p className="small mb-0 fw-bold">{member.phone}</p>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <p className="small text-navy fw-bold mb-3">{member.location}</p>
                <div className="practice-tag">{member.practice}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: "Georgia", serif; }
        .text-gold { color: #cfa144; }
        .text-navy { color: #002855; }

        .area-hero {
            height: 380px; background-size: cover; background-position: center;
            position: relative; display: flex; align-items: center;
        }
        .overlay { background: rgba(0,0,0,0.45); position: absolute; inset: 0; }
        .hero-content { position: relative; z-index: 2; color: white; width: 100%; }
        .hero-title { font-size: 3.5rem; font-weight: bold; }

        .gold-bar { background: #cfa144; color: #002855; border-bottom: 5px solid #b38a3a; }
        .breadcrumb-txt { font-size: 0.8rem; letter-spacing: 1.2px; }

        .lead-text { font-size: 1.2rem; line-height: 1.8; color: #111; }
        .body-text { font-size: 1.1rem; line-height: 1.8; color: #333; margin-bottom: 20px; }

        .team-bg { background-color: #f8f9fa; }
        .member-img { width: 120px; height: 150px; object-fit: cover; border: 1px solid #ddd; }
        .text-gold-link { color: #cfa144; text-decoration: underline; }

        .practice-tag {
            display: inline-block; border: 1px solid #002855; padding: 8px 15px;
            font-size: 0.7rem; font-weight: 800; color: #002855; letter-spacing: 1px;
        }

        @media (max-width: 768px) {
            .hero-title { font-size: 2.2rem; }
            .team-card { text-align: center; }
        }
      `}</style>
    </>
  );
}