import React from 'react';
import TodoForm from '../components/TodoForm';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }
    addtolist = todo => {
        let tasktodo = this.state.todos.slice();
        tasktodo.unshift(todo);
        this.setState({
            todos: tasktodo,
        });
    }


    render() {
        return (
            <TodoForm onSubmit={this.addtolist} />
        );
    }
}