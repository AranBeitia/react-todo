import React from 'react'
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
		const { id, title, done, isEditable } = this.props
		return (
			<li className="todo-item flex-between-center">
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
					<ButtonSmall onClick={() => this.taskEdit(id)}>&#9998;</ButtonSmall>
					<ButtonSmall onClick={() => this.taskDelete(id)}>&times;</ButtonSmall>
				</div>
			</li>
		)
	}
}

export default TodoItem
