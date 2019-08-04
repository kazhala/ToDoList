import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


export default class Header extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Grid container spacing={0}>
                        <Grid item xs={10}>
                            <Typography variant="h6" noWrap>
                                Task Helper
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <div>
                                <SearchIcon />
                                <InputBase placeholder="search" />
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}