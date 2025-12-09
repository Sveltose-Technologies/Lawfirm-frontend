import React, { useState, useMemo } from 'react';
import Link from 'next/link';

function AttorneysPage() {
  
  // --- THEME COLORS ---
  const theme = {
    primaryBlue: '#002855', // Navy
    accentGold: '#de9f57',  // Gold
    white: '#ffffff',
    lightGray: '#f8f9fa',
    border: '#e0e0e0',
    star: '#ffc107' // Yellow for stars
  };

  // --- 1. MOCK DATA (With Rating & Price) ---
  const allAttorneys = [
    {
      id: 1,
      name: 'Caroline K. Abbott',
      role: 'Associate',
      phone: '1 202.530.8593',
      email: 'Caroline.Abbott@gtlaw.com',
      location: 'Washington, D.C.',
      category: 'Corporate', 
      rating: 5,
      hourlyRate: 350,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Jacob M. Abdo',
      role: 'Associate',
      phone: '1 612.259.9681',
      email: 'Jake.Abdo@gtlaw.com',
      location: 'Minneapolis',
      category: 'Intellectual Property',
      rating: 4,
      hourlyRate: 280,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Darren J. Abernethy',
      role: 'Shareholder',
      phone: '1 415.655.1261',
      email: 'abernethyd@gtlaw.com',
      location: 'San Francisco',
      category: 'Data Privacy',
      rating: 5,
      hourlyRate: 650,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Charles J. Abrams',
      role: 'Shareholder',
      phone: '1 561.650.7984',
      email: 'abramsc@gtlaw.com',
      location: 'West Palm Beach',
      category: 'Real Estate',
      rating: 3,
      hourlyRate: 450,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Ejim Peter Achi',
      role: 'Shareholder',
      phone: '1 212.801.6963',
      email: 'achie@gtlaw.com',
      location: 'New York',
      category: 'Corporate',
      rating: 5,
      hourlyRate: 850,
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Ashia D. Adams',
      role: 'Shareholder',
      phone: '+44 203 349 8800',
      email: 'Ashia.Adams@gtlaw.com',
      location: 'London',
      category: 'Real Estate',
      rating: 4,
      hourlyRate: 550,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
    }
  ];

  // --- 2. STATE VARIABLES ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');
  
  // Specific Filters from Excel
  const [filters, setFilters] = useState({
    category: 'All',
    location: 'All',
    rating: 'All',
    price: 'All'
  });
  
  const [sortOption, setSortOption] = useState('Alphabetical');

  // --- 3. HELPERS: Dropdown Lists ---
  const categories = ['All', ...new Set(allAttorneys.map(a => a.category))];
  const locations = ['All', ...new Set(allAttorneys.map(a => a.location))];
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  // --- 4. FILTER LOGIC ---
  const filteredData = useMemo(() => {
    return allAttorneys.filter(attorney => {
      
      // 1. Search Name
      if (searchTerm && !attorney.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;

      // 2. Alphabet Filter
      if (selectedLetter !== 'All' && !attorney.name.startsWith(selectedLetter)) return false;

      // 3. Category Filter
      if (filters.category !== 'All' && attorney.category !== filters.category) return false;

      // 4. Location Filter
      if (filters.location !== 'All' && attorney.location !== filters.location) return false;

      // 5. Rating Filter (User selects 4 stars -> Show 4 & 5 stars)
      if (filters.rating !== 'All') {
        const minStars = parseInt(filters.rating);
        if (attorney.rating < minStars) return false;
      }

      // 6. Price Filter
      if (filters.price !== 'All') {
        if (filters.price === 'low' && attorney.hourlyRate > 300) return false; // Cheap
        if (filters.price === 'mid' && (attorney.hourlyRate < 300 || attorney.hourlyRate > 600)) return false; // Medium
        if (filters.price === 'high' && attorney.hourlyRate < 600) return false; // Expensive
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'Alphabetical') return a.name.localeCompare(b.name);
      return a.role.localeCompare(b.role);
    });
  }, [searchTerm, selectedLetter, filters, sortOption]);

  // Handle Dropdown/Radio Changes
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
      {/* ================= HERO ================= */}
      <div style={{ backgroundColor: theme.primaryBlue, padding: '100px 0 60px 0', color: theme.white }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-uppercase fw-bold mb-3" style={{ color: theme.accentGold, letterSpacing: '2px' }}>
                Our Team
              </h5>
              <h1 className="display-4 fw-bold font-serif">Professionals</h1>
              <p className="lead opacity-75">Find the right attorney for your needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="py-5" style={{ backgroundColor: theme.white }}>
        <div className="container">
          <div className="row">
            
            {/* ================= LEFT SIDEBAR (EXCEL FILTERS ONLY) ================= */}
            <div className="col-lg-3 mb-5 pe-lg-4">
              
              {/* Search Box */}
              <div className="mb-4">
                <label className="fw-bold small text-muted mb-2">SEARCH BY NAME</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter Name..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="filters-box p-4 bg-light border rounded">
                <h5 className="fw-bold mb-4 pb-2 border-bottom" style={{ color: theme.primaryBlue }}>
                  Refine Results
                </h5>

                {/* FILTER 1: CATEGORY */}
                <div className="mb-4">
                  <label className="fw-bold small text-muted mb-2">CATEGORY</label>
                  <select 
                    className="form-select form-select-sm"
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* FILTER 2: LOCATION */}
                <div className="mb-4">
                  <label className="fw-bold small text-muted mb-2">LOCATION</label>
                  <select 
                    className="form-select form-select-sm"
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                  >
                    {locations.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>

                {/* FILTER 3: RATING */}
                <div className="mb-4">
                  <label className="fw-bold small text-muted mb-2">RATING</label>
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="r_all" checked={filters.rating === 'All'} onChange={() => handleFilterChange('rating', 'All')} />
                      <label className="form-check-label small" htmlFor="r_all">All Ratings</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="r_5" checked={filters.rating === '5'} onChange={() => handleFilterChange('rating', '5')} />
                      <label className="form-check-label small text-warning" htmlFor="r_5">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="r_4" checked={filters.rating === '4'} onChange={() => handleFilterChange('rating', '4')} />
                      <label className="form-check-label small" htmlFor="r_4">
                        4 Stars & Up
                      </label>
                    </div>
                  </div>
                </div>

                {/* FILTER 4: PRICE (Hourly Rate) */}
                <div className="mb-4">
                  <label className="fw-bold small text-muted mb-2">PRICE (HOURLY RATE)</label>
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="price" id="p_all" checked={filters.price === 'All'} onChange={() => handleFilterChange('price', 'All')} />
                      <label className="form-check-label small" htmlFor="p_all">Any Price</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="price" id="p_low" checked={filters.price === 'low'} onChange={() => handleFilterChange('price', 'low')} />
                      <label className="form-check-label small" htmlFor="p_low">Low (&lt; $300)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="price" id="p_mid" checked={filters.price === 'mid'} onChange={() => handleFilterChange('price', 'mid')} />
                      <label className="form-check-label small" htmlFor="p_mid">Mid ($300 - $600)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="price" id="p_high" checked={filters.price === 'high'} onChange={() => handleFilterChange('price', 'high')} />
                      <label className="form-check-label small" htmlFor="p_high">High (&gt; $600)</label>
                    </div>
                  </div>
                </div>

                <button onClick={handleReset} className="btn btn-outline-dark w-100 btn-sm mt-2">
                  Clear All Filters
                </button>

              </div>
            </div>

            {/* ================= RIGHT COLUMN (RESULTS) ================= */}
            <div className="col-lg-9">
              
              {/* FILTER 5: ALPHABET */}
              <div className="d-flex flex-wrap gap-2 mb-5 border-bottom pb-4">
                 <span onClick={() => setSelectedLetter('All')} className={`alphabet-item ${selectedLetter === 'All' ? 'active' : ''}`}>All</span>
                 {alphabet.map((letter) => (
                    <span key={letter} onClick={() => setSelectedLetter(letter)} className={`alphabet-item ${selectedLetter === letter ? 'active' : ''}`}>
                      {letter}
                    </span>
                 ))}
              </div>

           

              {/* --- ATTORNEY CARDS --- */}
              <div className="row">
                {filteredData.length > 0 ? (
                  filteredData.map((attorney) => (
                    <div key={attorney.id} className="col-12 mb-4">
                      <div className="card border-0 shadow-sm p-3 attorney-card">
                        <div className="row g-0 align-items-center">
                          
                          {/* CLICKABLE IMAGE */}
                          <div className="col-md-3 text-center position-relative">
                            <Link href={`/attorney/${attorney.id}`} passHref>
                              <a className="d-block" style={{cursor: 'pointer'}}>
                                <img 
                                  src={attorney.image} 
                                  alt={attorney.name} 
                                  className="img-fluid rounded" 
                                  style={{ width: '100%', maxWidth: '160px', height: '160px', objectFit: 'cover' }}
                                />
                              </a>
                            </Link>
                          </div>

                          {/* DETAILS */}
                          <div className="col-md-9 ps-md-4 mt-3 mt-md-0">
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h4 className="fw-bold mb-1">
                                  <Link href={`/attorney/${attorney.id}`}>
                                    <a className="text-decoration-none" style={{ color: theme.primaryBlue }}>{attorney.name}</a>
                                  </Link>
                                </h4>
                                <p className="text-uppercase small fw-bold mb-2" style={{ color: theme.accentGold }}>{attorney.role}</p>
                              </div>
                              <div className="text-end">
                                {/* Rating Stars */}
                                <div className="text-warning small mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
                                  ))}
                                </div>
                                <span className="badge bg-light text-dark border shadow-sm">
                                  ${attorney.hourlyRate} / hr
                                </span>
                              </div>
                            </div>

                            <div className="row text-muted small mt-2">
                              <div className="col-md-6 mb-1">
                                <i className="bi bi-geo-alt-fill me-2 text-gold"></i>{attorney.location}
                              </div>
                              <div className="col-md-6 mb-1">
                                <i className="bi bi-briefcase-fill me-2 text-gold"></i>{attorney.category}
                              </div>
                              <div className="col-md-6">
                                <i className="bi bi-telephone-fill me-2 text-gold"></i>{attorney.phone}
                              </div>
                              <div className="col-md-6">
                                <i className="bi bi-envelope-fill me-2 text-gold"></i>{attorney.email}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="alert alert-light text-center border py-5">
                    <h5>No professionals found.</h5>
                    <p className="text-muted small">Try adjusting the filters.</p>
                    <button onClick={handleReset} className="btn btn-outline-primary btn-sm mt-2">Reset All Filters</button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .text-gold { color: ${theme.accentGold}; }
        .alphabet-item {
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-weight: bold; color: ${theme.primaryBlue};
          border-radius: 4px; transition: 0.2s;
        }
        .alphabet-item:hover, .alphabet-item.active {
          background-color: ${theme.primaryBlue}; color: white;
        }
        .attorney-card:hover {
          transform: translateY(-3px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
}

export default AttorneysPage;