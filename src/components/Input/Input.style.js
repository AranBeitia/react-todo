import styled from 'styled-components'

export const Input = styled.input`
	position: relative;

	&__label {
		position: absolute;
		left: 0;
		top: 0;
		padding: 0.25rem;
		margin: calc(0.5rem * 0.75 + 3px) 0.25rem;
		white-space: nowrap;
		transform: translate(0, 0);
		transform-origin: 0 0;
		font-size: 1rem;
		font-weight: bold;
		line-height: 1.2;
		transition: transform 120ms ease-in;
	}

	&:-internal-autofill-selected {
		background: #010319;
	}

	&__field {
		box-sizing: border-box;
		display: block;
		width: 100%;
		border: 0;
		/* border-bottom: 2px solid ${(props) => props.theme.text}; */
		border: 2px solid ${(props) => props.theme.text};
		padding: calc(0.5rem * 1.5) 0.5rem;
		color: white;
		background: transparent;

		&:focus,
		&:not(:placeholder-shown) {
			& + .input__label {
				transform: translate(0, -80%) scale(0.8);
				color: #7d80aa;
			}
		}
	}

	input:-internal-autofill-selected {
		background-color: #010319 !important;
	}
`

export default Input
