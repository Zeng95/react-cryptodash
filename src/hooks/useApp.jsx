import cc from 'cryptocompare'
import moment from 'moment'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { isEmpty } from '../utils'

const TIME_UNITS = 10 // 10 days, 10 months or 10 weeks

function useApp() {
  const { t } = useTranslation()
  const [page, setPage] = useState(t('navbar.dashboard'))
  const [firstVisit, setFirstVisit] = useState(false)
  const [prices, setPrices] = useState([])
  const [historicalPrices, setHistoricalPrices] = useState([])
  const [timeInterval, setTimeInterval] = useState('days')

  const fetchPrices = async favorites => {
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

  const fetchHistorical = useCallback(
    async currentFav => {
      setHistoricalPrices([])

      const priceList = []

      for (let time = TIME_UNITS; time >= 1; time--) {
        try {
          const price = await cc.priceHistorical(
            currentFav,
            'USD',
            moment()
              .subtract({ [timeInterval]: time })
              .toDate() // Put it into a JavaScript date
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
              // The valueOf() method returns the primitive value of a Date object.
              moment()
                .subtract({ [timeInterval]: TIME_UNITS - index })
                .valueOf(),
              ticker.USD
            ]
          })
        }
      ]

      setHistoricalPrices(historical)
    },
    [timeInterval]
  )

  const saveSettings = useCallback(() => {
    setFirstVisit(true)
    setPage(t('navbar.settings'))
  }, [t])

  const confirmFavorites = favorites => {
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({ favorites, currentFavCoin: favorites[0] })
    )

    setFirstVisit(false)
    setPage(t('navbar.dashboard'))
  }

  const handleChangeOnChartSelect = event => {
    setTimeInterval(event.target.value)
  }

  useEffect(() => {
    // The JSON.parse() method parses a JSON string
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    if (!cryptoDashData) {
      saveSettings()
    } else if (!firstVisit && page === t('navbar.dashboard')) {
      fetchPrices(cryptoDashData.favorites)
      fetchHistorical(cryptoDashData.currentFavCoin)
    }
  }, [fetchHistorical, firstVisit, page, saveSettings, t])

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
