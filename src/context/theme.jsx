import { useContext, useMemo, useState, createContext } from "react"

export const themes = {
  green: { color: 'green' },
  orange: { color: 'orange' }
}

export const ThemeContext = createContext({
  theme: themes.green,
  toggleTheme: () => {},
})

export const useThemeContext = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.green)

  const toggleTheme = () => setCurrentTheme(
    prevTheme => prevTheme === themes.green ? themes.orange : themes.green
  )

  const value = useMemo(
    () => ({ theme: currentTheme, toggleTheme }),
    [currentTheme]
  )
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider