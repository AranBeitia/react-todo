import styled from 'styled-components'
import lightImg from '../../assets/img/background-light.svg'

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

		&.bg-image {
			background-image: url(${lightImg});
			background-position: bottom;
			background-size: contain;
			background-repeat: no-repeat;
			height: -webkit-fill-available;
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
