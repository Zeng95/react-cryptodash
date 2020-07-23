import React, { Component } from 'react'
import styled from 'styled-components'

const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const CoinSymbol = styled.div`
  justify-self: right;
`

class CoinHeaderGrid extends Component {
  render() {
    const { CoinName: name, Symbol: symbol } = this.props.coin

    return (
      <CoinHeaderGridStyled>
        <div>{name}</div>
        <CoinSymbol>{symbol}</CoinSymbol>
      </CoinHeaderGridStyled>
    )
  }
}

export default CoinHeaderGrid
