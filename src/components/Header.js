import React, { Component } from 'react';

export default class Header extends Component {
  handleSubmit(e) {
    e.preventDefault()

    this.props.handleSubmit()
  }

  render() {
    return (
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
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
      </header>
    );
  }
}
