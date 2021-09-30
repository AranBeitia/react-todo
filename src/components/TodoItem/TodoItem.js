import React from 'react'
import './TodoItem.scss'

class TodoItem extends React.Component {
	render() {
		const { item, handleDone } = this.props
		return (
			<li className="todo-item">
				<div className="todo-item">
					<input type="checkbox" className="checkbox" onClick={handleDone} />
					<label htmlFor="">{item}</label>
				</div>
				<button>&times;</button>
			</li>
		)
	}
}

export default TodoItem
