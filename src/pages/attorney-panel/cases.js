import React from "react";

export default function Cases() {
  const caseData = [
    { id: "CV-2025-001", type: "Civil", parties: "Amit Verma vs HDFC Bank", location: "Mumbai, MH", stage: "Evidence", nextHearing: "2025-12-20" },
    { id: "CR-2025-099", type: "Criminal", parties: "State vs Rahul Sharma", location: "Delhi, DL", stage: "Hearing", nextHearing: "2025-12-24" },
  ];

  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      {/* Header Area */}
      <div className="row mb-4 align-items-center">
        <div className="col-12 col-md-6">
          <h1 className="display-6 fw-bold text-dark" style={{fontFamily: 'serif'}}>Case Details</h1>
        </div>
        <div className="col-12 col-md-6 text-md-end mt-3 mt-md-0">
          <div className="btn-group shadow-sm">
            <button className="btn btn-dark active px-4">Open Cases</button>
            <button className="btn btn-outline-dark px-4">Closed Cases</button>
          </div>
        </div>
      </div>

      {/* Responsive Filter Card */}
      <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
        <div className="card-header bg-light py-3">
          <h6 className="mb-0 fw-bold text-dark"><i className="bi bi-search me-2"></i>Search Filters</h6>
        </div>
        <div className="card-body p-4">
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-lg-3">
              <input type="text" className="form-control form-control-lg fs-6" placeholder="Case Number" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <select className="form-select form-select-lg fs-6 text-muted">
                <option>Practice Area</option>
                <option>Civil</option>
                <option>Criminal</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <input type="text" className="form-control form-control-lg fs-6" placeholder="Attorney Name" />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <button className="btn btn-primary btn-lg w-100 fs-6 shadow-sm bg-navy border-0">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section - scrollable on mobile */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light border-bottom">
              <tr>
                <th className="p-3 small text-muted text-uppercase fw-bold">Case No</th>
                <th className="p-3 small text-muted text-uppercase fw-bold">Parties</th>
                <th className="p-3 small text-muted text-uppercase fw-bold">Location</th>
                <th className="p-3 small text-muted text-uppercase fw-bold text-center">Stage</th>
                <th className="p-3 small text-muted text-uppercase fw-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {caseData.map((item, idx) => (
                <tr key={idx}>
                  <td className="p-3 fw-bold text-dark">{item.id}</td>
                  <td className="p-3">
                    <div className="fw-bold small">{item.parties}</div>
                    <div className="text-muted" style={{fontSize: '11px'}}>{item.type} Case</div>
                  </td>
                  <td className="p-3 small text-muted">{item.location}</td>
                  <td className="p-3 text-center">
                    <span className="badge rounded-pill bg-info bg-opacity-10 text-info px-3">{item.stage}</span>
                  </td>
                  <td className="p-3 text-center">
                    <button className="btn btn-light btn-sm rounded-circle me-1"><i className="bi bi-eye"></i></button>
                    <button className="btn btn-light btn-sm rounded-circle"><i className="bi bi-cloud-download"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .bg-navy { background-color: #002147 !important; }
        .form-control:focus, .form-select:focus { border-color: #002147; box-shadow: none; }
      `}</style>
    </div>
  );
}