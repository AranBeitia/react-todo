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
	}
`

export default Hero

// const UniversalIconImg = (props) => {
// 	return props.hasDedicatedHeroNavBar &&
// 		props.currentNavBarStyle === 'light' ? (
// 		<IconLight {...props} />
// 	) : props.hasDedicatedHeroNavBar && props.currentNavBarStyle === 'default' ? (
// 		<IconDefault {...props} />
// 	) : (
// 		<IconElse {...props} />
// 	)
// }

// const IconLight = styled.div`
// 	background-image: url('/images/account-icon-light.svg');
// `

// const IconDefault = styled.div`
// 	background-image: url('${ThemeSettings.accountIcon}');
// `
