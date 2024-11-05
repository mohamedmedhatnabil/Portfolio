// Skills.jsx
import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center">Skills</h2>
        <div className="my-4">
          <h5>React</h5>
          <ProgressBar now={90} label="90%" />
          <h5>JavaScript</h5>
          <ProgressBar now={85} label="85%" />
          <h5>HTML & CSS</h5>
          <ProgressBar now={95} label="95%" />
          <h5>Bootstrap</h5>
          <ProgressBar now={80} label="80%" />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
