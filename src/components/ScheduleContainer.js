import React, { Component } from 'react'
import axios from 'axios'
import ItemsTable from './ItemsTable'
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

    console.log(process.env.REACT_APP_ARRIVALS_URL)
    console.log(process.env.REACT_APP_DEPARTURES_URL)
    this.arrivalsUrl   = process.env.REACT_APP_ARRIVALS_URL
    this.departuresUrl = process.env.REACT_APP_DEPARTURES_URL
  }

  componentDidMount() {
    // Fetch schedule data interval 60 seconds
    this.interval = setInterval(() => {
      this.fetchApiData()
      this.reRenderItems()
    }, 60000)
    this.fetchApiData()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  reRenderItems = () => {
    // TODO Refactor that temp stuff
    // Hard re-render for schedule table
    let show_arrivals   = this.state.showArrivalsTable
    let show_departures = this.state.showDeparturesTable
    this.setState({ showArrivalsTable: !show_arrivals, showDeparturesTable: !show_departures })
    this.setState({ showArrivalsTable: show_arrivals, showDeparturesTable: show_departures })
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
        <button className='show_arrivals' onClick={this.toggleTables}>
          See {this.state.buttonText}
        </button>

        { this.state.showArrivalsTable ? <ItemsTable arrivals={true}  data={this.state.arrivals} /> : null }
        { this.state.showDeparturesTable ? <ItemsTable arrivals={false} data={this.state.departures} /> : null }
      </div>
    );
  }
}

export default ScheduleContainer
