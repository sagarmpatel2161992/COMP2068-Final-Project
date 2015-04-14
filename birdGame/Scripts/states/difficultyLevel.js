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
    var DifficultyLevel = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function DifficultyLevel() {
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
            var selectDifficultyLabel = new objects.Label("SELECT DIFFICULTY LEVEL", constants.SCREEN_CENTER_WIDTH, 200);
            selectDifficultyLabel.font = "40px Consolas";
            selectDifficultyLabel.regX = selectDifficultyLabel.getMeasuredWidth() * 0.5;
            selectDifficultyLabel.regY = selectDifficultyLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(selectDifficultyLabel);
            // initiate and adding instructionbutton label to screen
            this.easyButton = new objects.Button("easybutton", constants.SCREEN_CENTER_WIDTH - 200, 400);
            this.game.addChild(this.easyButton);
            this.easyButton.on("click", this.easyButtonClicked, this);
            // initiate and adding playbutton label to screen
            this.mediumButton = new objects.Button("mediumbutton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.mediumButton);
            this.mediumButton.on("click", this.mediumButtonClicked, this);
            // initiate and adding playbutton label to screen
            this.hardButton = new objects.Button("hardbutton", constants.SCREEN_CENTER_WIDTH + 200, 400);
            this.game.addChild(this.hardButton);
            this.hardButton.on("click", this.hardButtonClicked, this);
            // adding game object to stage
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        DifficultyLevel.prototype.easyButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            birdSelected = constants.PLAYER1;
            stateChanged = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        DifficultyLevel.prototype.mediumButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            birdSelected = constants.PLAYER2;
            stateChanged = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        DifficultyLevel.prototype.hardButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            birdSelected = constants.PLAYER2;
            stateChanged = true;
        };
        // UPDATE METHOD
        DifficultyLevel.prototype.update = function () {
            this.background.update();
        }; // update method end
        return DifficultyLevel;
    })();
    states.DifficultyLevel = DifficultyLevel;
})(states || (states = {}));
//# sourceMappingURL=difficultylevel.js.map