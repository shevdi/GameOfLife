export default function () {
    const _updateView = function (field) {
        $('#field tr').remove();
        const fragment = document.createDocumentFragment();
        // In table create rows and then columns. In id write number of column and row.
        for (let i = 0; i < field.length; i++) {
            const tr = document.createElement('tr');
            tr.setAttribute('id', 'row_num${i}');
            fragment.appendChild(tr);
            for (let j = 0; j < field[0].length; j++) {
                const id = 'row${field[i][j].x}_col${field[i][j].y}';
                const td = document.createElement('td');
                td.setAttribute('id', id);
                td.setAttribute('class', field[i][j].isAlive());
                tr.appendChild(td);
                fragment.appendChild(tr);
            }
        }
        $('#field').append(fragment);

        // Hide cells on borders
        $('#row_num0').css('display', 'none');
        $('#row_num' + (field.length - 1)).css('display', 'none');
        for (let i = 0; i < field.length; i++) {
            $('#row' + i + '_col0').css('display', 'none');
            $('#row' + i + '_col' + (field[0].length - 1)).css('display', 'none');
        }
    };

    return {
        updateView(field) {
            _updateView(field);
        },
    };
}
