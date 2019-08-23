import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//set the state of initial value for the input field to empty
export default class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.props)}>
                    <Grid container>
                        <Grid item xs={3}></Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                value={this.props.text}
                                onChange={(e) => this.props.handleChange(e, this.props)}
                                placeholder="Enter tasks..."
                                required
                                style={{ width: 330 }}
                                inputProps={{ maxLength: 104 }}
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
                            {/* Only display this button when there's at least one task entered */}
                            {this.props.allB}
                        </Grid>
                    </Grid>

                </form>
            </div>
        );
    }
}

