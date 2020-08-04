import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

const { Consumer } = SettingsContext

class Content extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { coins } = value

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
