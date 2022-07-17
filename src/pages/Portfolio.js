import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardTemplate(props) {
    return (
    <Card className="my-3 bg-light bg-opacity-10">
        <Card.Img variant="top" src={props.info.img} style={ {height: "400px"} }/>
        <Card.Body>
            <Card.Title>{ props.info.title }</Card.Title>
            <Card.Text>{ props.info.text }</Card.Text>
            <Button variant="primary">{ props.info.buttontext }</Button>
        </Card.Body>
    </Card>
    );
}

const Portfolio = () => {
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
        <Container fluid>
            <Row className="mx-2">
                <Col md={4}>
                    <CardTemplate info={ cardInfo1 } />
                </Col>
                <Col md={4}>
                    <CardTemplate info={ cardInfo2 } />
                </Col>
                <Col md={4}>
                    <CardTemplate info={ cardInfo3 } />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Portfolio;