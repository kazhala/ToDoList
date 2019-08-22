import React from 'react';
import TodoContainer from '../Todo/TodoContainer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TodoFormContainer from '../TodoForm/TodoFormContainer';


//display all the created task
class TodoList extends React.Component {
    render() {
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
                            onClick={() => this.props.handleDisplay("unfinished")}
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
                            onClick={() => this.props.handleDisplay("completed")}
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
                    <TodoFormContainer
                        task={this.props.task}
                        display={this.props.display}
                        onSubmit={this.props.addTask}
                        completeAll={this.props.handleAll}
                    />
                </div>
                <div>
                    {/* Display the list of task in this div */}
                    <Grid container justify="flex-start">
                        {this.props.displaytodo.map(todo => (
                            <Grid item xs={3}>
                                <TodoContainer
                                    key={todo.key}
                                    todo={todo}
                                    onComplete={() => this.props.completeTask(todo.key)}
                                    display={this.props.display}
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