import React from 'react';
import shortid from 'shortid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SplitButton from '../layout/SplitButton';

//set the state of initial value for the input field to empty
export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    //when the value in input field change, change the state accordingly
    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    }

    //when the form is submited, prevent the page from refreshing
    //creat a new task object and pass it to TodoList function onSubmit
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text !== '') {
            const todo = {
                key: shortid.generate(),
                spec: this.state.text,
                complete: false,
            }
            this.props.onSubmit(todo)
            this.setState({
                text: '',
            });
        } else if (this.state.text === '') {
            alert("Please enter task");
        }
    }


    render() {
        //if the list of task is not empty, display the complete all button
        let task = this.props.task;
        let display = this.props.display;
        let allB = <div></div>;
        if (task.length > 0) {
            if (display === "unfinished") {
                allB = (
                    <Button
                        color="secondary"
                        onClick={() => this.props.completeAll("complete")}
                        style={{ maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px' }}
                    >
                        Complete all
                </Button>
                );
            } else if (display === "completed") {
                allB = (
                    <Button
                        color="secondary"
                        onClick={() => this.props.completeAll("remove")}
                        style={{ maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px' }}
                    >
                        Remove all
                </Button>
                );
            }
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Grid container xs={12}>
                        <Grid item xs={3}></Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                value={this.state.text}
                                onChange={this.handleChange}
                                placeholder="Enter tasks..."
                                required
                                style={{ width: 330 }}
                                inputProps={{ maxLength: 120 }}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                color="secondary"
                                type="submit"
                                style={{ maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px' }}
                            >
                                add to task
                            </Button>
                        </Grid>
                        <Grid item>
                            {allB}
                        </Grid>
                    </Grid>

                </form>
            </div>
        );
    }
}