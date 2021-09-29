import React from 'react'

class TodoList extends React.Component {
	render() {
		const { taskList } = this.props
		return (
			<ul>
				{taskList.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		)
	}
}

export default TodoList
