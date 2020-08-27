import { Tile } from 'components/Shared/Tile'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { Component } from 'react'
import HighchartsOptions from './HighchartsOptions'
import HighchartsTheme from './HighchartsTheme'
import { AppContext } from 'context/AppContext'
import ChartSelect from './ChartSelect'
import { ReactComponent as Loading } from 'assets/hearts.svg'
import styled from 'styled-components'
import { color4 } from 'components/Shared/Styles.js'

Highcharts.setOptions(HighchartsTheme)

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
`
const LoadingText = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
`

class PriceChart extends Component {
  render() {
    const { Consumer } = AppContext

    return (
      <Consumer>
        {({
          timeInterval,
          historicalPrices: historical,
          handleChangeOnChartSelect
        }) => (
          <Tile>
            <ChartSelect
              value={timeInterval}
              onChange={handleChangeOnChartSelect}
            >
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </ChartSelect>

            {historical.length === 0 ? (
              <LoadingContainer>
                <LoadingText>Loading Historical Data...</LoadingText>
                <Loading style={{ transform: 'scale(1.6)', fill: color4 }} />
              </LoadingContainer>
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
