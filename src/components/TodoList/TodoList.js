import React from 'react'
import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList, name } = this.props
		return (
			<ul>
				{taskList.map((item, id) => (
					<TodoItem name={name} todoItem={item} key={`item-${id}`} />
				))}
			</ul>
		)
	}
}

export default TodoList
