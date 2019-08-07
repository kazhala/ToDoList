import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import TodoList from './layout/TodoList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


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
                <CssBaseline />
                <Container maxWidth="md">
                    <div>
                        <Header onChange={this.handleChange} />
                    </div>
                    <div>
                        <TodoList search={this.state.search} />
                    </div>
                </Container>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));