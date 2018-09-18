import React, { Component } from 'react';

export default class Subheader extends Component {
  render() {
    return (
      <div>
        <h2>Invitees</h2>
        <label>
          <input
            value={this.props.hideUnresponded}
            checked={this.props.hideUnresponded}
            type="checkbox"
            onChange={this.props.toggleHideUnresponded}/> Hide those who haven't responded
        </label>
      </div>
    )
  }
}
