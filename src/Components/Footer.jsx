// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
            As a front-end developer, I specialize in building responsive, modern web applications 
            using React and Bootstrap. I am dedicated to delivering clean, efficient code and a
             seamless user experience.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#about" className="text-light">About</a></li>
              <li><a href="#skills" className="text-light">Skills</a></li>
              <li><a href="#projects" className="text-light">Projects</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100050470084944" className="text-light me-3"><FaFacebook size={24} /></a>
              <a href="https://www.linkedin.com/in/mohamed-medhat-7307961b5/" className="text-light me-3"><FaLinkedin size={24} /></a>
              <a href="https://github.com/mohamedmedhatnabil" className="text-light me-3"><FaGithub size={24} /></a>
              <a href="https://wa.me/+201129565001" className="text-light me-3"><FaWhatsapp size={24} /></a> 
            </div>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Mohamed Medhat. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
