import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import TodoListStyle from './TodoList.style'
import FilterList from '../FilterList'
import TodoItem from '../TodoItem'

class TodoList extends React.Component {
	render() {
		const {
			taskList,
			deleteItem,
			editItem,
			done,
			saveOrderTasks,
			clearCompleted,
			handleFilter,
			handleSubmite,
		} = this.props

		return (
			<TodoListStyle>
				<FilterList
					taskList={taskList}
					clearCompleted={clearCompleted}
					handleFilter={handleFilter}
				/>
				<DragDropContext
					onDragEnd={(result) => {
						const { source, destination } = result
						if (!destination) return
						if (
							source.index === destination.index &&
							source.droppableId === destination.droppableId
						)
							return
						saveOrderTasks(taskList, source.index, destination.index)
					}}
				>
					<Droppable droppableId="tasks">
						{(provided) => (
							<ul {...provided.droppableProps} ref={provided.innerRef}>
								{taskList.map((item, index) => (
									<TodoItem
										key={item.id}
										index={index}
										id={item.id}
										title={item.title}
										done={item.done}
										isEditable={item.isEditable}
										handleDone={done}
										handleDelete={deleteItem}
										handleEdit={editItem}
										handleFilter={handleFilter}
										handleSubmite={handleSubmite}
									/>
								))}
								{provided.placeholder}
							</ul>
						)}
					</Droppable>
				</DragDropContext>
				{taskList.length > 1 && (
					<p className="tab">Drag and drop to reorder list</p>
				)}
			</TodoListStyle>
		)
	}
}

export default TodoList
