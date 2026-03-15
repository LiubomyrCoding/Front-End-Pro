import React from 'react';
import {Form, Button} from "react-bootstrap";

const TodoForm = ({newTask, handleInputChange, addTask}) => {
    return (
        <div>
            <Form>
                <input type="text"
                       placeholder="Enter a task..."
                       value={newTask}
                       onChange={handleInputChange} />
                <Button variant="success" onClick={addTask}>Add</Button>
            </Form>
        </div>
    );
};

export default TodoForm;