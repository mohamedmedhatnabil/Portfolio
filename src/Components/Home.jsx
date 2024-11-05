// Home.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home"  className=" d-flex align-items-center home-section">
      <Container className="text-center">
        <h1>Hello, I'm Mohamed Medhat</h1>
        <p className="lead">I'm a Front-End Developer specializing in React</p>
        <Button href="#projects" variant="primary" size="lg">View My Work</Button>
      </Container>
    </section>
  );
};

export default Home;
