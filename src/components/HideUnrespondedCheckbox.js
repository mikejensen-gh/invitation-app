import React, { Component } from 'react'

export default class HideUnrespondedCheckbox extends Component {
  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.props.value}
          onChange={this.props.handleChange}/> Hide those who haven't responded
      </label>
    )
  }
}
