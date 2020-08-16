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
    var LevelOne = /** @class */ (function (_super) {
        __extends(LevelOne, _super);
        // Constructor
        function LevelOne(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.levelName = "Level One";
            managers.Levels.LevelOne = _this;
            managers.Game.Score = 0;
            _this.Start();
            return _this;
        }
        // Public Methods
        LevelOne.prototype.Start = function () {
            console.log("[LevelOne]:Start()-> Start!");
            this.music = createjs.Sound.play("musicLvlOne").setVolume(2);
            _super.prototype.Start.call(this);
            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        };
        // Protected Methods
        LevelOne.prototype.CheckWin = function () {
            if (this.aliens.length == 0) {
                this.music.destroy();
                // managers.Game.currentScene = config.Scene.LVL_TWO;
                managers.Game.currentScene = config.Scene.CS_LVLONE_LVLTWO;
            }
        };
        LevelOne.prototype.SpawnAliens = function () {
            this.fleetGen.GenerateStaticWaves(managers.AlienGenerator2.TestStaticWave);
        };
        return LevelOne;
    }(scenes.LevelBase));
    scenes.LevelOne = LevelOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelOne.js.map