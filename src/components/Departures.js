import React, { Component } from 'react'
import Item from './Item'

const Departures = ({departures}) =>
  <table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Expected Time</th>
        <th>Airline</th>
        <th>Destination</th>
        <th>Flight No</th>
        <th>Gate</th>
        <th>Terminal</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      { departures.map(item => {
        return (
          <Item item={item} />
        )
      }) }
    </tbody>
  </table>

export default Departures
