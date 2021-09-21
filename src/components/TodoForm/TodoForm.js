import React, { Component } from 'react'
import shortid from 'shortid'
class TodoForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}

  handleSubmit = (e) => {
    e.preventDefault()
		this.props.onSubmit({
			id: shortid.generate(),
			text: this.state.text,
			complete: false
		})

		this.setState({ text: "" })
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

	render() {
		const { text } = this.state
		return (
			<form className="card-body" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="insert a todo"
					value={text}
					name="text"
          className="todo-input"
          onChange={this.handleChange}
				/>
			</form>
		)
	}
}

export default TodoForm
