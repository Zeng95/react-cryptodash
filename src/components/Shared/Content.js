import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

class Content extends Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {settingsContext => {
          const { coins } = settingsContext

          if (coins.length === 0) {
            return <div>Loading Coins</div>
          }

          return this.props.children
        }}
      </SettingsContext.Consumer>
    )
  }
}

export default Content
