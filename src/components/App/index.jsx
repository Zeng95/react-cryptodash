import { AppContextProvider } from 'context/AppContext'
import { SettingsContextProvider } from 'context/SettingsContext'
import { ThemeContext } from 'context/ThemeContext'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Dashboard from '../Dashboard'
import Settings from '../Settings'
import Content from '../Shared/Content'
import AppNavbar from './AppNavbar'

const AppLayout = styled.div`
  min-height: 100vh;
  padding: 40px;
  ${({ theme }) =>
    css`
      color: ${theme.color4};
      ${theme.backgroundColor};
    `}
`

class App extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <AppLayout theme={theme}>
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
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default App
