import React, { Component } from 'react'
import Item from './Item'
import ItemsTableHead from './ItemsTableHead'

const Departures = ({departures}) =>
<div>
  <h2>Departures &#128747;</h2>
  <table>
    <ItemsTableHead />
    <tbody>
      { departures.map(item => {
        return (
          <Item item={item} />
        )
      }) }
    </tbody>
  </table>
</div>

export default Departures
