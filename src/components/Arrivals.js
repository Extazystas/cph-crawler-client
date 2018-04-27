import React, { Component } from 'react'
import Item from './Item'
import ItemsTableHead from './ItemsTableHead'

const Arrivals = ({arrivals}) =>
<div>
  <h2>Arrivals &#128748;</h2>
  <table>
    <ItemsTableHead />
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
