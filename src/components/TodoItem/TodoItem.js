import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import TodoItemStyle from './TodoItem.style'
import { Input } from '../Input/Input.style'
import { ButtonSmall } from '../Button/Button.style'
class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: this.props.title,
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

	handleChange = (e) => {
		this.setState({ inputValue: e.target.value })
	}

	handleUpdate = (e) => {
		const { id } = this.props
		if (e.key === 'Enter') {
			this.props.handleSubmite(this.state.inputValue, id)
		}
	}

	renderDefaultView = () => {
		const { title, done } = this.props
		return (
			<label htmlFor={title} className={`label ${done ? '--is-disabled' : ''}`}>
				{this.props.title}
			</label>
		)
	}

	renderEditView = () => {
		const { title } = this.props
		return (
			<Input
				type="text"
				name={title}
				value={this.state.inputValue}
				onChange={this.handleChange}
				onKeyDown={this.handleUpdate}
			/>
		)
	}

	render() {
		const { id, title, isEditable, index } = this.props
		return (
			<Draggable key={id} draggableId={id} index={index}>
				{(provided) => (
					<TodoItemStyle
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
					</TodoItemStyle>
				)}
			</Draggable>
		)
	}
}

export default TodoItem
