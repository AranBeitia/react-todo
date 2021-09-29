import React from 'react'

class Hero extends React.Component {
	render() {
		const { name } = this.props
		return (
			<header>
				<h1>What's up, {name}!</h1>
			</header>
		)
	}
}

export default Hero
