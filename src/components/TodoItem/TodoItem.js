import React from 'react'
import './TodoItem.scss'

class TodoItem extends React.Component {
	render() {
		const { completed, item } = this.props
		return (
			<li>
				<input type="checkbox" className="checkbox" completed={completed} />
				{item}
			</li>
		)
	}
}

export default TodoItem
