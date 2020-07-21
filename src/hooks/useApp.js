import { useState, useEffect } from 'react'

function useApp(defaultPage) {
  const [page, setPage] = useState(defaultPage || 'dashboard')
  const [firstVisit, setFirstVisit] = useState(false)

  function saveSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))

    if (!cryptoDashData) {
      setPage('settings')
      setFirstVisit(true)
    }
  }

  function confirmFavorites() {
    setPage('dashboard')
    setFirstVisit(false)

    localStorage.setItem('cryptoDash', JSON.stringify({ test: 'hello' }))
  }

  // Will trigger the callback only after the first render
  useEffect(() => {
    saveSettings()
  }, [])

  return {
    page,
    setPage,
    firstVisit,
    saveSettings,
    confirmFavorites
  }
}

export default useApp
