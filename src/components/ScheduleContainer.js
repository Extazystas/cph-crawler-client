import React, { Component } from 'react'
import axios from 'axios'
import Departures from './Departures'
import Arrivals from './Arrivals'
import Item from './Item'
import spinner from './../spinner.svg'

class ScheduleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
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
    setInterval(() => {
      this.fetchApiData()
    }, 30000)
    this.fetchApiData()
  }

  fetchApiData = () => {
    axios.get(this.arrivalsUrl)
    .then(response => {
      this.setState({ loading: false, arrivals: response.data })
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
    if (this.state.loading) {
      return (
        <img src={spinner} className="spinner" alt="spinner" />
      )
    }
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
