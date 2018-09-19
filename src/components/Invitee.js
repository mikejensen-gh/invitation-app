import React, { Component } from 'react'
import InviteeName from './InviteeName.js'

export default class Invitee extends Component {
  render() {
    return (
      <li className={this.props.classes}>
        <InviteeName
          name={this.props.name}
          nameEditable={this.props.nameEditable}
          handleChange={this.props.handleNameChange}
        />
          {this.props.children}
      </li>
    )
  }
}
