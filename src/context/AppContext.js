import React from 'react'

import useApp from '../hooks/useApp'

// Create a Context object
const AppContext = React.createContext()

function AppContextProvider(props) {
  const app = useApp()
  const { Provider } = AppContext

  return <Provider value={{ ...app }}>{props.children}</Provider>
}

export { AppContext, AppContextProvider }
