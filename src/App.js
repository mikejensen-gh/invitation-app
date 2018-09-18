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
      showUnresponded: false
    }

    this.toggleResponded = this.toggleResponded.bind(this)
  }

  toggleResponded() {
    this.setState({
      showUnresponded: !this.state.showUnresponded
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Subheader
            showUnresponded={this.state.showUnresponded}
            onClick={this.toggleResponded}
          />
          <Counter
            invitees={this.state.invitees}
          />
          <ul>
            {this.state.invitees.map((invitee) =>
              <Invitee
                key={invitee.key}
                name={invitee.name}
                confirmed={invitee.confirmed}
              />
            )}
        </ul>
      </div>
      </div>
    );
  }
}
