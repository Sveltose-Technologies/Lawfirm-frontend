import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function AttorneyDetails() {
  const router = useRouter();
  const { id } = router.query;
  
  const [attorney, setAttorney] = useState(null);

  // --- THEME COLORS ---
  const theme = {
    primaryBlue: '#002855',
    accentGold: '#de9f57',
    white: '#ffffff',
    lightGray: '#f9f9f9', // Thoda soft gray background ke liye
    border: '#e0e0e0'
  };

  // --- MOCK DATA ---
  const allAttorneys = [
    {
      id: 1,
      name: 'Caroline K. Abbott',
      role: 'Associate',
      phone: '1 202.530.8593',
      email: 'Caroline.Abbott@gtlaw.com',
      location: 'Washington, D.C.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
      bio: ["Caroline K. Abbott focuses her practice on corporate matters, including mergers and acquisitions.", "She has experience representing public and private companies."],
      concentrations: ["Mergers & Acquisitions", "Private Equity", "Corporate Governance"],
      capabilities: ["Corporate", "Energy & Natural Resources"],
      education: ["J.D., Harvard Law School", "B.A., Yale University"],
      admissions: ["New York", "Washington, D.C."],
      languages: ["English", "Spanish"]
    },
    {
      id: 2,
      name: 'Jacob M. Abdo',
      role: 'Associate',
      phone: '1 612.259.9681',
      email: 'Jake.Abdo@gtlaw.com',
      location: 'Minneapolis',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
      bio: ["Jacob M. Abdo advises clients on intellectual property matters.", "He assists clients in protecting their intellectual property assets."],
      concentrations: ["Patent Litigation", "Trademark Enforcement"],
      capabilities: ["Intellectual Property", "Litigation"],
      education: ["J.D., Yale University", "B.S., University of Minnesota"],
      admissions: ["Minnesota"],
      languages: ["English"]
    },
    {
      id: 3,
      name: 'Darren J. Abernethy',
      role: 'Shareholder',
      phone: '1 415.655.1261',
      email: 'abernethyd@gtlaw.com',
      location: 'San Francisco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      bio: ["Darren J. Abernethy focuses on data privacy and cybersecurity.", "He advises on GDPR, CCPA, and other data protection laws."],
      concentrations: ["GDPR Compliance", "CCPA Compliance"],
      capabilities: ["Data Privacy", "Cybersecurity"],
      education: ["J.D., Stanford Law", "B.A., UCLA"],
      admissions: ["California"],
      languages: ["English", "French"]
    },
    {
      id: 4,
      name: 'Charles J. Abrams',
      role: 'Shareholder',
      phone: '1 561.650.7984',
      email: 'abramsc@gtlaw.com',
      location: 'West Palm Beach',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
      bio: ["Charles J. Abrams has extensive experience in commercial real estate transactions.", "He represents developers, investors, and lenders."],
      concentrations: ["Commercial Real Estate", "Leasing"],
      capabilities: ["Real Estate", "Finance"],
      education: ["J.D., University of Florida", "B.A., University of Miami"],
      admissions: ["Florida"],
      languages: ["English"]
    },
    {
      id: 5,
      name: 'Ejim Peter Achi',
      role: 'Shareholder',
      phone: '1 212.801.6963',
      email: 'achie@gtlaw.com',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop',
      bio: ["Ejim Peter Achi represents private equity sponsors and their portfolio companies.", "His practice focuses on leveraged buyouts and growth equity."],
      concentrations: ["Private Equity", "Leveraged Buyouts"],
      capabilities: ["Corporate", "Private Equity"],
      education: ["J.D., Columbia Law School", "B.A., University of Pennsylvania"],
      admissions: ["New York"],
      languages: ["English", "Igbo"]
    },
    {
      id: 6,
      name: 'Ashia D. Adams',
      role: 'Shareholder',
      phone: '+44 203 349 8800',
      email: 'Ashia.Adams@gtlaw.com',
      location: 'London',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      bio: ["Ashia D. Adams is a member of the Real Estate Practice in London.", "She handles complex cross-border transactions."],
      concentrations: ["Cross-border Transactions", "Real Estate Finance"],
      capabilities: ["Real Estate", "International Law"],
      education: ["LLB, Oxford University", "LPC, BPP Law School"],
      admissions: ["England & Wales"],
      languages: ["English", "German"]
    }
  ];

  useEffect(() => {
    if (id) {
      const foundAttorney = allAttorneys.find(item => item.id.toString() === id.toString());
      setAttorney(foundAttorney);
    }
  }, [id]);

  if (!id) return <div className="text-center py-5">Loading...</div>;
  if (!attorney) return (
    <div className="text-center py-5">
      <h3>Attorney Not Found</h3>
      <Link href="/attorneys"><a className="btn btn-primary mt-3">Back to List</a></Link>
    </div>
  );

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div style={{ backgroundColor: theme.primaryBlue, paddingTop: '100px', paddingBottom: '60px', color: theme.white }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Image */}
         <div className="col-lg-3 col-md-4 mb-4 mb-md-0 text-center text-md-start">
  <img 
    src={attorney.image} 
    alt={attorney.name} 
    className="img-fluid rounded shadow-lg profile-img" 
    style={{ 
      border: `4px solid ${theme.accentGold}`, 
      width: '400px',       // Aapki demand: Fixed Width
      height: '400px',      // Aapki demand: Fixed Height
      maxWidth: '100%',     // Mobile par screen se bahar na jaye
      objectFit: 'cover',   // Image ko kharab/stretch hone se bachata hai
      objectPosition: 'top center' // IMPORTANT: Face hamesha dikhega, image center rahengi
    }}
  />
</div>

            {/* Info */}
            <div className="col-lg-9 col-md-8 ps-md-5">
              <h4 className="text-uppercase fw-bold mb-2" style={{ color: theme.accentGold, letterSpacing: '1px' }}>
                {attorney.role}
              </h4>
              <h1 className="display-4 fw-bold font-serif mb-3 title-responsive">{attorney.name}</h1>
              
              <div className="d-flex flex-wrap gap-4 mb-4 text-white-50 info-icons">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-white"></i>
                  <span className="text-white">{attorney.location}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-white"></i>
                  <a href={`mailto:${attorney.email}`} className="text-white text-decoration-none border-bottom border-secondary">{attorney.email}</a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill text-white"></i>
                  <span className="text-white">{attorney.phone}</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT & SIDEBAR ================= */}
      <div className="py-5" style={{ backgroundColor: theme.white }}>
        <div className="container">
          <div className="row">
            
            {/* ---------------- LEFT COLUMN (BIO & DETAILS) ---------------- */}
            <div className="col-lg-8 pe-lg-5 mb-5 mb-lg-0">
              
              {/* Overview */}
              <div className="mb-5">
                <h3 className="section-title mb-4">Overview</h3>
                {attorney.bio.map((paragraph, index) => (
                  <p key={index} className="text-secondary detail-text">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Concentrations List */}
              <div className="mb-5">
                <h4 className="sub-title mb-3">Concentrations</h4>
                <ul className="list-unstyled">
                  {attorney.concentrations.map((item, i) => (
                    <li key={i} className="d-flex align-items-start gap-2 mb-2 text-secondary detail-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: theme.accentGold }}></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Insights */}
              <div className="mb-5">
                 <h4 className="sub-title mb-4">Featured Insights</h4>
                 <div className="card shadow-sm border-0 bg-light">
                   <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge rounded-0" style={{ backgroundColor: theme.accentGold }}>GT Alert</span>
                        <span className="text-muted small">November 08, 2022</span>
                      </div>
                      <h5 className="fw-bold my-3">
                        <Link href="#">
                          <a className="text-decoration-none" style={{ color: theme.primaryBlue }}>
                            Latest Legal Developments in {attorney.practice}
                          </a>
                        </Link>
                      </h5>
                      <div className="d-flex align-items-center gap-2 text-muted small">
                         <i className="bi bi-clock"></i> 3 min read
                      </div>
                   </div>
                 </div>
              </div>

            </div>

            {/* ---------------- RIGHT SIDEBAR (STICKY ON DESKTOP) ---------------- */}
            <div className="col-lg-4">
              <div className="sidebar-container bg-white p-4 shadow-sm border rounded">
                
                {/* Capabilities */}
                <div className="mb-4">
                  <h6 className="sidebar-heading">CAPABILITIES</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {attorney.capabilities.map((cap, i) => (
                      <span key={i} className="badge-custom">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <hr className="divider" />

                {/* Education */}
                <div className="mb-4">
                  <h6 className="sidebar-heading">EDUCATION</h6>
                  <ul className="list-unstyled text-secondary small">
                    {attorney.education.map((edu, i) => (
                      <li key={i} className="mb-3 d-flex gap-2">
                         <i className="bi bi-mortarboard-fill mt-1" style={{ color: theme.primaryBlue }}></i>
                         {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="divider" />

                {/* Admissions */}
                <div className="mb-4">
                  <h6 className="sidebar-heading">ADMISSIONS</h6>
                  <ul className="list-unstyled text-secondary small">
                    {attorney.admissions.map((adm, i) => (
                      <li key={i} className="mb-2 d-flex gap-2">
                        <i className="bi bi-geo-alt mt-1" style={{ color: theme.primaryBlue }}></i>
                        {adm}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="divider" />

                {/* Languages */}
                <div>
                  <h6 className="sidebar-heading">LANGUAGES</h6>
                  <ul className="list-unstyled text-secondary small">
                    {attorney.languages.map((lang, i) => (
                      <li key={i} className="mb-2 d-flex gap-2">
                        <i className="bi bi-translate mt-1" style={{ color: theme.primaryBlue }}></i>
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- CUSTOM CSS FOR RESPONSIVENESS & STYLE --- */}
      <style jsx>{`
        /* Fonts & Spacing */
        .section-title {
          color: ${theme.primaryBlue};
          font-family: serif;
          font-weight: bold;
          border-bottom: 2px solid ${theme.accentGold};
          display: inline-block;
          padding-bottom: 5px;
        }
        .sub-title {
          color: ${theme.primaryBlue};
          font-weight: bold;
        }
        .detail-text {
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* Sidebar Styling */
        .sidebar-container {
          position: relative; /* Default for mobile */
          border-top: 4px solid ${theme.primaryBlue} !important;
        }
        .sidebar-heading {
          color: ${theme.accentGold};
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }
        .divider {
          border-color: ${theme.border};
          opacity: 0.5;
        }

        /* Badges */
        .badge-custom {
          background-color: white;
          color: #333;
          border: 1px solid #ddd;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.85rem;
          display: inline-block;
        }

        /* RESPONSIVE LOGIC */
        @media (min-width: 992px) {
          /* Sticky Sidebar only on Desktop (LG Screens) */
          .sidebar-container {
            position: sticky;
            top: 100px; /* Header height se neeche */
            z-index: 10;
          }
        }

        @media (max-width: 768px) {
          .title-responsive {
            font-size: 2.5rem; /* Mobile par font chhota */
          }
          .profile-img {
            max-width: 200px;
            margin-bottom: 20px;
          }
          .info-icons {
            flex-direction: column;
            gap: 10px !important;
          }
        }
      `}</style>
    </>
  );
}

export default AttorneyDetails;