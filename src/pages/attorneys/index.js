import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// --- SHARED DATA SOURCE ---
// (Note: Real world app mein ye data kisi database ya API se aana chahiye)
export const attorneysData = [
  {
    id: 1,
    name: 'Caroline K. Abbott',
    role: 'Senior Associate',
    phone: '1 202.530.8593',
    email: 'caroline.abbott@lawfirm.com',
    location: 'Washington, D.C.',
    category: 'Corporate', 
    rating: 5,
    hourlyRate: 350,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: ["Caroline K. Abbott focuses her practice on corporate matters, including mergers and acquisitions.", "She has experience representing public and private companies."],
    education: ["J.D., Harvard Law School", "B.A., Yale University"],
    admissions: ["New York", "Washington, D.C."]
  },
  {
    id: 2,
    name: 'Jacob M. Abdo',
    role: 'Associate',
    phone: '1 612.259.9681',
    email: 'jake.abdo@lawfirm.com',
    location: 'Minneapolis',
    category: 'Intellectual Property',
    rating: 4,
    hourlyRate: 280,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: ["Jacob M. Abdo advises clients on intellectual property matters.", "He assists clients in protecting their intellectual property assets."],
    education: ["J.D., Yale University", "B.S., University of Minnesota"],
    admissions: ["Minnesota"]
  },
  {
    id: 3,
    name: 'Darren J. Abernethy',
    role: 'Shareholder',
    phone: '1 415.655.1261',
    email: 'abernethyd@lawfirm.com',
    location: 'San Francisco',
    category: 'Data Privacy',
    rating: 5,
    hourlyRate: 700,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: ["Darren J. Abernethy focuses on data privacy and cybersecurity.", "He advises on GDPR, CCPA, and other data protection laws."],
    education: ["J.D., Stanford Law", "B.A., UCLA"],
    admissions: ["California"]
  },
  {
    id: 4,
    name: 'Charles J. Abrams',
    role: 'Shareholder',
    phone: '1 561.650.7984',
    email: 'abramsc@lawfirm.com',
    location: 'West Palm Beach',
    category: 'Real Estate',
    rating: 3,
    hourlyRate: 450,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    bio: ["Charles J. Abrams has extensive experience in commercial real estate transactions.", "He represents developers, investors, and lenders."],
    education: ["J.D., University of Florida", "B.A., University of Miami"],
    admissions: ["Florida"]
  },
  {
    id: 5,
    name: 'Ejim Peter Achi',
    role: 'Partner',
    phone: '1 212.801.6963',
    email: 'achie@lawfirm.com',
    location: 'New York',
    category: 'Corporate',
    rating: 5,
    hourlyRate: 900,
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop',
    bio: ["Ejim Peter Achi represents private equity sponsors and their portfolio companies.", "His practice focuses on leveraged buyouts and growth equity."],
    education: ["J.D., Columbia Law School", "B.A., University of Pennsylvania"],
    admissions: ["New York"]
  },
  {
    id: 6,
    name: 'Ashia D. Adams',
    role: 'Senior Associate',
    phone: '+44 203 349 8800',
    email: 'ashia.adams@lawfirm.com',
    location: 'London',
    category: 'Real Estate',
    rating: 4,
    hourlyRate: 550,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: ["Ashia D. Adams is a member of the Real Estate Practice in London.", "She handles complex cross-border transactions."],
    education: ["LLB, Oxford University", "LPC, BPP Law School"],
    admissions: ["England & Wales"]
  },
  {
    id: 7,
    name: 'Bianca Z. Bailey',
    role: 'Associate',
    phone: '1 310.555.0192',
    email: 'bianca.b@lawfirm.com',
    location: 'Los Angeles',
    category: 'Litigation',
    rating: 5,
    hourlyRate: 400,
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
    bio: ["Bianca specializes in commercial litigation and dispute resolution.", "She has a strong track record in mediation."],
    education: ["J.D., UCLA Law", "B.A., USC"],
    admissions: ["California", "Nevada"]
  }
];

