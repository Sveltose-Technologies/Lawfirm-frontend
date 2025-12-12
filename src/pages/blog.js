import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Intellectual Property Rights in 2024",
    category: "Corporate Law",
    date: "Dec 12, 2024",
    // Image: Copyright / Idea
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop", 
    excerpt: "A comprehensive guide to protecting your business assets, trademarks, and copyrights in the digital age."
  },
  {
    id: 2,
    title: "Real Estate Regulations: A Guide for Developers",
    category: "Real Estate",
    date: "Dec 10, 2024",
    // Image: Modern Building
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", 
    excerpt: "Navigating the complexities of RERA and new construction laws to ensure compliance in your projects."
  },
  {
    id: 3,
    title: "Divorce and Custody: Navigating Emotional Legalities",
    category: "Family Law",
    date: "Nov 28, 2024",
    // Image: Family / Hands
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=800&auto=format&fit=crop", 
    excerpt: "Expert advice on handling sensitive family matters with dignity while securing your rights."
  },
  {
    id: 4,
    title: "Cyber Crime: Protecting Your Company Data",
    category: "Criminal Law",
    date: "Nov 15, 2024",
    // Image: Cyber Security / Lock
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", 
    excerpt: "Steps every corporation must take to prevent data breaches and legal repercussions of cyber attacks."
  },
  {
    id: 5,
    title: "Mergers & Acquisitions: Key Pitfalls to Avoid",
    category: "Corporate Law",
    date: "Oct 22, 2024",
    // Image: Handshake
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", 
    excerpt: "Analyze the most common reasons why M&A deals fail and how legal due diligence can save the day."
  },
  {
    id: 6,
    title: "Workplace Harassment Laws: An HR Handbook",
    category: "Labor Law",
    date: "Oct 05, 2024",
    // Image: Meeting / Office
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop", 
    excerpt: "Ensuring your workplace policies are up to date with the latest labor laws and POSH act compliance."
  },
  {
    id: 7,
    title: "Startups & Legal Compliance: First Steps",
    category: "Corporate Law",
    date: "Sep 30, 2024",
    // Image: Startup / Laptop
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", 
    excerpt: "A checklist for new founders: Incorporation, GST, Founders Agreement, and ESOPs explained."
  },
  {
    id: 8,
    title: "Tenant vs Landlord: Understanding Eviction Laws",
    category: "Real Estate",
    date: "Sep 15, 2024",
    // Image: House Keys
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop", 
    excerpt: "What are your rights when facing eviction? We break down the legal procedures and protections."
  },
  {
    id: 9,
    title: "Bail vs Parole: The Criminal Justice System",
    category: "Criminal Law",
    date: "Aug 20, 2024",
    // Image: Justice Scales / Gavel
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", 
    excerpt: "Understanding the fundamental differences between bail, parole, and furlough in the justice system."
  },
  {
    id: 10,
    title: "Adoption Laws: A Step-by-Step Process",
    category: "Family Law",
    date: "Aug 10, 2024",
    // Image: Parent Child
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop", 
    excerpt: "Simplifying the complex legal paperwork required for domestic and inter-country adoption."
  },
  {
    id: 11,
    title: "GST Updates 2024: Impact on Small Business",
    category: "Tax Law",
    date: "Jul 25, 2024",
    // Image: Calculation / Money
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=800&auto=format&fit=crop", 
    excerpt: "How the recent GST council meeting decisions affect small and medium enterprise taxation."
  },
  {
    id: 12,
    title: "Drafting a Will: Why You Shouldn't Wait",
    category: "Family Law",
    date: "Jul 10, 2024",
    // Image: Writing / Pen
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop", 
    excerpt: "The importance of succession planning and how to draft a legally binding will to protect your legacy."
  }
];

