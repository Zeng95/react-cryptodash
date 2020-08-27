import cc from 'cryptocompare'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { isEmpty } from 'utils'

const TIME_UNITS = 10 // 10 days, 10 months or 10 weeks

function useApp(defaultPage) {
  const [page, setPage] = useState(defaultPage || 'dashboard')
  const [firstVisit, setFirstVisit] = useState(false)
  const [prices, setPrices] = useState([])
  const [historicalPrices, setHistoricalPrices] = useState([])
  const [timeInterval, setTimeInterval] = useState('months')

  useEffect(() => {
    // The JSON.parse() method parses a JSON string
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    if (!cryptoDashData) {
      saveSettings()
    } else if (!firstVisit && page === 'dashboard') {
      fetchPrices(cryptoDashData.favorites)
      fetchHistorical(cryptoDashData.currentFavCoin)
    }
  }, [firstVisit, page])

  async function fetchPrices(favorites) {
    const priceList = []

    for (let i = 0; i < favorites.length; i++) {
      try {
        // Await for this function to return data
        const price = await cc.priceFull(favorites[i], 'USD')
        priceList.push(price)
      } catch (error) {
        console.error(`Fetch price error: ${error}`)
      }
    }

    const results = priceList.filter(item => !isEmpty(item))

    setPrices(results)
  }

  async function fetchHistorical(currentFav) {
    setHistoricalPrices([])

    const priceList = []

    for (let time = TIME_UNITS; time >= 1; time--) {
      try {
        const price = await cc.priceHistorical(
          currentFav,
          'USD',
          moment().subtract(time, 'months').toDate() // Put it into a JavaScript date
        )
        priceList.push(price)
      } catch (error) {
        console.error(`Fetch price error: ${error}`)
      }
    }

    const historical = [
      {
        name: currentFav,
        data: priceList.map((ticker, index) => {
          return [
            moment()
              .subtract(TIME_UNITS - index, 'months')
              .valueOf(),
            ticker.USD
          ]
        })
      }
    ]

    setHistoricalPrices(historical)
  }

  function saveSettings() {
    setFirstVisit(true)
    setPage('settings')
  }

  function confirmFavorites(favorites) {
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({ favorites, currentFavCoin: favorites[0] })
    )

    setFirstVisit(false)
    setPage('dashboard')
  }

  function handleChangeOnChartSelect(event) {
    setTimeInterval(event.target.value)
  }

  return {
    page,
    prices,
    historicalPrices,
    firstVisit,
    timeInterval,
    setPage,
    saveSettings,
    confirmFavorites,
    fetchHistorical,
    handleChangeOnChartSelect
  }
}

export default useApp
