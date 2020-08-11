import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { SelectableTile } from 'components/Shared/Tile'
import { fontSizeBig, fontSize3 } from 'components/Shared/Styles.js'
import {
  CoinTileHeaderGridStyled,
  CoinSymbol
} from 'components/Settings/CoinTileHeaderGrid'

const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      ${fontSize3}
    `}
`
const ChangePercent = styled(CoinSymbol)`
  color: green;

  ${props =>
    props.red &&
    css`
      color: red;
    `}
`
const TickerPrice = styled.div`
  ${fontSizeBig}
`

class PriceTile extends Component {
  formatNumber(number) {
    // First, convert the number to a string and slice the string
    // Second,
    return Number(number.toString().slice(0, 7))
  }

  render() {
    const { price } = this.props
    const symbol = Object.keys(price)[0]
    const data = price[symbol].USD

    return (
      <PriceTileStyled>
        <CoinTileHeaderGridStyled>
          <span>{symbol}</span>

          <ChangePercent red={data.CHANGEPCT24HOUR < 0}>
            {this.formatNumber(data.CHANGEPCT24HOUR)}
          </ChangePercent>
        </CoinTileHeaderGridStyled>

        <TickerPrice>{this.formatNumber(data.PRICE)}</TickerPrice>
      </PriceTileStyled>
    )
  }
}

export default PriceTile
