import React from 'react'
import HeroComponent from './Hero.styled'
import { ButtonOutlined } from '../Button/Button.style'

class Hero extends React.Component {
	render() {
		const { name, theme, handleclick, handleTheme } = this.props
		return (
			<HeroComponent
				className={`bg-img ${
					theme === 'dark' ? 'bg-img__dark' : 'bg-img__light'
				}`}
			>
				<header className="header-center">
					<span
						className="icon-brightness-contrast icon-theme"
						onClick={handleTheme}
					></span>
					<h1>
						What's up, <span className="text-highlight">{name}</span>!
					</h1>
					<ButtonOutlined type="button" onClick={handleclick}>
						Random name
					</ButtonOutlined>
				</header>
			</HeroComponent>
		)
	}
}

export default Hero
