import React from 'react';
import * as actionTypes from '../../redux/types';
import { connect } from 'react-redux';
import TodoList from './TodoList';

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
        addTask: (todo) => dispatch({
            type: actionTypes.ADD_TODO,
            payload: {
                key: todo.key,
                spec: todo.spec,
                complete: todo.complete
            }
        }),
        completeTask: (key) => dispatch({ type: actionTypes.COMPLETE_TODO, payload: { key: key } }),
        removeTask: (todo) => dispatch({ type: actionTypes.REMOVE_TODO, payload: { todo: todo } }),
        handleAll: (option) => dispatch({ type: actionTypes.HANDLE_ALL, payload: { option: option } }),
        handleDisplay: (display) => dispatch({ type: actionTypes.CHANGE_DISPLAY, payload: { display: display } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
