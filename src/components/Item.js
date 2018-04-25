import React, { Component } from 'react'

const Item = ({item}) =>
  <tr>
    <td>{ item.time }</td>
    <td>{ item.expected_time }</td>
    <td>{ item.airline_name }</td>
    <td>{ item.destination }</td>
    <td>{ item.flight_no }</td>
    <td>{ item.gate }</td>
    <td>{ item.terminal }</td>
    <td>{ item.status }</td>
  </tr>

export default Item
