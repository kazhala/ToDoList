import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <div
                style={{
                    textDecoration: this.props.todo.complete ? "line-through" : ""
                }}
            >
                {this.props.todo.spec}
                <button onClick={this.props.onComplete}>Complete</button>
            </div>
        );
    }
}