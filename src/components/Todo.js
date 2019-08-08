import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default class Todo extends React.Component {
    render() {
        let remove = "";
        let option = "Complete";
        if (this.props.todo.complete === true) {
            remove = (<Button variant="contained" color="secondary" onClick={this.props.onRemove}>Remove</Button>);
            option = "revoke";
        }
        return (
            <Card style={{
                maxWidth: "200",
            }}>
                <Box border={1} borderRadius={16} bgcolor="background.paper" borderColor="grey.500">
                    <CardContent style={{
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        height: "10vw"
                    }}>
                        <Typography variant="body1" style={{
                            textDecoration: this.props.todo.complete ? "line-through" : ""
                        }}>
                            {this.props.todo.spec}
                        </Typography>
                    </CardContent>
                </Box>

                <CardActions border={1}>
                    <Button variant="contained" color="primary" onClick={this.props.onComplete}>{option}</Button>
                    {remove}
                </CardActions>
            </Card>
        );
    }
}

