import React, { Component } from 'react'
import styled from 'styled-components'
import Page from 'components/Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import PriceChart from './PriceChart'

const ChartGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 3fr;
  margin-top: 30px;
`

class Dashboard extends Component {
  render() {
    return (
      <Page name="dashboard">
        <PriceGrid />

        <ChartGrid>
          <CoinSpotlight />
          <PriceChart />
        </ChartGrid>
      </Page>
    )
  }
}

export default Dashboard
