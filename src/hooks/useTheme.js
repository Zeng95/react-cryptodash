import { useState } from 'react'
import { themes } from 'components/Shared/Styles'

function useTheme() {
  const [dark, setDark] = useState(true) // Default theme is dark

  // To toggle between dark and light modes
  const toggleTheme = isDark => {
    setDark(isDark)
  }

  const theme = dark ? themes.dark : themes.light

  return { theme, dark, toggleTheme }
}

export default useTheme
