import React from 'react'

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
		}
	}

	handleChange = (e) => {
		this.setState({ inputValue: e.target.value })
		console.log(this.state.inputValue)
	}

	handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			this.props.handleEnter(this.state.inputValue)
			this.setState({ inputValue: '' })
		}
	}

	render() {
		const { inputValue } = this.state
		return (
			<input
				type="text"
				placeholder="insert task here"
				value={inputValue}
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
			/>
		)
	}
}
export default Input
