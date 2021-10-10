import styled from 'styled-components'

export const Input = styled.input`
	box-sizing: border-box;
	display: block;
	width: 100%;
	border: 0;
	border-bottom: 2px solid ${({ theme }) => theme.text};
	padding: calc(0.5rem * 1.5) 0.5rem;
	color: ${({ theme }) => theme.text};
	background: transparent;

	&:focus,
	&:not(:placeholder-shown) {
		& + .input__label {
			transform: translate(0, -80%) scale(0.8);
			color: #7d80aa;
		}
	}
`

export default Input
