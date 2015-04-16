/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />


/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />

/// <reference path="objects/background.ts" />
/// <reference path="objects/bird.ts" />
/// <reference path="objects/money.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/enemy.ts" />

/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/button.ts" />

/// <reference path="states/gameover.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/playerselect.ts" />
/// <reference path="states/difficultylevel.ts" />
/// <reference path="states/play.ts" />





// Game Variables +++++++++++++++++++++++++++++++++++++++++++++
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;
var game: createjs.Container;


// Score Variables
var finalScore: number = 0;
var highScore: number = 0;

// State Variables
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;


// Game Objects
var background: objects.Background;
var bird: objects.Bird;
var money: objects.Money[] = [];
var enemy: objects.Enemy[] = [];
var scoreboard: objects.ScoreBoard;
var birdSelected: number;
var difficultyLevelSelected: number;


// State Objects
var gameOver: states.GameOver;
var play: states.Play;
var selectPlayer: states.PlayerSelect;
var difficultyLevel: states.DifficultyLevel;
var menu: states.Menu;
var instruction: states.Instruction;



// asset manifest - array of asset objects
var manifest = [
    { id: "red", src: "assets/images/red.jpg" },    
    { id: "background", src: "assets/images/background.jpg" },
    { id: "chuck", src: "assets/images/chuck.jpg" },
    { id: "enemy", src: "assets/images/enemy.gif" },
    { id: "money", src: "assets/images/money.jpg" },
    { id: "chuckButton", src: "assets/images/chuckButton.png" },
    { id: "redButton", src: "assets/images/redButton.png" },
    { id: "playbutton", src: "assets/images/playButton.png" },
    { id: "easybutton", src: "assets/images/easyButton.png" },
    { id: "mediumbutton", src: "assets/images/mediumButton.png" },
    { id: "hardbutton", src: "assets/images/hardButton.png" },
    { id: "instructionbutton", src: "assets/images/instructionButton.png" }, 
    { id: "mainMenuButton", src: "assets/images/mainmenuButton.png" }, 
    { id: "tryAgainButton", src: "assets/images/playagainbutton.png" },
    { id: "gameSound", src: "assets/audio/game.ogg" },  
    { id: "moneySound", src: "assets/audio/moneysound.wav" },   
];

function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();// setup stats fuction call 

    currentState = constants.MENU_STATE; // set current state to menu state
    changeState(currentState);// change state function call

}
// UTILITY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}


//GAME LOOP +++++++++++++++++++++++++++++
function gameLoop() {
    stats.begin(); // Begin metering
    
    currentStateFunction.update(); // update current state

    if (stateChanged) {
        changeState(currentState); // change state function call
    }
  
    stage.update(); // Refreshes our stage
    stats.end(); // End metering
}

// Our Game Kicks off in here
function changeState(state: number) {

    stateChanged = false;
    switch (state) {
        case constants.MENU_STATE:
            // Instantiate Menu State
            menu = new states.Menu();
            currentStateFunction = menu;
            break;

        case constants.INSTRUCITON_STATE:
            instruction = new states.Instruction();
            currentStateFunction = instruction;
            break;

        case constants.PLAY_STATE:
            // Instantiate Play State
            play = new states.Play();
            currentStateFunction = play;
            break;

        case constants.SELECT_PLAYER_STATE:
            // Instantiate Play State
            selectPlayer = new states.PlayerSelect;
            currentStateFunction = selectPlayer;
            break;
            
        case constants.DIFFICULTY_LEVEL_STATE:
            // Instantiate Play State
            difficultyLevel = new states.DifficultyLevel;
            currentStateFunction = difficultyLevel;
            break;
            

        case constants.GAME_OVER_STATE:
            // Instantiate Game Over State
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }

}

