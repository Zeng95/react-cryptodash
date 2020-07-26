import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

import { SelectableTile, DeletableTile } from '../Shared/Tile'
import CoinTileHeaderGrid from './CoinTileHeaderGrid'
import CoinTileImage from '../Shared/CoinTileImage'

class CoinTile extends Component {
  handleClick = (addCoin, removeCoin) => {
    const { coin, topSection } = this.props

    topSection ? removeCoin() : addCoin(coin.Name)
  }

  render() {
    const { Consumer } = SettingsContext

    return (
      <Consumer>
        {settingsContext => {
          const { addCoin, removeCoin } = settingsContext
          const { coin, topSection } = this.props
          const CoinTileClass = topSection ? DeletableTile : SelectableTile

          return (
            <CoinTileClass
              onClick={() => this.handleClick(addCoin, removeCoin)}
            >
              <CoinTileHeaderGrid coin={coin} topSection={topSection} />
              <CoinTileImage coin={coin} />
            </CoinTileClass>
          )
        }}
      </Consumer>
    )
  }
}

export default CoinTile
