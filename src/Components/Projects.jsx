// Projects.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "Travel App",
    description: "A web app built with HTML and CSS.",
    imgSrc: "img/Travel.jpg",
    link: "https://mohamedmedhatnabil.github.io/travel/"
  },
  {
    title: "Resto App",
    description: "A web app built with HTML and CSS.",
    imgSrc: "img/resto.png",
    link: "https://mohamedmedhatnabil.github.io/resto/"
  },
  {
    title: "Simone Portfolio",
    description: "A portofolio using HTML, CSS, Bootstrap 5.",
    imgSrc: "img/simone.jpg",
    link: "https://mohamedmedhatnabil.github.io/simone-portofolio/"
  },
  {
    title: "Crud System",
    description: "A web app using HTML, CSS, JavaScript and local storage",
    imgSrc: "img/crud.png",
    link: "https://mohamedmedhatnabil.github.io/crud-system/"
  },
  {
    title: "Simple TODO",
    description: "Simple To Do List using react hooks useReducer, useRef and useEffect",
    imgSrc: "img/TODO.png",
    link: "https://66f0f0e890f66d6eb1803bb2--lively-fenglisu-316032.netlify.app/"
  },
  {
    title: "dashboard with search and sort and filter",
    description: "A web app built with React and Bootstrap.",
    imgSrc: "img/dashboard.png",
    link: "https://66d70bd65cc75233874a2937--earnest-jelly-706c3f.netlify.app/"
  },

];


const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 d-flex flex-column">
                <Card.Img variant="top" src={project.imgSrc} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} className="mt-auto">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;