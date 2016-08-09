var View = function () {
    var _updateView = function ( field ) {
        $('#field tr').remove();
        // In table create rows and then columns. in id write number of ocumn and row.
        for( var i = 0; i < field.length; i++ ){
            $('#field').append( "<tr id='row_num"  + field[i][0].x + "'></tr>" );
            for( var j = 0; j < field[0].length; j++ ){
                var status = field[i][j].isAlive();
                var id = 'row' + field[i][j].x + '_col' + field[i][j].y;
                $('<td></td>').appendTo('tr[id="row_num' + i + '"]')
                              .prop('id', id)
                              .prop('class', status);
            }
        } 

        // Hide cells on border
        $('#row_num0').css('display', 'none');
        $('#row_num'+(field.length-1)).css('display', 'none');
        for (var i = 0; i< field.length; i++) {
            $('#row'+i+'_col0').css('display', 'none');  
            $('#row'+i+'_col' + (field[0].length-1)).css('display', 'none'); 
        }
    };
               
    return  {
        updateView: function (field) {
                    _updateView(field);
        }
    };
};