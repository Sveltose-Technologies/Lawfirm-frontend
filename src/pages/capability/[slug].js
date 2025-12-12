// pages/capability/[slug].js
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function CapabilityDetail() {
  const router = useRouter();
  const { slug } = router.query; 

  // --- GENERIC DATA GENERATOR ---
  const getPageData = () => {
    if (!slug) return null;

    // Convert slug (e.g., "real-estate") to Title ("Real Estate")
    const formattedTitle = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      title: formattedTitle,
      heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop", 
      overview: `Our ${formattedTitle} practice is recognized for its depth of knowledge and commitment to client success. We provide strategic legal counsel to businesses navigating the complex landscape of ${formattedTitle}.`,
      areasOfFocus: [
        `${formattedTitle} Litigation`,
        "Regulatory Compliance",
        "Strategic Advisory",
        "Cross-Border Transactions",
        "Risk Management"
      ],
      experienceList: [
        `Represented Fortune 500 clients in ${formattedTitle} matters`,
        "Advising on complex regulatory frameworks",
        "Structuring high-value transactions",
        "Dispute resolution and arbitration"
      ]
    };
  };

  const data = getPageData();

  if (!data) return <div className="p-5 text-center">Loading...</div>;

  return (
    <>
      <Head>
        <title>{data.title} | Our Firm</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <div className="capability-hero position-relative d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <div className="container position-relative z-index-2">
          <h1 className="display-4 fw-bold text-white font-serif mb-4">{data.title}</h1>
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            
            {/* Section: Areas of Focus */}
            <div id="areas" className="mb-5">
              <h2 className="font-serif fw-bold mb-4">Areas of Focus</h2>
              <div className="row">
                 {data.areasOfFocus.map((item, index) => (
                    <div className="col-md-6 mb-2" key={index}>
                      <span className="text-decoration-none text-primary-gold">
                        • {item}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <hr className="my-5" />

            {/* Section: Overview */}
            <div id="overview" className="mb-5">
              <p className="lead text-dark mb-4">{data.overview}</p>
              
              <h5 className="font-serif fw-bold mt-4 mb-3">Key Experience:</h5>
              <div className="row">
                {data.experienceList.map((item, index) => (
                    <div className="col-md-6 mb-2" key={index}>
                      <span className="text-secondary">• {item}</span>
                    </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: "Georgia", serif; }
        .text-primary-gold { color: #b88b4a; }
        .capability-hero {
          background-image: url("${data.heroImage}");
          background-size: cover;
          background-position: center;
          height: 50vh;
          width: 100%;
        }
        .overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
        }
      `}</style>
    </>
  );
}

export default CapabilityDetail;