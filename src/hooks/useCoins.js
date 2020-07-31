import { useState, useEffect } from 'react'
import cc from 'cryptocompare'
import _ from 'lodash'

cc.setApiKey('ab4c13e647046a6f66904bc40fc89e06f6309fbfae3299654fce359eaf895548')

const MAX_FAVORITES = 10

function useCoins() {
  const [coins, setCoins] = useState([])
  const [favoriteCoins, setFavoriteCoins] = useState([
    'BTC',
    'ETH',
    'XMR',
    'DOGE'
  ])
  const [coinBaseUrl, setCoinBaseUrl] = useState()

  // Will trigger the callback only after the first render
  useEffect(() => {
    saveSettings()
    fetchCoins()
  }, [])

  async function fetchCoins() {
    try {
      const { Data, BaseImageUrl } = await cc.coinList()

      setCoins(Data)
      setCoinBaseUrl(BaseImageUrl)
    } catch (err) {
      console.error(err)
    }
  }

  function saveSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    if (cryptoDashData) {
      const { favorites } = cryptoDashData
      setFavoriteCoins(favorites)
    }
  }

  function addCoin(coinKey) {
    const favorites = [...favoriteCoins]

    // Less than 10
    if (favoriteCoins.length < MAX_FAVORITES) {
      favorites.push(coinKey)
      setFavoriteCoins(favorites)
    }
  }

  function removeCoin(coinKey) {
    const favorites = [...favoriteCoins]

    setFavoriteCoins(_.pull(favorites, coinKey))
  }

  function isInFavoriteCoins(coinKey) {
    return favoriteCoins.includes(coinKey)
  }

  return {
    coins,
    favoriteCoins,
    coinBaseUrl,
    addCoin,
    removeCoin,
    isInFavoriteCoins
  }
}

export default useCoins
