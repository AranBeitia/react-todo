import styled from 'styled-components'

export const AppComponent = styled.div`
	display: flex;
	max-width: 1140px;
	width: 100%;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.background};
	transition: all 0.5s linear;
`
export default AppComponent
