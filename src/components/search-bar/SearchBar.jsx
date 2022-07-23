import {Form, Button, Row, Col} from 'react-bootstrap';
import React from 'react';
import { TaskContext } from '../todo-context/TaskContext';


export default function SearchBar() {
    const [item, setStateItem] = React.useContext(TaskContext);
    const [temp, setTemp] = React.useState('');
    
    
    const handleInputChange = (tempItem) => setTemp(tempItem.target.value);
    const onSubmit = () => {
        setStateItem(oldItemList => [...oldItemList, temp]);
        setTemp('');
    }

    return(
        <Form>
            <Row className='align-items-center rounded mx-1'>
                <Col lg={10}>
                    <Form.Label htmlFor='inlineFormInput' visuallyHidden>Name</Form.Label>
                    <Form.Control value={temp} onChange={handleInputChange} type='text' className='mb-2 mt-3 bg-secondary bg-opacity-10' id='inlineFormInput' placeholder='Add item'></Form.Control>
                </Col>
                <Col lg={2}>
                    <Button onClick={onSubmit} className='mb-2 mt-3' style={{height: '100%', width: '100%'}}>Add</Button>
                </Col>
            </Row>
        </Form>
    );
}