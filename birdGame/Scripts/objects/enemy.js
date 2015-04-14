/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Enemy() {
            _super.call(this, "enemy");
            this.name = "enemy";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype.reset = function () {
            // set the enemy to start at a random x value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = constants.BACKGROUND_RESET_WIDTH;
            // add drift to the enemy 
            if (difficultyLevelSelected = 1) {
                this._dx = Math.floor(Math.random() * 3) + 5;
                this._dy = Math.floor(Math.random() * 2) - 2;
            }
            else if (difficultyLevelSelected = 2) {
                this._dx = Math.floor(Math.random() * 9) + 5;
                this._dy = Math.floor(Math.random() * 6) - 2;
            }
            else if (difficultyLevelSelected = 3) {
                this._dx = Math.floor(Math.random() * 11) + 5;
                this._dy = Math.floor(Math.random() * 10) - 2;
            }
        };
        Enemy.prototype.checkBounds = function () {
            // check for enemy's x position
            if (this.x < 0) {
                this.reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype.update = function () {
            this.y -= this._dy;
            this.x -= this._dx;
            this.checkBounds();
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map