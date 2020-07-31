import React, { Component } from 'react'

import { SettingsContext } from '../../context/SettingsContext'

import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile'
import CoinTileHeaderGrid from './CoinTileHeaderGrid'
import CoinTileImage from '../Shared/CoinTileImage'

class CoinTile extends Component {
  handleClick = (addCoin, removeCoin) => {
    const { coin, topSection } = this.props

    topSection ? removeCoin(coin.Name) : addCoin(coin.Name)
  }

  render() {
    const { Consumer } = SettingsContext

    return (
      <Consumer>
        {value => {
          const { addCoin, removeCoin, isInFavoriteCoins } = value
          const { coin, topSection } = this.props

          let CoinTileClass

          if (topSection) {
            CoinTileClass = DeletableTile
          } else if (isInFavoriteCoins(coin.Name)) {
            CoinTileClass = DisabledTile
          } else {
            CoinTileClass = SelectableTile
          }

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
