/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Controller = function (view, model) {

    var _view = view;
    var _model = model;
    var tick = null; 

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
        _model.dotStatus( changeDotStatus (e) );
    });

    $('body').bind('updateView', function(e) {         
        _view.updateView( _model.getData() );
    });

    function changeDotStatus (e){
        var splitId = e.id.split('_');
        e.row = splitId[0].substring(3);
        e.col = splitId[1].substring(3);
        var dot = new Dot(e.row, e.col);
        if(e.status == 'dead'){
            dot.status = 1;
            $('#' + e.id).prop('class', 'alive');
        }
        else{
            dot.status = 0;
            $('#' + e.id).prop('class', 'dead');
        }
        return dot;
    }

    function countField (field){
        var newField = JSON.parse(JSON.stringify( field ));        
        var lenX = field.length;
        lenX = --lenX;
        var lenY = field[0].length;
        lenY = --lenY;
        for ( var i = 0; i < field.length; i++){
            for ( var j = 0; j < field[0].length; j++){
                var counter = 0;

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
        changeDotStatusForTesting: function (e) {
            return(changeDotStatus(e));
        },

        countFieldForTesting: function (field) {
            return(countField(field));
        }
	};
};





