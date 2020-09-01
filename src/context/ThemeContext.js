import React from 'react'
import useTheme from 'hooks/useTheme'

// Create a Context object
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const theme = useTheme()

  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
