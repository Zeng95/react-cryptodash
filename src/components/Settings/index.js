import React, { Component } from 'react'

import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'

class Settings extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <ConfirmButton />
      </div>
    )
  }
}

export default Settings
