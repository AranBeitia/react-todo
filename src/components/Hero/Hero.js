import React from 'react'
import './Hero.scss'
import { Button } from '../Button/Button.style'

class Hero extends React.Component {
	render() {
		const { name, handleclick, handleTheme } = this.props
		return (
			<header className="header-center">
				<span
					className="icon-brightness-contrast icon-theme"
					onClick={handleTheme}
				></span>
				<h1>
					What's up, <span className="text-highlight">{name}</span>!
				</h1>
				<Button type="button" onClick={handleclick}>
					Random name
				</Button>
			</header>
		)
	}
}

export default Hero
