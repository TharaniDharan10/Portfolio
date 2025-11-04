import React from "react";
import { Container } from "react-bootstrap";

function Education() {
  return (
    <Container className="project-section">
      <h1 className="project-heading" style={{ textAlign: "center" }}>
        <strong className="purple">Education</strong>
      </h1>
      <div style={{ color: "#e0e0e0", marginTop: "2rem", textAlign: "left" }}>
        <div className="project-item">
          <h4>
            <strong className="purple">Lovely Professional University</strong>
          </h4>
          <p style={{ marginBottom: "0.2rem" }}>
            <strong>Location:</strong> Punjab, India
          </p>
          <p>
            <strong>Degree:</strong> B.Tech in Computer Science and Engineering
          </p>
          <p>
            <strong>CGPA:</strong> 7.78
          </p>
          <p>
            <strong>Duration:</strong> September 2022 – Present
          </p>
        </div>
        <div className="project-item">
          <h4>
            <strong className="purple">Sainik School AmaravathiNagar</strong>
          </h4>
          <p>
            <strong>Location:</strong> Tamil Nadu, India
          </p>
          <p>
            <strong>12th (Science):</strong> 84.4%
          </p>
          <p>
            <strong>Duration:</strong> June 2020 – April 2021
          </p>
        </div>
        <div className="project-item">
          <h4>
            <strong className="purple">Sainik School AmaravathiNagar</strong>
          </h4>
          <p>
            <strong>10th (Science):</strong> 86.6%
          </p>
          <p>
            <strong>Duration:</strong> June 2018 – April 2019
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Education;
