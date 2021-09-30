import styled, { css } from 'styled-components'

const primaryColor = '#d103fc'

const Button = styled.button`
	display: block;
	border-radius: 3px;
	padding: 0.5rem 1rem;
	margin: 0%.5rem 1rem;
	width: 10rem;
	font-weight: 600;
	cursor: pointer;
	border: 2px solid ${primaryColor};
	background: transparent;
	color: ${primaryColor};
	transition: all 0.25s ease;

	${(props) =>
		props.secondary &&
		css`
			background: ${primaryColor};
			color: white;
		`}

	&:hover {
		border: 2px solid primaryColor;
		background: ${(props) => (props.secondary ? 'transparent' : primaryColor)};
		color: ${(props) => (props.secondary ? primaryColor : 'white')};
	}
`
export default Button
