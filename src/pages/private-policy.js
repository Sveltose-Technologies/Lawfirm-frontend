import React from "react";

const PrivacyNotice = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We may collect personal information you provide directly (like contact forms) and automatically (like IP addresses, browser type, pages visited, and cookies)."
    },
    {
      title: "How We Use Information",
      content:
        "Collected information helps us improve our services, respond to inquiries, and comply with legal obligations. We never sell your personal data."
    },
    {
      title: "Sharing With Third Parties",
      content:
        "We only share information when required by law, with trusted partners for services, or when you give explicit consent."
    },
    {
      title: "Your Rights",
      content:
        "You can request access, correction, or deletion of your personal information by contacting us. You can also manage cookies through your browser."
    },
    {
      title: "External Links",
      content:
        "Our site may contain links to other websites. We are not responsible for their privacy practices."
    }
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* HERO SECTION */}
      <section
        className="text-center py-5"
        style={{ backgroundColor: "#c9a754", color: "#fff" }}
      >
        <h1 className="display-4 fw-bold pt-5">Privacy Notice</h1>
        <p className="lead">Your privacy matters. Learn how we handle your information.</p>
      </section>

      {/* MAIN CONTENT */}
      <main className="container py-5" style={{ maxWidth: "900px" }}>
        {sections.map((section, index) => (
          <div
            key={index}
            className="mb-4 p-4 border rounded shadow-sm"
            style={{ backgroundColor: "#fff" }}
          >
            <h3 className="fw-bold">{section.title}</h3>
            <p className="text-secondary">{section.content}</p>
          </div>
        ))}

        <p className="mt-5 text-center fw-bold text-dark">
          © 2026 Greenberg Traurig, LLP; all rights reserved.
        </p>
      </main>

     
    </div>
  );
};

export default PrivacyNotice;
