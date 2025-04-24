import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tharani Dharan </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I am currently a Student at Lovely Professional University.
            <br />
            I pursue B Tech in Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing BasketBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing BadMinton
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Connections
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tharani Dharan </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
