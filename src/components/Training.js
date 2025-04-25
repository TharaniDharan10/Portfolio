import React from "react";
import { Container } from "react-bootstrap";

function Training() {
  return (
    <Container className="project-section" style={{ textAlign: "left" }}>
      <h1 className="project-heading">
        <strong className="purple">Training</strong> Ongoing
      </h1>
      <p style={{ color: "white" }}>
        I am currently undergoing a training program at <strong>Sure Trust</strong> as a Data Structures & Algorithms Intern. This training is focused on enhancing my problem-solving skills and deepening my understanding of Data Structures and Algorithms (DSA).
      </p>
      <h3 className="project-subheading">Sure Trust | Data Structures & Algorithms Intern (Ongoing)</h3>
      <p style={{ color: "white" }}>
        <strong>December ’24 – Present</strong>
      </p>
      <p style={{ color: "white" }}>
        • Gaining in-depth knowledge of Data Structures and Algorithms (DSA) through hands-on problem-solving.
      </p>
      <p style={{ color: "white" }}>
        • Engaging in structured learning sessions to improve problem-solving skills and algorithmic thinking.
      </p>
      <p style={{ color: "white" }}>
        • Applying DSA concepts to optimize solutions and enhance coding efficiency.
      </p>
      <h3 className="project-subheading">Project: False Alarm Detector App</h3>
      <p style={{ color: "white" }}>
        <strong>Tech Stack:</strong> Spring Boot, Langchain, React
      </p>
      <p style={{ color: "white" }}>
        I am also building a <strong>False Alarm Detector</strong> app, which detects false alarms in real-time conversations by analyzing content and sending alerts to the nearest authorities when necessary.
      </p>
    </Container>
  );
}

export default Training;
