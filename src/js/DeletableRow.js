import Backgrid from 'backgrid';

const DeletableRow = Backgrid.Row.extend({
	events: {
		click: "deleteRow"
	},
	deleteRow: function () {
		this.remove();
	}
});

export default DeletableRow;