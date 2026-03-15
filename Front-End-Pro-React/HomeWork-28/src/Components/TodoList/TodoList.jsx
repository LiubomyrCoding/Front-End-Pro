import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const TodoList = ({tasks, done, setTasks, setDone, newTask}) => {

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
    const markAsDone = () => {
        setDone(!done)
    }

    return (
        <div>
            <ListGroup as="ul">
                    {tasks.map((task, index) => (
                        <li key={index}>{task}
                            <span>
                                {done && <span>✅</span>}
                            </span>
                            <Button variant='danger' onClick={() => deleteTask(index)}>Delete</Button>
                        </li>
                    ))}
                <Button className="h-25 d-inline-block w-25 p-3" onClick={markAsDone}>Mark them all as Done!...</Button>
            </ListGroup>
        </div>
    );
};

export default TodoList;