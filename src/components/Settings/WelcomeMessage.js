import { AppContext } from 'context/AppContext'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled from 'styled-components'

const WelcomeStyled = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
`

class Welcome extends Component {
  render() {
    const { t } = this.props

    return (
      <AppContext.Consumer>
        {({ firstVisit }) => {
          return firstVisit ? (
            <WelcomeStyled>{t('settings.welcome')}</WelcomeStyled>
          ) : null
        }}
      </AppContext.Consumer>
    )
  }
}

export default withTranslation()(Welcome)
