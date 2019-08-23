import textReducer from './text/reducer';
import displayReducer from './display/reducer';
import searchReducer from './search/reducer';
import taskReducer from './task/reducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
    taskReducer: taskReducer,
    searchReducer: searchReducer,
    displayReducer: displayReducer,
    textReducer: textReducer
})

export default mainReducer;
