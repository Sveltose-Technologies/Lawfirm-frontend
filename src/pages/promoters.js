import React from 'react';
import Head from 'next/head';

const Promoters = () => {

  // --- MOCK DATA FOR PROMOTERS ---
  const promoterList = [
    {
      id: 1,
      name: "Adv. Rajesh Oberoi",
      designation: "Founding Partner & Chairman",
      // Professional Man in Suit
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "With over 35 years of experience in Corporate Law and Constitutional matters, Mr. Oberoi is the visionary behind Core Law. He has successfully represented Fortune 500 companies in the Supreme Court of India.",
      email: "rajesh@corelaw.com"
    },
    {
      id: 2,
      name: "Adv. Meera Kapoor",
      designation: "Managing Partner (Litigation)",
      // UPDATED IMAGE: Professional Woman
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "A gold medalist from NLSIU, Meera specializes in Criminal Defense and Civil Litigation. Her aggressive yet strategic approach has led to landmark judgments in Human Rights cases.",
      email: "meera@corelaw.com"
    },
    {
      id: 3,
      name: "Adv. Vikram Singhania",
      designation: "Senior Partner (Intellectual Property)",
      // Professional Man (Alternative look)
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Vikram leads our IP division. He is renowned for handling complex Patent and Trademark disputes for international tech giants and pharmaceutical companies.",
      email: "vikram@corelaw.com"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Promoters | Core Law</title>
        <meta name="description" content="Meet the founding partners and promoters of Core Law Firm." />
      </Head>

      {/* --- HERO / BREADCRUMB SECTION --- */}
      <div className="page-header">
          <div className="container text-center">
              <h1 className="page-title">Leadership & Promoters</h1>
              <div className="divider-gold mx-auto"></div>
              <p className="page-subtitle text-white">The Visionaries Behind Our Legal Excellence</p>
          </div>
      </div>

      {/* --- INTRO SECTION --- */}
      <div className="container pt-5 pb-4">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
                <h2 className="section-heading">Our Driving Force</h2>
                <p className="lead text-muted">
                    Core Law was established on the principles of integrity, diligence, and justice. 
                    Meet the distinguished legal minds who steer our firm towards excellence.
                </p>
            </div>
        </div>
      </div>

      {/* --- PROMOTERS GRID SECTION --- */}
      <div className="promoters-section pb-5">
        <div className="container">
          <div className="row">
            
            {promoterList.map((person) => (
              <div key={person.id} className="col-lg-4 col-md-6 mb-4">
                <div className="promoter-card shadow-sm h-100">
                  <div className="img-wrapper">
                    <img src={person.img} alt={person.name} className="img-fluid promoter-img" />
                    <div className="social-overlay">
                        <span className="connect-text">Connect</span>
                    </div>
                  </div>
                  
                  <div className="card-body text-center p-4">
                    <h5 className="promoter-role">{person.designation}</h5>
                    <h3 className="promoter-name">{person.name}</h3>
                    <div className="divider-small mx-auto"></div>
                    <p className="promoter-bio">{person.bio}</p>
                    <a href={`mailto:${person.email}`} className="contact-link">
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* --- VISION QUOTE SECTION --- */}
      <div className="vision-section py-5">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                      <blockquote className="blockquote text-white">
                        <p className="mb-0">"Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it, wherever found against the wrong."</p>
                        <footer className="blockquote-footer mt-2 text-warning">Theodore Roosevelt</footer>
                      </blockquote>
                  </div>
              </div>
          </div>
      </div>

      {/* --- STYLES (Scoped) --- */}
      <style jsx>{`
        /* --- FONTS & BASICS --- */
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
        
        .page-header {
            background: linear-gradient(rgba(0, 43, 92, 0.85), rgba(0, 43, 92, 0.9)), url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            padding: 100px 0;
            color: white;
        }

        .page-title {
            font-family: 'Merriweather', serif;
            font-weight: 700;
            font-size: 3rem;
        }

        .divider-gold {
            width: 80px;
            height: 4px;
            background-color: #cfa144; /* Gold accent */
            margin: 20px 0;
        }

        .section-heading {
            color: #002b5c; /* Navy Blue */
            font-family: 'Merriweather', serif;
            font-weight: 700;
            margin-bottom: 20px;
        }

        /* --- CARD DESIGN --- */
        .promoter-card {
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            border-top: 5px solid #cfa144; /* Gold Top Border */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .promoter-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 43, 92, 0.15) !important;
        }

        .img-wrapper {
            position: relative;
            height: 300px;
            overflow: hidden;
        }

        .promoter-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            transition: transform 0.5s ease;
        }

        .promoter-card:hover .promoter-img {
            transform: scale(1.05);
        }

        .promoter-role {
            color: #cfa144; /* Gold */
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }

        .promoter-name {
            color: #002b5c; /* Navy Blue */
            font-family: 'Merriweather', serif;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .divider-small {
            width: 40px;
            height: 2px;
            background: #eee;
            margin-bottom: 15px;
        }

        .promoter-bio {
            color: #555;
            font-family: 'Open Sans', sans-serif;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .contact-link {
            color: #002b5c;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px dashed #002b5c;
            transition: color 0.3s;
        }
        
        .contact-link:hover {
            color: #cfa144;
            border-bottom-color: #cfa144;
        }

        /* --- VISION SECTION --- */
        .vision-section {
            background-color: #002b5c;
        }
        .blockquote {
            font-family: 'Merriweather', serif;
            font-style: italic;
            font-size: 1.2rem;
        }

        /* Responsive Tweaks */
        @media (max-width: 768px) {
            .page-title { font-size: 2rem; }
            .img-wrapper { height: 250px; }
        }
      `}</style>
    </>
  );
};

export default Promoters;