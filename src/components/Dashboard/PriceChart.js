import { ReactComponent as Loading } from 'assets/hearts.svg'
import { AppContext } from 'context/AppContext'
import { ThemeContext } from 'context/ThemeContext'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled from 'styled-components'
import { color4 } from '../Shared/Styles.js'
import { Tile } from '../Shared/Tile'
import ChartSelect from './ChartSelect'
import HighchartsOptions from './HighchartsOptions'
import HighchartsTheme from './HighchartsTheme'

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
    const { t } = this.props

    return (
      <AppContext.Consumer>
        {({
          timeInterval,
          historicalPrices: historical,
          handleChangeOnChartSelect
        }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <Tile theme={theme}>
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
                    <LoadingText>{t('dashboard.historicalPrices')}</LoadingText>
                    <Loading
                      style={{ transform: 'scale(1.6)', fill: color4 }}
                    />
                  </LoadingContainer>
                ) : (
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={HighchartsOptions(historical)}
                  />
                )}
              </Tile>
            )}
          </ThemeContext.Consumer>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withTranslation()(PriceChart)
