import React, { Component } from 'react'
import styled from 'styled-components'
import { Delete } from '@styled-icons/material/Delete'

import { DeletableTile } from '../Shared/Tile'

const CoinTileHeaderGridStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const CoinName = styled.span`
  font-style: italic;
`
const CoinSymbol = styled.div`
  justify-self: right;
`
const CoinDeleteIcon = styled.div`
  display: none;
  justify-self: right;

  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`

class CoinTileHeaderGrid extends Component {
  render() {
    const { coin, topSection } = this.props
    const { CoinName: name, Symbol: symbol } = coin

    return (
      <CoinTileHeaderGridStyled>
        <CoinName>{name}</CoinName>

        {topSection ? (
          <CoinDeleteIcon>
            <Delete size="16" title="Delete coin" />
          </CoinDeleteIcon>
        ) : (
          <CoinSymbol>{symbol}</CoinSymbol>
        )}
      </CoinTileHeaderGridStyled>
    )
  }
}

export default CoinTileHeaderGrid
