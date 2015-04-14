var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Money = (function (_super) {
        __extends(Money, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Money() {
            _super.call(this, "money");
            this.name = "money";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Money.prototype.reset = function () {
            // set the money to start at a random x value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = constants.BACKGROUND_RESET_WIDTH;
            // add drift to the money
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        };
        Money.prototype.checkBounds = function () {
            // check moeny object's x position is less than 0 or not
            if (this.x < 0) {
                this.reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Money.prototype.update = function () {
            this.y -= this._dy;
            this.x -= this._dx;
            this.checkBounds();
        };
        return Money;
    })(objects.GameObject);
    objects.Money = Money;
})(objects || (objects = {}));
//# sourceMappingURL=money.js.map