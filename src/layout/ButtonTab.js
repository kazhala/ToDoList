import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function TextButtons() {
    const classes = useStyles();
    let button = (
        <Button color="primary" className={classes.button}>
            Primary
      </Button>
    );
    if (this.props.type === "completed") {
        button = (
            <Button color="secondary" className={classes.button}>
                Secondary
            </Button>
        );
    }
    return (
        <div>
            {button}
        </div>
    );
}