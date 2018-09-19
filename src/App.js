import React, { Component } from 'react';
import Header from './components/Header.js'
import './App.css'
import Invitee from './components/Invitee.js'
import AttendanceCount from './components/AttendanceCount.js'
import Subheader from './components/Subheader.js'
import PendingInvitee from './components/PendingInvitee.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invitees: this.props.initialInvitees,
      hideUnresponded: false,
      pendingInviteeName: 'Saria'
    }

    this.toggleHideUnresponded = this.toggleHideUnresponded.bind(this)
    this.toggleConfirmed = this.toggleConfirmed.bind(this)
  }

  toggleHideUnresponded() {
    this.setState({
      hideUnresponded: !this.state.hideUnresponded
    })
  }

  toggleConfirmed(index) {
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

  handleNameChange(name, index) {
    const invitees = [...this.state.invitees]

    invitees[index].name = name

    this.setState({
      invitees: invitees
    })
  }

  handlePendingInviteeNameChange(name) {
    this.setState({
      pendingInviteeName: name
    })
  }

  handleNewInviteeSubmit() {
    const invitees = [...this.state.invitees]

    invitees.push({
      key: this.state.invitees.length,
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
          handleChange={(name) => this.handlePendingInviteeNameChange(name)}
          handleSubmit={this.handleNewInviteeSubmit.bind(this)}
        />
        <div className="main">
          <Subheader
            hideUnresponded={this.state.hideUnresponded}
            toggleHideUnresponded={this.toggleHideUnresponded}
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
                  toggleConfirmed={() => this.toggleConfirmed(index)}
                  removeInvitee={() => this.removeInvitee(index)}
                  handleNameChange={(name) => this.handleNameChange(name, index)}
                />
              )
            }
        </ul>
      </div>
      </div>
    );
  }
}
