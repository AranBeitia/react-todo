import styled from 'styled-components'

export const TodoItem = styled.li`
	padding: 0.8rem;
	border: 2px solid ${({ theme }) => theme.text};
	border-radius: 0.625rem;
	background-color: ${({ theme }) => theme.background};
	transition: background-color 0.5s linear;

	&:not(:last-child) {
		margin-bottom: 1rem;
	}

	.label {
		line-height: 1;
		margin-left: 0.6rem;
		text-transform: capitalize;
	}

	.--is-disabled {
		pointer-events: none;
		color: #7d80aa;
		text-decoration: line-through;
	}

	.checkbox {
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		border: 2px solid ${({ theme }) => theme.button};
		transition: box-shadow 0.3s;
		cursor: pointer;
		appearance: none;
	}

	.checkbox:checked {
		box-shadow: inset 0 0 0 1.25rem ${({ theme }) => theme.button};
	}
`
export default TodoItem
