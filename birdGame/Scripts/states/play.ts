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
    export class Play {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public background: objects.Background;
        public bird: objects.Bird;
        public money: objects.Money[] = [];
        public enemy: objects.Enemy[] = [];
        public scoreboard: objects.ScoreBoard;


        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);
        

            // Add bird to game
            this.bird = new objects.Bird();
            this.game.addChild(this.bird);

            // Add money to game
            for (var count = constants.MONEY_NUM; count > 0; count--) {
                money[count] = new objects.Money();
                this.game.addChild(money[count]);
            }

            // Add enemybird to game
            for (var enemyBird = constants.ENEMY_NUM; enemyBird > 0; enemyBird--) {
                enemy[enemyBird] = new objects.Enemy();
                this.game.addChild(enemy[enemyBird]);
            }
 

            //Add Scoreboard to game
            this.scoreboard = new objects.ScoreBoard(this.game);

            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        // Calculate the distance between two points
        distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } // distance end


        //CHECK COLLISION  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        public checkCollision(collider: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.bird.x;
            p1.y = this.bird.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check if collision occured or not
            if (this.distance(p2, p1) < ((this.bird.height * 0.5) + (collider.height * 0.5))) {       
                if (!collider.isColliding) {                
                    
                    collider.isColliding = true;
                     // to check if collision occured with money or enemy
                    switch (collider.name) {
                        case "money":
                            createjs.Sound.play("moneySound");
                            this.scoreboard.score += 100; // add point to score
                            break;
                        case "enemy":
                            this.scoreboard.lives--; // decrease live
                            break;
                    }
                }
            }
            else {
                collider.isColliding = false;
            }
        }


        // UPDATE METHOD
        public update() {

            // update background and bird object
            this.background.update();
            this.bird.update();

            // check if lives is greater than 0 (player still got lives)
            if (this.scoreboard.lives > 0) {
                for (var enemyBird = constants.ENEMY_NUM; enemyBird > 0; enemyBird--) {
                    enemy[enemyBird].update();
                    this.checkCollision(enemy[enemyBird]);
                }
                // update scoreboard
                this.scoreboard.update();
                for (var count = constants.MONEY_NUM; count > 0; count--) {
                    money[count].update();
                    this.checkCollision(money[count]);
                }
            }
            // update scoreboard
            this.scoreboard.update();

            // check if live less than 1
            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                //stage.removeChild(game);
                stage.removeAllChildren();                
                finalScore = this.scoreboard.score; // set current score to final score
                // check if finalscore is greater than highscore
                if (finalScore > highScore) {
                    highScore = finalScore;// set finalsocre to highscore
                }
                currentState = constants.GAME_OVER_STATE; // set game over state as current state
                stateChanged = true;
            }

        } // update method end
    }
}