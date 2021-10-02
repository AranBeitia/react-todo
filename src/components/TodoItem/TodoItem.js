import React from 'react'
import './TodoItem.scss'

import { ButtonIcon } from '../Button/Button.style'
class TodoItem extends React.Component {
	taskDone = (id) => {
		this.props.handleDone(id)
	}

	taskDelete = (id) => {
		this.props.handleDelete(id)
	}

	render() {
		const { title, done, id } = this.props
		return (
			<li className="todo-item flex-between-center">
				<div className="flex-between-center">
					<input
						type="checkbox"
						className="checkbox"
						name={title}
						onClick={() => this.taskDone(id)}
					/>
					<label
						htmlFor={title}
						className={`todo-item__label ${done ? '--is-disabled' : ''}`}
					>
						{title}
					</label>
				</div>
				<ButtonIcon onClick={() => this.taskDelete(id)}>&times;</ButtonIcon>
			</li>
		)
	}
}

export default TodoItem
