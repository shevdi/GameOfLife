var Model = function () {
    var field = new Array();
    var game = false;

    var _notifyController = function () {    
        $('body').trigger('updateView');
    }
    // public methods
    return  {
        createField: function ( sizeX, sizeY, randomFill ) {   
            field = [];     
            for( var i = 0; i < sizeX; i++ )
            {
                field.push([]);   
                for( var j = 0; j < sizeY; j++ )
                {
                    field[i].push(new Cell(i, j));              
                }             
            }  
            
            if(randomFill===true){
                for( var i = 0; i < sizeX; i++ )
                { 
                    for( var j = 0; j < sizeY; j++ )
                    {
                        var random = Math.floor((Math.random() * 100) + 1); 
                        if(random > 80){
                            field[i][j].changeStatus('alive');
                        }
                    }             
                } 
            }                    
            _notifyController();
        },

        fieldState: function ( _field ) {   
            field = _field;  
            _notifyController();
        },

        cellStatus: function( cell ){ 
            // При смене цвета точки таблица не перерисовывается
            field[cell.x][cell.y].changeStatus(cell.status);
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





