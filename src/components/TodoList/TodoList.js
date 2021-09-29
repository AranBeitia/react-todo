import React from 'react'
import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList } = this.props
		return (
			<ul>
				{taskList.map((item, id) => (
					<TodoItem
						item={item}
						// text={item.text}
						completed={item.completed}
						key={`item-${id}`}
					/>
				))}
			</ul>
		)
	}
}

export default TodoList
