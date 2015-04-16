/// <reference path="gameobject.ts" />

module objects {

    export class Egg extends objects.GameObject {
     
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            
            super("");
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y = stage.mouseY;
        }
    }

}   