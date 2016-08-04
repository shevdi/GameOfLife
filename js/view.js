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
        $('#row_num0').css('display', 'none');
        $('#row_num'+(field.length-1)).css('display', 'none');
        for (var i = 0; i< field.length; i++) {
            $('#row'+i+'_col0').css('display', 'none');  
            $('#row'+i+'_col' + (field[0].length-1)).css('display', 'none'); 
        }
	};
        
    //set the handlers for the view
    var initView = function(){
        // create field
        $("#createButton").on("click", function(){
            var event = jQuery.Event("createField");
            event.sizeX = parseInt($('#sizeX')[0].value)+2;  
            event.sizeY = parseInt($('#sizeY')[0].value)+2;          
            $('body').trigger(event);          
        });

        // create field on enter
        $('#createButton').on("keypress", function(e){
            if(e.which == 13){
                var event = jQuery.Event("createField");
                event.sizeX = parseInt($('#sizeX')[0].value)+2;  
                event.sizeY = parseInt($('#sizeY')[0].value)+2;      
            }
        });

        // change dot status
        $('td').live("click", function(e){
            var $dot = e.currentTarget;
            var event = jQuery.Event("changeStatus");
            event.id = $($dot).attr('id');
            event.status = $($dot).attr('class');
            $('body').trigger(event);
        }); 

        // next step
        $('#nextButton').on("click", function(){
            var event = jQuery.Event("changeState");
            $('body').trigger(event);
        }); 

        // start auto step
        $('#startButton').on("click", function(){   
            var event = jQuery.Event("changeStateAuto");
            var sw = $('#startButton').html(); 
            if(sw == 'start'){        
                $('#startButton').html('stop'); 
                event.state = 'start';                               
            }
            else{
                $('#startButton').html('start');
                event.state = 'stop';                
            }  
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





