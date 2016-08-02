var expect = chai.expect;
var assert = chai.assert;



describe("GameOfLife", function(){

    var t_model = new Model();
    var t_view = new View();
    var t_controller = new Controller( t_view, t_model);

    t_model.createField(7);
    t_field = t_model.getData(7);
    console.log(t_field);

    describe("creating field", function() {
        it(" is array :", function() {
            assert.typeOf(t_field, 'array');
        });

        it(" array equals", function() {
            for ( var i = 0; i < t_field.length; i++){
                for ( var j = 0; j < t_field[0].length; j++){
                    assert.equal(t_field[i][j].x, i);
                    assert.equal(t_field[i][j].y, j);
                    assert.equal(t_field[i][j].status, 0);
                    // assert.equal(t_field[i][j].isAlive(), 'dead');                    
                }
            }
        });
    });

    describe("dot status", function() {
        var dot = new Dot (1, 1);
        dot.status = 0;
        var e = {};
        e.id = 'row1_col1';
        e.status = 'live';
        it(" is object :", function() {
            assert.equal(t_controller.changeDotStatus( {id: "row7_col6", status: "dead"} ), { x: "7", y: "6", status: 0 });
        });
        // it(" field contains :", function() {
        //     assert.equal(controller.countField[2][2], new Dot(2,2));
        // });

    });


    describe("count field", function() {
        it(" is object :", function() {
            assert.equal(t_model.countField([[{x:0, y:0, status:0}, {x:0, y:1, status:0}, {x:0, y:2, status:0}],[{x:1, y:0, status:0}, {x:1, y:1, status:0}, {x:1, y:2, status:0}], [{x:2, y:0, status:0}, {x:2, y:0, status:0}, {x:2, y:2, status:0}]]), 'array');
        });
        // it(" field contains :", function() {
        //     assert.equal(controller.countField[2][2], new Dot(2,2));
        // });

    });
});







