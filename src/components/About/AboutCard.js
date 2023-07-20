import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi All, I am <span className="purple">Kethe Sai Nikhil </span>
            from <span className="purple"> Anantapur, India.</span>
            <br /> I am a final year student pursuing a Batchelor's of Technology in the stream of CSE(Data Science) from Srinivasa Ramanujan Institute of Technology
            <br />
            <br />
            Apart from coding, some other things that I do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Invest on Crypto Currency
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving My Portifolio
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Quality is better than Quantity!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Nikhil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
