import React, { Component } from 'react';

export default class AttendanceCount extends Component {
  render() {
    const totalCount = this.props.invitees.length
    const confirmedCount = this.props.invitees.reduce((accumulator, invitee) => {
      if (invitee.confirmed) {
        return accumulator + 1
      }

      return accumulator
    }, 0)

    const unconfirmedCount = totalCount - confirmedCount

    return (
      <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{confirmedCount}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{unconfirmedCount}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{totalCount}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
