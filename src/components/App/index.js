import React, { Component } from 'react'
import { AppContextProvider } from '../../context/AppContext'
import { SettingsContextProvider } from '../../context/SettingsContext'
import Settings from '../Settings'
import Dashboard from '../Dashboard'
import Content from '../Shared/Content'
import AppLayout from './AppLayout'
import AppNavbar from './AppNavbar'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppContextProvider>
          <SettingsContextProvider>
            <AppNavbar />

            <Content>
              <Settings />
              <Dashboard />
            </Content>
          </SettingsContextProvider>
        </AppContextProvider>
      </AppLayout>
    )
  }
}

export default App
