import React from 'react';
import TodoForm from './TodoForm';
import { todoAction } from '../../redux/index';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import shortid from 'shortid';



const TodoFormContainer = props => {
    let task = props.task;
    let display = props.display;
    let allB = <div></div>;
    if (task.length > 0) {
        if (display === "unfinished") {
            allB = (
                <Button
                    color="secondary"
                    onClick={() => props.completeAll("complete")}
                    style={{ maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px' }}
                >
                    Complete all
                </Button>
            ); //if display option is completed task, change complet all button to remove all button
        } else if (display === "completed") {
            allB = (
                <Button
                    color="secondary"
                    onClick={() => props.completeAll("remove")}
                    style={{ maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px' }}
                >
                    Remove all
                </Button>
            );
        }
    }
    return (
        <TodoForm {...props} allB={allB} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
}

const mapStateToProps = state => {
    return {
        text: state.textReducer.text,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleText: (text) => dispatch(todoAction.updatetext(text)),
        resetText: () => dispatch(todoAction.resettext())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer);


const handleSubmit = (e, props) => {
    e.preventDefault();
    const todo = {
        key: shortid.generate(),
        spec: props.text,
        complete: false,
    }
    props.onSubmit(todo);
    props.resetText();
}

const handleChange = (e, props) => {
    const text = e.target.value;
    props.handleText(text);
}


