import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.text};

	/* color: var.$font-color-base;
	background-color: var.$color-secondary; */
  }
`
