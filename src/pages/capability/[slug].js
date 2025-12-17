// // pages/capability/[slug].js
// import React from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// function CapabilityDetail() {
//   const router = useRouter();
//   const { slug } = router.query; 

//   // --- GENERIC DATA GENERATOR ---
//   const getPageData = () => {
//     if (!slug) return null;

//     // Convert slug (e.g., "real-estate") to Title ("Real Estate")
//     const formattedTitle = slug
//       .split('-')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');

//     return {
//       title: formattedTitle,
//       heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop", 
//       overview: `Our ${formattedTitle} practice is recognized for its depth of knowledge and commitment to client success. We provide strategic legal counsel to businesses navigating the complex landscape of ${formattedTitle}.`,
//       areasOfFocus: [
//         `${formattedTitle} Litigation`,
//         "Regulatory Compliance",
//         "Strategic Advisory",
//         "Cross-Border Transactions",
//         "Risk Management"
//       ],
//       experienceList: [
//         `Represented Fortune 500 clients in ${formattedTitle} matters`,
//         "Advising on complex regulatory frameworks",
//         "Structuring high-value transactions",
//         "Dispute resolution and arbitration"
//       ]
//     };
//   };

//   const data = getPageData();

//   if (!data) return <div className="p-5 text-center">Loading...</div>;

//   return (
//     <>
//       <Head>
//         <title>{data.title} | Our Firm</title>
//       </Head>

//       {/* --- HERO SECTION --- */}
//       <div className="capability-hero position-relative d-flex align-items-center justify-content-center text-center">
//         <div className="overlay"></div>
//         <div className="container position-relative z-index-2">
//           <h1 className="display-4 fw-bold text-white font-serif mb-4">{data.title}</h1>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT SECTION --- */}
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-lg-12">
            
//             {/* Section: Areas of Focus */}
//             <div id="areas" className="mb-5">
//               <h2 className="font-serif fw-bold mb-4">Areas of Focus</h2>
//               <div className="row">
//                  {data.areasOfFocus.map((item, index) => (
//                     <div className="col-md-6 mb-2" key={index}>
//                       <span className="text-decoration-none text-primary-gold">
//                         • {item}
//                       </span>
//                     </div>
//                   ))}
//               </div>
//             </div>

//             <hr className="my-5" />

//             {/* Section: Overview */}
//             <div id="overview" className="mb-5">
//               <p className="lead text-dark mb-4">{data.overview}</p>
              
//               <h5 className="font-serif fw-bold mt-4 mb-3">Key Experience:</h5>
//               <div className="row">
//                 {data.experienceList.map((item, index) => (
//                     <div className="col-md-6 mb-2" key={index}>
//                       <span className="text-secondary">• {item}</span>
//                     </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .font-serif { font-family: "Georgia", serif; }
//         .text-primary-gold { color: #b88b4a; }
//         .capability-hero {
//           background-image: url("${data.heroImage}");
//           background-size: cover;
//           background-position: center;
//           height: 50vh;
//           width: 100%;
//         }
//         .overlay {
//           position: absolute; top: 0; left: 0; width: 100%; height: 100%;
//           background: rgba(0,0,0,0.5);
//         }
//       `}</style>
//     </>
//   );
// }

// export default CapabilityDetail;

// import React from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// function CapabilityDetail() {
//   const router = useRouter();
//   const { slug } = router.query; 

//   // --- GENERIC DATA GENERATOR ---
//   // In a real app, you would fetch specific data from a CMS or API using the slug.
//   const getPageData = () => {
//     if (!slug) return null;

//     // Convert slug (e.g., "real-estate") to Title ("Real Estate")
//     const formattedTitle = slug
//       .split('-')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');

//     return {
//       title: formattedTitle,
//       // Using a high-quality placeholder image
//       heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop", 
//       overview: `Our ${formattedTitle} practice is recognized for its depth of knowledge and commitment to client success. We provide strategic legal counsel to businesses navigating the complex landscape of ${formattedTitle}.`,
//       areasOfFocus: [
//         `${formattedTitle} Litigation`,
//         "Regulatory Compliance",
//         "Strategic Advisory",
//         "Cross-Border Transactions",
//         "Risk Management"
//       ],
//       experienceList: [
//         `Represented Fortune 500 clients in ${formattedTitle} matters`,
//         "Advising on complex regulatory frameworks",
//         "Structuring high-value transactions",
//         "Dispute resolution and arbitration"
//       ]
//     };
//   };

//   const data = getPageData();

//   if (!data) return <div className="p-5 text-center">Loading...</div>;

//   return (
//     <>
//       <Head>
//         <title>{data.title} | Our Firm</title>
//       </Head>

//       {/* --- HERO SECTION --- */}
//       <div className="capability-hero position-relative d-flex align-items-center justify-content-center text-center">
//         <div className="overlay"></div>
//         <div className="container position-relative z-index-2">
//           <h1 className="display-4 fw-bold text-white font-serif mb-4">{data.title}</h1>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT SECTION --- */}
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-lg-12">
            
