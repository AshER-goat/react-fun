import React from 'react';
import './index.css';

export class List extends React.Component {
    render() {
      let titleText = `Healthy ${this.props.type}`;
      if (this.props.children instanceof Array) {
          titleText += 's';
      }
      return (
        <div>
          <h5>{titleText}</h5>
          <ul className="list-group">{this.props.children}</ul>
        </div>
      );
    }
  }