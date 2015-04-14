var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Background = (function (_super) {
        __extends(Background, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Background() {
            _super.call(this, assetLoader.getResult("background"));
            // PRIVATE VARIABLE
            this.dx = 5;
            this.name = "background";
            // setting width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Background.prototype.reset = function () {
            // set the background to start at a random x value
            this.x = 0;
            this.y = 0;
        };
        // Check obund function 
        Background.prototype.checkBounds = function () {
            if (this.x <= -constants.BACKGROUND_RESET_WIDTH) {
                this.reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Background.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map