import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Capabilities() {
  
  // --- STATE VARIABLES ---
  const [expandAll, setExpandAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // --- HELPER FUNCTION: SLUG CREATOR ---
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };

  // --- FULL DATA ---
  const allCapabilities = [
    {
      category: "Banking & Financial Services",
      items: [
        "Business Aviation", "Financial Regulatory & Compliance", "Financial Services Litigation",
        "Fintech", "Futures & Derivatives", "Government Contract Lending",
        "Institutional Banking & Investment Services (IBIS)", "Institutional Investors",
        "Project & Infrastructure Finance", "Public Finance & Infrastructure",
        "Restructuring & Special Situations", "Structured Finance"
      ]
    },
    {
      category: "Blockchain & Digital Assets",
      items: ["Cryptocurrency Enforcement", "Fintech", "Tokenization", "Digital Wallets Regulation"]
    },
    {
      category: "Corporate",
      items: [
        "Business Aviation", "Capital Markets", "Corporate Governance & Compliance",
        "Delaware Law & Litigation", "Environmental, Social & Governance (ESG)",
        "Employee Stock Ownership Plans (ESOPs)", "Finance", "Mergers & Acquisitions", 
        "Private Equity", "Private Funds", "Real Estate Investment Trusts (REITs)",
        "Restructuring & Special Situations", "Special Purpose Acquisition Companies (SPACs)"
      ]
    },
    {
      category: "Corporate Trust Services",
      items: ["Trustee Representation", "Agency Services"] 
    },
    {
      category: "Data Privacy & Cybersecurity",
      items: [
        "Advertising & Marketing Technology", "Cross-Border Transfers", "Cybersecurity Readiness",
        "Data Breach Incident Response", "Data Inventories & Records", "GDPR Compliance",
        "Health Information Privacy", "Privacy Gap Assessments", "Regulatory Investigations",
        "CCPA / CPRA Compliance"
      ]
    },
    {
      category: "Defense, Aviation & Space",
      items: [
        "Aviation Litigation", "Export Controls & Economic Sanctions", "Government Contracts",
        "Space & Satellite Regulation", "Drone Law (UAS)"
      ]
    },
    {
      category: "Energy & Natural Resources",
      items: [
        "Carbon Capture & Sequestration", "Electric Power & Utility Regulation", "Energy Litigation",
        "Energy Project Finance", "Hydrogen", "Liquefied Natural Gas (LNG)", "Mining", 
        "Renewable Energy (Solar/Wind)", "Upstream Oil & Gas", "Water Law"
      ]
    },
    {
      category: "Entertainment, Media & Sports",
      items: ["Sports Facilities & Venues", "Talent Representation", "Video Games & Esports", "Media Rights"]
    },
    {
      category: "Environmental",
      items: ["Environmental Litigation", "Regulatory Compliance", "Toxic Torts"]
    },
    {
      category: "Fintech",
      items: ["Payments", "Lending Platforms", "RegTech"]
    },
    {
      category: "Food, Beverage & Agribusiness",
      items: ["FDA Compliance", "Labeling & Advertising", "Supply Chain", "Restaurant Industry"]
    },
    {
      category: "Gaming",
      items: ["Gaming Licensing", "Sports Betting", "Tribal Gaming", "Online Gambling"]
    },
    {
      category: "Government Contracts",
      items: [
        "Bid Protests", "Suspension & Debarment", "Investigations", "False Claims Act"
      ]
    },
    {
      category: "Health Care & FDA Practice",
      items: ["Digital Health", "Fraud & Abuse", "HIPAA Compliance", "Telehealth"]
    },
    {
      category: "Infrastructure",
      items: [
        "Public-Private Partnerships (P3)", "Transportation Infrastructure", "Social Infrastructure"
      ]
    },
    {
      category: "Innovation & Artificial Intelligence",
      items: ["AI Ethics & Governance", "Machine Learning IP", "Robotics"]
    },
    {
      category: "Insurance",
      items: ["Coverage Litigation", "Reinsurance", "Regulatory Compliance"]
    },
    {
      category: "Intellectual Property & Technology",
      items: [
        "Patents", "Trademarks", "Copyrights", "Trade Secrets", "IP Litigation", "Technology Transactions"
      ]
    },
    {
      category: "Labor & Employment",
      items: [
        "Employment Litigation", "Executive Compensation", "Labor Relations", "Wage & Hour", "Workplace Safety (OSHA)"
      ]
    },
    {
      category: "Litigation",
      items: [
        "Appellate", "Class Actions", "Commercial Litigation", "International Arbitration", 
        "Product Liability", "Securities Litigation", "White Collar Defense"
      ]
    },
    {
      category: "Real Estate",
      items: [
        "Construction Law", "Land Use & Zoning", "Real Estate Finance", "Leasing", "Real Estate Litigation"
      ]
    },
    {
      category: "Tax",
      items: [
        "Corporate Tax", "International Tax", "State & Local Tax (SALT)", "Tax Controversy", "Wealth Planning"
      ]
    },
    {
      category: "Transportation",
      items: ["Automotive", "Rail", "Shipping & Logistics"]
    },
    {
      category: "Venture Capital & Emerging Technology",
      items: ["Startups", "Fund Formation", "Series Financing", "Exit Strategy"]
    }
  ];

  // --- FILTER LOGIC (SEARCH) ---
  const filteredData = allCapabilities.filter(item => {
    // Search in Main Category Name
    const matchCategory = item.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Search inside Sub-items
    const matchItems = item.items.some(subItem => subItem.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchCategory || matchItems;
  });

  // --- SPLIT DATA INTO TWO COLUMNS ---
  const midPoint = Math.ceil(filteredData.length / 2);
  const leftColumn = filteredData.slice(0, midPoint);
  const rightColumn = filteredData.slice(midPoint);

  // --- TOGGLE HANDLER ---
  const toggleExpand = () => {
    setExpandAll(!expandAll);
  };

  // --- RENDER COMPONENT FOR EACH ITEM ---
  const CapabilityItem = ({ data }) => {
    const slug = createSlug(data.category);
    const hasItems = data.items && data.items.length > 0;
    
    // Determine if this item matches search (to auto-expand it)
    const isSearchActive = searchTerm.length > 0;
    // Should show sub-items if: "Expand All" is ON OR Search is Active
    const showSubItems = expandAll || isSearchActive;

    return (
      <div className="capability-group mb-3 pb-2 border-bottom border-light">
        <div className="d-flex justify-content-between align-items-center">
          <Link href={`/capability/${slug}`}>
             <a className="text-decoration-none group-link">
                <h5 className="fw-bold mb-0 text-gold-hover" style={{ color: '#b88b4a', fontSize: '1.2rem' }}>
                   {data.category}
                </h5>
             </a>
          </Link>
          
          {/* Plus icon hidden if expanded */}
          {!showSubItems && hasItems && (
            <span className="text-muted fs-5 fw-bold">+</span>
          )}
        </div>
        
        {/* SUB-ITEMS LIST */}
        {showSubItems && hasItems && (
          <ul className="list-unstyled ps-3 mt-2 border-start border-2 border-light sub-list-animate">
            {data.items.map((sub, idx) => (
              <li key={idx} className="mb-1">
                <Link href={`/capability/${createSlug(sub)}`}>
                  <a className="text-decoration-none text-secondary small hover-dark">
                    {sub}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Capabilities & Expertise | Core Law</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px'
        }}
      >
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>
        <div className="container position-relative text-center mt-5">
          <h1 className="display-3 fw-bold text-dark font-serif">Capabilities</h1>
          <p className="lead fw-medium text-dark mt-2">
            Comprehensive legal expertise across industries.<br />
            Explore our practice areas below.
          </p>
        </div>
      </div>

      {/* --- SEARCH BAR SECTION --- */}
      <div style={{ backgroundColor: '#cfa144' }} className="py-4 sticky-top-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-transparent border-0 border-bottom border-dark rounded-0">
                  <i className="bi bi-search text-dark fs-5"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control bg-transparent border-0 border-bottom border-dark text-dark placeholder-dark rounded-0 fs-5" 
                  placeholder="Search Capabilities..."
                  style={{ boxShadow: 'none' }} 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN LIST CONTENT --- */}
      <div className="py-5 bg-white min-vh-100">
        <div className="container">
          
          {/* HEADER ROW: Title + Collapse Button */}
          <div className="d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom">
            <h2 className="font-serif fw-bold text-dark mb-0">Expertise A-Z</h2>
            
            {/* Hide Expand Button if User is Searching (Auto-Expanded) */}
            {searchTerm === '' && (
              <button 
                onClick={toggleExpand} 
                className="btn btn-outline-dark rounded-0 px-4 py-2 text-uppercase fw-bold shadow-sm"
                style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
              >
                {expandAll ? <><i className="bi bi-dash-lg me-2"></i>Collapse All</> : <><i className="bi bi-plus-lg me-2"></i>Expand All</>}
              </button>
            )}
          </div>

          {/* TWO COLUMN GRID */}
          <div className="row">
            
            {/* NO RESULTS FOUND MESSAGE */}
            {filteredData.length === 0 && (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No capabilities found matching "{searchTerm}"</h4>
                <button className="btn btn-link text-gold" onClick={() => setSearchTerm('')}>Clear Search</button>
              </div>
            )}

            {/* LEFT COLUMN */}
            <div className="col-lg-6 pe-lg-5">
              {leftColumn.map((item, idx) => (
                <CapabilityItem key={idx} data={item} />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6 ps-lg-5 mt-4 mt-lg-0">
              {rightColumn.map((item, idx) => (
                <CapabilityItem key={idx} data={item} />
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* --- CSS STYLES --- */}
      <style jsx>{`
        .font-serif {
          font-family: "Georgia", "Times New Roman", serif;
        }
        .text-gold {
          color: #cfa144 !important;
        }
        .placeholder-dark::placeholder {
          color: rgba(0, 0, 0, 0.6) !important;
        }
        
        /* Interactive Links */
        .text-gold-hover {
           transition: color 0.3s ease;
        }
        .group-link:hover h5 {
           color: #8f6b36 !important;
           text-decoration: underline;
        }
        .hover-dark:hover {
          color: #000 !important;
          text-decoration: underline !important;
        }

        /* Animation for expanding list */
        .sub-list-animate {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default Capabilities;