import React, { Component } from 'react'

import { SelectableTile, DeletableTile } from '../Shared/Tile'
import CoinTileHeaderGrid from './CoinTileHeaderGrid'
import CoinTileImage from '../Shared/CoinTileImage'

class CoinTile extends Component {
  render() {
    const { coin, topSection } = this.props
    const CoinTileClass = topSection ? DeletableTile : SelectableTile

    return (
      <CoinTileClass>
        <CoinTileHeaderGrid coin={coin} topSection={topSection} />
        <CoinTileImage coin={coin} />
      </CoinTileClass>
    )
  }
}

export default CoinTile
