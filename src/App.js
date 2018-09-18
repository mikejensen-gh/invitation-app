import React, { Component } from 'react';
import Header from './components/Header.js'
import './App.css'
import Invitee from './components/Invitee.js'
import Counter from './components/Counter.js'
import Subheader from './components/Subheader.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invitees: this.props.initialInvitees,
      hideUnresponded: false
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

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Subheader
            hideUnresponded={this.state.hideUnresponded}
            toggleHideUnresponded={this.toggleHideUnresponded}
          />
          <Counter
            invitees={this.state.invitees}
          />
          <ul>
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
