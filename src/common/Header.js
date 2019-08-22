import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';




const handleChange = (e, props) => {
    let searchvalue = e.target.value;
    props.onChange(searchvalue);
}


//This component is resposible for the app bar at the top of the webpage
export default class Header extends React.Component {
    state = {
        headSearch: '',
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={0}>
                        <Grid item xs={8}>
                            <Typography variant="h6" noWrap>
                                Task Helper
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item>
                                    <SearchIcon />
                                </Grid>
                                <Grid item>
                                    <InputBase
                                        defaultValue=""
                                        onChange={(e) => handleChange(e, this.props)}
                                        placeholder="search"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}