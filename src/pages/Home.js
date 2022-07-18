import "./Home.css";
import mountains from '../assets/mountains.jpg';
import sea from '../assets/sea.jpg';
import { Carousel, Button, Col, Row, Container, Card } from "react-bootstrap";
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
                    <h3>AI Engineer</h3>
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
                    <h3>Front End Dev</h3>
                    <p>View My Front End Web Development Projects</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function Home() {
    const cardInfo1 = {title: "Discord Bot",
                       img: "https://th.bing.com/th/id/R.dcfb9025c7d52d61e541097ffd36ec06?rik=EZKfFRVSyMwgVw&pid=ImgRaw&r=0",
                       text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
                       buttontext: "View Source Code"};
    const cardInfo2 = {title: "Enhanced Object Detection for Cheat Prevention",
                       img: "https://th.bing.com/th/id/OIP.PdWyOgvA7qJyC8m9zb2NiAHaEK?pid=ImgDet&rs=1",
                       text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
                       buttontext: "View Project"};
    const cardInfo3 = {title: "DeepDream Generator",
                       img: "https://th.bing.com/th/id/OIP.PdWyOgvA7qJyC8m9zb2NiAHaEK?pid=ImgDet&rs=1",
                       text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
                       buttontext: "View Project"};
    return (
        <>
            <CarouselFade />
            <Container fluid>
                <Row className="my-5">
                    <Col md={12} className="text-center">
                        <h2 className="mb-2">Portfolio</h2>
                        <h5 className="fw-light">Some projects from my portfolio</h5>
                    </Col>
                </Row>
            <Row>
                <Col md={4} className="text-center border">
                    <CardTemplate info={cardInfo1} />
                </Col>
                <Col md={4} className="text-center border">
                    <CardTemplate info={cardInfo2} />
                </Col>
                <Col md={4} className="text-center border">
                    <CardTemplate info={cardInfo3} />
                </Col>
            </Row>
            </Container>
        </>
    );
};

export default Home;