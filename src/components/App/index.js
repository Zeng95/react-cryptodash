import React, { Component } from 'react'

import { AppContextProvider } from '../../context/AppContext'

import AppLayout from './AppLayout'
import AppNavBar from './AppNavBar'
import Settings from '../Settings'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppContextProvider>
          <AppNavBar />
          <Settings />
        </AppContextProvider>
      </AppLayout>
    )
  }
}

export default App
