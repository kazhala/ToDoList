import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/mainReducer';

const store = createStore(reducer);


ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));