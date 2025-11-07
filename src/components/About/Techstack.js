import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiJava,
  DiReact,
  DiGit,
  DiMongodb,
} from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
  FaRobot,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiApachekafka,
  SiKubernetes,
  SiTerraform,
  SiRedis,
  SiNginx,
  SiDjango, // ✅ Added Django icon
} from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import "./Techstack.css";

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
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiDjango />, name: "Django" }, // ✅ Added Django
    { icon: <SiApachekafka />, name: "Kafka" },
    { icon: <DiGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <TbWorldWww />, name: "HTTP" },
    { icon: <FaRobot />, name: "Ollama" },
    { icon: <MdSecurity />, name: "Mockito" },
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
