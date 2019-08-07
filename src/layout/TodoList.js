import React from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
            display: "unfinished",
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

    handleRemove = (todo) => {
        let temptask = this.state.task.slice();
        let index = temptask.indexOf(todo);
        temptask.splice(index, 1);
        this.setState({
            task: temptask,
        });
    }

    exeSearch = (search) => {
        let displayarr = [];
        this.state.task.map((todo, index) => {
            if (todo.spec.includes(search)) {
                displayarr.unshift(todo);
            }
        });
        return displayarr;
    }

    render() {
        let displaytodo = [];
        if (this.props.search !== "") {
            displaytodo = this.exeSearch(this.props.search);
        } else if (this.props.search === "") {
            if (this.state.display === "unfinished") {
                displaytodo = this.state.task.filter(todo => !todo.complete);
            } else if (this.state.display === "completed") {
                displaytodo = this.state.task.filter(todo => todo.complete);
            }
        }
        return (
            <div>
                <Grid
                    container
                    justify="center"
                >
                    <Grid item>
                        <Button
                            color="primary"
                            onClick={() => this.handleDisplay("unfinished")}
                        >
                            <Typography variant="h5">
                                On going tasks
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            onClick={() => this.handleDisplay("completed")}
                        >
                            <Typography variant="h5">
                                Completed tasks
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <div>
                    <TodoForm onSubmit={this.addTask} />
                </div>
                <div>
                    {displaytodo.map(todo => (
                        <Todo
                            key={todo.key}
                            todo={todo}
                            onComplete={() => this.handleComplete(todo.key)}
                            display={this.state.display}
                            onRemove={() => this.handleRemove(todo)}
                        />
                    ))}
                </div>

            </div>
        );
    }
}