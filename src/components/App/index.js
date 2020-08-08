import React, { Component } from 'react'

import { AppContextProvider } from '../../context/AppContext'
import { SettingsContextProvider } from '../../context/SettingsContext'

import AppLayout from './AppLayout'
import AppNavbar from './AppNavbar'
import Settings from '../Settings'
import Content from '../Shared/Content'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppContextProvider>
          <SettingsContextProvider>
            <AppNavbar />

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
