import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTemplate from '../components/card-template/CardTemplate';

import discord_img from '../assets/discord_logo.jpg';
import deepdream_img from '../assets/deepdream_logo.jpg';
import od_img from '../assets/od_logo.jpg';


const Portfolio = () => {
    const cardInfo1 = {title: "Discord Bot",
                       img: discord_img,
                       text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
                       buttontext: "View Source Code"};
    const cardInfo2 = {title: "Cheat Prevention App",
                       img: deepdream_img,
                       text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
                       buttontext: "View Project"};
    const cardInfo3 = {title: "DeepDream Generator",
                       img: od_img,
                       text: "DeepDream Generator produces hallucination-like visuals by maximizing the activations of `mixed` layers of InceptionV3 neural network.", 
                       buttontext: "View Project"};
    return (
        <>
        <Container fluid>
            <Row className="mx-2">
                <Col xl={4}>
                    <CardTemplate info={ cardInfo1 } />
                </Col>
                <Col xl={4}>
                    <CardTemplate info={ cardInfo2 } />
                </Col>
                <Col xl={4}>
                    <CardTemplate info={ cardInfo3 } />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Portfolio;