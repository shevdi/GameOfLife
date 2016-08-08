/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var View = function () {
	var updateView = function ( field ) {
        $('#field tr').remove();
        // Рисуются ряды в таблице, затем колонки. В id записан номер колонки и ряда.
        for( var i = 0; i < field.length; i++ ){
            $('#field').append( "<tr id='row_num"  + field[i][0].x + "'></tr>" );
            for( var j = 0; j < field[0].length; j++ ){
                if(field[i][j].status==1){
                    var status = 'alive'
                }
                else{
                    var status = 'dead'
                }
                $('tr[id="row_num' + i + '"]').append("<td id='row" + field[i][j].x + "_col" + field[i][j].y + "' class='" + status + "'></td>" );
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
                    updateView(field);
		}
	};
};





