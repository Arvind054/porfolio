import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import JungleImg from "../../Assets/Jungle.png";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container className="experience-content">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} className="experience-copy">
            <h1 className="project-heading">
              Work <strong className="purple">Experience</strong>
            </h1>
            <p className="experience-intro">
              One internship, one focused shipment: AI search, scraping,
              metadata extraction, access control, and a production backend.
            </p>

            <Card className="experience-card">
              <Card.Body>
                <div className="experience-header">
                  <div>
                    <div className="experience-role-row">
                      <img
                        src={JungleImg}
                        alt="Jungle"
                        className="experience-inline-logo"
                      />
                      <h2 className="experience-role">Software Developer Intern</h2>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-company">Jungle</span>
                      <span className="experience-location">Remote</span>
                    </div>
                  </div>
                  <div className="experience-dates">Nov 2025 - Jan 2026</div>
                </div>

                <ul className="experience-bullets">
                  <li>
                    Built an <strong>AI-powered tool-recommendation search pipeline</strong>; validated across 15+ edge cases and 5 LLMs, reducing irrelevant results by 35%.
                  </li>
                  <li>
                    Automated <strong>SERP scraping</strong> and <strong>AI metadata extraction pipeline</strong>, cutting tool onboarding time from 5 minutes to 2 minutes per entry (60% reduction).
                  </li>
                  <li>
                    Implemented role-based access control <strong>(RBAC)</strong> and an admin approval workflow, reducing spam and low-quality submissions by 25%.
                  </li>
                  <li>
                    Shipped a production backend on Next.js and PostgreSQL with zero downtime incidents.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;