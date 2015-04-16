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
    export class Instruction {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public background: objects.Background;
        public mainmenuButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);

            // initiate and add gameoverlabel to game object 
            var gameLabel: objects.Label = new objects.Label("INSTRUCTIONS", constants.SCREEN_CENTER_WIDTH, 100);
            gameLabel.font = "60px Consolas";
            gameLabel.regX = gameLabel.getMeasuredWidth() * 0.5;
            gameLabel.regY = gameLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameLabel);

           
            // tryagainbutton 
            this.mainmenuButton = new objects.Button("mainMenuButton", constants.SCREEN_CENTER_WIDTH +225, 450);
            this.game.addChild(this.mainmenuButton);
            this.mainmenuButton.on("click", this.mainMenuButtonClicked, this);


            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        mainMenuButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.MENU_STATE; // set play state as current state
            stateChanged = true;
        }

        // UPDATE METHOD
        public update() {

            this.background.update(); // update background 

        } // update method end


    }
}   