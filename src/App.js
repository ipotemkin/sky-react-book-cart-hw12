import Console from './components/Console'
import Title from './components/Title'

import ThemeContextProvider from './context/theme'
import ThemeSwitcher from './components/theme-switcher'

import { AppWrapper, GlobalStyle } from './styles'


const App = () => (
  <ThemeContextProvider>
    <AppWrapper>
      <GlobalStyle />
      <ThemeSwitcher />
      <Title>Console CMD. SKYPRO_REACT</Title>
      <Console />
    </AppWrapper>
  </ThemeContextProvider>
  )

export default App
