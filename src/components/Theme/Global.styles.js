import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.text};
  }
`
