import React from 'react'

import FilterItemList from './FilterItem.style'

class FilterItem extends React.Component {
	filterTasks = (filterName) => {
		this.props.handleFilter(filterName)
	}
	render() {
		const { name } = this.props
		return (
			<FilterItemList onClick={() => this.filterTasks(name)}>
				{name}
			</FilterItemList>
		)
	}
}

export default FilterItem
