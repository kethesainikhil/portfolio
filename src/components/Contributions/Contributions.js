import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContributionCard from "./ContributionCard";
import Particle from "../Particle";
import timeerror from "../../Assets/Contributions/Screenshot (62).png"
import typofixed from "../../Assets/Contributions/Screenshot (4).png"
import seperated from "../../Assets/Contributions/Screenshot (63).png"
function Contributions() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Contributions </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Contributions I've Made recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ContributionCard
              imgPath={timeerror}
              isBlog={false}
              title="TimeLineError"
              description="I have fixed the time error in the wemakedevs page as a part of napptive hackathon they announced the deadline of submission but some time related error was there in the website so I have fixed that and got them merged into the main code"
              ghLink="https://github.com/WeMakeDevs/wemakedevs/pull/535"
            />
          </Col>

          <Col md={4} className="project-card">
            <ContributionCard
              imgPath={typofixed}
              isBlog={false}
              title="TypoError"
              description="This Contribution also made to the wemakedevs website as there is an typo error in the website , I cloned the website and made the sufficent changes as it was a good first issue , a bit easy to solve and got that pull request merged into their codebase "
              ghLink="https://github.com/WeMakeDevs/wemakedevs/pull/521"
            />
          </Col>

          <Col md={4} className="project-card">
            <ContributionCard
              imgPath={seperated}
              isBlog={false}
              title="Good First Issues"
              description="good first issues seperated with the intermediate issues as both are combined by using filter option in the github I have made a change in the document."
              ghLink="https://github.com/facebook/react/pull/26475"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Contributions;
