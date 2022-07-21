import { Form, InputGroup, Button } from 'react-bootstrap';
import './Task.css';


export default function Task(props) {
    return(
        <Form className='mb-3'>
            <InputGroup className='lg-3'>
                <InputGroup.Checkbox aria-label='Checkbox for following text input'/>
                <Form.Control aria-label='Text input with checkbox' placeholder={props.task} className='text-muted' disabled/>
                <InputGroup.Text>
                    <Button className='bg-white' variant="outline-danger bg-light.bg-gradient" id="button-addon2">X</Button>
                </InputGroup.Text>
            </InputGroup>
        </Form>
    );
}