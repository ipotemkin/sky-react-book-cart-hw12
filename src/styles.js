import styled, { createGlobalStyle } from 'styled-components'

export const AppWrapper = styled.div`
  background: black;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
`
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Consolas;
  box-sizing: border-box;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: whitesmoke;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
