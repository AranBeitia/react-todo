import React from 'react'
import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList } = this.props
		return (
			<ul>
				{taskList.map((item, id) => (
					<TodoItem key={`item-${id}`} item={item} />
					// <li key={`item-${id}`}>{item}</li>
				))}
			</ul>
		)
	}
}

export default TodoList
