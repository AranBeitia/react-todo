import React, { Component } from 'react'
import TodoForm from '../TodoForm'
// import TodoItem from '../TodoItem'
// import Todo from '../Todo'
class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
			todoToShow: 'all', // default state
		}
	}

	addTodo = (todo) => {
		const newTodo = [todo, ...this.state.todos] // empieza con el array todo, y hace un push
		this.setState({ todos: newTodo })
	}

	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((item) => {
				if (item.id === id) {
					return {
						...item,
						complete: !item.complete,
					}
				} else {
					return item
				}
			}),
		})
	}

	clearCompleted = () => {
		this.setState({ todos: this.state.todos.filter((item) => !item.complete) })
	}

	todoToShow(string) {
		this.setState({
			todoToShow: string,
		})
	}

	render() {
		let { todos, todoToShow } = this.state
		if (todoToShow === 'all') {
			todos = todos
		} else if (todoToShow === 'active') {
			todos = todos.filter((item) => !item.complete)
		} else if (todoToShow === 'complete') {
			todos = todos.filter((item) => item.complete)
		}

		return (
			<>
				<TodoForm onSubmit={this.addTodo} />
				<ul className="list-group list-group-flush">
					{todos.map((item) => (
						<li className="list-group-item" key={item.id}>
							<input
								type="checkbox"
								name={item.id}
								onClick={() => this.toggleComplete(item.id)}
							/>
							<label
								style={{ textDecoration: item.complete ? 'line-through' : '' }}
								htmlFor={item.id}
								contentEditable="true"
							>
								{item.text}
							</label>
						</li>
					))}
				</ul>
				<footer className="card-footer text-muted d-flex justify-content-between align-items-center">
					<span className="text-tag">
						{todos.filter((item) => !item.complete).length} items left
					</span>
					<div className="d-flex">
						<button onClick={() => this.todoToShow('all')} className="text-tag">
							All
						</button>
						<button
							onClick={() => this.todoToShow('active')}
							className="text-tag px-2"
						>
							Active
						</button>
						<button
							onClick={() => this.todoToShow('complete')}
							className="text-tag"
						>
							Completed
						</button>
					</div>
					<button onClick={this.clearCompleted} className="text-tag">
						Clear Completed
					</button>
				</footer>
			</>
		)
	}
}

export default TodoList
