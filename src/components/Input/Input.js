import React from 'react'
import InputStyle from './Input.style'

const Input = ({ field, form, ...props }) => {
	return <InputStyle {...field} {...props} />
}

export default Input
