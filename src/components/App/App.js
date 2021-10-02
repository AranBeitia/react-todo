import React from 'react'
import { v4 as uuid } from 'uuid'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../Theme/Global.styles'
import { lightTheme, darkTheme } from '../Theme/Theme'

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
			theme: 'dark',
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

	taskDone = (itemId) => {
		const newList = this.state.list.map((item) => {
			if (item.id === itemId) {
				return {
					...item,
					done: !item.done,
				}
			} else {
				return item
			}
		})
		console.log(newList)
		this.setState({ list: newList })
	}

	taskDelete = (itemId) => {
		this.setState({
			list: this.state.list.filter((item) => item.id !== itemId),
		})
	}

	taskEdit = (itemId) => {
		const newList = this.state.list.map((item) => {
			if (item.id === itemId) {
				return {
					...item,
					isEditable: !item.isEditable,
				}
			} else {
				return item
			}
		})
		this.setState({ list: newList })
	}

	addTask = (values) => {
		const newList = { ...values, id: uuid() }
		this.setState({ list: [...this.state.list, newList] })
	}

	render() {
		const { counter, list, theme } = this.state
		const themeMode = theme === 'light' ? lightTheme : darkTheme

		return (
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<div className="app">
					<Hero name={names[counter]} handleclick={this.randomName} />
					<TodoForm handleSubmit={this.addTask} />
					{/* <Input handleEnter={this.addTask} /> */}
					<TodoList
						taskList={list}
						deleteItem={this.taskDelete}
						editItem={this.taskEdit}
						done={this.taskDone}
					/>
				</div>
			</ThemeProvider>
		)
	}
}

export default App
