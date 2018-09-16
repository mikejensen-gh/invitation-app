import React, { Component } from 'react';
import './style.css'
import Header from './components/Header.js'
import Invitee from './components/Invitee.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invitees: this.props.initialInvitees
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
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
