import React, { Component } from 'react';

export default class Subheader extends Component {
  render() {
    return (
      <div>
        <h2>Invitees</h2>
        <label>
          <input
            type="checkbox"
            checked={this.props.hideUnresponded}
            onChange={this.props.toggleHideUnresponded}/> Hide those who haven't responded
        </label>
      </div>
    )
  }
}
