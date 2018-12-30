import React, { Component } from 'react'
import './App.css'
import InputForm from '../containers/InputForm'
import Summary from '../containers/Summary'

class App extends Component {
  render () {
    return (
      <div className="wikicard">
        <InputForm />
        <Summary />
        <hr/>
        <small>
          App by <a href='https://bclindner.com'>Brian Lindner</a>
          &nbsp;|
          &nbsp;<a href="https://github.com/bclindner/react-redux-wiki">Source code</a></small>
      </div>
    )
  }
}


export default App
