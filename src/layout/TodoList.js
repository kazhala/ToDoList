import React from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//display all the created task
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        //store tasks in an array
        //display for display option control
        this.state = {
            task: [],
            display: "unfinished",
        };
    }

    //add task, copy the array from state, modify then set state
    addTask = (todo) => {
        let newTask = this.state.task.slice();
        newTask.unshift(todo);
        this.setState({
            task: newTask,
        });
    }

    //handle the completed taks, mark them as completed
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
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <Button
                            color="primary"
                            onClick={() => this.handleDisplay("unfinished")}
                        >
                            <Typography variant="h5">
                                On going tasks
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}>
                        <Button
                            color="primary"
                            onClick={() => this.handleDisplay("completed")}
                        >
                            <Typography variant="h5">
                                Completed tasks
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <div>
                    <TodoForm onSubmit={this.addTask} />
                </div>
                <div>
                    <Grid container xs={12} justify="flex-start">
                        {displaytodo.map(todo => (
                            <Grid item xs={3}>
                                <Todo
                                    key={todo.key}
                                    todo={todo}
                                    onComplete={() => this.handleComplete(todo.key)}
                                    display={this.state.display}
                                    onRemove={() => this.handleRemove(todo)}
                                />
                            </Grid>
                        ))}
                    </Grid>

                </div>

            </div>
        );
    }
}