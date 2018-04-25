import React, { Component } from 'react'
import axios from 'axios'

class ScheduleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3003/api/v1/arrivals.json')
    .then(response => {
      console.log(response)
      this.setState({ items: response.data })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="schedule_container">
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
            { this.state.items.map(item => {
              return (
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
              )
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScheduleContainer
