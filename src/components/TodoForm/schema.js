import * as yup from 'yup'

export const TodoItemSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().min(5).ensure(),
	priority: yup.number().min(0).max(2).default(0),
})
