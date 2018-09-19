import React, { Component } from 'react'

export default class NewInviteeForm extends Component {
  handleSubmit(e) {
    e.preventDefault()

    this.props.handleSubmit()
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
      >
        <input
          type="text"
          value={this.props.inputValue}
          placeholder="Invite Someone"
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
        <button type="submit" name="submit" value="submit">Submit</button>
      </form>
    );
  }
}
