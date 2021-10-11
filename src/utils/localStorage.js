export function readLocalStorage(key) {
	const json = localStorage.getItem(key)
	const data = JSON.parse(json)

	if (key === 'todo-app' && !data) {
		return {
			theme: 'dark',
		}
	}
	return data
}

export function writeLocalStorage(key, value) {
	localStorage.setItem(key, value)
}
