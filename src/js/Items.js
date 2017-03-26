import Backbone from 'backbone'
import Paginator from 'backgrid-paginator'

const Items = Backbone.PageableCollection.extend({
	mode: 'client',
	url:  "../json/items.json",
	state: {
		firstPage: 1,
		currentPage: 0,
		pageSize: 12
	},
	pageSizeValues: [12, 24, 48]
});

const items = new Items();

export default items;