import React from 'react'
import { TodoItemSchema } from './schema'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import '../Input/Input.scss'
import './TodoForm.scss'

import Button from '../Button'

const initValues = {
	id: '',
	title: '',
	isEditable: false,
	done: false,
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
						<div className="flex">
							<div className="form__group">
								<label className="input" htmlFor="title">
									<Field
										id="title"
										type="text"
										name="title"
										className="input__field"
										placeholder=" "
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
