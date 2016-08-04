// var expect = chai.expect;
// var assert = chai.assert;



// describe("GameOfLife", function(){



//     beforeEach(function() {
//         var t_model = new Model();
//         var t_view = new View();
//         var t_controller = new Controller( t_view, t_model);

//         t_model.createField(15, 20);
//         t_field = t_model.getData(15, 20);
//     });

//     afterEach(function() {
//         delete t_model;
//         delete t_view;
//         delete t_controller;
//         t_field = [];
//     });

//     describe("creating field", function() {
//         it("is array :", function() {
//             assert.typeOf(t_field, 'array');
//         });

//         it("equals", function() {
//             for ( var i = 0; i < t_field.length; i++){
//                 for ( var j = 0; j < t_field[0].length; j++){
//                     assert.equal(t_field[i][j].x, i);
//                     assert.equal(t_field[i][j].y, j);
//                     assert.equal(t_field[i][j].status, 0);
//                     assert.equal(t_field[i][j].isAlive(), 'dead');                    
//                 }
//             }
//         });
//     });

//     describe("Dot status", function() {
//         it("changes dot status", function() {
//             for ( var i = 0; i < t_field.length; i++){
//                 for ( var j = 0; j < t_field[0].length; j++){
//                     var dot = changeDotStatus( { id: "row" + i + "_col" + j, status: "dead" } );
//                     assert.equal(dot.x, i);
//                     assert.equal(dot.y, j);
//                     assert.equal(dot.status, 1);                  
//                 }
//             }            
//         });
//     });


//     describe("Redrawing field", function() {
//         it("compares counted field with right answer", function() {
//             var alive_newField = JSON.parse(JSON.stringify( t_field ));

//             // dots for testing before processing
//             t_field[1][1].status = 1; 
//             t_field[1][2].status = 1;
//             t_field[1][3].status = 1;
//             t_field[1][18].status = 1;
//             t_field[1][17].status = 1;
//             t_field[2][18].status = 1;
//             t_field[1][17].status = 1;

//             t_field[10][11].status = 1;
//             t_field[10][12].status = 1;
//             t_field[10][13].status = 1;
//             t_field[9][13].status = 1;
//             t_field[8][12].status = 1;

//             t_newField = countField(t_field);  

//             // right answer
//             alive_newField[1][2].status = 1;    
//             alive_newField[2][2].status = 1;              
//             alive_newField[1][18].status = 1;   
//             alive_newField[1][17].status = 1; 
//             alive_newField[2][18].status = 1;
//             alive_newField[2][17].status = 1;

//             alive_newField[9][11].status = 1;
//             alive_newField[9][13].status = 1;
//             alive_newField[10][12].status = 1;
//             alive_newField[10][13].status = 1;
//             alive_newField[11][12].status = 1;   

//             // to see position of wrong dot uncomment console.log
//             for ( var i = 0; i < t_newField.length; i++){
//                 for ( var j = 0; j < t_newField[0].length; j++){
//                     // console.log('x=' + i + ' y=' + j );
//                     if(t_newField[i][j].status == 1){
//                         assert.equal(alive_newField[i][j].status, 1); 
//                     } 
//                     else{
//                         assert.equal(alive_newField[i][j].status, 0); 
//                     }                       
//                 }
//             }
//         });    
//     });
// });





// function changeDotStatus (e){
//         var splitId = e.id.split('_');
//         e.row = splitId[0].substring(3);
//         e.col = splitId[1].substring(3);
//         var dot = new Dot(e.row, e.col);
//         if(e.status == 'dead'){
//             dot.status = 1;
//             $('#' + e.id).attr('class', 'alive');
//         }
//         else{
//             dot.status = 0;
//             $('#' + e.id).attr('class', 'dead');
//         }
//         return dot;
//     }

//     function countField (field){
//         var newField = JSON.parse(JSON.stringify( field ));        
//         var lenX = field.length;
//         lenX = --lenX;
//         var lenY = field[0].length;
//         lenY = --lenY;
//         for ( var i = 0; i < field.length; i++){
//             for ( var j = 0; j < field[0].length; j++){
//                 var counter = 0;

//                 var iPlus = i;
//                 iPlus = ++iPlus;
//                 var iMinus = i;
//                 iMinus = --iMinus;
//                 var jPlus = j;
//                 jPlus = ++jPlus;
//                 var jMinus = j;
//                 jMinus = --jMinus;

//                 if(i == 0 || j == 0 || i == lenX || j == lenY){
//                 }

//                 else{
//                     counter = counter + field[i][jPlus].status;
//                     counter = counter + field[i][jMinus].status;
//                     counter = counter + field[iMinus][j].status;
//                     counter = counter + field[iPlus][j].status;
//                     counter = counter + field[iPlus][jMinus].status;
//                     counter = counter + field[iPlus][jPlus].status;
//                     counter = counter + field[iMinus][jPlus].status;
//                     counter = counter + field[iMinus][jMinus].status;                           
//                 }
//                 if(field[i][j].status==1){
//                     if(counter < 2 || counter > 3){
//                         newField[i][j].status=0;
//                     }
//                 }
//                 else{
//                     if(counter == 3){
//                         newField[i][j].status=1;
//                     }  
//                 }
//             }
//         }

//         return newField;
//     }



