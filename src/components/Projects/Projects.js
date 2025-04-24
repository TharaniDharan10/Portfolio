import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E Wallet"
              description="Developed a scalable microservice-based e-wallet system using Spring Boot, MySQL, Kafka, and Gradle-Kotlin.It enables real-time transactions and notifications.
               Built four core services—User, Wallet, Transaction, and Notification—integrated with Kafka for efficient inter-service communication"
              ghLink="https://github.com/TharaniDharan10/E_Wallet"
              demoLink="https://github.com/TharaniDharan10/E_Wallet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Library Management System"
              description="Built a secure and efficient monolithic Library Management System using Spring Boot, MySQL, Redis, and Maven, supporting book borrowing, returns, and fine collection. Integrated Spring Security for authentication, Redis for caching, and tested with Mockito to ensure reliability and performance."
              ghLink="https://github.com/TharaniDharan10/Library_Management_System"
              demoLink="https://github.com/TharaniDharan10/Library_Management_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tinder AI"
              description="Developed an AI-powered Tinder-like platform using Spring Boot, MongoDB, Llama, and React, enabling swipe-based matchmaking and real-time chat. Integrated Llama for gender-specific, context-aware conversations, delivering a dynamic and engaging user experience."
              ghLink="https://github.com/TharaniDharan10/tinder-ai-backend"
              demoLink="https://github.com/TharaniDharan10/tinder-ai-frontend"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
