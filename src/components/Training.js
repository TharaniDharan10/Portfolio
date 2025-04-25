import React from "react";
import { Container} from "react-bootstrap";

function Training() {
  return (
    <Container className="project-section" style={{ textAlign: "left" }}>
      <h1 className="project-heading" style={{ textAlign: "center" }}>
        <strong className="purple">Training</strong> Ongoing
      </h1>

      <p style={{ color: "#e0e0e0" }}>
        I am currently undergoing a training program at <strong>Sure Trust</strong> as a Data Structures & Algorithms Intern. This training is focused on enhancing my problem-solving skills and deepening my understanding of Data Structures and Algorithms (DSA).
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: "#cccccc", margin: 0 }}><strong className="purple">  Sure Trust | Data Structures & Algorithms Intern (Ongoing)</strong> 
        
        </h3>
        <p style={{ color: "#e0e0e0", margin: 0 }}>
          December ’24 – Present
        </p>
      </div>

      <p style={{ color: "#e0e0e0" }}>
        Gaining in-depth knowledge of Data Structures and Algorithms (DSA) through hands-on problem-solving.
      </p>
      <p style={{ color: "#e0e0e0" }}>
        Engaging in structured learning sessions to improve problem-solving skills and algorithmic thinking.
      </p>
      <p style={{ color: "#e0e0e0" }}>
        Applying DSA concepts to optimize solutions and enhance coding efficiency.
      </p>

      <h3 style={{ color: "#cccccc" }}>
      <strong className="purple"> Project: False Alarm Detector App </strong>
      </h3>
      <p style={{ color: "#e0e0e0" }}>
        <strong>Tech Stack:</strong> Spring Boot, Langchain, React
      </p>
      <p style={{ color: "#e0e0e0" }}>
        I am also building a <strong>False Alarm Detector</strong> app, which detects false alarms in real-time conversations by analyzing content and sending alerts to the nearest authorities when necessary.
      </p>

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
    marginTop: "1rem"
  }}
>
  View on GitHub
</a>

     
    </Container>
  );
}

export default Training;
