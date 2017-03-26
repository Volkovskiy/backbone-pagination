// libraries
import $ from 'jquery';
import Backbone from 'backbone';
import Backgrid from 'backgrid';

//import modules
import items from './Items';
import pageResize from './pageResize';
import grid from './grid';



const paginator = new Backgrid.Extension.Paginator({collection: items});

items.fetch();



$("#grid").append(grid.render().$el);
$("#paginator").append(paginator.render().$el);
$("#pageResizer").append(pageResize.render().el);

