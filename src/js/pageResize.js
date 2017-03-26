import Backbone from 'backbone';
import Backgrid from 'backgrid';
import items from './Items';

import grid from './grid'

const PageResize = Backbone.View.extend({
	tagName: 'select',
	className: 'ps-select',
	render: function () {
		this.collection.forEach( option => {
			this.$el.append(`<option>${option} per page</option>`)
		});
		return this
	},
	events: {
		"change": "setPageSize"
	},
	setPageSize: function (e) {
		grid.collection.state.pageSize = parseInt(e.currentTarget.value);
		grid.collection.reset();
		grid.collection.getPage(1);
	}
});


const pageResize = new PageResize({
	collection: items.pageSizeValues
});

export default pageResize;