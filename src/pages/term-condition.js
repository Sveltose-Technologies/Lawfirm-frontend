"use client";

import React from "react";

const TermsPage = () => {
  const locations = [
    "Abu Dhabi*", "Albany", "Amsterdam", "Aspen", "Atlanta", "Austin", "Berlin ~", "Boston", "Charlotte", "Chicago", "Dallas", "Delaware", "Denver", "Dubai<",
    "Fort Lauderdale", "Houston", "Las Vegas", "London*", "Long Island", "Los Angeles", "Mexico City+", "Miami", "Milan»", "Minneapolis", "Munich ~",
    "New Jersey", "New York", "Northern Virginia", "Orange County", "Orlando", "Philadelphia", "Phoenix", "Portland", "Riyadh«", "Sacramento",
    "Salt Lake City", "San Diego", "San Francisco", "São Paulo>", "Seoul∞", "Shanghai", "Silicon Valley", "Singapore*", "Tallahassee", "Tampa",
    "Tel Aviv^", "Tokyo¤", "Warsaw~", "Washington, D.C.", "West Palm Beach", "Westchester County"
  ];

  return (
    <div className="bg-white">
     
      {/* --- HERO SECTION --- */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: '400px',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="display-1 text-dark fw-light" style={{ fontFamily: 'serif' }}>Terms of Use</h1>
      </section>

      {/* --- CONTENT SECTION --- */}
      <main className="container py-5" style={{ maxWidth: '850px' }}>
        <div className="lh-lg text-secondary" style={{ fontSize: '15px' }}>
          <p>The content of this website is intended to convey general information about Greenberg Traurig. It should not be relied upon for legal advice; nor does this website or your use of it create an attorney-client relationship between you and Greenberg Traurig...</p>
          <p>Greenberg Traurig makes no warranties, representations or claims with respect to any of the information on this website. We try to maintain current information, but do not guarantee the currency, accuracy or completeness of the information.</p>
          <p>Some links within this website lead you to other sites. Those other sites are provided for your convenience. Our links to those sites are not an endorsement of them or approval of content on them.</p>
          <p>You may not use the material on this website for anything other than personal informational purposes. If you wish to use the material for any other purposes, please contact Greenberg Traurig’s General Counsel.</p>
          <p>The owners of the email addresses on this site do not wish to receive unsolicited email messages for services or products; so please do not send anything like that.</p>
          <p className="mt-4 fw-bold text-dark">© 2026 Greenberg Traurig, LLP; all rights are reserved.</p>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
