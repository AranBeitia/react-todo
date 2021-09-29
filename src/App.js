import React from 'react'
import './App.scss'

import Hero from './components/Hero'

const name = 'Aran'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
		}
	}

	componentDidMount() {
		this.setState({ userName: name })
	}

	render() {
		const { userName } = this.state
		return (
			<div className="app">
				<Hero name={userName} />
			</div>
		)
	}
}

export default App
