/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Bird = (function (_super) {
        __extends(Bird, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Bird() {
            if (birdSelected == 1)
                _super.call(this, "red");
            else
                _super.call(this, "chuck");
            // gamesound for background added
            createjs.Sound.play("gameSound", { loop: -1 });
            this.x = 20; // bird position set         
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Bird.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Bird;
    })(objects.GameObject);
    objects.Bird = Bird;
})(objects || (objects = {}));
//# sourceMappingURL=bird.js.map