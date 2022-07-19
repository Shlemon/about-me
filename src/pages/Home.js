import "./Home.css";

import discord_img from '../assets/discord_logo.jpg';
import deepdream_img from '../assets/deepdream_logo.jpg';
import od_img from '../assets/od_logo.jpg';

import mountains from '../assets/mountains.jpg';
import sea from '../assets/sea.jpg';
import { Carousel, Button, Col, Row, Container, } from "react-bootstrap";
import CardTemplate from "../components/card-template/CardTemplate";

function CarouselFade() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={mountains}
                alt="First slide"
                style={{height: "600px"}}
                />
                <Carousel.Caption>
                    <Button className="my-5" variant="outline-info">My AI Projects</Button>
                    <h3>AI Practitioner</h3>
                    <p>View My Projects with Data Science & AI Modeling</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sea}
                alt="Second slide"
                style={{height: "600px"}}
                />

                <Carousel.Caption>
                    <Button className="my-5" variant="outline-primary">My Front End Projects</Button>
                    <h3>Front End Developer</h3>
                    <p>View My Front End Web Development Projects</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function Home() {
    const cardInfo1 = {title: "Discord Bot",
                       img: discord_img,
                       text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
                       buttontext: "View Source Code"};
    const cardInfo2 = {title: "Cheat Prevention App",
                       img: od_img,
                       text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
                       buttontext: "View Project"};
    const cardInfo3 = {title: "DeepDream Generator",
                       img: deepdream_img,
                       text: "DeepDream Generator produces hallucination-like visuals by maximizing the activations of `mixed` layers of InceptionV3 NN.", 
                       buttontext: "View Project"};
    return (
        <>
            <CarouselFade />
            <Container fluid>
                <Row className="mt-5">
                    <Col md={12} className="text-center mt-5">
                        <h2 className="mb-2">Portfolio</h2>
                        <h5 className="fw-light">Some projects from my portfolio</h5>
                    </Col>
                </Row>
                <Row className="mt-3 mx-5">
                    <Col xl={4} className="text-center">
                        <CardTemplate info={cardInfo1} />
                    </Col>
                    <Col xl={4} className="text-center">
                        <CardTemplate info={cardInfo2} />
                    </Col>
                    <Col xl={4} className="text-center">
                        <CardTemplate info={cardInfo3} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={12}>
                        <h5 className="text-center">Test</h5>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;