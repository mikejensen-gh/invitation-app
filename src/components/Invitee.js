import React, { Component } from 'react';

export default class Invitee extends Component {
  render() {
    return (
      <li className="responded"><span>{this.props.name}</span>
        <label>
          <input type="checkbox" defaultChecked />{this.props.confirmed ? 'Confirmed' : 'Unconfirmed'}
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    );
  }
}