//             {/* Section: Areas of Focus */}
//             <div id="areas" className="mb-5">
//               <h2 className="font-serif fw-bold mb-4">Areas of Focus</h2>
//               <div className="row">
//                  {data.areasOfFocus.map((item, index) => (
//                     <div className="col-md-6 mb-2" key={index}>
//                       <span className="text-decoration-none text-primary-gold">
//                         • {item}
//                       </span>
//                     </div>
//                   ))}
//               </div>
//             </div>

//             <hr className="my-5" />

//             {/* Section: Overview */}
//             <div id="overview" className="mb-5">
//               <p className="lead text-dark mb-4">{data.overview}</p>
              
//               <h5 className="font-serif fw-bold mt-4 mb-3">Key Experience:</h5>
//               <div className="row">
//                 {data.experienceList.map((item, index) => (
//                     <div className="col-md-6 mb-2" key={index}>
//                       <span className="text-secondary">• {item}</span>
//                     </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .font-serif { font-family: "Georgia", serif; }
//         .text-primary-gold { color: #b88b4a; }
//         .capability-hero {
//           background-image: url("${data.heroImage}");
//           background-size: cover;
//           background-position: center;
//           height: 50vh;
//           width: 100%;
//         }
//         .overlay {
//           position: absolute; top: 0; left: 0; width: 100%; height: 100%;
//           background: rgba(0,0,0,0.5);
//         }
//       `}</style>
//     </>
//   );
// }

// export default CapabilityDetail;


import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

// --- RICH DATA SOURCE ---
// यहाँ आप हर सर्विस के लिए अलग कंटेंट लिख सकते हैं
const capabilitiesData = {
  "corporate": {
    title: "Corporate & Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    overview: "Our Corporate & Commercial practice is the cornerstone of our firm. We provide comprehensive legal advice to public and private companies, private equity firms, and financial institutions on their most complex transactions. From mergers and acquisitions to corporate governance, our team acts as a strategic partner, helping clients navigate the legal landscape to achieve their business objectives.",
    approach: "We believe in a business-first approach. We don't just identify legal risks; we provide commercial solutions. Our team works across borders and disciplines to deliver seamless execution on high-stakes deals.",
    services: [
        "Mergers & Acquisitions (M&A)",
        "Private Equity & Venture Capital",
        "Corporate Governance & Compliance",
        "Joint Ventures & Strategic Alliances",
        "Capital Markets & Securities"
    ]
  },
  "real-estate": {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop",
    overview: "Our Real Estate practice group represents developers, investors, lenders, and REITs in the acquisition, development, financing, and disposition of commercial properties. We have extensive experience in handling complex transactions involving office buildings, retail centers, industrial facilities, and multi-family residential projects.",
    approach: "Real estate is local, but capital is global. We combine deep local market knowledge with international financing expertise to help our clients maximize the value of their real estate assets.",
    services: [
        "Acquisitions & Dispositions",
        "Commercial Leasing & Landlord Representation",
        "Real Estate Finance & Lending",
        "Zoning, Land Use & Development",
        "Construction Law"
    ]
  },
  "litigation": {
    title: "Litigation & Dispute Resolution",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop",
    overview: "When disputes arise, our Litigation team stands ready to protect our clients' interests in state and federal courts, as well as in arbitration and mediation proceedings. We handle high-stakes commercial litigation, class action defense, and white-collar regulatory investigations.",
    approach: "We are trial lawyers who understand that the best victory is often the one achieved before trial. We aggressively pursue early resolutions when favorable, but we are always prepared to go the distance.",
    services: [
        "Commercial & Contract Disputes",
        "Class Action Defense",
        "Intellectual Property Litigation",
        "White Collar Defense & Investigations",
        "International Arbitration"
    ]
  }
};

