import React, { Component } from 'react';

export default class Invitee extends Component {
  render() {
    if (this.props.name.length > 0) {
      return (
        <li className="pending">
          <span>{this.props.name}</span>
        </li>
      );
    } else {
      return null
    }
  }
}
