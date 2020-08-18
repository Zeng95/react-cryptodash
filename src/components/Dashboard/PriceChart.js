import { Tile } from 'components/Shared/Tile'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { Component } from 'react'
import HighchartsOptions from './HighchartsOptions'
import HighchartsTheme from './HighchartsTheme'

Highcharts.setOptions(HighchartsTheme)

class PriceChart extends Component {
  render() {
    return (
      <Tile>
        <HighchartsReact highcharts={Highcharts} options={HighchartsOptions} />
      </Tile>
    )
  }
}

export default PriceChart
