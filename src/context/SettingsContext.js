import React from 'react'

import useCoins from '../hooks/useCoins'

// Create a Context object
const SettingsContext = React.createContext()

function SettingsContextProvider(props) {
  const coins = useCoins()
  const { Provider } = SettingsContext

  return <Provider value={{ ...coins }}>{props.children}</Provider>
}

export { SettingsContext, SettingsContextProvider }
