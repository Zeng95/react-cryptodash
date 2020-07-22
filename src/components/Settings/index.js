import React, { Component } from 'react'

import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/Page'

class Settings extends Component {
  render() {
    return (
      <Page name="settings">
        <WelcomeMessage />
        <ConfirmButton />
      </Page>
    )
  }
}

export default Settings
