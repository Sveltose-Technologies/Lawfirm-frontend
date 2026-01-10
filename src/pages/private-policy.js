import React, { useEffect, useState } from "react";
import { getAllPrivacyPolicy } from "../services/authService";

const PrivacyNotice = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);

  const fetchPrivacyPolicy = async () => {
    const response = await getAllPrivacyPolicy();
    console.log("Privacy Policy Data:", response);

    if (response?.success && response?.data) {
      setSections(response.data);
    }
  };

  return (
    <div className="bg-light min-vh-100">
      {/* HERO */}
      <section
        className="text-center py-5"
        style={{ backgroundColor: "#c9a754", color: "#fff" }}
      >
        <h1 className="display-5 fw-bold pt-5">Privacy Notice</h1>
        <p className="lead">
          Your privacy matters. Learn how we handle your information.
        </p>
      </section>

      {/* CONTENT */}
      <main className="container py-5" style={{ maxWidth: "900px" }}>
        {sections.length > 0 ? (
          sections.map((section) => (
            <div
              key={section.id}
              className="mb-4 p-4 border rounded shadow-sm bg-white"
            >
              <h4 className="fw-bold">{section.title}</h4>

              {/* HTML CONTENT RENDER */}
              <div
                className="text-secondary"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No Privacy Policy Found</p>
        )}

      
      </main>
    </div>
  );
};

export default PrivacyNotice;
