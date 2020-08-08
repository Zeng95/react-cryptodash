import { useState, useEffect } from 'react'
import cc from 'cryptocompare'

function useApp(defaultPage) {
  const [firstVisit, setFirstVisit] = useState(false)
  const [page, setPage] = useState(defaultPage || 'dashboard')
  const [prices, setPrices] = useState([])

  useEffect(() => {
    // The JSON.parse() method parses a JSON string
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    if (!cryptoDashData) {
      saveSettings()
    } else if (!firstVisit) {
      fetchPrices(cryptoDashData.favorites)
    }
  }, [firstVisit])

  async function fetchPrices(favorites) {
    const priceList = []

    for (let i = 0; i < favorites.length; i++) {
      try {
        const response = await cc.priceFull(favorites[i], 'USD')
        priceList.push(response)
      } catch (error) {
        console.error(`Fetch price error: ${error}`)
      }
    }

    console.log(priceList)
    setPrices(priceList)
  }

  function saveSettings() {
    setFirstVisit(true)
    setPage('settings')
  }

  function confirmFavorites(favorites) {
    setFirstVisit(false)
    setPage('dashboard')

    localStorage.setItem('cryptoDash', JSON.stringify({ favorites }))
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
