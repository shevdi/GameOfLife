import Cell from './cell.js';

export default function () {
    let field = [];
    let game = false;

    const _notifyController = function () {
        $('body').trigger('updateView');
    };
    // public methods
    return {
        createField(sizeX, sizeY, randomFill) {
            field = [];
            for (let i = 0; i < sizeX; i++) {
                field.push([]);
                for (let j = 0; j < sizeY; j++) {
                    field[i].push(new Cell(i, j));
                }
            }

            if (randomFill === true) {
                for (let i = 0; i < sizeX; i++) {
                    for (let j = 0; j < sizeY; j++) {
                        const random = Math.floor((Math.random() * 100) + 1);
                        if (random > 80) {
                            field[i][j].changeStatus('alive');
                        }
                    }
                }
            }
            _notifyController();
        },

        fieldState(_field) {
            field = _field;
            _notifyController();
        },

        cellStatus(cell) {
            // При смене цвета точки таблица не перерисовывается
            field[cell.x][cell.y].changeStatus(cell.status);
        },

        getData() {
            return field;
        },

        gameStatus() {
            if (game === true) {
                return true;
            } else {
                return false;
            }
        },

        gameStart() {
            game = true;
        },

        gameStop() {
            game = false;
        },
    };
}

