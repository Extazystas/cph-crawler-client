import React, { Component } from 'react'
import Item from './Item'

const Arrivals = ({arrivals}) =>
<div>
  <h2>Arrivals</h2>
  <table>
    <thead id='stickyHeader'>
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
      { arrivals.map(item => {
        return (
          <Item item={item} />
        )
      }) }
    </tbody>
  </table>
</div>

export default Arrivals
