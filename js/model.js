/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Model = function () {
    var field = new Array();

  	var notifyController = function () {	
        $('body').trigger('updateView');
  	}
    // public methods
  	return  {
        createField: function ( size ) {   
            field = []; 
            for( var i = 0; i < size; i++ )
            {
                field.push([]);   
                for( var j = 0; j < size; j++ )
                {
                    field[i].push([i,j,'dead', 0]);              
                }             
            }             
            notifyController();
      	},

        fieldState: function ( _field ) {   
            field = _field;   
            notifyController();
        },

        dotStatus: function( row, col, status ){ 

            // При смене цвета точки таблица не перерисовывается
            if(field[row][col][2] == 'dead'){
                field[row][col][2] = "live";
                field[row][col][3] = 1;
                $('#row' + row + '_col' + col).attr('class', 'live');
            }
            else{
                field[row][col][2] = "dead";
                field[row][col][3] = 0;
                $('#row' + row + '_col' + col).attr('class', 'dead');
            }
            // notifyController();
        },
        
        getData: function(){           
            return field;
        }
  	};
};





