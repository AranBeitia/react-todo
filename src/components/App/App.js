import React from 'react'
import { v4 as uuid } from 'uuid'
import loadLocalStorage from '../../utils/localStorage'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../Theme/Global.styles'
import { lightTheme, darkTheme } from '../Theme/Theme'

import AppComponent from './App.styles'
import Hero from '../Hero'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
const LOCALSTORAGE_KEY = 'todo-list'
const names = ['Aran', 'Kitty', 'Jane']
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			counter: 0,
			theme: 'dark',
			showItems: 'all',
			list: [],
		}
	}

	componentDidMount() {
		this.setState({ userName: names })
	}

	componentDidUpdate() {
		const { theme } = this.state
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ theme }))
	}

	toggleTheme = () => {
		const themeStoraged = loadLocalStorage()
		console.log(themeStoraged)
		if (themeStoraged.theme === 'dark') this.setState({ theme: 'light' })
		if (themeStoraged.theme === 'light') this.setState({ theme: 'dark' })
	}

	randomName = () => {
		let count = this.state.counter + 1
		count = count % names.length
		this.setState({ counter: count })
	}

	saveOrderTasks = (taskList, startIndex, endIndex) => {
		const result = [...taskList]
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)
		this.setState((prevState) => ({
			...prevState,
			list: result,
		}))
	}

	handleFilter = (filterName) => {
		this.setState({ showItems: filterName })
	}

	clearCompleted = () => {
		this.setState({ list: this.state.list.filter((item) => !item.done) })
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

	editTextItem = (itemTitle, itemId) => {
		const newList = this.state.list.map((item) => {
			if (item.id === itemId) {
				return {
					...item,
					id: itemId,
					title: itemTitle,
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
		const { counter, theme } = this.state
		const themeMode = theme === 'light' ? lightTheme : darkTheme
		let { list, showItems } = this.state

		if (showItems === 'all') {
			list = this.state.list
		} else if (showItems === 'actived') {
			list = list.filter((item) => !item.done)
		} else if (showItems === 'completed') {
			list = list.filter((item) => item.done)
		}

		return (
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<AppComponent className={list.length === 0 ? 'bg-img' : ''}>
					<Hero
						name={names[counter]}
						theme={theme}
						handleclick={this.randomName}
						handleTheme={this.toggleTheme}
					/>
					<main className="main-wrapper">
						<TodoForm handleSubmit={this.addTask} />
						<TodoList
							taskList={list}
							deleteItem={this.taskDelete}
							editItem={this.taskEdit}
							done={this.taskDone}
							saveOrderTasks={this.saveOrderTasks}
							clearCompleted={this.clearCompleted}
							handleFilter={this.handleFilter}
							handleSubmite={this.editTextItem}
						/>
					</main>
				</AppComponent>
			</ThemeProvider>
		)
	}
}

export default App
