import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import TodoList from './layout/TodoList';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <Paper>
                    <TodoList />
                </Paper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));