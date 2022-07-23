import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React from 'react';
import './ToDo.css';
import { TaskContext, FinishedTaskContext } from '../components/todo-context/TaskContext';
import { Task, FinishedTask } from '../components/task/Task';
import ApiGenerator from '../components/api-generator/ApiGenerator';
import SearchBar from '../components/search-bar/SearchBar';


function MainLayout() {
    const [tasks, setTasks] = React.useState([]);
    const [finished, setFinished] = React.useState([]);

    const toggleMode = () => {
        // Add dark/light mode
    }

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
                        <Col lg className='text-start mx-5'>
                            <Button onClick={toggleMode} className='w-25 h-100' variant="outline-secondary bg-secondary.bg-gradient">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </Button>
                        </Col>
                        <Col lg className='text-end mx-5 fs-2 fw-light' id='chores-id'>Chores</Col>
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
                                    <TaskContext.Provider value={[tasks, setTasks]}>
                                        <FinishedTaskContext.Provider value={[finished, setFinished]}>
                                            <Task taskN={{name: taskName, index: (taskIndex+'a')}}/>
                                        </FinishedTaskContext.Provider>
                                    </TaskContext.Provider>
                                );
                            })
                        }
                    </Card.Text>
                </Card.Body>
                {/* Add completed tasks to footer */}
                <Card.Footer className='mx-5 bg-white '>
                    <Card.Title className='fw-light'>Completed</Card.Title>
                    <Card.Text className='text-center'>
                        {
                            finished.map(function(taskName, taskIndex)
                            {
                                return(
                                    <FinishedTask taskN={{name: taskName, index: (taskIndex+'a')}}/>
                                )
                            })
                        }
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