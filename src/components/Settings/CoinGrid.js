import React, { Component } from 'react'
import styled from 'styled-components'

import { SettingsContext } from '../../context/SettingsContext'
import CoinTile from './CoinTile'

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`

class CoinGrid extends Component {
  render() {
    const { Consumer } = SettingsContext

    return (
      <Consumer>
        {value => {
          const { coins, favoriteCoins: favCoinKeys } = value
          const { topSection } = this.props
          const allCoinKeys = Object.keys(coins).slice(0, 500) // The first five hundred coin keys

          const coinKeyList = topSection ? favCoinKeys : allCoinKeys

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