export default function AttorneysPage() {
  
  // --- THEME ---
  const theme = {
    primaryBlue: '#002855',
    accentGold: '#de9f57',
    white: '#ffffff',
    lightGray: '#f8f9fa',
  };

  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filters State
  const [filters, setFilters] = useState({
    category: 'All',
    location: 'All',
    rating: 'All',
    price: 'All'
  });

  // --- DYNAMIC DATA EXTRACTION ---
  const categories = ['All', ...new Set(attorneysData.map(a => a.category))].sort();
  const locations = ['All', ...new Set(attorneysData.map(a => a.location))].sort();
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  // --- MAIN FILTER LOGIC ---
  const filteredData = useMemo(() => {
    return attorneysData.filter(attorney => {
      
      // 1. Search Logic
      if (searchTerm && !attorney.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;

      // 2. Alphabet Filter
      if (selectedLetter !== 'All' && !attorney.name.startsWith(selectedLetter)) return false;

      // 3. Category Filter
      if (filters.category !== 'All' && attorney.category !== filters.category) return false;

      // 4. Location Filter
      if (filters.location !== 'All' && attorney.location !== filters.location) return false;

      // 5. Rating Filter
      if (filters.rating !== 'All') {
        if (attorney.rating < parseInt(filters.rating)) return false;
      }

      // 6. Price Filter
      if (filters.price !== 'All') {
        if (filters.price === 'low' && attorney.hourlyRate > 300) return false;
        if (filters.price === 'mid' && (attorney.hourlyRate <= 300 || attorney.hourlyRate > 600)) return false;
        if (filters.price === 'high' && attorney.hourlyRate <= 600) return false;
      }

      return true;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedLetter, filters]);

  // Handlers
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedLetter('All');
    setFilters({ category: 'All', location: 'All', rating: 'All', price: 'All' });
  };

  return (
    <>
      <Head>
        <title>Professionals List | Core Law</title>
      </Head>

      {/* HERO */}
      <div style={{ backgroundColor: theme.primaryBlue, padding: '80px 0 50px 0', color: theme.white }}>
        <div className="container text-center text-lg-start">
          <h5 className="text-uppercase fw-bold mb-2" style={{ color: theme.accentGold, letterSpacing: '2px' }}>
            Our Team
          </h5>
          <h1 className="display-4 fw-bold font-serif">Find a Professional</h1>
          <p className="lead opacity-75">Filter by expertise, location, rating or hourly rate.</p>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: theme.lightGray }}>
        <div className="container">
          <div className="row">
            
            {/* MOBILE FILTER TOGGLE */}
            <div className="col-12 d-lg-none mb-3">
              <button 
                className="btn btn-primary w-100 d-flex justify-content-between align-items-center"
                style={{ backgroundColor: theme.primaryBlue, borderColor: theme.primaryBlue }}
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                <span><i className="bi bi-funnel-fill me-2"></i>Filter Results</span>
                <i className={`bi bi-chevron-${showMobileFilters ? 'up' : 'down'}`}></i>
              </button>
            </div>

            {/* --- FILTERS SIDEBAR --- */}
            <div className={`col-lg-3 mb-5 pe-lg-4 ${showMobileFilters ? 'd-block' : 'd-none d-lg-block'}`}>
              <div className="bg-white p-4 shadow-sm rounded border">
                
                {/* Search */}
                <div className="mb-4">
                  <label className="fw-bold small text-muted mb-2">SEARCH NAME</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Caroline" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <hr className="text-muted opacity-25" />

                {/* Filter: Category */}
                <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2">CATEGORY</label>
                  <select 
                    className="form-select form-select-sm"
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Filter: Location */}
                <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2">LOCATION</label>
                  <select 
                    className="form-select form-select-sm"
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                  >
                    {locations.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>

                {/* Filter: Price */}
                <div className="mb-3">
                  <label className="fw-bold small text-muted mb-2">HOURLY RATE</label>
                  <select 
                    className="form-select form-select-sm"
                    value={filters.price}
                    onChange={(e) => handleFilterChange('price', e.target.value)}
                  >
                    <option value="All">Any Price</option>
                    <option value="low">Economy (&lt; $300)</option>
                    <option value="mid">Standard ($300 - $600)</option>
                    <option value="high">Premium (&gt; $600)</option>
                  </select>
                </div>

                {/* Filter: Rating */}
                <div className="mb-4">
                  <label className="fw-bold small text-muted mb-2">RATING</label>
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="r_all" checked={filters.rating === 'All'} onChange={() => handleFilterChange('rating', 'All')} />
                      <label className="form-check-label small" htmlFor="r_all">All</label>
                    </div>
                    {[5, 4, 3].map((r) => (
                      <div key={r} className="form-check">
                        <input className="form-check-input" type="radio" name="rating" id={`r_${r}`} checked={filters.rating === String(r)} onChange={() => handleFilterChange('rating', String(r))} />
                        <label className="form-check-label small" htmlFor={`r_${r}`}>
                          <span className="text-warning">
                            {[...Array(r)].map((_,i) => <i key={i} className="bi bi-star-fill"></i>)}
                          </span> & Up
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={handleReset} className="btn btn-outline-danger w-100 btn-sm">
                  <i className="bi bi-x-circle me-1"></i> Clear Filters
                </button>
              </div>
            </div>

            {/* --- RESULTS LIST --- */}
            <div className="col-lg-9">
              
              {/* ALPHABET SCROLLER */}
              <div className="bg-white p-3 shadow-sm rounded border mb-4">
                <div className="d-flex gap-2 overflow-auto alphabet-scroll">
                   <span onClick={() => setSelectedLetter('All')} className={`alphabet-item ${selectedLetter === 'All' ? 'active' : ''}`}>All</span>
                   {alphabet.map((letter) => (
                      <span key={letter} onClick={() => setSelectedLetter(letter)} className={`alphabet-item ${selectedLetter === letter ? 'active' : ''}`}>
                        {letter}
                      </span>
                   ))}
                </div>
              </div>

              {/* LIST ITEMS */}
              <div className="row">
                {filteredData.length > 0 ? (
                  filteredData.map((attorney) => (
                    <div key={attorney.id} className="col-12 mb-3">
                      <div className="card border-0 shadow-sm attorney-card overflow-hidden">
                        <div className="row g-0">
                          
                          {/* Image */}
                          <div className="col-md-3 col-sm-4 bg-light text-center position-relative">
                            <Link href={`/attorneys/${attorney.id}`}>
                              <a className="d-block h-100">
                                <img 
                                  src={attorney.image} 
                                  alt={attorney.name} 
                                  className="img-fluid h-100 w-100" 
                                  style={{ objectFit: 'cover', minHeight: '180px' }}
                                />
                              </a>
                            </Link>
                          </div>

                          {/* Content */}
                          <div className="col-md-9 col-sm-8 p-3 p-md-4 d-flex flex-column justify-content-center">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div>
                                <h4 className="card-title fw-bold mb-0">
                                  <Link href={`/attorneys/${attorney.id}`}>
                                    <a className="text-decoration-none text-dark hover-gold">
                                      {attorney.name}
                                    </a>
                                  </Link>
                                </h4>
                                <span className="badge bg-light text-secondary border mt-1">
                                  {attorney.role}
                                </span>
                              </div>
                              <div className="text-end d-none d-sm-block">
                                <div className="text-warning small">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
                                  ))}
                                </div>
                                <div className="fw-bold text-success mt-1">
                                  ${attorney.hourlyRate}/hr
                                </div>
                              </div>
                            </div>

                            <div className="row text-muted small mt-2 gy-2">
                              <div className="col-md-6">
                                <i className="bi bi-geo-alt-fill me-2 text-gold"></i>{attorney.location}
                              </div>
                              <div className="col-md-6">
                                <i className="bi bi-briefcase-fill me-2 text-gold"></i>{attorney.category}
                              </div>
                              <div className="col-md-6">
                                <i className="bi bi-telephone-fill me-2 text-gold"></i>{attorney.phone}
                              </div>
                            </div>

                            {/* Mobile Price Display */}
                            <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top d-sm-none">
                               <div className="text-warning small">
                                  {[...Array(attorney.rating)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                               </div>
                               <span className="fw-bold text-success">${attorney.hourlyRate}/hr</span>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <div className="alert alert-light text-center border py-5">
                      <i className="bi bi-search display-6 text-muted mb-3"></i>
                      <h5>No professionals found matching your criteria.</h5>
                      <button onClick={handleReset} className="btn btn-link">Reset All Filters</button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gold { color: ${theme.accentGold}; }
        .alphabet-scroll::-webkit-scrollbar { height: 4px; }
        .alphabet-scroll::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
        
        .alphabet-item {
          min-width: 35px; height: 35px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-weight: bold; color: ${theme.primaryBlue};
          border-radius: 4px; transition: 0.2s; font-size: 14px;
        }
        .alphabet-item:hover, .alphabet-item.active { background-color: ${theme.primaryBlue}; color: white; }
        
        .hover-gold:hover { color: ${theme.accentGold} !important; transition: color 0.2s; }
        .attorney-card { transition: transform 0.2s, box-shadow 0.2s; }
        .attorney-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1)!important; }
      `}</style>
    </>
  );
}