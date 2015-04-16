/// <reference path="gameobject.ts" />

module objects {

    export class Enemy extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("enemy");
            this.name = "enemy";

            this.reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private reset() {
            // set the enemy to start at a random x value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = constants.BACKGROUND_RESET_WIDTH;
            // add drift to the enemy 
            if (difficultyLevelSelected = constants.EASY) {
                this._dx = (Math.floor(Math.random() * 3) * (difficultyLevelSelected) ) + 5;
                this._dy = Math.floor(Math.random() * 2 ) +1;
            }
            else if (difficultyLevelSelected = constants.MEDIUM) {
                this._dx = (Math.floor(Math.random() * 9) * (difficultyLevelSelected * 3)) + 9;
                this._dy = Math.floor(Math.random() * 6) + 3;
            }
            else if (difficultyLevelSelected = constants.HIGH) {
                this._dx = (Math.floor(Math.random() * 11) * (difficultyLevelSelected * 8)) + 20;
                this._dy = Math.floor(Math.random() * 10)  + 5;
            }
        }

        private checkBounds() {
            // check for enemy's x position
            if (this.x < 0) {
                this.reset();
            }
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y -= this._dy;
            this.x -= this._dx;
            this.checkBounds();
        }

    }
} 