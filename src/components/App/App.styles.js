import styled from 'styled-components'
import darkImg from '../../assets/img/background-dark.svg'

export const AppComponent = styled.div`
	display: flex;
	max-width: 62.5rem;
	width: 100%;
	min-height: 65vh;
	border-radius: 0.62rem;
	background-color: ${({ theme }) => theme.background};
	transition: background-color 0.5s linear;

	@media all and (max-width: 48rem) {
		flex-direction: column;
		height: 100vh;

		&.bg-img {
			background-position: bottom;
			background-size: contain;
			background-repeat: no-repeat;
			height: -webkit-fill-available;
			background-image: url(${darkImg});
		}
	}

	.main-wrapper {
		margin: 4rem 2rem;
		width: 100%;

		@media all and (max-width: 48rem) {
			margin: 0;
		}
	}
`
export default AppComponent
