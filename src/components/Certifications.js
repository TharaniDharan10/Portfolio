import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projects/ProjectCards"; // Assuming you already have this for displaying the cards
import cert1 from "../Assets/certificates/Cloud.png"; // Replace with your certification images
import cert2 from "../Assets/certificates/Solutions_Architecutre.png"
import cert3 from "../Assets/certificates/JPMorgan.png"; // Replace with your certification images
import cert4 from "../Assets/certificates/Java.png";
import cert5 from "../Assets/certificates/IBM.png";
import certification1 from "../Assets/certifications/Oracle_Associate.png";
import certification2 from "../Assets/certifications/Oracle_Professional.png";


function Certifications() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some Certifications that <strong className="purple">I earned</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Displaying certifications using ProjectCard component */}
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certification1}
              isBlog={false}
              title="Oracle Cloud Infrastructure 2025 Certified Architect Associate"
              description="Worked with Cloud as a whole."
              ghLink="https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7481308&trackId=OCI25CAA&key=3a31d00698bff399606916ce21aa83a81b55afb6" // Replace with actual certificate link
              type="certificate"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certification2}
              isBlog={false}
              title="Oracle Cloud Infrastructure 2025 Certified Developer Professional"
              description="Completed Professional Architecture in Cloud."
              ghLink="https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7481308&trackId=OCID25CP&key=ff59eff54daffe360c0186bd381876a77a254f69" // Replace with actual certificate link
              type="certificate"
            />
          </Col>
        </Row>
      </Container>


      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some Certificates that<strong className="purple"> I Own</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Displaying certifications using ProjectCard component */}
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert1}
              isBlog={false}
              title="Cloud Computing - NPTEl"
              description="Completed basics of Cloud."
              ghLink="https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020267604432672.pdf" // Replace with actual certificate link
              type="certificate"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert2}
              isBlog={false}
              title="Solutions Architecture - AWS"
              description="Completed basic Architecture in Cloud."
              ghLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_YnBgYoNpEf5iKbis9_1753196575165_completion_certificate.pdf" // Replace with actual certificate link
              type="certificate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert3}
              isBlog={false}
              title="Agile Job Simulation – JP Morgan Chase"
              description="Completed hands-on Agile simulation."
              ghLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._YnBgYoNpEf5iKbis9_1724096434962_completion_certificate.pdf" // Replace with actual certificate link
              type="certificate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert4}
              isBlog={false}
              title="Java Backend Development – GeeksforGeeks"
              description="Backend development using Java and Spring Boot."
              ghLink="https://media.geeksforgeeks.org/courses/certificates/992b47ab5d286be6ef84e95ffe22f787.pdf" // Replace with actual certificate link
              type="certificate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert5}
              isBlog={false}
              title="Introduction to Web Development – IBM"
              description="Learned HTML, CSS, and JavaScript for web development."
              ghLink="https://www.coursera.org/account/accomplishments/verify/ANCVJT8ADNVK?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" // Replace with actual certificate link
              type="certificate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
