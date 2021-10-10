import styled from 'styled-components'
import darkImg from '../../assets/img/background-dark.svg'
import lightImg from '../../assets/img/background-light.svg'

export const Hero = styled.section`
	padding: 1rem;
	background-color: ${({ theme }) => theme.hero};
	border-radius: 10px 0 0 10px;
	/* background-image: url
		(${(theme) => (theme === 'dark' ? { darkImg } : { lightImg })}); */
	background-image: url(${lightImg});
	background-position: bottom;
	background-size: contain;
	background-repeat: no-repeat;

	@media all and (max-width: 768px) {
		background-color: transparent;
		background-image: none;
	}

	h1 {
		padding: 1rem;
		color: #ffffff;

		@media all and (max-width: 768px) {
			padding: 1rem 0;
			color: ${({ theme }) => theme.text};
		}

		.text-highlight {
			color: ${({ theme }) => theme.heroInvert};

			@media all and (max-width: 768px) {
				color: ${({ theme }) => theme.button};
			}
		}
	}

	.icon-theme {
		font-size: 1.6rem;
		cursor: pointer;
		transition: all 120ms ease-in;
		color: ${({ theme }) => theme.heroInvert};

		@media all and (max-width: 768px) {
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
`

export default Hero
