import { useState } from 'react'

function useApp(defaultPage) {
  const [page, setPage] = useState(defaultPage || 'dashboard')

  return { page, setPage }
}

export default useApp
