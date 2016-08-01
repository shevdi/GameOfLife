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
            var field = _model.getData();
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
                        counter = counter + field[i][jjPlus].status;
                        counter = counter + field[i][jMinus].status;
                        counter = counter + field[iPlus][j].status;
                        counter = counter + field[iMinus][j].status;
                        counter = counter + field[iPlus][jPlus].status;
                        counter = counter + field[iPlus][jMinus].status;
                        counter = counter + field[iMinus][jPlus].status;
                        counter = counter + field[iMinus][jMinus].status;
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
            }
            // console.log(field);
            _model.fieldState( newField );
        });

        $('body').bind('changeStatus', function(e) {
            var splitId = e.id.split('_');
            e.row = splitId[0].substring(3);
            e.col = splitId[1].substring(3);
            _model.dotStatus( e.row, e.col, e.status );
        });
        $('body').bind('updateView', function(e) { 
            _view.updateView( _model.getData() );
        });

	return  {
            // public functions
	};
};





