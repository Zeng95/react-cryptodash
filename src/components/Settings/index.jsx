import Page from '../Shared/Page'
import React, { Component } from 'react'
import CoinGrid from './CoinGrid'
import ConfirmButton from './ConfirmButton'
import Search from './Search'
import WelcomeMessage from './WelcomeMessage'
import { withTranslation } from 'react-i18next'

class Settings extends Component {
  render() {
    const { t } = this.props

    return (
      <Page name={t('navbar.settings')}>
        <WelcomeMessage />
        <CoinGrid topSection={true} />
        <ConfirmButton />
        <Search />
        <CoinGrid topSection={false} />
      </Page>
    )
  }
}

export default withTranslation()(Settings)
