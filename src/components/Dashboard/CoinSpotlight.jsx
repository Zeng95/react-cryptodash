import { SettingsContext } from 'context/SettingsContext'
import { ThemeContext } from 'context/ThemeContext'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Tile } from '../Shared/Tile'

const SpotlightTile = styled(Tile)`
  text-align: center;
`
const SpotlightName = styled.h2``
const SpotlightImage = styled.img``

class CoinSpotlight extends Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {({ coins, currentFavCoin, coinBaseUrl }) => (
          <ThemeContext.Consumer>
            {({ theme }) => {
              const { ImageUrl: imgUrl, Symbol: symbol } = coins[currentFavCoin]

              return (
                <SpotlightTile theme={theme}>
                  <SpotlightName>
                    {coins[currentFavCoin].CoinName}
                  </SpotlightName>
                  <SpotlightImage
                    src={`${coinBaseUrl}${imgUrl}`}
                    alt={symbol}
                  />
                </SpotlightTile>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </SettingsContext.Consumer>
    )
  }
}

export default CoinSpotlight
