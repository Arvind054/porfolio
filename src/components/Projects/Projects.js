import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CgGitFork } from "react-icons/cg";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FlagShip from "../../Assets/Projects/Flagship.png";
import Trackly from "../../Assets/Projects/Trackly.png";
import NeuralMeet from "../../Assets/Projects/NeuralMeet.png";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Few of my latest projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlagShip}
              isBlog={false}
              title="Flagship"
              description="A scalable feature flag platform with percentage-based rollouts, rule-based targeting, Redis-backed caching, and audit logging for safe config changes. Built with Next.js, NeonDB, PostgreSQL, Drizzle ORM, TanStack Query, and Redis."
              ghLink="https://github.com/Arvind054/FlagShip"
              demoLink="https://flag-ship-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trackly}
              isBlog={false}
              title="Trackly"
              description="A real-time web monitoring platform that tracks production signals such as referrers, UTM parameters, session duration, bounce rate, and active users through live dashboards, Redis caching, event-driven queues, and a sub-3KB tracking script."
              ghLink="https://github.com/Arvind054/Trackly"
              demoLink="https://trackly-beta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NeuralMeet}
              isBlog={false}
              title="NeuralMeet"
              description="Built an AI-powered virtual meeting platform for real-time video calls with role-based AI agents. Implemented scalable APIs for meetings, transcripts, and recordings. Integrated backend job processing using Inngest."
              ghLink="https://github.com/Arvind054/Neural-Meet"
              demoLink="https://neural-meet.vercel.app/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
          <Col md={4} style={{ textAlign: "center" }}>
            <button
              onClick={() => window.open("https://github.com/Arvind054", "_blank")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 30px",
                backgroundColor: isHovered ? "#b45ce0" : "#c770f0",
                color: "white",
                border: "none",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "1.1em",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                boxShadow: isHovered ? "0 6px 16px rgba(199, 112, 240, 0.5)" : "0 4px 12px rgba(199, 112, 240, 0.3)",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CgGitFork style={{ marginRight: "10px", fontSize: "1.3em" }} />
              Visit My GitHub
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
