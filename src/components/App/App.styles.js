import styled from 'styled-components'

export const AppComponent = styled.div`
	max-width: 1140px;
	width: 100%;
	min-height: 50vh;
	margin: auto;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.background};
	transition: all 0.5s linear;
`
export default AppComponent
