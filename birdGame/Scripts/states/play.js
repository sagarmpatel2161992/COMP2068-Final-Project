/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/money.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // PLAY STATE
    var Play = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Play() {
            this.money = [];
            this.enemy = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);
            // Add bird to game
            this.bird = new objects.Bird();
            this.game.addChild(this.bird);
            for (var count = constants.MONEY_NUM; count > 0; count--) {
                money[count] = new objects.Money();
                this.game.addChild(money[count]);
            }
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
        Play.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; // distance end
        //CHECK COLLISION  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Play.prototype.checkCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.bird.x;
            p1.y = this.bird.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check if collision occured or not
            if (this.distance(p2, p1) < ((this.bird.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    collider.isColliding = true;
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
        };
        // UPDATE METHOD
        Play.prototype.update = function () {
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
                    highScore = finalScore; // set finalsocre to highscore
                }
                currentState = constants.GAME_OVER_STATE; // set game over state as current state
                stateChanged = true;
            }
        }; // update method end
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map