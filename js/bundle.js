/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);



	__webpack_require__(16);

	//init
	var model = __webpack_require__(17);
	var view = __webpack_require__(18);
	var controller = __webpack_require__(19);







/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html, body{\n\tpadding: 0;\n\tmargin: 0;\n\tfont-size:20px;\n\ttext-align:center;\t\n\tfont-family: merriweatherSans;\n\tbackground-color: #000500;\n\tpadding:0px;\n\tcolor:#9E1024;\n}\n\n#mocha{\n\tcolor:white;\n\ttext-shadow: none;\n\tfloat:right;\n}\n\n#mocha h1{\n\ttext-shadow: none;\n}\n\nh1{\n\tmargin:0px;\n\tpadding-top: 20px;\n\tpadding-bottom: 10px;\n\ttext-shadow: 2px 2px 1px #ffb029;\n}\n\n.header{\n    background: #405040; \n    background: -webkit-linear-gradient(#405040, #405240);\n    background: -o-linear-gradient(#405040, #405240); \n    background: -moz-linear-gradient(#405040, #405240); \n    background: linear-gradient(#405040, #405240); \n    border-bottom:2px solid #9E1024;\n}\n\nfieldset{\n\twidth:500px;\n\tmargin:0 auto;\n\tmargin-bottom:20px;\n\tborder:none;\n}\n\ntable{\n\tmargin: 0 auto;\n\tmargin-top: 30px;\n}\n\ntd{\n\theight:10px;\n\twidth:10px;\n\tborder-radius:5px;\n}\n\ntd.alive{\n\tbackground: green;\n}\n\ntd.dead{\n\tbackground: #D9D9D9;\n}\n\ninput[type=\"number\"]{\n\twidth:50px;\n\tfont-size: 20px;\t\n\tbackground-color:#ddd;\n\tcolor:#9E1024;\n}\n\ninput[type=\"checkbox\"]{\n\ttransform: scale(1.5);\n}\n\nlabel{\n\tfont-size: 27px;\n}\n\nbutton{\n\twidth:80px;\n\tfont-size:21px;\n\tpadding-bottom:3px;\n\tborder-radius: 3px;\n\tcolor:#9E1024;\n\tbackground-color:#aaaaaa;\n}\n\nbutton:hover{\n\tcursor:pointer;\n}\n\n#nextButton, #startButton{\n\tdisplay: none;\n}\n\ninput[type=\"range\"]{\n\twidth:50px;\n\tvertical-align: sub;\n\tdisplay: none;\n}\n\n@font-face {\n    font-family: merriweatherSans;\n    font-style: normal;\n    font-weight: normal;\n    src: local('merriweatherSans'),\n    \turl(" + __webpack_require__(4) + ") format('otf'),\n     \turl(" + __webpack_require__(5) + ") format('woff'),\n    \turl(" + __webpack_require__(6) + ") format('svg');\n}\n\n@font-face {\n    font-family: merriweatherSans;\n    font-style: normal;\n    font-weight: bold;\n    src: local('merriweatherSans'),\n    \turl(" + __webpack_require__(7) + ") format('otf'),\n    \turl(" + __webpack_require__(8) + ") format('ttf'),\n    \turl(" + __webpack_require__(9) + ") format('woff'),\n    \turl(" + __webpack_require__(10) + ") format('svg');\n}\n\n@font-face {\n    font-family: merriweatherSans;\n    font-style: normal;\n    font-weight: lighter;\n    src: local('merriweatherSans'),\n    \turl(" + __webpack_require__(11) + ") format('otf'),\n    \turl(" + __webpack_require__(12) + ") format('ttf'),\n    \turl(" + __webpack_require__(13) + ") format('woff'),\n    \turl(" + __webpack_require__(14) + ") format('svg');\n}\n\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9df744bdf9372cf4cff87bb3e2d68fc8.otf";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "39c0f275b5b0147d6bb313134276a769.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "60a620dfa3648fd7dff10b11691590b2.svg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dcbcd5920a5ef18caf00f8132215fed5.otf";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "501389f46f85b844df85c66c3aa929ff.ttf";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "25505f610f1f2e660a27d96cb0d5c898.woff";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "63f9eb1969c96cebdafd0723e0d02e19.svg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ab10f4470d743ae06b78137be951e957.otf";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d351b809b2bf4365ee00f89279f11f81.ttf";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1ee7d447473ef7b79844c4cfd8663dde.woff";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2048a33b9b11e647d43ece1128b9f30a.svg";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	var Cell = function(x, y){
	    this.x = x;
	    this.y = y;
	    this.status = 0;    
	    this.isAlive = function() {
	        if(this.status==1)
	            return 'alive';
	        else
	            return 'dead';
	    },
	    this.changeStatus = function(_status) {

	        if(_status=='alive' || _status==1 || _status==true){
	            this.status=1;
	        }            
	        else if(_status=='dead' || _status==0 || _status==false){
	            this.status=0;
	        }
	        else{
	            if(_status==0)
	                this.status=1;
	            else
	                this.status=0;
	        }
	    }  
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	var Model = function () {
	    var field = [];
	    var game = false;

	    var _notifyController = function () {    
	        $('body').trigger('updateView');
	    }
	    // public methods
	    return  {
	        createField: function ( sizeX, sizeY, randomFill ) {   
	            field = [];     
	            for( var i = 0; i < sizeX; i++ )
	            {
	                field.push([]);   
	                for( var j = 0; j < sizeY; j++ )
	                {
	                    field[i].push(new Cell(i, j));              
	                }             
	            }  
	            
	            if(randomFill===true){
	                for( var i = 0; i < sizeX; i++ )
	                { 
	                    for( var j = 0; j < sizeY; j++ )
	                    {
	                        var random = Math.floor((Math.random() * 100) + 1); 
	                        if(random > 80){
	                            field[i][j].changeStatus('alive');
	                        }
	                    }             
	                } 
	            }                    
	            _notifyController();
	        },

	        fieldState: function ( _field ) {   
	            field = _field;  
	            _notifyController();
	        },

	        cellStatus: function( cell ){ 
	            // При смене цвета точки таблица не перерисовывается
	            field[cell.x][cell.y].changeStatus(cell.status);
	        },
	        
	        getData: function(){           
	            return field;
	        },

	        gameStatus: function(){ 
	            if(game == true){
	                return true;
	            }    
	            else{
	                return false;
	            }    
	        },

	        gameStart: function(){ 
	            game = true; 
	        },

	        gameStop: function(){ 
	            game = false; 
	        },
	    };
	};






/***/ },
/* 18 */
/***/ function(module, exports) {

	var View = function () {
	    var _updateView = function ( field ) {
	        $('#field tr').remove();
	        var fragment = document.createDocumentFragment();
	        // In table create rows and then columns. In id write number of column and row.
	        for( var i = 0; i < field.length; i++ ){
	            var tr = document.createElement("tr"); 
	            tr.setAttribute('id', 'row_num' + i);
	            fragment.appendChild(tr);
	            for( var j = 0; j < field[0].length; j++ ){
	                var id = 'row' + field[i][j].x + '_col' + field[i][j].y;
	                var td = document.createElement("td"); 
	                td.setAttribute('id', id);
	                td.setAttribute('class', field[i][j].isAlive());
	                tr.appendChild(td);
	                fragment.appendChild(tr);
	            }
	        } 
	        $('#field').append(fragment);

	        // Hide cells on borders
	        $('#row_num0').css('display', 'none');
	        $('#row_num'+(field.length-1)).css('display', 'none');
	        for (var i = 0; i< field.length; i++) {
	            $('#row'+i+'_col0').css('display', 'none');  
	            $('#row'+i+'_col' + (field[0].length-1)).css('display', 'none'); 
	        }       
	    };
	               
	    return  {
	        updateView: function (field) {
	            _updateView(field);
	        }
	    };
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	var Controller = function (view, model) {
	    var _view = view;
	    var _model = model;
	    var tick = null; 

	    //set the handlers for the view
	    var _initView = function(){
	        // create field
	        $("#createButton").on("click", function(){
	            var $event = jQuery.Event("createField");
	            $event.sizeX = parseInt($('#sizeX')[0].value)+2;  
	            $event.sizeY = parseInt($('#sizeY')[0].value)+2;  
	            if($('#randomFill').is(':checked')){
	                $event.status = true;
	            }            
	            $('#nextButton, #startButton, #speed').css('display', 'inline');
	            $('body').trigger($event);          
	        });

	        // create field on enter
	        $('#createButton').on("keypress", function(e){
	            if(e.which == 13){
	                var $event = jQuery.Event("createField");
	                $event.sizeX = parseInt($('#sizeX')[0].value)+2;  
	                $event.sizeY = parseInt($('#sizeY')[0].value)+2;  
	                if($('#randomFill').is(':checked')){
	                    $event.status = true;
	                }    
	                $('#nextButton, #startButton, #speed').css('display', 'inline');
	                $('body').trigger($event);  
	            }
	        });

	        // change cell status
	        $('td').live("click", function(e){
	            var cell = e.currentTarget;
	            var $event = jQuery.Event("changeStatus");
	            $event.id = $(cell).prop('id');
	            $event.status = $(cell).prop('class');
	            $('body').trigger($event);
	        }); 

	        // next step
	        $('#nextButton').on("click", function(){
	            var $event = jQuery.Event("changeState");
	            $('body').trigger($event);
	        }); 

	        // start auto step
	        $('#startButton').on("click", function(){   
	            var $event = jQuery.Event("changeStateAuto");
	            var $sw = $('#startButton').html(); 
	            if(_model.gameStatus() === false){     
	                _model.gameStart();   
	                $('#startButton').html('stop'); 
	                $event.state = 'start'; 
	                $event.speed = $('#speed').val();
	            }
	            else{
	                 _model.gameStop();  
	                $('#startButton').html('start');
	                $event.state = 'stop';                
	            }  
	            $('body').trigger($event); 
	        }); 

	        // dynamic speed change
	        $('#speed').on("change", function(){   
	            var $event = jQuery.Event("changeStateAuto");
	            if(_model.gameStatus() === true){        
	                $event.state = 'stop'; 
	                $('body').trigger($event);
	                $event.state = 'start'; 
	                $event.speed = ($('#speed').val())*500;
	                $('body').trigger($event);
	            }
	        }); 
	    };
	    _initView();

	    // event binding
	    $('body').bind('createField', function(e) {             
	        _model.createField( e.sizeX, e.sizeY, e.status );
	    });

	    $('body').bind('changeState', function(e) {  
	        var newField = _countField( _model.getData()); 
	        _model.fieldState( newField );
	    });

	    $('body').bind('changeStateAuto', function(e) {  
	        var sw = $('#startButton').html(); 
	        if(e.state == 'start'){        
	            tick = setInterval(changeField, e.speed+00);                
	        }
	        else if(e.state = 'stop'){
	            clearInterval(tick);
	        }   

	        function changeField(){
	            var newField = _countField( _model.getData());  
	            _model.fieldState( newField );
	        } 
	    });

	    $('body').bind('changeStatus', function(e) {        
	        _model.cellStatus( _changeCellStatus (e) );
	    });

	    $('body').bind('updateView', function(e) {         
	        _view.updateView( _model.getData() );
	    });

	    function _changeCellStatus (e){
	        var splitId = e.id.split('_');
	        e.row = splitId[0].substring(3);
	        e.col = splitId[1].substring(3);
	        var cell = new Cell(e.row, e.col);
	        if(e.status == 'dead'){
	            cell.changeStatus('alive');
	            $('#' + e.id).prop('class', 'alive');
	        }
	        else{
	            cell.changeStatus('dead');
	            $('#' + e.id).prop('class', 'dead');
	        }
	        return cell;
	    }

	    function _countField (field){
	        var newField = [];   
	        var lenX = field.length;
	        var lenY = field[0].length;

	        for ( var i = 0; i < field.length; i++){
	            newField.push([]); 
	            for ( var j = 0; j < field[0].length; j++){
	                var counter = 0;
	                newField[i].push($.extend(true, [], field[i][j]));                

	                // Cells on borders are hidden and not counted
	                if(i != 0 && j != 0 && i != minus(lenX) && j != minus(lenY)){                
	                    counter = counter + field[i][plus(j)].status;
	                    counter = counter + field[i][minus(j)].status;
	                    counter = counter + field[minus(i)][j].status;
	                    counter = counter + field[plus(i)][j].status;
	                    counter = counter + field[plus(i)][minus(j)].status;
	                    counter = counter + field[plus(i)][plus(j)].status;
	                    counter = counter + field[minus(i)][plus(j)].status;
	                    counter = counter + field[minus(i)][minus(j)].status;  
	                }
	                if(field[i][j].isAlive() == 'alive'){
	                    if(counter < 2 || counter > 3){
	                        newField[i][j].changeStatus('dead');
	                    }
	                }
	                else{
	                    if(counter == 3){
	                        newField[i][j].changeStatus('alive');
	                    }  
	                }
	            }
	        }
	        return newField;
	    }

	    function plus(number){
	        var num = number;
	        num++;
	        return num;
	    }

	    function minus(number){
	        var num = number;
	        num--;
	        return num;
	    }

	    return  {
	        // public functions
	        changeCellStatusForTesting: function (e) {
	            return(_changeCellStatus(e));
	        },

	        countFieldForTesting: function (field) {
	            return(_countField(field));
	        }
	    };
	};






/***/ }
/******/ ]);