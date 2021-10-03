import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './TodoItem.scss'

import { ButtonSmall } from '../Button/Button.style'
class TodoItem extends React.Component {
	taskDone = (id) => {
		this.props.handleDone(id)
	}

	taskDelete = (id) => {
		this.props.handleDelete(id)
	}

	taskEdit = (id) => {
		this.props.handleEdit(id)
	}

	render() {
		const { id, title, done, isEditable, index } = this.props
		return (
			<Draggable key={id} draggableId={id} index={index}>
				{(provided) => (
					<li
						key={id}
						{...provided.draggableProps}
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						className="todo-item flex-between-center"
					>
						<div className="flex-between-center">
							<input
								type="checkbox"
								className="checkbox"
								name={title}
								onClick={() => this.taskDone(id)}
							/>
							{!isEditable && (
								<label
									htmlFor={title}
									className={`todo-item__label ${done ? '--is-disabled' : ''}`}
								>
									{title}
								</label>
							)}
							{isEditable && <input type="text" />}
						</div>
						<div className="flex-end">
							<ButtonSmall
								className="icon-pencil mr-1"
								onClick={() => this.taskEdit(id)}
							></ButtonSmall>
							<ButtonSmall
								className="icon-cross"
								onClick={() => this.taskDelete(id)}
							></ButtonSmall>
						</div>
					</li>
				)}
			</Draggable>
		)
	}
}

export default TodoItem
