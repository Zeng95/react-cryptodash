import React, { Component } from 'react'

import Page from '../Shared/Page'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'
import CoinGrid from './CoinGrid'
import Search from './Search'

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
