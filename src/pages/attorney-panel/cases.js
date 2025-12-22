import AttorneyLayout from '../../components/layout/AttorneyLayout';

export default function CaseDetails() {
  return (
    <div className="container-fluid">
       <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-navy" style={{fontFamily:'serif'}}>Case Details</h2>
          <div className="btn-group bg-white p-1 rounded-pill shadow-sm border">
             <button className="btn btn-sm btn-dark rounded-pill px-4">Open</button>
             <button className="btn btn-sm btn-light rounded-pill px-4">Closed</button>
          </div>
       </div>

       {/* TABLE AREA */}
       <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="table-responsive">
             <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                   <tr className="small text-uppercase fw-bold text-muted">
                      <th className="p-3">Case No</th><th className="p-3">Parties</th><th className="p-3">Stage</th><th className="p-3">Hearing</th>
                   </tr>
                </thead>
                <tbody>
                   <tr><td className="p-3 fw-bold">CV-2025-001</td><td className="p-3">Amit vs HDFC</td><td className="p-3"><span className="badge bg-navy px-3">Evidence</span></td><td className="p-3">20-12-2025</td></tr>
                </tbody>
             </table>
          </div>
       </div>
       <style jsx>{`.bg-navy { background: #002147; }`}</style>
    </div>
  );
}

