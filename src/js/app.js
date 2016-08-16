require("../css/style.css");
import Model from "./model.js";
import View from "./view.js";
import Controller from "./controller.js";

//init
var model = new Model();
var view = new View();
var controller  = new Controller(view, model);