import { fontSize1, greenBoxShadow } from '../Shared/Styles'
import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import { ThemeContext } from 'context/ThemeContext'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`
const ConfirmButtonStyled = styled.button`
  margin: 20px;
  border: none;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  ${fontSize1}

  &:hover {
    ${greenBoxShadow}
  }

  &:focus {
    outline: none;
  }

  ${({ theme }) =>
    css`
      color: ${theme.color3};
    `}
`

class ConfirmButton extends Component {
  render() {
    const { t } = this.props

    return (
      <AppContext.Consumer>
        {({ confirmFavorites }) => (
          <SettingsContext.Consumer>
            {({ favoriteCoins: favCoinKeys }) => (
              <ThemeContext.Consumer>
                {({ theme }) => (
                  <CenterDiv>
                    <ConfirmButtonStyled
                      theme={theme}
                      onClick={() => confirmFavorites(favCoinKeys)}
                    >
                      {t('settings.confirm')}
                    </ConfirmButtonStyled>
                  </CenterDiv>
                )}
              </ThemeContext.Consumer>
            )}
          </SettingsContext.Consumer>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withTranslation()(ConfirmButton)
