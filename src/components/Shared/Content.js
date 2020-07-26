import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

class Content extends Component {
  render() {
    const { Consumer } = SettingsContext

    return (
      <Consumer>
        {settingsContext => {
          const { coins } = settingsContext

          if (coins.length === 0) {
            return <div>Loading Coins</div>
          }

          return this.props.children
        }}
      </Consumer>
    )
  }
}

export default Content
