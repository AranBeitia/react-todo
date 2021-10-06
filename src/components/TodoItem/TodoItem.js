import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './TodoItem.scss'
import '../Input/Input.scss'

import { ButtonSmall } from '../Button/Button.style'
class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
		}
	}

	taskDone = (id) => {
		this.props.handleDone(id)
	}

	taskDelete = (id) => {
		this.props.handleDelete(id)
	}

	taskEdit = (id) => {
		this.props.handleEdit(id)
	}

	// handleKeyDown = (e) => {
	// 	if (e.key === 'Enter') {
	// 		console.log(e)
	// 		this.setState({ inputValue: '' })
	// 	}
	// }

	handleSubmit = (e) => {
		e.preventDefault()
	}

	handleChange = (e) => {
		this.setState({ inputValue: e.target.value })
	}

	renderDefaultView = () => {
		const { title, done } = this.props
		return (
			<label
				htmlFor={title}
				className={`todo-item__label ${done ? '--is-disabled' : ''}`}
			>
				{this.props.title}
			</label>
		)
	}

	renderEditView = () => {
		const { title } = this.props
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name={title}
					className="input__field"
					defaultValue={this.state.inputValue}
					onChange={this.handleChange}
				/>
			</form>
		)
	}

	render() {
		const { id, title, isEditable, index } = this.props
		// const { editInput } = this.state
		return (
			<Draggable key={id} draggableId={id} index={index}>
				{(provided) => (
					<li
						key={id}
						{...provided.draggableProps}
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						className="todo-item flex-between-center"
					>
						<div className="flex-between-center">
							<input
								type="checkbox"
								className="checkbox"
								name={title}
								onClick={() => this.taskDone(id)}
							/>
							{isEditable ? this.renderEditView() : this.renderDefaultView()}
						</div>
						<div className="flex-end">
							<ButtonSmall
								className="icon-pencil mr-1"
								onClick={() => this.taskEdit(id)}
							></ButtonSmall>
							<ButtonSmall
								className="icon-cross"
								onClick={() => this.taskDelete(id)}
							></ButtonSmall>
						</div>
					</li>
				)}
			</Draggable>
		)
	}
}

export default TodoItem
