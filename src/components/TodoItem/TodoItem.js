import React from 'react'
import './TodoItem.scss'

class TodoItem extends React.Component {
	render() {
		const { todoItem, name } = this.props
		return (
			<li>
				<input type="checkbox" className="checkbox" name={name} />
				{todoItem}
			</li>
		)
	}
}

export default TodoItem
