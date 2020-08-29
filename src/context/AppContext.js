import useApp from 'hooks/useApp'
import useMenu from 'hooks/useMenu'
import React from 'react'

// Create a Context object
const AppContext = React.createContext()

function AppContextProvider(props) {
  const app = useApp()
  const menu = useMenu()

  const { Provider } = AppContext

  return <Provider value={{ ...app, ...menu }}>{props.children}</Provider>
}

export { AppContext, AppContextProvider }
