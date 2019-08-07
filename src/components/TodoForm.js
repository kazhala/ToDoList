import React from 'react';
import shortid from 'shortid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    }

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
                    </Grid>

                </form>
            </div>
        );
    }
}