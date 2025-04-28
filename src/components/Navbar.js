import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";  // Graduation cap icon
import { FaCode } from "react-icons/fa"; // Add this line to import the FaCode icon

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about#skills" onClick={() => updateExpanded(false)}>
                <FaCode style={{ marginRight: "8px" }} /> Skills
              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/certifications" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Certificates
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link as={Link} to="/platforms">
              <FaCode style={{ marginRight: "8px" }} />
              Platforms
            </Nav.Link>
          </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={Link} to="/training" onClick={() => updateExpanded(false)}>
                <MdOutlineCastForEducation style={{ marginBottom: "2px" }} /> Training
              </Nav.Link>
            </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/education">
                  <FaGraduationCap style={{ marginRight: "8px" }} /> 
                  Education
                </Nav.Link>
              </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
