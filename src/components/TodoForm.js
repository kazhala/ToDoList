import React from 'react';
import shortid from 'shortid';


export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit({
            key: shortid.generate(),
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: "",
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.text}
                        placeholder="Enter todo.."
                        onChange={this.handleChange}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}