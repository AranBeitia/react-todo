import React from 'react'
import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList } = this.props
		return (
			<ul>
				{taskList.map((item) => (
					<TodoItem todoItem={item} />
				))}
			</ul>
		)
	}
}

export default TodoList
