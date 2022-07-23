import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { TaskContext, FinishedTaskContext } from '../todo-context/TaskContext';
import './Task.css';


function Remove(form_id) {
    var f = document.getElementById(form_id);
    f.parentNode.removeChild(f);
}

export function Task(props) {
    const [task, setTask] = React.useContext(TaskContext);
    const [finishedState, setFinishedState] = React.useContext(FinishedTaskContext);
    const [id, setId] = React.useState(props.taskN.index);

    const onDeleteClick = () => {
        setTask(oldItemList => oldItemList.splice(id));
        Remove(id);
    }
    const onAddClick = () => {
        setFinishedState(oldArray => [...oldArray, props.taskN.name]);
        setTask(oldItemList => oldItemList.splice(id));
        Remove(id);
    }
    
    return(
        <Form className='mb-3' id={props.taskN.index}>
            <InputGroup className='lg-3'>
                <InputGroup.Text>
                    <Button onClick={onAddClick} className='bg-white' variant="outline-success bg-light.bg-gradient" id="button-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </Button>
                </InputGroup.Text>
                <Form.Control aria-label='Text input with checkbox' placeholder={props.taskN.name} className='text-muted' disabled/>
                <InputGroup.Text>
                    <Button onClick={onDeleteClick} className='bg-white' variant="outline-danger bg-light.bg-gradient" id="button-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Button>
                </InputGroup.Text>
            </InputGroup>
        </Form>
    );
}

export function FinishedTask(props) {
    return(
        <Form className='mb-3' id={props.taskN.index}>
            <InputGroup className='lg-3'>
                <Form.Control aria-label='Text input with checkbox' placeholder={props.taskN.name} className='text-muted text-center' disabled/>
            </InputGroup>
        </Form>
    );
}