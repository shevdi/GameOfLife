/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Cell = function(x, y){
    this.x = x;
    this.y = y;
    this.status = 0;
}
Cell.prototype = {
    isAlive: function() {
        if(this.status==1)
            return 'alive';
        else
            return 'dead';
    },
    changeStatus: function() {

    }
};


var Model = function () {
    var field = new Array();
    var game = false;

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
                    field[i].push(new Cell(i, j));              
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

        cellStatus: function( cell ){ 
            // При смене цвета точки таблица не перерисовывается
            field[cell.x][cell.y].status = cell.status;
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





