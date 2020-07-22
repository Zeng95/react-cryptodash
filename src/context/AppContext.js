import React from 'react'

import useApp from '../hooks/useApp'

// Create a Context object
export const AppContext = React.createContext()

function AppContextProvider(props) {
  const app = useApp()

  return (
    <AppContext.Provider value={{ ...app }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
