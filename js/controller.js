/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Controller = function (view, model) {

    var _view = view;
    var _model = model;
    
    // event binding
    $('body').bind('createField', function(e) {             
        _model.createField( e.size );
    });

    $('body').bind('changeState', function(e) { 
        var newField = countField( _model.getData());  
        _model.fieldState( newField );
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
            $('#' + e.id).attr('class', 'alive');
        }
        else{
            dot.status = 0;
            $('#' + e.id).attr('class', 'dead');
        }
        return dot;
    }

    function countField (field){
        var newField = JSON.parse(JSON.stringify( field ));
        
        var len = field.length;
        len = --len;
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

                if(i == 0 || j == 0 || i == len || j == len){
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
	};
};





