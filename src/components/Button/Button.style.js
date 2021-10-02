import styled, { css } from 'styled-components'

export const Button = styled.button`
	display: block;
	border-radius: 3px;
	padding: 0.5rem 1rem;
	width: 10rem;
	font-weight: 600;
	cursor: pointer;
	border: 2px solid ${({ theme }) => theme.text};
	background: transparent;
	color: ${({ theme }) => theme.text};
	transition: all 0.25s ease;

	${(props) =>
		props.secondary &&
		css`
			background: ${({ theme }) => theme.text};
			color: white;
		`}

	&:hover {
		border: 2px solid ${(props) => props.theme.background};
		background: ${(props) =>
			props.secondary ? 'transparent' : props.theme.background};
		color: ${(props) => (props.secondary ? props.theme.background : 'white')};
	}
`

export const ButtonSmall = styled(Button)`
	width: 2rem;
	padding: 0.2rem;
`

export const ButtonIcon = styled(Button)`
	width: 2rem;
	padding: 0.2rem;
`

export default Button
