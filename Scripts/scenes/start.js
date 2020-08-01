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
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("Chroma Cosmos!", "60px", "Arial Black", "#FFFFFF", managers.Game.canvasW / 2, 240, true);
            var instruct = "Defeat all the Aliens by matching colours!\nUse the mouse to move and Click to fire\nUse a combination of A, S, and D to match the colours";
            this.instructions = new objects.Label(instruct, "32px", "Arial", "#fff", managers.Game.canvasW / 2, 270);
            this.instructions.x -= 300; //Temporary Manual Adjustment
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.MenuButton("Start", managers.Game.canvasW / 2, 380, true);
            this.overButton = new objects.MenuButton("Skip to Game Over Screen", managers.Game.canvasW / 2, 460, true);
            this.Main();
        };
        StartScene.prototype.Update = function () { };
        StartScene.prototype.Main = function () {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.instructions);
            this.addChild(this.startButton);
            this.addChild(this.overButton);
            this.startButton.on("click", this.startButtonClick);
            this.overButton.on("click", this.overButtonClick);
        };
        StartScene.prototype.startButtonClick = function () {
            managers.Game.currentScene = config.Scene.LVL_ONE;
        };
        StartScene.prototype.overButtonClick = function () {
            managers.Game.currentScene = config.Scene.OVER;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map