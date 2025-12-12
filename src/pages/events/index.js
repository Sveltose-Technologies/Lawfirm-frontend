// FILE: pages/events/index.js
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// --- DATA SOURCE ---
export const eventsData = [
  {
    id: 1,
    title: "26th Annual Berkeley - Stanford Advanced Patent Law Institute",
    date: "2025-12-04",
    time: "09:00 AM - 05:00 PM",
    location: "Stanford, CA, USA",
    type: "Conference",
    relatedProfessionals: ["Caroline K. Abbott"],
    topic: "Intellectual Property",
    registrationLink: "/register"
  },
  {
    id: 2,
    title: "Reconfiguration of Amparo in Mexico: Business Implications",
    date: "2025-12-04",
    time: "02:00 PM - 04:00 PM",
    location: "Virtual / Webinar",
    type: "Webinar",
    relatedProfessionals: ["Jacob M. Abdo"],
    topic: "International Law",
    registrationLink: "/register"
  },
  {
    id: 3,
    title: "Patent Litigation Trends in MedTech",
    date: "2025-12-10",
    time: "12:00 PM - 01:00 PM ET",
    location: "Online",
    type: "Webinar",
    relatedProfessionals: ["Darren J. Abernethy"],
    topic: "MedTech",
    registrationLink: "/register"
  },
  {
    id: 4,
    title: "Renewables M&A and Tax Equity Markets Preview",
    date: "2025-12-15",
    time: "02:00 PM - 03:00 PM ET",
    location: "New York, NY",
    type: "Seminar",
    relatedProfessionals: ["Charles J. Abrams"],
    topic: "Energy & Tax",
    registrationLink: "/register"
  },
  {
    id: 5,
    title: "Builders Association Holiday Party & Awards",
    date: "2025-12-20",
    time: "06:00 PM - 10:00 PM",
    location: "Miami, FL",
    type: "Networking",
    relatedProfessionals: ["Ejim Peter Achi"],
    topic: "Real Estate",
    registrationLink: "/register"
  }
];

export default function EventsPage() {
  const theme = {
    primaryBlue: '#002855',
    accentGold: '#cfa144',
    white: '#ffffff',
    lightGray: '#f8f9fa'
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ location: 'All', topic: 'All' });

  const locations = ['All', ...new Set(eventsData.map(e => e.location))].sort();
  const topics = ['All', ...new Set(eventsData.map(e => e.topic))].sort();

  const filteredEvents = useMemo(() => {
    return eventsData.filter(event => {
      if (searchTerm && !event.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (filters.location !== 'All' && event.location !== filters.location) return false;
      if (filters.topic !== 'All' && event.topic !== filters.topic) return false;
      return true;
    });
  }, [searchTerm, filters]);

  const getDayMonth = (dateStr) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
      year: date.getFullYear()
    };
  };

  return (
    <>
      <Head>
        <title>Events | Core Law</title>
      </Head>

      <div style={{ backgroundColor: theme.primaryBlue, padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="text-white display-4 fw-bold font-serif">Events & Webinars</h1>
          <p className="text-white lead">Connect with our legal experts.</p>
        </div>
      </div>

      <div className="py-5 bg-white">
        <div className="container">
          {/* Filters */}
          <div className="row mb-5 g-3">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Search events..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="col-md-3">
              <select className="form-select" value={filters.location} onChange={(e) => setFilters({...filters, location: e.target.value})}>
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select" value={filters.topic} onChange={(e) => setFilters({...filters, topic: e.target.value})}>
                {topics.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="col-md-2">
                <button className="btn btn-outline-danger w-100" onClick={() => {setSearchTerm(''); setFilters({location:'All', topic:'All'})}}>Reset</button>
            </div>
          </div>

          {/* List */}
          <div className="row g-4">
            {filteredEvents.length > 0 ? filteredEvents.map((event) => {
               const dateObj = getDayMonth(event.date);
               return (
                <div className="col-12" key={event.id}>
                   <div className="card border-0 shadow-sm overflow-hidden">
                      <div className="row g-0">
                         <div className="col-md-2 bg-light text-center p-3 d-flex flex-column justify-content-center align-items-center border-end">
                            <h2 className="fw-bold mb-0 text-primary display-5">{dateObj.day}</h2>
                            <span className="text-uppercase fw-bold text-muted">{dateObj.month}</span>
                            <small>{dateObj.year}</small>
                         </div>
                         <div className="col-md-10">
                            <div className="card-body p-4">
                               <span className="badge bg-secondary mb-2">{event.type}</span>
                               <h3 className="card-title mb-2">
                                  {/* Link Fix for dynamic routing */}
                                  <Link href={`/events/${event.id}`} passHref>
                                    <span className="text-decoration-none text-dark hover-gold" style={{cursor: 'pointer'}}>{event.title}</span>
                                  </Link>
                               </h3>
                               <p className="text-muted mb-2"><i className="bi bi-geo-alt-fill text-warning me-2"></i>{event.location}</p>
                               <div className="d-flex justify-content-between align-items-center mt-3">
                                  <Link href={`/events/${event.id}`} passHref>
                                     <span className="text-primary fw-bold text-decoration-none" style={{cursor: 'pointer'}}>View Details →</span>
                                  </Link>
                                  {/* Using prefetch=false to stop console 404s for register page */}
                                  <Link href={event.registrationLink} prefetch={false} passHref>
                                     <a className="btn btn-primary btn-sm px-4">Register</a>
                                  </Link>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
               );
            }) : (
                <div className="text-center py-5"><h4>No events found.</h4></div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{` .hover-gold:hover { color: ${theme.accentGold} !important; } `}</style>
    </>
  );
}