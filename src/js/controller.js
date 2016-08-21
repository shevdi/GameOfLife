import Cell from './cell.js';

export default function (view, model) {
    const _view = view;
    const _model = model;
    let tick = null;


    function _changeCellStatus(e) {
        const splitId = e.id.split('_');
        e.row = splitId[0].substring(3);
        e.col = splitId[1].substring(3);
        const cell = new Cell(e.row, e.col);
        if (e.status === 'dead') {
            cell.changeStatus('alive');
            $('#' + e.id).prop('class', 'alive');
        } else {
            cell.changeStatus('dead');
            $('#' + e.id).prop('class', 'dead');
        }
        return cell;
    }

    function plus(number) {
        let num = number;
        num++;
        return num;
    }

    function minus(number) {
        let num = number;
        num--;
        return num;
    }

    function _countField(field) {
        const newField = [];
        const lenX = field.length;
        const lenY = field[0].length;

        for (let i = 0; i < field.length; i++) {
            newField.push([]);
            for (let j = 0; j < field[0].length; j++) {
                let counter = 0;
                newField[i].push($.extend(true, [], field[i][j]));

                // Cells on borders are hidden and not counted
                if (i !== 0 && j !== 0 && i !== minus(lenX) && j !== minus(lenY)) {
                    counter += field[i][plus(j)].status;
                    counter += field[i][minus(j)].status;
                    counter += field[minus(i)][j].status;
                    counter += field[plus(i)][j].status;
                    counter += field[plus(i)][minus(j)].status;
                    counter += field[plus(i)][plus(j)].status;
                    counter += field[minus(i)][plus(j)].status;
                    counter += field[minus(i)][minus(j)].status;
                }
                if (field[i][j].isAlive() === 'alive') {
                    if (counter < 2 || counter > 3) {
                        newField[i][j].changeStatus('dead');
                    }
                } else {
                    if (counter === 3) {
                        newField[i][j].changeStatus('alive');
                    }
                }
            }
        }
        return newField;
    }

    function changeField() {
        const newField = _countField(_model.getData());
        _model.fieldState(newField);
    }

    // set the handlers for the view
    const _initView = function () {
        // create field
        $('#createButton').on('click', function () {
            const $event = jQuery.Event('createField');
            $event.sizeX = parseInt($('#sizeX')[0].value, 10) + 2;
            $event.sizeY = parseInt($('#sizeY')[0].value, 10) + 2;
            if ($('#randomFill').is(':checked')) {
                $event.status = true;
            }
            $('#nextButton, #startButton, #speed').css('display', 'inline');
            $('body').trigger($event);
        });

        // create field on enter
        $('#createButton').on('keypress', function (e) {
            if (e.which === 13) {
                const $event = jQuery.Event('createField');
                $event.sizeX = parseInt($('#sizeX')[0].value, 10) + 2;
                $event.sizeY = parseInt($('#sizeY')[0].value, 10) + 2;
                if ($('#randomFill').is(':checked')) {
                    $event.status = true;
                }
                $('#nextButton, #startButton, #speed').css('display', 'inline');
                $('body').trigger($event);
            }
        });

        // change cell status
        $('table').on('click', 'td', function (e) {
            const cell = e.currentTarget;
            const $event = jQuery.Event('changeStatus');
            $event.id = $(cell).prop('id');
            $event.status = $(cell).prop('class');
            $('body').trigger($event);
        });

        // next step
        $('#nextButton').on('click', function () {
            const $event = jQuery.Event('changeState');
            $('body').trigger($event);
        });

        // start auto step
        $('#startButton').on('click', function () {
            const $event = jQuery.Event('changeStateAuto');
            if (_model.gameStatus() === false) {
                _model.gameStart();
                $('#startButton').html('stop');
                $event.state = 'start';
            } else {
                _model.gameStop();
                $('#startButton').html('start');
                $event.state = 'stop';
            }
            $('body').trigger($event);
        });

        // dynamic speed change
        $('#speed').on('change', function () {
            const $event = jQuery.Event('changeStateAuto');
            if (_model.gameStatus()) {
                $event.state = 'stop';
                $('body').trigger($event);
                $event.state = 'start';
                $('body').trigger($event);
            }
        });
    };

    _initView();

    // event binding
    $('body').bind('createField', function (e) {
        _model.createField(e.sizeX, e.sizeY, e.status);
    });

    $('body').bind('changeState', function () {
        const newField = _countField(_model.getData());
        _model.fieldState(newField);
    });

    $('body').bind('changeStateAuto', function (e) {
        if (e.state === 'start') {
            tick = setInterval(changeField, ($('#speed').val()) * 100);
        } else if (e.state === 'stop') {
            clearInterval(tick);
        }
    });

    $('body').bind('changeStatus', function (e) {
        _model.cellStatus(_changeCellStatus(e));
    });

    $('body').bind('updateView', function () {
        _view.updateView(_model.getData());
    });

    return {
        // public functions
        changeCellStatusForTesting(e) {
            return (_changeCellStatus(e));
        },

        countFieldForTesting(field) {
            return (_countField(field));
        },
    };
}
