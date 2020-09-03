import { useState } from 'react'

function useMenu() {
  const [languageVisible, setLanguageVisible] = useState(false)
  const [themeVisible, setThemeVisible] = useState(false)

  const showMenuVisible = handler => {
    handler(true)
  }

  const hideMenuVisible = handler => {
    handler(false)
  }

  return {
    languageVisible,
    setLanguageVisible,

    themeVisible,
    setThemeVisible,

    showMenuVisible,
    hideMenuVisible
  }
}

export default useMenu
