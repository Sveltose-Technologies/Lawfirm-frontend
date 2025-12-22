import React from 'react';
import Head from 'next/head';

import Link from 'next/link';
function MediaContacts() {


  const theme = {
    textDark: '#000000',
    textGray: '#333333',
    borderGray: '#cccccc',
    accentGold: '#C5A059', // Wahi gold color jo contact page mein tha
    btnBorder: '#003366',
    bgLight: '#fdfdfd',
  };

  const contacts = [
    {
      name: "Jill Perry",
      title: "Managing Director/Chief Marketing Officer",
      phone: "+1 212 801 9231",
      email: "perryj@gtlaw.com"
    },
    {
      name: "Joey Kaiser",
      title: "Chief Communications Officer",
      phone: "+1 212 801 6983",
      email: "kaiserj@gtlaw.com"
    },
    {
      name: "Elaine Walker",
      title: "Director of Media Relations & Communications",
      phone: "+1 305 579 0832",
      email: "walkere@gtlaw.com"
    },
    {
      name: "Julie Kaplan",
      title: "Director of Marketing and Business Development",
      phone: "+1 310 586 7729",
      email: "kaplanj@gtlaw.com"
    },
    {
      name: "Stephen Rowe",
      title: "Director of Marketing and Business Development - London",
      phone: "+44 (0) 203 100 6780",
      email: "Stephen.Rowe@gtlaw.com"
    },
    {
      name: "Susanne Krüger",
      title: "Regional Marketing Director - Germany",
      phone: "+49 (0) 30 700 171-154",
      email: "susanne.krueger@gtlaw.com"
    }
  ];

  return (
    <>
      <Head>
        <title>Media Contacts | Law Firm</title>
      </Head>

      {/* HERO BANNER - Same as Contact Page */}
      <div className="media-hero position-relative d-flex align-items-center justify-content-center text-center">
        <div className="hero-bg" style={{
            backgroundImage: `url('/assets/images/banner-img3.png')`, // Wahi image use ki hai
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: -1
        }}></div>
        <div className="container py-5">
           <h1 className="display-3 fw-bold text-dark font-serif mt-5 pt-5" style={{ textShadow: '0px 0px 10px rgba(255,255,255,0.8)' }}>
             Media Contacts
           </h1>
        </div>
      </div>

      <div className="container py-5 mb-5">
        <div className="row">
          <div className="col-lg-8">
            <p className="mb-5 lead" style={{ color: theme.textGray }}>
              Please contact the following individuals with media inquiries.
            </p>

            {contacts.map((contact, index) => (
              <div key={index} className="mb-5 contact-block">
                <h2 className="font-serif fw-bold mb-1" style={{ color: theme.textDark }}>
                  {contact.name}
                </h2>
                <p className="mb-2 text-secondary" style={{ fontSize: '1.05rem' }}>
                  {contact.title}
                </p>
                <div className="contact-details">
                  <p className="mb-1">
                    <a href={`tel:${contact.phone}`} className="text-decoration-none text-dark">
                      {contact.phone}
                    </a>
                  </p>
                  <p className="mb-0">
                    <a href={`mailto:${contact.email}`} className="text-gold-link">
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}

           <Link href="/contact">
    <a className="btn-outline-custom mt-4 text-decoration-none d-inline-block">
        BACK TO CONTACT
    </a>
</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: "Times New Roman", Times, serif;
        }

        .media-hero {
            height: 400px;
        }

        .text-gold-link {
            color: ${theme.accentGold};
            text-decoration: underline;
            font-weight: bold;
            transition: color 0.3s;
        }
        .text-gold-link:hover {
            color: #000;
        }

        .btn-outline-custom {
            background: transparent;
            border: 2px solid ${theme.btnBorder};
            color: ${theme.btnBorder};
            padding: 12px 25px;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s;
        }
        .btn-outline-custom:hover {
            background-color: ${theme.btnBorder};
            color: #fff;
        }

        .contact-block h2 {
            font-size: 2rem;
        }

        @media (max-width: 768px) {
            .media-hero { height: 300px; }
            .display-3 { font-size: 2.5rem; }
            .contact-block h2 { font-size: 1.6rem; }
        }
      `}</style>
    </>
  );
}

export default MediaContacts;