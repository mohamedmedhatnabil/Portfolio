// About.jsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image src="img/Mohamed.jpg" roundedCircle fluid />
          </Col>
          <Col md={8}>
            <h2>About Me</h2>
            <p>
              I am a passionate front-end developer with experience in building responsive web applications using React, Bootstrap, and other modern technologies.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
