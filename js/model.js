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
        createField: function ( sizeX, sizeY ) {   
            field = [];     
            for( var i = 0; i < sizeX; i++ )
            {
                field.push([]);   
                for( var j = 0; j < sizeY; j++ )
                {
                    field[i].push(new Dot(i, j));              
                }             
            }  
            
            if($('#randomFill').is(':checked')){
                for( var i = 0; i < sizeX; i++ )
                { 
                    for( var j = 0; j < sizeY; j++ )
                    {
                        var random = Math.floor((Math.random() * 100) + 1); 
                        if(random > 80){
                            field[i][j].status = 1;
                        }
                    }             
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





