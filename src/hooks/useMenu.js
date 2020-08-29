import { useState } from 'react'

function useMenu() {
  const [languageVisible, setLanguageVisible] = useState(false)
  const [themeVisible, setThemeVisible] = useState(false)

  const toggleMenuVisible = (state, handler) => {
    handler(!state)
  }

  return {
    languageVisible,
    setLanguageVisible,

    themeVisible,
    setThemeVisible,

    toggleMenuVisible
  }
}

export default useMenu
