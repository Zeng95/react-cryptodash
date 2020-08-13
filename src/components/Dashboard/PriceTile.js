import {
  CoinSymbol,
  CoinTileHeaderGridStyled
} from 'components/Settings/CoinTileHeaderGrid'
import {
  fontSize3,
  fontSizeBig,
  greenBoxShadow
} from 'components/Shared/Styles.js'
import { SelectableTile } from 'components/Shared/Tile'
import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { formatNumber } from 'utils'

const { Consumer } = SettingsContext
// pointer-events is going to disbale on the current favorite coin
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
    const { symbol, data, currentFavCoin, setCurrentFavorite } = this.props

    return (
      <PriceTileStyled
        compact
        currentFavCoin={currentFavCoin}
        onClick={() => {
          setCurrentFavorite(symbol)
        }}
      >
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
    const { symbol, data, currentFavCoin, setCurrentFavorite } = this.props

    return (
      <PriceTileStyled
        currentFavCoin={currentFavCoin}
        onClick={() => {
          setCurrentFavorite(symbol)
        }}
      >
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
        {({ currentFavCoin, setCurrentFavorite }) => {
          const { price, index } = this.props
          const symbol = Object.keys(price)[0]
          const data = price[symbol].USD

          return index >= 5 ? (
            <PriceTileCompact
              data={data}
              symbol={symbol}
              currentFavCoin={currentFavCoin === symbol}
              setCurrentFavorite={setCurrentFavorite}
            />
          ) : (
            <PriceTile
              data={data}
              symbol={symbol}
              currentFavCoin={currentFavCoin === symbol}
              setCurrentFavorite={setCurrentFavorite}
            />
          )
        }}
      </Consumer>
    )
  }
}

export default TileClass
