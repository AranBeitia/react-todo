import styled from 'styled-components'

export const AppComponent = styled.div`
	display: flex;
	max-width: 1140px;
	width: 100%;
	min-height: 60vh;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.background};
	transition: all 0.5s linear;

	@media all and (max-width: 768px) {
		flex-direction: column;
		height: 100vh;
	}
`
export default AppComponent
