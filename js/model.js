/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Dot = function(x, y){
    this.x = x;
    this.y = y;
    this.status = 0;
}
Dot.prototype = {
    isAlive : function() {
        if(this.status==1)
            return 'alive';
        else
            return 'dead';
    }
};


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
                    field[i].push(new Dot(i, j));              
                }             
            }             
            notifyController();
        },

        fieldState: function ( _field ) {   
            field = _field;  
            notifyController();
        },

        dotStatus: function( dot ){ 
            // При смене цвета точки таблица не перерисовывается
            field[dot.x][dot.y].status = dot.status;
        },
        
        getData: function(){           
            return field;
        }
    };
};





