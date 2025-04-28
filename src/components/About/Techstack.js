import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiJava, DiReact, DiGit, DiMongodb } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaRobot } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql } from "react-icons/si";
import "./Techstack.css"; // <- We'll use a small CSS file

function Techstack() {
  const techs = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaRobot />, name: "Ollama" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-wrapper">
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
