import Page from '../Shared/Page'
import React, { Component } from 'react'
import styled from 'styled-components'
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
