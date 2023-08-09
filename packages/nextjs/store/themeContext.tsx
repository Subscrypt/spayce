import { createContext, useContext, useEffect } from 'react'
import { SafeThemeProvider, useThemeMode } from '@safe-global/safe-react-components'

import useLocalStorageState from '../hooks/useLocalStorageState'

const STORAGE_KEY_THEME_MODE = 'THEME_MODE_REACT_SERVICE_STATUS_KEY'


type themeContextValue = {
  switchThemeMode: () => void
  isDarkTheme: boolean
  isLightTheme: boolean
}

const initialState = {
  switchThemeMode: () => { },
  isDarkTheme: true,
  isLightTheme: false
}

const themeContext = createContext<themeContextValue>(initialState)

const useTheme = () => {
  const context = useContext(themeContext)

  if (!context) {
    throw new Error('useTheme should be used within a ThemeContext Provider')
  }

  return context
}


export { useTheme }
