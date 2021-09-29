import React from 'react'
import './App.scss'

import Hero from './components/Hero'
import Input from './components/Input'
import TodoList from './components/TodoList'

const names = ['Aran', 'Kitty', 'Jane']
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			counter: 0,
			list: [],
			name: '',
			completed: false,
		}
	}

	componentDidMount() {
		this.setState({ userName: names })
	}

	randomName = () => {
		let count = this.state.counter + 1
		count = count % names.length
		this.setState({ counter: count })
	}

	addTask = (value) => {
		this.setState({ list: [...this.state.list, value] })
		console.log(this.state.list)
	}

	render() {
		const { counter, list, name } = this.state
		return (
			<div className="app">
				<Hero name={names[counter]} handleclick={this.randomName} />
				<Input handleEnter={this.addTask} />
				<TodoList name={name} taskList={list} />
			</div>
		)
	}
}

export default App
