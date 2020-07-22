import React, { Component } from 'react'
import styled from 'styled-components'

import { AppContext } from '../../context/AppContext'

const CoinGridStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0;
  list-style: none;
`

class CoinGrid extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {appContext => {
          const coinList = Object.keys(appContext.coinList)

          return (
            <CoinGridStyled>
              {coinList.map(coinKey => (
                <li key={coinKey}>{coinKey}</li>
              ))}
            </CoinGridStyled>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default CoinGrid
