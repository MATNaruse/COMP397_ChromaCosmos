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
    var LevelTwo = /** @class */ (function (_super) {
        __extends(LevelTwo, _super);
        // Variables
        // Constructor
        function LevelTwo(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.levelName = "Level Two";
            managers.Levels.LevelTwo = _this;
            _this.Start();
            return _this;
        }
        // Public Methods
        LevelTwo.prototype.Start = function () {
            console.log("[LevelTwo]:Start()-> Start!");
            this.music = createjs.Sound.play("musicLvlTwo").setVolume(2);
            _super.prototype.Start.call(this);
            this.player = managers.Game.PlayerEntity; // Carrying over Player Health from Previous Level
            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        };
        // Protected Methods
        LevelTwo.prototype.CheckWin = function () {
            if (this.aliens.length == 0) {
                this.music.destroy();
                console.log("SCORE:" + managers.Game.Score + " * HEALTH:" + managers.Game.PlayerEntity.Health + " = " + (managers.Game.Score * managers.Game.PlayerEntity.Health));
                managers.Game.Score *= managers.Game.PlayerEntity.Health;
                // managers.Game.currentScene = config.Scene.OVER;
                managers.Game.currentScene = config.Scene.CS_LVLTWO_OVER;
            }
        };
        LevelTwo.prototype.SpawnAliens = function () {
            // this.fleetGen.GenerateWaves(3, 6, false);
            // this.fleetGen.GenerateWaves(1, 1, false);
            this.fleetGen.GenerateRandomWaves(1, 6, false);
            // this.fleetGen.DeployWaves();
        };
        return LevelTwo;
    }(scenes.LevelBase));
    scenes.LevelTwo = LevelTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelTwo.js.map