import Cell from "./cell.js";
import Model from "./model.js";
import View from "./view.js";

export function Controller(view, model) {
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
        $('table').on("click", 'td', function(e){
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
            tick = setInterval(changeField, Number(e.speed)*100);                
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
        var cell = Cell.create(e.row, e.col);
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

