import React from 'react';
import * as actionTypes from './redux/types';
import { connect } from 'react-redux';
import App from './App';

const AppContainer = props => {
    return (
        <App {...props} />
    );
}

const mapStateToProps = state => {
    return {
        search: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: (search) => dispatch({ type: actionTypes.UPDATE_SEARCH, payload: { search: search } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);