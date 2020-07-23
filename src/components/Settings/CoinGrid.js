import React, { Component } from 'react'
import styled from 'styled-components'

import { SettingsContext } from '../../context/SettingsContext'

import CoinTile from './CoinTile'

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`

class CoinGrid extends Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {settingsContext => {
          // The first thousand coins
          const coinList = Object.keys(settingsContext.coins).slice(0, 100)

          return (
            <CoinGridStyled>
              {coinList.map(coinKey => {
                const coin = settingsContext.coins[coinKey]

                return <CoinTile key={coinKey} coin={coin} />
              })}
            </CoinGridStyled>
          )
        }}
      </SettingsContext.Consumer>
    )
  }
}

export default CoinGrid
