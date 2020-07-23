import { useState, useEffect } from 'react'
import cc from 'cryptocompare'

cc.setApiKey('ab4c13e647046a6f66904bc40fc89e06f6309fbfae3299654fce359eaf895548')

function useCoins() {
  const [coins, setCoins] = useState([])
  const [coinBaseUrl, setCoinBaseUrl] = useState()

  // Will trigger the callback only after the first render
  useEffect(() => {
    fetchCoins()
  }, [])

  async function fetchCoins() {
    try {
      const { Data, BaseImageUrl } = await cc.coinList()
      const coinList = Data
      const baseUrl = BaseImageUrl

      setCoins(coinList)
      setCoinBaseUrl(baseUrl)
    } catch (err) {
      console.error(err)
    }
  }

  return { coins, coinBaseUrl }
}

export default useCoins
