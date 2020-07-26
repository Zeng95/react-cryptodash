import { useState, useEffect } from 'react'
import cc from 'cryptocompare'

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

  function addCoin(coinKey) {
    if (favoriteCoins.length < MAX_FAVORITES) {
      const favorites = [...favoriteCoins, coinKey]
      console.log(favorites, coinKey)
      setFavoriteCoins(favorites)
    }
  }

  function removeCoin(coin) {
    console.log('remove')
  }

  return { coins, favoriteCoins, coinBaseUrl, addCoin, removeCoin }
}

export default useCoins
