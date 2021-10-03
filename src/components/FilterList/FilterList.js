import React from 'react'
import { Filter, FilterItem } from './Filter.style'

class FilterList extends React.Component {
	render() {
		const { taskList } = this.props
		return (
			<Filter>
				<span>{taskList.length} items left</span>
				<ul className="flex">
					<FilterItem>All</FilterItem>
					<FilterItem>Actived</FilterItem>
					<FilterItem>Completed</FilterItem>
				</ul>
				<span>Clear completed</span>
			</Filter>
		)
	}
}

export default FilterList
