import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


//display all the created task
class TodoList extends React.Component {
    state = {
        display: "unfinished",
    }

    //change the display in state to the given parameter
    handleDisplay = (display) => {
        this.setState({
            display: display,
        });
    }

    //handle search function
    //search for all the task if the given parameter is a sub string

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
        //if search is empty, display based on display option
        //if search contains a string, display only the task that contains the substring
        let displaytodo = [];
        if (this.props.search !== "") {
            displaytodo = this.exeSearch(this.props.search);
        } else if (this.props.search === "") {
            if (this.state.display === "unfinished") {
                displaytodo = this.props.task.filter(todo => !todo.complete);
            } else if (this.state.display === "completed") {
                displaytodo = this.props.task.filter(todo => todo.complete);
            }
        }
        return (
            <div>
                {/* Grid to organise position and spaces */}
                <Grid
                    container
                    justify="center"
                >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        {/* button for display option on going task */}
                        <Button
                            color="primary"
                            onClick={() => this.handleDisplay("unfinished")}
                        >
                            <Typography variant="h5">
                                On going tasks
                            </Typography>
                        </Button>
                    </Grid>
                    {/* Extra grid for spacing of two button on the same line*/}
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
                    {/* Todo form component to handle input */}
                    <TodoForm
                        task={this.props.task}
                        display={this.state.display}
                        onSubmit={this.props.addTask}
                        completeAll={this.props.handleAll}
                    />
                </div>
                <div>
                    {/* Display the list of task in this div */}
                    <Grid container xs={12} justify="flex-start">
                        {displaytodo.map(todo => (
                            <Grid item xs={3}>
                                <Todo
                                    key={todo.key}
                                    todo={todo}
                                    onComplete={() => this.props.completeTask(todo.key)}
                                    display={this.state.display}
                                    onRemove={() => this.props.removeTask(todo)}
                                />
                            </Grid>
                        ))}
                    </Grid>

                </div>

            </div>
        );
    }
}


export default TodoList;