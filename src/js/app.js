/* eslint-disable */
require("../css/style.css");
import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

var model = Model();
var view = View();
var controller = Controller(view, model);
