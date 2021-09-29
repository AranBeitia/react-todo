import React from 'react'
import './TodoItem.scss'

class TodoItem extends React.Component {
	render() {
		const { todoItem } = this.props
		return <li>{todoItem}</li>
	}
}

export default TodoItem
