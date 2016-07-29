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





