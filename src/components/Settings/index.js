import React, { Component } from 'react'

import Page from '../Shared/Page'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'
import CoinGrid from './CoinGrid'

class Settings extends Component {
  render() {
    return (
      <Page name="settings">
        <WelcomeMessage />
        <CoinGrid topSection />
        <ConfirmButton />
        <CoinGrid />
      </Page>
    )
  }
}

export default Settings
