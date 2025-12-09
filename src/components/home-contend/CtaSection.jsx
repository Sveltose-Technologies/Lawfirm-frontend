// pages/cta.js

import Link from "next/link";

export default function CTA() {
  return (
    <div className="container-fluid p-0">

      {/* SECTION WITH BLUE BACKGROUND */}
      <div className="insights-section" style={{padding: '12px 10px', backgroundColor: '#fff'}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                   
                    <h2 className="display-5 fw-bold mb-4">Corporate Transparency Act Task Force</h2>
                   <p className="lead text-muted mb-5">
   On Jan. 1, 2024, the Corporate Transparency Act (CTA) took effect, requiring non-exempt U.S. entities and non-exempt foreign entities registered to do business in the United States to submit beneficial ownership information (BOI) reports to a confidential database maintained by the U.S. Department of the Treasury’s Financial Crimes Enforcement Network (FinCEN).
</p>

                    <Link href="/insights"><a className="eg-btn btn--primary btn--lg">Learn More</a></Link>
                </div>
                <div className="col-lg-6">
                     <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop" className="img-fluid rounded shadow-lg" alt="Insights" />
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
