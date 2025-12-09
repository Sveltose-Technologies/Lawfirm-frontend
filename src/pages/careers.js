import React from 'react'

import Link from 'next/link'

function Careers() {
  return (
    <>
   
      
      {/* --- Page Banner --- */}
      <div className="inner-banner-section" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop)', 
          padding: '140px 0', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-white" style={{fontSize: '3.5rem', fontWeight: 'bold'}}>Careers</h1>
              <p className="text-white lead mb-4">Impact. Opportunity. Culture. Growth.</p>
              <Link href="/openings">
                <a className="eg-btn btn--primary btn--lg">View Openings and Apply</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 1: Law Students --- */}
      <div className="section-gap pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
               {/* Image: Law Students / Library */}
               <img 
                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
                 alt="Law Students" 
                 className="img-fluid rounded shadow-lg" 
               />
            </div>
            <div className="col-lg-6">
              <div className="pl-lg-4">
                <h2 className="mb-4">Law Students</h2>
                <p className="text-secondary">
                  With our broad geographic and practice platform, law students will find wide-ranging professional opportunities as they start their legal careers at Greenberg Traurig. We use creativity to educate – and ultimately empower – our new attorneys.
                </p>
                <p className="text-secondary">
                  In addition to our mentoring programs, we provide our new associates with high-level training in client management, business development, collaboration, and cultural skills. Our success hinges on our ability to develop a class of lawyers who can adapt to our clients’ emerging needs.
                </p>
                
                <div className="mt-4">
                  <h6 className="fw-bold mb-3 text-primary">Apply by Region:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <Link href="/careers/law-students/asia"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Asia</a></Link>
                    <Link href="/careers/law-students/europe"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Europe</a></Link>
                    <Link href="/careers/law-students/latin-america"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Latin America</a></Link>
                    <Link href="/careers/law-students/united-states"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">United States</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Attorneys (Grey Background) --- */}
      <div className="section-gap pt-100 pb-100 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
               {/* Image: Experienced Attorneys / Meeting */}
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                 alt="Attorneys" 
                 className="img-fluid rounded shadow-lg" 
               />
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pr-lg-4">
                <h2 className="mb-4">Attorneys</h2>
                <p className="text-secondary">
                  Our global platform provides our experienced attorneys with unique professional opportunities as they grow their legal careers. Greenberg Traurig values and promotes inclusion and empowers attorneys at all levels to shape their own paths to success.
                </p>
                <p className="text-secondary">
                  With sound financial management and a culture of entrepreneurship and collaboration, our attorneys are positioned to deliver both the quality and value that our clients seek, today and in the future.
                </p>
                
                <div className="mt-4">
                  <h6 className="fw-bold mb-3 text-primary">Apply by Region:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <Link href="/careers/attorneys/asia"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Asia</a></Link>
                    <Link href="/careers/attorneys/europe"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Europe</a></Link>
                    <Link href="/careers/attorneys/latin-america"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Latin America</a></Link>
                    <Link href="/careers/attorneys/united-states"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">United States</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 3: Professional Staff --- */}
      <div className="section-gap pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
               {/* Image: Professional Staff / Teamwork */}
               <img 
                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                 alt="Professional Staff" 
                 className="img-fluid rounded shadow-lg" 
               />
            </div>
            <div className="col-lg-6">
              <div className="pl-lg-4">
                <h2 className="mb-4">Professional Staff</h2>
                <p className="text-secondary">
                  We offer a supportive, stimulating environment that encourages the qualities we value most: collaboration, professionalism, determination, inclusion, and trust.
                </p>
                <p className="text-secondary">
                  We believe in promoting both professional and personal growth, along with pride of ownership, for every Greenberg Traurig employee.
                </p>
                
                <div className="mt-4">
                  <h6 className="fw-bold mb-3 text-primary">Apply by Region:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <Link href="/careers/staff/europe"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">Europe</a></Link>
                    <Link href="/careers/staff/united-states"><a className="btn btn-outline-dark btn-sm rounded-pill px-3">United States</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="text-muted fst-italic small">*Images on this page are not GT employees.</p>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Careers