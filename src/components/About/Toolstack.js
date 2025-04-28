import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import "./Techstack.css"; // Assuming you already have CSS from before

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiMysql />, name: "MySQL Terminal" },
    { icon: <SiMongodb />, name: "MongoDB Compass" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-wrapper">
            {tool.icon}
            <p>{tool.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
