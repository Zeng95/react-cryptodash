import { Tile } from 'components/Shared/Tile'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { Component } from 'react'
import HighchartsOptions from './HighchartsOptions'
import HighchartsTheme from './HighchartsTheme'
import { AppContext } from 'context/AppContext'

Highcharts.setOptions(HighchartsTheme)

class PriceChart extends Component {
  render() {
    const { Consumer } = AppContext

    return (
      <Consumer>
        {({ historicalPrices: historical }) => (
          <Tile>
            {historical.length === 0 ? (
              <div>Loading Historical Data</div>
            ) : (
              <HighchartsReact
                highcharts={Highcharts}
                options={HighchartsOptions(historical)}
              />
            )}
          </Tile>
        )}
      </Consumer>
    )
  }
}

export default PriceChart
