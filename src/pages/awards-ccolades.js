

import React, { useState } from 'react';

// --- 1. MOCK DATA (Ye Data Excel Sheet jaisa hai) ---
const excelData = [
  { 
    id: 1, 
    presenter: "The Legal 500", 
    recipient: "Amit Sharma", 
    year: "2023", 
    award: "Leading Individual", 
    details: "Recognized for excellence in Corporate M&A." 
  },
  { 
    id: 2, 
    presenter: "Chambers and Partners", 
    recipient: "Priya Verma", 
    year: "2022", 
    award: "Band 1 Lawyer", 
    details: "Top ranked in Dispute Resolution." 
  },
  { 
    id: 3, 
    presenter: "Asian Legal Business", 
    recipient: "Rahul Mehta", 
    year: "2023", 
    award: "Rising Star", 
    details: "Awarded for significant contribution in IP Law." 
  },
  { 
    id: 4, 
    presenter: "Forbes Legal Powerlist", 
    recipient: "Amit Sharma", 
    year: "2021", 
    award: "Top 100 Lawyers", 
    details: "Featured in the prestigious powerlist." 
  },
  { 
    id: 5, 
    presenter: "The Legal 500", 
    recipient: "Firm Wide", 
    year: "2023", 
    award: "Tier 1 Firm", 
    details: "Banking and Finance Sector." 
  },
  { 
    id: 6, 
    presenter: "IBLJ Awards", 
    recipient: "Vikram Singh", 
    year: "2020", 
    award: "Deal Maker of the Year", 
    details: "For handling cross-border transactions." 
  },
];

function AwardsAccolades() {
  
  // --- States for Search Filters ---
  const [filters, setFilters] = useState({
    presenter: '',
    recipient: '', // Search Person Name
    year: ''
  });

  // --- State for Displayed Data ---
  const [data, setData] = useState(excelData);

  // --- Handle Input Change ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // --- Handle Search Logic ---
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = excelData.filter((item) => {
      return (
        item.presenter.toLowerCase().includes(filters.presenter.toLowerCase()) &&
        item.recipient.toLowerCase().includes(filters.recipient.toLowerCase()) &&
        item.year.includes(filters.year)
      );
    });
    setData(filteredData);
  };

  // --- Handle Reset ---
  const handleReset = () => {
    setFilters({ presenter: '', recipient: '', year: '' });
    setData(excelData);
  };

  return (
    <>
      {/* ==========================================================================
          1. BANNER SECTION
      ========================================================================== */}
      <div className="inner-banner-section" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/images/award-banner.png)', 
          padding: '140px 0', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
           <h1 className="text-white display-4 fw-bold">Awards & Accolades</h1>
           <p className="text-white lead">Recognizing Excellence in Legal Practice</p>
        </div>
      </div>

      {/* ==========================================================================
          2. SEARCH & FILTER SECTION
      ========================================================================== */}
      <div className="container py-5">
        
        {/* Search Card */}
        <div className="card shadow-sm border-0 mb-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body p-4">
                <h5 className="mb-4 fw-bold" style={{ color: '#0a1c38' }}>
                    <i className="bi bi-search me-2" style={{ color: '#CFA167' }}></i>
                    Search Awards
                </h5>
                <form onSubmit={handleSearch}>
                    <div className="row g-3">
                        
                        {/* Search by Presenter */}
                        <div className="col-md-3">
                            <label className="form-label fw-bold small text-muted">Presenter / Organization</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="e.g. Legal 500" 
                                name="presenter"
                                value={filters.presenter}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Search by Person Name */}
                        <div className="col-md-3">
                            <label className="form-label fw-bold small text-muted">Person Name / Recipient</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="e.g. Amit Sharma" 
                                name="recipient"
                                value={filters.recipient}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Search by Year */}
                        <div className="col-md-3">
                            <label className="form-label fw-bold small text-muted">Year</label>
                            <select 
                                className="form-select" 
                                name="year"
                                value={filters.year}
                                onChange={handleInputChange}
                            >
                                <option value="">All Years</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="col-md-3 d-flex align-items-end">
                            <button type="submit" className="btn text-white w-50 me-2" style={{ backgroundColor: '#0a1c38' }}>Search</button>
                            <button type="button" onClick={handleReset} className="btn btn-outline-secondary w-50">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {/* ==========================================================================
            3. DATA TABLE SECTION
        ========================================================================== */}
        <div className="table-responsive shadow-sm">
            <table className="table table-hover table-bordered align-middle mb-0">
                <thead className="text-white" style={{ backgroundColor: '#0a1c38' }}>
                    <tr>
                        <th className="py-3 ps-3">Year</th>
                        <th className="py-3">Presenter / Organization</th>
                        <th className="py-3">Awards / Rankings</th>
                        <th className="py-3">Recipient (Person/Firm)</th>
                        <th className="py-3">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row) => (
                            <tr key={row.id}>
                                <td className="ps-3 fw-bold" style={{ color: '#CFA167' }}>{row.year}</td>
                                <td className="fw-semibold">{row.presenter}</td>
                                <td>
                                    <span className="badge bg-light text-dark border">
                                        {row.award}
                                    </span>
                                </td>
                                <td>{row.recipient}</td>
                                <td className="text-muted small">{row.details}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-5">
                                <h5 className="text-muted">No records found matching your criteria.</h5>
                                <button className="btn btn-link text-decoration-none" onClick={handleReset}>Clear Filters</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
       
      </div>
    </>
  )
}

export default AwardsAccolades;