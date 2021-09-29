import React from 'react'
import './Input.scss'
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
			<label className="input">
				<input
					className="input__field"
					type="text"
					placeholder=" "
					value={inputValue}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
				<span className="input__label">New task</span>
			</label>
		)
	}
}
export default Input
