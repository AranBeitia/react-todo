import React from 'react'
import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList, deleteItem, done } = this.props

		return (
			<ul>
				{taskList.map((item, index) => (
					<TodoItem
						key={`${index}-${item.id}`}
						id={item.id}
						title={item.title}
						done={item.done}
						handleDone={done}
						handleDelete={deleteItem}
					/>
				))}
			</ul>
		)
	}
}

export default TodoList
