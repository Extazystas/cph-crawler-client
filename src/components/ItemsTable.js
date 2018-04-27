import React, { Component } from 'react'
import ReactTable from "react-table"

class ItemsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      showArrivals: props.arrivals,
      filtered: []
    }
  }
  render() {
    const tableTitle = () =>
    this.state.showArrivals ? <h2>Arrivals &#128748;</h2> : <h2>Departures &#128747;</h2>

    const TestTableHead = [
      { Header: 'Scheduled Time', accessor: 'time' },
      { Header: 'Expected Time', accessor: 'expected_time' },
      { Header: 'Airline', accessor: 'airline_name' },
      { Header: 'Destination', accessor: 'destination', 'minWidth': 200 },
      { Header: 'Flight No', accessor: 'flight_no' },
      { Header: 'Gate', accessor: 'gate', 'maxWidth': 50 },
      { Header: 'Terminal', accessor: 'terminal', 'maxWidth': 90 },
      { Header: 'Status', accessor: 'status' }
    ]

    const { data } = this.state

    return (
      <div>
        { tableTitle() }

        <div className='reset_filter'>
          <a href='javascript:void(0)' onClick={()=>this.setState({ filtered: [] })}>Reset Filters</a>
        </div>

        <ReactTable
          data = { data }
          columns = { TestTableHead }
          defaultPageSize = { 30 }
          className = "-striped -highlight"
          showPageSizeOptions = { false }
          filterable = { true }
          filtered = { this.state.filtered }
          onFilteredChange = { filtered => { this.setState({ filtered });}}
          defaultFilterMethod = { (filter, row, column) => {
            const id = filter.pivotId || filter.id
            return row[id] !== undefined ? String(row[id]).toLowerCase().includes(filter.value.toLowerCase()) : true
          }}
        />
      </div>
    );
  }
}

export default ItemsTable
