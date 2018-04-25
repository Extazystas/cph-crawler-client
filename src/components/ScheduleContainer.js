import React, { Component } from 'react'
import axios from 'axios'
import Departures from './Departures'
import Arrivals from './Arrivals'
import Item from './Item'

class ScheduleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrivals: [],
      departures: [],
      buttonText: 'Departures',
      showArrivalsTable: true,
      showDeparturesTable: false
    }

    this.arrivalsUrl   = 'http://localhost:3003/api/v1/arrivals.json'
    this.departuresUrl = 'http://localhost:3003/api/v1/departures.json'
  }

  componentDidMount() {
    axios.get(this.arrivalsUrl)
    .then(response => {
      this.setState({ arrivals: response.data })
    }).then(axios.get(this.departuresUrl)
    .then(response => {
      this.setState({ departures: response.data })
    }))
    .catch(error => console.log(error))
  }

  toggleTables = () => {
    if (this.state.buttonText == 'Departures') {
      this.setState({ buttonText: 'Arrivals', showDeparturesTable: true, showArrivalsTable: false })
    } else {
      this.setState({ buttonText: 'Departures', showDeparturesTable: false, showArrivalsTable: true })
    }
  }

  render() {
    return (
      <div className="schedule_container">
        <button className='show_arrivals' onClick={this.toggleTables}>See {this.state.buttonText}</button>
        { this.state.showArrivalsTable ? <Arrivals arrivals={this.state.arrivals} /> : null }

        { this.state.showDeparturesTable ? <Departures departures={this.state.departures} /> : null }

      </div>
    );
  }
}

export default ScheduleContainer
