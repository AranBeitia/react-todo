import React from 'react'

import './TodoList.scss'

import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList, deleteItem, editItem, done } = this.props

		return (
			<section className="todo-list">
				<h2 className="todo-list__title">Today's tasks</h2>
				<ul>
					{taskList.map((item, index) => (
						<TodoItem
							key={`${index}-${item.id}`}
							id={item.id}
							title={item.title}
							done={item.done}
							isEditable={item.isEditable}
							handleDone={done}
							handleDelete={deleteItem}
							handleEdit={editItem}
						/>
					))}
				</ul>
			</section>
		)
	}
}

export default TodoList
