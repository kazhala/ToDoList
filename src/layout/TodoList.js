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

    handleComplete = (key) => {
        this.setState({
            task: this.state.task.map(todo => {
                if (todo.key === key) {
                    return ({
                        key: todo.key,
                        spec: todo.spec,
                        complete: !todo.complete,
                    });
                } else {
                    return todo;
                }
            })
        });
    }

    handleDisplay = (display) => {
        this.setState({
            display: display,
        });
    }


    render() {
        let displaytodo = [];
        if (this.state.display === "all") {
            displaytodo = this.state.task.slice();
        } else if (this.state.display === "unfinished") {
            displaytodo = this.state.task.filter(todo => !todo.complete);
        } else if (this.state.display === "completed") {
            displaytodo = this.state.task.filter(todo => todo.complete);
        }
        return (
            <div>
                <TodoForm onSubmit={this.addTask} />
                {displaytodo.map(todo => (
                    <Todo
                        key={todo.key}
                        todo={todo}
                        onComplete={() => this.handleComplete(todo.key)}
                    />
                ))}
                <button onClick={() => this.handleDisplay("all")}>All task</button>
                <button onClick={() => this.handleDisplay("unfinished")}>On going tasks</button>
                <button onClick={() => this.handleDisplay("completed")}>Completed</button>
            </div>
        );
    }
}