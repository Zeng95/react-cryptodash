import React, { Component } from 'react'
import styled from 'styled-components'
import { Tile } from 'components/Shared/Tile'
import { SettingsContext } from 'context/SettingsContext'

const SpotlightTile = styled(Tile)`
  text-align: center;
`
const SpotlightName = styled.h2``
const SpotlightImage = styled.img``

class CoinSpotlight extends Component {
  render() {
    return (
      <SettingsContext.Consumer>
        {({ coins, currentFavCoin, coinBaseUrl }) => {
          const { ImageUrl: imgUrl, Symbol: symbol } = coins[currentFavCoin]

          return (
            <SpotlightTile>
              <SpotlightName>{coins[currentFavCoin].CoinName}</SpotlightName>
              <SpotlightImage src={`${coinBaseUrl}${imgUrl}`} alt={symbol} />
            </SpotlightTile>
          )
        }}
      </SettingsContext.Consumer>
    )
  }
}

export default CoinSpotlight
