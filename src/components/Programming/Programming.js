import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Achievements from "./Achievements";

function Programming() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={12}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                My <strong className="purple">Competitive Programming</strong> Journey
              </h1>
              <h2 style={{ fontSize: "1.3em", paddingBottom: "30px", color: "#c5e9e0" }}>
                Achievements & Accomplishments
              </h2>
            </Col>
          </Row>

          <Achievements />
        </Container>
      </Container>
    </>
  );
}

export default Programming;
