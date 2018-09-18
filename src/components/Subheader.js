import React, { Component } from 'react';

export default class Subheader extends Component {
  render() {
    return (
      <div>
        <h2>Invitees</h2>
        <label>
          <input value={this.props.showResponded} type="checkbox" onClick={this.props.onClick} /> Hide those who haven't responded
      </label>
      </div>
    )
  }
}
