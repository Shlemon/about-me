import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import React from 'react';
import Task from '../components/task/Task';
import ApiGenerator from '../components/api-generator/ApiGenerator';
// import SearchBar from '../components/search-bar/SearchBar';


const TaskContext = React.createContext();

function MainLayout() {
    const [tasks, setTasks] = React.useState([]);

    return(
        <Container className='my-5'>
            <Row className='bg-success text-center'>
                <Col md={12}>
                    <h6>Result</h6>
                    <ApiGenerator data={{url: `https://api.publicapis.org/entries`}}/>
                </Col>
            </Row>
            <Card className='mx-5 my-5'>
                <Card.Header className='bg-white'>
                    <Row className='mt-2 mb-4'>
                        <Col className='text-start mx-5'>Button</Col>
                        <Col className='text-end mx-5 fs-2 fw-light'>Chores</Col>
                    </Row>
                    <Row className='mx-5 mb-2'>
                        <Col className='text-center'>
                            {/* From here, each task added below will be added to the main Array */}
                            <TaskContext.Provider value={[tasks, setTasks]}>
                                <SearchBar/>
                            </TaskContext.Provider>
                        </Col>
                    </Row>
                </Card.Header>
                {/* Add tasks to do here */}
                <Card.Body className='mx-5 my-2'>
                    <Card.Title className='fs-5 fw-light'>TO DO</Card.Title>
                    <Card.Text className='text-center mx-5 my-4'>
                        {/* And here, every time main Array is updated, add new Task entry */}
                        {
                            tasks.map(function(taskName, taskIndex)
                            {
                                return(
                                    <Task task={taskName}/>
                                );
                            })
                        }
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


function SearchBar(props) {
    const [stateItem, setStateItem] = React.useContext(TaskContext);
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


export default function ToDo() {
    return(
        <>
            <MainLayout />
        </>
    );
}