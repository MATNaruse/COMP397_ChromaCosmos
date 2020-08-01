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
        // Variables
        // Constructor
        function LevelOne(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            managers.Levels.LevelOne = _this;
            _this.Start();
            return _this;
        }
        // Methods
        LevelOne.prototype.Start = function () {
            _super.prototype.Start.call(this);
            console.log("[LevelOne]:Start()-> Start!");
            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        };
        LevelOne.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        LevelOne.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        // Protected Methods
        LevelOne.prototype.CheckWin = function () {
        };
        LevelOne.prototype.SpawnAliens = function () {
        };
        return LevelOne;
    }(scenes.LevelBase));
    scenes.LevelOne = LevelOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelOne.js.map