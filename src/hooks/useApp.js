import cc from 'cryptocompare'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { isEmpty } from 'utils'

const TIME_UNITS = 10 // 10 days, 10 months or 10 weeks

function useApp(defaultPage) {
  const [page, setPage] = useState(defaultPage || 'dashboard')
  const [firstVisit, setFirstVisit] = useState(false)
  const [prices, setPrices] = useState([])

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
    const priceList = []

    for (let index = TIME_UNITS; index >= 1; index--) {
      try {
        const price = await cc.priceHistorical(
          currentFav,
          'USD',
          moment().subtract(index, 'month').toDate() // subtract means 减
        )
        priceList.push(price)
      } catch (error) {
        console.error(`Fetch price error: ${error}`)
      }
    }
    console.log(priceList)
    // const historical = [
    //   {
    //     name: currentFav,
    //     data: priceList.map((price, index) => {})
    //   }
    // ]

    // return historical
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

  return {
    page,
    prices,
    firstVisit,
    setPage,
    saveSettings,
    confirmFavorites
  }
}

export default useApp
