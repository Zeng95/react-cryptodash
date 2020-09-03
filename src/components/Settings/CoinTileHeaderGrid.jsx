import { Delete } from '@styled-icons/material/Delete'
import React, { Component } from 'react'
import styled from 'styled-components'
import { DeletableTile } from '../Shared/Tile'

export const CoinTileHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const CoinSymbol = styled.span`
  justify-self: right;
`
const CoinName = styled.span`
  font-style: italic;
`
const CoinDeleteIcon = styled.div`
  justify-self: right;
  opacity: 0;
  transition: all 0.2s;

  ${DeletableTile}:hover & {
    color: red;
    opacity: 1;
  }
`

class CoinTileHeaderGrid extends Component {
  render() {
    const { coin, topSection } = this.props

    return (
      <CoinTileHeaderGridStyled>
        <CoinName>{coin.CoinName}</CoinName>

        {topSection ? (
          <CoinDeleteIcon>
            <Delete size="16" title="Delete coin" />
          </CoinDeleteIcon>
        ) : (
          <CoinSymbol>{coin.Symbol}</CoinSymbol>
        )}
      </CoinTileHeaderGridStyled>
    )
  }
}

export default CoinTileHeaderGrid
