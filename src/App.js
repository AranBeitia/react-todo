import React from 'react'
import './App.scss'

import Hero from './components/Hero'

const names = ['Aran', 'Kitty', 'Jane']
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			counter: 0,
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

	render() {
		const { counter } = this.state
		return (
			<div className="app">
				<Hero name={names[counter]} handleclick={this.randomName} />
			</div>
		)
	}
}

export default App
