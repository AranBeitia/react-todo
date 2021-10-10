import styled, { css } from 'styled-components'

export const Button = styled.button`
	display: block;
	border-radius: 3px;
	padding: 0.5rem 1rem;
	width: 10rem;
	font-weight: 600;
	cursor: pointer;
	border: 2px solid ${({ theme }) => theme.button};
	background: transparent;
	color: ${({ theme }) => theme.button};
	transition: all 0.25s ease;

	${(props) =>
		props.secondary &&
		css`
			background: ${({ theme }) => theme.button};
			color: white;
		`}

	&:hover {
		border: 2px solid ${(props) => props.theme.button};
		background: ${(props) =>
			props.secondary ? 'transparent' : props.theme.button};
		color: ${(props) => (props.secondary ? props.theme.button : 'white')};
	}
`

export const ButtonOutlined = styled(Button)`
	background-color: transparent;
	border-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.background};

	&:hover {
		background-color: ${({ theme }) => theme.background};
		border-color: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text};
	}
`

export const ButtonSmall = styled(Button)`
	width: 1.5rem;
	height: 1.5rem;
	padding: 0.2rem;
	font-size: 0.5rem;
`

export default Button
