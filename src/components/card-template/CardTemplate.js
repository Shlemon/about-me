import './CardTemplate.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function CardTemplate(props) {
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