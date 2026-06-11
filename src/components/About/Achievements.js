import React from "react";
import { Row, Col } from "react-bootstrap";

function Achievements() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12} className="achievement-section">
        <div className="achievement-card">
          <h3 style={{ marginBottom: "20px", color: "#c770f0" }}>
            🏆 Competitive Programming Achievements
          </h3>
          
          <div className="achievement-item" style={{ marginBottom: "15px" }}>
            <p className="achievement-title">
              <strong>LeetCode Knight</strong>
            </p>
            <p style={{ margin: "5px 0", color: "#c5e9e0" }}>
              Max Rating 2050 | Top 1.5% Globally | 1000+ DSA problems solved
            </p>
          </div>

          <div className="achievement-item" style={{ marginBottom: "15px" }}>
            <p className="achievement-title">
              <strong>ICPC Asia West Regionalist (2025)</strong>
            </p>
            <p style={{ margin: "5px 0", color: "#c5e9e0" }}>
              Qualified through regional rounds; one of India's most competitive programming contests.
            </p>
          </div>

          <div className="achievement-item" style={{ marginBottom: "15px" }}>
            <p className="achievement-title">
              <strong>IICPC CodeFest 2026</strong>
            </p>
            <p style={{ margin: "5px 0", color: "#c5e9e0" }}>
              Ranked 1830 out of 13,000+ participants in a multi-site offline contest.
            </p>
          </div>

          <div className="achievement-item">
            <p className="achievement-title">
              <strong>Competitive Programming Ratings</strong>
            </p>
            <p style={{ margin: "5px 0", color: "#c5e9e0" }}>
              Codeforces Specialist (Max: 1401) • CodeChef 3-Star (Max: 1677)
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Achievements;
