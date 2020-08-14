import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsConfig from './HighchartsConfig'
import { Tile } from 'components/Shared/Tile'

class PriceChart extends Component {
  render() {
    return (
      <Tile>
        <HighchartsReact highcharts={Highcharts} options={HighchartsConfig} />
      </Tile>
    )
  }
}

export default PriceChart
