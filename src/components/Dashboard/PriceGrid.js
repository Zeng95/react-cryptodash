import React, { Component } from 'react'
import styled from 'styled-components'
import { AppContext } from 'context/AppContext'
import TileClass from './PriceTile'

const { Consumer } = AppContext
const PriceGirdStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 40px;
`

class PriceGird extends Component {
  render() {
    return (
      <Consumer>
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
      </Consumer>
    )
  }
}

export default PriceGird
