import React from 'react'
import './TodoItem.scss'

class TodoItem extends React.Component {
	handleDone = () => {
		this.props.hecho(this.props)
	}

	render() {
		const { title } = this.props
		return (
			<li className="todo-item">
				<div className="todo-item">
					<input
						type="checkbox"
						className="checkbox"
						onClick={this.handleDone}
					/>
					<label htmlFor="">{title}</label>
				</div>
				<button>&times;</button>
			</li>
		)
	}
}

export default TodoItem
