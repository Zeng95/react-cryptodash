import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

class CoinImage extends Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {settingsContext => {
          const { coinBaseUrl } = settingsContext
          const { ImageUrl: imgUrl, Symbol: symbol } = this.props.coin

          return (
            <img src={`${coinBaseUrl}${imgUrl}`} alt={symbol} height="50px" />
          )
        }}
      </SettingsContext.Consumer>
    )
  }
}

export default CoinImage
