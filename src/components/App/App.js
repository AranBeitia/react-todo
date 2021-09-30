import React from 'react'
import './App.scss'

import Hero from '../Hero'
import TodoForm from '../TodoForm'
// import Input from '../Input'
import TodoList from '../TodoList'

const names = ['Aran', 'Kitty', 'Jane']
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			counter: 0,
			list: [],
		}
	}

	componentDidMount() {
		this.setState({ userName: names })
	}

	taskDone = (listItem) => {
		const newList = this.state.list.map((item) => {
			if (item.title === listItem.title) {
				return {
					title: item.title,
					description: item.description,
					priority: item.priority,
					done: !item.done,
				}
			} else {
				return item
			}
		})
		this.setState({ list: newList })
	}

	taskDelete = (listItem) => {
		this.setState({
			list: this.state.list.filter((item) => item.title !== listItem),
		})
	}

	randomName = () => {
		let count = this.state.counter + 1
		count = count % names.length
		this.setState({ counter: count })
	}

	addTask = (values) => {
		const newList = { ...values }
		this.setState({ list: [...this.state.list, newList] })
	}

	render() {
		const { counter, list } = this.state
		return (
			<div className="app">
				<Hero name={names[counter]} handleclick={this.randomName} />
				<TodoForm handleSubmit={this.addTask} />
				{/* <Input handleEnter={this.addTask} /> */}
				<TodoList
					taskList={list}
					deleteItem={this.taskDelete}
					done={this.taskDone}
				/>
			</div>
		)
	}
}

export default App
