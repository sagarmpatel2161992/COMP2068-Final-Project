/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />

/// <reference path="../objects/background.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/money.ts" />

/// <reference path="../objects/button.ts" />

/// <reference path="../objects/scoreboard.ts" />

module states {
    // PLAY STATE
    export class GameOver {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public background: objects.Background;
        public tryAgainButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);

            // initiate and add gameoverlabel to game object 
            var gameOverLabel: objects.Label = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, 100);
            gameOverLabel.font = "60px Consolas";
            gameOverLabel.regX = gameOverLabel.getMeasuredWidth() * 0.5;
            gameOverLabel.regY = gameOverLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameOverLabel);

            // initiate and add finalscorelabel to game object
            var finalScoreLabel: objects.Label = new objects.Label("FINAL SCORE: " + finalScore, constants.SCREEN_CENTER_WIDTH, 200);
            this.game.addChild(finalScoreLabel);

            // initiate and add highscorelabel to game object
            var highScoreLabel: objects.Label = new objects.Label("HIGH SCORE: " + highScore, constants.SCREEN_CENTER_WIDTH, 300);
            this.game.addChild(highScoreLabel);

            // tryagainbutton 
            this.tryAgainButton = new objects.Button("tryAgainButton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainButtonClicked, this);


            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        tryAgainButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.SELECT_PLAYER_STATE; // set play state as current state
            stateChanged = true;
        }

        // UPDATE METHOD
        public update() {

            this.background.update(); // update background 

        } // update method end


    }
}   