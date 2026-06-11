import React from "react";
import { Row, Col } from "react-bootstrap";
import LeetCodeLogo from "../../Assets/programming/LeetCode.png";
import ICPCLogo from "../../Assets/programming/ICPC.png";
import CodeforcesLogo from "../../Assets/programming/Codeforces.png";
import CodeChefLogo from "../../Assets/programming/Codechef.png";
import IICPC from "../../Assets/programming/IICPC.png";

function Achievements() {
  const achievements = [
    {
      title: "LeetCode Knight",
      logo: LeetCodeLogo,
      description: "Max Rating 2050 | Top 1.5% Globally | 1000+ DSA problems solved",
      emoji: "⭐"
    },
    {
      title: "ICPC Asia West Regionalist",
      logo: ICPCLogo,
      description: "Qualified through regional rounds; one of India's most competitive programming contests. (2025)",
      emoji: "🏆"
    },
    {
      title: "IICPC CodeFest 2026",
      logo: IICPC,
      description: "Ranked 1830 out of 13,000+ participants in a multi-site offline contest.",
      emoji: "🎖️"
    },
    {
      title: "Codeforces Specialist",
      logo: CodeforcesLogo,
      description: "Max Rating: 1401",
      emoji: "🔥"
    },
    {
      title: "CodeChef 3-Star",
      logo: CodeChefLogo,
      description: "Max Rating: 1677",
      emoji: "⚡"
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {achievements.map((achievement, index) => (
        <Col md={6} lg={4} key={index} style={{ marginBottom: "30px", padding: "15px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(199, 112, 240, 0.03) 0%, rgba(92, 84, 165, 0.03) 100%)",
              backdropFilter: "blur(5px)",
              padding: "25px",
              borderRadius: "10px",
              border: "2px solid rgba(199, 112, 240, 0.4)",
              boxShadow: "0 8px 16px rgba(199, 112, 240, 0.1)",
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            className="achievement-card-hover"
          >
            <img
              src={achievement.logo}
              alt={achievement.title}
              style={{
                height: "80px",
                width: "80px",
                objectFit: "contain",
                margin: "0 auto 15px",
                filter: "drop-shadow(0 0 5px rgba(199, 112, 240, 0.3))"
              }}
            />
            <h4 style={{ color: "#c770f0", marginBottom: "10px", fontSize: "1.1em" }}>
              {achievement.emoji} {achievement.title}
            </h4>
            <p style={{ color: "#c5e9e0", marginBottom: "0", fontSize: "0.95em", lineHeight: "1.5" }}>
              {achievement.description}
            </p>
          </div>
        </Col>
      ))}
      <style>
        {`
          .achievement-card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(199, 112, 240, 0.4) !important;
          }
        `}
      </style>
    </Row>
  );
}

export default Achievements;
