import React from 'react'
import { TodoItemSchema } from './schema'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { v4 as uuid } from 'uuid'

import '../Input/Input.scss'
import './TodoForm.scss'

import Button from '../Button'

const initValues = {
	id: uuid(),
	title: '',
	description: '',
	priority: 0,
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
					<Form>
						<div className="form-group">
							<label className="input" htmlFor="title">
								<Field
									id="title"
									type="text"
									name="title"
									className="input__field"
								/>
								<span className="input__label">Title</span>
							</label>
							<ErrorMessage name="title" component="p" />
						</div>
						<div className="form-group">
							<label className="input" htmlFor="description">
								<Field
									id="description"
									type="text"
									name="description"
									className="input__field"
								/>
								<span className="input__label">Description</span>
							</label>
							<ErrorMessage name="description" component="p" />
						</div>
						<div className="form-group">
							<label className="input" htmlFor="priority">
								<Field
									id="priority"
									type="number"
									name="priority"
									className="input__field"
								/>
								<span className="input__label">Priority</span>
							</label>
							<ErrorMessage name="priority" component="p" />
						</div>
						<div className="form-group">
							<Button type="submit">Add task</Button>
						</div>
					</Form>
				)}
			</Formik>
		)
	}
}

export default TodoForm
