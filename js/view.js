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
	};
        
    //set the handlers for the view
    var initView = function(){
        // создать поле
        $("#createButton").on("click", function(){
            var event = jQuery.Event("createField");
            event.size = $('#size')[0].value;            
            $('body').trigger(event);
            $('#size')[0].value = '';            
        });

        // создать поле с энтером
        $('#createButton').on("keypress", function(e){
          if(e.which == 13){
            var event = jQuery.Event("createField");
            event.size = $('#size')[0].value;
            $('body').trigger(event);
            $('#size')[0].value = '';  
           }
        });

        // изменить статус точки
        $('td').live("click", function(e){     

            var $dot = e.currentTarget;
            var event = jQuery.Event("changeStatus");
            event.id = $($dot).attr('id');
            event.status = $($dot).attr('class');
            console.log(event);     

            $('body').trigger(event);
        }); 

        // Слудующий шаг
        $('#nextButton').on("click", function(){
            var event = jQuery.Event("changeState");
            $('body').trigger(event);
        }); 
    };
    initView();
        
	return  {
		updateView: function (field) {
                    updateView(field);
		}
	};
};





