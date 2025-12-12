import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// --- IMPORT DATA FROM MAIN FILE ---
// Agar import kaam na kare to aap same 'attorneysData' array yahan bhi paste kar sakte hain
import { attorneysData } from './index'; 

function AttorneyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [attorney, setAttorney] = useState(null);

  const theme = {
    primaryBlue: '#002855',
    accentGold: '#de9f57',
    white: '#ffffff',
    lightGray: '#f9f9f9',
  };

  useEffect(() => {
    if (id) {
      // Find attorney by ID from the data source
      const found = attorneysData.find(item => item.id.toString() === id.toString());
      setAttorney(found);
    }
  }, [id]);

  if (!id) return <div className="text-center py-5">Loading...</div>;
  if (!attorney) return (
    <div className="text-center py-5">
      <h3>Attorney Not Found</h3>
      <Link href="/attorneys">
        <a className="btn btn-primary mt-3">Back to List</a>
      </Link>
    </div>
  );

  return (
    <>
      {/* HERO */}
      <div style={{ backgroundColor: theme.primaryBlue, paddingTop: '100px', paddingBottom: '60px', color: theme.white }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Profile Image */}
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0 text-center text-md-start">
              <img 
                src={attorney.image} 
                alt={attorney.name} 
                className="img-fluid rounded shadow-lg" 
                style={{ 
                  border: `4px solid ${theme.accentGold}`, 
                  width: '100%', 
                  maxWidth: '300px',
                  height: 'auto',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  objectPosition: 'top'
                }}
              />
            </div>

            {/* Basic Info */}
            <div className="col-lg-9 col-md-8 ps-md-5">
              <h4 className="text-uppercase fw-bold mb-2" style={{ color: theme.accentGold, letterSpacing: '1px' }}>
                {attorney.role}
              </h4>
              <h1 className="display-4 fw-bold font-serif mb-3 responsive-title">{attorney.name}</h1>
              
              <div className="d-flex flex-wrap gap-4 mb-4 text-white-50 info-icons">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-white"></i>
                  <span className="text-white">{attorney.location}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-white"></i>
                  <a href={`mailto:${attorney.email}`} className="text-white text-decoration-none">{attorney.email}</a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill text-white"></i>
                  <span className="text-white">{attorney.phone}</span>
                </div>
              </div>
              
              <div className="d-flex align-items-center gap-2">
                 <span className="badge bg-warning text-dark fs-6">${attorney.hourlyRate} / hr</span>
                 <div className="text-warning">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`bi bi-star${i < attorney.rating ? '-fill' : ''}`}></i>
                    ))}
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* DETAILS CONTENT */}
      <div className="py-5" style={{ backgroundColor: theme.white }}>
        <div className="container">
          <div className="row">
            
            {/* Left: Bio */}
            <div className="col-lg-8 pe-lg-5 mb-4">
              <h3 className="border-bottom pb-2 mb-4" style={{color: theme.primaryBlue, borderColor: theme.accentGold}}>Biography</h3>
              {attorney.bio?.map((para, idx) => (
                  <p key={idx} className="lead fs-6 text-secondary">{para}</p>
              ))}
              <div className="mt-4">
                  <Link href="/attorneys">
                    <a className="btn btn-outline-dark"><i className="bi bi-arrow-left me-2"></i>Back to Professionals</a>
                  </Link>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded border">
                 <h5 className="fw-bold mb-3" style={{color: theme.primaryBlue}}>Education</h5>
                 <ul className="list-unstyled text-secondary">
                    {attorney.education?.map((edu, i) => <li key={i} className="mb-2"><i className="bi bi-mortarboard me-2"></i>{edu}</li>)}
                 </ul>

                 <hr />

                 <h5 className="fw-bold mb-3" style={{color: theme.primaryBlue}}>Admissions</h5>
                 <ul className="list-unstyled text-secondary">
                    {attorney.admissions?.map((adm, i) => <li key={i} className="mb-2"><i className="bi bi-check-circle me-2"></i>{adm}</li>)}
                 </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
            .responsive-title { font-size: 2.5rem; }
            .info-icons { flex-direction: column; gap: 10px !important; }
        }
      `}</style>
    </>
  );
}

export default AttorneyDetails;