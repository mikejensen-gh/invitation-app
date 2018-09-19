import React, { Component } from 'react'
import InviteeName from './InviteeName.js'

export default class Invitee extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameEditable: false
    }
  }

  toggleEditableName() {
    this.setState({
      nameEditable: !this.state.nameEditable
    })
  }

  render() {
    return (
      <li className={this.props.confirmed ? 'responded' : ''}>
        <InviteeName
          name={this.props.name}
          nameEditable={this.state.nameEditable}
          handleChange={this.props.handleNameChange}
        />
        <label>
          <input
            type="checkbox"
            checked={this.props.confirmed}
            onChange={this.props.handleConfirmedStatusChange}
          />
          {this.props.confirmed ? 'Confirmed' : 'Unconfirmed'}
        </label>
        <button onClick={() => this.toggleEditableName()}>
          {this.state.nameEditable ? 'Save' : 'Edit'}
        </button>
        <button onClick={this.props.removeInvitee}>Remove</button>
      </li>
    )
  }
}
