import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  getAllCareers, 
  getAllLocationCities, 
  getAllCapabilityCategories 
} from '../../services/authService';

export default function CareerOpenings() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🚀 Fetching Careers...");
        const careerRes = await getAllCareers();
        
        // --- DATA MAPPING FIX ---
        // Aapke log ke mutabiq data 'jobs' key ke andar hai
        if (careerRes && careerRes.jobs) {
          console.log("✅ Jobs found in API:", careerRes.jobs);
          setJobs(careerRes.jobs);
          setFilteredJobs(careerRes.jobs);
        } else {
          console.warn("⚠️ 'jobs' array not found in response", careerRes);
        }

      } catch (error) {
        console.error("❌ API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter Logic
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const temp = jobs.filter(job => 
      job.jobTitle?.toLowerCase().includes(query) || 
      job.jobCode?.toLowerCase().includes(query)
    );
    setFilteredJobs(temp);
  };

  if (loading) return <div className="text-center py-5">Loading Jobs...</div>;

  return (
    <>
      <Head><title>Career Openings</title></Head>
      
      <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', paddingBottom: '50px' }}>
        
        {/* Search Strip */}
        <div style={{ background: '#002855', padding: '40px 0' }}>
          <div className="container">
            <div className="bg-white p-3 rounded d-flex gap-2">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search by Title or Job Code..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-warning px-4 fw-bold" onClick={handleSearch} style={{backgroundColor: '#cfa144', color: '#fff'}}>SEARCH</button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              {/* Job Count */}
              <h5 className="mb-4 fw-bold">{filteredJobs.length} JOBS FOUND</h5>

              {/* Job List */}
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} className="card border-0 shadow-sm mb-3 p-4" style={{borderLeft: '5px solid #cfa144'}}>
                    <div className="d-flex justify-content-between">
                      <h4 style={{ color: '#002855', fontWeight: '700' }}>{job.jobTitle}</h4>
                      <span className="badge bg-light text-dark border">{job.jobCode}</span>
                    </div>
                    
                    <div className="d-flex gap-4 mt-2 text-muted small">
                      <span><i className="bi bi-geo-alt-fill me-1"></i> {job.location}</span>
                      <span><i className="bi bi-briefcase-fill me-1"></i> {job.jobType}</span>
                      <span><i className="bi bi-calendar-event me-1"></i> Posted: {job.postDate}</span>
                    </div>

                    <p className="mt-3 text-muted small">
                      <i className="bi bi-building me-1"></i> {job.address}
                    </p>

                    <div className="mt-3 d-flex justify-content-between align-items-center">
                       <div className="small text-muted">Posted on: {new Date(job.createdAt).toLocaleDateString()}</div>
                       <button className="btn btn-sm fw-bold" style={{color: '#cfa144', border: '1px solid #cfa144'}}>View Details</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-5 text-center rounded shadow-sm">
                  <p className="text-muted">No jobs available at the moment.</p>
                </div>
              )}
            </div>

            {/* Sidebar Widgets (As per your image) */}
            <div className="col-lg-4">
               <div className="bg-white p-4 shadow-sm mb-4">
                  <h6 className="fw-bold border-bottom pb-2">About Us</h6>
                  <p className="small text-muted">Core Law provides the platform clients need to operate in today's global network.</p>
                  <a href="#" className="small text-decoration-none fw-bold">Read More</a>
               </div>
               <div className="bg-white p-4 shadow-sm">
                  <h6 className="fw-bold border-bottom pb-2">Reasonable Accommodation</h6>
                  <p className="small text-muted">If you need assistance during the recruitment process, contact our HR team.</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container { max-width: 1140px; }
        .card { transition: 0.3s; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
      `}</style>
    </>
  );
}