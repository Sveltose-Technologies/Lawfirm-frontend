"use client";

import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function HeroSection() {
  return (
    <Container fluid className="p-0 hero-section">

      {/* TOP SECTION */}
      <Row className="g-0 hero-row">
        <Col md={6}>
          <Image
            src="/images/person.png"
            alt="Person"
            width={800}
            height={600}
            className="img-fluid w-100 hero-image"
          />
        </Col>

        <Col md={6} className="hero-content gold-bg">
          <h2><strong>In Memoriam: Larry J. Hoffman</strong></h2>
          <p>
            It is with a heavy heart that we announce the passing of Larry J. Hoffman,
            one of Greenberg Traurig’s co-founders and the architect of the plan
            to build a global law firm. He passed on September 11, 2025, at 95.
          </p>

          <Button variant="dark" className="hero-btn">In Memoriam</Button>
        </Col>
      </Row>

      {/* BLUE SECTION */}
      <Row className="g-0 hero-row">
        <Col md={6} className="hero-content blue-bg">
          <h3><strong>Adapt. Act. Advance.</strong></h3>
          <p>
            In a rapidly changing world, having the right legal partner makes a vital difference.
            At Greenberg Traurig, we help clients master uncertainty through proactive legal
            strategies, skilled counsel, and access to vast resources worldwide.
          </p>

          <Button variant="dark" className="hero-btn">Learn More</Button>
        </Col>

        <Col md={6}>
          <Image
            src="/images/biglaw.png"
            alt="Biglaw"
            width={800}
            height={600}
            className="img-fluid w-100 hero-image"
          />
        </Col>
      </Row>

      {/* ---------- CSS HERE (same page) ---------- */}
      <style jsx>{`
        .hero-section {
          width: 100%;
        }

        .hero-row {
          min-height: 450px;
        }

        .hero-image {
          object-fit: cover;
          height: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px;
          color: #fff;
        }

        .gold-bg {
          background-color: #b8942c;
        }

        .blue-bg {
          background-color: #55a7cf;
        }

        .hero-btn {
          width: 160px;
          margin-top: 10px;
          font-weight: 600;
        }

        h2, h3 {
          margin-bottom: 20px;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 768px) {
          .hero-content {
            padding: 30px;
          }
          .hero-row {
            min-height: auto;
          }
        }
      `}</style>

    </Container>
  );
}
