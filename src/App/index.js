import React, { Component } from 'react'

import AppLayout from './AppLayout'
import AppNavBar from './AppNavBar'

import { AppContextProvider } from '../context/AppContext'

class Welcome extends Component {
  render() {
    return <h1>Welcome to CryptoDash</h1>
  }
}

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppContextProvider>
          <AppNavBar />
          <Welcome />
        </AppContextProvider>
      </AppLayout>
    )
  }
}

export default App
