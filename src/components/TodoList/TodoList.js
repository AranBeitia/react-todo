import React from 'react'
import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList, hecho } = this.props

		return (
			<ul>
				{taskList.map((item, id) => (
					<TodoItem key={`item-${id}`} title={item.title} hecho={hecho} />
				))}
			</ul>
		)
	}
}

export default TodoList
