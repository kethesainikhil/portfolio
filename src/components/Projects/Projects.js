import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import todoapp from "../../Assets/Projects/todo-app.png";
import portfolio from "../../Assets/Projects/portfolio.png"


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
              imgPath={todoapp}
              isBlog={false}
              title="TODo App"
              description="todo-app used to make a list of tasks they want to do and also mark them completed and keep a track on them , if those task is completed they can delete and add new task , able to edit the task "
              ghLink="https://github.com/kethesainikhil/react_todo"
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
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="personal portfolio website using ReactJs and it is used to showcase my skills as it was deployed in the internet and it is open sourced so that any one can use "
              ghLink="https://github.com/kethesainikhil/portfolio"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
