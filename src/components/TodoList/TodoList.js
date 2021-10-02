import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import './TodoList.scss'

import TodoItem from '../TodoItem'
class TodoList extends React.Component {
	render() {
		const { taskList, deleteItem, editItem, done } = this.props

		return (
			<section className="todo-list">
				<h2 className="todo-list__title">Today's tasks</h2>
				<DragDropContext onDragEnd={(result) => console.log(result)}>
					<Droppable droppableId="tasks">
						{(provided) => (
							<ul {...provided.droppableProps} ref={provided.innerRef}>
								{taskList.map((item, index) => (
									<TodoItem
										key={item.id}
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
						)}
					</Droppable>
				</DragDropContext>
			</section>
		)
	}
}

export default TodoList
