/// <reference path="gameobject.ts" />

module objects {

    export class Bird extends objects.GameObject {
     
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            if (birdSelected == 1)
                super("red");
            else
                super("chuck");
            // gamesound for background added
            createjs.Sound.play("gameSound", {loop: -1});
            this.x = 20;// bird position set         

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y = stage.mouseY;
        }
    }

}  