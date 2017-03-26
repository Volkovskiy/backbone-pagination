import Backbone from 'backbone';
import Backgrid from 'backgrid';

import DeletableRow from './DeletableRow';
import columns from './columns';
import items from './Items';

const grid = new Backgrid.Grid({
	row: DeletableRow,
	columns: columns,
	collection: items,
});

export default grid;