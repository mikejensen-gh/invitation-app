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
  }

  toggleHideUnresponded() {
    this.setState({
      hideUnresponded: !this.state.hideUnresponded
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
          {/* <label>
            <input value={this.state.hideUnresponded} type="checkbox" toggleHideUnresponded={this.toggleHideUnresponded} /> Xresponse
          </label> */}
          <ul>
            {this.state.invitees
              .filter(invitee => !this.state.hideUnresponded || invitee.confirmed)
              .map(invitee =>
                <Invitee
                  key={invitee.key}
                  name={invitee.name}
                  confirmed={invitee.confirmed}
                />
              )
            }
        </ul>
      </div>
      </div>
    );
  }
}
