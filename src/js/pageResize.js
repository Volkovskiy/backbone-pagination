import Backbone from 'backbone';
import Backgrid from 'backgrid';

import grid from './grid'

const PageResize = Backbone.View.extend({
	tagName: 'select',
	render: function () {
		this.collection.forEach( option => {
			this.$el.append(`<option>${option.value}</option>`)
		});
		return this
	},
	events: {
		"change": "setPageSize"
	},
	setPageSize: function (e) {
		grid.collection.state.pageSize = +e.currentTarget.value;
		grid.collection.reset();
		grid.collection.getPage(1);
	}
});

const values = [
	{
		value: 12
	},
	{
		value: 24,
	},
	{
		value: 50
	}
];

const pageResize = new PageResize({
	collection: values
});

export default pageResize;