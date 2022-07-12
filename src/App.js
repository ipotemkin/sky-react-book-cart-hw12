/* eslint-disable react/jsx-no-constructed-context-values */

import { useState } from 'react'

import Console from './components/Console'
import Title from './components/Title'

import { themes, ThemeContext } from './context/theme'
import ThemeSwitcher from './components/theme-switcher'

import { AppWrapper, GlobalStyle } from './styles'


const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.green)
  
  const toggleTheme = () => {
    if (currentTheme === themes.green) setCurrentTheme(themes.orange)
    else setCurrentTheme(themes.green)
  }
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <AppWrapper>
        <GlobalStyle />
        <ThemeSwitcher />
        <Title>Console CMD. SKYPRO_REACT</Title>
        <Console />
      </AppWrapper>
    </ThemeContext.Provider>
  )
}

export default App
