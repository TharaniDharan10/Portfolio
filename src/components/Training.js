import React from "react";
import { Container } from "react-bootstrap";

function Training() {
  return (
    <Container
      className="project-section"
      style={{
        textAlign: "left",
        position: "relative",
        minHeight: "100vh", // ensures full-page height for button placement
        paddingBottom: "80px", // space for the button
      }}
    >
      <h1 className="project-heading" style={{ textAlign: "center" }}>
        <strong className="purple">Training</strong>
      </h1>

      <p style={{ color: "#e0e0e0" }}>
        I attended the program at <strong>Sure Trust</strong> as a Data Structures & Algorithms Intern. This training was focused on enhancing my problem-solving skills and deepening my understanding of Data Structures and Algorithms (DSA).
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#cccccc", margin: 0 }}>
          <strong className="purple">
            Sure Trust | Data Structures & Algorithms Intern (Ongoing)
          </strong>
        </h3>
        <p style={{ color: "#e0e0e0", margin: 0 }}>December ’24 – July'25</p>
      </div>

      <p style={{ color: "#e0e0e0" }}>
        Gained in-depth knowledge of Data Structures and Algorithms (DSA) through hands-on problem-solving.
      </p>
      <p style={{ color: "#e0e0e0" }}>
        Engaged in structured learning sessions to improve problem-solving skills and algorithmic thinking.
      </p>
      <p style={{ color: "#e0e0e0" }}>
        Applied DSA concepts to optimize solutions and enhance coding efficiency.
      </p>

      <h3 style={{ color: "#cccccc" }}>
        <strong className="purple">Project: False Alarm Detector App</strong>
      </h3>
      <p style={{ color: "#e0e0e0" }}>
        <strong>Tech Stack:</strong> Spring Boot, Langchain, React
      </p>
      <p style={{ color: "#e0e0e0" }}>
        I have also built the <strong>False Alarm Detector</strong> app, which detects false alarms in real-time conversations by analyzing content and sending alerts to the admin authorities when necessary.
      </p>

      {/* Fixed Centered Button */}
      <div
        style={{
          position: "absolute",
          // bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <a
          href="https://github.com/TharaniDharan10/false-alarm-detector"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            backgroundColor: "#6c63ff",
            borderColor: "#6c63ff",
            color: "white",
            fontWeight: "500",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
          }}
        >
          View on GitHub
        </a>
      </div>
    </Container>
  );
}

export default Training;
