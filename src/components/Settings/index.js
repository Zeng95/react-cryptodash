import React, { Component } from 'react'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import ConfirmButton from './ConfirmButton'
import Search from './Search'
import WelcomeMessage from './WelcomeMessage'

class Settings extends Component {
  render() {
    return (
      <Page name="settings">
        <WelcomeMessage />
        <CoinGrid topSection={true} />
        <ConfirmButton />
        <Search />
        <CoinGrid topSection={false} />
      </Page>
    )
  }
}

export default Settings
