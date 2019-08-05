import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                {this.props.spec}
                <button>Complete</button>
            </div>
        );
    }
}