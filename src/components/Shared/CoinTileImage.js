import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { SettingsContext } from 'context/SettingsContext'

const ImageStyled = styled.img`
  height: 50px;

  ${props =>
    props.spotlight &&
    css`
      height: 200px;
    `}
`

class CoinTileImage extends Component {
  render() {
    const { Consumer } = SettingsContext

    return (
      <Consumer>
        {({ coinBaseUrl }) => {
          const { coin, spotlight } = this.props
          const { ImageUrl: imgUrl, Symbol: symbol } = coin

          return (
            <ImageStyled
              src={`${coinBaseUrl}${imgUrl}`}
              alt={symbol}
              spotlight={spotlight}
            />
          )
        }}
      </Consumer>
    )
  }
}

export default CoinTileImage
