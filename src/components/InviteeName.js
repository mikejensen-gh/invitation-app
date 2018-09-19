import React, { Component } from 'react'

export default class InviteeName extends Component {
  render() {
    if (this.props.nameEditable) {
      return <input
        type="text"
        value={this.props.name}
        onChange={(e) => this.props.handleChange(e.target.value)}
      />
    } else {
      return <span>{this.props.name}</span>
    }
  }
}
