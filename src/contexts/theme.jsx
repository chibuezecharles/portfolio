
import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = saved || (prefersDark ? 'dark' : 'light')

    setTheme(initialTheme)

    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(initialTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light'

      localStorage.setItem('theme', newTheme)

      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(newTheme)

      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}