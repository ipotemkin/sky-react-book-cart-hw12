/* eslint-disable no-unused-vars */

import styled, { createGlobalStyle } from 'styled-components'

import Console from './components/Console'
import Title from './components/Title'

const AppWrapper = styled.div`
  background: black;
  width: 100%;
  paddind: 2rem;
  height: 100vh;
`

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Consolas;
  box-sizing: border-box;

  // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  //   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  //   sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: whitesmoke;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const App = () => (
  <AppWrapper>
    <GlobalStyle />
    <Title>Console CMD. SKYPRO_REACT</Title>
    <Console />
  </AppWrapper>
)

export default App
