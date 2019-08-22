import React from 'react';
import Header from './common/Header';
import TodoListContainer from './components/TodoList/TodoListContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

//index component to display the page to html
class App extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#cfe8fc', minHeight: "100vh" }} >
                <CssBaseline />
                <Container
                    maxWidth="md"
                >
                    <div>
                        <Header onChange={this.props.handleSearch} />
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