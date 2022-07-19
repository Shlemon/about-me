import { useState } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap'

const showEntry = (props) => {
    alert(`Added to list ${props.data.item_name}`);
}

function SearchBar(props) {
    return(
    <Form>
        <Row className='align-items-center rounded mx-1'>
            <Col lg={10}>
                <Form.Label htmlFor='inlineFormInput' visuallyHidden>Name</Form.Label>
                <Form.Control className='mb-2 mt-3 bg-secondary bg-opacity-10' id='inlineFormInput' placeholder='Add item'></Form.Control>
            </Col>
            <Col lg={2}>
                <Button className='mb-2 mt-3' style={{height: '100%', width: '100%'}}>Add</Button>
            </Col>
        </Row>
    </Form>
    );
}

function Task(props) {
    return(
        <Form className='mb-3'>
            <InputGroup className='lg-3'>
                <InputGroup.Checkbox aria-label='Checkbox for following text input'/>
                <Form.Control aria-label='Text input with checkbox' placeholder='Task description' className='text-muted' disabled/>
                <InputGroup.Checkbox aria-label='Checkbox for following text input' />
            </InputGroup>
        </Form>
    );
}

function MainLayout(props) {
    return(
        <Container className='my-5'>
            <Card className='mx-5 my-5'>
                <Card.Header className='bg-white'>
                    <Row className='mt-2 mb-4'>
                        <Col className='text-start mx-5'>
                            Button
                        </Col>
                        <Col className='text-end mx-5'>
                            <div className='fs-2 fw-light'>Chores</div>
                        </Col>
                    </Row>
                    <Row className='mx-5 mb-2'>
                        <Col className='text-center'>
                            <SearchBar />
                        </Col>
                    </Row>
                </Card.Header>
                {/* Add tasks to do here */}
                <Card.Body className='mx-5 my-2'>
                    <Card.Title className='fs-5 fw-light'>TO DO</Card.Title>
                    <Card.Text className='text-center mx-5 my-4'>
                        <Task />
                        <Task />
                    </Card.Text>
                </Card.Body>
                {/* Add completed tasks to footer */}
                <Card.Footer className='mx-5 bg-white '>
                    <Card.Title className='fw-light'>Completed</Card.Title>
                    <Card.Text className='text-center'>
                        Completed tasks list
                    </Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    );
}


export default function ToDo() {
    return(
        <>
            <MainLayout />
        </>
    );
}