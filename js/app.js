require("../css/style.css");
require("./controller.js");
require("./view.js");
require("./model.js");
require("./cell.js");

//init
var model = Model();
var view = View();
var controller = Controller(view, model);





