import React, { Component } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { id, text, complete } = this.props

		const itemStyle = {
			textDecoration: complete ? "line-through": ""
		}
		return (
			<li className="list-group-item">
				<input
					type="checkbox"
					name={id}
					key={id}
				/>
				<label style={itemStyle} htmlFor={id}>{text}</label>
			</li>
		)
	}
}

export default TodoItem
