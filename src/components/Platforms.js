import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projects/ProjectCards"; // Using the same card component
import leetcodeLogo from "../Assets/Platforms/leetcode.png";
import gfgLogo from "../Assets/Platforms/gfg.png";
import hackerrankLogo from "../Assets/Platforms/hackerrank.png";
import code360Logo from "../Assets/Platforms/code360.jpeg";
import GitHubCalendar from "react-github-calendar";

function Platforms() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Platforms</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some coding platforms where I actively practice.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leetcodeLogo}
              isBlog={false}
              title="LeetCode"
              description={<p className="text-center">@THARANI_DHARAN</p>} // Center-aligned description
              ghLink="https://leetcode.com/u/THARANI_DHARAN/"
              type="platform"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code360Logo}
              isBlog={false}
              title="Code360"
              description={<p className="text-center">@83f99ed-e4ca-4917-9f64-77b1ca597a8a</p>} // Center-aligned description
              ghLink="https://www.naukri.com/code360/profile/283f99ed-e4ca-4917-9f64-77b1ca597a8a"
              type="platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gfgLogo}
              isBlog={false}
              title="GeeksforGeeks"
              description={<p className="text-center">@sthargv60</p>} // Center-aligned description
              ghLink="https://www.geeksforgeeks.org/user/sthargv60/"
              type="platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackerrankLogo}
              isBlog={false}
              title="HackerRank"
              description={<p className="text-center">@tharanidharan10</p>} // Center-aligned description
              ghLink="https://www.hackerrank.com/profile/tharanidharan10"
              type="platform"
            />
          </Col>

        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="TharaniDharan10"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>

      </Container>
    </Container>
  );
}

export default Platforms;
