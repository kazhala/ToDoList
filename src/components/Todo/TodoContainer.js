import React from 'react';
import Todo from './Todo';
import Button from '@material-ui/core/Button';


const TodoContainer = props => {
    let remove = "";
    let option = "Complete";
    if (props.todo.complete === true) {
        remove = (<Button variant="contained" color="secondary" onClick={props.onRemove}>Remove</Button>);
        option = "revoke";
    }
    return (
        <Todo {...props} remove={remove} option={option} />
    )
}


export default TodoContainer;