import React, { Component } from 'react'

import AppContextProvider from '../../context/AppContext'

import AppLayout from './AppLayout'
import AppNavBar from './AppNavBar'
import Settings from '../Settings'
import Content from '../Shared/Content'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppContextProvider>
          <AppNavBar />

          <Content>
            <Settings />
          </Content>
        </AppContextProvider>
      </AppLayout>
    )
  }
}

export default App
