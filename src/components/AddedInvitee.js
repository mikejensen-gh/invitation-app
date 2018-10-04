import React, { Component } from 'react'
import Invitee from './Invitee.js'

export default class AddedInvitee extends Component {
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
    const classes = this.props.pending ? 'pending' : ''
    const confirmedText = this.props.isConfirmed ? 'Confirmed' : 'Unconfirmed'
    const editText = this.state.nameEditable ? 'Save' : 'Edit'

    return (
      <Invitee
        name={this.props.name}
        classes={classes}
        handleNameChange={this.props.handleNameChange}
        nameEditable={this.state.nameEditable}
      >
        <label>
          <input
            type="checkbox"
            checked={this.props.isConfirmed}
            onChange={this.props.handleConfirmedStatusChange}
          />
          {confirmedText}
        </label >
        <button onClick={() => this.toggleEditableName()}>
          {editText}
        </button>
        <button onClick={this.props.removeInvitee}>Remove</button>
      </Invitee>
    )
  }
}
