import React, { Component } from 'react'
import styled from 'styled-components'
import { Tile } from 'components/Shared/Tile'
import CoinTileImage from 'components/Shared/CoinTileImage'
import { SettingsContext } from 'context/SettingsContext'

const { Consumer } = SettingsContext
const SpotlightTile = styled(Tile)`
  text-align: center;
`
const SpotlightName = styled.h2``

class CoinSpotlight extends Component {
  render() {
    return (
      <Consumer>
        {({ coins, currentFavCoin }) => {
          return (
            <SpotlightTile>
              <SpotlightName>{coins[currentFavCoin].CoinName}</SpotlightName>
              <CoinTileImage coin={coins[currentFavCoin]} spotlight />
            </SpotlightTile>
          )
        }}
      </Consumer>
    )
  }
}

export default CoinSpotlight
