import React, { Component } from 'react'
import Page from 'components/Shared/Page'
import PriceGrid from './PriceGrid'

class Dashboard extends Component {
  render() {
    return (
      <Page name="dashboard">
        <PriceGrid />
      </Page>
    )
  }
}

export default Dashboard
