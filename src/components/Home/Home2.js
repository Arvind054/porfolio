import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <span className="purple">Arvind Choudhary</span>, an ECE
              student at <span className="purple">IIIT Tiruchirappalli</span>
              who enjoys turning ideas into fast, reliable web products.
              <br />
              <br />
              I’ve worked across
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, C++, Python, Node.js, and Next.js{" "}
                </b>
              </i>
              and I like building across both frontend and backend stacks.
              <br />
              <br />
              My focus is on
              <i>
                <b className="purple">
                  {" "}
                  scalable systems, monitoring tools, feature platforms, and
                  clean user experiences{" "}
                </b>
              </i>
              <br />
              <br />
              Outside of work, I keep building through competitive programming,
              open-source learning, and internships that ship measurable impact.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
