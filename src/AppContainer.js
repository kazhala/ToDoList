import React from 'react';
import { todoAction } from './redux/index';
import { connect } from 'react-redux';
import App from './App';

const AppContainer = props => {
    return (
        <App {...props} />
    );
}

const mapStateToProps = state => {
    return {
        search: state.searchReducer.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: (search) => dispatch(todoAction.updatesearch(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);