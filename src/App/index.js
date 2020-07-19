import React, { Component } from 'react'

import AppLayout from './AppLayout'
import AppNavBar from './AppNavBar'

class Welcome extends Component {
  render() {
    return <h1>Welcome to CryptoDash</h1>
  }
}

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppNavBar />
        <Welcome />
      </AppLayout>
    )
  }
}

export default App
