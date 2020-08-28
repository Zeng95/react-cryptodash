import cc from 'cryptocompare'
import _ from 'lodash'
import { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_CRYPTOCOMPARE_API_KEY
const MAX_FAVORITES = 10

cc.setApiKey(API_KEY)

function useCoins() {
  const [coins, setCoins] = useState()
  const [coinBaseUrl, setCoinBaseUrl] = useState()
  const [filteredCoins, setFilteredCoins] = useState()
  const [favoriteCoins, setFavoriteCoins] = useState([
    'BTC',
    'ETH',
    'XMR',
    'DOGE'
  ])
  const [currentFavCoin, setCurrentFavCoin] = useState(favoriteCoins[0])

  const fetchCoins = async () => {
    try {
      const { Data, BaseImageUrl } = await cc.coinList()

      setCoins(Data)
      setCoinBaseUrl(BaseImageUrl)
    } catch (error) {
      console.error(`Fetch coins error: ${error}`)
    }
  }

  const saveSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    if (cryptoDashData) {
      setFavoriteCoins(cryptoDashData.favorites)
      setCurrentFavCoin(cryptoDashData.currentFavCoin)
    }
  }

  const addCoin = coinKey => {
    const favorites = [...favoriteCoins]

    // Less than 10
    if (favoriteCoins.length < MAX_FAVORITES) {
      favorites.push(coinKey)
      setFavoriteCoins(favorites)
    }
  }

  const removeCoin = coinKey => {
    const favorites = [...favoriteCoins]

    setFavoriteCoins(_.pull(favorites, coinKey))
  }

  const isInFavoriteCoins = coinKey => {
    return favoriteCoins.includes(coinKey)
  }

  const setCurrentFavorite = symbol => {
    setCurrentFavCoin(symbol)

    // cryptoDashData is an object
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    localStorage.setItem(
      'cryptoDash',
      // 提取 cryptoDashData 所有值，然后合并新的值
      JSON.stringify({ ...cryptoDashData, currentFavCoin: symbol })
    )
  }

  // Will trigger the callback only after the first render
  useEffect(() => {
    saveSettings()
    fetchCoins()
  }, [])

  return {
    coins,
    coinBaseUrl,
    favoriteCoins,
    filteredCoins,
    currentFavCoin,
    addCoin,
    removeCoin,
    setFilteredCoins,
    isInFavoriteCoins,
    setCurrentFavorite
  }
}

export default useCoins