const categories = ["All", "Corporate Law", "Criminal Law", "Family Law", "Real Estate", "Labor Law", "Tax Law"];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); 

  // --- SAFE CLICK HANDLER (Prevents 404/Alerts) ---
  const handleDeadClick = (e) => {
    e.preventDefault(); // Click hone par kuch nahi hoga
  };

  // --- FILTER LOGIC ---
  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // --- THEME COLORS (Matches OurFirm.js) ---
  const theme = {
    primaryBlue: '#0a1c38',
    accentGold: '#D4AF37',   
    lightGray: 'rgb(244, 247, 246)',
    white: '#ffffff',
    textDark: '#333333'
  };

  return (
    <section style={{ backgroundColor: theme.lightGray, minHeight: '100vh' }}>
      
      {/* --- HERO SECTION (Gradient Blue) --- */}
      <div className="d-flex align-items-center justify-content-center" style={{
          backgroundImage: `linear-gradient(rgba(10, 28, 56, 0.85), rgba(10, 28, 56, 0.85)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop)`, 
          minHeight: '50vh',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center',
          color: theme.white
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <span className="d-block mb-2 text-uppercase fw-bold" style={{ color: theme.accentGold, letterSpacing: '2px' }}>
                  Insights & News
              </span>
              <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'serif' }}>Legal Blog</h1>
              <p className="lead fs-5 text-white-50">
                Stay updated with the latest legal trends, firm announcements, and in-depth analysis.
              </p>
               {/* SEARCH BAR */}
                <div className="mt-4 d-flex justify-content-center">
                    <input 
                        type="text" 
                        placeholder="Search for topics..." 
                        className="form-control border-0 shadow"
                        style={{ 
                            maxWidth: '500px', 
                            padding: '15px 25px',
                            borderRadius: '30px',
                            fontSize: '1rem'
                        }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        
        {/* --- CATEGORY FILTERS --- */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                  className="btn fw-bold px-4 py-2 rounded-pill"
                  style={{
                    backgroundColor: activeCategory === cat ? theme.primaryBlue : theme.white,
                    color: activeCategory === cat ? theme.white : theme.primaryBlue,
                    border: `1px solid ${theme.primaryBlue}`,
                    fontSize: '14px',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="row g-4">
          {filteredPosts.slice(0, visibleCount).length > 0 ? (
            filteredPosts.slice(0, visibleCount).map((post) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <div 
                    className="card h-100 border-0 shadow-sm blog-card"
                    style={{ backgroundColor: theme.white, borderRadius: '8px', overflow: 'hidden' }}
                >
                  {/* Image Container with Safe Fallback */}
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: '#e0e0e0' }}>
                    <span 
                        className="position-absolute top-0 end-0 m-3 px-3 py-1 fw-bold text-white rounded-1"
                        style={{ backgroundColor: theme.accentGold, fontSize: '0.75rem', zIndex: 10, textTransform: 'uppercase' }}
                    >
                        {post.category}
                    </span>
                    <img 
                        src={post.image} 
                        className="card-img-top w-100 h-100" 
                        alt={post.title} 
                        style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                        onError={(e) => {
                             // Agar image load na ho, to yeh placeholder dikhega
                             e.target.onerror = null; 
                             e.target.src="https://via.placeholder.com/600x400/0a1c38/ffffff?text=Image+Not+Available";
                        }}
                    />
                  </div>

                  {/* Body */}
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-calendar3 me-2" style={{ color: theme.accentGold }}></i>
                        <small className="text-muted fw-bold">{post.date}</small>
                    </div>

                    {/* Title with Dead Click */}
                    <a href="#" onClick={handleDeadClick} className="text-decoration-none">
                        <h4 className="card-title fw-bold mb-3 blog-title" style={{ fontSize: '1.25rem', color: theme.primaryBlue, fontFamily: 'serif' }}>
                            {post.title}
                        </h4>
                    </a>

                    <p className="card-text mb-4 text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-3 border-top">
                        {/* Read More Link with Dead Click */}
                        <a 
                            href="#"
                            onClick={handleDeadClick}
                            className="text-decoration-none fw-bold d-flex align-items-center read-more"
                            style={{ color: theme.primaryBlue, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}
                        >
                            Read Article <span className="ms-2">&rarr;</span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
                <div className="py-5 bg-white shadow-sm rounded">
                    <h3 className="text-muted">No articles found matching "{searchTerm}"</h3>
                    <button 
                        className="btn btn-outline-dark mt-3" 
                        onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
          )}
        </div>

        {/* --- LOAD MORE BUTTON --- */}
        {visibleCount < filteredPosts.length && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button 
                onClick={handleLoadMore}
                className="btn fw-bold px-5 py-3 text-uppercase shadow-sm"
                style={{ 
                    backgroundColor: theme.primaryBlue, 
                    color: theme.white,
                    letterSpacing: '1px',
                    transition: 'all 0.3s'
                }}
              >
                Load More Articles
              </button>
            </div>
          </div>
        )}

      </div>
      
      {/* Styles */}
      <style jsx global>{`
        .blog-card:hover img {
            transform: scale(1.05);
        }
        .blog-card {
            transition: transform 0.3s ease;
        }
        .blog-card:hover {
            transform: translateY(-5px);
        }
        .blog-title:hover {
            color: ${theme.accentGold} !important;
        }
        .read-more:hover {
            color: ${theme.accentGold} !important;
            margin-left: 5px;
            transition: margin 0.3s;
        }
        .form-control:focus {
            box-shadow: 0 0 0 0.2rem rgba(10, 28, 56, 0.15);
        }
      `}</style>
    </section>
  );
}

export default Blog;