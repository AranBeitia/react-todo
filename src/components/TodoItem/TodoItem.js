import React, { Component } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		// const { id, text } = this.props
		return (
      <div onClick={this.props.toggleComplete}></div>
			// <li className="list-group-item">
			// 	<input
			// 		type="checkbox"
			// 		name={item.id}
			// 		key={item.id}
			// 		onClick={this.props.toggleComplete}
			// 	/>
			// 	<label htmlFor={item.id}>{item.text}</label>
			// </li>
		)
	}
}

export default TodoItem
