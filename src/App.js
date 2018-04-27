import React, { Component } from 'react'
import logo from './logo.svg'
import 'react-table/react-table.css'
import './App.css'
import ScheduleContainer from './components/ScheduleContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ScheduleContainer />
      </div>
    );
  }
}

export default App
