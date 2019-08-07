import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import TodoList from './layout/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    handleChange = (searchvalue) => {
        this.setState({
            search: searchvalue
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Header onChange={this.handleChange} />
                </div>
                <div>
                    <TodoList search={this.state.search} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));