import React, { Component } from 'react'
import './App.css'
import shortid from 'shortid'

import NewInviteeForm from './components/NewInviteeForm.js'
import Invitee from './components/Invitee.js'
import ResponseCounter from './components/ResponseCounter.js'
import HideUnrespondedCheckbox from './components/HideUnrespondedCheckbox.js'
import PendingInvitee from './components/PendingInvitee.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invitees: [],
      hideUnresponded: false,
      pendingInviteeName: ''
    }
  }

  updatePendingInviteeName(name) {
    this.setState({
      pendingInviteeName: name
    })
  }

  addNewInvitee() {
    const invitees = [...this.state.invitees]

    invitees.unshift({
      key: shortid.generate(),
      name: this.state.pendingInviteeName,
      confirmed: false
    })

    this.setState({
      invitees: invitees,
      pendingInviteeName: ''
    })
  }

  updateInviteeName(index, name) {
    const invitees = [...this.state.invitees]

    invitees[index].name = name

    this.setState({
      invitees: invitees
    })
  }

  toggleInviteeConfirmedStatus(index) {
    const invitees = [...this.state.invitees]

    invitees[index].confirmed = !invitees[index].confirmed

    this.setState({
      invitees: invitees
    })
  }

  toggleHideUnresponded() {
    this.setState({
      hideUnresponded: !this.state.hideUnresponded
    })
  }

  removeInvitee(index) {
    const invitees = [...this.state.invitees]

    invitees.splice(index, 1)

    this.setState({
      invitees: invitees
    })
  }

  render() {
    return (
      <div className="App">

        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <NewInviteeForm
            inputValue={this.state.pendingInviteeName}
            handleChange={(name) => this.updatePendingInviteeName(name)}
            handleSubmit={() => this.addNewInvitee()}
          />
        </header>

        <div className="main">

          <div>
            <h2>Invitees</h2>
            <HideUnrespondedCheckbox
              hideUnresponded={this.state.hideUnresponded}
              toggleHideUnresponded={() => this.toggleHideUnresponded()}
            />
          </div>

          <ResponseCounter
            invitees={this.state.invitees}
          />

          <ul>
            <PendingInvitee
              name={this.state.pendingInviteeName}
            />

            {this.state.invitees
              .filter(invitee => !this.state.hideUnresponded || invitee.confirmed)
              .map((invitee, index) =>
                <Invitee
                  key={invitee.key}
                  name={invitee.name}
                  confirmed={invitee.confirmed}
                  handleConfirmedStatusChange={() => this.toggleInviteeConfirmedStatus(index)}
                  removeInvitee={() => this.removeInvitee(index)}
                  handleNameChange={(name) => this.updateInviteeName(index, name)}
                />
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
