import { ReactComponent as Loading } from 'assets/hearts.svg'
import { AppContext } from 'context/AppContext'
import { ThemeContext } from 'context/ThemeContext'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Tile } from '../Shared/Tile'
import ChartSelect from './ChartSelect'
import HighchartsOptions from './HighchartsOptions'
import HighchartsTheme from './HighchartsTheme'

Highcharts.setOptions(HighchartsTheme)

const LoadingContainer = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
`
const LoadingText = styled.p`
  margin-bottom: 30px;
  margin-top: 0;
`

class PriceChart extends Component {
  render() {
    const { t } = this.props

    return (
      <AppContext.Consumer>
        {({
          timeInterval,
          historicalPrices: historical,
          handleChangeOnChartSelect
        }) => (
          <ThemeContext.Consumer>
            {({ theme }) => {
              return (
                <Tile theme={theme}>
                  <ChartSelect
                    theme={theme}
                    value={timeInterval}
                    onChange={handleChangeOnChartSelect}
                  >
                    <option value="days">
                      {t('dashboard.chart.select.days')}
                    </option>
                    <option value="weeks">
                      {t('dashboard.chart.select.weeks')}
                    </option>
                    <option value="months">
                      {t('dashboard.chart.select.months')}
                    </option>
                  </ChartSelect>

                  {historical.length === 0 ? (
                    <LoadingContainer>
                      <LoadingText>
                        {t('dashboard.historicalPrices')}
                      </LoadingText>
                      <Loading
                        style={{ transform: 'scale(1.6)',
            fill: theme.color4 }}
                      />
                    </LoadingContainer>
                  ) : (
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={HighchartsOptions(historical, t)}
                    />
                  )}
                </Tile>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withTranslation()(PriceChart)
