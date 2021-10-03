import styled from 'styled-components'

export const Filter = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 1rem 0.5rem;
	font-size: 0.7rem;
	font-weight: 600;
	text-transform: uppercase;
	color: ${({ theme }) => theme.text};
`

export const FilterItem = styled.li`
	padding: 0 0.5rem;
`
