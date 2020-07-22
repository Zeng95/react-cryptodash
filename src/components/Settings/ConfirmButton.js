import React, { Component } from 'react'
import styled from 'styled-components'

import { AppContext } from '../../context/AppContext'
import { fontSize1, color3, greenBoxShadow } from '../Shared/Styles'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`
const ConfirmButtonStyled = styled.button`
  margin: 20px;
  border: none;
  padding: 5px;
  color: ${color3};
  background-color: transparent;
  cursor: pointer;
  ${fontSize1}

  &:hover {
    ${greenBoxShadow}
  }

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
