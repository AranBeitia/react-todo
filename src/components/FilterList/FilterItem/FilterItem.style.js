import styled from 'styled-components'

const FilterItemList = styled.li`
	padding: 0 0.5rem;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.toggleBorder};
	}
`
export default FilterItemList
