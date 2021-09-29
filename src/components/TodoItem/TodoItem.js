import React from 'react'
import './TodoItem.scss'

class TodoItem extends React.Component {
	render() {
		const { completed, text } = this.props
		return (
			<li>
				<input
					type="checkbox"
					className="checkbox"
					name={text}
					completed={completed}
				/>
				{text}
			</li>
		)
	}
}

export default TodoItem