function CapabilityDetail() {
  const router = useRouter();
  const { slug } = router.query; 

  // --- DATA LOADER LOGIC ---
  const getPageData = () => {
    if (!slug) return null;

    // 1. Check if we have specific data for this slug
    if (capabilitiesData[slug]) {
        return capabilitiesData[slug];
    }

    // 2. Fallback: Generate Generic Data (if slug doesn't match specific data)
    const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    return {
      title: formattedTitle,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop", 
      overview: `Our ${formattedTitle} practice is recognized for its depth of knowledge and commitment to client success. We provide strategic legal counsel to businesses navigating the complex landscape of ${formattedTitle}. Whether you are a multinational corporation or a growing startup, we tailor our advice to your specific needs.`,
      approach: `We take a proactive and pragmatic approach to ${formattedTitle}. Our goal is to mitigate risk while seizing opportunities for growth.`,
      services: [
        `Strategic ${formattedTitle} Advisory`,
        "Regulatory Compliance & Risk Management",
        "Cross-Border Transactions",
        "Dispute Resolution & Litigation",
        "Operational Structuring"
      ]
    };
  };

  const data = getPageData();

  if (!data) return <div className="p-5 text-center display-6">Loading...</div>;

  return (
    <>
      <Head>
        <title>{data.title} | Practice Areas</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <div className="capability-hero position-relative d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <div className="container position-relative z-index-2">
          {/* Main Title - Font Size Increased */}
          <h1 className="hero-title fw-bold text-white font-serif mb-3">{data.title}</h1>
          <p className="lead text-white-50 fs-4">Excellence in Legal Practice</p>
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="container py-5 mt-4 mb-5">
        <div className="row">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="col-lg-8 pe-lg-5">
            
            {/* Overview */}
            <div className="mb-5">
              <h4 className="text-gold text-uppercase ls-2 mb-3 fw-bold">Overview</h4>
              <p className="big-text text-dark">{data.overview}</p>
            </div>

            {/* Our Approach */}
            <div className="mb-5 p-4 bg-light rounded border-start border-4 border-gold">
              <h3 className="font-serif fw-bold text-navy mb-3">Our Approach</h3>
              <p className="fs-5 text-secondary fst-italic mb-0">"{data.approach}"</p>
            </div>

            {/* Capabilities List */}
            <div className="mb-5">
              <h3 className="font-serif fw-bold text-navy mb-4">Key Capabilities</h3>
              <div className="row">
                 {data.services.map((item, index) => (
                    <div className="col-md-12 mb-3" key={index}>
                      <div className="d-flex align-items-center p-3 border rounded hover-shadow">
                        <i className="bi bi-check-circle-fill text-gold fs-4 me-3"></i>
                        <span className="fs-5 fw-bold text-navy">{item}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px', zIndex: 1 }}>
                
                {/* Contact Box */}
                <div className="bg-navy text-white p-4 rounded shadow-sm mb-4">
                    <h4 className="font-serif mb-3">Need Legal Advice?</h4>
                    <p className="fs-6 opacity-75 mb-4">Contact our {data.title} team to discuss your specific requirements.</p>
                    
                    <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-telephone-fill text-gold me-3 fs-5"></i>
                        <span className="fs-5">+1 202 555 0199</span>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <i className="bi bi-envelope-fill text-gold me-3 fs-5"></i>
                        <span className="fs-5">contact@corelaw.com</span>
                    </div>

                    <Link href="/contact">
                        <a className="btn btn-gold w-100 fw-bold text-navy py-3">Get in Touch</a>
                    </Link>
                </div>

                {/* Related Practice Areas (Static for now) */}
                <div className="p-4 border rounded bg-white">
                    <h5 className="fw-bold text-navy mb-3 text-uppercase fs-6 ls-2">Related Areas</h5>
                    <ul className="list-unstyled">
                        <li className="mb-3 border-bottom pb-2">
                            <Link href="/capability/corporate"><a className="text-decoration-none text-secondary fs-6 hover-gold">Corporate Law</a></Link>
                        </li>
                        <li className="mb-3 border-bottom pb-2">
                            <Link href="/capability/real-estate"><a className="text-decoration-none text-secondary fs-6 hover-gold">Real Estate</a></Link>
                        </li>
                        <li className="mb-0">
                            <Link href="/capability/litigation"><a className="text-decoration-none text-secondary fs-6 hover-gold">Litigation</a></Link>
                        </li>
                    </ul>
                </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* COLORS */
        .text-navy { color: #002855; }
        .bg-navy { background-color: #002855; }
        .text-gold { color: #de9f57; }
        .border-gold { border-color: #de9f57 !important; }
        .btn-gold { background-color: #de9f57; border: none; transition: 0.3s; }
        .btn-gold:hover { background-color: #c5893d; }
        .hover-gold:hover { color: #de9f57 !important; }

        /* TYPOGRAPHY */
        .font-serif { font-family: "Georgia", serif; }
        .ls-2 { letter-spacing: 2px; }
        
        /* BIG FONT SIZES */
        .hero-title { font-size: 3.5rem; }
        .big-text { font-size: 1.25rem; line-height: 1.8; color: #333; }
        
        /* HERO */
        .capability-hero {
          background-image: url("${data.image}");
          background-size: cover;
          background-position: center;
          height: 60vh; /* Increased Height */
          width: 100%;
          margin-top: -80px; /* Adjust based on your header height */
        }
        .overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(rgba(0,40,85,0.8), rgba(0,40,85,0.6));
        }

        /* CARD EFFECT */
        .hover-shadow { transition: transform 0.2s, box-shadow 0.2s; background: white; }
        .hover-shadow:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }

        @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .capability-hero { height: 50vh; }
        }
      `}</style>
    </>
  );
}

export default CapabilityDetail;