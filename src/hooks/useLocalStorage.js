import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = window.localStorage.getItem(key)
    return stored !== null ? JSON.parse(stored) : initialValue
  })

  const setAndPersist = (next) => {
    setValue((prev) => {
      const resolved = typeof next === 'function' ? next(prev) : next
      window.localStorage.setItem(key, JSON.stringify(resolved))
      return resolved
    })
  }

  return [value, setAndPersist]
}
