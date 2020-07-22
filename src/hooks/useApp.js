import { useState, useEffect } from 'react'
import cc from 'cryptocompare'

cc.setApiKey('ab4c13e647046a6f66904bc40fc89e06f6309fbfae3299654fce359eaf895548')

function useApp(defaultPage) {
  const [coinList, setCoinList] = useState([])
  const [firstVisit, setFirstVisit] = useState(false)
  const [page, setPage] = useState(defaultPage || 'dashboard')

  async function fetchCoins() {
    try {
      const response = await cc.coinList()
      const coinList = response.Data

      setCoinList(coinList)
    } catch (err) {
      console.error(err)
    }
  }

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
