import { DeletableTile, DisabledTile, SelectableTile } from '../Shared/Tile'
import { SettingsContext } from 'context/SettingsContext'
import { ThemeContext } from 'context/ThemeContext'
import React, { Component } from 'react'
import CoinTileHeaderGrid from './CoinTileHeaderGrid'
import CoinTileImage from './CoinTileImage'

class CoinTile extends Component {
  handleClick = (addCoin, removeCoin) => {
    const { coin, topSection } = this.props

    topSection ? removeCoin(coin.Name) : addCoin(coin.Name)
  }

  render() {
    return (
      <SettingsContext.Consumer>
        {value => (
          <ThemeContext.Consumer>
            {({ theme }) => {
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
                  theme={theme}
                  onClick={() => this.handleClick(addCoin, removeCoin)}
                >
                  <CoinTileHeaderGrid coin={coin} topSection={topSection} />
                  <CoinTileImage coin={coin} />
                </CoinTileClass>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </SettingsContext.Consumer>
    )
  }
}

export default CoinTile
