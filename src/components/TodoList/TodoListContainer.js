import React from 'react';
import * as actionTypes from '../../redux/types';
import { connect } from 'react-redux';
import TodoList from './TodoList';

const TodoListContainer = props => {
    return (
        <TodoList {...props} />
    )
}

const mapStateToProps = state => {
    return {
        task: state.task,
        search: '',
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
        handleAll: (option) => dispatch({ type: actionTypes.HANDLE_ALL, payload: { option: option } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
