import React from 'react';
import Header from './common/Header';
import TodoListContainer from './components/TodoList/TodoListContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

//index component to display the page to html
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }
    //added search space for search function
    //search form and display list is from two components
    handleChange = (searchvalue) => {
        this.setState({
            search: searchvalue
        });
    }

    render() {
        return (
            <div style={{ backgroundColor: '#cfe8fc', minHeight: "100vh" }} >
                <CssBaseline />
                <Container
                    maxWidth="md"
                >
                    <div>
                        <Header onChange={this.handleChange} />
                    </div>
                    <div>
                        <TodoListContainer />
                    </div>
                </Container>

            </div >
        )
    }
}

export default App;