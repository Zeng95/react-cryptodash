import { AppContext } from 'context/AppContext'
import React, { Component } from 'react'
import styled from 'styled-components'

const WelcomeStyled = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
`

class Welcome extends Component {
  render() {
    const { Consumer } = AppContext

    return (
      <Consumer>
        {({ firstVisit }) => {
          return firstVisit ? (
            <WelcomeStyled>
              Welcome to CryptoDash, please select your favorite coins to begin.
            </WelcomeStyled>
          ) : null
        }}
      </Consumer>
    )
  }
}

export default Welcome
