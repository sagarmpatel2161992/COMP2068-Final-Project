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