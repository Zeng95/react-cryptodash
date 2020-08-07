import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

const { Consumer } = SettingsContext

class Content extends Component {
  render() {
    return (
      <Consumer>
        {({ coins }) => {
          if (!coins) {
            return <div>Loading Coins</div>
          }

          return this.props.children
        }}
      </Consumer>
    )
  }
}

export default Content
