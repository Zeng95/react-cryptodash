import { useState, useEffect } from 'react'
import cc from 'cryptocompare'

function useApp(defaultPage) {
  const [page, setPage] = useState(defaultPage || 'dashboard')
  const [firstVisit, setFirstVisit] = useState(false)
  const [coinList, setCoinList] = useState([])

  function saveSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    if (!cryptoDashData) {
      setPage('settings')
      setFirstVisit(true)
    }
  }

  function confirmFavorites() {
    setPage('dashboard')
    setFirstVisit(false)

    localStorage.setItem('cryptoDash', JSON.stringify({ test: 'hello' }))
  }

  async function fetchCoins() {
    try {
      const response = await cc.coinList()
      const coinList = response.Data

      setCoinList(coinList)
    } catch (err) {
      console.error(err)
    }
  }

  // Will trigger the callback only after the first render
  useEffect(() => {
    saveSettings()
    fetchCoins()
  }, [])

  return {
    page,
    setPage,
    coinList,
    firstVisit,
    saveSettings,
    confirmFavorites
  }
}

export default useApp
