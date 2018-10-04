import React, { Component } from 'react'
import Invitee from './Invitee.js'

export default class NewInvitee extends Component {
  render() {
    if (this.props.name.length > 0) {
      return (
        <Invitee
          name={this.props.name}
          classes="pending"
          nameEditable={false}
        >
        </Invitee>
      )
    } else {
      return null
    }
  }
}
