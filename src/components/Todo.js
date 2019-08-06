import React from 'react';

export default class Todo extends React.Component {
    render() {
        let remove = "";
        let option = "Complete";
        if (this.props.display === "completed") {
            remove = (<button onClick={this.props.onRemove}>Remove</button>);
            option = "revoke";
        }
        return (
            <div
                style={{
                    textDecoration: this.props.todo.complete ? "line-through" : ""
                }}
            >
                {this.props.todo.spec}
                <button onClick={this.props.onComplete}>{option}</button>
                {remove}
            </div>
        );
    }
}