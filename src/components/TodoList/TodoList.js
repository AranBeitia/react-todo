import React from 'react'
import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	// state = {
	// 	todoList: {
	// 		text: '',
	// 		done: false,
	// 	},
	// }

	done = (e) => {
		// this.setState({
		// 	text: '',
		// 	done: !e.target.value,
		// })
		// console.log(e.target.value)
	}

	render() {
		const { taskList } = this.props
		return (
			<ul>
				{taskList.map((item, id) => (
					<TodoItem key={`item-${id}`} item={item} handleDone={this.done} />
				))}
			</ul>
		)
	}
}

export default TodoList
