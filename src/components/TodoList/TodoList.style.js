import styled from 'styled-components'
import lightImg from '../../assets/img/background-light.svg'

export const TodoListStyle = styled.section`
	padding: 1rem;

	.tab {
		margin: 1rem;
		text-align: center;
	}

	@media all and (max-width: 768px) {
		&.bg-image {
			background-image: url(${lightImg});
			background-position: bottom;
			background-size: contain;
			background-repeat: no-repeat;
			height: -webkit-fill-available;
		}
	}
`
export default TodoListStyle
