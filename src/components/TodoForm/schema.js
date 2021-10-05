import * as yup from 'yup'

export const TodoItemSchema = yup.object().shape({
	title: yup
		.string()
		.required('Required field')
		.min(3, 'Length min of 3 characters')
		.max(15, 'Max length of 15 caracters'),
})
