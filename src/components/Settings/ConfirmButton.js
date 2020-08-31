import { color3, fontSize1, greenBoxShadow } from '../Shared/Styles'
import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled from 'styled-components'

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
    const { t } = this.props

    return (
      <AppContext.Consumer>
        {value => (
          <SettingsContext.Consumer>
            {({ favoriteCoins: favCoinKeys }) => {
              const { confirmFavorites } = value

              return (
                <CenterDiv>
                  <ConfirmButtonStyled
                    onClick={() => confirmFavorites(favCoinKeys)}
                  >
                    {t('settings.confirm')}
                  </ConfirmButtonStyled>
                </CenterDiv>
              )
            }}
          </SettingsContext.Consumer>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withTranslation()(ConfirmButton)
