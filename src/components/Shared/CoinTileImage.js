import React, { Component } from 'react'
import styled from 'styled-components'
import { SettingsContext } from 'context/SettingsContext'

const ImageStyled = styled.img`
  height: 50px;
`

class CoinTileImage extends Component {
  render() {
    const { Consumer } = SettingsContext

    return (
      <Consumer>
        {value => {
          const { coinBaseUrl } = value
          const { ImageUrl: imgUrl, Symbol: symbol } = this.props.coin

          return <ImageStyled src={`${coinBaseUrl}${imgUrl}`} alt={symbol} />
        }}
      </Consumer>
    )
  }
}

export default CoinTileImage
