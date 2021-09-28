import React, { Component } from 'react'

import { Button } from '../Button/Button.style'

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			completed: false,
		}
	}

	toggleCompleted = (id) => {
		if (id === this.props.id) {
			this.setState({ completed: !this.state.completed })
			console.log(id)
		}
	}

	onDelete = (id) => {
		console.log(id)
	}

	render() {
		const { id, text } = this.props

		return (
			<li
				className="list-group-item d-flex justify-content-between align-items-center"
				key={id}
			>
				<div className="d-flex align-items-center">
					<input
						className="checkbox"
						type="checkbox"
						name={id}
						onClick={() => this.toggleCompleted(id)}
					/>
					<label
						className={`ml-2 mb-0 ${this.state.completed ? 'is-disabled' : ''}`}
						contentEditable="true"
						htmlFor={id}
					>
						{text}
					</label>
				</div>
				<Button onClick={() => this.onDelete(id)}>&times;</Button>
			</li>
		)
	}
}

export default TodoItem
