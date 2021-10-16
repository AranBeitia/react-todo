import styled from 'styled-components'
import darkImg from '../../assets/img/background-dark.svg'
import lightImg from '../../assets/img/background-light.svg'

export const Hero = styled.section`
	padding: 1.5rem 2rem;
	margin: 0 auto;
	max-width: 21.8rem;
	width: 100%;
	background-color: ${({ theme }) => theme.hero};
	border-radius: 10px 0 0 10px;
	background-position: bottom;
	background-size: contain;
	background-repeat: no-repeat;

	@media all and (max-width: 48rem) {
		padding: 1rem 0;
	}

	h1 {
		color: #ffffff;

		@media all and (max-width: 48rem) {
			padding: 1rem 0;
			color: ${({ theme }) => theme.text};
		}

		.text-highlight {
			color: ${({ theme }) => theme.heroInvert};

			@media all and (max-width: 48rem) {
				color: ${({ theme }) => theme.button};
			}
		}
	}

	&.bg-img {
		background-position: bottom;
		background-size: contain;
		background-repeat: no-repeat;

		&__dark {
			background-image: url(${lightImg});
		}

		&__light {
			background-image: url(${darkImg});
		}

		@media all and (max-width: 48rem) {
			background-color: transparent;
			background-image: none;
		}
	}

	.icon-theme {
		font-size: 1.6rem;
		cursor: pointer;
		transition: all 120ms ease-in;
		color: ${({ theme }) => theme.icon};

		@media all and (max-width: 48rem) {
			color: ${({ theme }) => theme.button};
		}

		&:hover {
			transform: scale(1.5);
		}
	}

	.header-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	button {
		margin: 1rem;
	}
`

export default Hero
