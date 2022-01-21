import React from 'react';

export class Greeting extends React.Component {
    render() {
      return (
        <span>
          <h4 className="linen">Hi there, {this.props.name}!</h4>
        </span>
      )
    }
}