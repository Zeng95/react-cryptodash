import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'
import styled from 'styled-components'
import CoinTile from './CoinTile'

const { Consumer } = SettingsContext
const CoinGridStyled = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  margin-top: 40px;
`

class CoinGrid extends Component {
  getLowerSectionCoins(coins, filteredCoins) {
    if (filteredCoins && Object.keys(filteredCoins)) {
      return Object.keys(filteredCoins)
    } else {
      return Object.keys(coins).slice(0, 300) // The first five hundred coin keys
    }
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { coins, favoriteCoins: favCoinKeys, filteredCoins } = value
          const { topSection } = this.props

          const coinKeys = topSection
            ? favCoinKeys
            : this.getLowerSectionCoins(coins, filteredCoins)

          return (
            <CoinGridStyled>
              {coinKeys.map(coinKey => (
                <CoinTile
                  key={coinKey}
                  coin={coins[coinKey]}
                  topSection={topSection}
                />
              ))}
            </CoinGridStyled>
          )
        }}
      </Consumer>
    )
  }
}

export default CoinGrid
