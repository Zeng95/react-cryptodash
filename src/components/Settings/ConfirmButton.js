import React, { Component } from 'react'
import styled from 'styled-components'

import { AppContext } from '../../context/AppContext'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`
const ConfirmButtonStyled = styled.button`
  margin: 20px;
  border: none;
  padding: 0;
  color: green;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

class ConfirmButton extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {appContext => {
          const { confirmFavorites } = appContext

          return (
            <CenterDiv>
              <ConfirmButtonStyled onClick={confirmFavorites}>
                Confirm Favorites
              </ConfirmButtonStyled>
            </CenterDiv>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default ConfirmButton
