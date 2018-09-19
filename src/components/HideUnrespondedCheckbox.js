import React, { Component } from 'react'

export default class HideUnrespondedCheckbox extends Component {
  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.props.hideUnresponded}
          onChange={this.props.toggleHideUnresponded}/> Hide those who haven't responded
      </label>
    )
  }
}
