import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled from 'styled-components'
import Page from '../Shared/Page'
import CoinSpotlight from './CoinSpotlight'
import PriceChart from './PriceChart'
import PriceGrid from './PriceGrid'

const ChartGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 3fr;
  margin-top: 30px;
`

class Dashboard extends Component {
  render() {
    const { t } = this.props

    return (
      <Page name={t('navbar.dashboard')}>
        <PriceGrid />

        <ChartGrid>
          <CoinSpotlight />
          <PriceChart />
        </ChartGrid>
      </Page>
    )
  }
}

export default withTranslation()(Dashboard)
