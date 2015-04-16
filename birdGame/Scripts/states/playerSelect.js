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
    var PlayerSelect = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function PlayerSelect() {
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
            // initiate and add gameoverlabel to game object 
            var selectPlayerLabel = new objects.Label("SELECT PLAYER", constants.SCREEN_CENTER_WIDTH, 200);
            selectPlayerLabel.font = "40px Consolas";
            selectPlayerLabel.regX = selectPlayerLabel.getMeasuredWidth() * 0.5;
            selectPlayerLabel.regY = selectPlayerLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(selectPlayerLabel);
            // initiate and adding instructionbutton label to screen
            this.player1Button = new objects.Button("redButton", constants.SCREEN_CENTER_WIDTH - 150, 400);
            this.game.addChild(this.player1Button);
            this.player1Button.on("click", this.player1ButtonClicked, this);
            // initiate and adding playbutton label to screen
            this.player2Button = new objects.Button("chuckButton", constants.SCREEN_CENTER_WIDTH + 150, 400);
            this.game.addChild(this.player2Button);
            this.player2Button.on("click", this.player2ButtonClicked, this);
            // adding game object to stage
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        PlayerSelect.prototype.player1ButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.DIFFICULTY_LEVEL_STATE;
            birdSelected = constants.PLAYER1;
            stateChanged = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        PlayerSelect.prototype.player2ButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.DIFFICULTY_LEVEL_STATE;
            birdSelected = constants.PLAYER2;
            stateChanged = true;
        };
        // UPDATE METHOD
        PlayerSelect.prototype.update = function () {
            this.background.update();
        }; // update method end
        return PlayerSelect;
    })();
    states.PlayerSelect = PlayerSelect;
})(states || (states = {}));
//# sourceMappingURL=playerselect.js.map