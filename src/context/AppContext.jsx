import useApp from 'hooks/useApp'
import useMenu from 'hooks/useMenu'
import React from 'react'

// Create a Context object
const AppContext = React.createContext()

function AppContextProvider(props) {
  const app = useApp()
  const menu = useMenu()

  return (
    <AppContext.Provider value={{ ...app, ...menu }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
