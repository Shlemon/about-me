import './CardTemplate.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function CardTemplate(props) {
    return (
    <Card className="my-3 bg-light bg-opacity-10" style={{height: '100%'}}>
        <Card.Img variant="top" src={props.info.img} style={ {height: "400px"} }/>
        <Card.Body>
            <Card.Title className="text-center">{ props.info.title }</Card.Title>
            <Card.Text>{ props.info.text }</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
            <Button variant="primary" id="btn-id">{ props.info.buttontext }</Button>
        </Card.Footer>
    </Card>
    );
}