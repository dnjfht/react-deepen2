import { createContext, useState } from 'react'
import Page from './Page'

export const ThemeContext = createContext()

export default function SimpleDarkMode() {
  const [mode, setMode] = useState('light')

  const config = {
    mode,
    toggleMode: () => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    },
  }

  return (
    <ThemeContext.Provider value={config}>
      <Page />
    </ThemeContext.Provider>
  )
}
