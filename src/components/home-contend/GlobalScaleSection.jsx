import React from "react";

const GlobalScaleSection = () => {
  return (
    <div className="global-section">
      
      {/* LEFT SIDE TEXT */}
      <div className="global-left">
        <h2>Global scale with street smarts.</h2>

        <p>
          With 51 locations, Greenberg Traurig’s global network provides
          the platform clients need to operate in today’s legal marketplace.
        </p>

        <p>
          Our team is recognized by rankings in current Chambers Guides in
          jurisdictions and practices around the world, based on thousands of
          interviews with practicing lawyers and clients. In addition, Greenberg
          Traurig is proud to have more lawyers listed in <i>The Best Lawyers in America®</i>
          than any other law firm, a position we have held since 2008.
        </p>

        <button className="explore-btn">EXPLORE LOCATIONS</button>
      </div>

      {/* RIGHT SIDE STATS */}
      <div className="global-right">
        <div className="stat-box blue-box">
          <h1>800+</h1>
          <p>RANKINGS<br />GLOBALLY BY<br />CHAMBERS</p>
        </div>

        <div className="stat-box dark-box">
          <h1>60+</h1>
          <p>LANGUAGES<br />SPOKEN</p>
        </div>

        <div className="stat-box dark-box">
          <h1>15</h1>
          <p>COUNTRIES</p>
        </div>
      </div>

      {/* ******** CSS HERE ******** */}
      <style jsx>{`
        .global-section {
          display: flex;
          gap: 40px;
          padding: 60px;
          background: #f8f9fa;
          border-radius: 20px;
          align-items: flex-start;
        }

        .global-left {
          flex: 1;
        }

        .global-left h2 {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .global-left p {
          color: #4a4a4a;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .explore-btn {
          background: #005bbb;
          color: #fff;
          padding: 12px 28px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .explore-btn:hover {
          background: #004999;
        }

        .global-right {
          flex: 0.8;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .stat-box {
          flex: 1;
          min-width: 150px;
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          color: white;
        }

        .blue-box {
          background: #4e8bd0;
        }

        .dark-box {
          background: #333;
        }

        .stat-box h1 {
          font-size: 40px;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .stat-box p {
          font-size: 14px;
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .global-section {
            flex-direction: column;
          }

          .global-right {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalScaleSection;
