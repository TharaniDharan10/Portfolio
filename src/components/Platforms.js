

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import leetcodeLogo from "../Assets/Platforms/leetcode.png";
import gfgLogo from "../Assets/Platforms/gfg.png";
import hackerrankLogo from "../Assets/Platforms/hackerrank.jpeg";
import code360Logo from "../Assets/Platforms/code360.jpeg";

function Platforms() {
  return (
    <Container className="platforms-section">
      <Row className="justify-content-center">
        <Col md={12}>
          <h1 className="section-heading text-center mt-4">
            <br></br>
            <strong className="purple">My Platforms</strong> 
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={3} className="platform-card">
          <a
            href="https://leetcode.com/u/THARANI_DHARAN/"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-tile"
          >
            <img src={leetcodeLogo} alt="LeetCode" className="platform-logo" />
            <h5>LeetCode</h5>
            <p className="platform-username">@THARANI_DHARAN</p>
            <p className="platform-link">Visit Profile</p>
          </a>
        </Col>

        <Col md={3} className="platform-card">
          <a
            href="https://www.geeksforgeeks.org/user/sthargv60/"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-tile"
          >
            <img src={gfgLogo} alt="GFG" className="platform-logo" />
            <h5>GeeksforGeeks</h5>
            <p className="platform-username">@sthargv60</p>
            <p className="platform-link">Visit Profile</p>
          </a>
        </Col>

        <Col md={3} className="platform-card">
          <a
            href="https://www.hackerrank.com/profile/tharanidharan10"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-tile"
          >
            <img
              src={hackerrankLogo}
              alt="HackerRank"
              className="platform-logo"
            />
            <h5>HackerRank</h5>
            <p className="platform-username">@tharanidharan10</p>
            <p className="platform-link">Visit Profile</p>
          </a>
        </Col>

        <Col md={3} className="platform-card">
          <a
            href="https://www.naukri.com/code360/profile/283f99ed-e4ca-4917-9f64-77b1ca597a8a"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-tile"
          >
            <img src={code360Logo} alt="Code360" className="platform-logo" />
            <h5>Code360</h5>
            <p className="platform-username">Naukri Code360 Profile</p>
            <p className="platform-link">Visit Profile</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Platforms;
