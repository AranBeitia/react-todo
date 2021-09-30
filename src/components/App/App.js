import React from 'react'
import './App.scss'

import Hero from '../Hero'
import Input from '../Input'
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

	randomName = () => {
		let count = this.state.counter + 1
		count = count % names.length
		this.setState({ counter: count })
	}

	addTask = (value) => {
		this.setState({
			list: [
				...this.state.list,
				{
					text: value,
					done: false,
					edited: false,
				},
			],
		})
	}

	doneTask = (taskId) => {
		console.log(taskId)
		// this.setState(this.state.list.map(item => {
		// 	if(item.id === taskId) {
		// 		done: !item.done,
		// 		isEdited: false
		// 	}
		// }))
	}

	render() {
		const { counter, list, text } = this.state
		return (
			<div className="app">
				<Hero name={names[counter]} handleclick={this.randomName} />
				<Input handleEnter={this.addTask} />
				<TodoList taskList={list} text={text} />
			</div>
		)
	}
}

export default App
