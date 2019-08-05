import React from 'react';
import shortid from 'shortid';


export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            key: shortid.generate(),
            spec: this.state.text,
            complete: false,
        }
        this.props.onSubmit(todo)
        this.setState({
            text: '',
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="todo..."
                    />
                    <button onClick={this.handleSubmit}>add to task</button>
                </form>
            </div>
        );
    }
}