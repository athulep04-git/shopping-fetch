import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/cimage1.jpg';
import banner2 from '../assets/cimage2.jpg';
import banner3 from '../assets/cimage3.jpg';
import a from '../assets/1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Landing() {
  return (
    <div>
        <section>
            <Carousel>
                <Carousel.Item>
                <img className="d-block w-100" src={banner1} alt="First slide" style={{height: "650px",objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Shop the latest collections now.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100" src={banner2} alt="Second slide" style={{height: "650px",objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Best deals on all products.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100" src={banner3} alt="Third slide" style={{height: "650px",objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Discover exclusive offers today.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
        <Container>
            <Row>
                <Col>
                <img src={a} alt=""   style={{width:"500px",objectFit: "cover"}}/>
                </Col>
                <Col>
                <section className="d-flex flex-column justify-content-center align-items-center text-center my-5 py-5 bg-light rounded shadow-lg">
                    <h1 className="mb-4 display-4 fw-bold">Welcome</h1>
                    <p className="mb-4 lead text-secondary">
                        Start your journey with us
                    </p>
                    <Link to="/viewallproducts">
                        <Button variant="dark" size="lg" className="px-5 py-2">
                        Get Started
                        </Button>
                    </Link>
                </section>
                </Col>
                
            </Row>
            
        </Container>
        
    </div>
  );
}

export default Landing;


