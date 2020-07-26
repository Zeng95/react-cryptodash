import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

class CoinTileImage extends Component {
  render() {
    const { Consumer } = SettingsContext

    return (
      <Consumer>
        {settingsContext => {
          const { coinBaseUrl } = settingsContext
          const { ImageUrl: imgUrl, Symbol: symbol } = this.props.coin

          return (
            <img src={`${coinBaseUrl}${imgUrl}`} alt={symbol} height="50px" />
          )
        }}
      </Consumer>
    )
  }
}

export default CoinTileImage
