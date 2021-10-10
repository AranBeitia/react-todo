import React from 'react'
import { TodoItemSchema } from './schema'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import './TodoForm.scss'

import Button from '../Button'
import '../Input/Input.scss'

const initValues = {
	id: '',
	title: '',
	isEditable: false,
	done: false,
}
const InputStyled = styled.input`
	box-sizing: border-box;
	display: block;
	width: 100%;
	border: 0;
	border-bottom: 2px solid ${({ theme }) => theme.text};
	padding: calc(0.5rem * 1.5) 0.5rem;
	color: ${({ theme }) => theme.text};
	background: transparent;

	&:focus,
	&:not(:placeholder-shown) {
		& + .input__label {
			transform: translate(0, -80%) scale(0.8);
			color: #7d80aa;
		}
	}
`

const Input = ({ field, form, ...props }) => {
	return <InputStyled {...field} {...props} />
}
class TodoForm extends React.Component {
	render() {
		const { handleSubmit } = this.props
		return (
			<Formik
				initialValues={initValues}
				validationSchema={TodoItemSchema}
				onSubmit={handleSubmit}
			>
				{({ values, errors, handleSubmit, isSubmitting }) => (
					<Form className="form">
						<h2>ToDo tasks</h2>
						<div className="flex-between-center">
							<div className="form__group">
								<label className="input" htmlFor="title">
									<Field
										id="title"
										type="text"
										name="title"
										placeholder=" "
										component={Input}
									/>
									<span className="input__label">Title</span>
								</label>
								<ErrorMessage
									name="title"
									component="p"
									className="form__error"
								/>
							</div>
							<div className="form__group">
								<Button type="submit">Add task</Button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		)
	}
}

export default TodoForm
