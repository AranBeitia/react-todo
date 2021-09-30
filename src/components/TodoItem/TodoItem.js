<<<<<<< HEAD
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
=======
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
>>>>>>> main
			</li>
		)
	}
}

export default TodoItem
