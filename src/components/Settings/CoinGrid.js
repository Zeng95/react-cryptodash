import React, { Component } from 'react'
import styled from 'styled-components'
import { SettingsContext } from '../../context/SettingsContext'
import CoinTile from './CoinTile'

const { Consumer } = SettingsContext
const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`

class CoinGrid extends Component {
  getLowerSectionCoins(coins, filteredCoins) {
    if (filteredCoins && Object.keys(filteredCoins)) {
      return Object.keys(filteredCoins)
    }

    return Object.keys(coins).slice(0, 100) // The first five hundred coin keys
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { coins, favoriteCoins: favCoinKeys, filteredCoins } = value
          const { topSection } = this.props

          const coinKeyList = topSection
            ? favCoinKeys
            : this.getLowerSectionCoins(coins, filteredCoins)

          return (
            <CoinGridStyled>
              {coinKeyList.map(coinKey => {
                const coin = coins[coinKey]

                return (
                  <CoinTile key={coinKey} coin={coin} topSection={topSection} />
                )
              })}
            </CoinGridStyled>
          )
        }}
      </Consumer>
    )
  }
}

export default CoinGrid
