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
          const { topSection } = this.props
          const end = topSection ? 10 : 500
          const coinList = Object.keys(settingsContext.coins).slice(0, end) // The first five hundred coins

          return (
            <CoinGridStyled>
              {coinList.map(coinKey => {
                const coin = settingsContext.coins[coinKey]

                return (
                  <CoinTile key={coinKey} coin={coin} topSection={topSection} />
                )
              })}
            </CoinGridStyled>
          )
        }}
      </SettingsContext.Consumer>
    )
  }
}

export default CoinGrid
