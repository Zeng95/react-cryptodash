import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { SelectableTile } from 'components/Shared/Tile'
import {
  fontSizeBig,
  fontSize3,
  greenBoxShadow
} from 'components/Shared/Styles.js'
import { formatNumber } from 'utils'
import {
  CoinSymbol,
  CoinTileHeaderGridStyled
} from 'components/Settings/CoinTileHeaderGrid'
import { SettingsContext } from 'context/SettingsContext'

const { Consumer } = SettingsContext
const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      display: grid;
      gap: 6px;
      justify-items: right;
      grid-template-columns: repeat(3, 1fr);
      ${fontSize3}
    `}

  ${props =>
    props.currentFavCoin &&
    css`
      pointer-events: none;
      ${greenBoxShadow}
    `}
`
const JustifyLeft = styled.span`
  justify-self: left;
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

class PriceTileCompact extends Component {
  render() {
    const { symbol, data, currentFavCoin } = this.props

    return (
      <PriceTileStyled compact currentFavCoin={currentFavCoin}>
        <JustifyLeft>{symbol}</JustifyLeft>

        <ChangePercent red={data.CHANGEPCT24HOUR < 0}>
          {formatNumber(data.CHANGEPCT24HOUR)}
        </ChangePercent>

        <div>{formatNumber(data.PRICE)}</div>
      </PriceTileStyled>
    )
  }
}

class PriceTile extends Component {
  render() {
    const { symbol, data, currentFavCoin } = this.props

    return (
      <PriceTileStyled currentFavCoin={currentFavCoin}>
        <CoinTileHeaderGridStyled>
          <span>{symbol}</span>

          <ChangePercent red={data.CHANGEPCT24HOUR < 0}>
            {formatNumber(data.CHANGEPCT24HOUR)}
          </ChangePercent>
        </CoinTileHeaderGridStyled>

        <TickerPrice>{formatNumber(data.PRICE)}</TickerPrice>
      </PriceTileStyled>
    )
  }
}

class TileClass extends Component {
  render() {
    return (
      <Consumer>
        {({ currentFavCoin }) => {
          const { price, index } = this.props
          const symbol = Object.keys(price)[0]
          const data = price[symbol].USD

          return index >= 5 ? (
            <PriceTileCompact
              data={data}
              symbol={symbol}
              currentFavCoin={currentFavCoin === symbol}
            />
          ) : (
            <PriceTile
              data={data}
              symbol={symbol}
              currentFavCoin={currentFavCoin === symbol}
            />
          )
        }}
      </Consumer>
    )
  }
}

export default TileClass
