import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`${props.title} image`}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
            {props.type === "certificate" ? (
              <>View Certificate</>
            ) : (
              <>
                <BsGithub /> &nbsp;GitHub
              </>
            )}
          </Button>
        )}

        {props.demoLink && props.type !== "certificate" && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
