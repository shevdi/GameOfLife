/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Controller = function (view, model) {

    var _view = view;
    var _model = model;
    var tick = null; 

    //set the handlers for the view
    var initView = function(){
        // create field
        $("#createButton").on("click", function(){
            var $event = jQuery.Event("createField");
            $event.sizeX = parseInt($('#sizeX')[0].value)+2;  
            $event.sizeY = parseInt($('#sizeY')[0].value)+2;  
            $('#nextButton, #startButton, #speed').css('display', 'inline');
            $('body').trigger($event);          
        });

        // create field on enter
        $('#createButton').on("keypress", function(e){
            if(e.which == 13){
                var $event = jQuery.Event("createField");
                $event.sizeX = parseInt($('#sizeX')[0].value)+2;  
                $event.sizeY = parseInt($('#sizeY')[0].value)+2;      
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
    initView();

    // event binding
    $('body').bind('createField', function(e) {             
        _model.createField( e.sizeX, e.sizeY );
    });

    $('body').bind('changeState', function(e) {  
        var newField = countField( _model.getData());  
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
            var newField = countField( _model.getData());  
            _model.fieldState( newField );
        } 
    });

    $('body').bind('changeStatus', function(e) {        
        _model.cellStatus( changeCellStatus (e) );
    });

    $('body').bind('updateView', function(e) {         
        _view.updateView( _model.getData() );
    });

    function changeCellStatus (e){
        var splitId = e.id.split('_');
        e.row = splitId[0].substring(3);
        e.col = splitId[1].substring(3);
        var cell = new Cell(e.row, e.col);
        if(e.status == 'dead'){
            cell.status = 1;
            $('#' + e.id).prop('class', 'alive');
        }
        else{
            cell.status = 0;
            $('#' + e.id).prop('class', 'dead');
        }
        return cell;
    }

    function countField (field){
        var newField = JSON.parse(JSON.stringify( field ));  
        // var newField = $.extend( true, [], field);   
        // console.log(newField);   
        // console.log(newField2);  
        var lenX = field.length;
        lenX = --lenX;
        var lenY = field[0].length;
        lenY = --lenY;
        for ( var i = 0; i < field.length; i++){
            for ( var j = 0; j < field[0].length; j++){

                var counter = 0;
                console.log('x: ' + newField[i][j].x + ' y: ' + newField[i][j].y +' status: ' + newField[i][j].status);
                var iPlus = i;
                iPlus = ++iPlus;
                var iMinus = i;
                iMinus = --iMinus;
                var jPlus = j;
                jPlus = ++jPlus;
                var jMinus = j;
                jMinus = --jMinus;

                if(i == 0 || j == 0 || i == lenX || j == lenY){
                }

                else{
                    counter = counter + field[i][jPlus].status;
                    counter = counter + field[i][jMinus].status;
                    counter = counter + field[iMinus][j].status;
                    counter = counter + field[iPlus][j].status;
                    counter = counter + field[iPlus][jMinus].status;
                    counter = counter + field[iPlus][jPlus].status;
                    counter = counter + field[iMinus][jPlus].status;
                    counter = counter + field[iMinus][jMinus].status;                           
                }
                if(field[i][j].status==1){
                    if(counter < 2 || counter > 3){
                        newField[i][j].status=0;
                    }
                }
                else{
                    if(counter == 3){
                        newField[i][j].status=1;
                    }  
                }
            }
        }

        return newField;
    }

	return  {
        // public functions
        changeCellStatusForTesting: function (e) {
            return(changeCellStatus(e));
        },

        countFieldForTesting: function (field) {
            return(countField(field));
        }
	};
};





