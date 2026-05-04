import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Arvind Choudhary</span> from{" "}
            <span className="purple">Jaipur, India</span>.
            <br />
            I’m pursuing a B.Tech in <span className="purple">ECE</span> at{" "}
            <span className="purple">IIIT Tiruchirappalli</span> and recently
            interned as a <span className="purple">Software Developer Intern</span>{" "}
            at <span className="purple">Jungle</span>.
            <br />
            During that internship, I worked on AI-powered tool discovery,
            SERP scraping, metadata extraction, RBAC, and a Next.js/PostgreSQL
            backend that shipped without downtime.
            <br />
            <br />
            Outside of work, I keep my energy split between product building,
            competitive programming, and activities that keep me grounded.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming and DSA
            </li>
            <li className="about-activity">
              <ImPointRight /> Table Tennis Club Coordination
            </li>
            <li className="about-activity">
              <ImPointRight /> Building scalable web systems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fast, useful, measurable products win."{" "}
          </p>
          <footer className="blockquote-footer">Arvind Choudhary</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
