import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import { ThemeContext } from 'context/ThemeContext'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { formatNumber } from 'utils'
import {
  CoinSymbol,
  CoinTileHeaderGridStyled
} from '../Settings/CoinTileHeaderGrid'
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles.js'
import { SelectableTile } from '../Shared/Tile'

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

class PriceTile extends Component {
  render() {
    const {
      symbol,
      data,
      currentFavCoin,
      setCurrentFavorite,
      fetchHistorical,
      theme
    } = this.props

    return (
      <PriceTileStyled
        theme={theme}
        currentFavCoin={currentFavCoin}
        onClick={() => {
          setCurrentFavorite(symbol)
          fetchHistorical(symbol)
        }}
      >
        <CoinTileHeaderGridStyled>
          <span>{symbol}</span>

          <ChangePercent red={data.CHANGEPCT24HOUR < 0}>
            {formatNumber(data.CHANGEPCT24HOUR)}%
          </ChangePercent>
        </CoinTileHeaderGridStyled>

        <TickerPrice>{formatNumber(data.PRICE)}</TickerPrice>
      </PriceTileStyled>
    )
  }
}

class PriceTileCompact extends Component {
  render() {
    const {
      symbol,
      data,
      currentFavCoin,
      setCurrentFavorite,
      fetchHistorical,
      theme
    } = this.props

    return (
      <PriceTileStyled
        compact
        theme={theme}
        currentFavCoin={currentFavCoin}
        onClick={() => {
          setCurrentFavorite(symbol)
          fetchHistorical(symbol)
        }}
      >
        <JustifyLeft>{symbol}</JustifyLeft>

        <ChangePercent red={data.CHANGEPCT24HOUR < 0}>
          {formatNumber(data.CHANGEPCT24HOUR)}%
        </ChangePercent>

        <div>{formatNumber(data.PRICE)}</div>
      </PriceTileStyled>
    )
  }
}

class TileClass extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ fetchHistorical }) => (
          <SettingsContext.Consumer>
            {({ currentFavCoin, setCurrentFavorite }) => (
              <ThemeContext.Consumer>
                {({ theme }) => {
                  const { price, index } = this.props
                  const symbol = Object.keys(price)[0]
                  const data = price[symbol].USD

                  return index >= 5 ? (
                    <PriceTileCompact
                      data={data}
                      symbol={symbol}
                      currentFavCoin={currentFavCoin === symbol}
                      setCurrentFavorite={setCurrentFavorite}
                      fetchHistorical={fetchHistorical}
                      theme={theme}
                    />
                  ) : (
                    <PriceTile
                      data={data}
                      symbol={symbol}
                      currentFavCoin={currentFavCoin === symbol}
                      setCurrentFavorite={setCurrentFavorite}
                      fetchHistorical={fetchHistorical}
                      theme={theme}
                    />
                  )
                }}
              </ThemeContext.Consumer>
            )}
          </SettingsContext.Consumer>
        )}
      </AppContext.Consumer>
    )
  }
}

export default TileClass
