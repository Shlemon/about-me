import {Form, Button, Row, Col} from 'react-bootstrap';
import { useState } from 'react';


export default function SearchBar() {
    const [temp, setTemp] = useState('');
    const [item, updateItem] = useState([]);
    
    const handleInputChange = (tempItem) => setTemp(tempItem.target.value);
    const onSubmit = () => {
        updateItem(oldArray => [...oldArray, temp]);
        setTemp('');
        console.log(item);
        alert(`Added item ${item}`);
    }

    return(
        <Form>
            <Row className='align-items-center rounded mx-1'>
                <Col lg={10}>
                    <Form.Label>
                        <ul>{item.map(function(val, index)
                            {
                                return(
                                    <li>Value: {val}</li>
                                );
                            })
                            }
                        </ul>
                    </Form.Label>
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