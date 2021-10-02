import React from 'react'
import './Hero.scss'
import { Button, ButtonIcon } from '../Button/Button.style'
class Hero extends React.Component {
	// toggleTheme = () => {
	// 	console.log('theme')
	// }
	render() {
		const { name, handleclick, handleTheme, theme } = this.props
		const icon = theme === 'light' ? '&#9788;' : '&#9790;'
		return (
			<header className="header-center">
				<ButtonIcon onClick={handleTheme}>{icon}</ButtonIcon>
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
