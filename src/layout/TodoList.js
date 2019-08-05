import React from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
            display: "all",
        };
    }

    addTask = (todo) => {
        let newTask = this.state.task.slice();
        newTask.unshift(todo);
        this.setState({
            task: newTask,
        });
    }

    handleComplete = id => {
        this.setState({
            task: this.state.task.map(todo => {
                if (todo.id === id) {
                    return ({
                        id: todo.id,
                        spec: todo.spec,
                        complete: !todo.complete,
                    });
                } else {
                    return todo;
                }
            })
        });
    }


    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTask} />
                {this.state.task.map(todo => (
                    <Todo
                        id={todo.id}
                        spec={todo.spec}
                        complete={todo.complete}
                    />
                ))}
            </div>
        );
    }
}