/* eslint-env mocha */
import { assert } from 'chai';
import Model from '../js/model.js';
import View from '../js/view.js';
import Controller from '../js/controller.js';


const model = new Model();
const view = new View();
const controller = new Controller(view, model);

describe('GameOfLife', function () {
    beforeEach(function () {
        model.createField(15, 20);
        $('#randomFill').prop('checked', false);
    });

    after(function () {
        model.createField(0, 0);
        $('body').trigger('updateView');
    });

    describe('creating field', function () {
        it('is array :', function () {
            const field = model.getData();
            assert.typeOf(field, 'array');
        });

        it('equals', function () {
            const field = model.getData();
            for (let i = 0; i < field.length; i++) {
                for (let j = 0; j < field[0].length; j++) {
                    assert.equal(field[i][j].x, i);
                    assert.equal(field[i][j].y, j);
                    assert.equal(field[i][j].status, 0);
                    assert.equal(field[i][j].isAlive(), 'dead');
                }
            }
        });
    });

    describe('Cell status', function () {
        it('changes cell status', function () {
            const field = model.getData();
            for (let i = 0; i < field.length; i++) {
                for (let j = 0; j < field[0].length; j++) {
                    const cell = controller.changeCellStatusForTesting({
                        id: 'row' + i + '_col' + j,
                        status: 'dead',
                    });
                    assert.equal(cell.x, i);
                    assert.equal(cell.y, j);
                    assert.equal(cell.status, 1);
                }
            }
        });
    });

    describe('Redrawing field', function () {
        it('compares counted field with right answer', function () {
            const field = model.getData();
            const aliveNewField = JSON.parse(JSON.stringify(field));

            // cells for testing before processing
            field[1][1].status = 1;
            field[1][2].status = 1;
            field[1][3].status = 1;
            field[1][18].status = 1;
            field[1][17].status = 1;
            field[2][18].status = 1;
            field[1][17].status = 1;

            field[10][11].status = 1;
            field[10][12].status = 1;
            field[10][13].status = 1;
            field[9][13].status = 1;
            field[8][12].status = 1;

            const newField = controller.countFieldForTesting(field);

            // right answer
            aliveNewField[1][2].status = 1;
            aliveNewField[2][2].status = 1;
            aliveNewField[1][18].status = 1;
            aliveNewField[1][17].status = 1;
            aliveNewField[2][18].status = 1;
            aliveNewField[2][17].status = 1;

            aliveNewField[9][11].status = 1;
            aliveNewField[9][13].status = 1;
            aliveNewField[10][12].status = 1;
            aliveNewField[10][13].status = 1;
            aliveNewField[11][12].status = 1;

            // to see position of wrong cell uncomment console.log
            for (let i = 0; i < newField.length; i++) {
                for (let j = 0; j < newField[0].length; j++) {
                    // console.log('x=' + i + ' y=' + j );
                    if (newField[i][j].status === 1) {
                        assert.equal(aliveNewField[i][j].status, 1);
                    } else {
                        assert.equal(aliveNewField[i][j].status, 0);
                    }
                }
            }
        });
    });
});
