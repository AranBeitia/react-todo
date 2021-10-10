const LOCALSTORAGE_KEY = 'todo-list'

export function loadLocalStorage() {
	const prevItems = localStorage.getItem(LOCALSTORAGE_KEY)

	if (!prevItems) return null

	try {
		return JSON.parse(prevItems)
	} catch (error) {
		return null
	}
}

export default loadLocalStorage
