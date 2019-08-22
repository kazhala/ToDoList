import React from 'react';
import * as actionTypes from '../../redux/types';
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