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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background();
            // this.gameLogo = new objects.HUDItem("gameLogo", managers.Game.canvasW/2, 240);
            this.gameLogo = new objects.StaticDisplayItem("gameLogo", managers.Game.canvasW / 2, 240);
            this.music = createjs.Sound.play("musicMain").setVolume(2);
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.MenuButton("Start", managers.Game.canvasW / 2, 380, true);
            this.instructButton = new objects.MenuButton("Instructions", managers.Game.canvasW / 2, 460, true);
            this.Main();
        };
        StartScene.prototype.Update = function () { };
        StartScene.prototype.Main = function () {
            var _this = this;
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.gameLogo);
            this.addChild(this.startButton);
            this.addChild(this.instructButton);
            this.startButton.on("click", function () {
                _this.music.destroy();
                managers.Game.currentScene = config.Scene.LVL_ONE;
                // managers.Game.currentScene = config.Scene.CS_START_LVLONE; //DEBUG: Disabled Cutscene for now
            });
            this.instructButton.on("click", function () {
                _this.music.destroy();
                managers.Game.currentScene = config.Scene.INSTRUCT;
            });
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map