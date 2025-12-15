import React, { useState } from 'react';

// --- 1. MOCK DATA (Excel Row Format) ---
const promotersData = [
  {
    id: 1,
   image: '/assets/images/attorney2.png',
    name: "Adv. Rajesh Oberoi",
    designation: "Founding Partner",
    email: "rajesh@corelaw.com",
    phone: "+91 98765 43210",
    location: "New Delhi, India"
  },
  {
    id: 2,
    image: '/assets/images/attorney1.png',
    name: "Adv. Meera Kapoor",
    designation: "Managing Partner",
    email: "meera@corelaw.com",
    phone: "+91 98989 12345",
    location: "Mumbai, India"
  },
  {
    id: 3,
   image: '/assets/images/attorney3.png',
    name: "Adv. Vikram Singhania",
    designation: "Senior Partner (IP)",
    email: "vikram@corelaw.com",
    phone: "+91 99887 77665",
    location: "Bangalore, India"
  },
  {
    id: 4,
    image: '/assets/images/attorney6.png',
    name: "Adv. Anjali Desai",
    designation: "Associate Partner",
    email: "anjali@corelaw.com",
    phone: "+91 88776 65544",
    location: "New Delhi, India"
  },
  {
    id: 5,
    image: '/assets/images/attorney5.png',
    name: "Adv. Rohan Malhotra",
    designation: "Senior Counsel",
    email: "rohan@corelaw.com",
    phone: "+91 77665 54433",
    location: "Hyderabad, India"
  }
];

function Promoters() {
  
  // Search State
  const [searchTerm, setSearchTerm] = useState('');

  // Handle Search
  const filteredPromoters = promotersData.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      {/* ==========================================================================
          1. BANNER SECTION
      ========================================================================== */}
      <div className="inner-banner-section position-relative" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/images/promoter-banner.png)', 
          padding: '140px 0', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
           <h1 className="text-white display-4 fw-bold">Our Promoters</h1>
           <p className="text-white lead">The Visionary Leadership Team</p>
        </div>
      </div>

      {/* ==========================================================================
          2. TABLE SECTION (Excel Style)
      ========================================================================== */}
      <div className="container py-5">
        
        {/* Search Bar */}
        <div className="row mb-4 justify-content-between align-items-center">
            <div className="col-md-6">
                <h4 className="fw-bold" style={{ color: '#0a1c38' }}>Promoters Directory</h4>
            </div>
            <div className="col-md-4">
                <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-search text-muted"></i>
                    </span>
                    <input 
                        type="text" 
                        className="form-control border-start-0 ps-0" 
                        placeholder="Search by Name, Role or Location..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="card shadow-sm border-0">
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover table-striped align-middle mb-0" style={{ minWidth: '900px' }}>
                        <thead className="text-white" style={{ backgroundColor: '#0a1c38' }}>
                            <tr>
                                <th className="py-3 ps-4">Profile</th>
                                <th className="py-3">Name</th>
                                <th className="py-3">Designation</th>
                                <th className="py-3">Email</th>
                                <th className="py-3">Phone Number</th>
                                <th className="py-3 pe-4">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPromoters.length > 0 ? (
                                filteredPromoters.map((promoter) => (
                                    <tr key={promoter.id}>
                                        {/* Profile Pic */}
                                        <td className="ps-4 py-3">
                                            <img 
                                                src={promoter.image} 
                                                alt={promoter.name} 
                                                className="rounded-circle shadow-sm"
                                                width="50"
                                                height="50"
                                                style={{ objectFit: 'cover', border: '2px solid #de9f57' }}
                                            />
                                        </td>
                                        
                                        {/* Name */}
                                        <td className="fw-bold text-dark">
                                            {promoter.name}
                                        </td>

                                        {/* Designation */}
                                        <td>
                                            <span className="badge bg-light text-dark border">
                                                {promoter.designation}
                                            </span>
                                        </td>

                                        {/* Email (Clickable) */}
                                        <td>
                                            <a href={`mailto:${promoter.email}`} className="text-decoration-none" style={{ color: '#0a1c38' }}>
                                                {promoter.email}
                                            </a>
                                        </td>

                                        {/* Phone */}
                                        <td className="text-muted">
                                            {promoter.phone}
                                        </td>

                                        {/* Location */}
                                        <td className="pe-4">
                                            <i className="bi bi-geo-alt-fill me-1" style={{ color: '#de9f57' }}></i>
                                            {promoter.location}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-5">
                                        <p className="text-muted mb-0">No promoters found matching your search.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        {/* Mobile Scroll Hint */}
        <div className="d-block d-lg-none text-center mt-3 text-muted small">
            <i className="bi bi-arrow-left-right me-1"></i> Scroll table horizontally to view more details
        </div>

      </div>
    </>
  )
}

export default Promoters;