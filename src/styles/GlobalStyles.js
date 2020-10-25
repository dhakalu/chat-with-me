import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body, html {
    padding: 0;
    margin: 0;
    height: -webkit-fill-available;
  }

  * {
    font-family: Verdana, Geneva, sans-serif	
  }
`

export default GlobalStyle
