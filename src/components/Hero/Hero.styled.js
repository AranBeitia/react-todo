import styled from 'styled-components'
import image from '../../assets/img/background-dark.svg'

export const Hero = styled.section`
	background-color: ${({ theme }) => theme.hero};
	border-radius: 10px 0 0 10px;
	background-image: url(${image});

	h1 {
		padding: 1rem;

		@media all and (max-width: 480px) {
			padding: 1rem 0;
		}
	}

	.icon-theme {
		font-size: 1.6rem;
		cursor: pointer;
		transition: all 120ms ease-in;

		&:hover {
			transform: scale(1.5);
		}
	}

	.text-highlight {
		/* color: var.$color-primary; */
	}

	.header-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 2rem;
	}
`

export default Hero
