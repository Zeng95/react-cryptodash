import React, { Component } from 'react'

import { AppContextProvider } from '../../context/AppContext'
import { SettingsContextProvider } from '../../context/SettingsContext'

import AppLayout from './AppLayout'
import AppNavBar from './AppNavBar'
import Settings from '../Settings'
import Content from '../Shared/Content'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppContextProvider>
          <SettingsContextProvider>
            <AppNavBar />

            <Content>
              <Settings />
            </Content>
          </SettingsContextProvider>
        </AppContextProvider>
      </AppLayout>
    )
  }
}

export default App
