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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // private enemy:objects.Enemy;
        // private enemies:objects.Enemy[];
        // private enemyNum:number;
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.playerShots = new Array();
            objects.Game.KeyA = false;
            objects.Game.KeyS = false;
            objects.Game.KeyD = false;
            // this.enemy = new objects.Enemy(this.assetManager);
            // this.enemies = new Array<objects.Enemy>();
            // this.enemyNum = 5;
            // for(let i = 0; i < this.enemyNum; i++) {
            //     this.enemies[i] = new objects.Enemy(this.assetManager);
            // }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            // this.enemies.forEach(e => {
            //     e.Update();
            // })
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            // this.enemies.forEach(e => {
            //     this.addChild(e);
            // })
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map