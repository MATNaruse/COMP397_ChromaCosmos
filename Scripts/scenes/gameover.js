var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            // Initialize our variables
            var gameOverMsg = managers.Game.PlayerLose ? "Game Over!" : "Success!";
            if (managers.Game.PlayerLose) {
                this.music = createjs.Sound.play("musicLose").setVolume(2);
            }
            else {
                this.music = createjs.Sound.play("musicWin").setVolume(2);
            }
            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel = new objects.Label(gameOverMsg, "40px", "Consolas", "#FFFFFF", managers.Game.canvasW / 2, 240, true);
            this.scoreLabel = new objects.Label("Your Score: " + managers.Game.Score, "40px", "Consolas", "#FFFFFF", managers.Game.canvasW / 2, 200, true);
            this.backButton = new objects.MenuButton("Start Again?", managers.Game.canvasW / 2, 300, true);
            this.startButton = new objects.MenuButton("Main Menu", managers.Game.canvasW / 2, 400, true);
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.addChild(this.startButton);
            this.addChild(this.scoreLabel);
            this.backButton.on("click", this.backButtonClick);
            this.startButton.on("click", this.startButtonClick);
        };
        GameOverScene.prototype.backButtonClick = function () {
            if (this.music != null)
                this.music.destroy();
            managers.Game.currentScene = config.Scene.LVL_ONE;
        };
        GameOverScene.prototype.startButtonClick = function () {
            if (this.music != null)
                this.music.destroy();
            managers.Game.currentScene = config.Scene.START;
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map