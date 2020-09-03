import { AppContext } from 'context/AppContext'
import React, { Component } from 'react'
import styled from 'styled-components'
import TileClass from './PriceTile'

const PriceGirdStyled = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 40px;
`

class PriceGird extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ prices }) => (
          <PriceGirdStyled>
            {prices.map((price, index) => (
              <TileClass
                key={Object.keys(price)[0]}
                price={price}
                index={index}
              />
            ))}
          </PriceGirdStyled>
        )}
      </AppContext.Consumer>
    )
  }
}

export default PriceGird
