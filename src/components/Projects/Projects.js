import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import qubicgen from "../../Assets/Projects/qubicgen.png"
import beakforneedy from "../../Assets/Projects/beakforneedy.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beakforneedy}
              isBlog={false}
              title="BeakForNeedy App"
              description="BeakForNeedy app connects NGO's / Social welfare centers to the common people to help who are in needy"
              ghLink="https://github.com/kethesainikhil/BakeForNeedyFrontend"
              demoLink="https://bake-for-needy-frontend-ir9t.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="used to shop items , able to select the items and add them to the cart . Able to filter based upon categories and it was completely developed by using MERN Stack with a payment method too by using RazorPay"
              ghLink="https://github.com/kethesainikhil/eccomerceFrontend/"
              demoLink="https://eccomerce-frontend-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qubicgen}
              isBlog={false}
              title="QUBIC Gen"
              description="Been a part of the website development part which included developing responsive Design for end users"
              ghLink="https://github.com/pmdnawaz1/qubic-gen"
              demoLink="https://www.qubicgen.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
