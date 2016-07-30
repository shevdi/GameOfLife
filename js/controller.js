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
            console.log(newField);
            
            var len = field.length;
            len = --len;
            console.log(field[2][2][2]);
            console.log(field[2][3][2]);
            console.log(field[2][4][2]);
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
                        counter = counter + field[i][jPlus][3];
                        counter = counter + field[i][jMinus][3];
                        counter = counter + field[iPlus][j][3];
                        counter = counter + field[iMinus][j][3];
                        counter = counter + field[iPlus][jPlus][3];
                        counter = counter + field[iPlus][jMinus][3];
                        counter = counter + field[iMinus][jPlus][3];
                        counter = counter + field[iMinus][jMinus][3];
                        if(field[i][j][3]==1){
                            if(counter < 2 || counter > 3){
                                console.log('x: ' + field[i][j][0] + ' y:' + field[i][j][1] + ' counter:' + counter);
                                newField[i][j][3]=0;
                                newField[i][j][2]='dead';
                            }
                        }
                        else{
                            if(counter == 3){
                                newField[i][j][3]=1;
                                newField[i][j][2]='live';
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





