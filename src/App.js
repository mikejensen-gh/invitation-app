import React, { Component } from 'react'
import './App.css'
import shortid from 'shortid'

import NewInviteeForm from './components/NewInviteeForm.js'
import AddedInvitee from './components/AddedInvitee'
import ResponseCounter from './components/ResponseCounter.js'
import HideUnrespondedCheckbox from './components/HideUnrespondedCheckbox.js'
import NewInvitee from './components/NewInvitee.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invitees: [],
      hideUnrespondedInvitees: false,
      newInviteeName: ''
    }
  }

  updateNewInviteeName(name) {
    this.setState({
      newInviteeName: name
    })
  }

  addInvitee() {
    const invitees = [...this.state.invitees]

    invitees.unshift({
      key: shortid.generate(),
      name: this.state.newInviteeName,
      confirmed: false
    })

    this.setState({
      invitees: invitees,
      newInviteeName: ''
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

  toggleHideUnrespondedInvitees() {
    this.setState({
      hideUnrespondedInvitees: !this.state.hideUnrespondedInvitees
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
    const addedInviteesToDisplay = this.state.invitees.filter(invitee => !this.state.hideUnrespondedInvitees || invitee.confirmed)

    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <NewInviteeForm
            name={this.state.newInviteeName}
            handleChange={(name) => this.updateNewInviteeName(name)}
            handleSubmit={() => this.addInvitee()}
          />
        </header>

        <div className="main">
          <div>
            <h2>Invitees</h2>
            <HideUnrespondedCheckbox
              value={this.state.hideUnrespondedInvitees}
              handleChange={() => this.toggleHideUnrespondedInvitees()}
            />
          </div>

          <ResponseCounter
            invitees={this.state.invitees}
          />

          <ul>
            <NewInvitee
              name={this.state.newInviteeName}
            />

        {addedInviteesToDisplay.map((invitee, index) =>
            <AddedInvitee
              key={invitee.key}
              name={invitee.name}
              confirmed={invitee.confirmed}
              handleConfirmedStatusChange={() => this.toggleInviteeConfirmedStatus(index)}
              removeInvitee={() => this.removeInvitee(index)}
              handleNameChange={(name) => this.updateInviteeName(index, name)}
            />
        )}
          </ul>
        </div>
      </div>
    )
  }
}
