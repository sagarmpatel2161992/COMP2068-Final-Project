var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        function Button(stringPath, x, y) {
            _super.call(this, assetLoader.getResult(stringPath));
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            // set buttton position 
            this.x = x;
            this.y = y;
            4;
            // add event listener 
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        }
        // EVENT HANDLERS
        // mouseout event 
        Button.prototype._buttonOut = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        // mouseover event 
        Button.prototype._buttonOver = function (event) {
            event.currentTarget.alpha = 0.5;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map