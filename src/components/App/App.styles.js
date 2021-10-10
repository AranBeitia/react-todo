import styled from 'styled-components'
import darkImg from '../../assets/img/background-dark.svg'

export const AppComponent = styled.div`
	display: flex;
	max-width: 1000px;
	width: 100%;
	min-height: 65vh;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.background};
	transition: background-color 0.5s linear;

	@media all and (max-width: 768px) {
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
		margin: 65px 35px;

		@media all and (max-width: 768px) {
			margin: 0;
		}
	}
`
export default AppComponent
