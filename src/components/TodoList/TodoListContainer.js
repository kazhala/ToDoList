import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { todoAction } from '../../redux/index';

const TodoListContainer = props => {
    let displaytodo = [];
    if (props.search !== "") {
        displaytodo = exeSearch(props.search, props.task);
    } else if (props.search === "") {
        if (props.display === "unfinished") {
            displaytodo = props.task.filter(todo => !todo.complete);
        } else if (props.display === "completed") {
            displaytodo = props.task.filter(todo => todo.complete);
        }
    }
    return (
        <TodoList {...props} displaytodo={displaytodo} />
    )
}

const exeSearch = (search, task) => {
    let displayarr = [];
    task.map((todo, index) => {
        if (todo.spec.includes(search)) {
            displayarr.unshift(todo);
        }
    });
    return displayarr;
}

const mapStateToProps = state => {
    return {
        task: state.taskReducer.task,
        search: state.searchReducer.search,
        display: state.displayReducer.display,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (todo) => dispatch(todoAction.addtodo(todo)),
        completeTask: (key) => dispatch(todoAction.completetodo(key)),
        removeTask: (todo) => dispatch(todoAction.removetodo(todo)),
        handleAll: (option) => dispatch(todoAction.handleall(option)),
        handleDisplay: (display) => dispatch(todoAction.changedisplay(display))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
