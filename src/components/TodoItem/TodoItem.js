import React from 'react'
import './TodoItem.scss'

import { ButtonIcon } from '../Button/Button.style'
class TodoItem extends React.Component {
	taskDone = () => {
		this.props.handleDone(this.props)
	}

	taskDelete = (title) => {
		this.props.handleDelete(title)
	}

	render() {
		const { title, done } = this.props
		return (
			<li className="todo-item">
				<div className="todo-item">
					<input
						type="checkbox"
						className="checkbox"
						name={title}
						onClick={this.taskDone}
					/>
					<label htmlFor={title} className={`${done ? '--is-disabled' : ''}`}>
						{title}
					</label>
				</div>
				<ButtonIcon onClick={() => this.taskDelete(title)}>&times;</ButtonIcon>
			</li>
		)
	}
}

export default TodoItem
