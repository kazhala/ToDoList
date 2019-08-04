import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import TodoList from './components/TodoList';
import Footer from './layout/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <TodoList />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));