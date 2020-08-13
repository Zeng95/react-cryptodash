import Dashboard from 'components/Dashboard'
import Settings from 'components/Settings'
import Content from 'components/Shared/Content'
import { AppContextProvider } from 'context/AppContext'
import { SettingsContextProvider } from 'context/SettingsContext'
import React, { Component } from 'react'
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
