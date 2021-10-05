import React from 'react'
import './Input.scss'
class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
		}
	}

	// handleChange = (e) => {
	// 	this.setState({ inputValue: e.target.value })
	// }

	// handleKeyDown = (e) => {
	// 	if (e.key === 'Enter') {
	// 		this.props.handleEnter(this.state.inputValue)
	// 		this.setState({ inputValue: '' })
	// 	}
	// }

	render() {
		const { title } = this.props
		return (
			<label className="input" htmlFor={title}>
				{/* <input
					className="input__field"
					type="text"
					placeholder=" "
					value={inputValue}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/> */}

				<input
					id={title}
					type="text"
					name={title}
					className="input__field"
					placeholder=" "
				/>
				<span className="input__label">{title}</span>
			</label>
		)
	}
}
export default Input
