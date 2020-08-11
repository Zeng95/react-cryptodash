import React, { Component } from 'react'
import styled from 'styled-components'
import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import { color3, fontSize1, greenBoxShadow } from 'components/Shared/Styles'

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
    const { Consumer: AppContextConsumer } = AppContext
    const { Consumer: SettingsContextConsumer } = SettingsContext

    return (
      <AppContextConsumer>
        {value => (
          <SettingsContextConsumer>
            {({ favoriteCoins: favCoinKeys }) => {
              const { confirmFavorites } = value

              return (
                <CenterDiv>
                  <ConfirmButtonStyled
                    onClick={() => confirmFavorites(favCoinKeys)}
                  >
                    Confirm Favorites
                  </ConfirmButtonStyled>
                </CenterDiv>
              )
            }}
          </SettingsContextConsumer>
        )}
      </AppContextConsumer>
    )
  }
}

export default ConfirmButton
