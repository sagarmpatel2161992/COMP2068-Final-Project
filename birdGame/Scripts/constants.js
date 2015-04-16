/// <reference path="game.ts" />
var constants;
(function (constants) {
    // variable for font property
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "Consolas";
    constants.FONT_COLOUR = "#8C001A";
    // variable for screen adjustment
    constants.SCREEN_WIDTH = 640;
    constants.SCREEN_HEIGHT = 480;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.BACKGROUND_RESET_WIDTH = 640;
    // player variable
    constants.MONEY_NUM = 1;
    constants.PLAYER_LIVES = 5;
    constants.ENEMY_NUM = 3;
    constants.PLAYER1 = 1;
    constants.PLAYER2 = 2;
    // difficulty variable
    constants.EASY = 1;
    constants.MEDIUM = 2;
    constants.HIGH = 3;
    // States Constants
    constants.MENU_STATE = 0;
    constants.INSTRUCITON_STATE = 1;
    constants.SELECT_PLAYER_STATE = 2;
    constants.DIFFICULTY_LEVEL_STATE = 3;
    constants.PLAY_STATE = 4;
    constants.GAME_OVER_STATE = 5;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map