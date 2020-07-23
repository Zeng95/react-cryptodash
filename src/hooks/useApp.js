import { useState, useEffect } from 'react'

function useApp(defaultPage) {
  const [firstVisit, setFirstVisit] = useState(false)
  const [page, setPage] = useState(defaultPage || 'dashboard')

  // Will trigger the callback only after the first render
  useEffect(() => {
    saveSettings()
  }, [])

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

  return {
    page,
    firstVisit,
    setPage,
    saveSettings,
    confirmFavorites
  }
}

export default useApp
