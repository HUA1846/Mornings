import React, { Component } from 'react'
import Navbar from './components/Navbar'
// import Exercise from './components/Exercise'
import Header from './components/Header'
import Elements from './components/Elements'
import warmupData from './data/warmup'

export default class App extends Component {

  render() {
    
    return (
      <div>
        <Header />
        <Navbar />
        
      </div>
    )
  }
}
