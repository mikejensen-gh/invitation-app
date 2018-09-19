import React, { Component } from 'react';
import './App.css'
import shortid from 'shortid'

import Header from './components/Header.js'
import Invitee from './components/Invitee.js'
import AttendanceCount from './components/AttendanceCount.js'
import Subheader from './components/Subheader.js'
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

  toggleHideUnresponded() {
    this.setState({
      hideUnresponded: !this.state.hideUnresponded
    })
  }

  toggleInviteeConfirmedStatus(index) {
    const invitees = [...this.state.invitees]

    invitees[index].confirmed = !invitees[index].confirmed

    this.setState({
      invitees: invitees
    })
  }

  removeInvitee(index) {
    const invitees = [...this.state.invitees]

    invitees.splice(index, 1)

    this.setState({
      invitees: invitees
    })
  }

  updateInviteeName(index, name) {
    const invitees = [...this.state.invitees]

    invitees[index].name = name

    this.setState({
      invitees: invitees
    })
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

  render() {
    return (
      <div className="App">
        <Header
          inputValue={this.state.pendingInviteeName}
          handleChange={(name) => this.updatePendingInviteeName(name)}
          handleSubmit={() => this.addNewInvitee()}
        />
        <div className="main">
          <Subheader
            hideUnresponded={this.state.hideUnresponded}
            toggleHideUnresponded={() => this.toggleHideUnresponded()}
          />
          <AttendanceCount
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
    );
  }
}
