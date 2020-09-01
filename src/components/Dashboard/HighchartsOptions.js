export default function (historical, t) {
  return {
    title: {
      text: t('dashboard.chart.title')
    },

    yAxis: {
      title: {
        text: t('dashboard.chart.yAxis.title')
      }
    },

    xAxis: {
      type: 'datetime'
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: historical,

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  }
}
