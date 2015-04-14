/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/money.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);
            // initiate and adding birdgame label to screen
            var birdGameLabel = new objects.Label("BIRD GAME", constants.SCREEN_CENTER_WIDTH, 100);
            birdGameLabel.font = "80px Consolas";
            birdGameLabel.regX = birdGameLabel.getMeasuredWidth() * 0.5;
            birdGameLabel.regY = birdGameLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(birdGameLabel);
            // initiate and adding instructionbutton label to screen
            this.instructionButton = new objects.Button("instructionbutton", constants.SCREEN_CENTER_WIDTH + 150, 400);
            this.game.addChild(this.instructionButton);
            this.instructionButton.on("click", this.playButtonClicked, this);
            // initiate and adding playbutton label to screen
            this.playButton = new objects.Button("playbutton", constants.SCREEN_CENTER_WIDTH - 150, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);
            // adding game object to stage
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.playButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.SELECT_PLAYER_STATE;
            stateChanged = true;
        };
        // UPDATE METHOD
        Menu.prototype.update = function () {
            this.background.update();
        }; // update method end
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map