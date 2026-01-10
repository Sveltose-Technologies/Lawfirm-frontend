"use client";

import React, { useEffect, useState } from "react";
import { getAllTermsConditions } from "../services/authService";

const TermsPage = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    fetchTerms();
  }, []);

  const fetchTerms = async () => {
    const response = await getAllTermsConditions();
    console.log("Terms Page Data:", response);

    if (response?.success && response?.data) {
      setTerms(response.data);
    }
  };

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: "400px",
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="display-1 text-dark fw-light" style={{ fontFamily: "serif" }}>
          Terms of Use
        </h1>
      </section>

      {/* --- CONTENT SECTION --- */}
      <main className="container py-5" style={{ maxWidth: "850px" }}>
        {terms.length > 0 ? (
          terms.map((item) => (
            <div key={item.id} className="lh-lg text-secondary mb-4" style={{ fontSize: "13px" }}>
              <h4 className="fw-bold text-dark mb-3">{item.title}</h4>

              {/* HTML CONTENT */}
              <div
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No Terms & Conditions Found</p>
        )}
      </main>
    </div>
  );
};

export default TermsPage;
