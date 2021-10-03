import React from 'react'
import { Filter, FilterLink } from './Filter.style'
import FilterItem from './FilterItem'
class FilterList extends React.Component {
	render() {
		const { taskList, clearCompleted, handleFilter } = this.props
		return (
			<Filter>
				<span>{taskList.length} items left</span>
				<ul className="flex">
					<FilterItem name="all" handleFilter={handleFilter} />
					<FilterItem name="actived" handleFilter={handleFilter} />
					<FilterItem name="completed" handleFilter={handleFilter} />
				</ul>
				<FilterLink onClick={clearCompleted}>Clear completed</FilterLink>
			</Filter>
		)
	}
}

export default FilterList
