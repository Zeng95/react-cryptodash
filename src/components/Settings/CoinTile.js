import React, { Component } from 'react'

import { SelectableTile } from '../Shared/Tile'
import CoinHeaderGrid from './CoinHeaderGrid'
import CoinImage from '../Shared/CoinImage'

class CoinTile extends Component {
  render() {
    const { coin } = this.props

    return (
      <SelectableTile>
        <CoinHeaderGrid coin={coin}></CoinHeaderGrid>
        <CoinImage coin={coin}></CoinImage>
      </SelectableTile>
    )
  }
}

export default CoinTile
