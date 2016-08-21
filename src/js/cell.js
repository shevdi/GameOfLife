export default function (x, y) {
    this.x = x;
    this.y = y;
    this.status = 0;

    this.isAlive = function () {
        if (this.status === 1) {
            return 'alive';
        } else {
            return 'dead';
        }
    };
    this.changeStatus = function (_status) {
        if (_status === 'alive' || _status === 1 || _status === true) {
            this.status = 1;
        } else if (_status === 'dead' || _status === 0 || _status === false) {
            this.status = 0;
        } else {
            if (_status === 0) {
                this.status = 1;
            } else {
                this.status = 0;
            }
        }
    };
}
