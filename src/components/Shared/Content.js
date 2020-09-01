import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

class Content extends Component {
  render() {
    const { t } = this.props

    return (
      <AppContext.Consumer>
        {({ prices, firstVisit }) => {
          return (
            <SettingsContext.Consumer>
              {({ coins }) => {
                if (!coins) {
                  return <div>{t('app.coins')}</div>
                }

                if (!firstVisit && prices.length === 0) {
                  return <div>{t('app.prices')}</div>
                }

                return this.props.children
              }}
            </SettingsContext.Consumer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withTranslation()(Content)
