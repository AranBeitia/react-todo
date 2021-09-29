import React from 'react'

class Hero extends React.Component {
	render() {
		const { name, handleclick } = this.props
		return (
			<header>
				<h1>What's up, {name}!</h1>
				<button type="button" onClick={handleclick}>
					Random name
				</button>
			</header>
		)
	}
}

export default Hero
