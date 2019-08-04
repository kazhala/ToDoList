import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "ss",
        };
    }
    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    }


    render() {
        return (
            <div>
                <input value={this.state.value} placeholder="Enter todos..." onChange={this.handleChange} />
                <input placeholder={this.state.text} />
            </div>
        );
    }
}