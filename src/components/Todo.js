import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Todo extends React.Component {
    render() {
        let remove = "";
        let option = "Complete";
        if (this.props.todo.complete === true) {
            remove = (<Button variant="contained" onClick={this.props.onRemove}>Remove</Button>);
            option = "revoke";
        }
        return (
            <Card style={{ maxWidth: "200" }}>
                <CardContent style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                }}>
                    <Typography variant="body1" style={{
                        textDecoration: this.props.todo.complete ? "line-through" : ""
                    }}>
                        {this.props.todo.spec}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={this.props.onComplete}>{option}</Button>
                    {remove}
                </CardActions>
            </Card>
        );
    }
}

